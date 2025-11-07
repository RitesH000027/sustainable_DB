const { AthenaClient, StartQueryExecutionCommand, GetQueryExecutionCommand, GetQueryResultsCommand } = require('@aws-sdk/client-athena');
const { S3Client } = require('@aws-sdk/client-s3');

// AWS Configuration for SDK v3
const awsConfig = {
  region: process.env.AWS_REGION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  }
};

// Initialize AWS SDK v3 clients
const athenaClient = new AthenaClient(awsConfig);
const s3Client = new S3Client(awsConfig);

// Athena configuration
const athenaConfig = {
  database: process.env.AWS_ATHENA_DATABASE,
  workgroup: process.env.AWS_ATHENA_WORKGROUP || 'primary',
  outputLocation: process.env.AWS_ATHENA_OUTPUT_LOCATION
};

// Custom Athena query function using AWS SDK v3
const executeAthenaQuery = async (queryString) => {
  try {
    // Start query execution
    const startCommand = new StartQueryExecutionCommand({
      QueryString: queryString,
      QueryExecutionContext: {
        Database: athenaConfig.database
      },
      ResultConfiguration: {
        OutputLocation: athenaConfig.outputLocation
      },
      WorkGroup: athenaConfig.workgroup
    });

    const startResult = await athenaClient.send(startCommand);
    const queryExecutionId = startResult.QueryExecutionId;

    // Wait for query to complete
    let queryStatus = 'RUNNING';
    while (queryStatus === 'RUNNING' || queryStatus === 'QUEUED') {
      await new Promise(resolve => setTimeout(resolve, 1000)); // Wait 1 second
      
      const statusCommand = new GetQueryExecutionCommand({
        QueryExecutionId: queryExecutionId
      });
      
      const statusResult = await athenaClient.send(statusCommand);
      queryStatus = statusResult.QueryExecution.Status.State;
      
      if (queryStatus === 'FAILED' || queryStatus === 'CANCELLED') {
        throw new Error(`Query ${queryStatus}: ${statusResult.QueryExecution.Status.StateChangeReason}`);
      }
    }

    // Get query results
    const resultsCommand = new GetQueryResultsCommand({
      QueryExecutionId: queryExecutionId
    });
    
    const resultsResponse = await athenaClient.send(resultsCommand);
    
    // Format results similar to athena-express
    const rows = resultsResponse.ResultSet.Rows;
    const columns = rows[0].Data.map(col => col.VarCharValue);
    
    const formattedResults = rows.slice(1).map(row => {
      const obj = {};
      row.Data.forEach((data, index) => {
        obj[columns[index]] = data.VarCharValue;
      });
      return obj;
    });

    return {
      Items: formattedResults,
      Count: formattedResults.length,
      QueryExecutionId: queryExecutionId
    };
    
  } catch (error) {
    console.error('Athena query error:', error);
    throw error;
  }
};

// Backward compatibility object
const athenaExpress = {
  query: async (config) => {
    return await executeAthenaQuery(config.sql);
  }
};

module.exports = {
  athenaExpress,
  athenaClient,
  s3Client,
  athenaConfig,
  executeAthenaQuery
};
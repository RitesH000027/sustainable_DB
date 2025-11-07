// Load environment variables
require('dotenv').config();

const { executeAthenaQuery } = require('./config/athena');

async function listTables() {
  try {
    console.log('Connecting to Athena database:', process.env.AWS_ATHENA_DATABASE);
    
    const query = `SHOW TABLES IN ${process.env.AWS_ATHENA_DATABASE}`;
    console.log('Executing query:', query);
    
    const result = await executeAthenaQuery(query);
    
    console.log('\n=== Available Tables ===');
    result.Items.forEach((row, index) => {
      console.log(`${index + 1}. ${Object.values(row)[0]}`);
    });
    
    console.log(`\nTotal tables found: ${result.Count}`);
    
  } catch (error) {
    console.error('Error listing tables:', error.message);
  }
}

listTables();
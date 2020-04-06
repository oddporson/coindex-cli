const program = require('commander');

program 
  .command('price')
  .description('Check price of coins')
  .action(() => console.log('Hello from price'));

program.parse(process.argv);

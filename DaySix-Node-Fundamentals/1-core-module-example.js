// Import Core Module:
const os = require('os');

// Access Properties and Methods Core Module:
console.log(`Host Name : ` + os.hostname());
console.log(`Total Memory : ` + os.totalmem());
console.log(`Free memory : ` + os.freemem());
console.log(`Home Directory : ` + os.homedir());
console.log(`OS Type : ` + os.type());
console.log(`Logged In User Name : ` + os.userInfo().username);
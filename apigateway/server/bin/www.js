const app = require('../app');
const config = require('../config');

const log = require('../logging');

const port = config.WWW_PORT;

// app.listen(port, () => {
//   //console.log(`API Gateway App is listening to ${port}`);
// })

const server = require('http').createServer(app);

server.listen(port, () => {
  log.info(`Server is running on port ${port}`);
});
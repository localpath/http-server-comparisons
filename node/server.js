'use strict'

const fastify = require('fastify')();

fastify.get('/', function (req, reply) {
  reply.send('Hello from Node.js!');
});

fastify.listen(8083, '0.0.0.0', function (err, address) {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }
  console.log(`Server listening at: ${address}`);
});
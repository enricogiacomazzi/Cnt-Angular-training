
import Fastify from 'fastify';
import fastifyWebsocket from '@fastify/websocket'; 
const app = Fastify({ logger: true });

await app.register(fastifyWebsocket);

app.decorate('broadcast', msg => {
    for(const c of app.websocketServer.clients) {
        c.send(msg);
    }
});

app.get('/', async (request, reply) => {
  return { hello: 'world' }
});

app.get('/ws/:id', {websocket: true}, (connection, request) => {
    const sender = request.params.id;
    connection.socket.on('message', message => {
        const payload = JSON.stringify({ 
            sender, 
            message: message.toString('utf-8'),
            timestamp:  new Date().getTime()
        });
        app.broadcast(payload);
      });
});

await app.listen({ port: 3000 });
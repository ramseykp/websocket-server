import { WebSocket, WebSocketServer } from "ws";

const port = 1234;
 
const wss = new WebSocketServer({port});

wss.on('connection', (ws) => {
    // handles new connection

    ws.on('message', (data) => {
        console.log(`receive mesage from client ${data}`)
    });

    ws.send('hey this is the server');

})

console.log(`listening on port : ${port}`);
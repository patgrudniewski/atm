import { create as createRouter } from './router';

import http from 'http';

const port = 3000;
const server = http.createServer(createRouter());

server.listen(port, () => {
    console.log(`API server is running on port ${port}`);
});

import { handler as bodyParserHandler } from './bodyParser';
import { handler as corsHandler } from './cors';

import { Router } from 'express';

type Middleware = ((router: Router) => void);

export const apply = (middlewares: Middleware[], router: Router) => {
    for (const middleware of middlewares) {
        middleware(router);
    }
};

export default [bodyParserHandler, corsHandler];

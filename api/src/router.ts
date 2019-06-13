import { apply as applyControllers } from './controller';
import { get as getUserBalanceRoute } from './controller/userBalance';
import middlewares, { apply as applyMiddlewares } from './middleware';

import express from 'express';

export const create = () => {
    const router = express();
    applyMiddlewares(middlewares, router);
    applyControllers([
    ], router);

    return router;
};

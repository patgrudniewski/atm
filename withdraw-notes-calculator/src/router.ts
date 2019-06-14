import { apply as applyControllers } from './controller';
import { calculate as calculateRoute } from './controller/calculator';
import middlewares, { apply as applyMiddlewares } from './middleware';

import express from 'express';

export const create = () => {
    const router = express();
    applyMiddlewares(middlewares, router);
    applyControllers([
        calculateRoute,
    ], router);

    return router;
};

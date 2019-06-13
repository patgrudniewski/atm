import { apply as applyControllers } from './controller';
import { getSingle as getAtmRoute, put as putAtmRoute } from './controller/atm';
import { getSingle as getUserRoute, put as putUserRoute } from './controller/user';
import middlewares, { apply as applyMiddlewares } from './middleware';

import express from 'express';

export const create = () => {
    const router = express();
    applyMiddlewares(middlewares, router);
    applyControllers([
        getAtmRoute,
        putAtmRoute,
        getUserRoute,
        putUserRoute,
    ], router);

    return router;
};

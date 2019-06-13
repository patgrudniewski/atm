import { ResponseException } from '../exception/response';

import { Request, Response, Router } from 'express';

type Handler = (request: Request) => Promise<any>;

type Route = {
    path: string,
    method: string,
    handler: Handler,
};

export const apply = (routes: Route[], router: Router) => {
    for (const route of routes){
        const { path, method, handler } = route;
        (router as any)[method.toLowerCase()](path, async (request: Request, response: Response) => {
            try {
                const result = await handler(request);
                response.json(result);
            } catch (ex) {
                if (ex instanceof ResponseException) {
                    response.status(ex.getStatus());
                    response.json(ex.message);
                } else {
                    response.status(500);
                    response.json('Internal server error');
                }
            }

        });
    }
};

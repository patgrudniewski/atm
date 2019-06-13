import { Request } from 'express';

const getSingleHandler = async (request: Request) => {
    return {
        balance: 99999999999.99, // @TODO implement database
    };
};

const putHandler = async (request: Request) => {
    // @TODO implement database and return value
};

export const getSingle = {
    path: '/user/:id',
    method: 'GET',
    handler: getSingleHandler,
};

export const put = {
    path: '/user/:id',
    method: 'PUT',
    handler: putHandler,
};

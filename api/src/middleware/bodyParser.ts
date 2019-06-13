import { json } from 'body-parser';
import { Router } from 'express';

export const handler = (router: Router) =>
    router.use(json());

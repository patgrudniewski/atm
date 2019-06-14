import cors from 'cors';
import { Router } from 'express';

export const handler = (router: Router) =>
    router.use(cors());

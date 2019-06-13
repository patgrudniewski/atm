import { getSingle } from './user';

import { Request } from 'express';

test('getSingleHandler returns balance', async () => {
    expect(await getSingle.handler(<Request>{})).toHaveProperty('balance'); 
});

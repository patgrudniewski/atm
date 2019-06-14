import { getSingle, put } from './atm';
import { BadRequestException, ForbiddenException } from '../exception/response';

import { Request } from 'express';

test('getSingleHandler returns notes', async () => {
    expect(await getSingle.handler(<Request>{})).toHaveProperty('notes');
});

test('putHandler throws ForbiddenException when any of putted notes has bigger amount than actual one', async () => {
    const currentState = await getSingle.handler(<Request>{});
    const noteValue = Object.keys(currentState.notes)[0];

    expect(put.handler(<Request>{
        body: {
            notes: {
                ...currentState.notes,
                10: currentState.notes[10] + 1,
            },
        },
    })).rejects.toThrow(new ForbiddenException('User not allowed to add cash to the machine'));
});

test('putHandler throws BadRequestException when non-existing note putted', () => {
    expect(put.handler(<Request>{
        body: {
            notes: {
                2: 26,
            },
        },
    })).rejects.toThrow(new BadRequestException('Cannot modify state of non-existing note'));
});

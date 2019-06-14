import { calculate } from './calculator';
import { BadRequestException, ConflictException } from '../exception/response';

import { Request } from 'express';

test('calculateNotesHandler throws BadRequestException if amount is not a number', () => {
    expect(calculate.handler(<Request>{
        params: { amount: 'foo' },
    })).rejects.toThrow(new BadRequestException('Invalid amount'));
});

test('calculateNotesHandler throws BadRequestException if amount is lower than zero', () => {
    expect(calculate.handler(<Request>{
        params: { amount: -100 },
    })).rejects.toThrow(new BadRequestException('Invalid amount'))
});

test('calculateNotesHandler returns list of notes if it\'s possible to withdraw', async () => {
    let data = [
        [[100, 50, 20, 10], 180],
        [[100, 50, 20, 20], 190],
        [[100, 100], 200],
    ];

    for (let [expected, amount] of data) {
        expect(await calculate.handler(<Request>{
            params: { amount },
        })).toEqual(expected);
    }
});

test('calculateNotesHandler throws ConflictException if it\'s not possible to withdraw', () => {
    let data = [1, 2, 3, 5, 8];

    for (let amount of data) {
        expect(calculate.handler(<Request>{
            params: { amount },
        })).rejects.toThrow(new ConflictException('Unable to pay requested amount'));
    }
});

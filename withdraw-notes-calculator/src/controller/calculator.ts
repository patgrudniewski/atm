import { BadRequestException, ConflictException } from '../exception/response';

import { Request } from 'express';

const notes = [ 10, 20, 50, 100 ]; // @TODO connect to the database

const calculateNotesHandler = async (request: Request) => {
    const sorted = notes.sort((a, b) => a < b ? 1 : -1);
    let amount: number = +request.params.amount;
    let calculated = [];

    if (isNaN(amount) || 0 > amount) {
        throw new BadRequestException('Invalid amount');
    }

    while (amount) {
        const nextNote = sorted.find((note) => note <= amount);
        if (nextNote) {
            amount -= nextNote;
            calculated.push(nextNote);
        } else {
            throw new ConflictException('Unable to pay requested amount');
        }
    }

    return calculated;
};

export const calculate = {
    path: '/calculate/:amount',
    method: 'GET',
    handler: calculateNotesHandler,
};

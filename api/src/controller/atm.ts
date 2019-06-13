import { BadRequestException, ForbiddenException } from '../exception/response';
import { Notes } from '../model/atm';
import AtmRepository from '../repository/atm';

import { Request } from 'express';

const getSingleHandler = async (request: Request) => {
    const atm = AtmRepository.find(1);

    return {
        notes: atm.getNotes(),
    }
};

const putHandler = async (request: Request) => {
    // @TODO verify if request payload is valid
    const atm = AtmRepository.find(1);
    const notes: Notes = request.body.notes;

    for (const note in notes) {
        if (!(note in atm.getNotes())) {
            throw new BadRequestException('Cannot modify state of non-existing note');
        } else if (atm.getNotes()[note] < request.body.notes[note]) {
            throw new ForbiddenException('User not allowed to add cash to the machine');
        }
    }

    // @TODO update database
};

export const getSingle = {
    path: '/atm/:id',
    method: 'GET',
    handler: getSingleHandler,
};

export const put = {
    path: '/atm/:id',
    method: 'PUT',
    handler: putHandler,
};

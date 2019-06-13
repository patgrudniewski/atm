export type Notes = { [value: number]: number; };

export default class Atm {
    private notes: Notes;

    constructor ({ notes }: { notes: Notes }) {
        this.notes = notes;
    }

    public getNotes(): Notes {
        return this.notes;
    }
}

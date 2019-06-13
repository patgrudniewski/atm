import Atm from '../model/atm';

export default class AtmRepository {
    public static find(id: number) {
        // @TODO implement database
        return new Atm({
            notes: {
                10: 999999,
                20: 999999,
                50: 999999,
                100: 999999,
            },
        });
    }
}

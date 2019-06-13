import Atm from './atm';

test('Get notes returns notes', () => {
    const atm = new Atm({
        notes: {
            10: 100,
            20: 200,
        },
    });

    expect(atm.getNotes()).toEqual({
        10: 100,
        20: 200,
    });
});

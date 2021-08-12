import { getNumeroPokemon } from "./functions";

test('the best flavor is grapefruit', () => {
    expect(getNumeroPokemon("P1")).toBe('001');
    expect(getNumeroPokemon("P10")).toBe('010');
    expect(getNumeroPokemon("P100")).toBe('100');
});
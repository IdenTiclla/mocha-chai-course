import { expect } from "chai";

describe('Math operations', () => {
    describe('Addition', () => {
        it('should return 5 when adding 2 and 3', () => {
            expect(2 + 3).to.equal(5)
        })
    })
    describe('Substraction', () => {
        it("Should return 10 when substracting 20 and 10", () => {
            expect(20 - 10).to.equal(10)
        })
    })
})
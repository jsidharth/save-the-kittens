import findLocation from "../src/findLocation.js";

describe('Testing the findLocation calculation', () => {
    it('Should error when no directions are given', () => {
        expect(findLocation).toThrow('No directions recevied. Exiting!!')
    });
    it('Should error when empty directions are given', () => {
        expect(() => findLocation([])).toThrow('No directions recevied. Exiting!!')
    });
    it('Should error when invalid direction present in directions', () => {
        const directions = ['forward', 'left', 'right', 'down'];
        expect(() => findLocation(directions)).toThrow('Encountered an invalid direction. Exiting!!')
    });
    it('Should not return (3,4) for when directions from forensic API given', () => {
        const directions = ["forward","right","forward","forward","forward","left","forward","forward","left","right","forward","right","forward","forward","right","forward","forward","left"];
        expect(findLocation(directions)).not.toEqual({x:3, y:4})
    });
    it('Should return (5,2) for when directions from forensic API given', () => {
        const directions = ["forward","right","forward","forward","forward","left","forward","forward","left","right","forward","right","forward","forward","right","forward","forward","left"];
        expect(findLocation(directions)).toEqual({x:5, y:2})
    });
    it('Should return (-2,2) for given input', () => {
        const directions = ["forward","left","forward","right","forward","left","left","right","forward","right"];
        expect(findLocation(directions)).toEqual({x:-2, y:2})
    });
    it('Should return (3,3) for given input', () => {
        const directions = ["right","forward","forward","left","forward","right","forward","left","forward","forward"];
        expect(findLocation(directions)).toEqual({x:3, y:3})
    });
    it('Should return (-4,0) for given input', () => {
        const directions = ["left","forward","right","left","forward","left","right","forward","forward","left", "right", "left"];
        expect(findLocation(directions)).toEqual({x:-4, y:0})
    });
    it('Should return (2,-3) for given input', () => {
        const directions = ["left","right","right","right","forward","left","forward","right", "left", "right","forward","forward","left","forward"];
        expect(findLocation(directions)).toEqual({x:2, y:-3})
    });
});


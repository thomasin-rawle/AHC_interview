let expect = require('chai').expect
let {generateLyrics} = require('../generateLyrics');

describe('generateLyrics', () => {
    let noBottles = 'No bottlesh of beer on the wall, no bottlesh of beer. Go to the shtore, by some more, 99 bottlesh of beer on the wall. '
    let oneBottle = '1 bottle of beer on the wall, 1 bottle of beer, you take one down, passh it around, no more bottles of beer on the wall. '
   

    it('should output one line of the lyric when the number is one', () => {
        expect(generateLyrics(0)).to.equal(noBottles)
    });
    it('should output correct lines for one bottle', () => {
        expect(generateLyrics(1)).to.equal(oneBottle + noBottles)
    });
    it('should output list of slurred lines for less than 50', () => {
        expect(generateLyrics(2).slice(0,1)).to.equal('2')
        expect(generateLyrics(49).slice(0,2)).to.equal('49')
    });
    it('should output list of sober lyrics + slurred ones for number over 50', () => {
        expect(generateLyrics(99).split(' ').slice(1, 2).join(' ')).to.equal('bottles')
    });
});
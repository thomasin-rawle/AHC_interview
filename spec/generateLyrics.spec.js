let expect = require('chai').expect
let {generateLyrics} = require('../generateLyrics');

describe('generateLyrics', () => {
    let noBottles = 'No bottlesh of beer on the wall, no bottlesh of beer. Go to the shtore, by some more, 99 bottlesh of beer on the wall. '
    let oneBottle = '1 bottle of beer on the wall, 1 bottle of beer, you take one down, passh it around, no more bottles of beer on the wall. '
    // let bottles = `${num} bottle${bottleSlur} of beer on the wall, ${num} bottle${bottleSlur} of beer, you take one down, pass${passSlur} it around, ${num-1} bottles ${bottleSlur} of beer on the wall.`
    // let num = 2
    // const bottleSlur = (num <= 50) ? 'sh' : ''
    // const passSlur = (num <= 50) ? 'sh' : ''

    it('should output one line of the lyric when the number is one', () => {
        expect(generateLyrics(0)).to.equal(noBottles)
    });
    it('should output correct lines for one bottle', () => {
        expect(generateLyrics(1)).to.equal(oneBottle + noBottles)
    });
    // it('should output list of slurred lines for less than 50', () => {
    //     //expect(generateLyrics(2)).to.equal(oneBottle + noBottles)
    //     expect(generateLyrics(49)).to.equal(oneBottle + noBottles)
    // });
    it('should output list of sober lyrics + slurred ones for number over 50', () => {
        expect(generateLyrics(99)).to.equal(oneBottle + noBottles)
    });
});
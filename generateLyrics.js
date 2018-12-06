function generateLyrics (num) {

    const bottleSlur = (num <= 50) ? 'h' : ''
    const passSlur = (num <= 50) ? 'h' : ''

    let noBottles = 'No bottlesh of beer on the wall, no bottlesh of beer. Go to the shtore, by some more, 99 bottlesh of beer on the wall. '
    let oneBottle = '1 bottle of beer on the wall, 1 bottle of beer, you take one down, passh it around, no more bottles of beer on the wall. '
    let bottles = `${num} bottles${bottleSlur} of beer on the wall, ${num} bottles${bottleSlur} of beer, you take one down, pass${passSlur} it around, ${num-1} bottles${bottleSlur} of beer on the wall. `
    
    if (num === 0) return noBottles
    if (num === 1) return oneBottle + generateLyrics(num - 1)
    else return bottles + generateLyrics(num - 1)
    
}
module.exports = {generateLyrics};
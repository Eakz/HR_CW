// https://www.codewars.com/kata/59bd84b8a0640e7c49002398/train/javascript

function tArea(tStr) {
    const side = tStr.split('\n').length - 3
    return (side * side) / 2
  }


console.log (tArea('\n.\n. .\n. . .\n. . . .\n. . . . .\n. . . . . .\n. . . . . . .\n. . . . . . . .\n. . . . . . . . .\n'), 32)

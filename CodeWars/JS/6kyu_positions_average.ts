https://www.codewars.com/kata/59f4a0acbee84576800000af/train/typescript

export function posAverage(s: string): number {
    let counter = 0, combinations = 0;
    const array = s.split(', '), len = array[0].length;
    for (let i = 0; i < array.length; i++) {
      for (let j = i + 1; j < array.length; j++) {
        combinations++;
        for (let k = 0; k < len; k++) {
          if (array[i][k] === array[j][k]) counter++;
        }
      }
    }
    return (counter / (combinations * len)) * 100;
  }
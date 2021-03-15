// https://www.codewars.com/kata/567501aec64b81e252000003/train/javascript

const wallpaper = (l, w, h) =>
  [`zero`, `one`, `two`, `three`, `four`, `five`, `six`, `seven`, `eight`, `nine`, `ten`, `eleven`, `twelve`, `thirteen`, `fourteen`, `fifteen`, `sixteen`, `seventeen`, `eighteen`, `nineteen`, `twenty`]
    [l && w ? Math.ceil(2 * (l + w) * h / 5.2 * 1.15) : 0];
    
console.log(wallpaper(6.3, 4.5, 3.29), "sixteen");
console.log(wallpaper(7.8, 2.9, 3.29), "sixteen");
console.log(wallpaper(6.3, 5.8, 3.13), "seventeen");
console.log(wallpaper(6.1, 6.7, 2.81), "sixteen");

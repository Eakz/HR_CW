// https://www.codewars.com/kata/5846174c5955406d02000b59/train/javascript

const fourSeasons = d => {
    switch (true) {
        case (d >= 355 && d <= 365) || d <= 80:
            return "Winter Season";
        case d > 80 && d < 170:
            return "Spring Season";
        case d >= 170 && d < 260:
            return "Summer Season";
        case d >= 260 && d < 355:
            return "Autumn Season";
        default:
            return "The year flew by!";
    }
};

console.log(fourSeasons(236), "Summer Season");
console.log(fourSeasons(149), "Spring Season");
console.log(fourSeasons(280), "Autumn Season");
console.log(fourSeasons(70), "Winter Season");

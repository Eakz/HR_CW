// https://www.codewars.com/kata/5bce125d3bb2adff0d000245/train/javascript

function londonCityHacker(journey) {
    let fixed;
    journey.forEach((a,i)=>{
        let fixed;
        // Get rid of doubles
        if(typeof a === 'number' && typeof journey[i-1] === 'number' && !fixed){
            journey.splice(i,1);
            fixed=true;
        }else{
            fixed=false;
        }
    })
    // Mapping price to an element IF array exists (length>0)
    return `£${journey.length>0?journey.map(a=>typeof a === 'string'?2.4:1.5).reduce((acc,n)=>acc+n).toFixed(2):'0.00'}`;
}
// tube 2.40, bus 1.50
console.log(londonCityHacker([12, "Central", "Circle", 21])); // "£7.80");
console.log(londonCityHacker(["Piccidilly", 56])); // "£3.90");
console.log(londonCityHacker(["Northern", "Central", "Circle"])); // "£7.20");
console.log(londonCityHacker(["Piccidilly", 56, 93, 243])); // "£5.40");
console.log(londonCityHacker([386, 56, 1, 876])); // "£3.00");
console.log(londonCityHacker([])); // "£0.00");
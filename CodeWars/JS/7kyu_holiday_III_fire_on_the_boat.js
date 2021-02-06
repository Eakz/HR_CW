// https://www.codewars.com/kata/57e8fba2f11c647abc000944/train/javascript

function fireFight(s){
    return s.replace(/Fire/g,'~~')
}

// console.log(fireFight("Boat Rudder Mast Boat Hull Water Fire Boat Deck Hull Fire Propeller Deck Fire Deck Boat Mast"), "Boat Rudder Mast Boat Hull Water ~~ Boat Deck Hull ~~ Propeller Deck ~~ Deck Boat Mast");
console.log(fireFight("Mast Deck Engine Water Fire"), "Mast Deck Engine Water ~~");
// console.log(fireFight("Fire Deck Engine Sail Deck Fire Fire Fire Rudder Fire Boat Fire Fire Captain"), "~~ Deck Engine Sail Deck ~~ ~~ ~~ Rudder ~~ Boat ~~ ~~ Captain");

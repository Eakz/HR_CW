// https://www.codewars.com/kata/57d1f36705c186d018000813/train/javascript

gordon = s=>s.split(' ').map(e=>e.toUpperCase().replace(/A/g,'@').replace(/[AOUIE]{1}/g,'*')+'!!!!').join(' ')
console.log(gordon('What feck damn cake'), 'WH@T!!!! F*CK!!!! D@MN!!!! C@K*!!!!');
console.log(gordon('are you stu pid'), '@R*!!!! Y**!!!! ST*!!!! P*D!!!!'); 
console.log(gordon('i am a chef'), '*!!!! @M!!!! @!!!! CH*F!!!!'); 

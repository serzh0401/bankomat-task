//REQUIREMENTS:
// 1. Always deliver the lowest number of possible notes;
// 2. It's possible to get the amount requested with available notes;
// 3. The client balance is infinite;
// 4. Amount of notes is infinite;
// 5. Available notes 100, 50, 20 10


let bank = [100 , 50 , 20 , 10];
let sum = 780;
let arrResalt = [];

  for(i = 0;i < bank.length;i ++){
while(sum > bank[i] > 0 || sum == bank[i] ){
arrResalt.push(sum -(sum - bank[i]) )
let b = sum - bank[i];
[sum]=[b]
}
 }

console.log(arrResalt)
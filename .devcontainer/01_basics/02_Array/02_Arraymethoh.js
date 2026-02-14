const marvel_heros=["thor", "ironman","spiedrman"]
const dc_heros=["superman","flash","batman"]

marvel_heros.push(dc_heros);//[ 'thor', 'ironman', 'spiedrman', [ 'superman', 'flash', 'batman' ] ]

console.log(marvel_heros);
console.log(marvel_heros[3][1]);


const allhero = marvel_heros.concat(dc_heros);
console.log(allhero);//[ 'thor', 'ironman', 'spiedrman', 'superman', 'flash', 'batman ]


const all_new_heros=[...marvel_heros,...dc_heros];
console.log(all_new_heros)//[ 'thor', 'ironman', 'spiedrman', 'superman', 'flash', 'batman ]


const another_array=[1,2,3,[4,5,6],7,[6,7,[4,5]]];

const real_another_array=another_array.flat(Infinity)
console.log(real_another_array);//[1,2,3,4,5,6,7,6,7,4,5]


console.log(Array.isArray("AMANKUMAR"))//false ->check is it array or not 
console.log(Array.from("AMANKUMAR"))//->make new array ['A','B'...........'R']

console.log(Array.from({name: "Amankumar"}))// interesting case return [] empty arrray


let score1=100
let score2=200
let score3=300

console.log(Array.of(score1,score2,score3));//[ 100, 200, 300 ]
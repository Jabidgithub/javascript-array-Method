/*

// Filter method in javascript in array

const scores = [30, 5, 10, 15, 25, 55, 35];

const filtered = scores.filter(score => {
    return score > 20;
});

console.log(filtered)
console.log(scores)

// filter method in object

const users = [
    { name: 'shaun', premium: true },
    { name: 'yoshi', premium: false },
    { name: 'mario', premium: true },
    { name: 'lui-ji', premium: false },
    { name: 'chun-li', premium: true }
];
const premiumUsers = users.filter(user =>  user.premium )
console.log(premiumUsers);
console.log(users)
*/
// map method in array


/*
const prices = [20, 30, 40, 50, 25, 35, 45, 55, 65];

const SalePrices = prices.map((price) =>  price / 2);
console.log(SalePrices);
*/
/*
const products = [
    { name: 'gold star', price: 20 },
    { name: 'mushroom', price: 40 },
    { name: 'green shells', price: 50 },
    { name: 'banana skin', price: 60 },
    { name: 'red shell', price: 30 }
];
const HalfPrice = products.map(product => {
    if (product.price > 30) {
        // product.price = product.price / 2; 
        //doing this will also show exact answers but it will edit the original array
        // return product;
        return { name: product.name, price: product.price / 2 };
    }
    else {
        return product;
    }
});

console.log(HalfPrice);
console.log(products);

*/


//Reduce method

/*
const scores = ['40', '30', '70', '56', '55', '65', '75'];

const result = scores.reduce((acc, curr) => {
    if (curr > 50) {
        acc++;
    };
    return acc;
}, 0);
console.log(result);

*/

/*

const scores = [
    { player: 'mario', score: 40 },
    { player: 'yoshi', score: 50 },
    { player: 'chun li', score: 70 },
    { player: 'lui ji', score: 80 },
    { player: 'mario', score: 60 },
    { player: 'mario', score: 40 },
    { player: 'yoshi', score: 50 },
    { player: 'chun li', score: 70 },
    { player: 'lui ji', score: 80 },
    { player: 'mario', score: 60 },
    { player: 'mario', score: 40 }, 
    { player: 'yoshi', score: 50 },
    { player: 'chun li', score: 70 },
    { player: 'lui ji', score: 80 },
    { player: 'mario', score: 60 }
];

const marioTotal = scores.reduce((acc, curr) => {
    if (curr.player === 'mario') {
        acc+= curr.score;
    }
    return acc;
}, 0);


console.log(marioTotal);

*/


//find method

/*

const scores = [30, 40, 50, 30, 70, 35, 45, 65, 75];

const firstHighScores = scores.find(score => score > 40);
console.log(firstHighScores);
*/


//sorting in javascript 
/*
//example 1
const names = ['mario', 'yoshi', 'lui-ji','Jabid', 'chun-li', 'shaun'];

// const newNames = names.sort();  // map and sort arrays are distructive

// console.log(names.sort());
names.sort();
names.reverse();
console.log(names);

//example 2
const scores = ['10', '50', '30', '5', '70', '45'];

// scores.sort();

// scores.reverse();

scores.sort((a, b) => a - b);
scores.reverse();
console.log(scores);


//example 3

const players = [
    {name:'mario', score: 40 },
    {name:'luigi',score:30},  
    {name:'chun-li',score:50},  
    {name:'yoshi',score:10},  
    {name:'shaun',score:70}
];

/*
players.sort((a,b) => {
    if (a.score > b.score) {
        return -1;
    }
    else if (b.score > a.score) {
        return 1;
    }
    else {
        return 0;
    }
});



players.sort((a, b) => b.score - a.score);

console.log(players);


*/


//Chain array method



// example 1

const products = [
    { name: 'gold star', price: 20 },
    { name: 'mushroom', price: 40 },
    { name: 'green shells', price: 50 },
    { name: 'banana skin', price: 60 },
    { name: 'red shell', price: 30 }
];
/*
const filtered = products.filter(product => product.price > 20);

const promos = filtered.map(product => {
    return `The ${product.name} is ${product.price} taka.`;
});

console.log(promos); */


const promos = products
    .filter(product => product.price > 20)
    .map(product => `this ${product.name} is ${product.price} taka`);

console.log(promos);
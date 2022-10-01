//an object with 3 strings, 3 numbers, and a boolean

let myProfile = {
    username:'Jcruz227',
    bio: 'Content Creator',
    website: 'alamo.edu/nvc',
    followers: 50000,
    likes: 123984,
    videos: 6587461,
    verified: false,
};
//update a property in an object

myProfile.verified = true;

//add property to an object 
myProfile.active = true;

console.log(myProfile);


//array

const names = new Set ([
    {name:"John"},
    {name:"Jane"},
    {name:"Jill"},
    {name:"Joe"},
    {name:"Jordan"},
]);

console.log(names);


for ( const name of names) {
    if (name === "Jordan") break;
    console.log(name);
}

//Double each number by multiplying by 2.
const array = [1,2,3,4];
const newArray = array.map((item) => item * 2);

console.log(newArray);
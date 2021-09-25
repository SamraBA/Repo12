// Only change line of code below
var myPetsArray = [
    {
        animalType:"Dog",
        name:"Pujdo"
    },
    {
        animalType:"Cat",
        name:"Maca"
    },
    {
        animalType:"Bird",
        name:"Tweety"
    }
]

function myPetsFunction(pets){
    return pets.name;
}
// Only change line of code above
console.log(myPetsFunction(myPetsArray[1])); // Change this line of code
module.exports = myPetsFunction;
module.exports.myPets = myPetsArray;

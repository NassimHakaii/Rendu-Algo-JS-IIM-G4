let users = ["Stéphanie", "Gaïa", "Etienne", "Michel", "Roberto", "Julie"];

function countCharacters(value) {
    return value.length;
}

users.forEach(user => {
    if (countCharacters(user) > 5 ) {
        console.log("c/est un prénom court, avec moins de 5 lettres.");
    } else {
        console.log("ce n/est pas un prénom court.");
    }
});




var student = {
    name: "John",
    favoriteFood: "Pizza",
    city: "New York"
};

var values = Object.values(student);

function countCharacters(str) {
    return str.length;
}

var totalCharacters = 0;

values.forEach(function(value) {
    totalCharacters += countCharacters(value);
});


if (totalCharacters % 2 === 0) {
    console.log("pair");
} else {
    console.log("impair");
}





var names = [];

names.push("Vincent");
names.push("Paul");
names.push("Arthur");

names.forEach(function (name, index, array) {
    array[index] = name + " va à la pêche";
    console.log(array[index]);
});


var a = "Jean";
var b = "Paul";

var result = checkName(a, b);

function checkName(a, b) {
    if (a == b) {
        return "les deux sont identiques";
    } else {
        return "les deux ne sont pas identiques";
    }
}

console.log(result);*/








for (let i = 1; i <= 100; i++) {
    if (i % 15 === 0) {
        console.log("fizzbuzz");
    } else if (i % 3 === 0) {
        console.log("fizz");
    } else if (i % 5 === 0) {
        console.log("buzz");
    } else {
        console.log(i);
    }
}


let i = 17;

while (i <= 33) {
    if (i === 17) {
        console.log(i)
        i += 10
    } else if (i === 28) {
        i++
    } else {
        console.log(i)
        i++
    }
}

console.log("reussi");*/



let a = 4

for (let i = 0; i < a; i++) {
    console.log('oklm')
}




switch(a)
{
    case a: console.log(a == b )
    break
case b : 
console.log (a == c)
break
default :
console.log("égal à rien de rien")
}





if (a == b)
{ console.log ("c'est égal") 
}
if (c < b && a+c !=3)
{
    console.log ("ok")} 
 else{
    console.log ("c'est pas bon")
}



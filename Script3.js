console.log('Java script opdracht2')

//Deel 1 

const Age = 17; /* Voer hier je leeftijd in */

if (Age >= 18) {

    console.log('Welkom je mag naar binnen')
}

if (Age < 18) {

    console.log('Helaas je bent te jong')
}



// Deel 2 

const isFemale = false; /* true=vrouw false=anders*/

if (isFemale == true) {

    console.log('wees welkom')

}

if (isFemale == false) {

    console.log('wegwezen')
}

/*
= 
“Is”
“Ik verander deze variable naar”

== 
“Is gelijk aan”
“Ik check of x gelijk is aan y*/


//Deel 3 

const driverStatus = "Bob";  /*Andere  input dan Bob = Taxi*/

if (driverStatus == "Bert") {

    console.log('Drive safe, sweet dreams')

} else {

    console.log('Wij bellen een een taxi')
}



console.log('Comparison && Logical Operators')

//Deel 1 

const age = 18;

if (age >= 18 && age <= 25) {

    console.log('Je krijgt 50% korting!');
} else {

    console.log('Helaas jij betaald volle pond')
}


// Deel2 

const firstName = "Sarah";

if (firstName == "Sarah" || firstName == "Bram") {

    console.log('Jij krijgt een gratis biertje')
} else {

    console.log('Jij moet betalen')
}

// Deel 3 

const totalAmount = "1";


if (totalAmount >= 25 && totalAmount <= 50) {

    console.log('Gratis (vega)bitterballen')

} else if (totalAmount > 50 && totalAmount < 100) {

    console.log('Gratis portie nachos.')

} else if (totalAmount => 100) {
    console.log('Gratis flesje champagne.')

}

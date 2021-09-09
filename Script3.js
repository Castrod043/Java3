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
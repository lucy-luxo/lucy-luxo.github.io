var F, C=12;
F = C * 1.8 + 32;
console.log(F, "fahrenheit");

var signedIn;
console.log(signedIn); 
// консоль =>> undefined
console.log("Hello"%10);
// консоль =>> NaN

var number1 = 555;
if ( number1 & 1 ) {
    console.log( "нечетноe" );
} else {
console.log( "четноe" );
}

var number2 = 888;
if ( number2 & 1 ) {
    console.log( "нечетное" );
} else {
    console.log( "четное" );
}

var balance = -220, 
isActive = true,  
checkBalance = true;
if( checkBalance == false){
    console.log( "Thank you. Have a nice day!");
}else if ( isActive == true && balance > 0 ){
    console.log("Your balance is $", balance + ".");
}else if ( isActive == false){
    console.log("Your account is no longer active.");
}else if (balance == 0){
    console.log("Your account is empty");
}else{
    console.log("Your balance is negative.Please contact bank");
}
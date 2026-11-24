
let numberone = 0;
let numbertwo = 0;
let numberthree = 0;

for ( numberone = 1; numberone < 10; numberone++ ) {
for ( numbertwo = 0; numbertwo < 10; numbertwo++ ) { 
for ( numberthree = 0; numberthree < 10; numberthree++ ){
 square = ( numberone * numberone ) + ( numbertwo * numbertwo ) + ( numberthree * numberthree );
number = ( numberone * 100) + ( numbertwo * 10 ) + ( numberthree );
if ( square == number ) {
console.log(number);
}
else{
console.log("there is no number that can be equal to square");

}
}
}
}


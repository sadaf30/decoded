
//prof dawn
//modified sadaf shaikh
function setup() {
  
  var km = milesToKm(26.3);//convert miles into km
 console.log(km);
 
  
  var km2 = milesToKm(100);
  console.log(km2);
  
  // console.log(milesToKm(90));
}

function milesToKm(miles) {
  var km = miles * 1.6;
  return km;
}
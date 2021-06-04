//6) The area of a rectangle is equal to its length x width.

//Define a function and the required parameters to calculate the area of a rectangle.
//The function should return the area, NOT print it.

function getAreaOfRectangle(length,width){

//If only one argument is passed to the function, then the shape is a square. Modify your code to deal with this case.

  if (width === undefined){
    //this as a square
    console.log("Its A Square");
  let area = length * length;
  return area;
} else {
  // a rectangle
  let area = length*width;
  return area;
}
}

//Call your area function, then use a template literal to print, “The area is ____ cm^2.”

let myArea = getAreaOfRectangle(5);
let myanswer =`The area is $(myArea) cm^2`;

console.log(myanswer);

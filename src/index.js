module.exports = function solveEquation(equation) {
  // your implementation

   let discriminant;
   let x1;
   let x2;
   let x;
   let argumentA;
   let argumentB;
   let argumentC;
   //string and arrays
   let string = equation;
   let equationArray = [];
   let equationArray1 =[];
   let equationArray2 =[];
   let equationArray3 =[];
   let equationArray4 =[];
   let equationArray5 =[];
   let answerArray = [];

   //the start of solving
   equationArray = string.split("*");
   // get value: argumentA
   equationArray1 = equationArray[0];
   // get value: argumentB
   equationArray2 = equationArray[1].split(" "); 
   equationArray4 = equationArray2.slice(2,4);
   equationArray4 = equationArray4.join("");
   // get value: argumentC
   equationArray3 = equationArray[2].split(" "); 
   equationArray5 = equationArray3.slice(2,4);
   equationArray5 = equationArray5.join("");
   //parsing string into integer
   argumentA = parseInt(equationArray1);
   argumentB = parseInt(equationArray4); 
   argumentC = parseInt(equationArray5); 

   //find discriminant
   discriminant = argumentB * argumentB - 4 * argumentA * argumentC;
   
     //find squrts
   if (discriminant > 0) {
     x1 = (-argumentB + Math.sqrt(discriminant)) / (2 * argumentA);
     x2 = (-argumentB - Math.sqrt(discriminant)) / (2 * argumentA);
     
     answerArray.push(Math.round(x1));
     answerArray.push(Math.round(x2));
     

   } else {
     if (discriminant === 0) {
       x = (-argumentB) / (2 * argumentA);
       answerArray.push(x);
     }
    }
answerArray = answerArray.sort(function(a, b) {
  return a - b;
});
return answerArray;
}

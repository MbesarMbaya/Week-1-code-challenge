//program that prompts the user to input student marks//
const prompt=require("prompt-sync")();
function grade(){ 

  if (marks <=39)
   { 
    console.log(" Your grade is E");
   }
     else if (marks >=40 || marks <=49)
{
console.log("Your grade is D");
}
else if (marks >=50 || marks <=59)
{
console.log(" Your grade is C");
}
else if (marks >=60 || marks <=79)
{
console.log(" Your grade is B");
}
else if (marks >=80 || marks <=100)
{
console.log(" Your grade is A");
}
}
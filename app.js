var grossIncome = 45000;
var taxPercentage = 0;
var taxAmount = 0;

var taxBracket = [
{from:0, to:18200, percentage :0, amount:0},
{from:18201, to:37000, percentage :19, over:18200, amount:0},
{from:37001, to:80000, percentage :20, over:37000, amount:3752},
{from:80000, to:180000, percentage :20, over:80000, amount:17547},
{from:180001, to:0, percentage :20, over:180000, amount:54547}];
  
 
 for(var x in taxBracket){
    if (grossIncome > taxBracket[x].from && grossIncome < taxBracket[x].to){
        taxPercentage = taxBracket[x].percentage;
        taxAmount = taxBracket[x].amount;
     }
}
  
console.log(taxPercentage);
console.log(taxAmount);

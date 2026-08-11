/* .js files add interaction to your website */

/*Fact generator*/

var factList = [ 
"Jamaica's birth rate is 1.3 children per woman", 
"The infant mortality rate  for 2026 is 10.11, a 1.82% decline from 2025.",
"According to STATIN, Jamaica’s maternal mortality ratio was reported at 150.3 per 100,000 live births for 2024", 
  "According to International Labour Organization (ILO), women holding roughly 56.7% to 59.3% of total managerial positions in Jamaica", 
"Maternity Leave in Jamaica is 12 weeks and only 8 weeks are paid.", 
  "Jamaica's femicide rate in 2023 was 8.223 per 100,000"];

console.log(factList[0]);

var facts= document.getElementById("facts");
var mybutton= document.getElementById("mybutton");
var count=0;
  

if (mybutton){
  mybutton.addEventListener("click",displayFact);
}

function displayFact() {
  facts.innerHTML=factList[count];
  count++;
  if (count==factList.length)
  {
    count=0;
  }
}

const view = document.getElementById("view"); 
//const bye = document.getElementById("bye");

view.onclick = function(){
    //bye.textContent = "Bye"; 
    console.log("view clicked"); 
        document.getElementById("container").classList.add("show"); 
        setTimeout(() => {
            document.getElementById("container2").classList.add("show"); 
        }, 500);
        setTimeout(() => {
            document.getElementById("container3").classList.add("show"); 
        }, 1000);
        


};
function rolldice(){
const numOfDice = document.getElementById("numOfDice").value; 
const diceResult = document.getElementById("diceResult"); 
const diceImages = document.getElementById("diceImages"); 

//arrays to store values and images
const values = []; 
const images = []; 

for(let i = 0; i < numOfDice; i++){
    const value = Math.floor(Math.random() * 6) + 1; 
    //console.log(value); 
    values.push(value); 
    images.push(`<img src = "dice_images/${value}.png" alt= "Dice ${value}">`); 
}
//console.log(values); 
diceResult.textContent = `dice: ${values.join(`, `)}`; 

diceImages.innerHTML = images.join(''); 
}

const generateBtn = document.getElementById("generateBtn"); 
const p1 = document.getElementById("p1"); 

function generatePassword(length, includeLowercase, includeUppercase,
                        includeNumbers, includeSymbols){


    const lowercaseChars = "acdefghijklmnopqrstuvwxyz"; 
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; 
    const numberChars = "0123456789"; 
    const symbolChars = "!@#$%&*_|?/()^"; 

    let allowedChars = ""; 
    let password = ""; 


    allowedChars += includeLowercase ? lowercaseChars : ""; 
    allowedChars += includeUppercase ? uppercaseChars : ""; 
    allowedChars += includeNumbers ? numberChars : ""; 
    allowedChars += includeSymbols ? symbolChars : ""; 

    if(length <= 0){
        return alert("Password length must be 1 and above"); 
    }
    if(allowedChars.length === 0){
        return alert('at least 1 set of charaters need to be selected');
    }
    //selecting a random number from all possibilities
    for(let i = 0; i < length; i++){
         const randomIndex = Math.floor(Math.random() * allowedChars.length); 
    password += allowedChars[randomIndex]; 
    }
    return password; 
}
generateBtn.onclick = function(){
    const passwordLength = 12; 
const includeLowercase = true; 
const includeUppercase = true; 
const includeNumbers = true; 
const includeSymbols = true; 

const password = generatePassword(passwordLength, includeLowercase,
                                    includeUppercase, includeNumbers, 
                                    includeSymbols
); 
p1.textContent = ` ${password}`; 
}; 


/*Currency Conversion*/ 
const currencypair = document.getElementById("currencypair"); 
const currencyinput = document.getElementById("currencyinput");
const submit = document.getElementById("submit"); 

//exchange rate
const gbp = 21.68; 
const usd = 15.97; 
const eur = 18.91; 
const jpy = 0.10; 

submit.onclick = function(){
    let inputValue = parseFloat(currencyinput.value);
    let result = 0; 

    if(currencypair.value === "ZAR/GBP"){
         result = inputValue / gbp; 
        //return result; 
        let p3 = document.getElementById("p3").textContent = 
        ` Amount is  £${result.toFixed(2)}`; 
    }
    else if(currencypair.value === "ZAR/USD"){
         result = inputValue / usd; 
        //return result; 
        let p3 = document.getElementById("p3").textContent = 
        ` Amount is  $${result.toFixed(2)}`; 
    }
    else if(currencypair.value === "ZAR/EUR"){
         result = inputValue / eur; 
        //return result; 
        let p3 = document.getElementById("p3").textContent = 
        ` Amount is  €${result.toFixed(2)}`; 
    }
    else if(currencypair.value === "ZAR/JPY"){
         result = inputValue / jpy; 
        //return result; 
        let p3 = document.getElementById("p3").textContent = 
        ` Amount is  ¥${result.toFixed(2)}`; 
    }
    else{
        alert("Please select a valid option"); 
    }
   
}

//if statements
//options for currency pairs
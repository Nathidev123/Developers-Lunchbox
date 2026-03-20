const view = document.getElementById("view"); 
view.onclick = function(){
    
    
   //below showing the hidden containers
        document.getElementById("container").classList.add("show"); 
        setTimeout(() => {
            document.getElementById("container2").classList.add("show"); 
        }, 500);
        setTimeout(() => {
            document.getElementById("container3").classList.add("show"); 
        }, 1000);
        setTimeout(() => {
            document.getElementById("taskManagerContainer").classList.add("show"); 
        }, 1500);
      
        addTask();
        displayTasks();
       
        
};
function rolldice(){
const numOfDice = document.getElementById("numOfDice").value; 
const diceResult = document.getElementById("diceResult"); 
const diceImages = document.getElementById("diceImages"); 

//arrays to store values and images
const values = []; 
const images = []; 

for(let i = 0; i < numOfDice; i++){
    //will select radom value between 1 and 6 below
    const value = Math.floor(Math.random() * 6) + 1;
   /* that line above doesn’t direct the loop — the loop is already controlling how many times we repeat.
    Instead, it produces a fresh dice roll each time the loop runs. 
    The loop is the dealer saying “Roll again!”
    The random line is the dice itself landing on a number.
    basicall loop without random line would run 0,1,2,3,...until its less than numOfDice
    but with random - random says this time its a 4, or a 6 then a 2 etc (RANDOM, get it)*/
    //console.log(value); 
    values.push(value); 
    
    images.push(`<img src = "dice_images/${value}.png" alt= "Dice ${value}">`); 
    //so if user types in 5 
    /*will loop 5 times, each loop generates random number
    between 1 and 6 each number gets stored in values array
    example, dice: 2, 5, 2, 3, 6 these were the random values
    generated from inputting 5.
    therefore 5 dice images will display side by side*/
}
//console.log(values); 
diceResult.textContent = `dice: ${values.join(`, `)}`; 
//This line is basically saying: “Show me the dice numbers rolled, 
// separated by commas.”
diceImages.innerHTML = images.join(''); 
// “Show me the dice images for each roll.”
//innerHTML - sets the content inside that eleent(so it can render <img> tags)
}


//PASSWORD GENERATOR

const generateBtn = document.getElementById("generateBtn"); 
const p1 = document.getElementById("p1"); 

function generatePassword(length, includeLowercase, includeUppercase,
                        includeNumbers, includeSymbols){
/*So the above is the blueprint rigt, describing how to build a password
given certain instructions. 
And then below the const password = generatePassword... 
is where we actually use the blueprint and pass in our own 
arguments so the 12, true, true, true, true so this runs, builds
the password and returns it*/

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
    //selecting a random number from all possibilities adn then rounding down with math.floor
    for(let i = 0; i < length; i++){
        //so in this loop were ensuring it runs exactly 12 times
         const randomIndex = Math.floor(Math.random() * allowedChars.length); 
         //ensuring its random characters because again if not random it would pick them orderly
    password += allowedChars[randomIndex]; 
    //above were storing our random allowedchars in password
    }
    return password; 
    /*so at the end of the function weve built up a string in password
    so return password; hands that finished string back to whoever called it.
    without return, the function would do all the work but never give result
    thats y we can then reassign to const password outside the function*/
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
/*the  purpose of const password = generatePassword()...
is so that it can be used like below: p1.textContent
and it is now being placed with the parameters we cant, so the 12 length
uppercase, lowercase etc. Were adding our ingredients to our function "template" basically*/
p1.textContent = ` ${password}`; 
}; 


/*Currency Conversion*/ 
const currencypair = document.getElementById("currencypair"); 
const currencyinput = document.getElementById("currencyinput");
/*had we put .value above = at this point the user hasnt typed anything
so there would be jsust an empty string*/ 
const submit = document.getElementById("submit"); 

//exchange rate
const gbp = 21.68; 
const usd = 15.97; 
const eur = 18.91; 
const jpy = 0.10; 

submit.onclick = function(){
        //converting to parseFloat, so it accepts decimal places
    let inputValue = parseFloat(currencyinput.value);
    /*this happens the moment the button is clicked
    by then user has already typed something*/
    let result = 0;
     
    //result = 0; 
    /*is important as it prevents errors (no "undefined" errors")
    provides a safe default if no calculation occurs*/
    if(currencypair.value === "ZAR/GBP"){
         result = inputValue / gbp; 
         
        let p3 = document.getElementById("p3").textContent = 
        ` Amount is  £${result.toFixed(2)}`; 
    }
    else if(currencypair.value === "ZAR/USD"){
         result = inputValue / usd; 
         
        let p3 = document.getElementById("p3").textContent = 
        ` Amount is  $${result.toFixed(2)}`; 
    }
    else if(currencypair.value === "ZAR/EUR"){ 
         result = inputValue / eur; 
        
        let p3 = document.getElementById("p3").textContent = 
        ` Amount is  €${result.toFixed(2)}`; 
    }
    else if(currencypair.value === "ZAR/JPY"){
         result = inputValue / jpy; 
        
        let p3 = document.getElementById("p3").textContent = 
        ` Amount is  ¥${result.toFixed(2)}`; 
    }
    else{
        alert("Please select a valid option"); 
    }

}
    /*Task Manager*/

   function addTask(){
    const add = document.getElementById("add");
    add.addEventListener("click", () => {
        const task = document.getElementById("user-task").value; 
        
        if(task === ""){
            alert("No task to save");
        }
        else{
        let tasks = JSON.parse(localStorage.getItem("user-task"))|| []; 
        //retrieving tasks to local Storage
        tasks.push({text: task, done: false, createdAt: new Date().toISOString()});
        
        localStorage.setItem("user-task", JSON.stringify(tasks));
        //saving tasks to local Storage
        document.getElementById("user-task").value = "";
        }
        displayTasks();
    });
    
   }

    function displayTasks(optionalTasks){
        let tasks = optionalTasks || JSON.parse(localStorage.getItem("user-task")) || [];
        //to allow for a custom array if needed. Utilized below with the filteredTasks array
        const tbody = document.querySelector("#table1 tbody");
        tbody.innerHTML = ""; 

        tasks.forEach((task, index) => {
            //index - so that we could track a certain row/task
            //to perform deletion or checkbox
            const createdTime = new Date(task.createdAt);
            const timeString = createdTime.toLocaleTimeString([], {hour: '2-digit',
                    minute: '2-digit'});
           
            const row = document.createElement("tr"); 

            row.innerHTML = `
            <td>${task.text}
            <button class="bin" data-index="${index}">🗑️</button>
            <input type="checkbox" class="checkbox" data-index="${index}"
             ${task.done ? "checked" : ""}>
             ${timeString}
            </td>
            `;
             tbody.appendChild(row);
        }); 

        const deleteBtn = document.querySelectorAll(".bin");
        deleteBtn.forEach(btn => {
            btn.addEventListener("click", (event) => {
                //attaching listener to specific button not whole collection
                let tasks = JSON.parse(localStorage.getItem("user-task")) || [];
                //retrieving array in local storage
                tasks.splice(event.target.dataset.index,1); //removing one item
                //rebuilding after deletion
                localStorage.setItem("user-task", JSON.stringify(tasks)); 
                displayTasks();
            });
        }) ;

        const checked = document.querySelectorAll(".checkbox"); 
        checked.forEach((check) => {
            check.addEventListener("click", (event) => {
                 tasks = JSON.parse(localStorage.getItem("user-task")) || [];
                 const ix = event.target.dataset.index; 
                 tasks[ix].done = event.target.checked;  
                 localStorage.setItem("user-task",JSON.stringify(tasks)); 
                 displayTasks(); 
            });
        });
        
        const filterBtn = document.getElementById("filter"); 
        filterBtn.addEventListener("click", () => {
            tasks = JSON.parse(localStorage.getItem("user-task")); 
            const filteredTasks = tasks.filter(task => task.done === true);
            //utilize our optional array above in displayTasks function
            displayTasks(filteredTasks);
        });

        const show = document.getElementById("showTable"); 
        show.addEventListener("click", () => {
            tasks = JSON.parse(localStorage.getItem("user-task")) || [];
            displayTasks(); 
        });
    }




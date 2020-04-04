// 1. Create a function expression by assigning an anonmyous function to a variable called myFunctionExpression.
// The function should console log your name.

const myFunctionExpression = function() {
    console.log("Florent");
};

myFunctionExpression();


/* 2. Select the input in the HTML below by its class. Add a click event listener. 
The callback function passed to the event listener should log the sentence I was clicked.
You can pass the function in directly, declare it and pass it in by its name or assign it to a variable and pass it in by the variable name.
<input type="button" class="btn" value="Click me"> */

const inputByClass = document.querySelector(".btn");

function inputByClassTask() {
    console.log("I was clicked");
};

inputByClass.addEventListener("click", inputByClassTask);





/* 3. Select the input in the HTML below by its id. Add a keydown event listener. The callback function passed 
to the event listener should log the value of the key that was pressed.

<input class="input" id="firstName"></div> */

const inputById = document.querySelector("#firstName");

inputById.addEventListener("keydown", inputByIdTask);

function inputByIdTask(e) {

    console.log("A " + e.key + " was pressed");
};





/* 4. Select the button in the HTML below by its tag. Add a mouseover event listener. 
The callback function should add a class called hover to the button.

<button class="btn" data-animal="dog">Hover over me</button> */

const buttonTag = document.querySelector("button");

let mouseOverTask = function() {
    buttonTag.classList.add("hover");
};

buttonTag.addEventListener("mouseover", mouseOverTask);



/* 5. Select the button in the HTML below by its data attribute and add a mouseout event listener to it.
 The callback function should remove the class called hover from the button.

<button class="btn" data-animal="dog">Hover over me</button> */

const buttonData = document.querySelector("[data-animal='dog']");

let mouseOutTask = function() {
    buttonData.classList.remove("hover");
};

buttonData.addEventListener("mouseout", mouseOutTask);




/* 6. 
Select all the li tags from the HTML below. Using a loop, add a mouseover event listener to each tag.
The callback function should log the value of the data attribute on each element when the cursor moves over it.

<ul>
    <li data-animal="goose">Animal 1</li>
    <li data-animal="frog">Animal 2</li>
    <li data-animal="elephant">Animal 3</li>
</ul>  */


const animalItems = document.querySelectorAll("li");

for (let i = 0; i < animalItems.length; i++) {
    animalItems[i].addEventListener("mouseover", hoverAnimalItems);
}


function hoverAnimalItems(event) {
    console.log(event.target.dataset.animal);
}




/*  7. Convert the if-else-if statement below to a switch statement. Use the code inside the else block in the default block in the 
switch.

const animal = "cow";

if(animal === "cat") {
    console.log("Meow");
}
else if(animal === "cow") {
    console.log("Moo");
}
else if(animal === "bird") {
    console.log("Tweet");
}
else {
    console.log("Harrumph");
}  */


const animal = "cow";

switch (animal) {
    case "cat":
        console.log("Meow");
        break;
    case "cow":
        console.log("Moo");
        break;
    case "bird":
        console.log("Tweet");
        break;
    default:
        console.log("Harrumph");
}




/* 8. Convert the for loop code below to a forEach loop.

const sheep = ["Malcolm", "Anders", "Marie"];

for(let i = 0; i < sheep.length; i++) {
    console.log(sheep[i]);
} */


const sheep = ["Malcolm", "Anders", "Marie"];

sheep.forEach(function(items) {
    console.log(items);
});




// 9. Create a timer that logs the word hello every half a second. It must stop after its logged the word 6 times.

const word = "hello";

function myTime() {
    console.log(word);

    if (counter === 5) {
        clearInterval(intervalTimes);
    }

    counter++;
}

let counter = 0;

const intervalTimes = setInterval(myTime, 500);



/* 10. Select the div from the HTML below. Write code that updates the div's text to say Text updated after waiting 2 seconds.
 You can use either innerText or innerHTML to update the text.

<div class="container">Placeholder text</div> */


const timeoutDiv = document.querySelector("div");

function updateDiv() {
    timeoutDiv.innerHTML = "Text updated";

}

setTimeout(updateDiv, 2000);
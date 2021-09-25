/*
* Excercise 1
*
*/



/*
* Then write a function that changes the text and the color inside the div
*
*/
const color = document.querySelector("#color-block");
color.onclick = changeColor;
function changeColor(){
    //Write a condition determine what color it should be changed to
    const text = document.querySelector("#color-name");
    if(color.style.backgroundColor==="rgb(240, 128, 128)"){
        //change the background color using JS
        color.style.backgroundColor = "#056E83";
        //Change the text of the color using the span id color-name
        text.innerHTML = "#056E8";
    }
    else{
        //change the background color using JS
        color.style.backgroundColor = "#F08080";
        //Change the text of the color using the span id color-name
        text.innerHTML = "#F08080";

    }
}


/*
* For excercise 2, you need to write an event handler for the button id "convertbtn"
* on mouse click. For best practice use addEventListener.
*
*/


/*
* Then write a function that calculates Fahrenheit to Celsius and display it on the webpage
*
*/
document.querySelector("#convertbtn").addEventListener("click", convertTemp);
function convertTemp(){
    let value = document.querySelector("#f-input").value;
    //Calculate the temperature here
    value = (value-32)*(5/9);
    //Send the calculated temperature to HTML
    document.querySelector("#c-output").innerHTML = value;
}



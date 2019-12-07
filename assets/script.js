//Generate password length options
var pwLenSelector = document.querySelector("#FormControlSelect");

for (i = 8; i < 129; i++)
{
    var option = document.createElement("option");
    option.innerHTML = i;
    pwLenSelector.appendChild(option);
};

var pwGen = document.querySelector("#generatePW");
var specChar = document.getElementById("special-characters");
var numChar = document.getElementById("numeric-characters");
var ucChar = document.getElementById("uppercase-characters");
var lcChar = document.getElementById("lowercase-characters");
var alphabetChar = "abcdefghijklmnopqrstuvwxyz".split("");
var alphabetUChar = "abcdefghijklmnopqrstuvwxyz".toUpperCase().split("");
var numericChar = "1234567890".split("");
var specialChar = "!@#$%^&*()_+-={}|\\][;'\":<>?/.,~`".split("");
var textbox = document.getElementById("textArea");
var copybtn = document.getElementById("copy");

function validateInput()
{
    if (!specChar.value && !numChar.value && !ucChar.value && !lcChar.value){
        alert("Enter characters in at least one box")
    }

    if (!specChar.value == ""){
        var specChars = specChar.value.split("");

        for (i = 0; i < specChars.length; i++)
    {
        if (specialChar.indexOf(specChars[i]) == -1){
            alert("check special characters - validation failed")
            break;
        }
    }
    }

    if (!numChar.value == ""){
        var numChars = numChar.value.split("");

        for (i = 0; i < numChars.length; i++)
    {

        if (numericChar.indexOf(numChars[i]) == -1){
            alert("check numeric characters - validation failed")
            break;
        }
    }
    }

    if (!ucChar.value == ""){
        var ucChars = ucChar.value.split("");

        for (i = 0; i < ucChars.length; i++)
    {

        if (alphabetUChar.indexOf(ucChars[i]) == -1){
            alert("check uppercase characters - validation failed")
            break;
        }
    }
    }

    if (!lcChar.value == ""){
        var lcChars = lcChar.value.split("");

        for (i = 0; i < lcChars.length; i++)
    {

        if (alphabetChar.indexOf(lcChars[i]) == -1){
            alert("check lowercase characters - validation failed")
            break;
        }
    }
    }
};

function randomizer ()
{
    var popFields = [];
    var randomArray = [];

    if (!specChar.value == ""){
        popFields.push(specChar.value)
    }

    if (!numChar.value == ""){
        popFields.push(numChar.value)
    }

    if (!ucChar.value == ""){
        popFields.push(ucChar.value)
    }

    if (!lcChar.value == ""){
        popFields.push(lcChar.value)
    }

    do{
        var randomNum = Math.floor(Math.random() * popFields.length);
        randomArray.push(popFields[randomNum]);
        popFields.splice(randomNum, 1);
    }
    while (popFields.length > 0);

    var randomString = randomArray.join("")
    return randomString;
};

function fixLength(pwLen)
{
    var result = randomizer();
    console.log("pwlen: " + pwLen);
    if (result.length == pwLen){
        textbox.innerHTML=result;
    }

    if (result.length < pwLen){
        var remainder = pwLen % result.length;
        var multiplyBy = 0;
        if (remainder == 0){
            multiplyBy = pwLen/result.length;
            textbox.innerHTML=result.repeat(multiplyBy);
        } else {
            var numerator = pwLen - remainder;
            multiplyBy = numerator / result.length;
            var multResult = result.repeat(multiplyBy);
            result = multResult + result.slice(0, remainder);
            textbox.innerHTML=result;
        }
    }

    if (result.length > pwLen){
        console.log("length greater than condition hit: " + result);
        textbox.innerHTML=result.slice(0, pwLen);
    }
};

// function copy2clip() { 
//     var copyText = textbox.value

//     /* Select the text field */
//     copyText.select();
//     copyText.setSelectionRange(0, 99999); /*For mobile devices*/
  
//     /* Copy the text inside the text field */
//     document.execCommand("copy");
  
//     /* Alert the copied text */
//     alert("Copied the text: " + copyText);
//   }

pwGen.addEventListener("click", function(event){

    event.preventDefault();
    pwLen = parseInt(pwLenSelector.options[pwLenSelector.selectedIndex].value);
    validateInput();
    fixLength(pwLen);
});

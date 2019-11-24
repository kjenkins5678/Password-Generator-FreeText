//Generate password length options
var pwLenSelector = document.querySelector("#FormControlSelect");

for (i = 8; i < 129; i++)
{
    var option = document.createElement("option");
    option.innerHTML = i;
    pwLenSelector.appendChild(option);
};

var pwGen = document.querySelector("#generatePW");
var pwLen = pwLenSelector.options[pwLenSelector.selectedIndex].value;
var specChar = document.getElementById("special-characters");
var numChar = document.getElementById("numeric-characters");
var ucChar = document.getElementById("uppercase-characters");
var lcChar = document.getElementById("lowercase-characters");
var alphabetChar = "abcdefghijklmnopqrstuvwxyz".split("");
var alphabetUChar = "abcdefghijklmnopqrstuvwxyz".toUpperCase().split("");
var numericChar = "1234567890".split("");
var specialChar = "!@#$%^&*()_+-={}|\\][;'\":<>?/.,~`".split("");

function validateInput()
{
    if (!specChar.value && !numChar.value && !ucChar.value && !lcChar.value)
    {
        alert("Enter characters in at least one box")
    }

    if (!specChar.value == "")
    {
        var specChars = specChar.value.split("");

        for (i = 0; i < specChars.length; i++)
    {
        console.log("input list character: " + specChars[i]);

        if (specialChar.indexOf(specChars[i]) == -1)
        {
            console.log("check special characters - validation failed")
            break;
        }
    }
    }

    if (!numChar.value == "")
    {
        var numChars = numChar.value.split("");

        for (i = 0; i < numChars.length; i++)
    {
        console.log("input list character: " + numChars[i]);

        if (numericChar.indexOf(numChars[i]) == -1)
        {
            console.log("check numeric characters - validation failed")
            break;
        }
    }
    }

    if (!ucChar.value == "")
    {
        var ucChars = ucChar.value.split("");

        for (i = 0; i < ucChars.length; i++)
    {
        console.log("input list character: " + ucChars[i]);

        if (alphabetUChar.indexOf(ucChars[i]) == -1)
        {
            console.log("check uppercase characters - validation failed")
            break;
        }
    }
    }

    if (!lcChar.value == "")
    {
        var lcChars = lcChar.value.split("");

        for (i = 0; i < lcChars.length; i++)
    {
        console.log("input list character: " + lcChars[i]);

        if (alphabetChar.indexOf(lcChars[i]) == -1)
        {
            console.log("check lowercase characters - validation failed")
            break;
        }
    }
    }

};

pwGen.addEventListener("click", function(event){
    event.preventDefault();
    validateInput();
    console.log(pwLen);
    console.log(specChar.value);
    console.log(numChar.value);
    console.log(ucChar.value);
    console.log(lcChar.value);
});


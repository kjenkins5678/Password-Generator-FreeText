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

function validateInput()
{
    if (!specChar.value && !numChar.value && !ucChar.value && !lcChar.value)
    {
        alert("Enter characters in at least one box")
    }
}

pwGen.addEventListener("click", function(event){
    event.preventDefault();
    console.log(pwLen);
    console.log(specChar.value);
    console.log(numChar.value);
    console.log(ucChar.value);
    console.log(lcChar.value);
    validateInput();
});


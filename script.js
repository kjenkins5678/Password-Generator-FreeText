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

pwGen.addEventListener("click", function(event){
    event.preventDefault();
    console.log(pwLen);

    
});


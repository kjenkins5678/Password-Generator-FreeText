document.getElementById("generatePW").onclick = function(){
    console.log("button clicked")

    /* 
    Pseudocode

    know the password length
    know which of the following are populated: charSpecial, charNum, chatLower, charUpper
    validate users responses to above questions
    at least one of char variables must be populated

    ##Getting the Password Length right with all provided Char Types##
    count how many characters the user has provided between all the chars
    if too many
        only select a portion of each

    if too few
        duplicate the chars until the string is long enough

    if exactly the right length
        move on the next step

    ##Stitch together a random password
    for the chars that are populated
        randomly choose an order to concatenate them
    */

    //##Code to prompt for user responses##
    var passLength = prompt("Choose a password length (between 8 and 128): ");
    var charSpecial = prompt("Type your special characters: ");
    var charNum = prompt("Type your numeric characters:" );
    var charLower = prompt("Type your lowercase characters:" );
    var charUpper = prompt("Type your uppercase characters: ");

    var totalCharLength = charSpecial.length + charNum.length + charLower.length + charUpper.length;

    console.log(totalCharLength);


    // var someText = prompt("Type some text: ")
    // var textArea = document.getElementById("textArea")

    // textArea.textContent = someText;
};
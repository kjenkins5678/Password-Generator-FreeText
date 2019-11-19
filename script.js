document.getElementById("generatePW").onclick = function(){
    console.log("button clicked")

    var someText = prompt("Type some text: ")
    var textArea = document.getElementById("textArea")
    
    textArea.textContent = someText;
};
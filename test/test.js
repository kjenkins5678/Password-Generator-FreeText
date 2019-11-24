function checkCharacters(inputList, valList)
{
    for (i = 0; i < inputList.length; i++)
    {
        console.log("input list character: " + inputList[i]);
        console.log("val list: " + valList[i] );

        if (valList.indexOf(inputList[i]) == -1)
        {
            console.log("val check fail")
        }
    }

};

var inputList = ["a", "c"];
var valList = ["a", "b"];

checkCharacters(inputList, valList);
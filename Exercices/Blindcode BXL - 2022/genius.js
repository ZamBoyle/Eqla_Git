function add(number1, number2)
{
    return number1 + number2;
}


function substract(number1, number2)
{
    return number1 - number2;
}

function display(str)
{
    let display = document.getElementById("display");
    if(display){
        display.innerHTML += "<br/><p>"+str+"</p>";
    }else{
        display = document.createElement("span");
        display.id= "display";
        display.innerHTML = str;
    }
}
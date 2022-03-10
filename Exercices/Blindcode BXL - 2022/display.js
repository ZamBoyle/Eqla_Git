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
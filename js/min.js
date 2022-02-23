var screen = document.getElementById("screen");
function writenum(This) { 
    screen.value += This.value;
}
function solve() { 
    var result= eval(screen.value)
    screen.value += " = " + result;
}
function del()
{
    screen.value = "";
}
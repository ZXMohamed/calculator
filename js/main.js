const screen = document.getElementById("screen");
const outresult = document.getElementById("result");

// var x = null
// var y = null

// var operationnotset = true;
// var operation = function (x) { return x };


// function writenum(This) {

//     if (operationnotset) {
//         x == null ? x = 0 : false;
//         x += This.value;
//     }
//     else {
//         y == null ? y = 0 : false;
//         y += This.value;
//     }

//     screen.value += This.value
// }


// function sum() {
//     if (x!=null) {y != null ? solve() : false;
//         screen.value += "+"
//         operationnotset = false;
//         operation = function () {
//             x = parseFloat(x)
//             y = parseFloat(y)
//             return x + y
//         }
        
//     }
// }
// function sub() {
//     if (x != null) {y != null ? solve() : false;
//         screen.value += "-"
//         operationnotset = false;
//         operation = function () {
//             x = parseFloat(x)
//             y = parseFloat(y)
//             return x - y
//         }
        
//     }
// }
// function mul() {
//     if (x != null) {y != null ? solve() : false;
//         screen.value += "*"
//         operationnotset = false;
//         operation = function () {
//             x = parseFloat(x)
//             y = parseFloat(y)
//             return x * y
//         }
        
//     }
// }
// function div() {
//     if (x != null) {y != null ? solve() : false;
//         screen.value += "/"
//         operationnotset = false;
//         operation = function () {
//             x = parseFloat(x)
//             y = parseFloat(y)
//             return x / y
//         }
        
//     }
// }
// function mod() {
//     screen.value += "%"
//     operationnotset = false;
//     operation = function () {
//         x = parseFloat(x)
//         y = parseFloat(y)
//         return x % y
//     }
// }



// function solve() {console.log(x,y);
//     x = operation();
//     outresult.textContent = x
//     // operationnotset = true;
//     operation = function (x) { return x };
//     y = 0;
// }



// function del() {

//     screen.value = "";
//     outresult.textContent = "";
//     operationnotset = true;
//     operation = function (x) { return x };
//     x = null;
//     y = null;
// }

var x=0,y=0;
var operationnotset = true;
var operation = (x) => x;
var screentemp="";
var part=false;

function writenum(This) {
    if (part) { 
        screentemp = screen.value;
        part=false
    }
    if (operationnotset) {
        x += This.value;
    }
    else {
        y += This.value;
    }
    screen.value += This.value
    
}
function writeoper(This) {
    
    operationnotset == false ? solve(false) : false;

    operationnotset = false;

    screentemp = screen.value;
    part = true;

    screen.value += This.value

    if (This.value == "+") {
        operation = sum;
    }
    else if (This.value == "-"){
        operation = sub;
    }
    else if (This.value == "*") {
        operation = mul;
    }
    else if (This.value == "/") {
        operation = div;
    }
    else if (This.value == "%") {
        operation = mod;
    }
    
}
function sum(x, y) {
    x = parseFloat(x)
    y = parseFloat(y)
    return x + y;
}
function sub(x,y) {
    x = parseFloat(x)
    y = parseFloat(y)
    return x - y
}
function mul(x,y) {
    x = parseFloat(x)
    y = parseFloat(y)
    return x * y
}
function div(x,y) {
    x = parseFloat(x)
    y = parseFloat(y)
    return x / y
}
function mod(x,y) {
    x = parseFloat(x)
    y = parseFloat(y)
    return x % y
}

function solve(cfinal = true) {
    
    x = operation(x, y);
    outresult.textContent = x;

    console.log(x, y);
    
    y = 0;
    if (cfinal){
        operation = (x) => x;
        screen.value = "";
        operationnotset = true;
        x = 0;
        screentemp = "";
    }
    // operationnotset = true;

}

function del() {

    screen.value = "";
    outresult.textContent = "";
    operationnotset = true;
    x = 0;
    y = 0;
    operation = (x) => x;
    screentemp = "";

}

function c() { 
    screen.value = screentemp;
    outresult.textContent = "";
    if(screen.value==""){x=0}
    //operation = (x) => x;
    // operationnotset = false;
    y = 0;
}
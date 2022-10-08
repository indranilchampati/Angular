"use strict";
exports.__esModule = true;
var firstName;
firstName = 'Indranil';
var num = 123;
var bool = true;
//console.log(firstName,num,bool);
function greet(value) {
    //console.log("Function is Running");
    return "GoodMoring  " + value;
}
//console.log(greet("Indranill"))
function capital_string(value) {
    return value.toUpperCase();
}
//console.log(capital_string("Converted String : Welcome"));
function add(num1, num2) {
    return num1 + num2;
}
//invoking function using inappropriate parameter
//console.log(add(5,7));
function simple_interest(p, t, i) {
    if (i === void 0) { i = 10; }
    return ((p * t * i) / 100);
}
//console.log("Invoking using All parameter");
//console.log("Simple Interest is : "+simple_interest(5400,2,20));
//console.log("Invoking using only p and t as parameter");
//console.log("Simple Interest is : "+simple_interest(5400,2));
function range(start, stop, increament) {
    if (increament === void 0) { increament = 1; }
    var ans = "";
    var num = start;
    while (num <= stop) {
        ans = ans + num.toString() + " ";
        num += increament;
    }
    return ans;
}
//console.log(range(1,5));
//console.log(range(1,10,2));
function summing() {
    var rest = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        rest[_i] = arguments[_i];
    }
    var sum = 0;
    for (var i = 0; i < rest.length; i++) {
        sum += rest[i];
    }
    return (sum);
}
//console.log(summing());
//console.log(summing(1, 2, 3, 4, 5));
//console.log(summing(10, 20, 33));
function message(_a) {
    var title = _a.title, name = _a.name, msg = _a.msg;
    var ans = "";
    ans = title + " " + name + "\n";
    ans += msg;
    return ans;
}
//console.log(message({title: 'Miss', msg: 'Welcome home.', name: 'Suzy'}));
function printStatusCode(code) {
    console.log("Status Code is ".concat(code));
}
//printStatusCode('404');
//printStatusCode(404);
//printCode('404')
var Point_2D = /** @class */ (function () {
    function Point_2D(x, y) {
        this.x_cord = x;
        this.y_cord = y;
    }
    return Point_2D;
}());
var point1 = new Point_2D(10, 20);
var point2 = new Point_2D(40, 40);
//console.log("Slope Of the line will be "+(point2.y_cord-point1.y_cord)/(point2.x_cord-point1.x_cord))
var Point_3D = /** @class */ (function () {
    function Point_3D(x, y, z) {
        this.x_cord = x;
        this.y_cord = y;
        this.z_cord = z;
    }
    Point_3D.prototype.display = function () {
        console.log("X coordinate = " + this.x_cord);
        console.log("Y coordinate = " + this.y_cord);
        console.log("Z coordinate = " + this.z_cord);
    };
    return Point_3D;
}());
var point = new Point_3D(10, 20, 30);
console.log(point.display());

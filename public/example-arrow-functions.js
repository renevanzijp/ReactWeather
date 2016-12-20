var names = ["andrew", "kees", "rene"];

names.forEach(function (name) {
    console.log("for each", name);
});

names.forEach((name) => {
    console.log("arrowfunc", name)
})
;
names.forEach((name) => console.log("short arrow", name));


var returnMe =  (name) => name + "!";

// var returnMe =  (name) => console.log( name, "!");

console.log(returnMe("rene"));

var person = {

};

function add (a,b){
  return a + b;
};

// add arrow STATEMENT version..
var addArrow =  (val1, val2) => {return val1 + val2};

// add arow EXPRESSION version...
var addMe =  (val1, val2) => val1+ val2;

console.log(add(1,3));
console.log(add(9,0));
console.log(addMe(3,4));
console.log(addArrow(5,5));

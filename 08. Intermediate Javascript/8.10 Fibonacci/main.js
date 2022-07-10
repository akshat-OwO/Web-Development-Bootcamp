var a = 0;
var b = 1;
var n = prompt('Enter length: ');
var s = 0;

console.log(a);
console.log(b);
for(var i = 0; i < n; i++){
    s = a + b;
    console.log(s);
    a = b;
    b = s;
}
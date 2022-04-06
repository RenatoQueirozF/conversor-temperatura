var c = document.getElementById ("c");
var f = document.getElementById ("f");
var k = document.getElementById ("k");

let cv;
let fv;
let kv;

function declarar(){
    c.value = cv;
    f.value = fv;
    k.value = kv;
}

c.addEventListener ("input", (e) => {

    cv = Number(e.target.value);
    fv = (cv * 9/5) + 32;
    kv = cv + 273;
    declarar();
})

f.addEventListener ("input", (e) => {

    fv = Number(e.target.value);
    cv = (fv - 32) * 5 / 9;
    kv = (fv - 32) * 5 / 9 + 273;
    declarar();
})

k.addEventListener ("input", (e) => {

    kv = Number(e.target.value);
    fv =  (kv - 273) * 9/5 + 32;
    cv = kv - 273;
    declarar();
})

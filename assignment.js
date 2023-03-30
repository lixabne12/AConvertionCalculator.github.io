let kgbtn = document.getElementById('kg');
let ouncebtn = document.getElementById('ounce');
let grambtn = document.getElementById('gram');

kgbtn.addEventListener('click',function(){
    let input = document.getElementById('input').value;
    document.getElementById('output').value = input / 2.205 + "kg";
})

ouncebtn.addEventListener('click',function(){
    let input = document.getElementById('input').value;
    document.getElementById('output').value = input * 16 + "ounce";
})

grambtn.addEventListener('click',function(){
    let input = document.getElementById('input').value;
    document.getElementById('output').value = input * 453.6 + "gram";
})

//================= length ============================
let kilometerbtn = document.getElementById('kilometer');
let centimeterbtn = document.getElementById('centimeter');
let footbtn = document.getElementById('foot');

kilometerbtn.addEventListener('click',function(){
    let input1 = document.getElementById('input1').value;
    document.getElementById('output1').value = input1 / 1000 + "kilometer";
})

centimeterbtn.addEventListener('click',function(){
    let input1 = document.getElementById('input1').value;
    document.getElementById('output1').value = input1 * 100 + "centimeter";
})

footbtn.addEventListener('click',function(){
    let input1 = document.getElementById('input1').value;
    document.getElementById('output1').value = input1 * 3.281 + "foot";
})


// ==============Time=============
let millisecondbtn = document.getElementById('millisecond');
let secondbtn = document.getElementById('second');
let hourbtn = document.getElementById('hour');

millisecondbtn.addEventListener('click',function(){
    let input2 = document.getElementById('input2').value;
    document.getElementById('output2').value = input2 *  60000 + "millisecond";
})

secondbtn.addEventListener('click',function(){
    let input2 = document.getElementById('input2').value;
    document.getElementById('output2').value = input2 * 60 + "second";
})

hourbtn.addEventListener('click',function(){
    let input2 = document.getElementById('input2').value;
    document.getElementById('output2').value = input2 / 60 + "hour";
})


// ==============Temperature=============
let fahrenheitbtn = document.getElementById('fahrenheit');
let kelvinbtn = document.getElementById('kelvin');


fahrenheitbtn.addEventListener('click',function(){
    let input3 = document.getElementById('input3').value;
    document.getElementById('output3').value = input3  * 9/5 + 32  + "fahrenheit";
})

kelvinbtn.addEventListener('click',function(){
    var input3 = parseInt(document.getElementById('input3').value)
    // let input3 = document.getElementById('input3').value;
    document.getElementById('output3').value = input3 + 273.15 +"kelvin";
})




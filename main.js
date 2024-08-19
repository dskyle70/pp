let lowerCaseChars = ['b','c','d','f','g','h','j','k','l','m','n','p','q','r','s','t','v','w','x','y','z','x'];

let lowerCaseVowels = ['a','e','i','o','u'];

let upperCaseVowels = ['A','E','I','O','U'];

let upperCaseChars = [];
    for (let i = 0; i < lowerCaseChars.length; i++) {
         upperCaseChars[i] = lowerCaseChars[i].toUpperCase();
        }

let symbols = ['_','@','=','#','/','?','*','+','!','$','}','&','{','<','>'];
let sym=15;
let numbers = ['0','1','2','3','4','5','6','7','8','9']

let IN_lwCase=document.getElementById('lwCase');
let IN_upCase=document.getElementById('upCase');
let IN_numbers=document.getElementById('numbers');
let IN_symbols=document.getElementById('symbols');

function updateSliderRange() {
    let strength=document.getElementById('strength').value;
    let str;
    switch (strength) {
        case '1':
            str='too weak'
            break;
        case '2':
            str='weak'
            break;
        case '3':
            str='moderate'
            break;
        case '4':
            str='strong'
            break;
        default:
            str='very strong'
            break;
    }
    document.getElementById('strengthValue').innerText=str;
    document.getElementById('sliderValue').innerText=document.getElementById('valLength').value + ' characters';
}

function controlChecks() {
    if(IN_lwCase.checked==false && IN_upCase.checked==false && IN_numbers.checked==false && IN_symbols.checked==false){
        IN_lwCase.checked=true;
    }
}

function generate() {
    let strength=document.getElementById('strength').value;
    let length=document.getElementById('valLength').value;
    let generated;
    
    if(strength==1){
        let generated='';
        for (let i = 0; i < Math.ceil(length/4); i++) {
           let array=selections(1);
           let arL=array.length;
           generated+=array[pickRandom(0,arL-1)];
        }
        let d=generated.split('').reverse().join('');
        for (let i = 0; i < 5; i++) {
           generated+=(pickRandom(1,10)>5)?d:generated;
        }
        generated=generated.slice(0,length);
        document.getElementById('output').innerText=generated;2
        }else if(strength==2){
            let generated='';
            for (let i = 0; i < Math.ceil(length/2); i++) {
               let array=selections(1);
               let arL=array.length;
               generated+=array[pickRandom(0,arL-1)];
            }
            let d=generated.split('').reverse().join('');
            for (let i = 0; i < 5; i++) {
               generated+=(pickRandom(1,10)>5)?d:generated;
            }
            generated=generated.slice(0,length);
            document.getElementById('output').innerText=generated;
        }else if (strength==3||strength==4) {
            let generated='';
            for (let i = 0; i < Math.ceil(length); i++) {
               let array=selections(1);
               let arL=array.length;
               generated+=array[pickRandom(0,arL-1)];
            }
            let d=generated.split('').reverse().join('');
            for (let i = 0; i < 5; i++) {
               generated+=(pickRandom(1,10)>5)?d:generated;
            }
            generated=generated.slice(0,length);
            document.getElementById('output').innerText=generated;
        }else{

            let generated='';
            for (let i = 0; i < Math.ceil(length); i++) {
               let array=selections(1);
               let arL=array.length;
               generated+=array[pickRandom(0,arL-1)];
            }
            let d=generated.split('').reverse().join('');
            for (let i = 0; i < 5; i++) {
                generated=generated.split(0,pickRandom(0,length));
               generated+=(pickRandom(1,10)>5)?d:generated;
            }
            generated=generated.slice(0,length);
            document.getElementById('output').innerText=generated;
        }
}
function selections(v) {
let IN_lwCase=document.getElementById('lwCase');
let IN_upCase=document.getElementById('upCase');
let IN_numbers=document.getElementById('numbers');
let IN_symbols=document.getElementById('symbols');
    if (v==1||v==2) {
        let a=[];
        let count=0;
   
        if (IN_upCase.checked==true) {
            a[count] = (pickRandom(1 , 10) > (8-v))?upperCaseChars[pickRandom(0,21)] : upperCaseVowels[pickRandom(0,4)];
            count++;
         } 
        if(IN_lwCase.checked==true){
            a[count] = (pickRandom(1 , 10) > (8-v))?lowerCaseChars[pickRandom(0,21)] : lowerCaseVowels[pickRandom(0,4)];
            count++;
        }  
        if (IN_upCase.checked==true) {
            a[count] = (pickRandom(1 , 10) > (8-v))?upperCaseChars[pickRandom(0,21)] : upperCaseVowels[pickRandom(0,4)];
            count++;
         } 
        if(IN_lwCase.checked==true){
            a[count] = (pickRandom(1 , 10) > (8-v))?lowerCaseChars[pickRandom(0,21)] : lowerCaseVowels[pickRandom(0,4)];
            count++;
        }
        if (IN_numbers.checked==true) {
            a[count] = numbers[pickRandom(0,9)];
            count++;
        }
        if (IN_symbols.checked==true) {
            a[count] = symbols[pickRandom(0,sym-11)];
            count++;
        }
        return a;
    } else if(v==3||v==4){
        let a=[];
        let count=0;
   
        if (IN_upCase.checked==true) {
            a[count] = (pickRandom(1 , 10) > (8-v))?upperCaseChars[pickRandom(0,21)] : upperCaseVowels[pickRandom(0,4)];
            count++;
         } 
        if(IN_lwCase.checked==true){
            a[count] = (pickRandom(1 , 10) > (8-v))?lowerCaseChars[pickRandom(0,21)] : lowerCaseVowels[pickRandom(0,4)];
            count++;
        }
        if (IN_numbers.checked==true) {
            a[count] = numbers[pickRandom(0,9)];
            count++;
        }
        if (IN_symbols.checked==true) {
            a[count] = symbols[pickRandom(0,sym-10)];
            count++;
        }
        if (IN_numbers.checked==true) {
            a[count] = numbers[pickRandom(0,9)];
            count++;
        }
        if (IN_symbols.checked==true) {
            a[count] = symbols[pickRandom(0,sym-10)];
            count++;
        }
        return a;
    }else{
        let a=[];
        let count=0;
   
        if (IN_upCase.checked==true) {
            a[count] = (pickRandom(1 , 10) > 1)?upperCaseChars[pickRandom(0,21)] : upperCaseVowels[pickRandom(0,4)];
            count++;
         } 
        if(IN_lwCase.checked==true){
            a[count] = (pickRandom(1 , 10) > 1)?lowerCaseChars[pickRandom(0,21)] : lowerCaseVowels[pickRandom(0,4)];
            count++;
        }
        if (IN_numbers.checked==true) {
            a[count] = numbers[pickRandom(0,9)];
            count++;
        }
        if (IN_symbols.checked==true) {
            a[count] = symbols[pickRandom(0 , sym-1)];
            count++;
        }
        if (IN_numbers.checked==true) {
            a[count] = numbers[pickRandom(0,9)];
            count++;
        }
        if (IN_symbols.checked==true) {
            a[count] = symbols[pickRandom(0,sym-1)];
            count++;
        }
        if (IN_numbers.checked==true) {
            a[count] = numbers[pickRandom(0,9)];
            count++;
        }
        if (IN_symbols.checked==true) {
            a[count] = symbols[pickRandom(0,sym-1)];
            count++;
        }
        if (IN_numbers.checked==true) {
            a[count] = numbers[pickRandom(0,9)];
            count++;
        }
        if (IN_symbols.checked==true) {
            a[count] = symbols[pickRandom(0,sym-1)];
            count++;
        }
        return a;
    }
   
}

function pickRandom(a , x) {
        return Math.floor(Math.random() * (x - a + 1)) + a;
}
function LCM(num1, num2) {
    let min = Math.max(num1, num2);
    while (true) {
        if (min % num1 === 0 && min % num2 === 0) {
            return min;
        }
        min++;
    }
}
function HCF(num1,num2) {
    return (num1*num2)/LCM(num1,num2);
}
updateSliderRange();
controlChecks();
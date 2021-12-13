//El Grinch quiere fastidiar la navidad

export default function isValid(letter) {
    // ¡No dejes que el Grinch gane!
   var bool = false;
   var parentesis = "";
   var cantidadA = 0;
   var cantidadC = 0;
   for (var i = 0; i < letter.length; i++){
       if (letter.charAt(i) === ')'){
           cantidadA += 1;
       }
       if (letter.charAt(i) === '('){
           cantidadC += 1;
       }
   }
   if (cantidadA === cantidadC && cantidadA > 0){
       parentesis = letter.substring(letter.indexOf('(') + 1, letter.lastIndexOf(')'));
       
       if (parentesis.includes('(')){
           parentesis = parentesis.substring(letter.indexOf('(') + 1, parentesis.lastIndexOf(')'));
       }
       if (parentesis !== ''){
       bool = parentesis.includes('{') || parentesis.includes('[');
       }else{
           bool = true;
       }
   }else{
       bool = true;
   }
   
    return !bool;
   }
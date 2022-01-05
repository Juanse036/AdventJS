//¿Una carta de pangramas? ¡QUÉ!

export default function pangram(letter) {
    // ¡No olvides compartir tu solución en redes!
     const abc = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
   
     var lettersin = letter.replace(/[^a-zA-Z 0-9.]+/g,' ');
   
     var letteresp = letter.toLowerCase().split('').sort();
     letteresp = letteresp.filter(el => {return el !== ' '});
   
     var letter1 = lettersin.normalize('NFD').replace(/[\u0300-\u036f]/g,"");
     var array = letter1.toLowerCase().split('').sort();
     array = array.filter(el => {return el !== ' '});
     array = array.filter((el,idx) => { return array.indexOf(el) === idx;});
   
     if(abc.length !== array.length) return false;
     if(!letteresp.includes('ñ')) return false;
   
     return true
   }
//Descifrando los números

export default function decodeNumber(symbols) {
    // ¡No olvides compartir tu solución en redes!
   var num = symbols.split('');
   num = num.map(el => {
       if(el === '.'){
           return 1;
       }
       if(el === ','){
           return 5;
       }
       if(el === ':'){
           return 10;
       }
       if(el === ';'){
           return 50;
       }
       if(el === '!'){
           return 100;
       }
   })
   var result = num[num.length -1];
   console.log(result)
   for ( var i = num.length -1; i > 0; i--){
       if(num[i] > num[i-1]){
           result -= num[i-1];
       }else{
           result += num[i-1];
       }
   }
   return result;
   }
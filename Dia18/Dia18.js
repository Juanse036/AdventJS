//El sistema operativo de Santa Claus

export default function fixFiles(files) {
    // ¡No olvides compartir tu solución en redes!
    var temp = 0;
   var unicos1=[];
   for(var i = 0; i < files.length; i++){
       temp = 0;
       if(files.indexOf(files[i]) == i){
           unicos1[i] = files[i];
       }
       for(var j = i+1; j < files.length; j++){
           if(unicos1[i] === files[j]){
               temp += 1;
               console.log(temp, j);
               unicos1[j] = files[j] + '(' + temp + ')' 
           }
       }
   }
     return unicos1;
   }
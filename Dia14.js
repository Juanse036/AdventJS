//En busca del reno perdido

export default function missingReindeer(ids) {
    // ¡No olvides compartir tu solución en redes!
     var max = Math.max(...ids);
     for (var i = 0; i < max + 1; i++){
       if(ids.includes(i) === false){
         return i
       }
     }
    return max + 1;
  }
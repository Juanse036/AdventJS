//La ruta con los regalos

export default function canCarry(capacity, trip) {
    // ¡No olvides compartir tu solución en redes!
   var bool = true;
   var regalos = 0;
   
   trip.map(el => {
     if (el[0] > capacity) bool = false;
   })
   
   for(var i = 0; i < trip.length - 1; i++){
       //console.log(trip[i][0], trip)         
       if(trip[i][2] > trip[i+1][1]){
           regalos = trip[i][0] + trip[i+1][0]
           if(regalos > capacity) bool = false;
       }
   }
   //console.log(capacity, bool, trip)
   
     return bool;
   }
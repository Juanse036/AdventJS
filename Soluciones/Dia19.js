//¿Qué deberíamos aprender en Platzi?

export default function learn(time, courses) {
    // ¡No olvides compartir tu solución en redes!
     var ideal = 0;
     var idx1 = 0;
     var idx2 = 0;
   
   for(var i = 0; i < courses.length; i++){
       for(var j = i+1; j < courses.length; j++){
        if(courses[i] + courses[j] < time + 1 && courses[i] + courses[j] > ideal){
            ideal = courses[i] + courses[j];
            idx1 = i;
            idx2 = j;
        }   
       }
   }
   console.log(idx1, idx2, time, courses);
   if(idx2 === 0 ) return null;
   
     return [idx1, idx2];
}
//La ruta perfecta para dejar los regaloss

function recorrer(camino, salto){
    console.log(salto);
      for (var i=0; i < camino.length; i += salto ){
          if (camino[i] == 'X'){
              return false;
          }
      }
      return true;
  }
  
  export default function getMinJump(obstacles) {
    // ¡No olvides compartir tu solución en redes!
    var obstaclesmayor = Math.max(...obstacles);
    var camino = [];
    for (var i=0; i < obstaclesmayor + 1; i++ ){
        camino[i] = i;
    }
    var salto = 0;
    var bool = false
  
  obstacles.forEach(el => {
      camino.splice(el, 1,'X');
  });
  
  do {  
    salto += 1;
    bool = recorrer(camino, salto);  
  } while (bool == false);
  
    
    return salto;
  }
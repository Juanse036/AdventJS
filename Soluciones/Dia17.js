//La locura de enviar paquetes en esta época

var nombres = [];

function analizar(array, nombre){
    for (var i = 0; i < array.length; i++){
        
        if(array[i][0] == nombre && array[i][2] !== []){
            for (var j = 0; j < array[i][2].length; j ++){
                nombres.push(array[i][2][j]);
                analizar(array, array[i][2][j])
            }
        }
    }
}

export default function countPackages(carriers, carrierID) {
nombres = [];
var total = 0;
nombres.push(carrierID);
 // ¡No olvides compartir tu solución en redes!
for (var i = 0; i < carriers.length; i++){    
    if(carriers[i][0] == carrierID && carriers[i][2] !== []){
        for (var j = 0; j < carriers[i][2].length; j ++){
            nombres.push(carriers[i][2][j]);
            analizar(carriers, carriers[i][2][j]);
        }
    }    
}
carriers.map(el => {
  if(nombres.includes(el[0])){
    total += el[1];
  }
})

  console.log(nombres, total,carriers, carrierID)
  return total;
}
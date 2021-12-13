//Envuelve regalos con asteriscos

export default function wrapGifts(gifts) {
    // ¡No olvides compartir tu solución en redes!
    var relleno = '**'
  for (var i = 0; i < gifts[0].length; i++){
      relleno += '*';
  }
  for (var i = 0; i < gifts.length; i++){
      gifts.splice(i,1,`*${gifts[i]}*`);
  }
  
    gifts.splice(0,0,relleno);
    gifts.splice(gifts.length,0,relleno);
    console.log(gifts);
    return gifts;
  
  }
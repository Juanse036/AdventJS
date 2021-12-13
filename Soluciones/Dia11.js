//Vale la pena la tarjeta de fidelidad del cine?

export default function shouldBuyFidelity(times) {
    // ¡No olvides compartir tu solución en redes!
    var Descuento = 250;
    var Entrada = 12*times;
    for (var i = 1; i < times + 1; i++){
        Descuento += (12 * (0.75**i));
    }  
    return Descuento < Entrada;
  }
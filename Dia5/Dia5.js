//COntando los días para los regalos

export default function daysToXmas(date) {
    // ¡Y no olvides compartir tu solución en redes!
  const Navidad = new Date('Dec 25, 2021');
  var Tiempo = Navidad.getTime() - date.getTime();
  var Dias = Tiempo / (1000 * 3600 * 24);
  Dias = Math.ceil(Dias);
    return Dias;
}
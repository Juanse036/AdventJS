//¡Ayuda el elfo a listar los regalos

export default function listGifts(letter) {
    // ¡Tú puedes!
   
   const lista = letter.split(" ").filter(lista => lista.substr(0,1) !== '_' && lista !== '');
   const listaunica = lista.filter((ele , pos) => lista.indexOf(ele) === pos);
   const indices = [0,0,0,0];
   const regalos = {};
   
   for (var i = 0; i < listaunica.length; i++) {
     for (var j = 0; j < lista.length; j++) {      
       if (listaunica[i] === lista[j]) {
         indices[i] = indices[i] + 1;
       }    
     }
   }
   listaunica.forEach((ele, idx) => regalos[ele] = indices[idx]);
    return regalos;
   }
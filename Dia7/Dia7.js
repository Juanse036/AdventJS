//Buscando en el almacén

var bool = false;
export default function contains(store, product) {
  // ¡Y no olvides compartir tu solución en redes!
    bool = false;
    
    for (var key in store) {
        // skip loop if the property is from prototype
        if (!store.hasOwnProperty(key)) continue;
    
        var obj = store[key];

        for (var prop in obj) {
            // skip loop if the property is from prototype
            if (!obj.hasOwnProperty(prop)) continue;
            // your code
            //console.log(prop + " = " + obj[prop]);
            if (obj === product){
            bool = true;
            return bool
            
            }
            if (typeof(obj[prop]) == 'object'){
                contains(obj[prop], product)
            }
            //console.log(typeof(obj[prop]));
        }    
}

  return bool;
}
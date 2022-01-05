//Agrupando cosas automáticamente

export default function groupBy(collection, it) {
    // ¡No olvides compartir tu solución en redes!
    return collection.reduce((prev, next) => {
        var key;
        if(typeof it === 'function'){
          key = it(next);
        }else{
          key = next[it];
        }
        prev[key] ??= [];
        prev[key].push(next)
        return prev;
    }, {})   
  }
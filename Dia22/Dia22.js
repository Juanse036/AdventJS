//¿Cuantos adornos necesita el árbol?

var total = 0;

function analizar(Tree){
    total += Tree.value;
    if(Tree.left !== null){ 
        analizar(Tree.left);
        
    }
    if(Tree.right !== null){
      analizar(Tree.right);  
    } 
    
}
export default function countDecorations(bigTree) {
 // ¡No olvides compartir tu solución en redes!
 total = 0
 analizar(bigTree); 
  return total;
}
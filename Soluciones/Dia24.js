//Comparando árboles de Navidad

var total1 = 0;
var totalleft1 = 0;
var totalright1 = 0;
var total2 = 0;
var totalleft2 = 0;
var totalright2 = 0;

function analizar1(Tree){
    total1 += Tree.value;
    if(Tree.left !== null){ 
        analizar1(Tree.left);
        totalleft1 += Tree.left.value;
    }
    if(Tree.right !== null){
      analizar1(Tree.right);  
      totalright1 += Tree.right.value;
    }    
}

function analizar2(Tree){
    total2 += Tree.value;
    if(Tree.left !== null){ 
        analizar2(Tree.left);
        totalleft2 += Tree.left.value;
    }
    if(Tree.right !== null){
      analizar2(Tree.right);  
      totalright2 += Tree.right.value;
    }    
}

export default function checkIsSameTree(treeA, treeB) {
 // ¡No olvides compartir tu solución en redes!
   total1 = 0
   total2 = 0
   totalleft1 = 0
   totalleft2 = 0
   totalright1 = 0
   totalright2 = 0
  analizar1(treeA); 
  analizar2(treeB); 
 
 if(total1 === total2 && totalleft1 === totalleft2 && totalright1 === totalright2){
   return true;    
 }
 return false;
}
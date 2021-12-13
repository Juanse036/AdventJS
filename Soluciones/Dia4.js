//¡Es hora de poner la navidad en casa!

export default function createXmasTree(height) {
    // ¡Y no olvides también poner los turrones!
  var final=1;
  var cantidadestrellas = 1;
  var arbol = '';
  var lineas='_';
  var estrellas = '*';
  var tronco = '#';
  var cantidadlineas;
  
  
  for (var i = 2; i <= height; i++){
      final += 2;
  }
  for (var i = 1; i <= height; i++){
      
      cantidadlineas = (final-cantidadestrellas)/2;
          
      for (var j = 0; j < cantidadlineas; j++){
       arbol += lineas;   
      }
      for (var j = 0; j < cantidadestrellas; j++){
       arbol += estrellas;   
      }
      for (var j = 0; j < cantidadlineas; j++){
       arbol += lineas;   
      }
      arbol += '\n';
      cantidadestrellas += 2;
  }
  
  for (var i = 0; i < 2; i++){
      cantidadlineas = (final-1)/2;
      for (var j = 0; j < cantidadlineas; j++){
       arbol += lineas;   
      }
       arbol += tronco;   
       for (var j = 0; j < cantidadlineas; j++){
       arbol += lineas;   
      }
      arbol += '\n';    
  }
    arbol = arbol.substring(0, arbol.length - 1);
    return arbol;
  }
//Rematando los exámenes finales

export default function sumPairs(numbers, result) {
    // ¡Y no olvides compartir tu solución en redes!
    var numeros= [];
  
  for (var i=0; i < numbers.length; i++){
      for (var j=i+1; j < numbers.length; j++){
          if (numbers[i] + numbers[j] == result){
              numeros.push(numbers[i]);
              numeros.push(numbers[j]);
              return numeros
          }
      }
  }
  if (numeros.length == 0){
      return null;
  }
    
  }
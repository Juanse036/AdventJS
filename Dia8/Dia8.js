//La locura de las criptomonedas

export default function maxProfit(prices) {
    // ¡Y no olvides compartir tu solución en redes!
    var valor = -1;
  
    for (var i = 0; i < prices.length; i++){      
        for (var j = i+1; j < prices.length; j++){            
            if (prices[i] < prices[j] && (prices[j]-prices[i])>valor){
                valor = prices[j] - prices[i];
            }
        }
    }  
    return valor
  }
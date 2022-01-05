//La máquina de cambio



function arrayCoins(change, coins){
    if (change>49){
          coins[5] += 1;
          arrayCoins(change-50,coins);
      }else if (change>19){
          coins[4] += 1;
          arrayCoins(change-20,coins);
      }else if (change>9){
          coins[3] += 1;
          arrayCoins(change-10,coins);
      }else if (change>4){
          coins[2] += 1;
          arrayCoins(change-5,coins);
      }else if (change>1){
          coins[1] += 1;
          arrayCoins(change-2,coins);
      }else if (change>0){
          coins[0] += 1;
          arrayCoins(change-1,coins);
      }
      return coins;
  }
  
  
  export default function getCoins(change) {
    var coins = [0,0,0,0,0,0];
    var result = arrayCoins(change, coins);
      
    return result;
  }
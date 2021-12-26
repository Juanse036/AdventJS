export default function canMouseEat(direction, game) {
    var pos = [];
    console.log(direction, game)
     for(var i = 0; i < game.length; i++){
         for(var j = 0; j < game[i].length; j++){
             if (game[i][j] == "m") pos = [i,j];
         }
         
     }
     console.log(pos)
     
     if(direction == "up"){
         if(pos[0] == "0") return false;
         if(game[pos[0] - 1][pos[1]] == "*") return true
         
         return false
     }
     if(direction == "down"){
         if(pos[0] + 1 == game.length) return false;
         if(game[pos[0] + 1][pos[1]] == "*") return true
         
         return false
     }
     if(direction == "right"){
         if(game[pos[0]][pos[1] + 1] == "*") return true
         
         return false
     }
     if(direction == "left"){
         if(game[pos[0]][pos[1] -1] == "*") return true
         
         return false
     }
     
     return false
   }
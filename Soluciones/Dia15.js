//El salto perfecto

  export default function checkSledJump(heights) {
    // ¡No olvides compartir tu solución en redes!
    var temp = false;
    var max = Math.max(...heights);
    if(heights.indexOf(max) + 1 == heights.length){
        return false
    }
    for (var i = 0; i < heights.length; i++){
        if (heights[i] == max){
            temp = true;
        }
        if(!temp && heights[i] >= heights[i+1]){
            return false;
        }
        if(temp && heights[i] <= heights[i+1]){
            return false;
        }      
    }
    return true
  }
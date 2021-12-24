export default function canReconfigure(from, to) {
    // ¡No olvides compartir tu solución en redes!
   if(from.length !== to.length){   
     //console.log(from, to);
     return false;  
   }
   var arr1 = from.split("");
   var arr2 = to.split("");
   var rep1 = [];
   var rep2 = [];
   var unico1= [];
   var unico2= [];
   var bool = false;
   
   arr1.forEach((item, idx)=>{
           //pushes only unique element
           if(!unico1.includes(item)){
               unico1.push(item);
           }else{
               rep1.push(unico1.indexOf(item));
               rep1.push(idx);
               rep1.push(item);
           }
           
   })
   arr2.forEach((item, idx)=>{
           //pushes only unique element
           if(!unico2.includes(item)){
               unico2.push(item);
           }else{
               rep2.push(unico2.indexOf(item));
               rep2.push(idx);
               rep2.push(item);
           }
   })
   
   if (rep1.length !== rep2.length){ 
     //console.log(from, to, rep1, rep2);
     return false;
   }
   for(var i = 0; i < rep1.length; i++){
       if(typeof rep1[i] === 'number' && rep1[i] !== rep2[i]){ 
           return false;
       }
   }
     //console.log(from, to, rep1, rep2);
     return true
   }
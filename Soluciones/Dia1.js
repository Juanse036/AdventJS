//Contando ovejas para dormir

export default function contarOvejas(ovejas) {
    // aquí tu magia
   return ovejas = ovejas.filter(ele => {
      return ele.name.toLowerCase().includes('n') && ele.name.toLowerCase().includes('a') && ele.color === 'rojo';    
    });
  }
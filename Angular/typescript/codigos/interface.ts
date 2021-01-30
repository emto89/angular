( ()=> {
  
    interface Avenger{
        nombre: string;
        edad: number;
        poder?: string;
    }

    const enviarMision = (avenger: Avenger) => {
        console.log(`Enviando a ${avenger.nombre} a la mision`);
    }
    
    const regresarAlCuartel = (avenger: Avenger) => {
        console.log(`Regreso ${avenger.nombre} de la mision`);
   }

    const avenger: Avenger = {
        nombre: 'Thor',
        edad: 10
    };
 
    enviarMision(avenger);
    regresarAlCuartel(avenger);
    
    
})();
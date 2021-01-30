( ()=> {
  
    console.log('Inicio');
    
    const promesa = new Promise((resolve, reject) => {
       
        setTimeout(() => {
            // resolve('Se termino exitosamente');
            reject('Fallo la tarea');
        }, 1000);

    });

    promesa
        .then(mensaje => console.log(mensaje))
        .catch(err => console.warn(err));


    console.log('Termino');
 
})();
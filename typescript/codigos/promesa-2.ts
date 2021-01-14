( ()=> {
  
    const retirarDinero = (montoRetirar: number) => {
        let dineroActual = 10000;
        return new Promise((res, rej) => {
            if (montoRetirar > dineroActual) {
                rej('No hay fondos suficientes');
            } else {
                dineroActual -= montoRetirar;
                res(dineroActual);
            }
        });
     }
     
    retirarDinero(50000)
        .then(dineroActual => console.log(` Me queda ${dineroActual}`))
        .catch(console.warn);
    
    console.log('Cajero');
    
})();
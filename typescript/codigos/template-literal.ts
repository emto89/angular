(function () {
     
    const nombre = 'Martin';
    const apellido = 'Diaz';
    const edad = '31';
     
    function getEdad() {
        return 31 + 500;
    }

    const salida = nombre + " " + apellido + " (" + getEdad() + ")" ;
    
    const salida1 = ` ${nombre} ${apellido} ( ${ getEdad() } ) `;
    
    console.log(salida1);

})();
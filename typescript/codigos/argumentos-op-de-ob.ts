(function () {
    // Funcion con parametros obligatorios 
    // function activar(quien: string) {
    //     console.log(`${quien} activo.`);
    // }
    //  Funcion con parametro obligatorio y por defecto
    // function activar(quien: string, objeto = 'Batiseñal') {
    //     console.log(`${quien} activo la ${objeto}`);
    // }
    // EL ORDEN ES: PRIMERO VAN OBLIGATORIOS, OPCIONALES, DEFECTO
    function activar(quien: string,
        momento?: string,
        objeto = 'Batiseñal') {
        
        if (momento) {
            console.log(`${quien} activo la ${objeto} en la ${momento}`);
        } else {
            console.log(`${quien} activo la ${objeto}`);
        }
        
    }
    activar('Gordon','BT');
     
})();
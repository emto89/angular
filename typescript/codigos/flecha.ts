(function () {
   
    // let miFuncion = function (numero1:number) {
    //     return numero1; 
    // }
    
    const miFuncion = function (a:string) {
        return a.toUpperCase;
    }

    const miFuncionF = (a: string) => a.toUpperCase;

    const sumarN = function (a: number, b: number) {
        
        return a + b; 
    }

    const sumarF =  (a:number, b:number) => a + b; 
       
    const hulk = {
        nombre: 'Hulk',
        smash() {
            setTimeout( ()=> {
                console.log(` ${ this.nombre } smash!!!`);
            }, 1000);
        }
    }

    hulk.smash();

})();
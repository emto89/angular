( ()=> {
  
    class Avenger {

        constructor(
            public nombre: string,
            public equipo: string,
            public nombreReal?: string,
            public peleasGanadas: number = 0
        ) { }
        

    }
    
    const antman = new Avenger('Antman','Capitan');
    console.log(antman);
    
})();
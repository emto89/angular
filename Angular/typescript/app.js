"use strict";
(() => {
    class Avenger {
        constructor(nombre, equipo, nombreReal, peleasGanadas = 0) {
            this.nombre = nombre;
            this.equipo = equipo;
            this.nombreReal = nombreReal;
            this.peleasGanadas = peleasGanadas;
        }
    }
    const antman = new Avenger('Antman', 'Capitan');
    console.log(antman);
})();

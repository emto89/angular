(function () {
  
    const avenger = {
        nombre:'Tony',
        heroe: 'Ironman',
        poder: 'Rayos'
    }

    // console.log(avenger.nombre);
    // console.log(avenger.heroe);
    // console.log(avenger.poder);
    
    const { nombre, heroe, poder } = avenger;

    // console.log(nombre);
    // console.log(heroe);
    // console.log(poder);
     
    const extraer = ({ nombre, poder }: any) => {
        
    console.log(nombre);
    console.log(poder);
        
    }
    
    // extraer(avenger);

    const avengers: string[] = ['Thor', 'Iroman', 'Spiderman'];
   
    const [, , c] = avengers; 

    // console.log(c);

    // const extraerArr = (avengers: string[]) => {
    const extraerArr = ([thor,iroman,spiderman]: string[]) => {
        console.log(thor);
    }
    
    extraerArr(avengers);

})();
const personas =[
    {nombre: "Ana", edad: 22},
    {nombre: "Luis", edad: 35},
    {nombre: "Maria", edad: 28}
];


const buscLuis = personas.find(persona => persona.nombre === "Luis" ); 
 console.log(buscLuis);


personas.forEach(persona => {
    console.log(`${persona.nombre}, ${persona.edad}`);
}); 



const totaledades = personas.reduce((total, persona)=>{
    return total + persona.edad;},0);

console.log(`Total de edades: ${totaledades}`); 
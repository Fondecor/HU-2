// creación de los objetos
const productos = {
    "p1": { id: "p1", nombre: "chocolate", precio: 3000 },
    "p2": { id: "p2", nombre: "gomitas", precio: 150 },
    "p3": { id: "p3", nombre: "helado", precio: 300 },
    "p4": { id: "p4", nombre: "refresco", precio: 600}
};


// Se crea un set con una lista de números que incluyan valores repetidos

const numerosSet = new Set ([10, 20, 30, 20, 40, 10, 50, 10]);

// Se imprime en la consola el contenido del Set para que se pueda mostrar cómo eliminar los duplicados
console.log(" Contenido inicial del Set(Los duplicados han sido eliminados automaticamente) ");
console.log(numerosSet);

// Se agrega un nuevo número al Set utilizando el metodo .add()
numerosSet.add(60);

// Se verifica si un número específico existe dentro del Set con .has()
const numeroABuscar = 30;
console.log(`¿El número ${numeroABuscar} existe en el Set?: ${numerosSet.has(numeroABuscar)}`);

// Se elimina un número del Set con .delete()
numerosSet.delete(20);

// Se recorre el Set utilizando un for..of para la muestra de cada valor
console.log("Los valores del Set recorridos con for..of");
for (let numero of numerosSet) {
    console.log(`-> Número: ${numero}`);
}


// El map requiere datos filtrados por lo que se aplica la validación aquí
const productosValidos = {};
Object.entries(productos).forEach(([clave, producto]) => {
    // Se valida que tenga ID numérico, nombre no vacío y precio mayor o igual a 0
    if (typeof producto.id === "string" && producto.nombre.trim() !== "" && producto.precio >= 0) {
        productosValidos[clave] = producto;
    }
});

// Crea un Map que relacione la categoría del producto (clave) con el nombre (valor)
const categoriasMap = new Map();
categoriasMap.set("Computación", productosValidos.p1.nombre);
categoriasMap.set("Accesorios", productosValidos.p2.nombre);
categoriasMap.set("Pantallas", productosValidos.p3.nombre);
categoriasMap.set("Periféricos", productosValidos.p4.nombre);




// for…in para listar propiedades y valores del objeto
console.log("\n--- Iteración del Objeto (for...in) ---");
for (let clave in productosValidos) {
    console.log(`Propiedad: ${clave} -> ID: ${productosValidos[clave].id}, Nombre: ${productosValidos[clave].nombre}`);
}

// Usa for…of para recorrer el Set
console.log("\n--- Iteración del Set (for...of requerido en Task 4) ---");
for (let valor of numerosSet) {
    console.log(`Valor del Set: ${valor}`);
}

// Usa forEach() para recorrer el Map y mostrar claves y valores de forma descriptiva
console.log("\n--- Iteración del Map (forEach) ---");
categoriasMap.forEach((valor, clave) => {
    console.log(`La categoría [${clave}] contiene el producto: ${valor}`);
});




console.log(" PRUEBAS FINALES (TASK 5)");

// Prueba 1: Lista completa de productos (objeto) usando métodos de objetos
console.log("1. Lista completa de productos limpios (Object.values):");
console.log(Object.values(productosValidos));

// Prueba 2: Lista de productos únicos (Set)
const productosUnicosSet = new Set(Object.values(productosValidos).map(p => p.nombre));
console.log("\n2. Lista de productos únicos (Set de nombres):");
console.log(productosUnicosSet);

// Prueba 3: Categorías y nombres de productos (Map)
console.log("\n3. Estructura completa del Map (Categorías):");
console.log(categoriasMap);

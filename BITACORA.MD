Dsarrollo prueba tecnica ecomsur

## 1. Instalar y Correr la aplicación

Instalar API (backend) y la aplicacion React (front):

1. En la carpeta `root` de la aplicacion correr:
   `npm install`
2. Navega al directorio `front` y vuelve a correr el comando:
   `npm install`
3. Regresa al directorio root `cd ..`.

4. ejecutar con el comando 

    npm tun dev


## 2. explicación del proceso

1. la prueba se trabajo con el framework React como viene estipulado en la prueba
2. para la consistencia de la información se uso redux
3. se utilizo un fecth para tomar la información de la api local
4. en el componente ListProducts se colocaron los productos con su información
5. En el componente DetailProduct se da la descripción de cada componente con su boton para ser agregado al carrito
6. en el componente Carticon está el icono del carro y el número de productos que se ingresaron, en este punto si agregan 2 iphone el carro muestra el numero 2.
7. el componente car, contiene los objetos agregados al carro y un boton para elminarlos
8. en los directorios actions encontraremos las acciones de car y products
9. en los directorios reducers encontraremos los casos y el manejo de redux
10. en el directorio type las posibles acciones
11. se utilizo localstorage para conservar el historial de stock y del carrito


atento a su retroalimentación y agradeciendo su oportunidad

Felipe Ortiz B.
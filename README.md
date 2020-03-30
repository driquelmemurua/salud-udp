# salud-udp
## Guía para correr con expo:
1) clonar el repositorio
2) `npm install`
3) instalar expo en caso de no tenerlo `npm install expo-cli --global`
4) `npm start`
5) abrir la aplicación de expo en su dispositivo y leer código QR
## Guía para buildear:
https://docs.expo.io/versions/latest/distribution/building-standalone-apps/
## Carga de archivos
### PDFs
Para cargar un nuevo PDF a la aplicación este debe convertirse a formato Base64. en la carpeta [/assets/pdfs](https://github.com/driquelmemurua/salud-udp/tree/master/assets/pdfs) se debe crear un nuevo archivo json con el siguiente formato:
```
{
  "base64": ...
}
```
Luego en el archivo **index.ts** en esa misma carpeta se debe importar el archivo json y reexportarlo en el default export con el nombre que usted desee utilizar.
### Videos
Para cargar un nuevo video a la aplicación este debe subirse a la carpeta [/assets/videos](https://github.com/driquelmemurua/salud-udp/tree/master/assets/videos). [En este enlace](https://exoplayer.dev/supported-formats.html) se encuentra una lista con los formatos soportados.
Luego se debe agregar el nuevo video subido al json ubicado en el archivo **index.ts** de la misma carpeta, donde la llave es el nombre del video y el valor es el video importado através de la función *require()*
## Carga de datos
La información de la aplicación se encuentra en la carpeta [/constants](https://github.com/driquelmemurua/salud-udp/tree/master/constants). En el archivo **index.ts** se exporta todo.
*Nota: Todos los id en los jsons deben ser únicos*
### Contactos
En el archivo **contactos.ts** se encuentran dos jsons importantes **CONTACTOS** y **EMERGENCIAS**. 
El primero son los números telefónicos con nombre, estos poseen el siguiente formato:
```
{
  "id": string,
  "name": string,
  "number": string,
  "schools": array<string> // Arreglo con las escuelas a las que pertenece el contacto, si se omite el campo toma en cuenta todas las escuelas
}
```
El segundo son los números anónimos, estos poseen el siguiente formato:
```
{
  "id": string,
  "number": string,
  "schools": array<string> // Arreglo con las escuelas a las que pertenece el contacto, si se omite el campo toma en cuenta todas las escuelas
}
```
### Direcciones
En el archivo **direcciones.ts** se encuentran el json **DIRECCIONES**, este posee el siguiente formato:
```
{
  "id": string,
  "name": string,
  "coordinates": 
  {
    latitude: float,
    longitude: float,
    latitudeDelta: float,
    longitudeDelta: float
  },
  address: string
  "schools": array<string> // Arreglo con las escuelas a las que pertenece el contacto, si se omite el campo toma en cuenta todas las escuelas
}
```
### Instructivos
En el archivo **instructivos.ts** se encuentran el json **INSTRUCTIVOS**, este posee el siguiente formato:
```
{
  "id": string,
  "name": string,
  "type": 'Vídeo' | 'Documento' | 'Normativa',
  "file": 'string', // Nombre del archivo, si es un video, es la llave del json exportado de ./assets/videos, si es pdf es la llave del json exportado en ./assets/pdfs
  "schools": array<string> // Arreglo con las escuelas a las que pertenece el contacto, si se omite el campo toma en cuenta todas las escuelas
}
```
### Accidentes
En el archivo **accidentes.ts** se encuentran el json **ACCIDENTES_VIEWS**, este posee el siguiente formato:
```
{
  "id": string,
  "name": string,
  "file": 'string', // Nombre del archivo pdf, es la llave del json exportado en ./assets/pdfs
  "schools": array<string> // Arreglo con las escuelas a las que pertenece el contacto, si se omite el campo toma en cuenta todas las escuelas
}
```

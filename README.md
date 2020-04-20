# Para consumir la API

Primero que todo se debe clonar el repositorio, luego ejecutarlo. En caso de que no se ejecute por as dependencias debe instalarlas. Se recomienda usar Postman para probarla.

## Para agregar un estudiante:

Se usa la ruta http://localhost:3000/student/create la cual usa el metodo post y se envia el Json con la información (id, firstName, lastName, curse y note). Si el post es correcto enviara un mensaje "Student created succesfuly" 

## Para mostrar información de un estudiante (Get)

Se usa la ruta http://localhost:3000/id, siendo el id la identificación de estudiante que desea ver, haciendo uso del metodo Get. Si el id se encuentra en la base de datos mostrara toda la info asociada a ese id (id, firstName, lastName, curse y note).

## Para mostrar información de los estudiantes (Get)

Se usa la ruta http://localhost:3000/, trayendo así toda la información que se encuentra en la colección, haciendo uso del metodo Get. Esto mostrara toda la info de los estudiantes en la coleccion (id, firstName, lastName, curse y note) además del _id que lo crea mongo para cada dato.

## Para eliminar

Se usa la ruta http://localhost:3000/id, siendo el id la identificación de estudiante que desea eliminar, haciendo uso del metodo delete. Si se elimina de manera adecuada mostrara la información asociada al id (id, firstName, lastName, curse y note) la cual se acaba de eliminar.

## Para actualizar la información de un estudiante

Se usa la ruta http://localhost:3000/id, siendo el id la identificación de estudiante que desea actualizar, haciendo uso del metodo put. También se debe enviar en el body los campos que se desean actualizar del estudiante. Si el se realiza de manera satisfactoria, mostrara toda la info asociada a ese id (id, firstName, lastName, curse y note) y se vera los campos actualizados.


## Para actualizar la información de varios estudiants

Se usa la ruta http://localhost:3000/firstName, siendo el firstName el nombre de los estudiantes que desean actualizar, haciendo uso del metodo put. También se debe enviar en el body los campos que se desean actualizar de los estudiantes. Si el se realiza de manera satisfactoria, mostrara toda la info asociada a ese id (id, firstName, lastName, curse y note) y se vera los campos actualizados.

## Promedio de un curso

Se usa la ruta http://localhost:3000/curse, siendo el curse el nombre del curso del cual se desea saber el promedio, haciendo uso del metodo get. Si el curso existe, mostrara el promedio de dicho curso.

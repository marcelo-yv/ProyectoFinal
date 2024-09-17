# Proyecto de Servicio de Streaming

## Descripción del Proyecto

Este proyecto es un servicio de streaming desarrollado como parte del curso ofrecido por RollingCode. El objetivo es crear una plataforma donde los usuarios puedan acceder a una amplia variedad de películas y series de manera fácil y rápida. Este servicio de streaming está diseñado para ofrecer una experiencia de usuario fluida y atractiva, utilizando las tecnologías más recientes para garantizar un rendimiento óptimo y una interfaz intuitiva.

## Tecnologías Utilizadas

- **Frontend**: HTML5, CSS3, JavaScript y Boostrap.

## Equipo

- **Nanci Guzman**: Scrum Master - DeV 1
- **Marcelo Leandro Younes Vidal**: Dev 2


## Alcance del Proyecto

En este proyecto, los alumnos trabajarán en grupo y se dividirán las tareas necesarias para diseñar el maquetado de un sitio web para un servicio de streaming al estilo de Netflix, Amazon Prime, Disney+, entre otros.

## Requerimientos

### Estructura General del Sitio

#### Navbar
El navbar deberá cumplir con los siguientes requerimientos:
- Agregar un input de búsqueda para las películas o series.
- Agregar un botón de login que redirija a la página de login o ventana modal, y un botón de suscripción que nos lleve a la página de suscripción.
- En dispositivos grandes, el navbar debe estar fijo. En el resto de los dispositivos, queda a criterio del grupo de desarrolladores.

*Nota:* Pueden agregar más elementos al navbar si lo consideran necesarios.

#### Footer
El footer debe contener al menos tres columnas, con los siguientes elementos:
- Logo del sitio.
- Íconos de redes sociales.
- Link que direccione a la página "Acerca de nosotros".
- Link que direccione a un formulario de contacto por consultas.

El comportamiento de las columnas deberá ser el siguiente:
- En dispositivos pequeños, mostrar una columna.
- En dispositivos medianos, mostrar dos o las tres columnas (optativo).
- En dispositivos grandes, mostrar las tres columnas.

### Páginas

#### Principal
La página principal debe contener:
- Una imagen o video principal con una película o serie sugerida.
- Al menos tres secciones:
  1. Películas o series sugeridas.
  2. Banner con una promoción de suscripción.
  3. Categorías de películas sugeridas.

*Nota:* Pueden agregar más elementos si lo desean.

#### Categoría
Al seleccionar una categoría (por ejemplo, comedia) en la página principal, redireccionará a una página con una galería de todas las películas/series de esa categoría. Se debe agregar un control de paginación.

*Requerimiento:* Desarrollar dos páginas de categoría, por ejemplo: "Series de comedia" y "Películas de ciencia ficción".

#### Detalle de Película/Serie
Al seleccionar una película o serie desde la página principal o una categoría, se debe mostrar una página con los detalles de la película/serie, que incluya:
- Imagen principal o video.
- Nombre de la película/serie.
- Descripción breve.

Para series:
- Lista de capítulos con imagen pequeña, título y duración.

Para películas:
- Tiempo de duración.
- Edad sugerida.
- Año de publicación.
- Calidad.

Al final de la página, mostrar una lista breve de series o películas relacionadas.

*Nota:* Desarrollar una película y una serie.

#### Login
El navbar debe contener un botón de login que redirija a una página o ventana modal con un formulario para ingresar al perfil del usuario. Al presionar el botón de login, se debería redirigir a la página de error 404.

Validaciones Implementadas en el formulario:
- Correo electrónico: Se valida si tiene el formato correcto.
- Contraseña: Debe tener al menos 8 caracteres, una letra mayúscula, una letra minúscula, un número y un carácter especial.
- Mensajes de error personalizados: Se muestran mensajes de error si los campos no cumplen con las condiciones.
-revenir el envío si hay errores: El formulario no se enviará si hay campos inválidos.

#### Suscripción
Página que muestra los distintos planes de suscripción del servicio de streaming, con sus beneficios y costos. Debajo, un formulario que solicite los siguientes datos:
- Nombre.
- Apellido.
- Email.
- Contraseña.
- Botón para crear cuenta (al presionar este botón, debe redirigir a la página de error 404).

Validaciones Implementadas en el formulario:
- Nombre: Verifica que el campo no esté vacío.
- Correo electrónico: Verifica el formato correcto del correo.
- Edad: Verifica que la edad sea al menos 18 años.
- Sexo: Verifica que se haya seleccionado una opción.
- Contraseña: Verifica que tenga al menos 8 caracteres, incluyendo una letra mayúscula, una minúscula, un número y un carácter especial.
- Confirmación de contraseña: Verifica que las contraseñas coincidan.

Estas validaciones se manejan con JavaScript y se aplican en el momento en que el usuario intenta enviar el formulario. Los campos se marcan con colores según si son válidos o inválidos.

#### Contacto
La página de contacto debe mostrar la dirección de la empresa y un formulario de contacto para consultas.

#### Acerca de Nosotros
Esta página debe contener información sobre el equipo que desarrolló la web, una frase sobre el equipo, y una galería con una foto o avatar de cada miembro del equipo, seguido del nombre de cada uno.

#### Error 404
Diseñar una página con el error 404, que será llamada desde todos los botones o enlaces que no tengan una funcionalidad establecida.

## Evaluación

En este proyecto se evaluará el uso de las siguientes herramientas y conceptos:
- Organización del proyecto usando un panel de Trello grupal (elegir un scrum master por equipo y desarrollar un mockup sencillo).
- Sitio completamente responsive.
- Estructura del proyecto y código limpio.
- Formularios correctamente validados.
- El proyecto debe estar publicado en un servidor.

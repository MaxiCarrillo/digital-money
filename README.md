<a name="readme-top"></a>
<div align="center">
  
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]

## Digital Money
Digital Money es una aplicación de billetera virtual desarrollada con Next.js. La aplicación permite a los usuarios realizar pagos de servicios, gestionar sus finanzas personales y utilizar la billetera desde dispositivos de escritorio, tabletas y móviles.

[Reportar error](https://github.com/MaxiCarrillo/digital-money/issues) · [Sugerir algo](https://github.com/MaxiCarrillo/digital-money/issues)
</div>

<details>
<summary>Tabla de contenidos</summary>

- [Digital Money](#digital-money)
- [Características principales](#características-principales)
  - [Capturas de pantalla de Digital Money](#capturas-de-pantalla-de-digital-money)
- [Para empezar](#para-empezar)
  - [Prerequisitos](#prerequisitos)
  - [Instalación](#instalación)
- [Épicas implementadas](#épicas-implementadas)
  - [Inicio, registro y acceso](#inicio-registro-y-acceso)
  - [Dashboard](#dashboard)
  - [Mi Perfil](#mi-perfil)
  - [Gestión de Medios de Pago](#gestión-de-medios-de-pago)
  - [Ingreso de Dinero](#ingreso-de-dinero)
  - [Mi Actividad](#mi-actividad)
  - [Pago de Servicios](#pago-de-servicios)
- [Contribuir al proyecto](#contribuir-al-proyecto)
- [🛠️ Stack](#️-stack)

</details>

## Características principales

- **Billetera virtual completa**: Gestiona tu dinero de forma digital y segura
- **Pagos de servicios**: Paga tus servicios favoritos directamente desde la aplicación
- **Gestión de tarjetas**: Agrega, visualiza y elimina tarjetas de débito y crédito
- **Transferencias**: Realiza transferencias usando CVU y alias
- **Historial detallado**: Visualiza toda tu actividad con filtros y búsquedas
- **Responsive design**: Compatible con dispositivos de escritorio, tabletas y móviles
- **Autenticación segura**: Sistema de login y registro con validaciones
- **Gestión de perfil**: Edita tus datos personales y configura tu alias

### Capturas de pantalla de Digital Money

<!-- Las imágenes se agregarán posteriormente -->

<p align="right">(<a href="#readme-top">volver arriba</a>)</p>

## Para empezar

### Prerequisitos

- **Node.js** (versión 18 o superior recomendada)
  
  ```sh
  # Comprueba si tienes Node.js instalado
  node -v

  # Si no está instalado, descárgalo desde la página oficial:
  # https://nodejs.org/
  ```

- **NPM** (incluido con Node.js) o **Yarn** (opcional, si prefieres usarlo)

  ```sh
  # Actualiza NPM a la última versión
  npm install -g npm@latest

  # O instala Yarn si prefieres usarlo
  npm install -g yarn
  ```

### Instalación

1. Clona el repositorio:

   ```sh
   git clone https://github.com/MaxiCarrillo/digital-money.git
   cd digital-money
   ```

2. Instala las dependencias:

   ```sh
   npm install
   # O si usas Yarn
   yarn install
   ```

3. Inicia la aplicación en modo desarrollo:

   ```sh
   npm run dev
   # O con Yarn
   yarn dev
   ```

4. Para construir la aplicación para producción:

   ```sh
   npm run build
   npm start
   # O con Yarn
   yarn build
   yarn start
   ```

La aplicación estará disponible en `http://localhost:3000`

<p align="right">(<a href="#readme-top">volver arriba</a>)</p>

<!-- ## Épicas implementadas

### Inicio, registro y acceso

#### **Inicio**
- Diseño responsive para uso desde desktop, tablet y mobile
- Visualización de la comunicación del producto y funcionalidades principales (transferencias y pago de servicios)
- Textos e imagen principal desde la base de datos
- Acceso directo a "Iniciar sesión" y "Registro"

#### **Registro**
- Validaciones completas de los datos ingresados
- Registro correcto tras validación de datos
- Mensajes informativos ante datos incorrectos
- Redirección automática a la página de Login tras registro exitoso

#### **Acceso**
- Validación de campos requeridos (email y contraseña)
- Mensajes informativos en la pantalla de login
- Ingreso de usuario y contraseña en dos pasos/pantallas distintas
- Redirección a `/dashboard` tras login correcto
- Link para registrar nueva cuenta

#### **Cierre de Sesión**
- Persistencia de sesión al recargar el navegador
- Redirección a la página promocional tras cerrar sesión
- Eliminación segura del token del local storage

### Dashboard

#### **Inicio**
- Visualización del saldo disponible con precisión de centavos en ARS
- Accesos directos a "Ingresar dinero" y "Ver mi CVU"
- Barra lateral con menú siempre visible
- Interfaz intuitiva y responsive

#### **Actividad**
- Resumen de los últimos movimientos de ingreso y egreso
- Buscador integrado para filtrar transacciones
- Botón "Ver toda la actividad" para acceso completo al historial

### Mi Perfil

#### **Datos Personales**
- Edición de datos personales y alias desde la misma pantalla
- Alias conformado por 3 palabras separadas por puntos "X.X.X"
- Funcionalidad para copiar CVU y alias al clipboard
- Contraseña oculta con asteriscos (******)
- Redirección a "Gestión de medios de pago"

### Gestión de Medios de Pago

#### **Agregar Tarjeta**
- Botón "Alta de tarjeta" con redirección a pantalla específica
- Límite máximo de 10 tarjetas con mensaje informativo
- Detección automática del tipo de tarjeta (Visa, Mastercard, AMEX) por los primeros 4 dígitos

#### **Ver Tarjetas**
- Visualización de todas las tarjetas asociadas a la cuenta
- Mostrar solo los últimos 4 dígitos por seguridad

#### **Eliminar Tarjeta**
- Funcionalidad de eliminación con confirmación
- Mensaje informativo: "No tienes tarjetas asociadas" al eliminar la última

### Ingreso de Dinero

#### **Medios de Pago**
- Listado de medios de pago dados de alta
- Selección de medios de pago adheridos
- Ingreso del monto a cargar con validaciones
- Pantalla resumen con comprobante de ingreso
- Visualización de CVU y alias de cuenta
- Funcionalidad para copiar y guardar CVU y alias en memoria

### Mi Actividad

#### **Historial de Transacciones**
- Visualización completa de actividad realizada
- Sistema de paginación (10 transacciones por página)
- Filtros por período (hoy, ayer, semanas, meses)
- Filtros por tipo de operaciones (ingresos o egresos)
- Búsqueda por palabras clave en el título de la transacción
- Botón para borrar todos los filtros aplicados
- Vista detallada de cada transacción al hacer clic

### Pago de Servicios

#### **Servicios Disponibles**
- Lista completa de servicios disponibles para pago
- Visualización sin paginación para mejor experiencia
- Buscador por título de servicio

#### **Pago de Servicio**
- Ingreso de número de cuenta del servicio
- Verificación de validez del número y existencia de facturas pendientes
- Selección de medio de pago existente o agregar nuevo
- Resumen completo de la transacción
- Mensajes informativos por insuficiencia de fondos o problemas de autorización

<p align="right">(<a href="#readme-top">volver arriba</a>)</p> -->

## Contribuir al proyecto

Las contribuciones son lo que hacen que la comunidad de código abierto sea un lugar increíble para aprender, inspirar y crear. ¡Cualquier contribución que hagas es **muy apreciada**!

Si tienes alguna sugerencia que podría mejorar el proyecto, por favor haz un [_fork_](https://github.com/MaxiCarrillo/digital-money/fork) del repositorio y crea una [_pull request_](https://github.com/MaxiCarrillo/digital-money/pulls). También puedes simplemente abrir un [_issue_](https://github.com/MaxiCarrillo/digital-money/issues) con la etiqueta "enhancement".

Aquí tienes una guía rápida:

1. Haz un [_fork_](https://github.com/MaxiCarrillo/digital-money/fork) del Proyecto
2. Clona tu [_fork_](https://github.com/MaxiCarrillo/digital-money/fork) (`git clone <URL del fork>`)
3. Añade el repositorio original como remoto (`git remote add upstream <URL del repositorio original>`)
4. Crea tu Rama de Funcionalidad (`git switch -c feature/CaracteristicaIncreible`)
5. Realiza tus Cambios (`git commit -m 'Add: alguna CaracterísticaIncreible'`)
6. Haz Push a la Rama (`git push origin feature/CaracteristicaIncreible`)
7. Abre una [_pull request_](https://github.com/MaxiCarrillo/digital-money/pulls)

**¡Gracias a todos los colaboradores que han hecho posible este proyecto!**

[![Contribuidores](https://contrib.rocks/image?repo=MaxiCarrillo/digital-money&max=500&columns=20)](https://github.com/MaxiCarrillo/digital-money/graphs/contributors)

<p align="right">(<a href="#readme-top">volver arriba</a>)</p>

## 🛠️ Stack

<p align="left">
  <a href="https://skillicons.dev">
    <img src="https://skillicons.dev/icons?i=next,react,typescript,tailwind,nodejs,git" />
  </a>
</p>

<p align="right">(<a href="#readme-top">volver arriba</a>)</p>

[contributors-shield]: https://img.shields.io/github/contributors/MaxiCarrillo/digital-money.svg?style=for-the-badge
[contributors-url]: https://github.com/MaxiCarrillo/digital-money/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/MaxiCarrillo/digital-money.svg?style=for-the-badge
[forks-url]: https://github.com/MaxiCarrillo/digital-money/network/members
[stars-shield]: https://img.shields.io/github/stars/MaxiCarrillo/digital-money.svg?style=for-the-badge
[stars-url]: https://github.com/MaxiCarrillo/digital-money/stargazers
[issues-shield]: https://img.shields.io/github/issues/MaxiCarrillo/digital-money.svg?style=for-the-badge
[issues-url]: https://github.com/MaxiCarrillo/digital-money/issues

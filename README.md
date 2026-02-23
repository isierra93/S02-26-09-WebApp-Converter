# 🎥 Automatización de Generación de Videos Verticales

Este proyecto es una aplicación web diseñada para automatizar la conversión de videos horizontales a formato vertical, optimizando el contenido para redes sociales.

## 🚀 Tecnologías Utilizadas

El proyecto está construido con una arquitectura moderna separando el Backend del Frontend.

### 🎨 Diseño (UX/UI)
- **Figma**: Prototipado y diseño de interfaces.

### 💻 Frontend
- **Framework**: Next.js
- **Lenguaje**: javaScript-TypeScript
- **Estilado**: Tailwind CSS

### 🛠 Backend
- **Framework**: Spring Boot
- **Lenguaje**: Java 25
- **Gestor de dependencias**: Maven

---

## ✨ Funcionalidades Principales

* **Carga de Videos**: Subida de archivos de video en formato horizontal.
* **Procesamiento Automático**: Conversión y recorte inteligente a formato vertical.
* **Gestión de Trabajos**: Seguimiento del estado de la conversión (Pendiente, Procesando, Completado, Falló, Expirado).

---

## 👥 Equipo de Desarrollo

| Nombre | Rol | LinkedIn |
| :--- | :--- | :--- |
| Natividad Romero | UX/UI Designer | [Perfil](https://linkedin.com/in/usuario) |
| Christian Iván Ledesma | Frontend Developer | [Perfil](https://www.linkedin.com/in/christian-ivan-ledesma-800660268) |
| Hector Duarte | Frontend Developer | [Perfil](https://www.linkedin.com/in/hector-duarte) |
| Iván Sierra | Backend Developer | [Perfil](https://linkedin.com/in/isierra93) |
| Martin Rioja | Backend Developer | [Perfil](https://www.linkedin.com/in/martinriojac/) |

---

## 🔧 Instalación y Ejecución Local

### Prerrequisitos
* Docker.
* Git.

### 1. Clonar el repositorio
```
git clone https://github.com/tu-usuario/S02-26-09-WebApp-Converter.git

cd S02-26-09-WebApp-Converter
```

## 2. Ejecución

### Con Docker Compose (recomendado)

```bash
# Levantar MySQL + App
docker-compose up --build
```

Esto levanta:
- **mysql-db-shortify** en el puerto `3306`
- **videoflow-backend** en el puerto `8080`
- **videoflow-frontend** en el puerto `3000`

### Sin Docker (local)

1. Tener MySQL corriendo en `localhost:3306` con una base de datos llamada `db-shortify`.
2. Tener FFmpeg instalado y accesible desde la terminal.
3. Tener NodeJS 20 o superior instalado.
4. Tener Maven instalado.
5. Ejecutar:

```bash
./frontend/videoflow pnpm install
./frontend/videoflow pnpm run dev

./backend ./mvnw spring-boot:run
```


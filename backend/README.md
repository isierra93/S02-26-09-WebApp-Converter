# Video Converter API

API REST para la conversión automática de videos horizontales (16:9) a formato vertical (9:16), construida con **Spring Boot 4** y **FFmpeg**.

## Tecnologías

- **Java 25** + **Spring Boot 4.0.2**
- **Spring Data JPA** (Hibernate + MySQL 8)
- **FFmpeg** (conversión de video)
- **Lombok**
- **Springdoc OpenAPI** (Swagger UI)
- **Docker + Docker Compose**
- **MySQL 8.0**

## Arquitectura del Proyecto

```
src/main/java/com/nocountry/videoconverter/
├── configs/             # Configuraciones (CORS, Async)
├── controllers/         # Endpoints REST
├── dto/                 # Objetos de transferencia (ErrorDto)
├── entities/            # Entidades JPA (ConversionJob, JobStatus)
├── exceptions/          # Manejo global de errores
│   ├── business/        # Excepciones de negocio
│   └── technical/       # Excepciones técnicas
├── repositories/        # Repositorios JPA
└── services/            # Lógica de negocio
```

## Configuración

### Variables de entorno / application.properties

| Variable | Valor por defecto | Descripción |
|---|---|---|
| `spring.datasource.url` | `jdbc:mysql://localhost:3306/db-shortify` | URL de conexión a MySQL |
| `spring.datasource.username` | `root` | Usuario de la base de datos |
| `spring.datasource.password` | `1234` | Contraseña de la base de datos |
| `spring.servlet.multipart.max-file-size` | `500MB` | Tamaño máximo de archivo permitido |
| `spring.servlet.multipart.max-request-size` | `500MB` | Tamaño máximo de la petición |

### CORS

Todas las rutas (`/**`) están habilitadas para cualquier origen (`*`) con los métodos `GET`, `POST`, `PUT` y `DELETE`.


## Documentación interactiva (Swagger)

Una vez levantada la aplicación, acceder a:

```
http://localhost:8080/swagger-ui/index.html
```

---

## Endpoints

Base URL: `http://localhost:8080`

### 1. Subir video

Sube un archivo de video y crea un trabajo de conversión. La conversión se ejecuta de forma **asíncrona**.

```
POST /api/conversions/upload
```

**Content-Type:** `multipart/form-data`

**Parámetros:**

| Nombre | Tipo | Requerido | Descripción |
|---|---|---|---|
| `file` | `MultipartFile` | Sí | Archivo de video a convertir (máx. 500MB) |

**Respuesta exitosa — `200 OK`:**

```json
{
  "id": "a1b2c3d4-e5f6-7890-abcd-ef1234567890",
  "inputUrl": "videos/1735000000000_mi_video.mp4",
  "outputUrl": "",
  "createdAt": "2026-02-23T00:50:00",
  "status": "PENDING"
}
```

> **Nota:** El `status` inicial es `PENDING`. La conversión se procesa en segundo plano y pasa por los estados `PROCESSING` → `COMPLETED` o `FAILED`. Una vez completado, `outputUrl` contendrá la ruta al video convertido (ej: `/out/mi_video_vertical.mp4`).

---

### 2. Consultar estado de un trabajo

Obtiene el estado actual y los datos de un trabajo de conversión por su ID.

```
GET /api/conversions/{id}
```

**Parámetros de ruta:**

| Nombre | Tipo | Requerido | Descripción |
|---|---|---|---|
| `id` | `String (UUID)` | Sí | ID del trabajo de conversión |

**Respuesta exitosa — `200 OK`:**

```json
{
  "id": "a1b2c3d4-e5f6-7890-abcd-ef1234567890",
  "inputUrl": "videos/1735000000000_mi_video.mp4",
  "outputUrl": "/out/1735000000000_mi_video_vertical.mp4",
  "createdAt": "2026-02-23T00:50:00",
  "status": "COMPLETED"
}
```

---

### 3. Acceder al video convertido

Los videos procesados se sirven como recursos estáticos.

```
GET /out/{nombre_del_archivo}
```

**Ejemplo:**

```
GET /out/1735000000000_mi_video_vertical.mp4
```

Retorna directamente el archivo de video.

---

## Estados del Trabajo (`JobStatus`)

| Estado | Descripción |
|---|---|
| `PENDING` | El trabajo fue creado y está en cola para procesarse |
| `PROCESSING` | FFmpeg está convirtiendo el video |
| `COMPLETED` | La conversión finalizó correctamente. `outputUrl` contiene la ruta al resultado |
| `FAILED` | Ocurrió un error durante la conversión |
| `EXPIRED` | El trabajo expiró (reservado para limpieza futura) |

---

## Manejo de Errores

Todas las respuestas de error siguen una estructura estandarizada usando el DTO `ErrorDto`:

```json
{
  "timeStamp": "2026-02-23T00:50:00",
  "status": 400,
  "path": "/api/conversions/upload",
  "message": "Descripción del error"
}
```

### Campos del error

| Campo | Tipo | Descripción |
|---|---|---|
| `timeStamp` | `String (ISO 8601)` | Fecha y hora en que ocurrió el error |
| `status` | `int` | Código HTTP del error |
| `path` | `String` | Ruta del endpoint que generó el error |
| `message` | `String` | Mensaje descriptivo del error |

### Tipos de errores

#### `400 Bad Request` — Archivo vacío (`EmptyFileException`)

Se retorna cuando se intenta subir un archivo vacío o nulo.

```json
{
  "timeStamp": "2026-02-23T00:50:00",
  "status": 400,
  "path": "/api/conversions/upload",
  "message": "No se recibió ningún archivo."
}
```

#### `404 Not Found` — Recurso no encontrado (`ResourceNotFoundException`)

Se retorna cuando se consulta un trabajo con un ID que no existe en la base de datos.

```json
{
  "timeStamp": "2026-02-23T00:50:00",
  "status": 404,
  "path": "/api/conversions/abc-123",
  "message": "No se encontró un archivo con el id: abc-123 ."
}
```

#### `500 Internal Server Error` — Error de almacenamiento (`StorageException`)

Se retorna cuando ocurre un error al guardar el archivo en el sistema de archivos.

```json
{
  "timeStamp": "2026-02-23T00:50:00",
  "status": 500,
  "path": "/api/conversions/upload",
  "message": "Error al guardar el archivo."
}
```

#### `500 Internal Server Error` — Error genérico (`Exception`)

Se retorna para cualquier otra excepción no controlada.

```json
{
  "timeStamp": "2026-02-23T00:50:00",
  "status": 500,
  "path": "/api/conversions/upload",
  "message": "Ocurrió un error inesperado en el servidor."
}
```

---

## Limpieza Automática

Un scheduler (`VideoCleanupScheduler`) se ejecuta **cada 60 segundos** y elimina:

- Los archivos de video (original y procesado) del disco.
- El registro del trabajo de la base de datos.

**Condiciones para la eliminación:**
- El trabajo fue creado hace más de **30 minutos**.
- El trabajo **no** está en estado `PROCESSING`.

---

## Modelo de Datos

### Entidad `ConversionJob`

Tabla: `conversion_jobs`

| Campo | Tipo | Descripción |
|---|---|---|
| `id` | `String (UUID)` | Identificador único generado automáticamente |
| `inputUrl` | `String` | Ruta del video original subido |
| `outputUrl` | `String` | Ruta del video convertido (`""` hasta que se complete) |
| `createdAt` | `LocalDateTime` | Fecha y hora de creación del trabajo |
| `status` | `JobStatus (Enum)` | Estado actual del trabajo |

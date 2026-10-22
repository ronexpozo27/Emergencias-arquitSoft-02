# SIAE-HRA — Sistema Integrado de Atención de Emergencias

**Proyecto académico de Arquitectura de Software**  
**Hospital de referencia:** Hospital Regional de Ayacucho, Perú  
**Carrera:** Ingeniería de Sistemas — Universidad Nacional de San Cristóbal de Huamanga (UNSCH)

## Descripción

SIAE-HRA es una propuesta académica de software para apoyar la **atención inicial de emergencias**. Su diseño contempla el registro de pacientes, el triaje realizado por enfermería, la evaluación médica inicial y las solicitudes de exámenes, con acceso a información de apoyo mediante integraciones hospitalarias y externas.

El proyecto **no es un sistema oficial del Hospital Regional de Ayacucho**. Las integraciones descritas son propuestas arquitectónicas y el demo utiliza datos ficticios y servicios simulados.

## Funcionalidades previstas

- Registrar pacientes mediante sus datos de identificación o un registro provisional.
- Consultar datos de identidad a través de un adaptador para RENIEC.
- Consultar información de aseguramiento mediante un adaptador para SIS u otros servicios habilitados.
- Consultar antecedentes clínicos pertinentes, según los permisos de acceso.
- Registrar signos vitales, motivo de consulta y prioridad de triaje asignada por personal autorizado.
- Registrar la evaluación médica inicial y sus indicaciones.
- Solicitar análisis de laboratorio y estudios de imágenes médicas.
- Consultar resultados y dar seguimiento a solicitudes.
- Registrar prescripciones iniciales y consultar su estado.
- Administrar usuarios, roles y permisos.

El registro y la atención inicial no deben bloquearse cuando falte el DNI, el seguro o la respuesta de una integración externa.

## Arquitectura propuesta

| Elemento | Tecnología o enfoque |
|---|---|
| Estilo arquitectónico | Monolito modular |
| Enfoque interno | Arquitectura Limpia (*Clean Architecture*) |
| Frontend | Angular y TypeScript |
| Backend propuesto | Node.js, TypeScript y Express |
| Base de datos propuesta | PostgreSQL |
| Caché opcional | Redis para información temporal no clínica |
| Comunicación | API REST sobre HTTPS |
| Interoperabilidad | Adaptadores; HL7 FHIR y DICOM cuando correspondan |

Los módulos principales del backend propuesto son **Usuarios, Pacientes, Triaje, Atención médica y Órdenes**. El código de backend y las integraciones reales **aún no están implementados**.

## Estructura del repositorio

```text
Emergencias-arquitSoft-02/
├── README.md
├── docs/
│   ├── 01-analisis-de-sistema/
│   ├── 02-arquitectura-software/
│   ├── 03-diseño-de-software/
│   ├── 04-modelo-c4/
│   └── 05-integraciones/
├── img/
└── tecnologia/
    └── boilerplate-clean-arquitecture/
        ├── angular.json
        ├── package.json
        └── src/
```

| Directorio | Contenido |
|---|---|
| [`docs/01-analisis-de-sistema/`](docs/01-analisis-de-sistema/) | Actores, historias de usuario, requisitos, restricciones y atributos de calidad. |
| [`docs/02-arquitectura-software/`](docs/02-arquitectura-software/) | Arquitectura inicial, componentes, enfoque y estilo arquitectónico. |
| [`docs/03-diseño-de-software/`](docs/03-diseño-de-software/) | Diseño interno de módulos, patrones de diseño y principios SOLID. |
| [`docs/04-modelo-c4/`](docs/04-modelo-c4/) | Diagramas C4 de contexto, contenedores, componentes y código. |
| [`docs/05-integraciones/`](docs/05-integraciones/) | Catálogo, contratos de integración, flujo, trazabilidad y fuentes. |
| [`img/`](img/) | Imágenes de la arquitectura y los diagramas UML/C4. |
| [`tecnologia/boilerplate-clean-arquitecture/`](tecnologia/boilerplate-clean-arquitecture/) | Proyecto Angular y demo de interfaz. |

## Ejecutar el demo Angular

### Requisitos

- Node.js y npm compatibles con las dependencias del proyecto.
- Un navegador web actualizado.
- Visual Studio Code (opcional).

### 1. Entrar al proyecto Angular

Desde la raíz del repositorio, en **CMD**:

```cmd
cd tecnologia\boilerplate-clean-arquitecture
```

### 2. Instalar dependencias

```cmd
npm ci
```

### 3. Iniciar el servidor de desarrollo

```cmd
npm start
```

Abrir [http://localhost:4200/](http://localhost:4200/) en el navegador.

### 4. Compilar la aplicación

```cmd
npm run build
```

El demo funciona como demostración local con información ficticia. **No debe utilizarse para registrar pacientes reales ni para tomar decisiones clínicas.**

## Sistemas e integraciones previstos

| Sistema | Función propuesta |
|---|---|
| RENIEC | Consultar y verificar datos de identificación del paciente. |
| SIHCE / RENHICE u otra historia clínica autorizada | Consultar antecedentes relevantes para la atención. |
| SIS u otros servicios habilitados | Consultar información de afiliación y aseguramiento. |
| Laboratorio (LIS) | Enviar solicitudes y consultar resultados de análisis. |
| Imágenes médicas (RIS/PACS) | Solicitar estudios y consultar informes o imágenes disponibles. |
| Farmacia | Consultar y dar seguimiento a prescripciones iniciales. |

Las conexiones reales requieren interfaces disponibles, credenciales y autorizaciones correspondientes. Para el alcance académico se emplean **adaptadores y servicios simulados**.

## Estado del proyecto

- Documentación de análisis y arquitectura elaborada.
- Diagramas C4 de niveles 1 a 4 y diseño UML documentados.
- Patrones de diseño y principios SOLID documentados.
- Demo Angular de atención inicial preparado para ejecución local.
- Backend, persistencia e integraciones reales pendientes de desarrollo.

## Información académica

- **Curso:** Laboratorio de Arquitectura de Software.
- **Carrera:** Ingeniería de Sistemas.
- **Universidad:** Universidad Nacional de San Cristóbal de Huamanga (UNSCH).
- **Proyecto:** SIAE-HRA.

Este repositorio contiene una propuesta universitaria con fines de aprendizaje y demostración; no constituye una implementación institucional ni está conectado a bases de datos clínicas reales.

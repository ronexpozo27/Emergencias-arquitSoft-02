# Arquitectura inicial del sistema SIAE-HRA

## Diagrama de arquitectura

```mermaid
flowchart TB
    U["Personal de emergencias"]

    subgraph P["1. Presentación"]
        WEB["Aplicación web Angular"]
        API["API REST"]
        WEB --> API
    end

    subgraph N["2. Lógica de negocio"]
        PAC["Registro de pacientes"]
        TRI["Triaje inicial"]
        MED["Evaluación médica inicial"]
        ORD["Solicitudes de exámenes"]
    end

    subgraph D["3. Datos e integración"]
        BD[("Base de datos")]
        INT["Servicios de integración"]
    end

    subgraph E["Sistemas externos e internos"]
        REN["RENIEC"]
        HC["Historia clínica"]
        SEG["Seguros"]
        LAB["Laboratorio"]
        IMG["Imágenes médicas"]
        FAR["Farmacia"]
    end

    U --> WEB
    API --> PAC
    API --> TRI
    API --> MED
    API --> ORD

    PAC --> BD
    TRI --> BD
    MED --> BD
    ORD --> BD

    PAC --> INT
    MED --> INT
    ORD --> INT

    INT --> REN
    INT --> HC
    INT --> SEG
    INT --> LAB
    INT --> IMG
    INT --> FAR
```

## Descripción

La arquitectura inicial del SIAE-HRA se organiza en tres capas principales:

- **Presentación:** permite al personal de admisión, enfermería y médicos interactuar con el sistema mediante una aplicación web y una API REST.

- **Lógica de negocio:** contiene los módulos principales responsables del registro de pacientes, triaje, evaluación médica inicial y solicitudes de exámenes.

- **Datos e integración:** permite almacenar y consultar información de pacientes y atenciones mediante una base de datos, además de comunicarse con sistemas externos.

El sistema se integrará con servicios de **RENIEC**, **historia clínica electrónica** y **seguros**, así como con los sistemas internos de **laboratorio, diagnóstico por imágenes y farmacia**.

Estas integraciones permitirán consultar información relevante y gestionar solicitudes durante la atención inicial. Para el prototipo académico se podrán utilizar APIs simuladas.
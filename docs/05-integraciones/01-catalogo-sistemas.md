
# 01. Catálogo de sistemas

## Objetivo

Identificar los sistemas externos e internos con los que se integrará el **SIAE-HRA**, para facilitar el acceso a información del paciente y apoyar los procesos de atención inicial de emergencias del Hospital Regional de Ayacucho.

## Sistemas de integración

| **Sistema** | **Tipo** | **¿Para qué se integraría?** |
|---|---|---|
| **RENIEC** | Externo | Validar la identidad del paciente mediante su DNI y obtener datos personales para agilizar el registro. |
| **Historia clínica electrónica (SIHCE/RENHICE)** | Externo / Hospitalario | Consultar antecedentes médicos, alergias, diagnósticos y medicamentos registrados, según los permisos disponibles. |
| **Seguros (SIS u otras IAFAS)** | Externo | Verificar la afiliación, entidad aseguradora y estado de cobertura del paciente. |
| **Laboratorio clínico (LIS)** | Interno / Hospitalario | Enviar solicitudes de análisis clínicos y consultar resultados de laboratorio. |
| **Diagnóstico por imágenes (RIS/PACS)** | Interno / Hospitalario | Solicitar radiografías, tomografías y ecografías, así como consultar informes y estudios disponibles. |
| **Farmacia** | Interno / Hospitalario | Consultar la disponibilidad de medicamentos y gestionar el estado de las prescripciones médicas iniciales. |

## Consideraciones de integración

- **Interoperabilidad:** la comunicación se realizará mediante APIs o adaptadores, utilizando estándares como HL7 FHIR cuando corresponda.
- **Seguridad:** el acceso a la información clínica estará restringido según los roles y permisos de cada usuario.
- **Disponibilidad:** la falta de conexión con RENIEC, seguros u otros servicios externos no impedirá el registro provisional ni la continuidad de la atención inicial.
- **Independencia:** cada integración estará desacoplada de las reglas principales del sistema mediante el patrón Adaptador.


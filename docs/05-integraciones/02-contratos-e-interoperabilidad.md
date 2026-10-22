
# 02. Contratos de integración

## Objetivo

Definir las operaciones, los datos de entrada y las respuestas esperadas de los sistemas externos e internos que se integrarán con el SIAE-HRA durante la atención inicial de emergencias.

## Contratos de integración

| **Sistema** | **Consulta u operación** | **Entrada mínima** | **Respuesta esperada** |
|---|---|---|---|
| RENIEC | Consultar identidad del paciente. | Número de DNI. | Nombres, apellidos, fecha de nacimiento y estado de consulta. |
| Historia clínica (SIHCE/RENHICE) | Consultar antecedentes clínicos. | Identificador del paciente y autorización de acceso. | Antecedentes médicos, alergias, diagnósticos y medicamentos disponibles. |
| Seguros (SIS u otras IAFAS) | Consultar afiliación y cobertura. | DNI o identificador del paciente. | Entidad aseguradora, estado de afiliación y cobertura disponible. |
| Laboratorio clínico (LIS) | Solicitar análisis clínicos. | Identificador del paciente, episodio y tipo de examen. | Código de solicitud y estado del examen. |
| Laboratorio clínico (LIS) | Consultar resultados. | Identificador de solicitud. | Resultados disponibles, fecha y estado del análisis. |
| Imágenes médicas (RIS/PACS) | Solicitar estudios de diagnóstico. | Identificador del paciente, episodio y tipo de estudio. | Código de solicitud y estado del estudio. |
| Imágenes médicas (RIS/PACS) | Consultar informes y estudios. | Identificador del estudio. | Informe médico, estado y referencia a imágenes disponibles. |
| Farmacia | Registrar o consultar prescripciones. | Identificador del paciente, episodio y prescripción médica. | Identificador de prescripción, disponibilidad y estado de dispensación. |

## Tecnologías de integración

| **Tecnología** | **Aplicación en el SIAE-HRA** |
|---|---|
| API REST | Comunicación entre el sistema y los servicios que ofrezcan interfaces REST. |
| HTTPS/JSON | Intercambio seguro de solicitudes y respuestas. |
| HL7 FHIR | Interoperabilidad de información clínica, solicitudes y resultados médicos cuando sea compatible con el sistema integrado. |
| DICOM | Intercambio y consulta de imágenes médicas mediante servicios compatibles. |
| Patrón Adaptador | Permite conectar distintos proveedores sin modificar la lógica de negocio. |

## Manejo de errores

| **Situación** | **Comportamiento esperado del sistema** |
|---|---|
| RENIEC no disponible | Permitir el registro provisional del paciente. |
| Historia clínica no disponible | Continuar la atención y permitir registrar antecedentes proporcionados por el paciente. |
| Servicio de seguros no disponible | Mostrar cobertura no verificada sin impedir la atención. |
| Laboratorio no disponible | Conservar la solicitud pendiente de envío y mostrar su estado. |
| Imágenes médicas no disponibles | Registrar la solicitud pendiente y permitir su seguimiento. |
| Farmacia no disponible | Mantener la prescripción registrada y mostrar el estado de consulta pendiente. |

Las integraciones se implementarán mediante contratos y adaptadores independientes, utilizando servicios simulados durante el desarrollo académico.

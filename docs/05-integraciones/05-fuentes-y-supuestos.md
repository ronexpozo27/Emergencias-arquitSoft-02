
# 05. Fuentes y supuestos

## Objetivo

Identificar las principales fuentes de referencia y los supuestos considerados para el diseño arquitectónico del **SIAE-HRA**, garantizando que la propuesta académica se fundamente en servicios de salud, identificación e interoperabilidad.

## Referencias para la propuesta

| **Fuente** | **Referencia** | **Aplicación en el SIAE-HRA** |
|---|---|---|
| **RENIEC** | [Registro Nacional de Identificación y Estado Civil](https://www.gob.pe/reniec) | Referencia para la consulta y verificación de identidad mediante DNI. |
| **MINSA** | [Ministerio de Salud del Perú](https://www.gob.pe/minsa) | Referencia para historia clínica electrónica, atención de emergencias e interoperabilidad sanitaria. |
| **RENHICE** | [Registro Nacional de Historias Clínicas Electrónicas - MINSA](https://www.gob.pe/minsa) | Referencia para el intercambio de información clínica entre establecimientos de salud. |
| **SIS** | [Seguro Integral de Salud](https://www.gob.pe/sis) | Referencia para la consulta de afiliación y aseguramiento de pacientes. |
| **HL7 FHIR R4** | [FHIR Release 4](https://hl7.org/fhir/R4/) | Estándar de referencia para el intercambio de pacientes, antecedentes clínicos, solicitudes y resultados médicos. |
| **DICOM** | [Digital Imaging and Communications in Medicine](https://www.dicomstandard.org/) | Estándar para el almacenamiento, intercambio y consulta de imágenes médicas. |
| **SUSALUD** | [Superintendencia Nacional de Salud](https://www.gob.pe/susalud) | Referencia para los derechos de los pacientes y la atención de emergencias. |
| **Hospital Regional de Ayacucho** | [Gobierno Regional de Ayacucho](https://www.gob.pe/regionayacucho) | Contexto institucional de referencia para el sistema académico de atención inicial de emergencias. |

## Supuestos académicos

| **Código** | **Supuesto** | **Descripción** |
|---|---|---|
| SA-01 | Proyecto académico | SIAE-HRA se desarrolla como propuesta universitaria de Arquitectura de Software, sin requerir validación institucional para elaborar su documentación. |
| SA-02 | Alcance inicial | El sistema se enfoca en el registro de pacientes, triaje, evaluación médica inicial y solicitudes de exámenes. |
| SA-03 | Integración con RENIEC | Se considera la consulta de identidad mediante un servicio autorizado o simulado. |
| SA-04 | Integración con historia clínica | Se propone consultar antecedentes clínicos mediante interfaces de interoperabilidad disponibles o simuladas. |
| SA-05 | Integración con seguros | Se contempla consultar la afiliación y cobertura mediante servicios habilitados o simulados. |
| SA-06 | Sistemas hospitalarios | Laboratorio, imágenes médicas y farmacia se representan como sistemas independientes con interfaces de integración propuestas. |
| SA-07 | Disponibilidad de APIs | No se presupone que las APIs estén disponibles públicamente ni que el hospital cuente con todas las integraciones. |
| SA-08 | Datos de prueba | El desarrollo académico utilizará datos ficticios y servicios simulados para evaluar las funcionalidades. |
| SA-09 | Seguridad | El sistema incorporará autenticación, autorización por roles y auditoría para proteger información clínica. |
| SA-10 | Continuidad de atención | La falta de DNI, seguro o conexión con servicios externos no impedirá el registro provisional ni la atención inicial de emergencias. |

## Consideraciones para futuras implementaciones

| **Aspecto** | **Consideración** |
|---|---|
| Acceso a APIs oficiales | Requiere cumplir los procedimientos y autorizaciones establecidos por cada proveedor. |
| Protección de datos | El tratamiento de datos personales y clínicos reales debe cumplir la normativa peruana aplicable. |
| Interoperabilidad | Se priorizarán interfaces y estándares compatibles con los sistemas involucrados. |
| Sistemas hospitalarios | La integración real dependerá de las capacidades tecnológicas y servicios disponibles. |
| Validación del prototipo | Se realizarán pruebas con información ficticia para comprobar el funcionamiento del sistema. |

## Alcance de las fuentes

Las referencias se utilizan como fundamento técnico y conceptual del diseño del SIAE-HRA. La propuesta contempla una arquitectura modular que permita integrar progresivamente servicios de identidad, historia clínica, seguros y sistemas hospitalarios.

Durante la fase académica, estas integraciones serán representadas mediante **adaptadores y APIs simuladas**, manteniendo la independencia de los módulos y la protección de los datos.

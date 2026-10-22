# Escenarios de atributos de calidad del SIAE-HRA

## EQ-01. Rendimiento: registro y consulta de pacientes

| **Elemento** | **Descripción** |
| --- | --- |
| **Atributo de calidad** | Rendimiento |
| **Fuente** | Personal de admisión y enfermería |
| **Estímulo** | El usuario registra un paciente o consulta sus datos durante la atención inicial. |
| **Condición** | El sistema opera normalmente con datos de prueba. |
| **Respuesta esperada** | El sistema registra o muestra la información sin demoras excesivas. |
| **Medida** | Meta académica: el 95 % de las operaciones internas responde en 2 segundos o menos. No incluye la latencia de APIs externas. |
| **Verificación** | Pruebas de rendimiento con datos simulados. |

## EQ-02. Disponibilidad: continuidad de la atención

| **Elemento** | **Descripción** |
| --- | --- |
| **Atributo de calidad** | Disponibilidad |
| **Fuente** | Personal de emergencias |
| **Estímulo** | RENIEC, el servicio de seguros o la historia clínica externa no responde. |
| **Condición** | El módulo principal está operativo, pero una integración externa falla. |
| **Respuesta esperada** | Se permite el registro provisional y la atención inicial sin bloquear el trabajo del personal. |
| **Medida** | El 100 % de los casos de falla externa contemplados en las pruebas permite continuar el registro local. |
| **Verificación** | Simular la caída de las APIs y comprobar que el flujo principal sigue disponible. |

## EQ-03. Escalabilidad: atención simultánea

| **Elemento** | **Descripción** |
| --- | --- |
| **Atributo de calidad** | Escalabilidad |
| **Fuente** | Aumento de usuarios del sistema |
| **Estímulo** | Varios profesionales registran o consultan pacientes al mismo tiempo. |
| **Condición** | Prueba con usuarios y episodios ficticios. |
| **Respuesta esperada** | El sistema mantiene operativas las funciones de registro y consulta. |
| **Medida** | Meta académica: soportar 50 usuarios simultáneos, con el 95 % de respuestas internas en 3 segundos o menos. |
| **Verificación** | Ejecutar una prueba de carga progresiva. |

## EQ-04. Seguridad: protección de datos clínicos

| **Elemento** | **Descripción** |
| --- | --- |
| **Atributo de calidad** | Seguridad |
| **Fuente** | Usuario sin autorización |
| **Estímulo** | Intenta consultar una historia clínica o modificar datos fuera de sus permisos. |
| **Condición** | El sistema utiliza autenticación y roles. |
| **Respuesta esperada** | Se deniega el acceso y se registra el intento para auditoría. |
| **Medida** | Rechazar el 100 % de los accesos no autorizados definidos en los casos de prueba. |
| **Verificación** | Pruebas de permisos para admisión, enfermería, médico y administrador. |

## EQ-05. Mantenibilidad: cambios en las integraciones

| **Elemento** | **Descripción** |
| --- | --- |
| **Atributo de calidad** | Mantenibilidad |
| **Fuente** | Equipo de desarrollo |
| **Estímulo** | Se reemplaza una API simulada de RENIEC, historia clínica o seguros por otra implementación. |
| **Condición** | Las integraciones están separadas del núcleo de atención de emergencias. |
| **Respuesta esperada** | El cambio se realiza en el adaptador correspondiente sin modificar las reglas principales del sistema. |
| **Medida** | Las pruebas del módulo modificado y las pruebas de regresión deben aprobarse. |
| **Verificación** | Revisar dependencias y ejecutar pruebas automatizadas. |

## Resumen de escenarios

| **Código** | **Atributo de calidad** | **Qué se busca comprobar** |
| --- | --- | --- |
| EQ-01 | Rendimiento | Registro y consulta rápidos de pacientes. |
| EQ-02 | Disponibilidad | Atención inicial aunque fallen servicios externos. |
| EQ-03 | Escalabilidad | Operaciones simultáneas sin degradación excesiva. |
| EQ-04 | Seguridad | Acceso a datos clínicos solo por usuarios autorizados. |
| EQ-05 | Mantenibilidad | Cambio de integraciones sin afectar el núcleo del sistema. |
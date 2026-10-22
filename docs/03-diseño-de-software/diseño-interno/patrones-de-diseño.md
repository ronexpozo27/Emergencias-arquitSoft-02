# Patrones de diseño

## Objetivo

Documentar los patrones de diseño propuestos para el backend del SIAE-HRA, indicando dónde se utilizarán, qué problemas resuelven y con qué tecnologías se implementarán.

## Contexto

- **Estilo:** monolito modular (Node.js + TypeScript + Express).
- **Enfoque interno:** Arquitectura Limpia (Clean Architecture).
- **Base:** diagrama de componentes (C4 nivel 3).
- **Alcance:** atención inicial de emergencias.

## Patrones de diseño seleccionados

| **Patrón** | **Dónde se usa** | **Problema que resuelve** | **Se implementa con** | **Archivos propuestos** |
|---|---|---|---|---|
| Adaptador | Pacientes → RENIEC | RENIEC utiliza un servicio externo de identidad. | API REST o servicio autorizado | `servicio-identidad.ts`, `reniec-identidad.adapter.ts` |
| Adaptador | Pacientes → Seguros (SIS) | El servicio de seguros tiene su propia interfaz de consulta. | API autorizada o simulada | `servicio-seguros.ts`, `sis-seguros.adapter.ts` |
| Adaptador | Atención médica → Historia clínica | Permite consultar antecedentes clínicos de otro sistema. | API REST / HL7 FHIR | `servicio-historia-clinica.ts`, `historia-clinica.adapter.ts` |
| Adaptador | Órdenes → Laboratorio e imágenes | Los sistemas hospitalarios utilizan interfaces diferentes. | API REST / HL7 FHIR | `servicio-examenes.ts`, `examenes.adapter.ts` |
| Repositorio | Pacientes → Base de datos | El dominio no debe depender directamente de SQL. | PostgreSQL | `paciente-repository.ts`, `postgres-paciente-repository.ts` |
| Decorador | Consultas clínicas → Auditoría | Registrar accesos a información sensible sin modificar las reglas de negocio. | TypeScript y servicio de auditoría | `audited-historia-clinica.decorator.ts` |

## Cómo funciona cada patrón

| **Patrón** | **En pocas palabras** |
|---|---|
| Adaptador | El sistema solicita `consultarPorDni(dni)` y el adaptador convierte la operación en una petición al servicio RENIEC. |
| Repositorio | El negocio ejecuta `guardar(paciente)` y el repositorio realiza las operaciones necesarias en PostgreSQL. |
| Decorador | Cuando un médico consulta información clínica, el decorador registra el acceso para auditoría sin cambiar la lógica principal de consulta. |

## Beneficios

- Permite reemplazar las APIs simuladas por servicios autorizados sin modificar las reglas de negocio.
- Facilita la integración con RENIEC, seguros, historia clínica, laboratorio e imágenes médicas.
- Mantiene separado el acceso a la base de datos.
- Mejora la seguridad y trazabilidad de las consultas clínicas.
- Facilita el mantenimiento y las pruebas unitarias.

## Patrones previstos para las siguientes iteraciones

| **Patrón** | **Dónde se aplicaría** | **Cuándo** |
|---|---|---|
| Observador | Órdenes médicas → Notificaciones | Cuando se implementen alertas de resultados de laboratorio e imágenes. |
| Fábrica | Pacientes → Registro provisional | Cuando se requieran diferentes procedimientos de creación de pacientes según su identificación. |
| Fachada | Atención médica → Sistemas hospitalarios | Cuando se necesite unificar las consultas de historia clínica, seguros y resultados médicos. |

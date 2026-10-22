
# 04. Matriz de trazabilidad

## Objetivo

Relacionar las necesidades del sistema SIAE-HRA con las historias de usuario, los requisitos funcionales y los módulos responsables de su implementación, garantizando la coherencia entre el análisis y el diseño arquitectónico.

## Matriz de trazabilidad

| **Necesidad** | **Historia de usuario** | **Requisito funcional** | **Módulo responsable** |
|---|---|---|---|
| Registro de pacientes | HU-01 Registrar pacientes | RF-01 | Pacientes |
| Consulta de identidad | HU-02 Consultar identidad en RENIEC | RF-02 | Pacientes / Integraciones |
| Registro de triaje | HU-03 Registrar signos vitales y triaje | RF-03 | Triaje |
| Consulta de antecedentes clínicos | HU-04 Consultar antecedentes clínicos | RF-04 | Atención médica / Integraciones |
| Evaluación médica inicial | HU-05 Registrar evaluación médica inicial | RF-06, RF-10 | Atención médica |
| Solicitudes de laboratorio e imágenes | HU-06 Solicitar exámenes | RF-07, RF-08 | Órdenes / Integraciones |
| Verificación de seguros | HU-07 Consultar seguro del paciente | RF-05 | Pacientes / Integraciones |
| Seguimiento de atención inicial | HU-08 Consultar estado de atención y solicitudes | RF-09 | Atención médica / Órdenes |
| Gestión de usuarios y permisos | HU-09 Gestionar usuarios y roles | RF-11, RF-12 | Usuarios / Seguridad |

## Relación con los componentes arquitectónicos

| **Módulo** | **Responsabilidad principal** | **Sistemas relacionados** |
|---|---|---|
| Pacientes | Registrar, identificar y consultar pacientes. | RENIEC y seguros (SIS). |
| Triaje | Registrar signos vitales y prioridad de atención. | Base de datos del SIAE-HRA. |
| Atención médica | Registrar la evaluación inicial y consultar antecedentes. | Historia clínica electrónica. |
| Órdenes | Gestionar solicitudes de exámenes y prescripciones iniciales. | Laboratorio (LIS), imágenes (RIS/PACS) y farmacia. |
| Usuarios | Gestionar autenticación, roles y permisos. | Sistema de autenticación y auditoría. |
| Integraciones | Facilitar la comunicación con servicios externos y hospitalarios. | RENIEC, SIS, historia clínica y sistemas hospitalarios. |

## Verificación de trazabilidad

| **Criterio** | **Descripción** |
|---|---|
| Cobertura funcional | Cada historia de usuario está asociada con uno o más requisitos funcionales. |
| Responsabilidad | Cada requisito funcional tiene un módulo responsable. |
| Consistencia arquitectónica | Los módulos corresponden a los componentes definidos en el diagrama C4 de nivel 3. |
| Integración | Los requisitos que dependen de servicios externos se relacionan con sus respectivos adaptadores. |
| Seguridad | Los accesos y operaciones clínicas se controlan mediante roles, permisos y auditoría. |

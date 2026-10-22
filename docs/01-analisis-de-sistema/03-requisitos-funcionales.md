# 03. Requisitos funcionales

| **Código** | **Requisito** |
|---|---|
| RF-01 | Registrar pacientes y permitir ingreso provisional sin DNI. |
| RF-02 | Consultar identidad mediante RENIEC o un simulador. |
| RF-03 | Registrar ingreso, motivo de consulta, signos vitales y triaje. |
| RF-04 | Consultar antecedentes clínicos disponibles con autorización. |
| RF-05 | Consultar condición de aseguramiento sin condicionar la atención. |
| RF-06 | Registrar evaluación y notas de atención inicial. |
| RF-07 | Generar solicitudes de laboratorio e imágenes. |
| RF-08 | Visualizar estado y resultados disponibles de esas solicitudes. |
| RF-09 | Mostrar lista de pacientes en atención inicial y su estado. |
| RF-10 | Registrar indicaciones o prescripciones iniciales. |
| RF-11 | Gestionar usuarios y roles. |
| RF-12 | Registrar accesos y cambios importantes para auditoría. |

## Relación entre historias de usuario y requisitos funcionales

| **Historia de usuario** | **Requisitos funcionales relacionados** |
|---|---|
| HU-01 Registrar pacientes | RF-01, RF-03 |
| HU-02 Consultar identidad en RENIEC | RF-02 |
| HU-03 Registrar signos vitales y triaje | RF-03 |
| HU-04 Consultar antecedentes clínicos | RF-04 |
| HU-05 Registrar evaluación médica inicial | RF-06, RF-10 |
| HU-06 Solicitar exámenes de laboratorio e imágenes | RF-07, RF-08 |
| HU-07 Consultar seguro del paciente | RF-05 |
| HU-08 Consultar estado de atención y solicitudes | RF-08, RF-09 |
| HU-09 Gestionar usuarios y roles | RF-11, RF-12 |

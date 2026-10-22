
# Nivel 1 · Diagrama de contexto del sistema

> **Proyecto:** SIAE-HRA — Sistema Integrado de Atención de Emergencias del Hospital Regional de Ayacucho  
> **Modelo:** C4 · Nivel 1 de 4 · **Versión:** 1.0  
> **Alcance:** Atención inicial de emergencias

---

## 1. Objetivo

Mostrar el **SIAE-HRA como una sola caja**: quiénes lo utilizan y con qué sistemas externos e internos del hospital se comunica durante la atención inicial de emergencias.

| **Aspecto** | **Descripción** |
|---|---|
| Pregunta que responde | ¿Qué es el sistema, quién lo utiliza y con qué sistemas se integra? |
| Audiencia | Docentes, equipo de desarrollo y personal hospitalario. |
| Qué **no** muestra | Tecnologías, servidores, bases de datos ni módulos internos. |
| Siguiente nivel | `Nivel2-DiagramadeContenedores.md` |

---

## 2. Diagrama

![Diagrama de contexto del sistema SIAE-HRA](../../img/Diagrama_de%20_contexto_SIAE-HRA.png)


---

## 3. Personas (usuarios)

| **Persona** | **Descripción** | **Qué hace en el sistema** |
|---|---|---|
| **Admisión** | Personal responsable del registro. | Registra pacientes y permite el ingreso provisional. |
| **Enfermería** | Personal responsable del triaje. | Registra signos vitales, motivo de consulta y prioridad. |
| **Médico de emergencia** | Profesional que realiza la evaluación inicial. | Consulta antecedentes, registra la atención y solicita exámenes. |
| **Administrador TI** | Responsable de la administración técnica. | Gestiona usuarios, roles y permisos del sistema. |

---

## 4. Sistemas

| **Sistema** | **Tipo** | **Responsabilidad** | **Quién lo proporciona** |
|---|---|---|---|
| **SIAE-HRA** | Sistema en alcance | Gestiona el registro, triaje y evaluación médica inicial. | Equipo del proyecto académico. |
| **RENIEC** | Sistema externo | Proporciona información de identificación del paciente. | RENIEC. |
| **Historia clínica electrónica** | Sistema externo al alcance | Permite consultar antecedentes clínicos disponibles. | Sistema de información clínica correspondiente. |
| **Seguros / SIS** | Sistema externo | Permite consultar información de aseguramiento. | Servicio de aseguramiento habilitado. |
| **Laboratorio (LIS)** | Sistema hospitalario integrado | Recibe solicitudes y proporciona resultados de laboratorio. | Sistema de laboratorio. |
| **Imágenes médicas (RIS/PACS)** | Sistema hospitalario integrado | Gestiona estudios de imágenes médicas e informes. | Sistema de diagnóstico por imágenes. |
| **Farmacia** | Sistema hospitalario integrado | Gestiona información de prescripciones y medicamentos. | Sistema de farmacia. |

---

## 5. Relaciones

| **Origen** | **Destino** | **Descripción** | **Interfaz prevista** |
|---|---|---|---|
| Admisión | SIAE-HRA | Registra pacientes y consulta información de ingreso. | Aplicación web |
| Enfermería | SIAE-HRA | Registra signos vitales y triaje. | Aplicación web |
| Médico de emergencia | SIAE-HRA | Registra la atención inicial y solicita exámenes. | Aplicación web |
| Administrador TI | SIAE-HRA | Gestiona usuarios y permisos. | Aplicación web |
| SIAE-HRA | RENIEC | Consulta identidad del paciente. | API autorizada o simulada |
| SIAE-HRA | Historia clínica | Consulta antecedentes clínicos. | Adaptador de interoperabilidad |
| SIAE-HRA | Seguros / SIS | Consulta información de aseguramiento. | API habilitada o simulada |
| SIAE-HRA | Laboratorio | Envía solicitudes y consulta resultados. | API o adaptador |
| SIAE-HRA | Imágenes médicas | Solicita estudios y consulta informes. | API o adaptador |
| SIAE-HRA | Farmacia | Gestiona información de prescripciones. | API o adaptador |

> Los protocolos específicos se detallarán en niveles posteriores. Las integraciones podrán simularse durante el desarrollo académico.

---

## 6. Decisiones y supuestos

| **#** | **Decisión o supuesto** | **Motivo** |
|---|---|---|
| 1 | El sistema se centra en la atención inicial de emergencias. | Mantener un alcance académico definido. |
| 2 | RENIEC, historia clínica y seguros se integran mediante adaptadores. | Evitar dependencias directas de proveedores externos. |
| 3 | Laboratorio, imágenes y farmacia funcionan como sistemas integrados. | Separar las responsabilidades del sistema principal. |
| 4 | Se permite registrar pacientes sin DNI. | Garantizar que la atención inicial no dependa de la identificación. |
| 5 | Las integraciones pueden utilizar APIs simuladas. | Facilitar el desarrollo académico sin servicios institucionales reales. |
| 6 | Los datos clínicos estarán protegidos mediante roles y controles de acceso. | Preservar la confidencialidad de la información. |

### Pendientes para futuras fases

| **Tema** | **Detalle** |
|---|---|
| Integraciones reales | Determinar disponibilidad y condiciones de acceso a las APIs oficiales. |
| Interoperabilidad | Definir los estándares aplicables a cada integración. |
| Implementación | Desarrollar los módulos cuando termine la fase documental. |

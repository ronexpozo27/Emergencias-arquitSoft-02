
# Principios de diseño (SOLID)

## Objetivo

Documentar cómo se aplican los principios SOLID en el backend del SIAE-HRA, organizado con Clean Architecture, para mantener una estructura uniforme y evitar que las reglas de negocio dependan de tecnologías externas.

## Contexto

- **Estilo:** monolito modular (Node.js + TypeScript + Express).
- **Enfoque interno:** Arquitectura Limpia (presentación, aplicación, dominio e infraestructura).
- **Módulo de referencia:** Pacientes, porque integra la base de datos, RENIEC y servicios de seguros.
- **Alcance:** atención inicial de emergencias.

## SOLID en el módulo Pacientes

### Diagrama de aplicación de SOLID

![Arquitectura SOLID del módulo Pacientes](../../../img/Arquitectura%20SOLID%20del%20m%C3%B3dulo%20Pacientes.png)

**Leyenda:** S = Responsabilidad única, O = Abierto/cerrado, L = Sustitución de Liskov, I = Segregación de interfaces y D = Inversión de dependencias.

## Aplicación de los principios SOLID

| **Principio** | **Dónde se aplica (capa)** | **Cómo se cumple en SIAE-HRA** | **Archivos propuestos** |
|---|---|---|---|
| **S** · Responsabilidad única | Todas las capas | Cada clase cumple una función: el controlador recibe solicitudes HTTP, el caso de uso coordina el registro, la entidad representa al paciente y el repositorio administra la persistencia. | `pacientes.controller.ts`, `registrar-paciente.use-case.ts`, `paciente.ts`, `postgres-paciente-repository.ts` |
| **O** · Abierto/cerrado | Infraestructura | Para cambiar RENIEC por un servicio simulado o incorporar otro proveedor de identidad, se crea un nuevo adaptador sin modificar el caso de uso. | `reniec-identidad.adapter.ts`, `identidad-simulada.adapter.ts` |
| **L** · Sustitución de Liskov | Infraestructura | Los adaptadores reales y simulados cumplen el mismo contrato `ServicioIdentidad` y pueden intercambiarse sin alterar el comportamiento esperado del caso de uso. | `reniec-identidad.adapter.ts`, `identidad-simulada.adapter.ts` |
| **I** · Segregación de interfaces | Dominio | Cada interfaz contiene únicamente las operaciones necesarias: `ServicioIdentidad` consulta datos, `ServicioSeguros` consulta cobertura y `PacienteRepository` guarda o busca pacientes. | `servicio-identidad.ts`, `servicio-seguros.ts`, `paciente-repository.ts` |
| **D** · Inversión de dependencias | Aplicación | El caso de uso recibe interfaces mediante el constructor y no depende directamente de PostgreSQL, RENIEC ni SIS. Las implementaciones se conectan en `pacientes.module.ts`. | `registrar-paciente.use-case.ts`, `pacientes.module.ts` |

## Qué pasaría sin SOLID en SIAE-HRA

| **Situación** | **Sin SOLID** | **Con SOLID** |
|---|---|---|
| Se cambia la API de RENIEC. | Es necesario modificar el caso de uso de registro. | Solo se reemplaza el adaptador de identidad. |
| Se cambia el servicio de seguros. | Se modifica directamente la lógica de registro de pacientes. | Se implementa otro adaptador que respete `ServicioSeguros`. |
| Se quiere probar el registro de pacientes. | Se necesita conexión con PostgreSQL y servicios externos. | Se utilizan repositorios y servicios simulados. |
| Cambia una regla de registro provisional. | La regla puede estar distribuida entre controladores y servicios. | Se modifica la regla correspondiente en el dominio. |
| Se cambia PostgreSQL por otra base de datos. | Es necesario modificar la lógica de negocio. | Se reemplaza la implementación del repositorio. |

## Relación con Clean Architecture y los patrones

| **Principio** | **Cómo se cumple en el proyecto** |
|---|---|
| Responsabilidad única | Mediante la separación de responsabilidades entre presentación, aplicación, dominio e infraestructura. |
| Abierto/cerrado y Liskov | Mediante el patrón Adaptador para RENIEC, seguros y otros servicios hospitalarios. |
| Segregación de interfaces | Mediante contratos específicos como `ServicioIdentidad`, `ServicioSeguros` y `PacienteRepository`. |
| Inversión de dependencias | Mediante el patrón Repositorio, la inyección de dependencias y los contratos definidos en el dominio. |

## Beneficios

- Facilita el mantenimiento y las pruebas unitarias del sistema.
- Permite reemplazar integraciones externas sin modificar las reglas de negocio.
- Reduce el acoplamiento entre módulos.
- Favorece la reutilización y organización del código.
- Permite trabajar con APIs simuladas durante el desarrollo académico.
- Facilita la incorporación futura de historia clínica, laboratorio, imágenes médicas y farmacia.

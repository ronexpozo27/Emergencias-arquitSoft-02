# \# SIAE-HRA — Sistema Integrado de Atención de Emergencias

# 

# \## Descripción

# 

# SIAE-HRA es un proyecto académico de Arquitectura de Software orientado a la gestión de la atención inicial de emergencias del Hospital Regional de Ayacucho, Perú.

# 

# El sistema contempla el registro de pacientes, triaje, evaluación médica inicial y solicitudes de exámenes, integrando servicios de identificación, historia clínica, seguros y sistemas hospitalarios.

# 

# \## Funcionalidades

# 

# \- Registro de pacientes y registro provisional.

# \- Consulta de identidad mediante RENIEC.

# \- Verificación de aseguramiento mediante SIS.

# \- Consulta de antecedentes clínicos.

# \- Registro de triaje y signos vitales.

# \- Evaluación médica inicial.

# \- Solicitudes de laboratorio e imágenes médicas.

# \- Gestión de prescripciones iniciales.

# \- Administración de usuarios y roles.

# 

# \## Arquitectura de software

# 

# El proyecto utiliza las siguientes decisiones arquitectónicas:

# 

# | Elemento | Tecnología o enfoque |

# |---|---|

# | Estilo arquitectónico | Monolito modular |

# | Enfoque | Clean Architecture |

# | Frontend | Angular y TypeScript |

# | Backend propuesto | Node.js, TypeScript y Express |

# | Base de datos propuesta | PostgreSQL |

# | Caché propuesta | Redis |

# | Comunicación | API REST |

# | Interoperabilidad | HL7 FHIR y DICOM, según el sistema |

# 

# \## Estructura de documentación

# 

# | Directorio | Descripción |

# |---|---|

# | `docs/01-analisis-de-sistema/` | Actores, historias de usuario, requisitos y atributos de calidad. |

# | `docs/02-arquitectura-software/` | Arquitectura inicial, componentes, enfoque y estilo. |

# | `docs/03-diseño-de-software/` | Diseño interno, patrones y principios SOLID. |

# | `docs/04-modelo-c4/` | Diagramas C4 de contexto, contenedores, componentes y código. |

# | `docs/05-integraciones/` | Sistemas integrados, contratos, flujo de atención y trazabilidad. |

# | `img/` | Diagramas e imágenes del proyecto. |

# | `tecnologia/` | Código y demostración Angular. |

# 

# \## Ejecución del demo Angular

# 

# \### 1. Requisitos

# 

# \- Node.js y npm.

# \- Visual Studio Code (recomendado).

# \- Navegador web actualizado.

# 

# \### 2. Instalar dependencias

# 

# Desde la raíz del repositorio:

# 

# ```cmd

# cd tecnologia\\boilerplate-clean-arquitecture

# npm ci

# ```

# 

# \### 3. Iniciar la aplicación

# 

# ```cmd

# npm start

# ```

# 

# Abrir en el navegador:

# 

# \*\*http://localhost:4200/\*\*

# 

# \### 4. Compilar el proyecto

# 

# ```cmd

# npm run build

# ```

# 

# \## Integraciones

# 

# El sistema contempla las siguientes integraciones:

# 

# \- \*\*RENIEC:\*\* verificación de identidad.

# \- \*\*SIHCE/RENHICE:\*\* consulta de antecedentes clínicos.

# \- \*\*SIS:\*\* consulta de aseguramiento.

# \- \*\*Laboratorio (LIS):\*\* solicitudes y resultados.

# \- \*\*Imágenes médicas (RIS/PACS):\*\* estudios e informes.

# \- \*\*Farmacia:\*\* prescripciones iniciales.

# 

# El demo académico utiliza datos ficticios y servicios simulados. No realiza consultas reales a RENIEC, SIS ni historias clínicas.

# 

# \## Estado del proyecto

# 

# \- Documentación de análisis y arquitectura elaborada.

# \- Diagramas C4 de niveles 1 al 4 diseñados.

# \- Principios SOLID y patrones documentados.

# \- Demo Angular preparado para pruebas locales.

# \- Backend e integraciones reales pendientes de implementación.

# 

# \## Proyecto académico

# 

# \*\*Curso:\*\* Laboratorio de Arquitectura de Software  

# \*\*Carrera:\*\* Ingeniería de Sistemas  

# \*\*Universidad:\*\* Universidad Nacional de San Cristóbal de Huamanga (UNSCH)  

# \*\*Proyecto:\*\* SIAE-HRA

# 

# Este


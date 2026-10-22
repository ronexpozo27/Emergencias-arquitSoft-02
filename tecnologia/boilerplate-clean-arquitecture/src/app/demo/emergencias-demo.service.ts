import { Injectable } from '@angular/core';

export type Prioridad = 'I' | 'II' | 'III' | 'IV' | 'V' | 'SIN_TRIAJE';
export type EstadoAtencion = 'Registrado' | 'En triaje' | 'En atención' | 'Atendido';
export type TipoOrden = 'Laboratorio' | 'Imágenes' | 'Farmacia';
export type EstadoOrden = 'Pendiente' | 'En proceso' | 'Resultado disponible';

export interface Paciente {
  id: string;
  dni: string;
  nombre: string;
  edad: number | null;
  motivo: string;
  ingreso: string;
  prioridad: Prioridad;
  estado: EstadoAtencion;
  provisional: boolean;
  seguro: string;
  antecedentes: string;
  signos: { presion: string; pulso: number | null; temperatura: number | null; spo2: number | null };
  evaluacion: string;
}

export interface Orden {
  id: string;
  pacienteId: string;
  paciente: string;
  tipo: TipoOrden;
  examen: string;
  estado: EstadoOrden;
  hora: string;
}

export interface DatosIdentidadSimulada { dni: string; nombre: string; edad: number }
export interface NuevoPaciente { dni: string; nombre: string; edad: number | null; motivo: string; validado: boolean }

/** Almacén de datos ficticios, solo en memoria, para fines de demostración académica. */
@Injectable({ providedIn: 'root' })
export class EmergenciasDemoService {
  pacientes: Paciente[] = [
    { id:'HRA-0001', dni:'00000001', nombre:'María Quispe', edad:42, motivo:'Dolor abdominal intenso', ingreso:'08:15', prioridad:'II', estado:'En atención', provisional:false, seguro:'SIS · Simulado', antecedentes:'Alergia a penicilina (dato ficticio).', signos:{presion:'120/80',pulso:96,temperatura:37.4,spo2:98}, evaluacion:'Evaluación inicial en curso (demostración).' },
    { id:'HRA-0002', dni:'00000002', nombre:'José Huamán', edad:67, motivo:'Dificultad respiratoria', ingreso:'08:32', prioridad:'I', estado:'En atención', provisional:false, seguro:'EsSalud · Simulado', antecedentes:'Hipertensión arterial (dato ficticio).', signos:{presion:'145/95',pulso:112,temperatura:37.1,spo2:91}, evaluacion:'' },
    { id:'HRA-0003', dni:'', nombre:'Paciente provisional 003', edad:null, motivo:'Caída en vía pública', ingreso:'09:05', prioridad:'SIN_TRIAJE', estado:'Registrado', provisional:true, seguro:'No verificado', antecedentes:'Sin información clínica simulada disponible.', signos:{presion:'',pulso:null,temperatura:null,spo2:null}, evaluacion:'' },
    { id:'HRA-0004', dni:'00000004', nombre:'Rosa Cárdenas', edad:29, motivo:'Fiebre y malestar general', ingreso:'09:22', prioridad:'III', estado:'En triaje', provisional:false, seguro:'SIS · Simulado', antecedentes:'Sin antecedentes relevantes en el conjunto ficticio.', signos:{presion:'110/70',pulso:89,temperatura:38.2,spo2:99}, evaluacion:'' },
    { id:'HRA-0005', dni:'00000005', nombre:'Luis Mendoza', edad:35, motivo:'Lesión en miembro superior', ingreso:'09:47', prioridad:'IV', estado:'Registrado', provisional:false, seguro:'No verificado', antecedentes:'Sin antecedentes relevantes en el conjunto ficticio.', signos:{presion:'',pulso:null,temperatura:null,spo2:null}, evaluacion:'' },
  ];

  ordenes: Orden[] = [
    { id:'ORD-001', pacienteId:'HRA-0001', paciente:'María Quispe', tipo:'Laboratorio', examen:'Hemograma completo', estado:'En proceso', hora:'08:40' },
    { id:'ORD-002', pacienteId:'HRA-0002', paciente:'José Huamán', tipo:'Imágenes', examen:'Radiografía de tórax', estado:'Pendiente', hora:'08:48' },
    { id:'ORD-003', pacienteId:'HRA-0004', paciente:'Rosa Cárdenas', tipo:'Laboratorio', examen:'Perfil bioquímico', estado:'Resultado disponible', hora:'09:39' }
  ];

  actividad: { hora: string; texto: string; clase: string }[] = [
    { hora:'09:47', texto:'Ingreso registrado · HRA-0005', clase:'azul' },
    { hora:'09:39', texto:'Resultado simulado disponible · ORD-003', clase:'verde' },
    { hora:'09:22', texto:'Inicio de triaje · HRA-0004', clase:'naranja' },
    { hora:'09:05', texto:'Registro provisional · HRA-0003', clase:'azul' }
  ];

  private readonly reniecDemo: Record<string, DatosIdentidadSimulada> = {
    '00000001': { dni:'00000001', nombre:'María Quispe', edad:42 },
    '00000002': { dni:'00000002', nombre:'José Huamán', edad:67 },
    '00000004': { dni:'00000004', nombre:'Rosa Cárdenas', edad:29 }
  };

  consultarReniecSimulado(dni: string): DatosIdentidadSimulada | null {
    return this.reniecDemo[dni.trim()] ?? null;
  }

  consultarSeguroSimulado(dni: string): string {
    const seguros: Record<string, string> = {
      '00000001': 'SIS · Simulado',
      '00000002': 'EsSalud · Simulado',
      '00000004': 'SIS · Simulado'
    };
    return seguros[dni.trim()] ?? 'No verificado';
  }

  registrarPaciente(datos: NuevoPaciente): Paciente {
    const normalizado = datos.dni.trim();
    if (normalizado) {
      const previo = this.pacientes.find(p => p.dni === normalizado);
      if (previo) return previo;
    }
    const id = `HRA-${String(Math.max(0, ...this.pacientes.map(p => Number(p.id.replace('HRA-', '')) || 0)) + 1).padStart(4, '0')}`;
    const paciente: Paciente = {
      id,
      dni:normalizado,
      nombre:datos.nombre.trim() || `Paciente provisional ${id}`,
      edad:datos.edad,
      motivo:datos.motivo.trim() || 'Motivo por registrar',
      ingreso:this.hora(),
      prioridad:'SIN_TRIAJE',
      estado:'Registrado',
      provisional:!datos.validado,
      seguro:normalizado ? this.consultarSeguroSimulado(normalizado) : 'No verificado',
      antecedentes:'Sin información clínica simulada disponible.',
      signos:{presion:'',pulso:null,temperatura:null,spo2:null},
      evaluacion:''
    };
    this.pacientes = [paciente, ...this.pacientes];
    this.registrarActividad(`Nuevo ingreso ${paciente.provisional ? 'provisional' : 'simulado'} · ${id}`, 'azul');
    return paciente;
  }

  guardarTriaje(id: string, prioridad: Prioridad, motivo: string, presion: string, pulso: number | null, temperatura: number | null, spo2: number | null): void {
    const p = this.pacientes.find(item => item.id === id);
    if (!p) return;
    p.prioridad = prioridad;
    p.motivo = motivo.trim() || p.motivo;
    p.signos = { presion, pulso, temperatura, spo2 };
    p.estado = 'En triaje';
    this.registrarActividad(`Triaje ${prioridad} registrado · ${id}`, prioridad === 'I' || prioridad === 'II' ? 'naranja' : 'verde');
  }

  guardarEvaluacion(id: string, texto: string): void {
    const p = this.pacientes.find(item => item.id === id);
    if (!p) return;
    p.evaluacion = texto.trim();
    p.estado = 'En atención';
    this.registrarActividad(`Evaluación inicial registrada · ${id}`, 'verde');
  }

  marcarAtendido(id: string): void {
    const p = this.pacientes.find(item => item.id === id);
    if (!p) return;
    p.estado = 'Atendido';
    this.registrarActividad(`Atención inicial finalizada · ${id}`, 'verde');
  }

  crearOrden(pacienteId: string, tipo: TipoOrden, examen: string): Orden | null {
    const p = this.pacientes.find(item => item.id === pacienteId);
    if (!p) return null;
    const numero = Math.max(0, ...this.ordenes.map(o => Number(o.id.replace('ORD-', '')) || 0)) + 1;
    const orden: Orden = { id:`ORD-${String(numero).padStart(3, '0')}`, pacienteId, paciente:p.nombre, tipo, examen:examen.trim(), estado:'Pendiente', hora:this.hora() };
    this.ordenes = [orden, ...this.ordenes];
    this.registrarActividad(`Nueva solicitud ${tipo.toLowerCase()} · ${orden.id}`, 'azul');
    return orden;
  }

  siguienteEstadoOrden(id: string): void {
    const orden = this.ordenes.find(item => item.id === id);
    if (!orden) return;
    if (orden.estado === 'Pendiente') orden.estado = 'En proceso';
    else if (orden.estado === 'En proceso') orden.estado = 'Resultado disponible';
    this.registrarActividad(`Actualización simulada de solicitud · ${id}`, 'verde');
  }

  get pacientesActivos(): number { return this.pacientes.filter(p => p.estado !== 'Atendido').length; }
  get enEspera(): number { return this.pacientes.filter(p => p.estado === 'Registrado').length; }
  get altaPrioridad(): number { return this.pacientes.filter(p => p.prioridad === 'I' || p.prioridad === 'II').length; }
  get ordenesPendientes(): number { return this.ordenes.filter(o => o.estado !== 'Resultado disponible').length; }

  private hora(): string { return new Date().toLocaleTimeString('es-PE', { hour:'2-digit', minute:'2-digit', hour12:false }); }
  private registrarActividad(texto: string, clase: string): void {
    this.actividad = [{ hora:this.hora(), texto, clase }, ...this.actividad].slice(0, 8);
  }
}

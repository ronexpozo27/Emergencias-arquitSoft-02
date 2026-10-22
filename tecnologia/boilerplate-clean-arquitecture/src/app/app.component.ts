import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  EmergenciasDemoService,
  EstadoAtencion,
  Paciente,
  Prioridad,
  TipoOrden
} from './demo/emergencias-demo.service';

type Vista = 'panel' | 'pacientes' | 'triaje' | 'atencion' | 'ordenes' | 'integraciones';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.component.html'
})
export class AppComponent {
  readonly demo = inject(EmergenciasDemoService);
  readonly hoy = new Date();
  vista: Vista = 'panel';
  busqueda = '';
  mostrarIngreso = false;
  aviso = '';
  errorIngreso = '';
  seleccionadoId = 'HRA-0001';

  ingreso = { dni:'', nombre:'', edad:null as number | null, motivo:'', validado:false };
  consultaReniec = '';
  triaje = { prioridad:'III' as Prioridad, motivo:'', presion:'', pulso:null as number | null, temperatura:null as number | null, spo2:null as number | null };
  evaluacion = '';
  orden = { tipo:'Laboratorio' as TipoOrden, examen:'' };
  filtroEstado = 'Todos';
  readonly integraciones = [
    { nombre:'RENIEC', sigla:'ID', desc:'Identificación y datos personales', grupo:'Externo' },
    { nombre:'Seguros / SIS', sigla:'SIS', desc:'Afiliación y estado de cobertura', grupo:'Externo' },
    { nombre:'Historia clínica', sigla:'HCE', desc:'Antecedentes clínicos pertinentes', grupo:'Clínico' },
    { nombre:'Laboratorio', sigla:'LIS', desc:'Solicitudes y resultados de análisis', grupo:'Hospitalario' },
    { nombre:'Imágenes médicas', sigla:'RIS', desc:'Solicitudes e informes RIS/PACS', grupo:'Hospitalario' },
    { nombre:'Farmacia', sigla:'RX', desc:'Prescripciones iniciales', grupo:'Hospitalario' }
  ];

  get seleccionado(): Paciente | undefined { return this.demo.pacientes.find(p => p.id === this.seleccionadoId); }
  get pacientesFiltrados(): Paciente[] {
    const q = this.busqueda.trim().toLocaleLowerCase();
    return this.demo.pacientes.filter(p =>
      (!q || [p.nombre, p.dni, p.id, p.motivo].some(v => v.toLocaleLowerCase().includes(q))) &&
      (this.filtroEstado === 'Todos' || p.estado === this.filtroEstado)
    );
  }
  get ultimos(): Paciente[] { return [...this.demo.pacientes].slice(0, 5); }

  ir(vista: Vista): void { this.vista = vista; this.aviso = ''; }
  seleccionarPaciente(id: string, destino?: Vista): void {
    this.seleccionadoId = id;
    const p = this.seleccionado;
    if (p) {
      this.triaje = { prioridad:p.prioridad === 'SIN_TRIAJE' ? 'III' : p.prioridad, motivo:p.motivo,
        presion:p.signos.presion, pulso:p.signos.pulso, temperatura:p.signos.temperatura, spo2:p.signos.spo2 };
      this.evaluacion = p.evaluacion;
    }
    if (destino) this.ir(destino);
  }
  nuevoIngreso(): void {
    this.ingreso = { dni:'', nombre:'', edad:null, motivo:'', validado:false };
    this.consultaReniec = '';
    this.errorIngreso = '';
    this.mostrarIngreso = true;
  }
  consultarIdentidad(): void {
    if (!/^\d{8}$/.test(this.ingreso.dni)) {
      this.consultaReniec = 'Para probar RENIEC, ingresa un DNI de 8 dígitos. Usa 00000001 o 00000002 como datos de demostración.';
      return;
    }
    const r = this.demo.consultarReniecSimulado(this.ingreso.dni);
    if (r) {
      this.ingreso.nombre = r.nombre;
      this.ingreso.edad = r.edad;
      this.ingreso.validado = true;
      this.consultaReniec = 'Consulta simulada exitosa. Información ficticia cargada.';
    } else {
      this.ingreso.validado = false;
      this.consultaReniec = 'El simulador no tiene datos para ese DNI. Puedes continuar con registro provisional.';
    }
  }
  registrarPaciente(): void {
    if (!this.ingreso.motivo.trim()) {
      this.errorIngreso = 'Escribe el motivo de consulta para registrar el ingreso.';
      return;
    }
    if (this.ingreso.edad !== null && (this.ingreso.edad < 0 || this.ingreso.edad > 120)) {
      this.errorIngreso = 'La edad debe estar entre 0 y 120 años.';
      return;
    }
    if (this.ingreso.dni && !/^\d{8}$/.test(this.ingreso.dni)) {
      this.errorIngreso = 'Ingresa 8 dígitos o deja el DNI vacío para un registro provisional.';
      return;
    }
    const previo = this.demo.pacientes.find(p => p.dni !== '' && p.dni === this.ingreso.dni);
    const p = this.demo.registrarPaciente(this.ingreso);
    this.seleccionarPaciente(p.id);
    this.mostrarIngreso = false;
    this.aviso = previo ? `El paciente ya estaba registrado (${p.id}).` : `Ingreso ${p.id} registrado. Datos simulados.`;
    this.vista = 'pacientes';
  }
  guardarTriaje(): void {
    if (!this.seleccionado) return;
    if (this.triaje.prioridad === 'SIN_TRIAJE') { this.aviso = 'Selecciona una prioridad asignada por enfermería.'; return; }
    this.demo.guardarTriaje(this.seleccionadoId, this.triaje.prioridad, this.triaje.motivo,
      this.triaje.presion, this.triaje.pulso, this.triaje.temperatura, this.triaje.spo2);
    this.aviso = `Triaje de ${this.seleccionadoId} registrado en la demostración.`;
  }
  guardarEvaluacion(): void {
    if (!this.evaluacion.trim()) { this.aviso = 'Registra una evaluación inicial antes de guardarla.'; return; }
    this.demo.guardarEvaluacion(this.seleccionadoId, this.evaluacion);
    this.aviso = `Evaluación inicial guardada para ${this.seleccionadoId}.`;
  }
  cerrarEvaluacion(): void {
    if (!this.seleccionado) return;
    this.demo.marcarAtendido(this.seleccionadoId);
    this.aviso = 'Atención inicial finalizada (simulación).';
  }
  crearOrden(): void {
    if (!this.orden.examen.trim()) { this.aviso = 'Especifica el examen o prescripción.'; return; }
    const resultado = this.demo.crearOrden(this.seleccionadoId, this.orden.tipo, this.orden.examen);
    if (resultado) {
      this.orden.examen = '';
      this.aviso = `Solicitud ${resultado.id} registrada (simulación).`;
    }
  }
  simularAvance(id: string): void {
    this.demo.siguienteEstadoOrden(id);
    this.aviso = `Estado de ${id} actualizado (simulación).`;
  }
  probarSistema(nombre: string): void {
    const p = this.seleccionado;
    if (!p) return;
    if (nombre === 'RENIEC') {
      this.aviso = p.dni && this.demo.consultarReniecSimulado(p.dni)
        ? `RENIEC simulado: identidad de ${p.nombre} disponible.`
        : 'RENIEC simulado: sin registro para este paciente. El ingreso permanece habilitado.';
    } else if (nombre === 'Seguros') {
      this.aviso = `Seguros simulados: ${p.dni ? this.demo.consultarSeguroSimulado(p.dni) : 'No verificado'}.`;
    } else {
      this.aviso = `Historia clínica simulada: ${p.antecedentes}`;
    }
  }
  clasePrioridad(p: Prioridad): string {
    return ({ I:'rojo', II:'naranja', III:'amarillo', IV:'verde', V:'azul', SIN_TRIAJE:'gris' } as Record<Prioridad, string>)[p];
  }
  prioridadTexto(p: Prioridad): string { return p === 'SIN_TRIAJE' ? 'Sin triaje' : `Prioridad ${p}`; }
  claseEstado(e: EstadoAtencion): string {
    return e === 'Atendido' ? 'verde' : e === 'En atención' ? 'azul' : e === 'En triaje' ? 'naranja' : 'gris';
  }
}

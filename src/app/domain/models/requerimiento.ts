export class Requerimiento {

    idPlan: number
    idRed: number
    nomenclador: number
    grupoEmpresa: string
    empresa: string
    aplicaCondicionTecnica: boolean
    edadInicioRangoEtario: number
    coberturaTopeValor : number
    coberturaTopeValorMonto : number
    montoTopePorMes : number
    montoTopePorAnno : number
    requiereAuditoriaMedica : boolean
    fechaVigenciaDesde : Date


  constructor(
    idPlan: number, 
    idRed: number, 
    nomenclador: number, 
    grupoEmpresa: string, 
    empresa: string, 
    aplicaCondicionTecnica: boolean, 
    edadInicioRangoEtario: number, 
    coberturaTopeValor: number, 
    coberturaTopeValorMonto: number, 
    montoTopePorMes: number, 
    montoTopePorAnno: number, 
    requiereAuditoriaMedica: boolean, 
    fechaVigenciaDesde: Date
) {
    this.idPlan = idPlan
    this.idRed = idRed
    this.nomenclador = nomenclador
    this.grupoEmpresa = grupoEmpresa
    this.empresa = empresa
    this.aplicaCondicionTecnica = aplicaCondicionTecnica
    this.edadInicioRangoEtario = edadInicioRangoEtario
    this.coberturaTopeValor = coberturaTopeValor
    this.coberturaTopeValorMonto = coberturaTopeValorMonto
    this.montoTopePorMes = montoTopePorMes
    this.montoTopePorAnno = montoTopePorAnno
    this.requiereAuditoriaMedica = requiereAuditoriaMedica
    this.fechaVigenciaDesde = fechaVigenciaDesde
  }


}
export class Solicitud {

    
    private _id : number;
    public get id() : number {
        return this._id;
    }
    public set id(v : number) {
        this._id = v;
    }
    
    
    private _codigoCliente : string;
    public get codigoCliente() : string {
        return this._codigoCliente;
    }
    public set codigoCliente(v : string) {
        this._codigoCliente = v;
    }
    
    
    private _fechaRegistro : Date;
    public get fechaRegistro() : Date {
        return this._fechaRegistro;
    }
    public set fechaRegistro(v : Date) {
        this._fechaRegistro = v;
    }

    
    private _codigoModulo : string;
    public get codigoModulo() : string {
        return this._codigoModulo;
    }
    public set codigoModulo(v : string) {
        this._codigoModulo = v;
    }
    
    //email del usuario que solicita el cambio

    private _usuarioSolicitante : string;
    public get usuarioSolicitante() : string {
        return this._usuarioSolicitante;
    }
    public set usuarioSolicitante(v : string) {
        this._usuarioSolicitante = v;
    }

    
    private _codigoDepartamentoDestino : string;
    public get codigoDepartamentoDestino() : string {
        return this._codigoDepartamentoDestino;
    }
    public set codigoDepartamentoDestino(v : string) {
        this._codigoDepartamentoDestino = v;
    }
    
    
    private _tituloSolicitud : string;
    public get tituloSolicitud() : string {
        return this._tituloSolicitud;
    }
    public set tituloSolicitud(v : string) {
        this._tituloSolicitud = v;
    }

    //nuevo, analisis, cotizacion, aprobado, produccion, pruebas, entregado
    private _estadoSolicitud : string;
    public get estadoSolicitud() : string {
        return this._estadoSolicitud;
    }
    public set estadoSolicitud(v : string) {
        this._estadoSolicitud = v;
    }

    
}

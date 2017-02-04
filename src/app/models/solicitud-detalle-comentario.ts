export class SolicitudDetalleComentario {

    
    private _id : number;
    public get id() : number {
        return this._id;
    }
    public set id(v : number) {
        this._id = v;
    }
    
    
    
    private _idSolicitud : number;
    public get idSolicitud() : number {
        return this._idSolicitud;
    }
    public set idSolicitud(v : number) {
        this._idSolicitud = v;
    }
    
    
    private _idLinea : number;
    public get idLinea() : number {
        return this._idLinea;
    }
    public set idLinea(v : number) {
        this._idLinea = v;
    }

    
    private _fechaComentario : Date;
    public get fechaComentario() : Date {
        return this._fechaComentario;
    }
    public set fechaComentario(v : Date) {
        this._fechaComentario = v;
    }
    
    private _comentario : string;
    public get comentario() : string {
        return this._comentario;
    }
    public set comentario(v : string) {
        this._comentario = v;
    }
    
    
    private _codigoUsuario : string;
    public get codigoUsuario() : string {
        return this._codigoUsuario;
    }
    public set codigoUsuario(v : string) {
        this._codigoUsuario = v;
    }
    
    
}

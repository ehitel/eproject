export class SolicitudDetalle {

    
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

    
    private _titulo : string;
    public get titulo() : string {
        return this._titulo;
    }
    public set titulo(v : string) {
        this._titulo = v;
    }
    
    
    private _descripcion : string;
    public get descripcion() : string {
        return this._descripcion;
    }
    public set descripcion(v : string) {
        this._descripcion = v;
    }
    
    

    
}

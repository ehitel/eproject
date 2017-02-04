export class Cliente {

    
    private _id : number;
    public get id() : number {
        return this._id;
    }
    public set id(v : number) {
        this._id = v;
    }
    
    
    private _nombreCliente : string;
    public get nombreCliente() : string {
        return this._nombreCliente;
    }
    public set nombreCliente(v : string) {
        this._nombreCliente = v;
    }
    
    
    private _pais : string;
    public get pais() : string {
        return this._pais;
    }
    public set pais(v : string) {
        this._pais = v;
    }
    
    
    private _telefono : string;
    public get telefono() : string {
        return this._telefono;
    }
    public set telefono(v : string) {
        this._telefono = v;
    }
    
    
    private _contacto : string;
    public get contacto() : string {
        return this._contacto;
    }
    public set contacto(v : string) {
        this._contacto = v;
    }
    
    
    private _correoElectronico : string;
    public get correoElectronico() : string {
        return this._correoElectronico;
    }
    public set correoElectronico(v : string) {
        this._correoElectronico = v;
    }
    
    
    private _activo : boolean;
    public get activo() : boolean {
        return this._activo;
    }
    public set activo(v : boolean) {
        this._activo = v;
    }
    
    
    private _tipoSoporte : string;
    public get tipoSoporte() : string {
        return this._tipoSoporte;
    }
    public set tipoSoporte(v : string) {
        this._tipoSoporte = v;
    }
    
    
    private _soporteDisponible : boolean;
    public get soporteDisponible() : boolean {
        return this._soporteDisponible;
    }
    public set soporteDisponible(v : boolean) {
        this._soporteDisponible = v;
    }
    

}

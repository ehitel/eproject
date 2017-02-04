export class Usuario {

    
    private _id : number;
    public get id() : number {
        return this._id;
    }
    public set id(v : number) {
        this._id = v;
    }
    
    
    private _codigoUsuario : string;
    public get codigoUsuario() : string {
        return this._codigoUsuario;
    }
    public set codigoUsuario(v : string) {
        this._codigoUsuario = v;
    }
    
    
    private _nombreUsuario : string;
    public get nombreUsuario() : string {
        return this._nombreUsuario;
    }
    public set nombreUsuario(v : string) {
        this._nombreUsuario = v;
    }
    
    
    private _claveUsuario : string;
    public get claveUsuario() : string {
        return this._claveUsuario;
    }
    public set claveUsuario(v : string) {
        this._claveUsuario = v;
    }
    
    
    private _usuarioActivo : boolean;
    public get usuarioActivo() : boolean {
        return this._usuarioActivo;
    }
    public set usuarioActivo(v : boolean) {
        this._usuarioActivo = v;
    }
    


}

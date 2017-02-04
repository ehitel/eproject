export class UsuarioCliente {

    
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
    
    
    private _codigoUsuario : string;
    public get codigoUsuario() : string {
        return this._codigoUsuario;
    }
    public set codigoUsuario(v : string) {
        this._codigoUsuario = v;
    }
    

    
    private _clave : string;
    public get clave() : string {
        return this._clave;
    }
    public set clave(v : string) {
        this._clave = v;
    }
    
 
    private _usuarioActivo : boolean;
    public get usuarioActivo() : boolean {
        return this._usuarioActivo;
    }
    public set usuarioActivo(v : boolean) {
        this._usuarioActivo = v;
    }
   
    
    
}

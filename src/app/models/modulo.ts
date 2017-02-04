export class Modulo {

    
    private _id : number;
    public get id() : number {
        return this._id;
    }
    public set id(v : number) {
        this._id = v;
    }
    
    
    private _nombreModulo : string;
    public get nombreModulo() : string {
        return this._nombreModulo;
    }
    public set nombreModulo(v : string) {
        this._nombreModulo = v;
    }
    
    
    private _descripcionModulo : string;
    public get descripcionModulo() : string {
        return this._descripcionModulo;
    }
    public set descripcionModulo(v : string) {
        this._descripcionModulo = v;
    }
    
    
    private _moduloActivo : string;
    public get moduloActivo() : string {
        return this._moduloActivo;
    }
    public set moduloActivo(v : string) {
        this._moduloActivo = v;
    }
    
    
    private _plataformaPrincipal : string;
    public get plataformaPrincipal() : string {
        return this._plataformaPrincipal;
    }
    public set plataformaPrincipal(v : string) {
        this._plataformaPrincipal = v;
    }
    
    
}

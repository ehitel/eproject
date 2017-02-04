export class Departamento {

    
    private _id : number;
    public get id() : number {
        return this._id;
    }
    public set id(v : number) {
        this._id = v;
    }
    
    
    private _nombreDepartamento : string;
    public get nombreDepartamento() : string {
        return this._nombreDepartamento;
    }
    public set nombreDepartamento(v : string) {
        this._nombreDepartamento = v;
    }
    
}

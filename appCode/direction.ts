class Direction implements nodeObject {
    constructor(
        public id: number,
        public libelle: string,
        public value: string,
        public path: string,
        public id_pere: number,
        private _Icon:string = null
    ){}

    get Icon() {
        if(this.path.split(',').length === 1){
            this._Icon='root'
        }
        else if(this.path.split(',').length === 2){
            this._Icon='underRoot'
        }
        else if(this.path.split(',').length === 3){
            this._Icon='dga'
        }
        else if(this.path.split(',').length === 4){
            this._Icon='dir'
        }
        else if(this.path.split(',').length === 5){
            this._Icon='service'
        }
        else{
            this._Icon='node'
        }
        return this._Icon; 
    }
}
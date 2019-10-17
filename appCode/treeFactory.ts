class TreeFactory {

    constructor(
        public data: Array<nodeObject> = null,
        public separator: string = null,
        public tree: TreeView = null,
    ) {}

    createTree() {
        let sousTableaux:nodeObject[][] = []
        for (let data of this.data) {
            let length = data.path.split(this.separator).length;
            let found = false;
            for (let sousTab of sousTableaux) {
                if (sousTab.rank === length) {
                    found = true;
                    sousTab.push(data);
                }
            }
            if (!found) {
                let newSousTab:nodeObject[] = [];
                newSousTab.rank = length;
                newSousTab.push(data);
                sousTableaux.push(newSousTab);
            }
        }
        let orderedTab = sousTableaux.sort((x, y) => x.rank - y.rank);
        for (var j = 0; j < sousTableaux.length; j++) {
            for (let node of orderedTab[j]) {
                let value = node.value;
                let path = node.path.split(this.separator);
                if (path.length === 1) {
                    this.tree.addNode(value);
                }
                else {
                    path.pop();
                    let nodePath = this.tree.valueToNodePath(path);
                    this.tree.addNode(value, nodePath);
                }
            }
        }
    }

    getDataFromNode(node:TreeNode){
        let nodePath = this.tree.getPath(node);
        let nodeValuePath : Array<string> = [];
        for(let node of nodePath){
            nodeValuePath.push(node.value);
        }
        let stringPath = nodeValuePath.join(this.separator);
        for(let data of this.data){
            if(data.path === stringPath){
                return data;
            }
        }

    }

    getNodeFromData(data:nodeObject){
        var path = this.tree.valueToNodePath(data.path.split(this.separator));
        var node = this.tree.findNode(path);
        if(node){
            return node
        }
        else{
            throw "Can't find the node corresponding to your data"
        }        
    }

    toSerialize(){
        let dataToStringify:Array<nodeObject> = [];
        for(var i = 0; i < this.data.length; i++){
            let node = this.getNodeFromData(this.data[i]);
            let idParent;
            if(node.parent !== null){
                idParent = this.getDataFromNode(node.parent).id;
            }
            let line = {id:this.data[i].id, value:node.value,libelle:this.data[i].libelle, path:this.data[i].path, id_pere:idParent, Icon:this.data[i].Icon}
            dataToStringify.push(line)
        }
        return JSON.stringify(dataToStringify)
    }
}




class TreeNode{
    constructor(
        public value:string,
        public parent:TreeNode = null,
        public children:Array<TreeNode> = []
    ){}

    getChildIndex(value:string){
        if(this.children.length === 0){
            return undefined;
        }
        else{
            for(var i=0;i<this.children.length;i++){
                if (this.children[i].value === value){
                    return i;
                }
            }
        }
    }
}
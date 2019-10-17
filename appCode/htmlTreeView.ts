class htmlTreeView{
    constructor(
        public data: Array<nodeObject> = null,
        public divId: string = null,
        public tree: TreeView = null,
        public separator: string = null,
        public createHtmlRoot: (n: TreeNode,t:htmlTreeView) => string = null,
        public createHtmlNode: (n: TreeNode,t:htmlTreeView) => string = null,
        public createHtmlLeaf: (n: TreeNode,t:htmlTreeView) => string = null,
        public callBackOnHide: () => void = null
    ){}

    htmlToFeed: HTMLElement;
    html = "";
    htmlEnd = "";

    divTreefier() {
        this.htmlToFeed = document.getElementById(this.divId);
    }

    buildHTMLTree() {
        let node = this.tree.root;
        this.html += this.createHtmlRoot(node, this)
        if (node.children.length !== 0) {
            for (let child of node.children) {
                this.addSubtree(child);
                
            }
            this.html += "</li>";
        }
        else {
            this.html += "</li></ul>"
        }
        this.htmlToFeed.innerHTML = this.html;
    }

    addSubtree(node: TreeNode) {
        if (node.children.length !== 0) {
            this.html += this.createHtmlNode(node,this)
            for (let child of node.children) {
                this.addSubtree(child)
            }
            this.html += "</ul>"
        }
        else {
            this.html += this.createHtmlLeaf(node,this)
        }
    }

    show(div: string) {
        document.getElementById(div).style.display = "block";
    }

    hide(div: string) {
        document.getElementById(div).style.display = "none";
        this.callBackOnHide()
    }

    getDataWithPath(stringPath:string[]):nodeObject{
        if(stringPath.length===1){
            for(let objectRoot of this.data){
                if(objectRoot.path === stringPath[0]){
                    return objectRoot
                }
            }
        }
        else{
            for(let object of this.data){
                if(object.path === stringPath.join(this.separator)){
                    return object
                }
            }
        }        
    }

    getDataWithId(id:number){
        for(let object of this.data){
            if(object.id === id){
                return object
            }
        }
    }
}
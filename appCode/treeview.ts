class TreeView{
    constructor(public root:TreeNode = null){}

    addNode(value:string, parentPath:Array<TreeNode> = null){ 
        let newNode = new TreeNode(value)
        if(this.root){
            let node = this.findChildNode(value,parentPath)
            if(!node){
                if(parentPath===null){
                    this.root.children.push(newNode)
                    newNode.parent = this.root;
                }
                else{
                    
                    if(!node){
                        let parent = parentPath[parentPath.length-1];
                        parent.children.push(newNode);
                        newNode.parent = parent;
                    }
                }         
            }
        }
        else{
            this.root = newNode;
        }
    }

    removeNode(value:string, path:Array<TreeNode>){
        if(path.length===1){
            this.root=null;           
        }
        else{
            if(this.findNode(path)){
                let parent = path[path.length -2];
                let index = parent.getChildIndex(value)
                parent.children.splice(index,1);
            }
        } 
    }

    findChildNode(value:string, parentPath:Array<TreeNode>){
        if (parentPath === null){
            for(let child of this.root.children){
                if(child.value === value){
                    return child
                }
            }
        }
        else{
            for(var i=0; i < parentPath.length-1; i++){
                let pathOk = false;
                for(let children of parentPath[i].children){
                    if(children.value === parentPath[i+1].value){
                        pathOk = true
                    }
                }
                if(!pathOk){
                    return false;
                }
            }
            for(let lastChildren of parentPath[parentPath.length-1].children){
                if(lastChildren.value === value){
                    return lastChildren
                }
            }
            return false
        }
    }

    findNode(path:Array<TreeNode>){
        if(path.length === 1){
            if(path[0]===this.root){
                return this.root
            }
        }
        else{
            let value = path[path.length-1].value
        for(var i=0; i < path.length-1; i++){
            let pathOk = false;
            for(let children of path[i].children){
                if(children.value === path[i+1].value){
                    pathOk = true
                }
            }
            if(!pathOk){
                return false;
            }
        }
        for(let lastChildren of path[path.length-2].children){
            if(lastChildren.value === value){
                return lastChildren
            }
        }
        return false
        }
    }

    getPath(node:TreeNode){
        let path = [];
        let parent = node.parent;
        while(parent !== null){
            path.unshift(parent);
            parent = parent.parent;
        }
        path.push(node);
        return path;
    }

    nodeToValuePath(path:Array<TreeNode>){
        let valuePath = [];
        for(let node of path){
            valuePath.push(node.value);
        }
        return valuePath;
    }

    valueToNodePath(path:Array<string>){
        let nodePath = [];
        if(this.root.value === path[0]){
            nodePath.push(this.root);
            this.addToPath(this.root,0, path, nodePath);             
        }
        else{

            throw "The path does not contain the root, verify your path";
        }
        return nodePath
    }

    addToPath(node:TreeNode, index:number, givenPath:Array<string>, nodePath:Array<TreeNode>){
        if(givenPath.length === index + 1){
            return nodePath;
        }
        else if(node.children.length !== 0){
            let childFound = false;
            for(let child of node.children){
                if(child.value === givenPath[index + 1]){
                    childFound = true;
                    nodePath.push(child);
                    this.addToPath(child, index + 1, givenPath, nodePath);
                }
            }
            if(!childFound){
                throw "Child not found, verify your path"
            }
        }
        else if(node.children.length === 0){
            throw "The path does not have the correct length, verify your path";
        }
        return nodePath
    }
}

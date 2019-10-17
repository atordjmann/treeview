
const parsedData = JSON.parse(dataInJson);
let directionData : Direction[] = []
for(let data of parsedData){
    let newLine = new Direction(data.id, data.libelle, data.value, data.path,data.id_pere)
    directionData.push(newLine)
}

let DATAS:nodeObject[]
DATAS = directionData

const DIVID = 'treeView';
const SEPARATOR = ',';
const TOJOIN = '\\'
const ICONE = "fas fa-angle-right";
const INPUTID = "selectedTarget"
let underRootIcon = 'fa-building'
let rootIcon = 'fa-globe'
let nodeIcon = 'fa-home'
let dgaIcon = 'fa-archway'
let dirIcon='fa-city'
let serIcon='fa-building'
let treeV = new TreeView();
let factory = new TreeFactory(DATAS, SEPARATOR, treeV)
let pathChoice = ""

let createHtmlRoot = function (node: TreeNode, tree:htmlTreeView):string {
    let valuePath = [node.value]
    let data = tree.getDataWithPath(valuePath)
    let content = data.libelle;
    let icon = rootIcon
    return `<ul><li class='treeRow'><i class="nodeIcon fas ${icon}"></i><i class="${ICONE}"></i><span class="node angle" id="${node.value}">${content}</span>`;
}

let createHtmlNode = function (node: TreeNode, tree:htmlTreeView):string {
    let nodePath = treeV.getPath(node);
    let valuePath = treeV.nodeToValuePath(nodePath);
    let data = tree.getDataWithPath(valuePath)
    let content = data.libelle;
    let icon 
    if(data.Icon==="underRoot"){
        icon = underRootIcon
    }
    else if(data.Icon==="dga"){
        icon = dgaIcon
    }
    else if(data.Icon==="dir"){
        icon = dirIcon
    }
    else if(data.Icon==="service"){
        icon = serIcon
    }
    else{
        icon = nodeIcon
    }
    return `<ul class='colon nested'><li class='treeRow'><i class="nodeIcon fas ${icon}"></i><i class="${ICONE}"></i><span class="node angle" id="${valuePath}">${content}</span>`;
}

let createHtmlLeaf = function (node: TreeNode, tree:htmlTreeView):string{
    let nodePath = treeV.getPath(node);
    let valuePath = treeV.nodeToValuePath(nodePath);
    let data = tree.getDataWithPath(valuePath)
    let content = data.libelle;
    let icon
    if(data.Icon==="underRoot"){
        icon = underRootIcon
    }
    else if(data.Icon==="dga"){
        icon = dgaIcon
    }
    else if(data.Icon==="dir"){
        icon = dirIcon
    }
    else if(data.Icon==="service"){
        icon = serIcon
    }
    else{
        icon = nodeIcon
    }
    return `<ul class='colon nested'><li class='treeRow'><i class="nodeIcon fas ${icon}"></i><span class="node angle" id="${valuePath}">${content}</span></ul>`;
}

function closeTree(){
    let ul = document.getElementsByClassName("nested");
    for (var i = 0; i < ul.length; i++) {
        if ((<HTMLElement> ul[i]).classList.contains("active")){            
            callbackOnClick(<HTMLElement> ul[i])             
        }
    }
}

function recurCloseSubTree(ulClicked:HTMLElement){
    let children = <HTMLCollection> ulClicked.children[0].children;
    let ulChild;
    if(ulClicked){
        for(var i=0; i< children.length;i++){     
            if( children[i].tagName === "UL"){
                ulChild = <HTMLElement>children[i]
                recurCloseSubTree(ulChild)
    
            }
        }
        if(ulClicked.classList.contains("active")){
            callbackOnClick(ulClicked)
        }        
    }
    
}

function closeSubTree(ulClicked:Element){
    let spanClicked;
    for(var i=0; i< ulClicked.children[0].children.length;i++){
        if(ulClicked.children[0].children[i].tagName==="SPAN"){
            spanClicked = ulClicked.children[0].children[i]
        }
    }
    let spanClickedPath = spanClicked.id.split(SEPARATOR)
    let toggler = document.getElementsByClassName("angle");
    for(var j=0; j<toggler.length;j++){
        let togglerPath = toggler[j].id.split(SEPARATOR)
        if(isUnder(togglerPath, spanClickedPath)){
            toggler[j].parentElement.parentElement.classList.remove("active")
        }
    }
}

function isUnder(pathElmntUnder:string[], pathElmntAbove:string[]){
    if(pathElmntUnder.length < pathElmntAbove.length){
        return false
    }
    else{
        for(var i=0; i<pathElmntAbove.length;i++){
            if(pathElmntUnder[i] !== pathElmntAbove[i]){
                return false
            }
        }
        return true
    }
}

let callBackOnHide = function () {
    closeTree()
}

let htmlTree = new htmlTreeView(DATAS, DIVID,treeV,SEPARATOR,createHtmlRoot, createHtmlNode, createHtmlLeaf, callBackOnHide)

function show(divId: string) {
    htmlTree.show(divId)
}

function addEvents(){
    let toggler = document.getElementsByClassName("angle");
    for (var i = 0; i < toggler.length; i++) {
        addListener(toggler,i);
    }
    
    function addListener(toggler:HTMLCollectionOf<Element>,i:number) {
        toggler[i].addEventListener("click", function () {
            callbackOnClick(this);
        });
    }


}

function callbackOnClick(target:HTMLElement){
    let angle =  target.parentElement.children
    let toggler = document.getElementsByClassName("angle");
    for (var i = 0; i < toggler.length; i++) {
        toggler[i].classList.remove("selected")
    }
    for (var i=0; i<angle.length;i++) {
        if (angle[i].classList.contains("nested")) {
            if(angle[i].classList.contains("active")){
                angle[i].classList.remove("active")
                closeSubTree(angle[i])
            }
            else{
                angle[i].classList.toggle("active");
            }
            
            if (target.parentElement.children[1].tagName === 'I') {
                target.parentElement.children[1].classList.toggle("fa-angle-right")
                target.parentElement.children[1].classList.toggle("fa-angle-down")
            }
        }
    }
    target.classList.toggle("selected")
    pathChoice = target.id.split(SEPARATOR).join(TOJOIN);
    target.classList.toggle("angle-down");
}

function refreshTree(){
    treeV = new TreeView();
    factory = new TreeFactory(DATAS, SEPARATOR, treeV)
    factory.createTree();
    htmlTree = new htmlTreeView(DATAS, DIVID,treeV,SEPARATOR,createHtmlRoot, createHtmlNode, createHtmlLeaf, callBackOnHide)
    htmlTree.divTreefier();
    htmlTree.buildHTMLTree();
    addEvents()
}

function searchNode(input:string){
    let nodes = document.getElementsByClassName("node");
    for (var i = 0; i < nodes.length; i++) {
        if((<HTMLElement>nodes[i]).classList.contains("selected")){
            (<HTMLElement>nodes[i]).classList.remove("selected");
        }   
    }
    closeTree()
    let stringPath = (<HTMLInputElement> document.getElementById(input)).value;
    let path = stringPath.split(TOJOIN)
    let data = <Direction>htmlTree.getDataWithPath(path)
    show(DIVID)
    for (var j = 0; j < nodes.length; j++) {
        if((<HTMLElement>nodes[j]).innerText === data.libelle){
            (<HTMLElement>nodes[j]).classList.add("selected");
        }
        else{
           (<HTMLElement>nodes[j]).click();
        }
    }
}

function showPopUpTreeView(){
    let [modal, save, close] = showPopup("Sélectionner une entité",
        `<div id="treeView" style="display:block"></div>`)
        refreshTree()
    let inputTree = <HTMLInputElement>document.getElementById("selectedTarget");
    if(inputTree.value !== ""){
        searchNode("selectedTarget");
    }
    save.onclick = function(){ 
        inputTree.value =  pathChoice;   
        console.log(pathChoice)  
        modal.style.display = "none";        
    }
    close.onclick=function(){
        modal.style.display = "none";
    }
    window.onclick = function(event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    }
}

function showPopup(title:string, content:string){
    let modal = document.getElementById('popupModificationGeneric');
    modal.style.display = "block";
    let save = document.getElementById('btnEnregistrerPopUp');
    let close = document.getElementById('btnClosePopUp');
    document.getElementById('titlepopupGeneric').innerText = title;
    document.getElementById('contenupopupGeneric').innerHTML = content
    
    return [modal,save,close]
}

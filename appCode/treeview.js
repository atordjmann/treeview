var Direction = (function () {
    function Direction(id, libelle, value, path, id_pere, _Icon) {
        if (_Icon === void 0) { _Icon = null; }
        this.id = id;
        this.libelle = libelle;
        this.value = value;
        this.path = path;
        this.id_pere = id_pere;
        this._Icon = _Icon;
    }
    Object.defineProperty(Direction.prototype, "Icon", {
        get: function () {
            if (this.path.split(',').length === 1) {
                this._Icon = 'root';
            }
            else if (this.path.split(',').length === 2) {
                this._Icon = 'underRoot';
            }
            else if (this.path.split(',').length === 3) {
                this._Icon = 'dga';
            }
            else if (this.path.split(',').length === 4) {
                this._Icon = 'dir';
            }
            else if (this.path.split(',').length === 5) {
                this._Icon = 'service';
            }
            else {
                this._Icon = 'node';
            }
            return this._Icon;
        },
        enumerable: true,
        configurable: true
    });
    return Direction;
}());
var directionsCollection = [
    { id: 1973, libelle: "Logistique Informatique", value: "LOGIST", path: "CD13,DGS,DGA AG,DSISN,SASU,LOGIST", id_pere: 152 },
    { id: 1972, libelle: "Gestion des Achats", value: "ACHATS", path: "CD13,DGS,DGA AG,DSISN,SGFA,ACHATS", id_pere: 1970 },
    { id: 1971, libelle: "Contrôle de Gestion", value: "CTLGEST", path: "CD13,DGS,DGA AG,DSISN,SGFA,CTLGEST", id_pere: 1970 },
    { id: 1970, libelle: "Service de Gestion Financière et Achats", value: "SGFA", path: "CD13,DGS,DGA AG,DSISN,SGFA", id_pere: 128 },
    { id: 1969, libelle: "Pôle Gestion Technique Infrastructures", value: "PGTI", path: "CD13,DGS,DGA AG,DSISN,SESN,PGTI", id_pere: 137 },
    { id: 1968, libelle: "Pôle Gestion Technique Applications", value: "PGTA", path: "CD13,DGS,DGA AG,DSISN,SESN,PGTA", id_pere: 137 },
    { id: 1967, libelle: "Pôle Datacenters", value: "PDC", path: "CD13,DGS,DGA AG,DSISN,SESN,PDC", id_pere: 137 },
    { id: 1966, libelle: "Gestion des Sites Rue Saint-Sébastien", value: "STSEB", path: "CD13,DGS,DGA AG,DSISN,SAJ,STSEB", id_pere: 129 },
    { id: 1784, libelle: "Pôle Opérations Réseaux et Télécommunication", value: "PORT", path: "CD13,DGS,DGA AG,DSISN,SESN,PORT", id_pere: 137 },
    { id: 1783, libelle: "Gestion Administrative", value: "ADMINIST", path: "CD13,DGS,DGA AG,DSISN,SGFA,ADMINIST", id_pere: 1970 },
    { id: 1477, libelle: "Pole Projets", value: "PPROJ", path: "CD13,DGS,DGA AG,DSISN,SCSN,PPROJ", id_pere: 133 },
    { id: 1476, libelle: "Pole RSI", value: "PRSI", path: "CD13,DGS,DGA AG,DSISN,SCSN,PRSI", id_pere: 133 },
    { id: 1283, libelle: "Direction générale adjointe administration générale", value: "DGA AG", path: "CD13,DGS,DGA AG", id_pere: 14 },
    { id: 154, libelle: "Assistance aux Utilisateurs", value: "ASSIST", path: "CD13,DGS,DGA AG,DSISN,SASU,ASSIST", id_pere: 152 },
    { id: 152, libelle: "Service Assistance et Services aux Utilisateurs", value: "SASU", path: "CD13,DGS,DGA AG,DSISN,SASU", id_pere: 128 },
    { id: 147, libelle: "Documentation Technique", value: "DOC", path: "CD13,DGS,DGA AG,DSISN,SQSCI,DOC", id_pere: 142 },
    { id: 146, libelle: "Sécurite des Systèmes d'Information", value: "SSI", path: "CD13,DGS,DGA AG,DSISN,SQSCI,SSI", id_pere: 142 },
    { id: 144, libelle: "Pôle Urbanisation, Innovation et Intégration du SI", value: "PU2I", path: "CD13,DGS,DGA AG,DSISN,SCSN,PU2I", id_pere: 133 },
    { id: 143, libelle: "Qualite et Contrôle Interne", value: "QCI", path: "CD13,DGS,DGA AG,DSISN,SQSCI,QCI", id_pere: 142 },
    { id: 142, libelle: "Service Qualité Sécurité et Contrôle Interne", value: "SQSCI", path: "CD13,DGS,DGA AG,DSISN,SQSCI", id_pere: 128 },
    { id: 138, libelle: "Pôle Opérations Serveurs et Applications", value: "POSA", path: "CD13,DGS,DGA AG,DSISN,SESN,POSA", id_pere: 137 },
    { id: 137, libelle: "Service Exploitation des Services Numériques", value: "SESN", path: "CD13,DGS,DGA AG,DSISN,SESN", id_pere: 128 },
    { id: 133, libelle: "Service Construction des Services Numériques", value: "SCSN", path: "CD13,DGS,DGA AG,DSISN,SCSN", id_pere: 128 },
    { id: 132, libelle: "Gestion Des Marches", value: "MARCHES", path: "CD13,DGS,DGA AG,DSISN,SAJ,MARCHES", id_pere: 129 },
    { id: 130, libelle: "Comptabilite", value: "COMPTA", path: "CD13,DGS,DGA AG,DSISN,SAJ,COMPTA", id_pere: 129 },
    { id: 129, libelle: "Service Administratif et Juridique", value: "SAJ", path: "CD13,DGS,DGA AG,DSISN,SAJ", id_pere: 128 },
    { id: 128, libelle: "Direction des Systèmes d'Information et des Services Numériques", value: "DSISN", path: "CD13,DGS,DGA AG,DSISN", id_pere: 1283 },
    { id: 14, libelle: "Direction générale des services", value: "DGS", path: "CD13,DGS", id_pere: 1 },
    { id: 1, libelle: "Conseil Départemental des Bouches du Rhône", value: "CD13", path: "CD13", id_pere: null },
];
var dataInJson = JSON.stringify(directionsCollection);
var TreeNode = (function () {
    function TreeNode(value, parent, children) {
        if (parent === void 0) { parent = null; }
        if (children === void 0) { children = []; }
        this.value = value;
        this.parent = parent;
        this.children = children;
    }
    TreeNode.prototype.getChildIndex = function (value) {
        if (this.children.length === 0) {
            return undefined;
        }
        else {
            for (var i = 0; i < this.children.length; i++) {
                if (this.children[i].value === value) {
                    return i;
                }
            }
        }
    };
    return TreeNode;
}());
var TreeView = (function () {
    function TreeView(root) {
        if (root === void 0) { root = null; }
        this.root = root;
    }
    TreeView.prototype.addNode = function (value, parentPath) {
        if (parentPath === void 0) { parentPath = null; }
        var newNode = new TreeNode(value);
        if (this.root) {
            var node = this.findChildNode(value, parentPath);
            if (!node) {
                if (parentPath === null) {
                    this.root.children.push(newNode);
                    newNode.parent = this.root;
                }
                else {
                    if (!node) {
                        var parent_1 = parentPath[parentPath.length - 1];
                        parent_1.children.push(newNode);
                        newNode.parent = parent_1;
                    }
                }
            }
        }
        else {
            this.root = newNode;
        }
    };
    TreeView.prototype.removeNode = function (value, path) {
        if (path.length === 1) {
            this.root = null;
        }
        else {
            if (this.findNode(path)) {
                var parent_2 = path[path.length - 2];
                var index = parent_2.getChildIndex(value);
                parent_2.children.splice(index, 1);
            }
        }
    };
    TreeView.prototype.findChildNode = function (value, parentPath) {
        if (parentPath === null) {
            for (var _i = 0, _a = this.root.children; _i < _a.length; _i++) {
                var child = _a[_i];
                if (child.value === value) {
                    return child;
                }
            }
        }
        else {
            for (var i = 0; i < parentPath.length - 1; i++) {
                var pathOk = false;
                for (var _b = 0, _c = parentPath[i].children; _b < _c.length; _b++) {
                    var children = _c[_b];
                    if (children.value === parentPath[i + 1].value) {
                        pathOk = true;
                    }
                }
                if (!pathOk) {
                    return false;
                }
            }
            for (var _d = 0, _e = parentPath[parentPath.length - 1].children; _d < _e.length; _d++) {
                var lastChildren = _e[_d];
                if (lastChildren.value === value) {
                    return lastChildren;
                }
            }
            return false;
        }
    };
    TreeView.prototype.findNode = function (path) {
        if (path.length === 1) {
            if (path[0] === this.root) {
                return this.root;
            }
        }
        else {
            var value = path[path.length - 1].value;
            for (var i = 0; i < path.length - 1; i++) {
                var pathOk = false;
                for (var _i = 0, _a = path[i].children; _i < _a.length; _i++) {
                    var children = _a[_i];
                    if (children.value === path[i + 1].value) {
                        pathOk = true;
                    }
                }
                if (!pathOk) {
                    return false;
                }
            }
            for (var _b = 0, _c = path[path.length - 2].children; _b < _c.length; _b++) {
                var lastChildren = _c[_b];
                if (lastChildren.value === value) {
                    return lastChildren;
                }
            }
            return false;
        }
    };
    TreeView.prototype.getPath = function (node) {
        var path = [];
        var parent = node.parent;
        while (parent !== null) {
            path.unshift(parent);
            parent = parent.parent;
        }
        path.push(node);
        return path;
    };
    TreeView.prototype.nodeToValuePath = function (path) {
        var valuePath = [];
        for (var _i = 0, path_1 = path; _i < path_1.length; _i++) {
            var node = path_1[_i];
            valuePath.push(node.value);
        }
        return valuePath;
    };
    TreeView.prototype.valueToNodePath = function (path) {
        var nodePath = [];
        if (this.root.value === path[0]) {
            nodePath.push(this.root);
            this.addToPath(this.root, 0, path, nodePath);
        }
        else {
            throw "The path does not contain the root, verify your path";
        }
        return nodePath;
    };
    TreeView.prototype.addToPath = function (node, index, givenPath, nodePath) {
        if (givenPath.length === index + 1) {
            return nodePath;
        }
        else if (node.children.length !== 0) {
            var childFound = false;
            for (var _i = 0, _a = node.children; _i < _a.length; _i++) {
                var child = _a[_i];
                if (child.value === givenPath[index + 1]) {
                    childFound = true;
                    nodePath.push(child);
                    this.addToPath(child, index + 1, givenPath, nodePath);
                }
            }
            if (!childFound) {
                throw "Child not found, verify your path";
            }
        }
        else if (node.children.length === 0) {
            throw "The path does not have the correct length, verify your path";
        }
        return nodePath;
    };
    return TreeView;
}());
var htmlTreeView = (function () {
    function htmlTreeView(data, divId, tree, separator, createHtmlRoot, createHtmlNode, createHtmlLeaf, callBackOnHide) {
        if (data === void 0) { data = null; }
        if (divId === void 0) { divId = null; }
        if (tree === void 0) { tree = null; }
        if (separator === void 0) { separator = null; }
        if (createHtmlRoot === void 0) { createHtmlRoot = null; }
        if (createHtmlNode === void 0) { createHtmlNode = null; }
        if (createHtmlLeaf === void 0) { createHtmlLeaf = null; }
        if (callBackOnHide === void 0) { callBackOnHide = null; }
        this.data = data;
        this.divId = divId;
        this.tree = tree;
        this.separator = separator;
        this.createHtmlRoot = createHtmlRoot;
        this.createHtmlNode = createHtmlNode;
        this.createHtmlLeaf = createHtmlLeaf;
        this.callBackOnHide = callBackOnHide;
        this.html = "";
        this.htmlEnd = "";
    }
    htmlTreeView.prototype.divTreefier = function () {
        this.htmlToFeed = document.getElementById(this.divId);
    };
    htmlTreeView.prototype.buildHTMLTree = function () {
        var node = this.tree.root;
        this.html += this.createHtmlRoot(node, this);
        if (node.children.length !== 0) {
            for (var _i = 0, _a = node.children; _i < _a.length; _i++) {
                var child = _a[_i];
                this.addSubtree(child);
            }
            this.html += "</li>";
        }
        else {
            this.html += "</li></ul>";
        }
        this.htmlToFeed.innerHTML = this.html;
    };
    htmlTreeView.prototype.addSubtree = function (node) {
        if (node.children.length !== 0) {
            this.html += this.createHtmlNode(node, this);
            for (var _i = 0, _a = node.children; _i < _a.length; _i++) {
                var child = _a[_i];
                this.addSubtree(child);
            }
            this.html += "</ul>";
        }
        else {
            this.html += this.createHtmlLeaf(node, this);
        }
    };
    htmlTreeView.prototype.show = function (div) {
        document.getElementById(div).style.display = "block";
    };
    htmlTreeView.prototype.hide = function (div) {
        document.getElementById(div).style.display = "none";
        this.callBackOnHide();
    };
    htmlTreeView.prototype.getDataWithPath = function (stringPath) {
        if (stringPath.length === 1) {
            for (var _i = 0, _a = this.data; _i < _a.length; _i++) {
                var objectRoot = _a[_i];
                if (objectRoot.path === stringPath[0]) {
                    return objectRoot;
                }
            }
        }
        else {
            for (var _b = 0, _c = this.data; _b < _c.length; _b++) {
                var object = _c[_b];
                if (object.path === stringPath.join(this.separator)) {
                    return object;
                }
            }
        }
    };
    htmlTreeView.prototype.getDataWithId = function (id) {
        for (var _i = 0, _a = this.data; _i < _a.length; _i++) {
            var object = _a[_i];
            if (object.id === id) {
                return object;
            }
        }
    };
    return htmlTreeView;
}());
var TreeFactory = (function () {
    function TreeFactory(data, separator, tree) {
        if (data === void 0) { data = null; }
        if (separator === void 0) { separator = null; }
        if (tree === void 0) { tree = null; }
        this.data = data;
        this.separator = separator;
        this.tree = tree;
    }
    TreeFactory.prototype.createTree = function () {
        var sousTableaux = [];
        for (var _i = 0, _a = this.data; _i < _a.length; _i++) {
            var data = _a[_i];
            var length_1 = data.path.split(this.separator).length;
            var found = false;
            for (var _b = 0, sousTableaux_1 = sousTableaux; _b < sousTableaux_1.length; _b++) {
                var sousTab = sousTableaux_1[_b];
                if (sousTab.rank === length_1) {
                    found = true;
                    sousTab.push(data);
                }
            }
            if (!found) {
                var newSousTab = [];
                newSousTab.rank = length_1;
                newSousTab.push(data);
                sousTableaux.push(newSousTab);
            }
        }
        var orderedTab = sousTableaux.sort(function (x, y) { return x.rank - y.rank; });
        for (var j = 0; j < sousTableaux.length; j++) {
            for (var _c = 0, _d = orderedTab[j]; _c < _d.length; _c++) {
                var node = _d[_c];
                var value = node.value;
                var path = node.path.split(this.separator);
                if (path.length === 1) {
                    this.tree.addNode(value);
                }
                else {
                    path.pop();
                    var nodePath = this.tree.valueToNodePath(path);
                    this.tree.addNode(value, nodePath);
                }
            }
        }
    };
    TreeFactory.prototype.getDataFromNode = function (node) {
        var nodePath = this.tree.getPath(node);
        var nodeValuePath = [];
        for (var _i = 0, nodePath_1 = nodePath; _i < nodePath_1.length; _i++) {
            var node_1 = nodePath_1[_i];
            nodeValuePath.push(node_1.value);
        }
        var stringPath = nodeValuePath.join(this.separator);
        for (var _a = 0, _b = this.data; _a < _b.length; _a++) {
            var data = _b[_a];
            if (data.path === stringPath) {
                return data;
            }
        }
    };
    TreeFactory.prototype.getNodeFromData = function (data) {
        var path = this.tree.valueToNodePath(data.path.split(this.separator));
        var node = this.tree.findNode(path);
        if (node) {
            return node;
        }
        else {
            throw "Can't find the node corresponding to your data";
        }
    };
    TreeFactory.prototype.toSerialize = function () {
        var dataToStringify = [];
        for (var i = 0; i < this.data.length; i++) {
            var node = this.getNodeFromData(this.data[i]);
            var idParent = void 0;
            if (node.parent !== null) {
                idParent = this.getDataFromNode(node.parent).id;
            }
            var line = { id: this.data[i].id, value: node.value, libelle: this.data[i].libelle, path: this.data[i].path, id_pere: idParent, Icon: this.data[i].Icon };
            dataToStringify.push(line);
        }
        return JSON.stringify(dataToStringify);
    };
    return TreeFactory;
}());
var parsedData = JSON.parse(dataInJson);
var directionData = [];
for (var _i = 0, parsedData_1 = parsedData; _i < parsedData_1.length; _i++) {
    var data = parsedData_1[_i];
    var newLine = new Direction(data.id, data.libelle, data.value, data.path, data.id_pere);
    directionData.push(newLine);
}
var DATAS;
DATAS = directionData;
var DIVID = 'treeView';
var SEPARATOR = ',';
var TOJOIN = '\\';
var ICONE = "fas fa-angle-right";
var INPUTID = "selectedTarget";
var underRootIcon = 'fa-building';
var rootIcon = 'fa-globe';
var nodeIcon = 'fa-home';
var dgaIcon = 'fa-archway';
var dirIcon = 'fa-city';
var serIcon = 'fa-building';
var treeV = new TreeView();
var factory = new TreeFactory(DATAS, SEPARATOR, treeV);
var pathChoice = "";
var createHtmlRoot = function (node, tree) {
    var valuePath = [node.value];
    var data = tree.getDataWithPath(valuePath);
    var content = data.libelle;
    var icon = rootIcon;
    return "<ul class='colon nested'><li class='treeRow'><i class=\"nodeIcon fas " + icon + "\"></i><i class=\"" + ICONE + "\"></i><span class=\"node angle\" id=\"" + node.value + "\">" + content + "</span>";
};
var createHtmlNode = function (node, tree) {
    var nodePath = treeV.getPath(node);
    var valuePath = treeV.nodeToValuePath(nodePath);
    var data = tree.getDataWithPath(valuePath);
    var content = data.libelle;
    var icon;
    if (data.Icon === "underRoot") {
        icon = underRootIcon;
    }
    else if (data.Icon === "dga") {
        icon = dgaIcon;
    }
    else if (data.Icon === "dir") {
        icon = dirIcon;
    }
    else if (data.Icon === "service") {
        icon = serIcon;
    }
    else {
        icon = nodeIcon;
    }
    return "<ul class='colon nested'><li class='treeRow'><i class=\"nodeIcon fas " + icon + "\"></i><i class=\"" + ICONE + "\"></i><span class=\"node angle\" id=\"" + valuePath + "\">" + content + "</span>";
};
var createHtmlLeaf = function (node, tree) {
    var nodePath = treeV.getPath(node);
    var valuePath = treeV.nodeToValuePath(nodePath);
    var data = tree.getDataWithPath(valuePath);
    var content = data.libelle;
    var icon;
    if (data.Icon === "underRoot") {
        icon = underRootIcon;
    }
    else if (data.Icon === "dga") {
        icon = dgaIcon;
    }
    else if (data.Icon === "dir") {
        icon = dirIcon;
    }
    else if (data.Icon === "service") {
        icon = serIcon;
    }
    else {
        icon = nodeIcon;
    }
    return "<ul class='colon nested'><li class='treeRow'><i class=\"nodeIcon fas " + icon + "\"></i><span class=\"node angle\" id=\"" + valuePath + "\">" + content + "</span></ul>";
};
function closeTree() {
    var ul = document.getElementsByClassName("nested");
    for (var i = 0; i < ul.length; i++) {
        if (ul[i].classList.contains("active")) {
            callbackOnClick(ul[i]);
        }
    }
}
function recurCloseSubTree(ulClicked) {
    var children = ulClicked.children[0].children;
    var ulChild;
    if (ulClicked) {
        for (var i = 0; i < children.length; i++) {
            if (children[i].tagName === "UL") {
                ulChild = children[i];
                recurCloseSubTree(ulChild);
            }
        }
        if (ulClicked.classList.contains("active")) {
            callbackOnClick(ulClicked);
        }
    }
}
function closeSubTree(ulClicked) {
    var spanClicked;
    for (var i = 0; i < ulClicked.children[0].children.length; i++) {
        if (ulClicked.children[0].children[i].tagName === "SPAN") {
            spanClicked = ulClicked.children[0].children[i];
        }
    }
    var spanClickedPath = spanClicked.id.split(SEPARATOR);
    var toggler = document.getElementsByClassName("angle");
    for (var j = 0; j < toggler.length; j++) {
        var togglerPath = toggler[j].id.split(SEPARATOR);
        if (isUnder(togglerPath, spanClickedPath)) {
            toggler[j].parentElement.parentElement.classList.remove("active");
        }
    }
}
function isUnder(pathElmntUnder, pathElmntAbove) {
    if (pathElmntUnder.length < pathElmntAbove.length) {
        return false;
    }
    else {
        for (var i = 0; i < pathElmntAbove.length; i++) {
            if (pathElmntUnder[i] !== pathElmntAbove[i]) {
                return false;
            }
        }
        return true;
    }
}
var callBackOnHide = function () {
    closeTree();
};
var htmlTree = new htmlTreeView(DATAS, DIVID, treeV, SEPARATOR, createHtmlRoot, createHtmlNode, createHtmlLeaf, callBackOnHide);
function show(divId) {
    htmlTree.show(divId);
}
function addEvents() {
    var toggler = document.getElementsByClassName("angle");
    for (var i = 0; i < toggler.length; i++) {
        addListener(toggler, i);
    }
    function addListener(toggler, i) {
        toggler[i].addEventListener("click", function () {
            callbackOnClick(this);
        });
    }
}
function callbackOnClick(target) {
    var angle = target.parentElement.children;
    var toggler = document.getElementsByClassName("angle");
    for (var i = 0; i < toggler.length; i++) {
        toggler[i].classList.remove("selected");
    }
    for (var i = 0; i < angle.length; i++) {
        if (angle[i].classList.contains("nested")) {
            if (angle[i].classList.contains("active")) {
                angle[i].classList.remove("active");
                closeSubTree(angle[i]);
            }
            else {
                angle[i].classList.toggle("active");
            }
            if (target.parentElement.children[1].tagName === 'I') {
                target.parentElement.children[1].classList.toggle("fa-angle-right");
                target.parentElement.children[1].classList.toggle("fa-angle-down");
            }
        }
    }
    target.classList.toggle("selected");
    pathChoice = target.id.split(SEPARATOR).join(TOJOIN);
    target.classList.toggle("angle-down");
}
function refreshTree() {
    treeV = new TreeView();
    factory = new TreeFactory(DATAS, SEPARATOR, treeV);
    factory.createTree();
    htmlTree = new htmlTreeView(DATAS, DIVID, treeV, SEPARATOR, createHtmlRoot, createHtmlNode, createHtmlLeaf, callBackOnHide);
    htmlTree.divTreefier();
    htmlTree.buildHTMLTree();
    addEvents();
}
function searchNode(input) {
    var nodes = document.getElementsByClassName("node");
    for (var i = 0; i < nodes.length; i++) {
        if (nodes[i].classList.contains("selected")) {
            nodes[i].classList.remove("selected");
        }
    }
    closeTree();
    var stringPath = document.getElementById(input).value;
    var path = stringPath.split(TOJOIN);
    var data = htmlTree.getDataWithPath(path);
    show(DIVID);
    for (var j = 0; j < nodes.length; j++) {
        if (nodes[j].innerText === data.libelle) {
            nodes[j].classList.add("selected");
        }
        else {
            nodes[j].click();
        }
    }
}
function showPopUpTreeView() {
    var _a = showPopup("Sélectionner une entité", "<div id=\"treeView\" style=\"display:block\"></div>"), modal = _a[0], save = _a[1], close = _a[2];
    refreshTree();
    var inputTree = document.getElementById("selectedTarget");
    if (inputTree.value !== "") {
        searchNode("selectedTarget");
    }
    save.onclick = function () {
        inputTree.value = pathChoice;
        console.log(pathChoice);
        modal.style.display = "none";
    };
    close.onclick = function () {
        modal.style.display = "none";
    };
    window.onclick = function (event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    };
}
function showPopup(title, content) {
    var modal = document.getElementById('popupModificationGeneric');
    modal.style.display = "block";
    var save = document.getElementById('btnEnregistrerPopUp');
    var close = document.getElementById('btnClosePopUp');
    document.getElementById('titlepopupGeneric').innerText = title;
    document.getElementById('contenupopupGeneric').innerHTML = content;
    return [modal, save, close];
}
//# sourceMappingURL=treeview.js.map
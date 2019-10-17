const directionsCollection = [
    {id:1,libelle:"Président directeur général",value:"PDG",path:"PDG",id_pere:null},
    {id:3,libelle:"Directeur commercial",value:"DC",path:"PDG,DC",	id_pere:1},
    {id:4,libelle:"Directeur de la production",value:"DP"	,path:"PDG, DP",id_pere:1},
    {id:5,libelle:"Directeur financier",value:"DF",path:"PDG, DF",id_pere:1},
    {id:6,libelle:"Directeur administratif",value:"DA"	,path:"PDG, DA",id_pere:1},
    {id:7,libelle:"Responsable des ventes",value:"RV"	,path:"PDG, DC, RV",id_pere:3},
    {id:8,libelle:"Responsable d'atelier",value:"RA",path:"PDG, DP, RA",id_pere:4},
    {id:9,libelle:"Responsable de la comptabilité",value:"RC",path:"PDG, DF, RC",id_pere:5},
    {id:10,libelle:"Responsable des ressources humaines",value:"RRH",path:"PDG, DA, RRH",id_pere:6},
    {id:11,libelle:"Assistant marketing",value:"AM",path:"PDG, DC, RV, AM",id_pere:7},

]

const dataInJson = JSON.stringify(directionsCollection)
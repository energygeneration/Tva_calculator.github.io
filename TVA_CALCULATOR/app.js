//si l'un des montant est inferieur à 0

let montantHtaxe = 15000;
let montantTva = 17000;
if(montantHtaxe>0 && montantTva<0){
    console.log("erreur.l'un des montant est inferieur.aucun montant ne doit être inferieur");
}
if(montantTva>0 && montantHtaxe<0){
    console.log("erreur.l'un des montant est inferieur.aucun montant ne doit être inferieur");
}

//si les montant sont positifs


if(montantHtaxe>0 && montantTva>0){
    let tva = " montantTva % montantHtaxe"
    console.log(tva);
}else {
    console.log("erreur.l'un des montant est inferieur.aucun montant ne doit être inferieur");
}
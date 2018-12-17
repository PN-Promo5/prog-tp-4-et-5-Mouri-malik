

/*Exercice 1 : Afficher tous les éléments du tableau*/

let nbr = [1, 2, 3, 4, 5, 6, 7, 8 ,9, 10];

let curentElement;

function nombres(nbr){
  let i = 0;//variable intermédiaire utilisée lors de l'énumération
  let curentElement; //variable élément courant
  while(i <= nbr.lenght);//condition de continuation
  curentElement = nbr[i];//récupération de l'élément courant
  i++;//incrémentation i = i +1
  //console.log(nbr)
}
nombres(nbr);

//Exercice 2 : Afficher les 10 premiers éléments du tableau

let ltr = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T","U", "V", "W", "X", "Y", "Z"]

let currentElement;

function letter(ltr) {
  let i = 0;
  let currentElement;
  if (ltr.length <= 10){
    while (i < ltr.length) {
      curentElement = ltr[i];
      i++;
      //console.log(ltr)
    }
  } else {
    while (i <10) {
      currentElement = ltr[i];
      i++;
    //  console.log(currentElement)
    }
  }
}
letter(ltr)

//Exercice 3 : Afficher les 10 derniers éléments du tableau

let lastElmt = ["gutz", "naruto", "itachi", "grifith", "casca", "eren", "levi", "mikasa", "lucif", "hay", "ippo", "ratz"]

function array(lastElmt) {
  let i = 0;
  let currentElmnt;
  if(lastElmt.length <= 10 ){
    while (i < lastArray.length) {
      currentElmnt = lastElmt[i];
      i--;
    //console.log(lastElmt);
    }
  }else {
    while(i <10 ) {
      currentElmnt = lastElmt[lastElmt.length - 10 +i];
      i++
    //  console.log(currentElmnt)
    }
  }
}

array(lastElmt)

// Exercice 4: faire une copie du tableau en ajoutant 1 a chaque nombre passer danns l'autre tableau

let arrayNb = [1,2,3,4,5,6,7,8,9,10,11,12,13,15,16,25]

function copyArray(arrayNb) {
  let i = 0;
  let currentElmnt;
  let copyArray = [];
  let currentElmntI;
  while (i < arrayNb.length){
    currentElmnt = arrayNb[i]; //récupère
    currentElmntI = currentElmnt+1;//Récuperation d'élément uniquement
    i++;
    copyArray.push(currentElmntI);//rajoute +1 à l'élément courant
    console.log(copyArray)
  }
  return copyArray;
}

copyArray(arrayNb)

//Exercice 5 : afficher les nombres pairs et impairs du tableau

let arrayM = [2,3,4,5,8,9,10,799,34,1578]

function choiceNbr(arrayM) {
  let i = 0;
    let currentElmt;
  while(i < arrayM.length){
    currentElmt = arrayM[i];
    i++;
    if(currentElmt % 2 === 0){
      console.log(currentElmt + " " + "est pair");
    } else {
      console.log(currentElmt + " " + "est impair")
    }
  }
}
choiceNbr(arrayM)

//Exercice 6 : Somme de nombres d'un tableau


let arrayNbr = [2,4,5,6,7,8,9,14,1800]

function totalNbr(arrayNbr) {
  let i = 0;
  let totalNbr = 0;
  let currentElmnt;
  while(i < arrayNbr.length){
    currentElmnt = arrayNbr[i];
    i++;
    totalNbr = totalNbr + currentElmnt;
    console.log(totalNbr);
}
return totalNbr
}
totalNbr(arrayNbr)


//Exercice 7 : retourner le nombre d'éléments pairs que contient un tableau

let evenArray = [1,2,4,5,6,7,]

function arrayP(evenArray) {
  let i = 0;
  let nbEvenElmt = 0;
  let currentElmt;
  while(i < evenArray.length){
    currentElmt = evenArray[i];
    i++;
    if(currentElmt % 2 === 0){
      nbEvenElmt++;
      console.log(currentElmt)
  }
}
return nbEvenElmt;

}
arrayP(evenArray)


//Exercice 8: Renvoyer la valeur maximum d'un tableau//
console.log("exercice 8")

let maxArray = [1,2,3,4,5,6,346]//tableau de nombres

function array(maxArray) {
  let i = 0;//valeur intermédiaire
  let maxValue = maxArray[0];;
  let currentElmnt; //élement courrant
  while(i < maxArray.length){
    i++;
    currentElmnt = maxArray[i]; //récuperation de l'elmnt courant
    if(currentElmnt > maxValue){
      maxValue = currentElmnt;
    }
  }
    return maxValue;//renvoi la valeur maximum du tableau
}

console.log(array(maxArray))


//Exercice 9 : afficher la valeur max et minimum d'un tableau
console.log("Exercice 9")
let maxMinArray = [5,15,35,65,100]

function arrayValues(maxMinArray){
  let i = 0;
  let maxxValue = maxMinArray[0];
  let minValue = maxMinArray[0];
  let currentElmnt;
  while(i < maxMinArray.length){
    i++;
    currentElmnt = maxMinArray[i];
    if(currentElmnt > maxxValue){//éléments courant supérieur a la valeur maximum
      maxxValue = currentElmnt;
    }
    if (currentElmnt <  minValue){//si les elements sont inférieur a la valeur minimal
      minValue = currentElmnt;//la valeur minimum vaux currentElmnt
    }
}
  console.log("la valeur Maximum est" + " " + maxxValue);
  console.log("La valeur minimum est "+minValue)

}

 arrayValues(maxMinArray)


//Exercice 10 :Renvoyer vrai si tableau est ordonné dans l’ordre croissant, faux si cas contraire.
console.log("Exercice 10")

let arrayOrder = [1,2,3,4,5,6,7,8,9,10];

  function arrayO(arrayOrder){
    let f = false;    // variable qui stock un booléen pour
    let i = 0;        // variable intermédiaire
    let currentElmnt;//élement courant
    let beforeElmnt;//élement d'après
    while (i < arrayOrder.length - 1){ //
      currentElmnt = arrayOrder[i];   //récuperation d'élément courant
      beforeElmnt = arrayOrder[i + 1] //(ajoute +1 a l'élement d'après)
      i = i +1;        //variable intérmediaire utilisée pour énuméré
      if(currentElmnt > beforeElmnt){//si l'élement courant > l'elemnt d'après = faux
        f = false;
     }else {//sinon f = false
        f = true;
     }
    }
    return f
}

console.log(arrayO(arrayOrder))

//Exercice 11
console.log("Exercice 11")

let arrayC = [1,1,1,1,2,2,2,2,3,3,3,]

function array(arrayC) {
  let i = 0;
  let currentElmnt;
  let j;
  let copyArray = [];
  let copy;
  copyArray.push(arrayC[0]);
  while(i < arrayC.length) {
    currentElmnt = arrayC[i+1];
    i = i +1;
    j = 0;
    copy = true;
    while(j < copyArray.length){
      if(currentElmnt === copyArray[j]){
        copy = false;
      }
      j = j +1;
   }
   if (copy) {
     copyArray.push(currentElmnt)
   }
  }
  return copyArray
}

console.log(array(arrayC))



//Exercice 12//
console.log("Exercice 12")

let arrayD = [10,20,30,40,50,60,70,80,90,100]

function array(arrayD){
  let i = 0;//variable intermédiaire
  let currentElmnt;
  let copyArray = [];
  while(i < arrayD.length){ //i est inférieur à la longueur du tableau
    currentElmnt = arrayD.length - 1 -i;//
    copyArray.push(arrayD[currentElmnt]);//ajoute les elmnts courant dans le tableau vide
    i = i+1; //énumération
  }
  return copyArray;
}
console.log(array(arrayD))


//Exarcice 13
console.log("Exercice 13")

let array1 = [2,4,6,8,10,12,14,16]
let array2 = [1,13,5,7,9,11,13,15]

function array(array1, array2){
  let i = 0;
  let currentElmnt;
  let emptyArray = [];
  while(i < array1.length) { //Boucle pour le array1
    currentElmnt = array1[i];
    i = i+1;
    emptyArray.push(currentElmnt);//Ajout des elements courant dans le tableau vide
  }
   i = 0;
  while(i < array2.length){//boucle pour le array2
    currentElmnt = array2[i];
    i++;
    emptyArray.push(currentElmnt)//Ajout des éléments courants dans le tableau vide
  }
  return emptyArray;
}  let i = 0;

//Exercice 14//

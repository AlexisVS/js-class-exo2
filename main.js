"use strict";

// ## EXO1
// ## Traduire le code suivant en class et en instances

// ### lieux
// let maison = {
//     nom: "maison",
//     contenu: [],
// };
// let epicerie = {
//     nom: "epicerie",
//     contenu: [],
//     ingredients: [],
// };
// let cuisine = {
//     nom: "cuisine",
//     contenu: [],
//     ingredients: [],
// };

class Lieux {
    constructor(nom,contenu,ingredients) {
        this.nom = nom,
        this.contenu = contenu,
        this.ingredients = ingredients
    }
}

let maison = new Lieux("mainson", [])
let epicerie = new Lieux("epicerie", [], [])
let cuisine = new Lieux("cuisine", [], [])

// ### ingredients
// let poivron = {
//     nom: 'poivron',
//     etat: 'entier',
//     prix: 1,
// };
// let oignon = {
//     nom: 'oignon',
//     etat: 'entier',
//     prix: 2,
// };
// let oeuf = {
//     nom: 'oeuf',
//     etat: 'entier',
//     prix: 4,
// };
// let epice = {
//     nom: 'epice',
//     etat: 'moulu',
//     prix: 3.25,
// };
// let paprika = {
//     nom: 'paprika',
//     etat: 'moulu',
//     prix: 1.5,
// };
// let fromage = {
//     nom: 'fromage',
//     etat: 'coupé',
//     prix: 1.6,
// };

class Ingredients {
    constructor(nom,etat,prix) {
        this.nom = nom,
        this.etat = etat,
        this.prix = prix
    }
}
let poivron = new Ingredients("poivron", "entier", 1)
let oigon = new Ingredients("oigon", "entier", 2)
let oeuf = new Ingredients("oeuf", "entier", 4)
let epice = new Ingredients("epice", "moulu", 3.25)
let paprika = new Ingredients("paprika", "moulu", 1.5)
let fromage = new Ingredients("fromage", "coupé", 1.6)

// // ### Personne
// let personnage = {
//     nom: "Maxime",
//     lieu: "néant",
//     argent: 100,
//     panier: [],
//     se_deplacer (x) {
//     },

//     payer (x) {
//     },
//     couper (x, y) {
//     }
// }

class Personnage {
    constructor(nom,lieu, argent, panier) {
        this.nom = nom,
        this.lieu = lieu,
        this.argent = argent,
        this.panier = panier
    }
    se_deplacer = (x) => {
        console.log("bjr");
    }
    payer = (x) => {
        console.log(this.nom);
    }
    couper = (x, y) => {

    }
}

let x = new Personnage ("Alexis", 'BX', 3000, []);
x.se_deplacer()
x.payer()
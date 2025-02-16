const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const lines = input.split('\n');


function determinarAnimal(palavra1, palavra2, palavra3) {
    if (palavra1 === "vertebrado") {
        if (palavra2 === "ave") {
            if (palavra3 === "carnivoro") {
                return "aguia";
            } else if (palavra3 === "onivoro") {
                return "pomba";
            }
        } else if (palavra2 === "mamifero") {
            if (palavra3 === "onivoro") {
                return "homem";
            } else if (palavra3 === "herbivoro") {
                return "vaca";
            }
        }
    } else if (palavra1 === "invertebrado") {
        if (palavra2 === "inseto") {
            if (palavra3 === "hematofago") {
                return "pulga";
            } else if (palavra3 === "herbivoro") {
                return "lagarta";
            }
        } else if (palavra2 === "anelideo") {
            if (palavra3 === "hematofago") {
                return "sanguessuga";
            } else if (palavra3 === "onivoro") {
                return "minhoca";
            }
        }
    }
    return "Animal não identificado";
}

const palavra1 = "vertebrado"; 
const palavra2 = "mamifero"; 
const palavra3 = "onivoro";

const animal = determinarAnimal(palavra1, palavra2, palavra3);
console.log(animal);
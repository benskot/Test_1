const _ = require('lodash');

// pour trier un tableau
const sortedArray = _.sortBy([3, 1, 4, 1, 5, 9]);
console.log(sortedArray); // Affiche [1, 1, 3, 4, 5, 9]


// pour supprimer les doublons d'un tableau
const originalArray = [1, 2, 3, 2, 4, 3, 5,10,10];
const uniqueArray = _.uniq(originalArray);

console.log(uniqueArray); // [1, 2, 3, 4, 5]

// Importez le module "util" pour promisifier la fonction setTimeout
const util = require('util');

// Utilisez util.promisify pour transformer setTimeout en une fonction asynchrone
const wait = util.promisify(setTimeout);

// Fonction asynchrone qui génère un nombre aléatoire et renvoie une erreur si < 0.5
async function generateRandomNumber() {
    try {
        // Attendez pendant 1 seconde (simulez une tâche asynchrone)
        await wait(1000);

        // Générez un nombre aléatoire entre 0 et 1
        const randomValue = Math.random();

        if (randomValue < 0.5) {
            throw new Error('Le nombre généré est inférieur à 0.5.');
        }

        return randomValue;
    } catch (error) {
        throw error;
    }
}

// Utilisation de la fonction
generateRandomNumber()
    .then((result) => {
        console.log('Nombre généré :', result);
    })
    .catch((error) => {
        console.error('Erreur :', error.message);
    });

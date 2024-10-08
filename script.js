const listemots = ["Cachalot", "Pétunia", "Serviette"];
const listephrases = [
	"Pas de panique!",
	"La vie, l'univers et le reste",
	"Merci pour le poisson!",
];
let score = 0;

// Déclaration de la variable contenant le choix de l'utilisateur
let choix = prompt(
	"Avec quelle liste désirez-vous jouer : 'mots' ou 'phrases' ?",
);
// Tant que l'utilisateur n'a pas saisi "mots" ou "phrases", on lui redemande de saisir un choix
while (choix !== "mots" && choix !== "phrases") {
	choix = prompt(
		"Avec quelle liste désirez-vous jouer : 'mots' ou 'phrases' ?",
	);
}

if (choix === "mots") {
	for (let i = 0; i < listemots.length; i++) {
		let motutilisateur = prompt("Entrez le mot: " + listemots[i]);
		if (motutilisateur === listemots[i]) {
			score++;
		}
	}
	console.log("Votre score est de " + score + " sur " + listemots.length);
} else {
	for (let i = 0; i < listephrases.length; i++) {
		let phraseutilisateur = prompt("Entrez la phrase: " + listephrases[i]);
		if (phraseutilisateur === listephrases[i]) {
			score++;
		}
	}
	console.log("Votre score est de " + score + " sur " + listephrases.length);
}

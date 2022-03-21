const body = document.querySelector('body');
const buttons = document.querySelectorAll('button');

let resultat = document.getElementById('resultat');

let score = 0;

let affichageScore = document.getElementById('score');

let imgJoueur = document.getElementById('imgJoueur');
let imgRobot = document.getElementById('imgRobot');

for (let i = 0; i < buttons.length; i++) {
	buttons[i].addEventListener('click', () => {
		const joueur = buttons[i].innerHTML;

		const robot = buttons[Math.floor(Math.random() * buttons.length)].innerHTML;

		let result = "";

		// Logique du jeu
		if ((joueur === "Feu" && robot === "Plante") || (joueur === "Eau" && robot === "Feu") || (joueur === "Plante" && robot === "Eau")) {
			result = "Gagné";
		}
		else if (joueur === robot) {
			result = "Egalité";
		}
		else {
			result = "Perdu";
		}


		// Icône du jeu du Joueur
		if (joueur === "Feu") {
			imgJoueur.style.background = 'url(icon/feu.png)'
		}
		else if (joueur === "Eau") {
			imgJoueur.style.background = 'url(icon/eau.png)'
		}
		else {
			imgJoueur.style.background = 'url(icon/plante.png)'
		}


		// Icône du jeu du Robot
		if (robot === "Feu") {
			imgRobot.style.background = 'url(icon/feu.png)'
		}
		else if (robot === "Eau") {
			imgRobot.style.background = 'url(icon/eau.png)'
		}
		else {
			imgRobot.style.background = 'url(icon/plante.png)'
		}


		// Résultat
		if (result === "Perdu") {
			resultat.style.color = 'red';
			score--;
		}
		else if (result === "Gagné") {
			resultat.style.color = 'green';
			score++;
		}
		else {
			resultat.style.color = 'beige';
		}


		// Affichage du résultat
		resultat.innerHTML = `
			Joueur: ${joueur} <br></br>
			Ordi: ${robot} <br></br>
			Résultat: ${result} 
			`;


		affichageScore.innerHTML = `Score: ${score}`;
	})
}
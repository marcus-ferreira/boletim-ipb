import { preaching, notices, programming } from "./content.js";

const preachingSection = document.querySelector('.pastoral');
const noticesSection = document.querySelector('.avisos');
const programmingSection = document.querySelector('.programacao');

function readPreaching() {
	document.body.innerHTML = `
		<h1>${preaching.title}</h1>
		<p>${preaching.text}</p>
	`;
}

preachingSection.innerHTML = `
<h1>${preaching.title}</h1>
<p>${preaching.textSumary}</p>
<button onclick="readPreaching()">Continuar lendo</button>
`;

notices.forEach(notice => {
	noticesSection.innerHTML += `
	<section class="aviso">
		<h2>${notice.title}</h2>
		<p>${notice.text}</p>
	</section>
	`;
})


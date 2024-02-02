const inputOne = document.querySelector(".inputOne");
const inputTwo = document.querySelector(".inputTwo");
const firstNameHTML = document.querySelector(".nameOne");
const secondNameHTML = document.querySelector(".nameTwo");
const btnOne = document.querySelector(".btnOne");
const btnTwo = document.querySelector(".btnTwo");
const checkBtn = document.querySelector(".check");
const lettersHTML = document.querySelector(".letterEl");
const error= document.querySelector(".letters");
const flameHTML = document.querySelector(".flame");

let firstName;
let secondName;
let letters;

const flames = [
	"F - FRIENDS (˶ᵔ ᵕ ᵔ˶)",
	"L - LOVERS ⸜(｡˃ ᵕ ˂ )⸝♡",
	"A- AFFECTIONATE (❀❛ ֊ ❛„)♡",
	"M - MARRIED (˶ ˘ ³˘)ˆᵕ ˆ˶)",
	`E - ENEMIES (ง'̀-'́)ง`,
	"S - SOULMATES ଘ(੭˃ᴗ˂)੭♡",
];

btnOne.addEventListener("click", () => {
	firstName = inputOne.value;
	firstNameHTML.innerHTML = firstName[0].toUpperCase() + firstName.slice(1);
	inputOne.value = "";
});
btnTwo.addEventListener("click", () => {
	secondName = inputTwo.value;
	secondNameHTML.innerHTML = secondName[0].toUpperCase() + secondName.slice(1);
	inputTwo.value = "";
});

checkBtn.addEventListener("click", checkResult);

function checkResult() {
	try{
		let f = [...firstName.toLowerCase()];
		let s = [...secondName.toLowerCase()];
		
		letters = f
			.filter((letter) => !s.includes(letter))
			.concat(s.filter((letter) => !f.includes(letter)));
		const lettersLength = letters.length;
		if(lettersLength == 0){
			lettersHTML.innerHTML = 'None Left :)';
		}else{
			lettersHTML.innerHTML = letters.join("").toUpperCase();
		}
		
			const index = lettersLength % 6;
			flameHTML.textContent = flames[index];

			firstNameHTML.innerHTML = ''
			secondNameHTML.innerHTML = ''
			
	
	}catch{
		error.textContent = 'Oops! It seems something is missing ˙◠˙'
		flameHTML.textContent = '❀˖° RESULTS...❀˖°';
	}

	
	
}

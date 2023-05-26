const database = [
	{
		question:"Choose Traffic Light ?",
		a:'./img/traffic.jpg',
		b:'./img/mountain.jpg',
		c:'./img/ambulance.jpg',
		d:'./img/airport.jpg',
		correctanswer:'a'
	},
	{
		question:"Choose Mountain ?",
		a:'./img/ambulance.jpg',
		b:'./img/mountain.jpg',
		c:'./img/traffic.jpg',
		d:'./img/airport.jpg',
		correctanswer:'b'
	},
	{
		question:"Choose Ambulance Truck ?",
		a:'./img/ambulance.jpg',
		b:'./img/airport.jpg',
		c:'./img/traffic.jpg',
		d:'./img/mountain.jpg',
		correctanswer:'a'
	},
	{
		question:"Choose Airport ?",
		a:'./img/traffic.jpg',
		b:'./img/mountain.jpg',
		c:'./img/ambulance.jpg',
		d:'./img/airport.jpg',
		correctanswer:'d'
	}
];

// console.log(database);

const getcontainer = document.querySelector('.container');
const getquestion = document.querySelector('.question');
const getanswers = document.querySelectorAll('.answer');
// console.log(getcontainer);
const geta_img = document.getElementById('a_img');
const getb_img = document.getElementById('b_img');
const getc_img = document.getElementById('c_img');
const getd_img = document.getElementById('d_img');
// console.log(getb_img);

const getbtn = document.querySelector('.btn');

let currentidx = 0;
let score = 0;

startquestion();

function startquestion(){

	removeselects();

	const currentqes = database[currentidx];

	getquestion.textContent = currentqes.question;
	geta_img.src = currentqes.a;
	getb_img.src = currentqes.b;
	getc_img.src = currentqes.c;
	getd_img.src = currentqes.d;

};

function getsingleanswer(){

	let answer;

	// console.log(answer);

	// console.log(getanswers);

	getanswers.forEach(function(getanswer){

		// console.log(getanswer);
		// console.log(getanswer.id);

		if(getanswer.checked){

			answer = getanswer.id;

		}		

	});

	return answer;

	// console.log(answer);

};

// getsingleanswer();

getbtn.addEventListener('click',function(){
	// console.log('i am working');

	const answer = getsingleanswer();

	// console.log(answer);

	if(answer){
		// console.log(answer);

		if(answer === database[currentidx].correctanswer){
			score++;
		}


		currentidx++;
		// console.log(currentidx);

		if(currentidx < database.length){
			startquestion();	//for next question
		}else{
			// console.log(score);

			// to show score

			getcontainer.innerHTML = `
				<h3>Total Score : ${score*25}</h3>
				<h4>Your answered correctly at ${score} / ${database.length} questions.</h4>
				<!-- <button type="button" class="btn" ondblclick="location.reload()">Click To Reload</button> -->
				<button type="button" class="btn" onclick="doubleclick()">Click To Reload</button>
			`;
			
		}

	}else{

		// if user no choose answer

		window.alert('Choose One Answer!');
	}

});

function removeselects(){

	// deselect for next question

	getanswers.forEach(function(getanswer){
		
		return getanswer.checked = false;

	});
}


// for manual dblclick

let clicktimes = 0;

function doubleclick(){

	if(clicktimes === 0){

		// clicktimes = new Date().getTime();
		clicktimes = Date.now();	//get ms for first click

		// console.log(clicktimes);

	}else{

		// if((new Date().getTime() - clicktimes) < 1000){
			if((Date.now() - clicktimes) < 800){

			// console.log('hi');

			location.reload();

			clicktimes = 0;

		}else{
			// if sec click is over 800ms			
			clicktimes = Date.now();
		}

	}

};
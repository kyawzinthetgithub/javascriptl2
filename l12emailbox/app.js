const getemail = document.getElementById('emails');
const gettextarea = document.querySelector('textarea');
const getbtn = document.querySelector('.btn');
const getemcontainer = document.querySelector('.email-container');

getemail.focus();

getemail.addEventListener('keyup',function(e){
	// createemaillist(e.target);
	// createemaillist(e.target.value);
	
	// createemaillist(this);
	createemaillist(this.value);
});

function createemaillist(inputtext){
	// console.log(inputtext);

	// split bt (',') return with array
	// const eitems = inputtext.split(',');
	// console.log(eitems);

	// remove empty, empty(space)
	// const eitems = inputtext.split(',').filter(rmitems=>rmitems.trim() !== '');
	// console.log(eitems);

	// remove space/empty
	const emitems = inputtext.split(',').filter(reempty=>reempty.trim() !== '').map(reempty=>reempty.trim());
	// console.log(emitems);

	getemcontainer.innerHTML = '';

	emitems.forEach(function(emitem){
		// console.log(emitem);

		const setnewspan = document.createElement('span');
		setnewspan.textContent = emitem;
		setnewspan.classList.add('email-item');
		// console.log(setnewspan);

		getemcontainer.appendChild(setnewspan);

	});
};

getbtn.addEventListener('click',function(e){

	sendemail();

	e.preventDefault();
});

function sendemail(){
	const gettxtvalue = gettextarea.value;
	const getaddersses = document.querySelectorAll('.email-item');

	var persons = [];

	if(getaddersses.length > 0 && gettxtvalue){
		getaddersses.forEach(function(getadderss){
			persons.push({
				email:getadderss.textContent,
				message:gettxtvalue
			});
		});
		console.log(persons);
	}else{
		window.alert('Enter Message');
		gettextarea.focus();
	};
};

// 7EB
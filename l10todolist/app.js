var getform = document.getElementById('form');
var gettextbox = document.getElementById('textbox');
var getul = document.getElementById('list-group');

getform.addEventListener('submit',function(e){
	addnew();
	e.preventDefault();
});

function addnew(todo){
	var todotext = gettextbox.value;

	if(todo){
		todotext = todo.text; //get localstorage text
	};

	if(todotext){
		const li = document.createElement('li');
		// li.innerText = todotext;
		// li.innerHTML = todotext;
		// li.textContent = todotext;


		if(todo && todo.done){
			li.classList.add('done');
		}


		li.appendChild(document.createTextNode(todotext));
		// console.log(li);
		getul.appendChild(li);
		gettextbox.value = '';

		updatelocalstorage();

			// left click
		li.addEventListener('click',function(){
			li.classList.toggle('done');
			updatelocalstorage();
		});

			// right click
		li.addEventListener('contextmenu',function(){
			li.remove();
			updatelocalstorage();
		});

	}else{
		window.alert('Please fill text to add todolist');
	}

};

function updatelocalstorage(){
	var getalllis = document.querySelectorAll('li');

	const todos = [];

	getalllis.forEach(function(getallli){
		todos.push({
			text:getallli.textContent,
			done:getallli.classList.contains('done')
		});
	});

	localStorage.setItem('todos',JSON.stringify(todos));
	// console.log(todos);
};

var getlstodos = JSON.parse(localStorage.getItem('todos'));
// console.log(getlstodos);

if(getlstodos){
	getlstodos.forEach(function(getlstodo){
		// console.log(getlstodo.text);
		addnew(getlstodo);
	});
};
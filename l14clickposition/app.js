const getmap = document.querySelector('.map-container');

var getsmallcolor = document.getElementById('smallcolor'),
	getmediumcolor = document.getElementById('mediumcolor'),
	getlargecolor = document.getElementById('largecolor');

var circleidx = 0;

getmap.addEventListener('click',function(e){

	circleidx++;

	// console.log(e.target);

	if(e.target.classList.contains('map-container')){

		const cx = e.clientX;
		const cy = e.clientY;

		// console.log(cx,cy);

		const mapleft = e.target.offsetLeft;
		const maptop = e.target.offsetTop;

		// console.log(mapleft,maptop);

		const currx = cx-mapleft;
		const curry = cy-maptop;

		// console.log(currx,curry);

		const circle = document.createElement('span');
		circle.classList.add('circle');
		circle.id = circleidx;

		// console.log(circle);

		circle.style.left = `${currx}px`
		circle.style.top = `${curry}px`;


		// circle.style.setProperty("--small-color",'darkblue');
		// circle.style.setProperty("--medium-color",'steelblue');
		// circle.style.setProperty("--large-color",'skyblue');


		// console.log(getsmallcolor.value);
		// console.log(getsmallcolor.selectedIndex);

		if(getsmallcolor.selectedIndex > 0 && getmediumcolor.selectedIndex > 0 && getlargecolor.selectedIndex >0){

			circle.style.setProperty("--small-color",getsmallcolor.value);
			circle.style.setProperty("--medium-color",getmediumcolor.value);
			circle.style.setProperty("--large-color",getlargecolor.value);

		}



		// e.target.appendChild(circle);
		this.appendChild(circle);

		// console.log(e.target);

	};

	removepointer(e);

});

function removepointer(e){

	// console.log(e.target.id);

	if(e.target.id > 0){
		e.target.remove();
	}

};
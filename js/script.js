// typewriter effect
typewriterPhrases = ["developer.", "designer.", "student.", "photographer.", "creator."]
wordIndex = 0
wait = 1500
isDeleting = false
sub = ''

function typeWriter() {
	const word = typewriterPhrases[wordIndex % typewriterPhrases.length]
	sub = isDeleting ? word.substring(0, sub.length - 1) : word.substring(0, sub.length + 1)
	document.getElementById("typewriter").innerHTML = `i'm a <span class="bold">${sub}</span>`
	
	let typeSpeed = 200
	if (isDeleting) {
		typeSpeed /= 2
	}

	if (!isDeleting && sub == word) {
		typeSpeed = wait
		isDeleting = true
	} else if (isDeleting && sub == '') {
		isDeleting = false
		wordIndex++
		typeSpeed = 500
	}
	
	setTimeout(() => typeWriter(), typeSpeed)
}
typeWriter()

// populating the modal
modalData = {
	'0': {
		'title': 'Tableau Software',
		'role': "Software Engineering Intern",
		'dates': 'June 2021 - September 2021',
		'description': "Coming Soon.",
		'tools': '',
	},
	'1': {
		'title': 'Facebook',
		'role': 'Software Engineering Intern',
		'dates': 'January 2021 - March 2021',
		'description': "Coding away @ Instagram Stories!",
		'tools': '',
	},
	'2': {
		'title': 'Weibel Lab',
		'role': 'HCI Researcher',
		'dates': 'January 2021 - Present',
		'description': "Coming Soon.",
	},
	'3': {
		'title': 'Viasat Inc.',
		'role': 'Software Engineering Intern',
		'dates': 'June 2020 - September 2020',
		'description': 'I redesigned the UI of a satellite coverage builder tool to streamline the user experience. In addition, I extended coverage planning tools on a geospatial platform to support 3D satellite visualizations and integrated search and 2D visualization from a suite of satellite databases and NodeJS API.',
		'tools': 'Vue.js, HTML5, Bootstrap, CSS3, Javascript, CesiumJS, OpenLayers, Axios'
	},
	'4': {
		'title': 'Almounds',
		'role': 'Backend Lead',
		'dates': 'March 2020 - June 2020',
		'description': "Almounds was built for management of almond loads at processing plants owned by Central California Almond Growers Association. As backend lead, designed the PostgreSQL database and implemented a REST API using Python with Flask. In addition, I aided in development of an algorithm which chooses field locations for load drop off while optimizing for minimum use of plant resources. A summary of our project is available <a href='https://www.youtube.com/watch?v=66Q7XpXZKKM&feature=youtu.be' target='_blank'>here</a>.",
		'tools': 'Python3, Python-Flask, SQLAlchemy, PostgreSQL'
	},
	'5': {
		'title': 'Autograder',
		'role': 'Lead Full-Stack Developer',
		'dates': 'September 2018 - Present',
		'description': 'I am managing and developing on a team revamping a legacy web application used by 3000+ UCSD CSE students and professors to manage tutor queues and assignments, <a href="https://autograder.ucsd.edu/" target="_blank">autograder.ucsd.edu.</a> I am leading frontend development of a codebase rewrite to provide an easily maintainable and improved UX.',
		'tools': 'Python3, Python-Flask, PostgreSQL, React, Javascript, Axios'
	},
	'6': {
		'title': 'Early Research Scholars Program (ERSP)',
		'role': 'Undergraduate Researcher',
		'dates': 'September 2019 - June 2020',
		'description': 'Developed machine learning models to predict the starting timestamp of a person’s next workout based on their previous workouts to help people better analyze their workout progress. We utilized workout data of 100K users scraped from the fitness app EndoMondo. Feel free to check out our <a href="https://drive.google.com/file/d/1dqqPLysM8Km7VlotUhOBTC1FaaXF8u0w/view?usp=sharing" target="_blank">Project Poster,</a> <a href="https://docs.google.com/document/d/1rWphvJWOu_T1Kv5Tji93toss2nUyF1dVf8vi8LHpXQo/edit?usp=sharing" target="_blank">State of Research,</a> and <a href="https://docs.google.com/document/d/10VajC25NAa3OQRM1oqoX65C7e1EpBaUkP0zC1yo0i_c/edit?usp=sharing" target="_blank">User Guide/Source Code</a> for more background on our work.',
		'tools': 'Python, Keras, Tensorflow, Jupyter, numpy, pandas, scikit-learn'
	},
	'7': {
		'title': 'UCSD Computer Science and Engineering',
		'role': 'Undergraduate Tutor',
		'dates': 'January 2019 - Present', 
		'description': 'As a tutor, I host lab hours to guide students in improving code correctness, efficiency of algorithm implementation, and performance. In addition, I lead exam review sessions and develop course material such as exams, homework assignments, and labs.<br/><br/>I have tutored for CSE 8A (Introduction to Java & OOP), CSE 12 (Data Structures & Object Oriented Design), CSE 15L (Software Tools & Techniques), and CSE 110 (Software Engineering) with Gary Gillespie and CSE 100 (Advanced Data Structures) with Joe Politz and Niema Moshiri.'
	}
}

var cards = document.querySelectorAll(".card");

for (let i = 0; i < cards.length; i++) {
	cards[i].addEventListener("click", function fillContent(evt) {
		contentBabyContent = modalData[this.id]
		document.getElementsByClassName("modal-title")[0].innerHTML = contentBabyContent.title;
		document.getElementsByClassName('modal-role')[0].innerHTML = contentBabyContent.role;
		document.getElementsByClassName('modal-dates')[0].innerHTML = contentBabyContent.dates;
		document.getElementsByClassName('modal-description')[0].innerHTML = contentBabyContent.description;

		if ('tools' in contentBabyContent) {
			document.getElementsByClassName('modal-tools')[0].innerHTML = contentBabyContent.tools;
		} else {
			document.getElementsByClassName('modal-tools')[0].innerHTML = '';	
		}
	});
}
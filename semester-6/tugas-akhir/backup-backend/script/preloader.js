const preloader = document.querySelector('.preloader');

console.log(preloader)

setTimeout(()=> {
	preloader.classList.add('hide-preloader')
}, 300)

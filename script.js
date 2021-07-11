
console.log('Its working')

let theme = localStorage.getItem('theme')

if (theme == null) {
	setTheme('light')
} else {
	setTheme(theme)
}

let themeDots = document.getElementsByClassName('theme-dot')


for (var i = 0; themeDots.length > i; i++) {
	themeDots[i].addEventListener('click', function () {
		let mode = this.dataset.mode
		console.log('Option clicked:', mode)
		setTheme(mode)
	})
}
const $ = s => document.querySelectorAll(s);
const on = (ev, el, cb) =>
	el.addEventListener(ev, e => cb(e, el));
$('a').forEach((el) =>
	on('click', el, e => e.preventDefault()));

document.addEventListener('DOMContentLoaded', () => {
	const toTop = document.querySelector('#toTop')

	window.addEventListener('scroll', controlScroll)

	function controlScroll() {
		const st = document.body.scrollTop || document.documentElement.scrollTop
		const display = toTop.style.display
		const cl = toTop.classList
		if (st > 300) {
			toTop.style.display = 'block'
			cl.remove('hide')
			cl.add('show')
			setTimeout(() => {cl.add('rotate')}, 2100)
	  } else {
			if (display === 'block') {
				cl.remove('show')
				cl.add('hide')
				setTimeout(() => {
					cl.remove('rotate')
					toTop.style.display = 'none'
				}, 2000)
			}
	  }
	}

	toTop.addEventListener('click', () => {
		document.body.scrollTop = 0
		document.documentElement.scrollTop = 0
	})

	const ej01 = (str = 'javascript') => str.charAt(0).toUpperCase().concat(str.slice(1))
	const ej02 = (str = 'javascript') => str.slice(0, str.length - 1).concat(str.charAt(str.length - 1).toUpperCase())
	const ej03 = (arr = ['foo', 'bar', 'baz', 'qux', 'origin']) => arr[arr.indexOf('baz')]
	const ej04 = (arr = ['foo', 'bar', 'baz', 'qux', 'origin']) => {
		arr.length = 0
		return arr
	}
	const ej05 = (str = 'origin') => str.split('').map(char => (!['a', 'e', 'i', 'o', 'u'].includes(char) ? char : '')).join('')

	document.addEventListener('click', e => {
		const { target: { tagName, id } } = e
		if (tagName === 'BUTTON') {
			switch (id) {
				case 'ej01':
					return alert(ej01())
				case 'ej02':
					return alert(ej02())
				case 'ej03':
					return alert(ej03())
				case 'ej04':
					return alert(ej04())
				case 'ej05':
					return alert(ej05())
				default:
					console.log('ELEGIR EJERCICIO')
			}
		}
	})

})

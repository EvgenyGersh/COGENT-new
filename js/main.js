document.addEventListener('DOMContentLoaded', () => {
	function inpuiLink() {
		;[...document.querySelectorAll('input')].forEach((s, i, arr) => {
			console.log(arr[i].checked)
			s.addEventListener('input', () => {
				console.log()
				window.location.href = s.value
			})
		})
	}
	inpuiLink()
	// document.querySelector('button').addEventListener('click', () => {
	// 	window.location.href = s.value
	// })
})

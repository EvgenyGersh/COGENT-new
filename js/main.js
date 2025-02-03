document.addEventListener('DOMContentLoaded', () => {
	function inputLink() {
		const inputs = document.querySelectorAll('input')
		console.log(inputs, 'inputs')

		let checkedInputs = []

		inputs.forEach(item => {
			if (!item.checked) {
				return
			}

			checkedInputs.push(item.value)
		})

		if (checkedInputs.length) {
			window.location.href = checkedInputs[0]
		}
	}

	document.querySelector('.continue_btn').addEventListener('click', inputLink)
})

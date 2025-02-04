document.addEventListener('DOMContentLoaded', () => {
	const radioLabels = document.querySelectorAll('.input_wrap')

	const button = document.querySelector('.form_home .button_wrap button ')
	radioLabels.forEach(label => {
		label.addEventListener('click', () => {
			radioLabels.forEach(lbl => lbl.classList.remove('input_checked'))
			button.classList.remove('button_active')

			// Добавляем рамку выбранному
			label.classList.add('input_checked')

			// Меняем цвет кнопки

			button.classList.add('button_active')
		})
	})

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

	function adjustFooter() {
		const footer = document.querySelector('.mobile_header')
		footer.style.bottom = window.innerHeight < screen.height ? '60px' : '0'
	}

	window.addEventListener('resize', adjustFooter)
	adjustFooter()
})

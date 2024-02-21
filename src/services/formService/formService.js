export const formService = {
	initForm: (submit) => {
		const form = document.getElementById('weatherForm');
		form.addEventListener('submit', (e) => {
			e.preventDefault();
			const formData = new FormData(form);
			submit(formData.get('city'));
		})
	}
}

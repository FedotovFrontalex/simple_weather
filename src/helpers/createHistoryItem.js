import {controller} from '../controller/controller.js';

export const createHistoryItem = (value) => {
	const liElem = document.createElement('li');
	const button = document.createElement('button');
	button.innerHTML = value;
	button.addEventListener('click', () => {
		controller.inputCityHandler(value)
	})

	liElem.appendChild(button);
	return liElem;
}

'use strict';

// Modal for order contacts
const buyButtons = document.querySelectorAll('.buy-button');

for(let buyButton of buyButtons) {
	buyButton.addEventListener('click', () => {
		const wrapper = document.createElement('DIV');
		wrapper.classList.add('modal-wrapper');

		const message = document.createElement('DIV');
		message.classList.add('product-info');

		const header = document.createElement('H3');
		header.classList.add('header');
		header.innerHTML = 'Контакты для заказа';
	
		const p = document.createElement('P');
		p.classList.add('message');
		p.innerHTML = 'Контакты для оформления заказа: Вконтакте: <a href="https://www.vk.com/ntitl" target="_blank" tabIndex="1">vk.com/ntitl</a> (писать в сообщения группы); Телеграм: @ichtis';
		const a = p.querySelector('a[href="https://www.vk.com/ntitl"]');
		a.focus();
		a.onblur = () => {
			a.focus();
		}

		const delButt = document.createElement('IMG');
		delButt.src = '../mutualImg/delButt.svg';
		delButt.classList.add('delete-button');
		delButt.addEventListener('click', () => {
			document.body.style.overflow = '';
			wrapper.remove();
		});
		
		message.append(header, p, delButt);
		wrapper.append(message);

		document.body.append(wrapper);
		document.body.style.overflow = 'hidden';
		
	});
}

// additions
const additionButts = document.querySelectorAll('.addition-butt');

for(let additionButt of additionButts) {
	additionButt.addEventListener('click', () => additionChange(additionButt));
}

function additionChange(additionButt) {
	const additionInput = document.getElementById( additionButt.getAttribute('for') );
	const priceElem = additionButt.parentElement.parentElement.querySelector('.price');
	let price = parseInt(priceElem.textContent);

	priceElem.textContent = priceElem.textContent.replace(price, '');

	if(additionInput.checked) {
		price -= +additionButt.dataset.addPrice;
	} else {
		price += +additionButt.dataset.addPrice;
	}
	
	priceElem.textContent = priceElem.textContent.replace('', price);
}
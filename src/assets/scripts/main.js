/**
 * Dynamit Code Day Punk API
 */

// Punk API endpoint
const API_ENDPOINT = 'https://api.punkapi.com/v2/beers';
const MAIN = document.getElementById('main');
const BUTTON = document.getElementById('load-btn');
const BEERS = document.getElementById('beers');
const LOADING = document.getElementById('loading');

function buildDOM(array) {
	return array.map((item) => `
			<div class="item">
				<div class="image">
					<img src="${item.image_url}" alt="${item.name}" height="145px" width="145px">
				</div>
				<div class="name">${item.name}</div>
				<div class="abv">${item.abv}%</div>
			</div>
		`);
}

function applyDOM(domArray) {
	LOADING.classList.add('hidden');

	BEERS.innerHTML = domArray.join('\n');
	BEERS.classList.remove('hidden');
}

function processBeers(json) {
	if (json && json.length) {
		MAIN.classList.remove('vertical-center');

		const dom = buildDOM(json);

		applyDOM(dom);
	} else {
		MAIN.classList.add('vertical-center');
	}
}

function fetchBeers() {
	BUTTON.classList.add('hidden');
	LOADING.classList.remove('hidden');

	const req = fetch(`${API_ENDPOINT}?per_page=80`, {
		method: 'GET',
		mode: 'cors',
		headers: {
			'Content-Type': 'application/json',
		},
		redirect: 'follow',
		referrer: 'no-referrer',
	});

	req
		.then((res) => res.json())
		.then(processBeers)
		.catch((err) => {
			console.error(err);

			BUTTON.classList.remove('hidden');
			LOADING.classList.add('hidden');
			BEERS.classList.add('hidden');
		});
}

BUTTON.addEventListener('click', fetchBeers);

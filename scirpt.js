const timeElement = document.getElementById("time");
const dateElement = document.getElementById("date");

updateDateTime();

setInterval(updateDateTime, 60000);

function updateDateTime() {
	const currentdate = new Date();
	timeElement.textContent = getTime(currentdate);
	dateElement.textContent = getDate(currentdate);
}

function getTime(date) {
	return date.toLocaleTimeString("en-GB", {
		timeZone: "Asia/Kolkata",
		hour: '2-digit',
		minute: '2-digit',
		hour12: false
	})
}

function getDate(date) {
	return date.toLocaleDateString("en-GB", {
		timeZone: "Asia/Kolkata",
		day: '2-digit',
		month: '2-digit',
		year: 'numeric'
	})
}

const a = document.createElement('a');

const ggl = document.getElementById('ggl');
ggl.addEventListener('submit', function (e) {
	e.preventDefault();
	if (new FormData(this).get("q")) {
		this.submit();
		return;
	}

	a.setAttribute("href", "https://google.com");
	a.click();
})

const yt = document.getElementById('yt');
yt.addEventListener('submit', function (e) {
	e.preventDefault();

	if (new FormData(this).get("search_query")) {
		console.log("log");
		this.submit();
		return;
	}
	console.log("log2");

	a.setAttribute("href", "https://youtube.com");
	a.click();
})

const dck = document.getElementById('dck');
dck.addEventListener('submit', function (e) {
	e.preventDefault();
	if (new FormData(this).get("q")) {
		this.submit();
		return;
	}

	a.setAttribute("href", "https://duckduckgo.com");
	a.click();
})

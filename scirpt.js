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

const ggl = document.getElementById('ggl');

ggl.addEventListener('submit', function (e) {
	e.preventDefault();
	if (new FormData(this).get("q")) {
		this.submit();
	} else {
		window.location.href = "https://google.com";
	}
});

const yt = document.getElementById('yt');

yt.addEventListener('submit', function (e) {
	e.preventDefault();

	if (new FormData(this).get("search_query")) {
		this.submit();
	} else {
		window.location.href = "https://youtube.com";
	}
});

const dck = document.getElementById('dck');

dck.addEventListener('submit', function (e) {
	e.preventDefault();
	if (new FormData(this).get("q")) {
		this.submit();
	} else {
		window.location.href = "https://duckduckgo.com";
	}
});

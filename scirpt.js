const timeElement = document.getElementById("time");
const dateElement = document.getElementById("date");
updateUI(timeElement, dateElement);
setInterval(() => {
	updateUI(timeElement, dateElement);
}, 60000);

function getKolkataDateTime() {
	const currentdate = new Date();
	return [
		currentdate.toLocaleTimeString("en-US", {
			timeZone: "Asia/Kolkata",
			hour: '2-digit',
			minute: '2-digit',
			hour12: false
		}),
		currentdate.toLocaleDateString("en-US", {
			timeZone: "Asia/Kolkata",
			year: 'numeric',
			month: '2-digit',
			day: '2-digit'
		})
	]
}

function updateUI(timeElement, dateElement) {
	const [time, date] = getKolkataDateTime();
	timeElement.textContent = time;
	dateElement.textContent = date;
}

const a = document.createElement('a');

const ggl = document.getElementById('ggl');
ggl.addEventListener('submit', function (e) {
	e.preventDefault();
	if (new FormData(this).get("q")) {
		this.submit();
		return;
	}

	a.href = "https://google.com"
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

	a.href = "https://youtube.com"
	a.click();
})

const dck = document.getElementById('dck');
dck.addEventListener('submit', function (e) {
	e.preventDefault();
	if (new FormData(this).get("q")) {
		this.submit();
		return;
	}

	a.href = "https://duckduckgo.com"
	a.click();
})

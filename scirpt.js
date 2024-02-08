const dt = document.getElementById("dt");
dt.textContent = getKolkataTime();
setInterval(() => {
	dt.textContent = getKolkataTime();
}, 1000);

function getKolkataTime() {
	const date = new Date(Date.now());
	const kolkataTime = date.toLocaleString("en-US", { timeZone: "Asia/Kolkata" });
	return kolkataTime;
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
ggl.addEventListener('submit', function (e) {
	e.preventDefault();
	if (new FormData(this).get("search_query")) {
		this.submit();
		return;
	}

	a.href = "https://youtube.com"
	a.click();
})

const dck = document.getElementById('dck');
ggl.addEventListener('submit', function (e) {
	e.preventDefault();
	if (new FormData(this).get("q")) {
		this.submit();
		return;
	}

	a.href = "https://duckduckgo.com"
	a.click();
})

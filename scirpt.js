const timeElement = document.getElementById("time");
const dateElement = document.getElementById("date");

const currentdatetime = new Date();
timeElement.textContent = getTime(currentdatetime);
dateElement.textContent = getDate(currentdatetime);

setInterval(() => {
	const currentdatetime = new Date();
	const time = getTime(currentdatetime);
	timeElement.textContent = time;
	if (
		time[0] === '0' &&
		time[1] === '0' &&
		time[3] === '0' &&
		time[4] === '0'
	) {
		dateElement.textContent = getDate(currentdatetime);
	}
}, 60000);

handleFormSubmit('ggl', 'https://google.com');
handleFormSubmit('yt', 'https://youtube.com');
handleFormSubmit('dck', 'https://duckduckgo.com');

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

function handleFormSubmit(formId, endpoint) {
	document.getElementById(formId).addEventListener('submit', function (e) {
		e.preventDefault();
		this.getElementsByTagName('input')[0].value
			? this.submit()
			: window.location.href = endpoint;
	});
}

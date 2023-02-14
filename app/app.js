/////////////////////////////////////////////
////////////////app//////////////////////////
const divInstall = document.getElementById("installContainer");
const butInstall = document.getElementById("butInstall");
const installInstructions = document.getElementById("installInstructions");

window.addEventListener("DOMContentLoaded", async (event) => {
	if ("BeforeInstallPromptEvent" in window) {
		/* Put code here */
		installInstructions.style.display = "none";
		// Prevent the mini-infobar from appearing on mobile.
	} else {
		console.log("Unsupported");
		/*divInstall.innerHTML = "not supported";
		divInstall.classList.toggle("hidden", false);*/
		installInstructions.style.display = "block";
	}
});

window.addEventListener("beforeinstallprompt", (e) => {
	e.preventDefault();
	console.log("👍", "beforeinstallprompt", e);
	// Stash the event so it can be triggered later.
	window.deferredPrompt = e;
	// Remove the 'hidden' class from the install button container.
	divInstall.classList.toggle("hidden", false);
});

butInstall.addEventListener("click", async () => {
	console.log("👍", "butInstall-clicked");
	const promptEvent = window.deferredPrompt;
	if (!promptEvent) {
		// The deferred prompt isn't available.
		return;
	}
	// Show the install prompt.
	promptEvent.prompt();
	// Log the result
	const result = await promptEvent.userChoice;
	console.log("👍", "userChoice", result);
	// Reset the deferred prompt variable, since
	// prompt() can only be called once.
	window.deferredPrompt = null;
	// Hide the install button.
	divInstall.classList.toggle("hidden", true);
});

/* Only register a service worker if it's supported */
if ("serviceWorker" in navigator) {
	navigator.serviceWorker.register("/service-worker.js");
}

/**
 * Warn the page must be served over HTTPS
 * The `beforeinstallprompt` event won't fire if the page is served over HTTP.
 * Installability requires a service worker with a fetch event handler, and
 * if the page isn't served over HTTPS, the service worker won't load.
 */
if (window.location.protocol === "http:") {
	const requireHTTPS = document.getElementById("requireHTTPS");
	const link = requireHTTPS.querySelector("a");
	link.href = window.location.href.replace("http://", "https://");
	requireHTTPS.classList.remove("hidden");
}

////////////////////main////////////////////////

/*var datali;
	fetch(
		"https://script.google.com/macros/s/AKfycbzVrMJm5tgxBtriQ-F2x_E_KFUpyd4Ms8pR9OZeXopvptLFYQDcrNQyl9SB9tNJw19m/exec",
		{
			method: "GET"
		}
	)
		.then(function (response) {
			console.log(response.status);
			return response.text();
		})
		.then(function (data) {
			datali = data;
		})
		*/
const url =
	"https://script.google.com/macros/s/AKfycbzVrMJm5tgxBtriQ-F2x_E_KFUpyd4Ms8pR9OZeXopvptLFYQDcrNQyl9SB9tNJw19m/exec";

var worldmes;
var importdata;

function GASpost(url) {
	$.post(url, worldmes, function (result) {
		//console.log(result);
		report(JSON.parse(result));
		importdata = JSON.parse(result);
	});
}

function foo(url) {
	$.get(url, function (data) {
		loadin(JSON.parse(data));
	});
}
/*var data = [
	[
		"Food",
		[
			["Beef"],
			["Pork"],
			["Chicken"],
			["Lamb"],
			["Fish(Farmed)"],
			["Fish(Wild)"],
			["Shrimp"],
			["Eggs"],
			["Nuts"],
			["Vegetables"],
			["Fruits"],
			["Rice"],
			["Potatoes"],
			["Pasta"],
			["Pizza"],
			["FrenchFrizes"],
			["Bread"],
			["Tea"],
			["DrinkingWater"],
			["Soda"],
			["Coffee"],
			["Milk"],
			["Beer"],
			["Chocolate"],
			["Icecream"],
			["Yogurt"],
			["Cheese"],
			["PotatoChips"],
			[""]
		]
	],
	[
		"Transportation",
		[
			["Car(Diesel)"],
			["Car(Gasoline)"],
			["Car(hybrid)"],
			["Car(Electric)"],
			["Motorbike"],
			["Bus"],
			["LightRail"],
			["Tram"],
			["Ferry"],
			["Flight"],
			[""]
		]
	],
	["Utilities", [["Electricity"], ["Water"], ["Gas"], [""]]]
];*/
function loadin(data) {
	for (let a = 0; a < data.length; a++) {
		var type = data[a][0];
		var list = data[a][1];
		if (type === "Food") {
			var foods = document.querySelectorAll(".food");
			var foodsli;
			for (let fi = 0; fi < list.length - 1; fi++) {
				foodsli += '<option value="' + list[fi] + '">' + list[fi] + "</option>";
			}
			for (let f = 0; f < foods.length; f++) {
				foods[f].innerHTML = foodsli;
			}
		}
		if (type === "Transportation") {
			var trans = document.querySelectorAll(".trans");
			var transli;
			for (let ti = 0; ti < list.length - 1; ti++) {
				transli += '<option value="' + list[ti] + '">' + list[ti] + "</option>";
			}
			for (let t = 0; t < trans.length; t++) {
				trans[t].innerHTML = transli;
			}
		}
		if (type === "Utilities") {
			var utilis = document.querySelectorAll(".utilities");
			var utili;
			for (let ui = 0; ui < list.length - 1; ui++) {
				utili += '<option value="' + list[ui] + '">' + list[ui] + "</option>";
			}
			for (let u = 0; u < utilis.length; u++) {
				utilis[u].innerHTML = utili;
			}
		}
	}
}
foo(url);

$(".addMore1").click(function () {
	$(".row1:last").clone().appendTo(".wrapper1");
});

$(".addMore2").click(function () {
	$(".row2:last").clone().appendTo(".wrapper2");
});

$(".addMore3").click(function () {
	$(".row3:last").clone().appendTo(".wrapper3");
});

const form = document.querySelector("form");
function handleFormSubmit(event) {
	event.preventDefault();
	/*//console.log(event);
			//console.log(event.target);
const data = new FormData(event.target);
			
//console.log(JSON.stringify(data));
const formJSON = Object.fromEntries(data.entries());

const results = document.querySelector('.results pre');
results.innerText = JSON.stringify(formJSON, null, 2);*/
	var food = document.querySelectorAll(".food");
	var famount = document.querySelectorAll(".famount");
	var foodli = [];
	for (let i = 0; i < food.length; i++) {
		foodli.push({ type: food[i].value, amount: famount[i].value });
	}
	//console.log(JSON.stringify(foodli));

	var trans = document.querySelectorAll(".trans");
	var tamount = document.querySelectorAll(".tamount");
	var transli = [];
	for (let i = 0; i < trans.length; i++) {
		transli.push({ type: trans[i].value, amount: tamount[i].value });
	}
	//console.log(JSON.stringify(transli));

	var utilities = document.querySelectorAll(".utilities");
	var uamount = document.querySelectorAll(".uamount");
	var utili = [];
	for (let i = 0; i < utilities.length; i++) {
		utili.push({ type: utilities[i].value, amount: uamount[i].value });
	}
	//console.log(JSON.stringify(utili));

	var results = document.querySelector(".results");
	var list = { food: foodli, transportation: transli, utilities: utili };
	//results.innerText = JSON.stringify({ list: list });
	//results.style.display = "block";
	//postto(JSON.stringify({ list: list }));
	worldmes = JSON.stringify({ list: list });
	GASpost(url);
}

form.addEventListener("submit", handleFormSubmit);

google.load("visualization", { packages: ["corechart"] });
google.charts.load("current", { packages: ["corechart", "gauge"] });

function report(result) {
	var modal = document.getElementById("report");
	importdata = JSON.stringify(result);
	google.setOnLoadCallback(drawGauge);
	var total = document.getElementById("TOTAL");
	total.innerHTML += "Total Consumption: <br>" + result[0].totalsum;
	google.setOnLoadCallback(drawChart1);
	google.setOnLoadCallback(drawChart2);
	google.setOnLoadCallback(drawChart3);
	google.setOnLoadCallback(drawChart4);
	google.setOnLoadCallback(drawChart5);
	google.setOnLoadCallback(drawChart6);
	google.setOnLoadCallback(drawChart7);
	document.getElementById("rawresponse").innerHTML =
		"raw:<br>" + JSON.stringify(result);
	modal.style.display = "block";
}

function drawChart1() {
	var data = google.visualization.arrayToDataTable([
		["Types", "Amount"],
		["Food", importdata[1].food[0].sum],
		["Transport", importdata[1].transportation[0].sum],
		["Utilities", importdata[1].utilities[0].sum]
	]);

	var options = {
		title: "OVERVIEW",
		pieHole: 0.4,
		legend: {
			position: "left"
		},
		chartArea: {
			left: 0,
			top: "10%",
			width: "80%"
		}
	};

	var chart = new google.visualization.PieChart(
		document.getElementById("chart_div1")
	);
	chart.draw(data, options);
}

function drawChart2() {
	var data = [["Types", "Amount"]];
	for (let fl = 0; fl < importdata[1].food[1].length; fl++) {
		data.push([importdata[1].food[1][fl].item, importdata[1].food[1][fl].con]);
		//console.log(flist);
	}
	var data = google.visualization.arrayToDataTable(data);
	var options = {
		title: "Food",
		legend: {
			position: "left"
		},
		chartArea: {
			left: 0,
			top: "10%",
			width: "80%"
		}
	};

	var chart = new google.visualization.PieChart(
		document.getElementById("chart_div2")
	);
	chart.draw(data, options);
}

function drawChart3() {
	var data = [["Types", "Amount"]];
	for (let tl = 0; tl < importdata[1].transportation[1].length; tl++) {
		data.push([
			importdata[1].transportation[1][tl].item,
			importdata[1].transportation[1][tl].con
		]);
		//console.log(flist);
	}
	var data = google.visualization.arrayToDataTable(data);
	var options = {
		title: "Transport",
		legend: {
			position: "left"
		},
		chartArea: {
			left: 0,
			top: "10%",
			width: "80%"
		}
	};

	var chart = new google.visualization.PieChart(
		document.getElementById("chart_div3")
	);
	chart.draw(data, options);
}

function drawChart4() {
	var data = [["Types", "Amount"]];
	for (let ul = 0; ul < importdata[1].utilities[1].length; ul++) {
		data.push([
			importdata[1].utilities[1][ul].item,
			importdata[1].utilities[1][ul].con
		]);
		//console.log(flist);
	}
	var data = google.visualization.arrayToDataTable(data);
	var options = {
		title: "Utilities",
		legend: {
			position: "left"
		},
		chartArea: {
			left: 0,
			top: "10%",
			width: "80%"
		}
	};

	var chart = new google.visualization.PieChart(
		document.getElementById("chart_div4")
	);
	chart.draw(data, options);
}

function drawChart5() {
	var data = [["Food Types", "Carbon Footprint"]];
	for (let fl = 0; fl < importdata[1].food[1].length; fl++) {
		data.push([importdata[1].food[1][fl].item, importdata[1].food[1][fl].con]);
	}
	//console.log(data);
	var data = google.visualization.arrayToDataTable(data);

	var options = {
		title: "Food List",
		hAxis: { title: "Food Types" },
		vAxis: { title: "Carbon Footprint" }
	};

	var chart = new google.visualization.ColumnChart(
		document.getElementById("chart_div5")
	);
	chart.draw(data, options);
}

function drawChart6() {
	var data = [["Transport Types", "Carbon Footprint"]];
	for (let tl = 0; tl < importdata[1].transportation[1].length; tl++) {
		data.push([
			importdata[1].transportation[1][tl].item,
			importdata[1].transportation[1][tl].con
		]);
	}
	//console.log(data);
	var data = google.visualization.arrayToDataTable(data);

	var options = {
		title: "Transport List",
		hAxis: { title: "Transportation Types" },
		vAxis: { title: "Carbon Footprint" }
	};

	var chart = new google.visualization.ColumnChart(
		document.getElementById("chart_div6")
	);
	chart.draw(data, options);
}

function drawChart7() {
	var data = [["Utilities Types", "Carbon Footprint"]];
	for (let ul = 0; ul < importdata[1].utilities[1].length; ul++) {
		data.push([
			importdata[1].utilities[1][ul].item,
			importdata[1].utilities[1][ul].con
		]);
	}
	//console.log(data);
	var data = google.visualization.arrayToDataTable(data);

	var options = {
		title: "Utilities List",
		hAxis: { title: "Utilities Types" },
		vAxis: { title: "Carbon Footprint" }
	};

	var chart = new google.visualization.ColumnChart(
		document.getElementById("chart_div7")
	);
	chart.draw(data, options);
}
// Reminder: you need to put https://www.google.com/jsapi in the head of your document or as an external resource on codepen //

function drawGauge() {
	var total = importdata[0].totalsum;
	var grade = (1000 / (total / 100)) * 50;
	//console.log(grade);
	var data = google.visualization.arrayToDataTable([
		["Label", "Value"],
		["Grade", grade]
	]);

	var options = {
		greenFrom: 75,
		greenTo: 100,
		greenColor: "#61ff73",
		redFrom: 0,
		redTo: 20,
		redColor: "#ff0000",
		yellowFrom: 20,
		yellowTo: 75,
		yellowColor: "#ffc061",
		minorTicks: 5,
		majorTicks: ["0", "", "20", "", "40", "", "60", "", "80", "", "100"],
		max: 100
	};

	var chart = new google.visualization.Gauge(document.getElementById("Gauge"));

	chart.draw(data, options);
}

window.onresize = resize;

function resize() {
	drawGauge();
	drawChart1();
	drawChart2();
	drawChart3();
	drawChart4();
	drawChart5();
	drawChart6();
	drawChart7();
}

////////////////////////////////////////////////////////////////////////////
//////////////watermark removal///////////
const removeWatermark = () => {
	const ids = [];
	const iframes = document.body.querySelectorAll("iframe");
	for (const iframe of iframes) {
		if (iframe.id.startsWith("sb__open-sandbox")) ids.push(iframe.id);
	}
	for (const id of ids) {
		const node = document.createElement("div");
		node.style.setProperty("display", "none", "important");
		node.id = id;
		document.getElementById(id).remove();
		document.body.appendChild(node);
	}
};
setTimeout(removeWatermark, 500);
/*@codesandbox devs, sorry for removing your anti-phising watermark. Yet the "Open Sandbox" button floats right ontop of my UI, I have no other choice. Sorry UwU*/

///////////////////////////////////////////

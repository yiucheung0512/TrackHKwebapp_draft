var importdata = [
	{ totalsum: 1215029 },
	{
		food: [{ sum: 260040 }, [{ ref: 0, item: "Beef", value: 60, con: 260040 }]],
		transportation: [
			{ sum: 868175 },
			[{ ref: 0, item: "Car(Diesel)", value: 205, con: 868175 }]
		],
		utilities: [
			{ sum: 86814 },
			[{ ref: 0, item: "Electricity", value: 371, con: 86814 }]
		]
	}
];
document.getElementById("TOTAL").innerHTML = importdata[0].totalsum;
google.load("visualization", "1", { packages: ["corechart"] });
google.setOnLoadCallback(drawChart1);
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

google.setOnLoadCallback(drawChart2);
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

google.setOnLoadCallback(drawChart3);
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

google.setOnLoadCallback(drawChart4);
function drawChart4() {
	var data = [["Types", "Amount"]];
	for (let ul = 0; ul < importdata[1].transportation[1].length; ul++) {
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
			top: "10%",
			width: "80%"
		}
	};

	var chart = new google.visualization.PieChart(
		document.getElementById("chart_div4")
	);
	chart.draw(data, options);
}

google.setOnLoadCallback(drawChart5);
function drawChart5() {
	var data = [["Food Types", "Carbon Footprint"]];
	for (let fl = 0; fl < importdata[1].food[1].length; fl++) {
		data.push([importdata[1].food[1][fl].item, importdata[1].food[1][fl].con]);
	}
	console.log(data);
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

google.setOnLoadCallback(drawChart6);
function drawChart6() {
	var data = [["Transport Types", "Carbon Footprint"]];
	for (let tl = 0; tl < importdata[1].transportation[1].length; tl++) {
		data.push([
			importdata[1].transportation[1][tl].item,
			importdata[1].transportation[1][tl].con
		]);
	}
	console.log(data);
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

google.setOnLoadCallback(drawChart7);
function drawChart7() {
	var data = [["Utilities Types", "Carbon Footprint"]];
	for (let ul = 0; ul < importdata[1].utilities[1].length; ul++) {
		data.push([
			importdata[1].utilities[1][ul].item,
			importdata[1].utilities[1][ul].con
		]);
	}
	console.log(data);
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

$(window).resize(function () {
	drawChart1();
	drawChart2();
	drawChart3();
	drawChart4();
	drawChart5();
	drawChart6();
	drawChart7();
});

// Reminder: you need to put https://www.google.com/jsapi in the head of your document or as an external resource on codepen //

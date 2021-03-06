var yearActive = 2015,
	simContainer = document.querySelector('#simContainer'),
	yearInput = document.querySelector('#yearInput'),
	yearOutput = document.querySelector('#yearOutput'),
	dataPopulation = document.querySelector('#dataPopulation'),
	dataTotal = document.querySelector('#dataTotal'),
	dataTotalBar = document.querySelector('#dataTotalBar'),
	dataRenewable = document.querySelector('#dataRenewable'),
	dataRenewableBar = document.querySelector('#dataRenewableBar'),
	dataNew = document.querySelector('#dataNew'),
	dataExisting = document.querySelector('#dataExisting'),
	dataElectric = document.querySelector('#dataElectric'),
	dataMode = document.querySelector('#dataMode'),
	dataEnergy = document.querySelector('#dataEnergy'),
	dataCarbon = document.querySelector('#dataCarbon'),
	tooltipTrigger = document.querySelectorAll('.sim__tooltip-trigger');

function tooltip(){
	this.classList.toggle('js-active');
}

function tooltipListener(){
	for (i = 0; i < tooltipTrigger.length; i++){
		tooltipTrigger[i].addEventListener('click',tooltip);
	}
}

function inputMouseOver(){
	dataRenewableBar.style.willChange = "width,background";
	dataTotalBar.style.willChange = "width,background";
}

function inputMouseOut(){
	dataRenewableBar.style.willChange = "auto";
	dataTotalBar.style.willChange = "auto";
}

function yearChange(){
	yearActive = yearInput.value;
	yearOutput.textContent = yearActive;
	yearOutput.value = yearActive;
	
	// 2015
	if (yearActive === "2015") {
		simContainer.setAttribute("data-year","2015");
		dataPopulation.textContent = "626,193";
		dataTotal.textContent = "82";
		dataRenewable.textContent = "35%";
		dataTotalBar.style.width = 100 + "%";
		dataTotalBar.style.background = "#f44336";		
		dataRenewableBar.style.width = dataRenewable.textContent;
		dataRenewableBar.style.background = "#f44336";
		dataCarbon.textContent = "15%";
		dataNew.textContent = "0%";
		dataExisting.textContent = "2%";
		dataElectric.textContent = "1,000";
		dataMode.textContent = "50%";
		dataEnergy.textContent = "$1,270";
	} 
	
	// 2020
	else if (yearActive === "2020"){
		simContainer.setAttribute("data-year","2020");
		dataPopulation.textContent = "656,986";
		dataTotal.textContent = "75";
		dataRenewable.textContent = "40%";
		dataTotalBar.style.width = 100 - (12.5 * 1) + "%";
		dataTotalBar.style.background = "#ef5350";		
		dataRenewableBar.style.width = dataRenewable.textContent;
		dataRenewableBar.style.background = "#ef5350";
		dataCarbon.textContent = "25%";
		dataNew.textContent = "70%";
		dataExisting.textContent = "20%";
		dataElectric.textContent = "10,000";
		dataMode.textContent = "58%";
		dataEnergy.textContent = "$1,263";
	}
	
	// 2025
	else if (yearActive === "2025"){
		simContainer.setAttribute("data-year","2025");
		dataPopulation.textContent = "688,403";
		dataTotal.textContent = "69";
		dataRenewable.textContent = "45%";
		dataTotalBar.style.width = 100 - (12.5 * 2) + "%";
		dataTotalBar.style.background = "#e57373";		
		dataRenewableBar.style.width = dataRenewable.textContent;
		dataRenewableBar.style.background = "#e57373";
		dataCarbon.textContent = "30%";
		dataNew.textContent = "90%";
		dataExisting.textContent = "35%";
		dataElectric.textContent = "20,000";
		dataMode.textContent = "62%";
		dataEnergy.textContent = "$1,256";
	}
	
	// 2030
	else if (yearActive === "2030"){
		simContainer.setAttribute("data-year","2030");
		dataPopulation.textContent = "718,267";
		dataTotal.textContent = "66";
		dataRenewable.textContent = "50%";
		dataTotalBar.style.width = 100 - (12.5 * 3) + "%";
		dataTotalBar.style.background = "#af9a9a";		
		dataRenewableBar.style.width = dataRenewable.textContent;
		dataRenewableBar.style.background = "#af9a9a";
		dataCarbon.textContent = "35%";
		dataNew.textContent = "100%";
		dataExisting.textContent = "50%";
		dataElectric.textContent = "30,000";
		dataMode.textContent = "65%";
		dataEnergy.textContent = "$1,253";
	}
	
	// 2035
	else if (yearActive === "2035"){
		simContainer.setAttribute("data-year","2035");
		dataPopulation.textContent = "744,375";
		dataTotal.textContent = "63";
		dataRenewable.textContent = "55%";
		dataTotalBar.style.width = 100 - (12.5 * 4) + "%";
		dataTotalBar.style.background = "#9ec199";		
		dataRenewableBar.style.width = dataRenewable.textContent;
		dataRenewableBar.style.background = "#9ec199";
		dataCarbon.textContent = "45%";
		dataNew.textContent = "100%";
		dataExisting.textContent = "60%";
		dataElectric.textContent = "50,000";
		dataMode.textContent = "66%";
		dataEnergy.textContent = "$1,251";
	}
	
	// 2040
	else if (yearActive === "2040"){
		simContainer.setAttribute("data-year","2040");
		dataPopulation.textContent = "766,629";
		dataTotal.textContent = "61";
		dataRenewable.textContent = "60%";
		dataTotalBar.style.width = 100 - (12.5 * 5) + "%";
		dataTotalBar.style.background = "#81c784";		
		dataRenewableBar.style.width = dataRenewable.textContent;
		dataRenewableBar.style.background = "#81c784";
		dataCarbon.textContent = "50%";
		dataNew.textContent = "100%";
		dataExisting.textContent = "70%";
		dataElectric.textContent = "80,000";
		dataMode.textContent = "67%";
		dataEnergy.textContent = "$1,248";
	}

	// 2045
	else if (yearActive === "2045"){
		simContainer.setAttribute("data-year","2045");
		dataPopulation.textContent = "786,975";
		dataTotal.textContent = "58";
		dataRenewable.textContent = "80%";
		dataTotalBar.style.width = 100 - (12.5 * 6) + "%";
		dataTotalBar.style.background = "#66bb6a";		
		dataRenewableBar.style.width = dataRenewable.textContent;
		dataRenewableBar.style.background = "#66bb6a";
		dataCarbon.textContent = "60%";
		dataNew.textContent = "100%";
		dataExisting.textContent = "80%";
		dataElectric.textContent = "100,000";
		dataMode.textContent = "68%";
		dataEnergy.textContent = "$1,246";
	}

	// 2050
	else if (yearActive === "2050"){
		simContainer.setAttribute("data-year","2050");
		dataPopulation.textContent = "807,861";
		dataTotal.textContent = "56";
		dataRenewable.textContent = "100%";
		dataTotalBar.style.width = 100 - (12.5 * 7) + "%";
		dataTotalBar.style.background = "#379a28";		
		dataRenewableBar.style.width = dataRenewable.textContent;
		dataRenewableBar.style.background = "#379a28";
		dataCarbon.textContent = "80%";
		dataNew.textContent = "100%";
		dataExisting.textContent = "100%";
		dataElectric.textContent = "130,000";
		dataMode.textContent = "70%";
		dataEnergy.textContent = "$1,216";
	} else {
		return false;
	}
}

// event listeners
yearInput.addEventListener('mouseover',inputMouseOver);
yearInput.addEventListener('mouseout',inputMouseOut);
tooltipListener();
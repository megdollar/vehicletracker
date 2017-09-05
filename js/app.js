// This data will be injected into the index.html view

var data =[
    {
      rule: "Van Speeding",
      status: "Active",
      region: "All",
      owner: "Michelle Jones",
      date: "06/12/2016"
    },
    {
      rule: "Van Excessive Idle",
      status: "Active",
      region: "All",
      owner: "Michelle Jones",
      date: "06/12/2016"
    },
    {
      rule: "Dump Truck Speeding SE",
      status: "Active",
      region: "Southeast",
      owner: "John James",
      date: "02/24/2016"
    },
    {
      rule: "Dump Truck Quick Acceleration",
      status: "Inactive",
      region: "All",
      owner: "Roger Martin",
      date: "02/25/2016"
    },
    {
      rule: "Dump Truck Speeding NE",
      status: "Active",
      region: "All",
      owner: "John James",
      date: "06/12/2016"
    },
    {
      rule: "Dump Truck Sudden Stop",
      status: "Active",
      region: "Southeast",
      owner: "John James",
      date: "02/24/2016"
    },
    {
      rule: "Vehicle Leave Southeast",
      status: "Inactive",
      region: "Southeast",
      owner: "Roger Martin",
      date: "08/17/2016"
    },
    {
      rule: "Vehicle Leave Northeast",
      status: "Inactive",
      region: "Northeast",
      owner: "Roger Martin",
      date: "08/17/2016"
    },
    {
      rule: "Vehicle Leave Midwest",
      status: "Inactive",
      region: "Midwest",
      owner: "Roger Martin",
      date: "08/17/2016"
    },
    {
      rule: "Dump Truck Engine Off",
      status: "Active",
      region: "All",
      owner: "John James",
      date: "08/12/2016"
    }
  ];

 var ViewModel = function() {

 	var table = document.getElementById("tbody");
	var tbody = '<tbody>';

    for(var i = 0;i < data.length; i++){
        tbody += '<tr>';
        tbody += '<td data-label="Vehicle Rule"><div class="slds-truncate">' + data[i].rule + '</div></td>';
        tbody += '<td data-label="Status"><div class="slds-truncate slds-form-element"><button class="button" aria-live="assertive">'+ data[i].status + '</button></div></td>';
        tbody += '<td data-label="Region"><div class="slds-truncate">' + data[i].region + '<div></td>';
        tbody += '<td data-label="Created By"><div class="slds-truncate">' + data[i].owner + '</div></td>';
        tbody += '<td data-label="Creation Date"><div class="slds-truncate">' + data[i].date + '</div></td>';
        tbody += '</tr>';
    }
    tbody +='</tbody>';
    table.innerHTML = tbody;

	var buttons = document.getElementsByClassName("button");

	//select the buttons
	// attach click event and styles to each button
	for (var j = 0; j < buttons.length; j ++){
		var button = buttons[j];
		if (button.innerHTML === "Active") {
    		button.className = "map-anything slds-button slds-button--neutral slds-button--brand button";
    	} else {
    		button.className = "map-anything slds-button slds-button--neutral slds-button--destructive button";
    	}
    	button.onclick = toggleClass;
 	}
 	//toggle styling and innerHTML on click
 	function toggleClass(){
 			console.log(this);
			if (this.className === "map-anything slds-button slds-button--neutral slds-button--brand button" && this.innerHTML ==="Active") {
				this.className = "map-anything slds-button slds-button--neutral slds-button--destructive button";	
				this.innerHTML = "Inactive";
			}
			else {
				this.className = "map-anything slds-button slds-button--neutral slds-button--brand button";
				this.innerHTML = "Active";
			}
			setTimeout(function() { alert('Status has been changed.');}, 1000);
	}

	// attach keyup event listener to search-rule input
	document.getElementById("search-rule").addEventListener("keyup", searchVehicle);
  document.getElementById("search-region").addEventListener("keyup", searchVehicle);

  var ruleEl = document.getElementById("search-rule");

	function searchVehicle(event) {
    var colRule;
		// convert input to uppercase
    	var filter = event.target.value.toUpperCase();
    	// select rows in tbody
    	var rows = document.querySelector("#myTable tbody").rows;
    	// loop through the rows 
      // if the input searches by rule, search the first column
      // else search the 3rd column (region)
      // if in input show the row, if not in input, hide row
    	for (var i = 0; i < rows.length; i++) {
        if (event.target === ruleEl) {
        	colRule = rows[i].cells[0].textContent.toUpperCase();
        } else {
          colRule = rows[i].cells[2].textContent.toUpperCase();
        }
        rows[i].style.display = (colRule.indexOf(filter) > -1) ? "" : "none";
 
    	}
	}
  document.getElementById("scrollBtn").addEventListener("click", scrollToTop);
  scrollBtn = document.getElementById("scrollBtn");
  var timeOut;
  // When the user scrolls down 20px from the top of the document, show the button
  window.onscroll = function() {scrollFunction()};
  //toggle display of button when document is scrolled
  function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollBtn.style.display = "block";
    } else {
        scrollBtn.style.display = "none";
    }
  }

  function scrollToTop(){
  //check to see if page is at top of window
    if (document.body.scrollTop!=0 || document.documentElement.scrollTop!= 0){
      // grab the window and scroll by -50px to the top
      window.scrollBy(0,-50);
      // set timeout to repeat the scroll to top finction every 10 ms until reach top of page
      timeOut = setTimeout(scrollToTop, 10);
    }
    else clearTimeout(timeOut);
    scrollBtn.style.display = "none";
  }


};

ViewModel();

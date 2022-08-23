var stateObject = {
    "India": { "Delhi": ["new Delhi", "North Delhi"],
    "Kerala": ["Thiruvananthapuram", "Palakkad"],
    "Goa": ["North Goa", "South Goa"],
    "Chhattisgarh":["Korba","Bilaspur","Raipur"],
    "  Andhra Pradesh":["Hyderabad","Secundrabad","Hi-Tech City"],
    },
    "Australia": {
    "South Australia": ["Dunstan", "Mitchell"],
    "Victoria": ["Altona", "Euroa"]
    }, "Canada": {
    "Alberta": ["Acadia", "Bighorn"],
    "Columbia": ["Washington", ""]
    },
    }
    window.onload = function () {
    var countySel = document.getElementById("countySel"),
    stateSel = document.getElementById("stateSel"),
    citySel = document.getElementById("citySel");
    for (var country in stateObject) {
    countySel.options[countySel.options.length] = new Option(country, country);
    }
    countySel.onchange = function () {
    stateSel.length = 1; 
    citySel.length = 1; 
    if (this.selectedIndex < 1) return; 
    for (var state in stateObject[this.value]) {
    stateSel.options[stateSel.options.length] = new Option(state, state);
    }
    }
    countySel.onchange(); 
    stateSel.onchange = function () {
    citySel.length = 1; 
    if (this.selectedIndex < 1) return; 
    var city = stateObject[countySel.value][this.value];
    for (var i = 0; i < city.length; i++) {
    citySel.options[citySel.options.length] = new Option(city[i], city[i]);
    }
    }
    }



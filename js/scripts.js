//General Array Function
function MakeArray(n) {
    this.length = n;
    for (var i = 1; i <= n; i++) {
      this[i] = 0;
    }
  }
  //Initialize Days of Week Array
days = new MakeArray(7);
days[0] = "Sunday"
days[1] = "Monday"
days[2] = "Tuesday"
days[3] = "Wednesday"
days[4] = "Thursday"
days[5] = "Friday"
days[6] = "Saturday"
//Initialize Months Array
months = new MakeArray(12);
months[1] = "January"
months[2] = "February"
months[3] = "March"
months[4] = "April"
months[5] = "May"
months[6] = "June"
months[7] = "July"
months[8] = "August"
months[9] = "September"
months[10] = "October"
months[11] = "November"
months[12] = "December"
//Array for Male names
Males = new MakeArray(7);
Males[0] = "Kwasi"
Males[1] = "Kwadwo"
Males[2] = "Kwabena"
Males[3] = "Kwaku"
Males[4] = "Yaw"
Males[5] = "Kofi"
Males[6] = "Kwame"
//Array of female names
Females = new MakeArray(7);
Females[0] = "Akosua"
Females[1] = "Adwoa"
Females[2] = "Abenaa"
Females[3] = "Akua"
Females[4] = "Yaa"
Females[5] = "Afua"
Females[6] = "Ama"
//Day of Week Function
function compute(form) {
    
      var cc = parseInt(form.century.value,10)
  
      var dd = parseInt(form.day.value,10)
      if ((dd < 0) || (dd > 31)) {
        alert("Invalid date!")
      }
      var mm = parseInt(form.month.value,10)
      if ((mm < 0) || (mm > 12)) {
        alert("Invalid month!")
      }
      var yy = parseInt(form.year.value,10)
  
    }
  
    var dayOfWeek = function(cc, yy, mm, dd) {
      return Math.ceil(((cc / 4) - 2 * cc - 1) + ((5 * yy / 4)) + ((26 * (mm + 1) / 10)) + dd) % 7
    }
    form.result1.value = days[dayOfWeek(cc, yy, mm, dd)]
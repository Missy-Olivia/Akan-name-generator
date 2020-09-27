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
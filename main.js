// 1000 millisecond =1 second

let countDowDate = new Date("Aug 19, 2022 23:59:59").getTime();
//console.log(countDowDate);

let counter = setInterval(() => {
  //get date now
  let dateNow = new Date().getTime();
  //find the different between now and countdown date
  let dateDiff = countDowDate - dateNow;

  //get time unit

  let days = Math.floor(dateDiff / (1000 * 60 * 60 * 24));
  let hours = Math.floor((dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  console.log(hours);
  let min = Math.floor((dateDiff % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((dateDiff % (1000 * 60)) / 1000);
  document.querySelector("#days").innerHTML = days;
  document.querySelector("#hours").innerHTML = hours;
  document.querySelector("#minutes").innerHTML = min;
  document.querySelector("#seconds").innerHTML = seconds;

  if (dateDiff < 0) {
    clearInterval(counter);
    alert("happy birth day omar");
  }
}, 1000);

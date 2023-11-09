function updateTime() {
  //Paris
  let parisElement = document.querySelector("#paris");
  let parisDateElement = parisElement.querySelector(".date");
  let parisTimeElement = parisElement.querySelector(".time");
  let parisTime = moment().tz("Europe/Paris");

  parisDateElement.innerHTML = parisTime.format("MMMM Do YYYY");
  parisTimeElement.innerHTML = parisTime.format("h:mm:ss [<small>]A[</small>]");

  //Johannesburg
  let johannesburgElement = document.querySelector("#johannesburg");
  let johannesburgDateElement = johannesburgElement.querySelector(".date");
  let johannesburgTimeElement = johannesburgElement.querySelector(".time");
  let johannesburgTime = moment().tz("Africa/Johannesburg");

  johannesburgDateElement.innerHTML = johannesburgTime.format("MMMM Do YYYY");
  johannesburgTimeElement.innerHTML = johannesburgTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );

  //Hong-Kong
  let hongkongElement = document.querySelector("#hong-kong");
  let hongkongDateElement = hongkongElement.querySelector(".date");
  let hongkongTimeElement = hongkongElement.querySelector(".time");
  let hongkongTime = moment().tz("Asia/Hong_Kong");

  hongkongDateElement.innerHTML = hongkongTime.format("MMMM Do YYYY");
  hongkongTimeElement.innerHTML = hongkongTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );

  //New York
  let newyorkElement = document.querySelector("#new-york");
  let newyorkDateElement = newyorkElement.querySelector(".date");
  let newyorkTimeElement = newyorkElement.querySelector(".time");
  let newyorkTime = moment().tz("America/New_York");

  newyorkDateElement.innerHTML = newyorkTime.format("MMMM Do YYYY");
  newyorkTimeElement.innerHTML = newyorkTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );
}
updateTime();
setInterval(updateTime, 1000);

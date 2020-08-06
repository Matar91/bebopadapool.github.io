function loadAPI() {
  let poolID = "95ef4e541a1e89b38ffefe125060ff441b03c0d77dbfaff656bd1d64";
  let dataArray = [];
  fetch("https://js.adapools.org/pools.json")
    .then((response) => response.json())
    .then((data) => {
      //convert to array
      for (var i in data) dataArray.push([i, data[i]]);

      let filtered = dataArray.filter((dataRow) => dataRow[0] === poolID);

      //document.getElementById("output").innerHTML = lengthOfName;

      console.log(filtered);
    });
}

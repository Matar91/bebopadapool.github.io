function fetchNews() {
  let dataArray = [];

  function urlify(text) {
    var urlRegex = /(https?:\/\/[^\s]+)/g;
    return text.replace(urlRegex, function (url) {
      return '<a target="_blank" href="' + url + '">' + url + "</a>";
    });
  }

  fetch("https://api.coingecko.com/api/v3/coins/cardano/status_updates")
    .then((response) => response.json())
    .then((data) => {
      let popup = document.getElementById("popup_container");
      let ticker = document.getElementById("ticker-content");

      let popup_content = "";
      let ticker_content = "";

      for (let i = 1; i < 6; i++) {
        popup_content +=
          `<div id="popup` +
          i +
          `" class="overlay">
        <div class="popup">
          <div class="bigshot">
            <div class="bishotImg__container">
                 <img style=""  src="./images/bigshot.gif" alt="">
            </div>
          </div>
          <h2> TOPIC: ` +
          data.status_updates[i].category.toUpperCase() +
          `</h2>
          <a class="close" href="#">&times;</a>
          <div class="content">` +
          urlify(data.status_updates[i].description) +
          `
          </div>
        </div>
      </div>`;

        ticker_content +=
          `<li data-elem="` +
          i +
          `" title="Long title" style="height: 35px;">
              <a href="#popup` +
          i +
          `">
                <b>` +
          i +
          ". " +
          data.status_updates[i].category.toUpperCase() +
          `</b>  
                ` +
          data.status_updates[i].description +
          `

             
              </a>
            </li>`;
      }

      popup.innerHTML = popup_content;

      ticker.innerHTML = ticker_content;
    });
}

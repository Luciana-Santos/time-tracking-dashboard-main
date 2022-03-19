"use strict";var cards,main=document.querySelector("#main"),filtro=document.querySelectorAll("#filtro li"),time="weekly",dados={},msgTime={daily:"Yesterday",weekly:"Last Week",monthly:"Last Month"};function handleClick(t){filtro.forEach(function(t){t.classList.remove("ativo")}),t.target.classList.add("ativo"),atualizarCards(time=t.target.innerText.toLowerCase())}function atualizarCards(e){cards.forEach(function(t){atualizarCard(t,e)})}function atualizarCard(t,e){var a=t.querySelector("#titulo").innerText,n=dados[a][e].current,a=dados[a][e].previous;t.querySelector("#hora").innerText="".concat(n),t.querySelector("#desc").innerText="".concat(msgTime[e]," - ").concat(a,"hrs")}function criarCard(t,e){return'<div class="card '.concat(t.title.toLowerCase().replace(/\s/g,""),'">\n <div class="card__info">\n <div class="info__title">\n <h4 id="titulo">').concat(t.title,'</h4>\n        <div class="dots">\n <img src="img/icon-ellipsis.svg" alt="">\n        </div>\n      </div>\n\n <div class="info__dados">\n        <div class="time"><span id="hora">').concat(t.timeframes[e].current,'</span>hrs</div>\n        <p id="desc"><span>').concat(msgTime[e],"</span> - ").concat(t.timeframes[e].previous,"hrs</p>\n      </div>\n    </div>\n  </div>")}filtro.forEach(function(t){t.addEventListener("click",handleClick)}),fetch("data.json").then(function(t){return t.json()}).then(function(t){t.forEach(function(t){main.insertAdjacentHTML("beforeend",criarCard(t,time))}),t.forEach(function(t){dados[t.title]=t.timeframes}),cards=document.querySelectorAll(".card")});
//# sourceMappingURL=scrip.js.map
function xvvDialog(func, arg) {

  switch (func) {

    case "survey": // DOAXVV surveys
      return document.body.insertAdjacentHTML("afterbegin", `
        <div id="mamaNyoDialog" onclick="{ document.getElementById('mamaNyoDialog').remove(); }">
          <div style="width: 950px; height: 712.5px;" onclick="{ event.stopPropagation(); }">
            <iframe src="${arg}"></iframe>
          </div>
        </div>
      `);

    case "music": // DOAXVV music
      return document.body.insertAdjacentHTML("afterbegin", `
        <div id="mamaNyoDialog" onclick="{ document.getElementById('mamaNyoDialog').remove(); }">
          <div style="width: 712.5px; height: 712.5px;" onclick="{ event.stopPropagation(); }">
            <iframe src="https://www.youtube-nocookie.com/embed/${arg}?controls=0&rel=0&showinfo=0&modestbranding=1&playsinline=1"></iframe>
          </div>
        </div>
      `);

    case "newver": // new version announce
      let ajx = new XMLHttpRequest();
      ajx.onload = function() { document.getElementById("ajaxTxt").innerHTML = this.responseText; }
      ajx.open("GET", `/assets/text/${func}.txt`);
      ajx.send();
      return document.body.insertAdjacentHTML("afterbegin", `
        <div id="mamaNyoDialog" onclick="{ document.getElementById('mamaNyoDialog').remove(); }">
          <div style="width: 593.75px; height: 712.5px; background-color: #161224;" onclick="{ event.stopPropagation(); }">
            <div id="ajaxTxt" style="padding: 47.5px 19px;"></div>
          </div>
        </div>
      `);

    case "event": // announcements from DOAXVV
      return document.body.insertAdjacentHTML("afterbegin", `
        <div id="mamaNyoDialog" onclick="{ document.getElementById('mamaNyoDialog').remove(); }">
          <div style="width: 950px; height: 712.5px; background-color: #ffffff;" onclick="{ event.stopPropagation(); }">
            <iframe src="${ifEmbed(...decodeURIComponent(arg).match(/"(?:[^"\\]|\\.)*"|[^,]+/g).map(s => s.trim().replace(/^"|"$/g, '')))}"></iframe>
          </div>
        </div>
      `);
      function ifEmbed(e, r) {
        switch (e) {
          case "jp": return `https://doax-venusvacation.jp/${r}.html`; // `{info|maintenance}/id`
          case "gl": return `https://game.doaxvv.com/production/html/information/${r}.html`;
          default: return event.preventDefault();
        }
      }

    case "transcript": // anniversary transcript
      return document.body.insertAdjacentHTML("afterbegin", `
        <div id="mamaNyoDialog" onclick="{ document.getElementById('mamaNyoDialog').remove(); }">
          <div style="width: 950px; height: 712.5px;" onclick="{ event.stopPropagation(); }">
            <iframe src="/assets/pdf/${arg}"></iframe>
          </div>
        </div>
      `);

    default: // none will be executed in this part
      return event.preventDefault();

  }

}
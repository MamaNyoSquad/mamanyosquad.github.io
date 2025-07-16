function xvvDialog(func) {

  switch(func) {

    case "survey": // DOAXVV surveys
      return document.body.insertAdjacentHTML("afterbegin", `
        <div id="mamaNyoDialog" onclick="{ document.getElementById('mamaNyoDialog').remove(); }">
          <div style="width: 950px; height: 712.5px;" onclick="{ event.stopPropagation(); event.preventDefault(); }">
            <iframe src="https://www.gamecity.ne.jp/form/doaxvv_enquete_2025_en"></iframe>
          </div>
        </div>
      `);

    case "notify": // #MamaNyoSquad announcements
      let ajx = new XMLHttpRequest();
      ajx.onload = function() { document.getElementById("ajaxTxt").innerHTML = this.responseText; }
      ajx.open("GET", "/assets/text/notify.txt");
      ajx.send();
      return document.body.insertAdjacentHTML("afterbegin", `
        <div id="mamaNyoDialog" onclick="{ document.getElementById('mamaNyoDialog').remove(); }">
          <div style="width: 593.75px; height: 712.5px; background-color: #161224;" onclick="{ event.stopPropagation(); event.preventDefault(); }">
            <div id="ajaxTxt" style="padding: 47.5px 19px;"></div>
          </div>
        </div>
      `);

    case "event": // announcements from DOAXVV
      return document.body.insertAdjacentHTML("afterbegin", `
        <div id="mamaNyoDialog" onclick="{ document.getElementById('mamaNyoDialog').remove(); }">
          <div style="width: 950px; height: 712.5px; background-color: #ffffff;" onclick="{ event.stopPropagation(); event.preventDefault(); }">
            <iframe src="${ifEmbed("xvv", "chara_gl_0715_250716_1_0_1553a72f7ee400ebc24584c090dfbe15e7fdcf214f59d1558478dcf720da7b9f_en")}" allowfullscreen></iframe>
          </div>
        </div>
      `);
      function ifEmbed(e, r) {
        if (e == "xvv") { return xvv = "https://game.doaxvv.com/production/html/information/" + r + ".html"; }
        else if (e == "yt") { return yt = "https://www.youtube-nocookie.com/embed/" + r + "?rel=0"; }
      }

    case "transcript": // anniversary transcript
      return document.body.insertAdjacentHTML("afterbegin", `
        <div id="mamaNyoDialog" onclick="{ document.getElementById('mamaNyoDialog').remove(); }">
          <div style="width: 950px; height: 712.5px;" onclick="{ event.stopPropagation(); event.preventDefault(); }">
            <iframe src="/assets/pdf/20241206_4anniv_transcript.pdf"></iframe>
          </div>
        </div>
      `);

    default: // none will be executed in this part
      return;

  }

}
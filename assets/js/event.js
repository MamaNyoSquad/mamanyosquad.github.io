function xvvDialog(func, arg) {
  switch (func) {
    case "survey": // DOAXVV surveys
      return document.body.insertAdjacentHTML("afterbegin", `
        <div id="mamaNyoDialog" onclick="{ document.querySelector('#mamaNyoDialog').remove(); }">
          <div style="width: 950px; height: 712.5px;" onclick="{ event.stopPropagation(); }">
            <iframe src="${arg}"></iframe>
          </div>
        </div>
      `);

    case "music": // DOAXVV music
      return document.body.insertAdjacentHTML("afterbegin", `
        <div id="mamaNyoDialog" onclick="{ document.querySelector('#mamaNyoDialog').remove(); }">
          <div style="width: 712.5px; height: 712.5px;" onclick="{ event.stopPropagation(); }">
            <iframe src="https://www.youtube-nocookie.com/embed/${arg}?controls=0&rel=0&showinfo=0&modestbranding=1&playsinline=1" referrerpolicy="strict-origin-when-cross-origin"></iframe>
          </div>
        </div>
      `);

    case "newver": { // new version announce
      const dialog = document.body.insertAdjacentHTML("afterbegin", `
        <div id="mamaNyoDialog" onclick="{ document.querySelector('#mamaNyoDialog').remove(); }">
          <div style="width: 593.75px; height: 712.5px; background-color: #161224;" onclick="{ event.stopPropagation(); }">
            <div id="ajaxTxt" style="padding: 47.5px 19px;"></div>
          </div>
        </div>
      `);
      fetch(`/assets/ajx/${func}.txt`)
        .then(response => {
          if (!response.ok) {
            throw new Error(`Request failed with status ${response.status}`);
          }
          return response.text();
        })
        .then(content => {
          const ajaxTxt = document.querySelector("#ajaxTxt");
          if (ajaxTxt) { ajaxTxt.innerHTML = content; }
        })
        .catch(error => console.error("Failed to load the version announcement:", error));
      return dialog;
    }

    case "event": // announcements from DOAXVV
      return document.body.insertAdjacentHTML("afterbegin", `
        <div id="mamaNyoDialog" onclick="{ document.querySelector('#mamaNyoDialog').remove(); }">
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
        <div id="mamaNyoDialog" onclick="{ document.querySelector('#mamaNyoDialog').remove(); }">
          <div style="width: 950px; height: 712.5px;" onclick="{ event.stopPropagation(); }">
            <iframe src="/assets/pdf/${arg}"></iframe>
          </div>
        </div>
      `);

    default: // none will be executed in this part
      return event.preventDefault();
  }
}
function xvvDialog(func) {

  switch(func) {

    case "survey": // DOAXVV surveys 
      document.body.innerHTML += `
        <dialog id="xvvMdl" onkeydown="if(event.key === 'Escape') { closeModal(); }">
          <span class="material-symbols-rounded" title="Close" onclick="closeModal()">close</span>
          <iframe src="https://www.gamecity.ne.jp/form/doaxvv_enquete_2025_en" allowfullscreen></iframe>
        </dialog>
      `;
      break;

    case "notify": // #MamaNyoSquad announcements
      document.body.innerHTML += `
        <dialog id="xvvMdl" style="background-color: #161224 !important; padding: 19px;" onkeydown="if(event.key === 'Escape') { closeModal(); }">
          <span xvvNotify class="material-symbols-rounded" title="Close" onclick="closeModal()">close</span>
          <div id="ajaxTxt"></div>
        </dialog>
      `;
      const ajaxLoad = new XMLHttpRequest();
      ajaxLoad.onload = function() { document.getElementById("ajaxTxt").innerHTML = this.responseText; }
      ajaxLoad.open("GET", "/assets/text/notify.txt");
      ajaxLoad.send();
      break;

    case "event": // announcements from DOAXVV
      document.body.innerHTML += `
        <dialog id="xvvMdl" onkeydown="if(event.key === 'Escape') { closeModal(); }">
          <span class="material-symbols-rounded" title="Close" onclick="closeModal()">close</span>
          <iframe src="` + ifEmbed("xvv") + `" allowfullscreen></iframe>
        </dialog>
      `;
      function ifEmbed(e) {
        if (e == "xvv") {
          let xvvId = "maint_gl_0612_240627_1_0_0e7c7bdc282ba0ae8f1c5beffd454adde0ad08e7e17ff7bb893ebf052f07eaba_en",
            xvv = "https://game.doaxvv.com/production/html/information/" + xvvId + ".html";
          return xvv;
        } else if (e == "yt") {
          let ytId = "iif5ng2p3dE"
            yt = "https://www.youtube-nocookie.com/embed/" + ytId + "?rel=0";
          return yt;
        }
      }
      break;

    case "transcript": // anniversary transcript
      document.body.innerHTML += `
        <dialog id="xvvMdl" onkeydown="if(event.key === 'Escape') { closeModal(); }">
          <span class="material-symbols-rounded" title="Close" onclick="closeModal()">close</span>
          <iframe src="/assets/pdf/20241206_4anniv_transcript.pdf"></iframe>
        </dialog>
      `;
      break;

    default: // none will be executed in this part

  }
  
  // execute Modal
  document.getElementById("xvvMdl").showModal();

}

function closeModal() {
  document.getElementById("xvvMdl").close();
  document.getElementById("xvvMdl").remove();
}
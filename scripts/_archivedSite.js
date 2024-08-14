function launchArchive() {
  document.body.insertAdjacentHTML("beforebegin", `
    <div id="archivedSiteBlock">
      <h2>You're viewing the archived version of the website.</h2>
      <p>
        We're working round the clock to bring you the updated version of the website,
        to be debuted this coming <b>4th Inception Anniversary</b>!
      </p>
      <p>
        To check out the preview early, go to
        <code>MamaNyoSquad/mamanyosquad-preview/tree/20240518</code> on GitHub.
      </p>
      <p><i>
        Please note that this dialog will appear in every page, regardless if you
        dismiss the dialog.
      </i></p>
      <div>
        <span id="disappearBlogBtn" class="material-symbols-rounded" title="Read the Blog" onclick="window.open('/blog/20240815')">rss_feed</span>
        <span class="material-symbols-rounded" title="Open GitHub" onclick="window.open('https://github.com/MamaNyoSquad/mamanyosquad-preview/tree/20240518')">code</span>
        <span class="material-symbols-rounded" title="Close Dialog" onclick="dialogClose()">close</span>
      </div>
    </div>
  `);
}

function dialogClose() {
  document.getElementById("archivedSiteBlock").style.opacity = "0";
  setTimeout(() => {
    document.getElementById("archivedSiteBlock").style.display = "none";
  }, 950);
}
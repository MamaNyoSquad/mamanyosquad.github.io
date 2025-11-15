function blogQue() {

  let article = new URLSearchParams(window.location.search).get("article");

  switch (article) {

    case "20220413":
      replaceHeader();
      document.title = "An Open Letter to Bookmark \u2014 13 Apr 2022";
      document.querySelector("#blogHero").innerHTML = `<div class="heroBack"><div class="heroFore"></div></div>`;
      document.querySelector(".heroBack").setAttribute("style", "background-image: url('/assets/images/bloghead/20220413_Bookmark.png'); background-attachment: unset;");
      document.querySelector(".heroFore").setAttribute("style", "background-color: unset; padding: calc(285px + 95px) 19px 285px 19px;");
      loadArticle(article);
      return;

    case "20221120":
      replaceHeader();
      document.title = "An Open Letter to Twitter \u2014 20 Nov 2022";
      document.querySelector("#blogHero").innerHTML = `<div class="heroBack"><div class="heroFore"></div></div>`;
      document.querySelector(".heroBack").setAttribute("style", "background-image: url('/assets/images/bloghead/20221120_Twitter.png'); background-attachment: unset;");
      document.querySelector(".heroFore").setAttribute("style", "background-color: unset; padding: calc(285px + 95px) 19px 285px 19px;");
      loadArticle(article);
      return;

    case "20221229":
      replaceHeader();
      document.title = "End of Support for Windows 8.1 -- what does it mean for DOAXVV? \u2014 29 Dec 2022";
      document.querySelector("#blogHero").innerHTML = `<div class="heroBack"><div class="heroFore"></div></div>`;
      document.querySelector(".heroBack").setAttribute("style", "background-image: url('/assets/images/bloghead/20221229_Windows8.png'); background-attachment: unset;");
      document.querySelector(".heroFore").setAttribute("style", "background-color: unset; padding: calc(285px + 95px) 19px 285px 19px;");
      loadArticle(article);
      return;

    case "20230416":
      replaceHeader();
      document.title = "n Open Message to DOAXVV Global Edition regarding 「DOAXVV Global @ 4」 \u2014 16 Apr 2023";
      document.querySelector("#blogHero").innerHTML = `<div class="heroBack"><div class="heroFore"></div></div>`;
      document.querySelector(".heroBack").setAttribute("style", "background-image: url('/assets/images/bloghead/20230416_XVVGL@4.png'); background-attachment: unset;");
      document.querySelector(".heroFore").setAttribute("style", "background-color: unset; padding: calc(285px + 95px) 19px 285px 19px;");
      loadArticle(article);
      return;

    case "20230902":
      replaceHeader();
      document.title = "「Justice」continues to live on. \u2014 2 Sep 2023";
      document.querySelector("#blogHero").innerHTML = `<div class="heroBack"><div class="heroFore"></div></div>`;
      document.querySelector(".heroBack").setAttribute("style", "background-image: url('/assets/images/bloghead/20230902_SINoALICEGLEOS.png'); background-attachment: unset;");
      document.querySelector(".heroFore").setAttribute("style", "background-color: unset; padding: calc(285px + 95px) 19px 285px 19px;");
      loadArticle(article);
      return;

    case "20231231":
      document.querySelector("#blogHeader").innerHTML = `
        <div class="headers"> <!-- header -->
          <header class="desktop">
            <div class="flexNav">
              <img src="/assets/partner/VTresMarias/vtm_logoWide.svg" alt="「VTresMarias - V三人のマリア - 」" width="190px">
              <div class="linkRefs">
                <span class="material-symbols-rounded" title="Go back to Home" onclick="{ window.location.replace('/'); }">home</span>
                <span class="material-symbols-rounded" title="Read more from the SquadMates" onclick="{ window.location.replace('/blog'); }">rss_feed</span>
                <span class="material-symbols-rounded" title="Learn more" onclick="window.open('https://vtresmarias.github.io')">open_in_new</span>
              </div>
            </div>
          </header>
          <header class="mobile">
            <div class="flexNav">
              <img src="/assets/partner/VTresMarias/favicon_light.png" alt="「VTresMarias - V三人のマリア - 」" width="95px">
              <div class="linkRefs">
                <span class="material-symbols-rounded" title="Go back to Home" onclick="{ window.location.replace('/'); }">home</span>
                <span class="material-symbols-rounded" title="Read more from the SquadMates" onclick="{ window.location.replace('/blog'); }">rss_feed</span>
                <span class="material-symbols-rounded" title="Learn more" onclick="window.open('https://vtresmarias.github.io')">open_in_new</span>
              </div>
            </div>
          </header>
        </div>
      `;
      document.title = "An Open Letter to Streamers \u2014 31 Dec 2023";
      document.querySelector("#blogHero").innerHTML = `<div class="heroBack"><div class="heroFore"></div></div>`;
      document.querySelector(".heroBack").setAttribute("style", "background-image: url('/assets/images/bloghead/20231231_VTMOpenLetter.png'); background-attachment: unset;");
      document.querySelector(".heroFore").setAttribute("style", "background-color: unset; padding: calc(285px + 95px) 19px 285px 19px;");
      let customStyle = document.createElement("link"),
        darkModeFavicon = document.createElement("link");
      customStyle.rel = "stylesheet";
      customStyle.href = "/assets/partner/VTresMarias/20231231_feed.css";
      customStyle.type = "text/css";
      customStyle.media = "all";
      document.head.appendChild(customStyle);
      document.querySelector("link[rel='icon']").setAttribute("href", "https://vtresmarias.github.io/assets/web/favicon_light.png");
      darkModeFavicon.rel = "icon";
      darkModeFavicon.href = "https://vtresmarias.github.io/assets/web/favicon_dark.png";
      darkModeFavicon.type = "image/png";
      darkModeFavicon.media = "(prefers-color-scheme: dark)";
      document.head.appendChild(darkModeFavicon);
      document.querySelector("link[rel='apple-touch-icon']").setAttribute("href", "https://vtresmarias.github.io/assets/web/apple-touch-icon.png");
      loadArticle(article);
      return;

    case "20240105":
      replaceHeader();
      document.title = "「正義」は生き続ける。 \u2014 5 Jan 2024";
      document.querySelector("#blogHero").innerHTML = `<div class="heroBack"><div class="heroFore"></div></div>`;
      document.querySelector(".heroBack").setAttribute("style", "background-image: url('/assets/images/bloghead/20240105_SINoALICEJPEOS.png'); background-attachment: unset;");
      document.querySelector(".heroFore").setAttribute("style", "background-color: unset; padding: calc(285px + 95px) 19px 285px 19px;");
      loadArticle(article);
      return;

    case "20240328":
      replaceHeader();
      document.title = "#MamaNyoSquad observes Holy Week \u2014 28 Mar 2024";
      document.querySelector("#blogHero").innerHTML = `<div class="heroBack"><div class="heroFore"></div></div>`;
      document.querySelector(".heroBack").setAttribute("style", "background-image: url('/assets/images/bloghead/20240328_HolyWeek.png'); background-attachment: unset;");
      document.querySelector(".heroFore").setAttribute("style", "background-color: unset; padding: calc(285px + 95px) 19px 285px 19px;");
      loadArticle(article);
      return;

    case "20240419":
      replaceHeader();
      document.title = "Celebrating 5 Years of DOAXVV Global \u2014 19 Apr 2024";
      document.querySelector("#blogHero").innerHTML = `<div class="heroBack"><div class="heroFore"></div></div>`;
      document.querySelector(".heroBack").setAttribute("style", "background-image: url('/assets/images/bloghead/20240419_XVVGL@5.png'); background-attachment: unset;");
      document.querySelector(".heroFore").setAttribute("style", "background-color: unset; padding: calc(285px + 95px) 19px 285px 19px;");
      loadArticle(article);
      return;

    case "20240521":
      replaceHeader();
      document.title = "General Updates (May Edition) \u2014 21 May 2024";
      document.querySelector("#blogHero").innerHTML = `<div class="heroBack"><div class="heroFore"></div></div>`;
      document.querySelector(".heroBack").setAttribute("style", "background-image: url('/assets/images/bloghead/GenUpdate.png'); background-attachment: unset;");
      document.querySelector(".heroFore").setAttribute("style", "background-color: unset; padding: calc(285px + 95px) 19px 285px 19px;");
      loadArticle(article);
      return;

    case "20240815":
      replaceHeader();
      document.title = "We're archiving! \u2014 15 Aug 2024";
      document.querySelector("#blogHero").innerHTML = `<div class="heroBack"><div class="heroFore"></div></div>`;
      document.querySelector(".heroBack").setAttribute("style", "background-image: url('/assets/images/bloghead/UnderRenovation.png'); background-attachment: unset;");
      document.querySelector(".heroFore").setAttribute("style", "background-color: unset; padding: calc(285px + 95px) 19px 285px 19px;");
      loadArticle(article);
      return;

    case "20241206":
      replaceHeader();
      document.title = "Our New Look to Celebrate the 4th Inception Anniversary \u2014 6 Dec 2024";
      document.querySelector("#blogHero").innerHTML = `<div class="heroBack"><div class="heroFore"></div></div>`;
      document.querySelector(".heroBack").setAttribute("style", "background-image: url('/assets/images/bloghead/20241206_4anniv.png'); background-attachment: unset;");
      document.querySelector(".heroFore").setAttribute("style", "background-color: unset; padding: calc(285px + 95px) 19px 285px 19px;");
      loadArticle(article);
      return;

    default: return;

  }

}

function replaceHeader() {
  return document.querySelector("#blogHeader").innerHTML = `
    <div class="headers"> <!-- header -->
      <header class="desktop">
        <div class="flexNav">
          <img headerWideLogo src="/assets/images/logo/MamaNyoSquad_2024.png" alt="#MamaNyoSquad" width="190px">
          <div class="linkRefs">
            <span class="material-symbols-rounded" title="Go back to Home" onclick="{ window.location.replace('/'); }">home</span>
            <span class="material-symbols-rounded" title="Read more from the SquadMates" onclick="{ window.location.replace('/blog'); }">rss_feed</span>
          </div>
        </div>
      </header>
      <header class="mobile">
        <div class="flexNav">
          <img headerMobileLogo src="/assets/images/logo/MamaNyoSquad_mini.png" alt="#MamaNyoSquad" width="95px">
          <div class="linkRefs">
            <span class="material-symbols-rounded" title="Go back to Home" onclick="{ window.location.replace('/'); }">home</span>
            <span class="material-symbols-rounded" title="Read more from the SquadMates" onclick="{ window.location.replace('/blog'); }">rss_feed</span>
          </div>
        </div>
      </header>
    </div>
  `;
}

function loadArticle(date) {
  // related code: https://www.w3schools.com/js/js_ajax_intro.asp 
  let atcl = new XMLHttpRequest();
  atcl.onload = function() { document.querySelector("#blogContent").innerHTML = this.responseText; }
  atcl.open("GET", "/assets/ajx/blog/" + date + ".txt");
  atcl.send();
  return;
}
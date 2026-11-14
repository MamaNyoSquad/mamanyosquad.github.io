function openFaq() {
  document.querySelector(".faqBtn").onclick = () => { closeFaq(); }
  document.querySelector(".faqBtn span[class^='material-symbols']").style.transform = "rotate(180deg)";
  document.querySelector(".faqSheet").style.height = "max-content";
}

function closeFaq() {
  document.querySelector(".faqBtn").onclick = () => { openFaq(); }
  document.querySelector(".faqBtn span[class^='material-symbols']").style.transform = "rotate(0deg)";
  document.querySelector(".faqSheet").style.height = "0";
}

let xWidgetsPromise;

function loadXWidgets() {
  if (!xWidgetsPromise) {
    xWidgetsPromise = new Promise((resolve, reject) => {
      const script = document.createElement("script");
      script.src = "https://platform.x.com/widgets.js";
      script.async = true;
      script.onload = () => resolve(window.twttr);
      script.onerror = reject;
      document.head.appendChild(script);
    });
  }
  return xWidgetsPromise;
}

function observeTweetEmbeds(container) {
  const embeds = container.querySelectorAll(".twtrEmbed[data-tweet-id]");
  if (!("IntersectionObserver" in window)) { return; }

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) { return; }
      observer.unobserve(entry.target);
      const embed = entry.target,
        tweetId = embed.dataset.tweetId;
      loadXWidgets()
        .then(twttr => twttr.widgets.createTweet(tweetId, embed, {
          conversation: "none",
          theme: "dark",
          width: 550
        }))
        .catch(() => {});
    });
  }, { rootMargin: "300px" });

  embeds.forEach(embed => observer.observe(embed));
}

function fetchLivetweet() {
  function sessExTwtr(xml) {
    let o = "",
      xmDc = xml,
      n = xmDc.getElementsByTagName("TWTR");
    for (let h = 0; h < n.length; h++) {
      const sessionName = n[h].getElementsByTagName("SESSION_NAME")[0].textContent,
        idNode = n[h].getElementsByTagName("TWTR_ID")[0],
        tweetIds = idNode.children.length
          ? Array.from(idNode.children, id => id.textContent.trim())
          : [idNode.textContent.trim()];
      o += `
        <h3>${sessionName}</h3>
        <div class="halfSeparator"></div>
        ${tweetIds.map((tweetId, index) => `
          ${index > 0 ? `<div class="halfSeparator"></div>` : ""}
          <div class="twtrEmbed" data-tweet-id="${tweetId}">
            <p style="width: 100%; height: 0; overflow: hidden;">DOAXVV ${sessionName} / live-posted by @thebelovedmoon on X</p>
          </div>
        `).join("")}
        <br>
      `;
    }
    const container = document.querySelector(".sessionTwtr");
    container.innerHTML = o;
    observeTweetEmbeds(container);
  }
  fetch(`/assets/ajx/vods/livetweet.xml`)
    .then(response => response.ok ? response.text() : null)
    .then(xml => {
      if (xml !== null) { sessExTwtr(new DOMParser().parseFromString(xml, "application/xml")); }
    }).catch(() => {});
}

function fetchYtVod() {
  function sessExYt(xml) {
    let o = "",
      xmDc = xml,
      n = xmDc.getElementsByTagName("YT");
    for (let h = 0; h < n.length; h++) {
      const sessionName = n[h].getElementsByTagName("SESSION_NAME")[0].textContent,
        idNode = n[h].getElementsByTagName("YT_ID")[0],
        ytIds = idNode.children.length
          ? Array.from(idNode.children, id => id.textContent.trim())
          : [idNode.textContent.trim()];
      o += `
        <h3>${sessionName}</h3>
        <div class="halfSeparator"></div>
        ${ytIds.map((ytId, index) => `
          ${index > 0 ? `<div class="halfSeparator"></div>` : ""}
          <div class="ytEmbed">
            <iframe src="https://www.youtube-nocookie.com/embed/${ytId}?rel=0&playsinline=1" title="DOAXVV ${sessionName} / uploaded by @thebelovedmoon on YouTube" loading="lazy" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </div>
        `).join("")}
        <br>
      `;
    }
    document.querySelector(".sessionYT").innerHTML = o;
  }
  fetch(`/assets/ajx/vods/ytvod.xml`)
    .then(response => response.ok ? response.text() : null)
    .then(xml => {
      if (xml !== null) { sessExYt(new DOMParser().parseFromString(xml, "application/xml")); }
    }).catch(() => {});
}
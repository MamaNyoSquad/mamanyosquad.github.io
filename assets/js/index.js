function showMIT() {
  return document.body.insertAdjacentHTML("afterbegin", `
    <div id="mamaNyoDialog" onclick="{ document.getElementById('mamaNyoDialog').remove(); }">
      <div style="width: 593.75px; height: 712.5px; background-color: #a31f34;" onclick="{ event.stopPropagation(); event.preventDefault(); }">
        <div class="MITtxt" style="padding: 47.5px 19px; text-align: left;">
          <h2>MIT License</h2>
          <br>
          <span style="display: block; font-style: italic">
            Copyright (c) 2020 #MamaNyoSquad
          </span>
          <br>
          <p>
            Permission is hereby granted, free of charge, to any person obtaining a copy
            of this software and associated documentation files (the "Software"), to deal
            in the Software without restriction, including without limitation the rights
            to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
            copies of the Software, and to permit persons to whom the Software is
            furnished to do so, subject to the following conditions:
          </p>
          <br>
          <p>
            The above copyright notice and this permission notice shall be included in all
            copies or substantial portions of the Software.
          </p>
          <br>
          <p>
            THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
            IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
            FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
            AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
            LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
            OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
            SOFTWARE.
          </p>
        </div>
      </div>
    </div>
  `);
}

function mobilePanelOpen() {
  var navPanel = document.getElementById("mobile-navPanel").style;
  navPanel.transform = "unset";
}
function mobilePanelClose() {
  var navPanel = document.getElementById("mobile-navPanel").style;
  navPanel.transform = "translateY(-19rem)";
}

function supplementalBtns() {
  let suplRows = document.querySelectorAll(".btnOther");
  for (let b = 0; b < suplRows.length; b++) {
    suplRows[b].insertAdjacentHTML("beforeend", `
      <!-- <span class="material-symbols-rounded xvvSurvey" title="See our election coverage" onclick="window.open('/MamaNyoVotesPH')">how_to_vote</span> -->
      <!-- <span class="material-symbols-rounded xvvSurvey" title="Explore the Venus Vacation Collection" onclick="window.open('/VenusVacationCollection')">beach_access</span> -->
      <span class="material-symbols-rounded xvvSurvey" title="Listen to PRISM's theme &quot;Stolen&quot;!" onclick="xvvDialog('music')">music_note</span>
      <span class="material-symbols-rounded xvvNotify" title="#MamaNyoSquad has been upgraded to v20240518.21.0!" onclick="xvvDialog('notify')">info</span>
      <span class="material-symbols-rounded xvvEvent" title="Check out the newest event from DOAXVV Global!" onclick="xvvDialog('event')">celebration</span>
    `);
  }
}
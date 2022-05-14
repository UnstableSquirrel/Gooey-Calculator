<script>

    ////////////// Links /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    function dofi() {
        window.location.href = "http://dogira.finance";
      }

    function dogira() {
        window.location.href = "http://dogira.net";
    }

    ////////////// Links End /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    ////////////// Copy To Clipboard End ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    let wallet = "0xf9f7F84aBA889c65f97528E43967684F85C50Ba8"

    /*function copy() {
    navigator.clipboard.writeText(wallet)
    alert("Address Copied")
    }*/

    function copy() {
        const elem = document.createElement('textarea')
        elem.value = wallet
        document.body.appendChild(elem)
        elem.select()
        document.execCommand('copy')
        document.body.removeChild(elem)
        alert("Address Copied")
    }

////////////// Copy To Clipboard End ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

</script>

<main>

    <div class="donation-section">
        <div>
          <p>Donation Wallet: </p>
          <div>
            <span on:click="{copy}" class="HeaderInfo_addressText__2x_sD">{wallet}</span>
              <div on:click="{copy}" class="HeaderInfo_copyIcon__21b8W">
                <svg width="20px" height="20px" viewBox="0 0 20 20" style="cursor: pointer; color: var(--bg-default-color);">
                  <g id="copy" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                    <circle id="Oval" fill="currentColor" cx="10" cy="10" r="10"></circle>
                    <g id="Group-13" transform="translate(5.794476, 5.790468)" stroke="#616B84">
                      <path d="M3.5978014,6.21230639e-14 L6.00483293,6.21230639e-14 C6.24961697,6.2522187e-14 6.48589921,0.0897832911 6.66891449,0.252339862 L7.72628545,1.19151064 C7.93994388,1.38128488 8.06220389,1.65340132 8.06220389,1.93917078 L8.06220389,5.79807571 C8.06220389,6.35036046 7.61448864,6.79807571 7.06220389,6.79807571 L3.5978014,6.79807571 C3.04551665,6.79807571 2.5978014,6.35036046 2.5978014,5.79807571 L2.5978014,1 C2.5978014,0.44771525 3.04551665,6.22245169e-14 3.5978014,6.21230639e-14 Z" id="Rectangle"></path><path d="M5.46440249,7.1136292 L5.46440249,7.1136292 L5.46440249,7.70730424 C5.46440249,8.31088547 4.97510322,8.80018474 4.37152199,8.80018474 L1.0928805,8.80018474 C0.489299265,8.80018474 0,8.31088547 0,7.70730424 L0,3.09498952 C0,2.49140829 0.489299265,2.00210903 1.0928805,2.00210903 L2.34654139,2.00210903 L2.34654139,2.00210903" id="Path">
                      </path>
                      <path d="M5.61108423,0 L5.61108423,1.84318671 C5.61108423,2.06410061 5.79017033,2.24318671 6.01108423,2.24318671 L8.06220389,2.24318671 L8.06220389,2.24318671" id="Path-2">
                      </path>
                    </g>
                  </g>
                </svg>
              </div>
          </div>
          <p class="wallet-info">ERC20 and all EVM compatible chains (Polygon, AVAX, BSC)</p>
  
        </div>
      </div>


      <footer>
        <div class="p-container-f">
          <p>
            All information and calculations are taken from the official
            <a href="https://dogira.gitbook.io/goobook/"> Goobook </a> of the 
            Gooey P2E game, developed by Dogira on the Polygon blockchain.
          </p>
        </div>
        <div class="img-container-f">
          <div>
            <img on:click="{dogira}" src="/Dogira.png" alt="Dogira">
            <label on:click="{dofi}" for="Dogira">Dogira</label>
          </div>
        </div>
      </footer>

</main>

<style>


/*----------- Donation Area ------------------------------------------------------------------*/

.donation-section {
  display: flex;
  justify-content: center;
}

.donation-section > div {
  display: grid;
	align-items: center;
	margin-bottom: 10px;
	font-size: 15px;
	color: lightblue;
  justify-items: center;
}

.donation-section > div > p {
  color: rgb(77, 77, 77);
}

.donation-section > div > div {
  display: flex;
  justify-content: center;
  align-items: center;
}

.HeaderInfo_userInfoContent__2qbyG {
	display: flex;
	align-items: center;
	margin-bottom: 10px;
	font-size: 15px;
	color: lightblue;
}

.HeaderInfo_addressText__2x_sD {
  font-size: 15px;
  margin: 0px 10px 0px 0px;
  color: hsl(0, 0%, 0%);
}

.HeaderInfo_copyIcon__21b8W {
  margin: 2px 0px 0px 0px;
}

.HeaderInfo_copyIcon__21b8W:hover {
  transform: scale(1.05);
  color: hsl(195, 25%, 77%);
}

.wallet-info {
  align-items: center;
  font-size: 10px;
  font-weight: 400;
  color: lightblue;
  text-shadow: none !important;
}

@media (max-width: 355px) {

  .donation-section > div {
    text-align: center;
    padding: 10px;
    font-size: 12px;
  }

  .HeaderInfo_userInfoContent__2qbyG {
    font-size: 12px;
  }

  .HeaderInfo_addressText__2x_sD {
    font-size: 12px;
    margin: 0px 10px 0px 0px;
  }

  .wallet-info {
    font-size: 8px;
  }
}

/*----------- Donation Area End ------------------------------------------------------------------*/

footer {
  display: grid;
  justify-content: center;
  background-color: #000000;
  text-align: center;
  padding: 25px;
}

.p-container-f {
  max-width: 500px;
  margin-bottom: 25px;
}

footer > div > p {
  font-size: 12px;
  font-weight: 400;
  text-shadow: none;
  color: rgba(255, 255, 255, 0.777);
}

footer > div > p > a {
  color: rgba(117, 240, 240, 0.777);
}

.img-container-f > div {
  display: grid;
  justify-content: center;
  font-size: 17px;
  font-weight: 400;
  text-shadow: none;
  color: rgba(255, 255, 255, 0.777);
}

.img-container-f > div > label:hover {
  cursor: pointer;
  transform: scale(1.1);
}

.img-container-f > div > img {
  height: 120px;
  width: 120px;
  transition: transform 0.5s;
}

.img-container-f > div > img:hover {
  transform: rotate(360deg);
  cursor: pointer;
}


@media (min-width: 100px) and (max-width: 299px) {

  footer {
    padding: 10px 0px;
  }

  .p-container-f {
    max-width: 150px;
  }

  .img-container-f > div > img {
    height: 70px;
    width: 70px;
    transition: transform 0.5s;
  }
}

@media (min-width: 300px) and (max-width: 500px) {

    footer {
      text-align: center;
      padding: 10px;
    }

}

</style>
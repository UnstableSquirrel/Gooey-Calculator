
<script>

	//import {flip} from 'svelte/animate'

    import { draggable } from '@neodrag/svelte'
    //import type { DragOptions } from '@neodrag/svelte'
	
	let fruits = [
            {id: 1, name: "Apple", hours: 7, days: 0.25, price: 3000, src: "/apple.png", extra_tumbles: 0, quantity: 0},
            {id: 2, name: "Orange", hours: 10, days: 0.41, price: 4000, src: "/orange.png", extra_tumbles: 0, quantity: 0},
            {id: 3, name: "Banana", hours: 12, days: 0.5, price: 4800, src: "/nexus.png", extra_tumbles: 0, quantity: 0},
            {id: 4, name: "Strawberry", hours: 20, days: 0.83, price: 6500, src: "/nexus.png", extra_tumbles: 0, quantity: 0},
            {id: 5, name: "Cherry", hours: 27, days: 1.12, price: 10000, src: "/nexus.png", extra_tumbles: 0, quantity: 0},
            {id: 6, name: "Pineapple", hours: 55, days: 2.3, price: 20000, src: "/nexus.png", extra_tumbles: 0, quantity: 0},
            {id: 7, name: "Coconut", hours: 75, days: 3.12, price: 27000, src: "/nexus.png", extra_tumbles: 0, quantity: 0},
            {id: 8, name: "Foxtail Fruit", hours: 125, days: 5.2, price: 45000, src: "/nexus.png", extra_tumbles: 0, quantity: 0},
            {id: 9, name: "Pancake Squash", hours: 155, days: 6.45, price: 56000, src: "/nexus.png", extra_tumbles: 0, quantity: 0},
            {id: 10, name: "Devil's Pomegranate", hours: 220, days: 9.1, price: 800000, src: "/nexus.png", extra_tumbles: 1, quantity: 0},
            {id: 11, name: "Moondrop Fruit", hours: 330, days: 13.75, price: 1550000 , src: "/nexus.png", extra_tumbles: 2, quantity: 0},
            /*{id: 12, name: "Recovery Drop", days: 0, price: 1000, src: "/", quantity: 0}*/
    ]

  // for drag and drop => use:draggable

    //let empty = ""
    
    let goo = []

    let arDays = []
    let arHours = []
    let arCost = []
    let arTumbles = []

    let cost = 0
    let days = 0
    let hours = 0
    let extraTumbles = 0

       function check() {

        goo = fruits.filter(fruit => fruit.quantity >= 1)

        arDays = fruits.filter(fruit => fruit.quantity >= 1)
            function calcDays(x,i) {
                goo[i] = x.quantity * x.days
                let total = 0
                for (let i in goo) {
                    total += goo[i]
                }
                if (total > 0) {
                    days = Math.round(total) //parseInt(total.toFixed(4))
                }
                else {
                    days = 0
                }
                //console.log("Total Days: " + days)
            }

            arHours = fruits.filter(fruit => fruit.quantity >= 1)
            function calcHours(x,i) {
                arHours[i] = x.quantity * x.hours
                let total2 = 0
                for (let i in arHours) {
                    total2 += arHours[i]
                }
                if (total2 > 0) {
                    hours = total2.toLocaleString('en-US')
                }
                else {
                    hours = 0
                }
                //console.log("Total Hours: " + hours)
            }

            arCost = fruits.filter(fruit => fruit.quantity >= 1)
            function calcCost(x,i) {
                arCost[i] = x.quantity * x.price
                let total3 = 0
                for (let i in arCost) {
                    total3 += arCost[i]
                }
                if (total3 > 0) {
                    //let t = total3.toLocaleString('en-US')
                    cost = total3.toLocaleString('en-US')
                    //cost.toLocaleString('en-US')
                }
                else {
                    cost = 0
                }
                //console.log("Total Cost: " + cost.toLocaleString('en-US'))
            }

            arTumbles = fruits.filter(fruit => fruit.quantity >= 1)
            function calcTumbles(x,i) {
                arTumbles[i] =  x.quantity * x.extra_tumbles
                let total4 = 0
                for (let i in arTumbles) {
                    total4 += arTumbles[i]
                }
                if (total4 > 0) {
                    extraTumbles = total4.toLocaleString('en-US')
                }
                else {
                    extraTumbles = 0
                }
                //console.log("Total Extra Tumbles: " + extraTumbles)
            }

            arDays.forEach(calcDays)
            arHours.forEach(calcHours)
            arCost.forEach(calcCost)
            arTumbles.forEach(calcTumbles)
       }
       
let gooeyA = 0
let gooeyB = 0

let gooPrice = 0

function calcTumbleCost() {
  if (gooeyA + gooeyB > 7) {
    gooPrice = ((300000 + (250000 * gooeyA) + (250000 * gooeyB)) * 3).toLocaleString('en-US')
  }
  if (gooeyA + gooeyB <= 7) {
    gooPrice = (300000 + (250000 * gooeyA) + (250000 * gooeyB)).toLocaleString('en-US')
  }
}


function selectContent (event) {
        event.target.select();
    }

function dofi() {
  window.location.href = "http://dogira.finance";
}

function dogira() {
  window.location.href = "http://dogira.net";
}
       
	

</script>

<main>

    <h1>Goo Calculator</h1>

        <div class="container">

            <div class="c1">

                <div>
                    <div class="results">
                        <p>Fruit store in days: <span>{days}</span></p>
                        <p>Fruit store in hours: <span>{hours}</span></p>
                        <p>Extra tumbles: <span>{extraTumbles}</span></p>
                        <p>Total cost: <span>{cost}</span> $GOO</p>
                    </div>

                    <div>
                        <img src="/Gooball.png" alt="Gooball">
                    </div>
                </div>

            </div>

            <div class="2col">
            <div class="c2">
                <div>
                    {#each fruits as fruit (fruit.id)}
                    <div class="fruit-container">
                        <img src="{fruit.src}" alt="Fruit Pic">
                        <label for="quantity">{fruit.name}
                            <input on:focus="{event => selectContent(event)}" bind:value="{fruit.quantity}" type="number" min="0" max="99">
                        </label> 
                    </div>
                    {/each}
                    <div class="button-container">
                      <button on:click="{check}" class="button-36">Calculate</button>
                    </div>
                </div>
            </div>
            <div class="text1">
                <p>- Fruits can be earned in the game or can be purchased from the market</p>
                <p>- Fruits increase your Gooey's Food Store, and Nexus</p>
                <p>- Rare fruits can grant a Gooey additional tumbles</p>
                <p>- Rare fruits can also grant a Gooey a bonus multiplier to any future tumbles</p>
                <p>- Your Gooey's Food Store will deplete at a rate of 0.5 per second (also account 
                  for the Polygon block time)</p>
                <p>- If Gooey's Food Store is below zero they will lose Nexus at a rapid speed, 
                  depleting to zero in less than a day</p> 
                <p>- Your Gooey's Nexus stat is capped at 10,000, and applies a multiplier to all new tumbles</p> 
                <p>- Low Nexus means weaker Gooey offspring</p>
                <p>- Your Gooey must have a sufficient Food Store for the length of any quests before embarking</p>
            </div>

            <div class="c3">
                <h1>Calculate your tumbling cost</h1>
                <div>
                    <img src="/goo2.png" alt="Gooeys">
                </div>
                <div>
                    <label for="quantity">Gooey A number of tumbles</label>
                    <div>
                      <input on:focus="{event => selectContent(event)}" bind:value="{gooeyA}" type="number" min="0" max="99">
                    </div>
                </div>
                <div>
                    <label for="quantity">Gooey B number of tumbles</label>
                    <div>
                      <input on:focus="{event => selectContent(event)}" bind:value="{gooeyB}" type="number" min="0" max="99">
                    </div>
                </div>
                <div class="tumbling-price-container">
                  <label for="quantity">Your tumbling costs:</label>
                  <p><span>{gooPrice}</span> $GOO</p>
                </div>
                  <button on:click="{calcTumbleCost}" class="button-36">Calculate</button>

                  <div class="text2">
                    <p>- The tumbling base fee is 300,000 $GOO</p>
                    <p>- You pay an additional 250,000 $GOO per Gooey tumbled to date by both parent Gooeys</p>
                    <p>- If both Gooeys combined have tumbled more than 7 times, your total tumbling cost 
                      increases by 3x</p>
                  </div>
            </div>

        </div>
    </div>

    <footer>
      <div class="p-container-f">
        <p>
          All information and calculations are taken from the Goobook of the official 
          Gooey p2e game, developed by Dogira on the Polygon blockchain, and can be viewed
          <a href="https://dogira.gitbook.io/goobook/"> here.</a>
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
    
:global(body) {
    margin: 0px;
    padding: 0px;
    font-family: Bangers, Helvetica, Arial, Lucida, sans-serif;
    background: linear-gradient(45deg,  rgba(66, 183, 245,0.8) 0%,rgba(66, 245, 189,0.4) 100%);
    color: rgba(86, 86, 86, 0.777);
    text-shadow: 1px 1px 5px rgba(255, 255, 255, 0.533);
    font-size: 22px;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

h1 {
  text-align: center;
  padding: 20px 0;
  font-stretch: ultra-expanded !important;
  color: black;
  text-shadow: 2px 2px 15px rgb(255, 255, 255);
}

span {
    font-weight: 500;
    color: black;
}

.container{
  max-width: 1200px;
  margin: 0px auto;
  padding: 0;
}

div {
  margin: 0;
  padding: 0;
}






.c1 {
  display: flex;
  padding: 0px !important;
  margin: 0px 0px 25px 0px;
  width: 100%;
  justify-content: center;
  text-align: center !important;
}

.results > {
  display: flex;
  justify-self: start;
  align-content: left;
  z-index: 2;
}

.c1 > div {
  display: flex;
  justify-content: center;
  padding: 0px 0px;
  margin: 0px !important;
  width: 100%;
  text-align: left;
}

.c1 > div > div > img {
    width: 240px;
    height: 190px;
}

.c2 {
  display: grid;
  grid-template-columns: auto;
  width: 100%;
  text-align: center;
  padding: 0px 0;
  margin: 0px;
}

.c2 > div {
    display: grid;
    grid-template-columns: auto auto auto auto;
}

.text1 {
    padding: 20px;
}

.button-container {
  display: flex !important;
  justify-content: center !important;
  align-items: center !important;
}



 /*----------------------------------------------------*/
@media only screen and (min-width: 838px) and (max-width: 1100px) {

    .c2 > div {
        display: grid;
        grid-template-columns: auto auto auto;
    }

}

@media only screen and (min-width: 568px) and (max-width: 837px) {

    .c2 > div {
        display: grid;
        grid-template-columns: auto auto;
    }

}

@media only screen and (min-width: 210px) and (max-width: 567px) {

    .c1 > div > div > img {
      width: 100px;
      height: 70px;
      opacity: 0.2;
      display: none;
    }

    .c2 > div {
        display: grid;
        grid-template-columns: auto;
    }
}

@media only screen and (min-width: 10px) and (max-width: 290px) {

    .c1 > div > div > img {
      width: 100px;
      height: 70px;
      opacity: 0.2;
      display: none;
    }

    .c3 {
      margin: 0px;
    }

    .c3 > h1 {
      width: 270px;
    }

    .c3 > div > img {
      width: 200px !important;
      height: 120px !important;
    }

}
/*----------------------------------------------------------------*/





.fruit-container {
    display: flex;
    justify-content: left;
    align-items: left;
    background: #ffc4661a;
    grid-template-columns: auto ;
    margin: 20px 50px 20px 50px;
    border-radius: 35px;
}

.fruit-container > img {
    display: flex;
    width: 50px;
    height: 50px;
    justify-content: center;
    align-items: center;
    background: #ffc4661a;
    margin: 5px;
    border-radius: 35px;
} 

.fruit-container > label {
    display: grid;
    justify-content: center;
    margin: 10px;
    color: black;
    font-weight: 500;
}

.fruit-container > label > input {
    display: flex;
    justify-content: ceter;
    text-align: center;
    width: 50px;
    height: 15px;
    padding: 5px;
    font-size: 20px;
    margin: 10px;
    border-radius: 4px;
}





/*-------------- Button ------------------------------------------*/

.button-36:nth-child(1) {
  padding: 10px 35px ;
}

.button-36 {
  background-image: linear-gradient(92.88deg, #455EB5 9.16%, #5643CC 43.89%, #673FD7 64.72%);
  border-radius: 8px;
  border-style: none;
  box-sizing: border-box;
  color: #FFFFFF;
  cursor: pointer;
  flex-shrink: 0;
  font-family: "Inter UI","SF Pro Display",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen,Ubuntu,Cantarell,"Open Sans","Helvetica Neue",sans-serif;
  font-size: 25px;
  font-weight: 700;
  height: 4rem;
  padding: 10px;
  text-align: center;
  text-shadow: rgba(0, 0, 0, 0.25) 0 3px 8px;
  transition: all .5s;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  margin: 10px 40px;
}

.button-36:hover {
  box-shadow: rgba(80, 63, 205, 0.5) 0 1px 30px;
  transition-duration: .1s;
}

.button-36:active {
  box-shadow: rgba(131, 122, 196, 0.5) 0 1px 30px;
  transition-duration: .1s;
  transform: scale(0.97);
}

@media (min-width: 768px) {
  .button-36 {
    padding: 0 2.6rem;
  }
}

/*-------------- Button End --------------------------------------*/










.c3 {
  display: grid !important;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 0px 0px 100px 0px;
  background-color: #7ed9a722;  
  margin: 0px !important;
  border-radius: 25px;
}

.c3 > div {
    display: grid;
    justify-content: center;
    margin: 0px 0px 25px 0px;
}

.c3 > div > label {
    margin-bottom: 20px;
}

.c3 > div > img {
    width: 300px;
    height: 180px;
    margin: 0px 0px 50px 0px;
}

.tumbling-price-container {
    padding-top: 35px;
}

.tumbling-price-container > label {
    margin: 0px;
}


.c3 input {
    display: flex;
    justify-content: center !important;
    text-align: center;
    width: 50px;
    height: 15px;
    padding: 5px;
    font-size: 20px;
    margin: 10px;
    border-radius: 4px
}

.c3 > div > div {
  display: flex;
  justify-content: center;
}

.text2 {
  margin-top: 50px !important;
  padding: 20px;
  text-align: left;
}

footer {
  display: grid;
  justify-content: center;
  background-color: #000000;
  text-align: center;
  padding: 25px;
}

.p-container-f {
  max-width: 500px;
}

footer > div > p {
  font-size: 12px;
  font-weight: 400;
  text-shadow: none;
  color: rgba(255, 255, 255, 0.777);
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

@media only screen and (max-width: 660px) {
  .c2 {
    width: 100%;
  }
  .c3 {
    width: 100%;
  }
}

</style>

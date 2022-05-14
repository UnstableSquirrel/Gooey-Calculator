<script>

// @ts-ignore
import {store} from "./stores/usage.js";
import Menu from "./comps/menu.svelte";
import Footer from "./comps/footer.svelte";
import { onMount } from "svelte";
import axios from "axios";

const endpoint = "https://api.dexscreener.com/latest/dex/tokens/0x6F3Cc27E17a0f2e52D8e7693FF0d892Cea1854bF"

let posts 

$: onMount(async function () {
  try {
    const response = await axios.get(endpoint)
    console.log(response.data)
    posts = response.data.pairs[0].priceUsd
    console.log(posts)
  } catch (error) {
    console.error(error)
  }
})

	let fruits = [
            {
              id: 1, 
              name: "Apple",
              hours: 7, 
              days: 0.25, 
              price: 3000, 
              src: "/apple.png",
              nexus_bonus: 0, 
              tumble_stat_bonus: 0,  
              extra_tumbles: 0, 
              rank: 0, 
              ratio: 0, 
              quantity: 0
            },

            {
              id: 2, 
              name: "Orange", 
              hours: 10, 
              days: 0.41, 
              price: 4000, 
              src: "/orange.png",
              nexus_bonus: 0, 
              tumble_stat_bonus: 0,  
              extra_tumbles: 0, 
              rank: 0, 
              ratio: 0, 
              quantity: 0
            },

            {
              id: 3, 
              name: "Banana", 
              hours: 12,
              days: 0.50, 
              price: 4800, 
              src: "/banana.jpg",
              nexus_bonus: 0, 
              tumble_stat_bonus: 0,  
              extra_tumbles: 0, 
              rank: 0, 
              ratio: 0, 
              quantity: 0
            },

            {
              id: 4, 
              name: "Strawberry", 
              hours: 20, 
              days: 0.83, 
              price: 7300, 
              src: "/strawberry.jpg",
              nexus_bonus: 0, 
              tumble_stat_bonus: 0,  
              extra_tumbles: 0, 
              rank: 0, 
              ratio: 0, 
              quantity: 0
            },

            {
              id: 5, 
              name: "Cherry", 
              hours: 27, 
              days: 1.12, 
              price: 10000, 
              src: "/cherry.jpg",
              nexus_bonus: 0, 
              tumble_stat_bonus: 0,  
              extra_tumbles: 0, 
              rank: 0, 
              ratio: 0, 
              quantity: 0
            },

            {
              id: 6, 
              name: "Pineapple", 
              hours: 55, 
              days: 2.29, 
              price: 20000, 
              src: "/pineapple.jpg",
              nexus_bonus: 1, 
              tumble_stat_bonus: 2,  
              extra_tumbles: 0, 
              rank: 0, 
              ratio: 0, 
              quantity: 0
            },

            {
              id: 7, 
              name: "Coconut", 
              hours: 75, 
              days: 3.12, 
              price: 27500, 
              src: "/coconut.jpg",
              nexus_bonus: 2, 
              tumble_stat_bonus: 2,  
              extra_tumbles: 0, 
              rank: 0, 
              ratio: 0, 
              quantity: 0
            },

            {
              id: 8, 
              name: "Foxtail Fruit", 
              hours: 125, 
              days: 5.20, 
              price: 45000, 
              src: "/foxtail.jpg",
              nexus_bonus: 4, 
              tumble_stat_bonus: 3,  
              extra_tumbles: 0, 
              rank: 0, 
              ratio: 0, 
              quantity: 0
            },

            {
              id: 9, 
              name: "Pancake Squash", 
              hours: 155, 
              days: 6.45, 
              price: 54000, 
              src: "/pancake.jpg",
              nexus_bonus: 5, 
              tumble_stat_bonus: 3, 
              extra_tumbles: 0, 
              rank: 0, 
              ratio: 0, 
              quantity: 0
            },

            {
              id: 10, 
              name: "Devil's Pomegranate", 
              hours: 220, 
              days: 9.16, 
              price: 800000, 
              src: "/devil.jpg",
              nexus_bonus: 50, 
              tumble_stat_bonus: 4, 
              extra_tumbles: 1, 
              rank: 0, 
              ratio: 0, 
              quantity: 0
            },

            {
              id: 11, 
              name: "Moondrop Fruit", 
              hours: 330, 
              days: 13.75, 
              price: 1550000, 
              src: "/moondrop.jpg",
              nexus_bonus: 100, 
              tumble_stat_bonus: 6,
              extra_tumbles: 2, 
              rank: 0, 
              ratio: 0, 
              quantity: 0
            },

            /*{id: 12, name: "Recovery Drop", days: 0, price: 1000, src: "/", quantity: 0}*/
    ]

//
//
//////////////////////// Fruit Calculator//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    
    let goo = []

    let arDays = []
    let arHours = []
    let arCost = []
    let arNexus = []
    let arTumbles = []

    let cost = 0
    let days = 0
    let hours = 0
    let nexusBonus = 0
    let bonusStats = 0
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
                    // @ts-ignore
                    // @ts-ignore
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
                    // @ts-ignore
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
                    // @ts-ignore
                    extraTumbles = total4.toLocaleString('en-US')
                }
                else {
                    extraTumbles = 0
                }
                //console.log("Total Extra Tumbles: " + extraTumbles)
            }

            arNexus = fruits.filter(fruit => fruit.quantity >= 1)
            function calcNexus(x,i) {
                arNexus[i] =  x.quantity * x.nexus_bonus
                let total5 = 0
                for (let i in arNexus) {
                    total5 += arNexus[i]
                }
                if (total5 > 0) {
                    // @ts-ignore
                    nexusBonus = total5.toLocaleString('en-US')
                }
                else {
                    nexusBonus = 0
                }
                //console.log("Total Extra Tumbles: " + extraTumbles)
            }


            let unsortedStats = fruits.filter(fruit => fruit.quantity >= 1)
            let sortedStats = []

            if (sortedStats.length <= 1) {
              sortedStats = fruits.filter(fruit => fruit.quantity >= 1)
            }

            unsortedStats.sort(function sortStats(a, b) {
                sortedStats = unsortedStats
                return b.tumble_stat_bonus-a.tumble_stat_bonus 
            })

            bonusStats = sortedStats[0].tumble_stat_bonus

            //console.log(unsortedStats)

            arDays.forEach(calcDays)
            arHours.forEach(calcHours)
            arCost.forEach(calcCost)
            arNexus.forEach(calcNexus)
            arTumbles.forEach(calcTumbles)
       }

//////////////////////// Fruit Calculator End ////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//
//////////////////////// Sort Fruits //////////////////////////////////////////////////////////////////////////////////////////////////////////////////

      let unsortedFruits = fruits.filter(fruit => fruit.quantity >= 0)
      let sortedFruits = []

      unsortedFruits.forEach((unsortedFruits) => {
        unsortedFruits.ratio = Math.round(unsortedFruits.price / unsortedFruits.hours)
      })

      unsortedFruits.sort(function(a, b) {
        sortedFruits = unsortedFruits
        return a.ratio - b.ratio
      })

      for (let [index] of sortedFruits.entries()) {
        sortedFruits.forEach((sortedFruits) => {
          sortedFruits.rank = index++ + 1 - 10
        })
      }

//////////////////////// Sort Fruits End /////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//
/////////////////// ////////////// Tumbling Costs /////////////////////////////////////////////////////////////////////////////////////////////////       
      let gooeyA = 0
      let gooeyB = 0

      let gooPrice = 0

      function calcTumbleCost() {
        if (gooeyA + gooeyB > 7) {
          // @ts-ignore
          gooPrice = ((300000 + (250000 * gooeyA) + (250000 * gooeyB)) * 3).toLocaleString('en-US')
        }
        if (gooeyA + gooeyB <= 7) {
          // @ts-ignore
          gooPrice = (300000 + (250000 * gooeyA) + (250000 * gooeyB)).toLocaleString('en-US')
        }
      }

      let previousGooA = gooeyA
      let previousGooB = gooeyB

      function validator1(node, value) {
        return {
          update(value) {
            gooeyA = value === null || gooeyA < node.min ? previousGooA : parseInt(value)
            previousGooA = gooeyA
          }
        }
      }

      function validator2(node, value) {
        return {
          update(value) {
            gooeyB = value === null || gooeyB < node.min ? previousGooB : parseInt(value)
            previousGooB = gooeyB
          }
        }
      }

///////////////////////////////// Tumbling Costs End //////////////////////////////////////////////////////////////////////////////////////////////
//
//
/////////////// Select Input /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

      function selectContent (event) {
              event.target.select();
          }

/////////////// Select Input End /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//
////////////// Refresh /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function refresh() {
  fruits.forEach((fruits) => {
    fruits.quantity = 0
  })
  cost = 0
  days = 0
  hours = 0
  nexusBonus = 0
  bonusStats = 0
  extraTumbles = 0
}

let n = fruits
let previousN = n

function validator0(node, value) {
        return {
          update(value) {
            n.forEach((n) => {
              n.quantity = value === null || gooeyA < node.min ? previousGooA : parseInt(value)
            })
            previousN = n
          }
        }
}

////////////// Refresh End /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
////////////// Add Gooey /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

let gooeyNumber = 0
let nexus = 1000
let generation = 0
let tumbleBonus = 0

let health = 100
let attack = 100
let defense = 100
let speed = 100

export let addedGooeys = []

store.subscribe(data => {
    addedGooeys = data
  })

function addGooey() {

  let totalStrength = health + attack + defense + speed

  let add = 
    {
    Number : gooeyNumber,
    Nexus : nexus, 
    Gen : generation,
    Tumble_Bonus : tumbleBonus,
    Health : health, 
    Attack : attack,
    Defense : defense,
    Speed : speed,
    Strength : totalStrength
  }

  addedGooeys.push(add)
  addedGooeys = addedGooeys

  gooeyNumber = 0
  nexus = 1000
  tumbleBonus = 0

  health = 100
  attack = 100
  defense = 100
  speed = 100
  totalStrength = 0

  store.update(data => {
      return data = addedGooeys
    })
}

$: validateHDS = function validateInput1() {
    if(health < 100 || health > 600) {
      health = 100
    }
    if(defense < 100 || defense > 600){
      defense = 100
    }
    if(speed < 100 || speed > 600) {
      speed = 100
    }
   }

$: validateATT = function validateInput2() {
    if(attack < 100 || attack > 400) {
      attack = 100
    }
   }

$: validateNEX = function validateInput3() {
    if(nexus < 1000 || nexus > 2500) {
      nexus = 1000
    }
   }

$: validateTSB = function validateInput4() {
    if(tumbleBonus < 0 || tumbleBonus > 6) {
      tumbleBonus = 0
    }
   }

$: validateGEN = function validateInput5() {
    if(generation < 0 || generation > 6) {
      generation = 0
    }
   }

   $: validateNUMBER = function validateInput6() {
    if(gooeyNumber < 0) {
      gooeyNumber = 0
    }
   }

////////////// Delete Gooey /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

let nrToDelete = 0
let disabledText

$: if (addedGooeys.length == 0) {
    disabledText = "disabled"
    }
  else {
    disabledText = ""
  }

  function deleteGooey() {
    if (addedGooeys.length > 0) {
      let checkAdded = addedGooeys.filter(a => a.Number !== nrToDelete)
      addedGooeys = checkAdded
    }
    store.update(data => {
        return data = addedGooeys
      })
  }

////////////// Delete Gooey End /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
////////////// Modals /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

let shown = false

function show() {
    shown = true
}

function hide() {
    shown = false
}

let shown2 = false

function show2() {
    shown2 = true
}

function hide2() {
    shown2 = false
}

////////////// Modals End ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
////////////// Calculate Tumbling Stats /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

let gooeyANumber 

let gooeyBNumber

/*$: validateGooeyNumberA = function validateInput6() {
  let arCheck = addedGooeys.filter(a => a.Number == gooeyANumber)
    if(arCheck.length == 0) {
      gooeyANumber = 0
    }
   }

$: validateGooeyNumberB = function validateInput7() {
  let arCheck = addedGooeys.filter(b => b.Number == gooeyBNumber)
    if(arCheck.length == 0) {
      gooeyBNumber = 0
    }
   }*/

let gooeysMinStrength
let gooeysMaxStrength

let gooeyANexus
let gooeyBNexus

let gooeysMinGen

let gooeyAFoodBonus
let gooeyBFoodBonus

let minStats = 0
let maxStats = 0
let randomStats = 0

let min = 0
let max = 0

let arA
let arB


function calculateTumbleStats() {

  //Check the input value for doubles
  if (gooeyANumber == gooeyBNumber) {
    return alert("Gooeys can't tumble themselves, Goomer!")
  }

  //Get Object Stats of Gooey A
  arA = addedGooeys.filter(a => a.Number == gooeyANumber)
  //Get Object Stats of Gooey B
  arB = addedGooeys.filter(a => a.Number == gooeyBNumber)

  //Merge array of Gooey A && B into an object array
  let arC = [...arA, ...arB]

  //Object to capture the lowest gen Gooey
  let ascGen = [...arC]

  //Ascending Sort
    ascGen.sort(function(a, b) {
        return a.Gen - b.Gen
  })

  gooeysMinGen = ascGen[0].Gen

  //Calc Gen Atk bonus of the lowest gen Gooey 
  gooeysMinGen = ascGen[0].Gen + 1


  //Add Gen bonuses to Atk, Def, Hp, Spd

  //Atk
  let a = [...arA]
  let b = [...arB]
  let atk1 = ((a[0].Attack / 100) * 2) * gooeysMinGen 
  let atk2 = ((b[0].Attack / 100) * 2) * gooeysMinGen
  //

  //Def
  let c = [...arA]
  let d = [...arB]
  let def1 = (c[0].Defense / 100) * gooeysMinGen
  let def2 = (d[0].Defense / 100) * gooeysMinGen
  //

  //Hp
  let e = [...arA]
  let f = [...arB]
  let hp1 = (e[0].Health / 100) * gooeysMinGen
  let hp2 = (f[0].Health / 100) * gooeysMinGen
  //

  //Spd
  let g = [...arA]
  let h = [...arB]
  let spd1 = (g[0].Speed / 100) * gooeysMinGen
  let spd2 = (h[0].Speed / 100) * gooeysMinGen
  //


  //Sort the merged object array by descending and ascending Strength and get the first value from both for max/min 
  let desC = [...arC]
  let asC = [...arC]

  //Ascending Sort
  asC.sort(function(a, b) {
        return a.Strength - b.Strength
  })

  gooeysMinStrength = asC[0].Strength
  gooeysMinStrength += atk1 + atk2 + def1 + def2 + hp1 + hp2 + spd1 + spd2


  //Descending Sort
  desC.sort(function(a, b) {
        return b.Strength - a.Strength
  })

  gooeysMaxStrength = desC[0].Strength
  gooeysMaxStrength += atk1 + atk2 + def1 + def2 + hp1 + hp2 + spd1 + spd2

  //Get Nexus value of both Gooeys
  gooeyANexus = arA[0].Nexus
  gooeyBNexus = arB[0].Nexus

  //Get food bonus from both gooeys as decimal number
  gooeyAFoodBonus = (arA[0].Tumble_Bonus / 100) + 0.00
  gooeyBFoodBonus = (arB[0].Tumble_Bonus / 100) + 0.00

  //Calc total Nexus value, food bonus and min/max mutation 
  let totalNexus = gooeyANexus + gooeyBNexus
  let totalFoodBonus = gooeyAFoodBonus + gooeyBFoodBonus
  let minimumMutation = 0.97
  let maximumMutation = 1.05 + (totalNexus / 4000) + totalFoodBonus

  //Calc min/max stats in decimal number
  minStats = (minimumMutation * gooeysMinStrength)
  maxStats = (maximumMutation * gooeysMaxStrength)

  //Convert decimal value of min/max to whole numbers
  min = Math.floor(minStats)
  max = Math.floor(maxStats)


  //Random decimal number
  let randomBonus = (Math.random() * (maximumMutation - minimumMutation) + minimumMutation).toFixed(2)

  let sortAtk = [...arC]
  let sortHp = [...arC]
  let sortDef = [...arC]
  let sortSpd = [...arC]

  //Ascending Sort Atk
  sortAtk.sort(function(a, b) {
      return a.Attack - b.Attack
  })
  let minAtk = sortAtk[0].Attack
  let maxAtk = sortAtk[1].Attack


  //Ascending Sort Hp
  sortHp.sort(function(a, b) {
      return a.Health - b.Health
  })
  let minHp = sortHp[0].Health
  let maxHp = sortHp[1].Health


  //Ascending Sort Def
  sortDef.sort(function(a, b) {
      return a.Defense - b.Defense
  })
  let minDef = sortDef[0].Defense
  let maxDef = sortDef[1].Defense


  //Ascending Sort Spd
  sortSpd.sort(function(a, b) {
      return a.Speed - b.Speed
  })
  let minSpd = sortSpd[0].Speed
  let maxSpd = sortSpd[1].Speed

  //Calc all the random numbers from the min/max ranges of each trait and add the Gen bonus to the
  let randomAtkWithoutBonus = (Math.random() * (maxAtk - minAtk) + minAtk)
  let randomAtk = randomAtkWithoutBonus + (randomAtkWithoutBonus / 100 * gooeysMinGen)
  let randomHp = (Math.random() * (maxHp - minHp) + minHp)
  let randomDef = (Math.random() * (maxDef - minDef) + minDef)
  let randomSpd = (Math.random() * (maxSpd - minSpd) + minSpd)

  //Calc the total random stats
  // @ts-ignore
  randomStats = Math.floor((randomAtk + randomHp + randomDef + randomSpd) * randomBonus)

  //Get random value => ranging from min mutation value to max mutation value
  /*function randomInt(mi, ma) { 
    return Math.floor(Math.random() * (ma - mi + 1) + mi)
  }
  
  randomStats = randomInt(min, max)*/

/*  console.log("randomATK without bonus: " + randomAtkWithoutBonus)
  console.log("randomATK: " + randomAtk)
  console.log("randomHP: " + randomHp)
  console.log("randomDEF: " + randomDef)
  console.log("randomSPD: " + randomSpd)
  console.log("randomBonus: " + randomBonus)

  console.log("TotalFoodBonus: " + totalFoodBonus)
  console.log("TotalNexus: " + totalNexus)

  console.log("MinStaT: " + gooeysMinStrength)
  console.log("MaxStaT: " + gooeysMaxStrength)
*/

// console.log(gooeysMinStrength)
// console.log(gooeysMaxStrength)
// console.log(maximumMutation)

  if (min > 99999) {
      min = 99999
  } 

  if (max > 99999) {
      max = 99999
  }    

  if (randomStats > 99999) {
    randomStats = 99999
  } 

}

////////////// Calculate Tumbling Stats End ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// if (addedGooeys.length == 0) {
//   gooeyANumber = 0
//   gooeyBNumber = 0
// }


////////// Quests ///////////////////////////////////////////////////////////////////////////////////////////////

let Quests = 
[
  {
    Quest: "Common Quest",
    Hours: 10,
    Difficulty: 1800,
    Goo1: 7650, 
    Goo2: 9072,
    Fruit1: 0,
    Fruit2: 1, 
  },

  {
    Quest: "Uncommon Quest",
    Hours: 18,
    Difficulty: 2400,
    Goo1: 19008, 
    Goo2: 22464,
    Fruit1: 0,
    Fruit2: 2, 
  },

  {
    Quest: "Rare Quest",
    Hours: 36,
    Difficulty: 2800,
    Goo1: 51744, 
    Goo2: 65856,
    Fruit1: 1,
    Fruit2: 2, 
  },

  {
    Quest: "Epic Quest",
    Hours: 60,
    Difficulty: 3300,
    Goo1: 114048, 
    Goo2: 142560,
    Fruit1: 1,
    Fruit2: 3, 
  },

  {
    Quest: "Legendary Quest",
    Hours: 72,
    Difficulty: 3600,
    Goo1: 141120, 
    Goo2: 211680,
    Fruit1: 2,
    Fruit2: 4, 
  },

  {
    Quest: "Mythical Quest",
    Hours: 120,
    Difficulty: 4300,
    Goo1: 328692, 
    Goo2: 455112,
    Fruit1: 4,
    Fruit2: 8, 
  }
]


////////// Quests End ///////////////////////////////////////////////////////////////////////////////////////////////

</script>









<main>

  <Menu />

    <div style="display:flex; justify-content:center">
      <p style="text-align:center">GOO Price: 
        <br>
        <span>${posts}</span>
      </p>
    </div>

    <h1>Goo Calculator</h1>










        <div class="container">

            <div class="c1">

                <div>
                    <div class="results">
                        <p>Fruit store in days: <span>{days}</span></p>
                        <p>Fruit store in hours: <span>{hours}</span></p>
                        <p>Nexus Bonus: <span>{nexusBonus}</span></p>
                        <p>Tumble Stat Bonus: <span>{bonusStats}</span>%</p>
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
                        <label for="quantity">{fruit.name}
                            <input on:focus="{event => selectContent(event)}" bind:value="{fruit.quantity}" type="number" min="0" max="999">
                            <div class="bonus-container">
                              <p>Nexus Bonus: <span>{fruit.nexus_bonus}</span></p>
                              <p>Tumble Stat Bonus: <span>{fruit.tumble_stat_bonus}</span>%</p>
                              <p>Extra Tumbles: <span>{fruit.extra_tumbles}</span></p>
                              <p>Price: <span>{fruit.price.toLocaleString('en-US')}</span>$GOO</p>
                            </div>
                        </label> 
                        <div class="img-container">
                          <img src="{fruit.src}" alt="Fruit Pic">
                        </div>
                    </div>
                    {/each}
                    <div class="button-container">
                      <button on:click="{check}" use:validator0={n} class="button-36">Calculate</button>
                      <button on:click={refresh} class="button">Refresh</button>
                    </div>
                </div>
            </div>










            <div id="Best-Deals" class="best-deal-container">
              <div>
                <h2>Get the best deal</h2>
              </div>
              <table>
                  <tr>
                    <th>Rank</th>
                    <th>Fruit</th>
                    <th>Cost</th>
                    <th>Hours</th>
                    <th>Ratio</th>
                  </tr>
                <tbody>
                  {#each sortedFruits as i (i.id)}
                  <tr>
                    <td>#{i.rank}</td>
                    <td>{i.name}</td>
                    <td>{i.price.toLocaleString('en-US')}</td>
                    <td>{i.hours}</td>
                    <td>{i.ratio}</td>
                  </tr>
                  {/each}
                </tbody>
              </table>
            </div>
            <div class="text1">
                <p>- Fruits can be earned in the game or can be purchased from the market</p>
                <p>- Fruits increase your Gooey's Food Store, and Nexus</p>
                <p>- Rare fruits can grant a Gooey additional tumbles</p>
                <p>- Rare fruits can also grant a Gooey a bonus multiplier to any future tumbles</p>
                <p>- Your Gooey's Food Store will deplete at a rate of 0.5 per second (also account 
                  for the Polygon block time)</p>
                <p>- If Gooey's Food Store is below zero they will lose Nexus at a rapid speed, 
                  depleting to 1000 in less than a day</p> 
                <p>- Your Gooey's Nexus stat is capped at 2,500, and applies a multiplier to all new tumbles</p> 
                <p>- Low Nexus means weaker Gooey offspring</p>
                <p>- Your Gooey must have a sufficient Food Store for the length of any quests before embarking</p>
            </div>










            <div id="Questing-Rewards" class="questing-rewards-container">
            
              <div>
                <div>
                  <h1>Questing Rewards</h1>
                </div>
              </div>

              <div>
                {#each Quests as quest}
                <div class="quest">
                  <h4>{quest.Quest} ({quest.Hours}h)</h4>
                  <p>Difficulty:
                    <br>
                    <span>{quest.Difficulty}</span>
                  </p>
                  <p>$GOO Reward:
                    <br>
                    <span>{quest.Goo1} - {quest.Goo2}</span>
                  </p>
                  <p>Fruit Reward:
                    <br>
                    <span>{quest.Fruit1} - {quest.Fruit2}</span>
                  </p>
                  <p>Earn each quest:
                    <br>
                    <span>${(quest.Goo1 * posts).toFixed(2)} - ${(quest.Goo2 * posts).toFixed(2)}</span>
                  </p>
                </div>
                {/each}
              </div>

            </div>











            <div id="Tumbling-Costs" class="c3">
                <h1>Calculate your tumbling cost</h1>
                <div>
                    <img src="/goo2.png" alt="Gooeys">
                </div>
                <div>
                    <label for="quantity">Gooey A number of tumbles</label>
                    <div>
                      <input on:focus="{event => selectContent(event)}" use:validator1={gooeyA} bind:value="{gooeyA}" type="number" min="0" max="99">
                    </div>
                </div>
                <div>
                    <label for="quantity">Gooey B number of tumbles</label>
                    <div>
                      <input on:focus="{event => selectContent(event)}" use:validator2={gooeyB} bind:value="{gooeyB}" type="number" min="0" max="99">
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










    <div id="My-Gooeys" class="gooey-section">

      <h1>Save and Calculate your Stats</h1>

      <div class="my-gooeys">

        <h2>My Gooeys</h2>

        <div class="table-container">
          <table class="gooey-table">
            <thead>
              <tr>
                <th>Gooey #</th>

                <th>Nexus</th>
                <th>Generation</th>
                <th>Tumble Bonus</th>

                <th>Health</th>
                <th>Attack</th>
                <th>Defense</th>
                <th>Speed</th>

                <th>Total Strength</th>
              </tr>
            </thead>
            <tbody id="gooey-table-body">

          <!--{#if addedGooeys.length >= 0}-->
            {#each $store as ai, index (index)}
              <tr>
                <td>{ai.Number}</td>
                <td>{ai.Nexus}</td>
                <td>{ai.Gen}</td>
                <td>{ai.Tumble_Bonus}</td>
                <td>{ai.Health}</td>
                <td>{ai.Attack}</td>
                <td>{ai.Defense}</td>
                <td>{ai.Speed}</td>
                <td>{ai.Strength}</td>
              </tr>
            {/each}
          <!--{/if}-->

            <!-- {#each addedGooeys as added (added.id)}
                <tr>
                  <td>{added.Number}</td>
                  <td>{added.Nexus}</td>
                  <td>{added.Tumble_Bonus}</td>
                  <td>{added.Health}</td>
                  <td>{added.Attack}</td>
                  <td>{added.Defense}</td>
                  <td>{added.Speed}</td>
                  <td>{added.Strength}</td>
                </tr>
              {/each} -->
            </tbody>
          </table>
        </div>
      </div>










      <div class="add-gooey-button-container">
        <button id="add-gooey" on:click="{() => show()}">+</button>
      </div>
      {#if shown}
        <div class="modal-container">
            <div class="modal">
                <div class="close-container">
                    <button class="close" on:click="{() => hide()}">X</button>
                </div>
                <h2>Add Your Gooey</h2>

                <div>

                  <div class="modal-input-container">
                    <div>
                      <label for="GooeyNumber">Gooey <br> Number: </label>
                      <input type="number" on:focus="{event => selectContent(event)}" on:blur="{validateNUMBER}" name="number" bind:value="{gooeyNumber}">
                    </div>
                    <div>
                      <label for="Nexus"><br> Nexus: </label>
                      <input type="number" on:focus="{event => selectContent(event)}" on:blur="{validateNEX}" name="nexus" bind:value="{nexus}">
                    </div>
                    <div>
                      <label for="Gen"> <br> Generation: </label>
                      <input type="number" on:focus="{event => selectContent(event)}" on:blur="{validateGEN}" name="tumble-stat-bonus" bind:value="{generation}">
                    </div>
                    <div>
                      <label for="TumbleBonus">Tumble <br> Stat Bonus: </label>
                      <input type="number" on:focus="{event => selectContent(event)}" on:blur="{validateTSB}" name="tumble-stat-bonus" bind:value="{tumbleBonus}">
                    </div>
                    <div>
                      <label for="Health">Health: </label>
                      <input type="number" on:focus="{event => selectContent(event)}" on:blur="{validateHDS}" name="health" bind:value="{health}">
                    </div>
                    <div>
                      <label for="Attack">Attack: </label>
                      <input type="number" on:focus="{event => selectContent(event)}" on:blur="{validateATT}" name="attack" bind:value="{attack}">
                    </div>
                    <div>
                      <label for="Defense">Defense: </label>
                      <input type="number" on:focus="{event => selectContent(event)}" on:blur="{validateHDS}" name="defense" bind:value="{defense}">
                    </div>
                    <div>
                      <label for="Speed">Speed: </label>
                      <input type="number" on:focus="{event => selectContent(event)}" on:blur="{validateHDS}" name="speed" bind:value="{speed}">
                    </div>
                  </div>

                </div>
                <button class="confirm" on:click="{() => addGooey()}" on:click="{() => hide()}">Add this Gooey</button>
            </div>
        </div>
      {/if}










    <div class="delete-gooey-button-container">
      <button id="delete-gooey" class="{disabledText}" on:click="{() => show2()}">-</button>
    </div>
    {#if shown2}
        <div class="modal-container2">
            <div class="modal2">
                <div class="close-container">
                    <button class="close" on:click="{() => hide2()}">X</button>
                </div>
                <h2>Add the Number of the Gooey you want to delete</h2>
                <div>
                  <div class="modal-input-container">
                    <div class="to-delete-container">
                      <label for="GooeyNumber">Gooey Number: </label>
                      <input type="number" on:focus="{event => selectContent(event)}" name="number" bind:value="{nrToDelete}">
                      <button class="confirm-delete" on:click="{() => deleteGooey()}" on:click="{() => hide2()}">Delete this Gooey</button>
                    </div>
                  </div>
                </div>
            </div>
        </div>
    {/if}










        <div id="Stats-Calculator" class="calc-stats-container">
          <h2>Get your possible stats</h2>
          <div>
              <label for="quantity">Number of Gooey A: </label>
              <div>
                <select bind:value="{gooeyANumber}">
                  {#each addedGooeys as ai, index (index)}
                  <option value={ai.Number}>{ai.Number}</option>
                  {/each}
                </select>
              </div>
              <!--<div>
                <input on:focus="{event => selectContent(event)}" on:blur="{validateGooeyNumberA}" bind:value="{gooeyANumber}" type="number">
              </div>-->
          </div>
          <div>
              <label for="quantity">Number of Gooey B: </label>
              <div>
                <select bind:value="{gooeyBNumber}">
                  {#each addedGooeys as ai, index (index)}
                  <option value={ai.Number}>{ai.Number}</option>
                  {/each}
                </select>
              </div>
              <!--<div>
                <input on:focus="{event => selectContent(event)}" on:blur="{validateGooeyNumberB}" bind:value="{gooeyBNumber}" type="number">
              </div>-->
          </div>

          <div class="calculated-stats-container">
            <label for="calc-stats">Your Possible Offspring Traits: </label>
            <p>Min Offspring Strength: <br><span>{min}</span></p>
            <p>Max Offspring Strength: <br><span>{max}</span></p>
            <p>Random Offspring Strength: <br><span>{randomStats}</span></p>
          </div>
            <button on:click="{calculateTumbleStats}" class="button-36">Calculate</button>

            <div class="text2">
              <p>- Max Offspring Strength (HP, ATK, DEF, SPD) is based off all the stats of both parent Gooeys</p>
              <p>- This includes Nexus points, fruit bonuses, generation of newly tumbled Gooey, and a random mutation multiplier</p>
            </div>
        </div>
    </div>

    <Footer/>

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

.disabled {
  border: 2px solid rgba(153, 153, 153, 0.5) !important;
  background-color: rgba(204, 204, 204, 0.5) !important;
  color: #666666 !important;
  pointer-events: none;
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





.best-deal-container {
  margin: 50px 0px;
  display: grid;
  justify-content: center
}

.best-deal-container > div {
  display: flex;
  justify-content: center
}

table {
  display: grid;
  background: #012B39;
  border-radius: 25px;
  border-collapse: collapse;
  margin: 5px;
  padding: 10px 10px;
}

table {
        display: grid;
        background: #012b39be;
        border-radius: 25px;
        margin: 10px;
        padding: 10px 10px;
        width: 600px;
}

th {
  border-bottom: 1px solid #364043;
  color: #E2B842;
  font-size: 20px;
  font-weight: 500;
  padding: 5px 55px 5px 5px;
  text-align: center;
}

tr > th:nth-child(5) {
  padding: 5px 5px 5px 20px;
}

tbody > tr > td:nth-child(1) {
  text-align: center;
  width: 50px;
}

tbody > tr > td:nth-child(2) {
  width: 105px;
}

tbody > tr > td:nth-child(3) {
  text-align: center;
  width: 90px !important;
}

tbody > tr > td:nth-child(4) {
  text-align: center;
  width: 70px !important;
}

tbody > tr > td:nth-child(5) {
  text-align: center;
  border-right: 0px solid #364043;
}

th {
  border-bottom: 1px solid #364043;
  color: #E2B842;
  font-size: 20px;
  font-weight: 500;
  text-align: center;
}

td {
  font-size: 15px;
  color: #fff;
  font-weight: 400;
  padding: 5px;
  border-right: 1px solid #364043;
}

tr > th:nth-child(5) {
   width: 150px !important;
}

tbody {
  display: table;
}

tbody tr {
  transition: background 0.25s ease;
}

tbody tr:hover {
  background: #014055;
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

.bonus-container {
  text-align: left;
}

.bonus-container > p {
  font-size: 12px;
  font-weight: 200;
  color: rgba(86, 86, 86, 0.777);
}

.bonus-container > p > span {
  font-size: 14px;
  font-weight: 300;
  color: rgb(0, 0, 0)
}

.img-container {
  width: 100%;
  display: flex;
  justify-content: center; 
}

.img-container > img {
  display: flex;
  width: 80px;
  height: 80px;
  justify-content: center;
  align-items: center;
  background: #ffc4661a;
  margin: 5px;
  border-radius: 55px;
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

@media only screen and (min-width: 961px) and (max-width: 1333px) {

    .c2 > div {
        display: grid;
        grid-template-columns: auto auto auto;
    }
}

@media only screen and (min-width: 568px) and (max-width: 645px) {

    table {
        max-width: 450px;
      }
    
    tr > th:nth-child(1) {
      padding: 5px;
      width: 50px;
    }

    tr > th:nth-child(2) {
      padding: 5px 50px 5px 25px;
      width: 50px;
    }

    tr > th:nth-child(3) {
      padding: 5px 15px 5px 5px;
      width: 100px;
    }

    tr > th:nth-child(4) {
      padding: 5px 5px 5px 25px;
      width: 100px;
    }

    tr > th:nth-child(5) {
      padding: 5px 5px 5px 25px;
      width: 100px;
    }
}

@media only screen and (min-width: 650px) and (max-width: 960px) {

    .c2 > div {
        display: grid;
        grid-template-columns: auto auto;
    }

}

@media only screen and (min-width: 210px) and (max-width: 649px) {

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

    table {
      max-width: 360px;
    }
    
    tr > th {
      font-size: 15px;
    }

    tr td {
      font-size: 11px;
    }

    tr > th:nth-child(1) {
      padding: 5px;
      width: 5px !important;
    }

    tr > th:nth-child(2) {
      padding: 5px 50px 5px 25px;
      widows: 20px !important;
    }

    tr > th:nth-child(3) {
      padding: 5px 15px 5px 5px;
      width: 100px;
    }

    tr > th:nth-child(4) {
      padding: 5px 5px 5px 25px;
      width: 100px;
    }

    tr > th:nth-child(5) {
      padding: 5px 5px 5px 25px;
      width: 100px;
    }

    tr > td {
      width: 50px !important;
    }
}

@media only screen and (min-width: 290px) and (max-width: 390px) {

  table {
      max-width: 280px !important;
    }
    
    tr > th {
      font-size: 12px;
    }

    tr td {
      font-size: 10px;
    }

    tr > th:nth-child(1) {
      padding: 5px 10px;
      width: 50px !important;
    }

    tr > th:nth-child(2) {
      padding: 5px 30px 5px 5px;
      width: 50px !important;
    }

    tr > th:nth-child(3) {
      padding: 5px 5px 5px 5px;
      width: 50px;
    }

    tr > th:nth-child(4) {
      padding: 5px 5px 5px 25px;
      width: 100px;
    }

    tr > th:nth-child(5) {
      padding: 5px 5px 5px 5px;
      width: 100px;
    }

}

@media only screen and (min-width: 10px) and (max-width: 290px) {

    .c1 > div > div > img {
      width: 100px;
      height: 70px;
      opacity: 0.2;
      display: none;
    }

    .c2 {
      width: 250px !important;
    }

    .img-container {
      width: 200px;
      display: flex;
      justify-content: right; 
    }

    .img-container > img {
      display: flex;
      width: 50px;
      height: 50px;
      justify-content: center;
      align-items: center;
    }

    .button-container {
      width: 240px !important;
    }

    .fruit-container {
      width: 0px !important;
    }

    .c3 {
      margin: 0px;
    }

    .c3 > h1 {
      width: 270px;
    }

    .c3 > div > img {
      width: 210px !important;
      height: 120px !important;
    }

    table {
      max-width: 200px;
    }
    tr > th {
      font-size: 10px;
    }

    tr td {
      font-size: 10px;
    }

    tr > th:nth-child(1) {
      padding: 5px 10px;
      width: 50px !important;
    }

    tr > th:nth-child(2) {
      padding: 5px 10px 5px 5px;
      width: 50px !important;
    }

    tr > th:nth-child(3) {
      padding: 5px 5px 5px 5px;
      width: 50px;
    }

    tr > th:nth-child(4) {
      padding: 5px 5px 5px 25px;
      width: 100px;
    }

    tr > th:nth-child(5) {
      padding: 5px 5px 5px 5px;
      width: 100px;
    }

    tr > td {
      width: 25px !important;
    }

}
/*----------------------------------------------------------------*/





.fruit-container {
    display: flex;
    justify-content: left;
    align-items: center;
    background: #ffc4661a;
    grid-template-columns: auto ;
    margin: 20px 50px 20px 50px;
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
    width: 70px;
    height: 15px;
    padding: 5px;
    font-size: 20px;
    margin: 10px;
    border-radius: 4px;
}

.button-container {
  display: grid !important;
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





.button:nth-child(1) {
  padding: 10px 35px ;
}

.button {
  background-image: linear-gradient(92.88deg, #b5455d 9.16%, #cc435a 43.89%, #d73f3f 64.72%);
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

.button:hover {
  box-shadow: #d73f3f80 0 1px 30px;
  transition-duration: .1s;
}

.button:active {
  box-shadow: #ff707080 0 1px 30px;
  transition-duration: .1s;
  transform: scale(0.97);
}

@media (min-width: 768px) {
  .button {
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

@media only screen and (max-width: 660px) {
  .c2 {
    width: 100%;
  }
  .c3 {
    width: 100%;
  }
}

.gooey-section {
  display: grid;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 0px 0px 100px 0px;
  background-color: rgba(85, 67, 203, 0.05);
  margin: 20px 0px !important;
  border-radius: 0px;
}

.gooey-section > h1 {
  padding: 20px 10px;
}


/*------------------ Gooey Table ---------------------------------------------------------*/
.table-container {
  display:  flex;
  justify-content: center;
}

.gooey-table {
  background-color: #b00000;
  background-color: #d8ffff;
  width: fit-content;
}

.gooey-table > tbody > tr:hover {
  background: #800000;
  background-color: #9ebbbb79;
  border-radius: 25%;
}

.gooey-table > thead > tr > th {
  width: 50px !important;
  font-size: 17px !important;
  text-align: center !important;
  padding: 10px !important;
}

.gooey-table > tbody > tr > td {
  width: 50px !important;
  font-size: 15px !important;
  padding: 10px !important;
}

.gooey-table > tbody > tr > td:nth-child(1) {
  color: #ae34b4;
  text-shadow: 1px 1px 10px rgba(255, 255, 255, 0.5);
}

.gooey-table > tbody > tr > td:nth-child(n+2):nth-child(-n+4) {
  color: #9e92f3;
  text-shadow: 1px 1px 10px rgba(255, 255, 255, 0.5);
}

.gooey-table > tbody > tr > td:nth-child(n+5):nth-child(-n+8) {
  color: #67afa8;
  text-shadow: 1px 1px 10px rgba(255, 255, 255, 0.5);
}

.gooey-table > tbody > tr > td:nth-child(9) {
  color: #000000;
  text-shadow: 1px 1px 10px rgba(255, 255, 255, 0.5);
}

.gooey-table > tbody > tr > td:nth-child(n+1):nth-child(-n+8) {
  border-right: 1px solid black;
}

.gooey-table > tbody > tr > td:nth-child(9) {
  border-right: none;
}

@media (min-width: 390px) and (max-width: 649px) {
  
  .table-container {
    margin: 10px !important;
  }

  .gooey-table {
    margin: 0px;
    width: 340px;
    max-width: 1000px !important;
  }

  .gooey-table > thead > tr > th {
    width: 20px !important;
    font-size: 12px !important;
    text-align: center !important;
    padding: 2.5px !important;
  }

  .gooey-table > tbody > tr > td {
    width: 20px !important;
    font-size: 12px !important;
    padding: 2.5px !important;
  }
}

@media (min-width: 291px) and (max-width: 389px) {

  .table-container {
    margin: 0px !important;
  }

  .gooey-table {
    width: 280px !important;
    margin: 0px;
  }

  .gooey-table > thead > tr > th {
    width: 10px !important;
    font-size: 8px !important;
    text-align: center !important;
    padding: 4px !important;
  }

  .gooey-table > tbody > tr > td {
    width: 10px !important;
    font-size: 8px !important;
    padding: 2.5px !important;
  }
}

@media (min-width: 91px) and (max-width: 290px) {

  .table-container {
    margin: 0px !important;
  }

  .gooey-table {
    width: 250px !important;
    margin: 0px;
    max-width: 1000px !important;
  }

  .gooey-table > thead > tr > th {
    width: 5px !important;
    font-size: 8px !important;
    text-align: center !important;
    padding: 2px !important;
  }

  .gooey-table > tbody > tr > td {
    width: 5px !important;
    font-size: 8px !important;
    padding: 5px !important;
  }
}


/*------------------ Gooey Table End -----------------------------------------------------*/

.add-gooey-button-container {
  display: flex;
  justify-content: center;
  margin: 40px 5px 0px 5px;
}

.delete-gooey-button-container {
  display: flex;
  justify-content: center;
  margin: 10px 5px;
}

#add-gooey {
  background-color: rgb(95, 230, 100);
  border-radius: 15px;
  width: 150px;
  height: 50px;
  cursor: pointer;
  font-size: 40px;
  color: white;
  border: 2px solid white;
}

#delete-gooey {
  background-color: rgb(220, 77, 77);
  border-radius: 15px;
  width: 150px;
  height: 50px;
  cursor: pointer;
  font-size: 50px;
  color: white;
  border: 2px solid white;
  line-height: 0px;
}

#add-gooey:hover {
  background-color: rgb(95, 255, 135);
  transition: background-color ease-in 0.2s;
}

#delete-gooey:hover {
  background-color: rgb(252, 105, 105);
  transition: background-color ease-in 0.2s;
}

#add-gooey::after {
  font-size: 40px;
  color: white;
  content: "";
}

#add-gooey:hover::after {
  font-size: 40px;
  color: white;
  content: "";
  transition: content ease-in-out 1s;
}

#add-gooey:active {
  transform: scale(0.98);
  box-shadow: 5px 5px 15px #889de8;
}

.to-delete-container {
  display: grid;
  text-align: center;
  justify-items: center;
}

.confirm {
  background: linear-gradient(to bottom right, rgb(71, 239, 107), rgb(131, 248, 209));
  border: 0;
  border-radius: 12px;
  color: #ffffff;
  cursor: pointer;
  display: inline-block;
  font-size: 17px;
  font-weight: 700;
  line-height: 2.5;
  outline: transparent;
  padding: 0 1rem;
  text-align: center;
  text-decoration: none;
  transition: box-shadow .2s ease-in-out;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  white-space: nowrap;
  margin: 20px 0px 0px 0px;
  text-shadow: 2px 2px 15px rgb(77, 77, 77);
}

.confirm:not([disabled]):active {
  transform: scale(0.98);
}

.confirm:not([disabled]):hover {
  box-shadow: 0 0 .25rem rgba(0, 0, 0, 0.5), -.125rem -.125rem 1rem rgba(71, 239, 107, 0.5), .125rem .125rem 1rem rgba(131, 248, 209, 0.5);
}

.confirm-delete {
  background: linear-gradient(to bottom right, rgb(239, 71, 101), rgb(255, 143, 143));
  border: 0;
  border-radius: 12px;
  color: #FFFFFF;
  cursor: pointer;
  display: inline-block;;
  font-size: 17px;
  font-weight: 700;
  line-height: 2.5;
  outline: transparent;
  padding: 0 1rem;
  text-align: center;
  text-decoration: none;
  transition: box-shadow .2s ease-in-out;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  white-space: nowrap;
  margin: 40px 0px 0px 0px;
  text-shadow: 2px 2px 15px rgb(77, 77, 77);
}

.confirm-delete:not([disabled]):active {
  transform: scale(0.98);
}

.confirm-delete:not([disabled]):hover {
  box-shadow: 0 0 .25rem rgba(0, 0, 0, 0.5), -.125rem -.125rem 1rem rgba(239, 71, 102, 0.5), .125rem .125rem 1rem rgba(255, 143, 143, 0.5);
}






/*--------------------------- Modals ---------------------------------------------------*/

.modal-container {
    display: flex;
    justify-content: center;
    position: fixed;
    background-color: rgba(0, 0, 0, 0.37);
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    color: rgb(255, 255, 255);
    text-shadow: 1px 1px 10px #c7a6ed83;
}

.modal-container2 {
    display: flex;
    justify-content: center;
    position: fixed;
    background-color: rgba(0, 0, 0, 0.37);
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    color: rgb(255, 255, 255);
    text-shadow: 1px 1px 10px #c7a6ed83;
}
    
.modal {
    background-color: #6c0f84;
    margin: 5% 15% 15% 15%;
    width: 90vw;
    height: 80vh;
    border-radius: 25px;
    box-shadow: 1px 1px 15px black;
}

.modal2 {
    background-color: #6c0f84;
    margin: 5% 15% 15% 15%;
    width: 90vw;
    height: 80vh;
    border-radius: 25px;
    box-shadow: 1px 1px 15px black;
    display: grid;
    justify-items: center;
}

.modal2 > .close-container  {
    justify-self: right;
}

.modal > h2 {
  margin: -40px 0px 40px 0px;
}

.modal > div:nth-child(3) {
  display: flex;
  justify-content: center;
}

.modal-input-container {
  display: grid;
  grid-template-columns: auto auto;
  grid-gap: 15px;
  max-width: 300px;
  font-size: 17px;
}

.modal-input-container > div {
  display: grid;
  grid-template-columns: auto;
}

.modal-input-container > div > input {
  width: 70px;
  height: 10px;
  padding: 10px;
  border: none;
  border-radius: 25px;
  margin: 5px 0px 20px 0px;
  font-size: 17px;
  font-weight: 500;
}

.close-container {
    display: flex;
    justify-content: right;
    padding: 10px;
}

.close {
    width: 40px;
    height: 40px;
    background-color: rgb(200, 0, 0);
    border-radius: 25px;
    border: 2px solid rgb(255, 255, 255);
    color: white;
    font-size: 24px;
    padding: 5px;
    cursor: pointer;
}

.close:hover {
    background-color: rgb(240, 0, 0);
}

.modal2 > h2 {
    margin: -50px 0px 0px 0px !important;
    height: 25px;
  }

@media (min-width: 91px) and (max-width: 455px) {

  .modal2 {
    display: grid;
    justify-items: center;
  }

  .modal2 > h2 {
    margin: -120px 0px 40px 0px !important;
    font-size: 20px !important;
    height: 20px;
    font-weight: 500;
  }

  .modal2 > div >  {
    margin: -50px 0px 40px 0px !important;
    font-size: 20px !important;
    height: 20px;
  }

  .modal2 > .close-container  {
    justify-self: right;
  }

  .to-delete-container {
    margin: -250px 0px 0px 0px;
  }

  .gooey-section > .modal-container > div > h2 {
    margin: 10px 0px 40px 0px !important;
    font-size: 20px !important;
    font-weight: 500;
  }

  .modal-input-container > div {
    display: grid;
    grid-template-columns: auto;
    text-align: center;
    align-content: center;
    justify-content: center !important;
  }

  .modal-input-container > div > label {
    display: grid;
    font-size: 15px;
  }

  .modal-input-container > div > input {
    width: 40px;
    height: 5px;
    padding: 10px;
    border: none;
    border-radius: 25px;
    margin: 5px 0px 10px 0px;
    font-size: 15px;
    font-weight: 500;
  }
}

/*--------------------------- Modals End ---------------------------------------------------*/










/*----------- Calc Stats Area --------------------------------------------------------------*/

.calc-stats-container {
  margin: 50px 0px 0px 0px;
}

.calculated-stats-container {
  margin-top: 55px !important;
}

.calc-stats-container > .calculated-stats-container > p:nth-child(2) {
  margin: 50px 0px 0px 0px !important;
}

/*.calc-stats-container > div > div > input {
  margin: 10px 0px 10px 0px;
  font-size: 22px;
  font-weight: 500;
  padding: 20px;
  width: 90px;
  height: 0px;
  border-radius: 25px;
}*/

.calc-stats-container > h2 {
  margin: 25px 0px 75px 0px;
}

.calc-stats-container > div {
  margin: 20px 0px;
}


.calc-stats-container > button {
  background-image: linear-gradient(92.88deg, #fcab65 9.16%, #ef9b71 43.89%, #f4ac4e 64.72%);
  text-shadow: rgb(0 0 0 / 25%) 0 3px 8px;
  font-size: 22px;
  min-width: 170px;
}

.calc-stats-container > button:hover {
  box-shadow: #fc9921d2 0 1px 30px;
  transition-duration: .1s;
}

.calc-stats-container > button:active {
  box-shadow: #e98f40ca 0 1px 30px;
  transition-duration: .1s;
  transform: scale(0.97);
}

@media (min-width: 768px) {
  .calc-stats-container > button {
    padding: 0 2.6rem;
  }
}

.save-gooey-button-container {
  display: flex;
  justify-content: center;
  margin: 40px 5px 0px 5px;
}

/*----------- Calc Stats Area End --------------------------------------------------------------*/










/*----------- Questing Rewards ----------------------------------------------------------------*/

.questing-rewards-container {
  display: grid;
  justify-items: center;
  margin: 50px 0px 100px 0px;
}

.questing-rewards-container > div {
  display: grid;
  grid-template-columns: auto auto auto;
  grid-gap: 15px;
  padding: 0px 10px;
}

@media (min-width: 500px) and (max-width: 720px) {
  .questing-rewards-container > div {
    grid-template-columns: auto auto;
  }
}

@media (min-width: 10px) and (max-width: 499px) {
  .questing-rewards-container > div {
    grid-template-columns: auto;
  }
}

.quest {
  border-radius: 10%;
  padding: 5px 20px;
  box-shadow: 1px 1px 10px rgb(163, 163, 163);
}

.quest:nth-child(1) {
  background-color: hsl(0deg 0% 44%);
}

.quest:nth-child(2) {
  background-color: hsl(90deg 30% 41%);
}

.quest:nth-child(3) {
  background-color: hsl(218deg 28% 44%);
}

.quest:nth-child(4) {
  background-color: hsl(266deg 28% 44%);
}

.quest:nth-child(5) {
  background-color: hsl(30deg 45% 48%);
}

.quest:nth-child(6) {
  background-color: hsl(2deg 44% 48%);
}

.quest > h4 {
  font-size: 25px;
  margin: 10px 0px 20px 0px;
  color: rgb(225, 200, 255);
  text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
}

.quest > p {
  margin: 10px 0px;
  font-size: 18px;
  color: rgb(225, 200, 255);
  text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
}

.quest > p:nth-child(5) {
  margin: 20px 0px;
}

.quest > p > span {
  text-shadow: none;
}

.quest > p > span {
  display: flex;
  justify-content: center;
}


/*----------- Questing Rewards End ----------------------------------------------------------------*/










/*----------- Donation Area End --------------------------------------------------------------*/


select {
    margin-top: 10px;
    background: #20d492;
    color: #fff;
    padding: 0 10px;
    font-size: 20px;
    border-radius: 5px;
}
select > option{
	color: #000;
  padding: 0 10px;
  border-radius: 5px;
}
 

</style>

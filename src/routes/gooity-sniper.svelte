<script>
    // @ts-nocheck
    
    
    import "./global.css"
    import Menu from "./comps/menu.svelte"
    import Footer from "./comps/footer.svelte"
    import { onMount } from "svelte"
    import axios from "axios"
    import qs1 from 'query-string';
    import { gooeyData } from './data.js'
    // import Gooeys from "./gooeys.svelte";
    import ScrollToTop from './comps/scroll.svelte'

    
    
    // const endpoint="https://gooeys.dogira.finance/407"

    // let posts

    // $: onMount(async function() {
    // try {
    //     const response = await axios.get(endpoint)
    //     console.log(response.data)
    //     posts = response.data
    //     console.log(posts)
    // } catch (error) {
    //     console.error(error)
    // }
    // })


    
    
    
    
    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    
        //   let gooeys = []
          
          const gooeyABI = '[{"inputs": [{"internalType": "string","name": "_name","type": "string"},{"internalType": "string","name": "_symbol","type": "string"},{"internalType": "string","name": "_initBaseURI","type": "string"},{"internalType": "address","name": "_gooeysOld","type": "address"},{"internalType": "bytes32","name": "_keyHash","type": "bytes32"}],"stateMutability": "nonpayable","type": "constructor"},{"anonymous": false,"inputs": [{"indexed": true,"internalType": "address","name": "owner","type": "address"},{"indexed": true,"internalType": "address","name": "approved","type": "address"},{"indexed": true,"internalType": "uint256","name": "tokenId","type": "uint256"}],"name": "Approval","type": "event"},{"anonymous": false,"inputs": [{"indexed": true,"internalType": "address","name": "owner","type": "address"},{"indexed": true,"internalType": "address","name": "operator","type": "address"},{"indexed": false,"internalType": "bool","name": "approved","type": "bool"}],"name": "ApprovalForAll","type": "event"},{"anonymous": false,"inputs": [{"indexed": false,"internalType": "uint256","name": "_gooeyId","type": "uint256"},{"indexed": false,"internalType": "uint256","name": "_fruitType","type": "uint256"}],"name": "EatFruit","type": "event"},{"anonymous": false,"inputs": [{"indexed": false,"internalType": "uint256","name": "_mintAmount","type": "uint256"}],"name": "InHouseMintComplete","type": "event"},{"anonymous": false,"inputs": [{"indexed": false,"internalType": "uint256","name": "_gooeyId","type": "uint256"},{"indexed": false,"internalType": "uint256","name": "randomness","type": "uint256"}],"name": "NewMintAttributes","type": "event"},{"anonymous": false,"inputs": [{"indexed": true,"internalType": "address","name": "previousOwner","type": "address"},{"indexed": true,"internalType": "address","name": "newOwner","type": "address"}],"name": "OwnershipTransferred","type": "event"},{"anonymous": false,"inputs": [{"components": [{"internalType": "bool","name": "inProgress","type": "bool"},{"internalType": "uint256","name": "blockStarted","type": "uint256"},{"internalType": "uint256","name": "blockFinished","type": "uint256"},{"internalType": "uint256","name": "status","type": "uint256"},{"internalType": "uint256","name": "statRolled","type": "uint256"},{"internalType": "uint256","name": "gooReward","type": "uint256"},{"internalType": "uint256","name": "fruitsRewarded","type": "uint256"},{"components": [{"internalType": "uint256","name": "questId","type": "uint256"},{"internalType": "uint256","name": "blockLength","type": "uint256"},{"internalType": "uint256[2]","name": "minMaxGoo","type": "uint256[2]"},{"internalType": "uint256[2]","name": "minMaxFoodRolls","type": "uint256[2]"},{"internalType": "uint256[2]","name": "minMaxFoodRange","type": "uint256[2]"},{"internalType": "uint256","name": "minRollForSuccess","type": "uint256"}],"internalType": "struct Gooeys.questSchema","name": "quest","type": "tuple"}],"indexed": false,"internalType": "struct Gooeys.quest","name": "_quest","type": "tuple"},{"indexed": false,"internalType": "uint256","name": "randomness","type": "uint256"}],"name": "QuestComplete","type": "event"},{"anonymous": false,"inputs": [{"indexed": false,"internalType": "uint256","name": "_gooeyId","type": "uint256"},{"indexed": false,"internalType": "uint256","name": "_foodStore","type": "uint256"},{"indexed": false,"internalType": "uint256","name": "_bond","type": "uint256"},{"indexed": false,"internalType": "uint256","name": "_tumbles","type": "uint256"},{"indexed": false,"internalType": "uint256","name": "_tumblebonus","type": "uint256"},{"indexed": false,"internalType": "uint256","name": "_hp","type": "uint256"},{"indexed": false,"internalType": "uint256","name": "_atk","type": "uint256"},{"indexed": false,"internalType": "uint256","name": "_def","type": "uint256"},{"indexed": false,"internalType": "uint256","name": "_spd","type": "uint256"}],"name": "StatUpdate","type": "event"},{"anonymous": false,"inputs": [{"indexed": true,"internalType": "address","name": "from","type": "address"},{"indexed": true,"internalType": "address","name": "to","type": "address"},{"indexed": true,"internalType": "uint256","name": "tokenId","type": "uint256"}],"name": "Transfer","type": "event"},{"anonymous": false,"inputs": [{"indexed": false,"internalType": "bytes32","name": "_requestId","type": "bytes32"},{"indexed": false,"internalType": "uint256","name": "_vrfResult","type": "uint256"}],"name": "VRFCallback","type": "event"},{"anonymous": false,"inputs": [{"indexed": false,"internalType": "address","name": "_tokenAddr","type": "address"},{"indexed": false,"internalType": "address","name": "_foodAddr","type": "address"},{"indexed": false,"internalType": "address","name": "_dToken","type": "address"}],"name": "externalTokensLoaded","type": "event"},{"inputs": [{"internalType": "address","name": "to","type": "address"},{"internalType": "uint256","name": "tokenId","type": "uint256"}],"name": "approve","outputs": [],"stateMutability": "nonpayable","type": "function"},{"inputs": [{"internalType": "address","name": "owner","type": "address"}],"name": "balanceOf","outputs": [{"internalType": "uint256","name": "","type": "uint256"}],"stateMutability": "view","type": "function"},{"inputs": [],"name": "baseURI","outputs": [{"internalType": "string","name": "","type": "string"}],"stateMutability": "view","type": "function"},{"inputs": [{"internalType": "uint256","name": "_gooeyId","type": "uint256"}],"name": "cancelQuest","outputs": [],"stateMutability": "nonpayable","type": "function"},{"inputs": [{"internalType": "uint256","name": "tokenId","type": "uint256"}],"name": "checkIn","outputs": [],"stateMutability": "nonpayable","type": "function"},{"inputs": [{"internalType": "uint256","name": "_gooeyId","type": "uint256"}],"name": "completeQuest","outputs": [],"stateMutability": "nonpayable","type": "function"},{"inputs": [{"internalType": "uint256","name": "_gooeyId","type": "uint256"},{"internalType": "uint256","name": "_amt","type": "uint256"},{"internalType": "uint256","name": "_foodId","type": "uint256"}],"name": "consumeFruit","outputs": [],"stateMutability": "nonpayable","type": "function"},{"inputs": [{"internalType": "uint256","name": "_startId","type": "uint256"},{"internalType": "uint256","name": "_endId","type": "uint256"}],"name": "convertOldGooeyCollection","outputs": [],"stateMutability": "nonpayable","type": "function"},{"inputs": [],"name": "dDiscountActive","outputs": [{"internalType": "bool","name": "","type": "bool"}],"stateMutability": "view","type": "function"},{"inputs": [],"name": "dDiscountMultiplier","outputs": [{"internalType": "uint256","name": "","type": "uint256"}],"stateMutability": "view","type": "function"},{"inputs": [],"name": "dDiscountQualifier","outputs": [{"internalType": "uint256","name": "","type": "uint256"}],"stateMutability": "view","type": "function"},{"inputs": [],"name": "gameStartBlock","outputs": [{"internalType": "uint256","name": "","type": "uint256"}],"stateMutability": "view","type": "function"},{"inputs": [{"internalType": "uint256","name": "tokenId","type": "uint256"}],"name": "getApproved","outputs": [{"internalType": "address","name": "","type": "address"}],"stateMutability": "view","type": "function"},{"inputs": [{"internalType": "uint256","name": "gooeyId","type": "uint256"}],"name": "getCurrentQuestInfoABIv1","outputs": [{"internalType": "uint256[8]","name": "","type": "uint256[8]"}],"stateMutability": "view","type": "function"},{"inputs": [{"internalType": "uint256","name": "questTypeId","type": "uint256"}],"name": "getQuestTypeInfoABIv1","outputs": [{"internalType": "uint256[8]","name": "","type": "uint256[8]"}],"stateMutability": "view","type": "function"},{"inputs": [{"internalType": "uint256","name": "tokenId","type": "uint256"}],"name": "getStatsABIv1","outputs": [{"internalType": "uint256[17]","name": "","type": "uint256[17]"}],"stateMutability": "view","type": "function"},{"inputs": [{"internalType": "uint256","name": "gooey","type": "uint256"}],"name": "getTumbleAvailabilityBlock","outputs": [{"internalType": "uint256","name": "tumbleBlock","type": "uint256"}],"stateMutability": "view","type": "function"},{"inputs": [{"internalType": "uint256","name": "gooey1","type": "uint256"},{"internalType": "uint256","name": "gooey2","type": "uint256"}],"name": "getTumbleCost","outputs": [{"internalType": "uint256","name": "cost","type": "uint256"}],"stateMutability": "view","type": "function"},{"inputs": [],"name": "gooTumbleWaitBlocks","outputs": [{"internalType": "uint256","name": "","type": "uint256"}],"stateMutability": "view","type": "function"},{"inputs": [{"internalType": "uint256","name": "","type": "uint256"}],"name": "gooeyAttributes","outputs": [{"components": [{"internalType": "uint256","name": "hp","type": "uint256"},{"internalType": "uint256","name": "atk","type": "uint256"},{"internalType": "uint256","name": "def","type": "uint256"},{"internalType": "uint256","name": "spd","type": "uint256"},{"internalType": "uint256","name": "originalHp","type": "uint256"},{"internalType": "uint256","name": "originalAtk","type": "uint256"},{"internalType": "uint256","name": "originalDef","type": "uint256"},{"internalType": "uint256","name": "originalSpd","type": "uint256"}],"internalType": "struct Gooeys.statInfo","name": "stats","type": "tuple"},{"components": [{"internalType": "uint256","name": "birthBlock","type": "uint256"},{"internalType": "uint256","name": "generation","type": "uint256"},{"internalType": "uint256","name": "tumblesRemaining","type": "uint256"},{"internalType": "uint256","name": "lastTumbleBlock","type": "uint256"},{"internalType": "uint256","name": "bond","type": "uint256"},{"internalType": "uint256","name": "foodStore","type": "uint256"},{"internalType": "uint256","name": "tumbleRollBonus","type": "uint256"},{"internalType": "uint256","name": "totalTumbles","type": "uint256"},{"internalType": "int256[2]","name": "parents","type": "int256[2]"}],"internalType": "struct Gooeys.lifeInfo","name": "life","type": "tuple"},{"components": [{"internalType": "string","name": "name","type": "string"},{"internalType": "uint256","name": "background","type": "uint256"},{"internalType": "uint256","name": "ears","type": "uint256"},{"internalType": "uint256","name": "body","type": "uint256"},{"internalType": "uint256","name": "mask","type": "uint256"},{"internalType": "uint256","name": "eyes","type": "uint256"},{"internalType": "uint256","name": "accessory","type": "uint256"}],"internalType": "struct Gooeys.cosmeticInfo","name": "cosmetics","type": "tuple"},{"internalType": "uint256","name": "lastUpdateBlock","type": "uint256"},{"internalType": "uint256","name": "tokenId","type": "uint256"}],"stateMutability": "view","type": "function"},{"inputs": [{"internalType": "address","name": "owner","type": "address"},{"internalType": "address","name": "operator","type": "address"}],"name": "isApprovedForAll","outputs": [{"internalType": "bool","name": "","type": "bool"}],"stateMutability": "view","type": "function"},{"inputs": [{"internalType": "address","name": "_dToken","type": "address"},{"internalType": "address","name": "_tokenAddr","type": "address"},{"internalType": "address","name": "_foodAddr","type": "address"}],"name": "loadExterns","outputs": [],"stateMutability": "nonpayable","type": "function"},{"inputs": [{"internalType": "uint256","name": "_questId","type": "uint256"},{"internalType": "uint256","name": "_hours","type": "uint256"},{"internalType": "uint256","name": "_minGoo","type": "uint256"},{"internalType": "uint256","name": "_maxGoo","type": "uint256"},{"internalType": "uint256","name": "_minFoodRoll","type": "uint256"},{"internalType": "uint256","name": "_maxFoodRoll","type": "uint256"},{"internalType": "uint256","name": "_minFoodRange","type": "uint256"},{"internalType": "uint256","name": "_maxFoodRange","type": "uint256"},{"internalType": "uint256","name": "_minRollForSuccess","type": "uint256"}],"name": "loadQuest","outputs": [],"stateMutability": "nonpayable","type": "function"},{"inputs": [],"name": "maximumCallGwei","outputs": [{"internalType": "uint256","name": "","type": "uint256"}],"stateMutability": "view","type": "function"},{"inputs": [],"name": "mint","outputs": [],"stateMutability": "payable","type": "function"},{"inputs": [],"name": "name","outputs": [{"internalType": "string","name": "","type": "string"}],"stateMutability": "view","type": "function"},{"inputs": [],"name": "owner","outputs": [{"internalType": "address","name": "","type": "address"}],"stateMutability": "view","type": "function"},{"inputs": [{"internalType": "uint256","name": "tokenId","type": "uint256"}],"name": "ownerOf","outputs": [{"internalType": "address","name": "","type": "address"}],"stateMutability": "view","type": "function"},{"inputs": [{"internalType": "bytes32","name": "requestId","type": "bytes32"},{"internalType": "uint256","name": "randomness","type": "uint256"}],"name": "rawFulfillRandomness","outputs": [],"stateMutability": "nonpayable","type": "function"},{"inputs": [],"name": "renounceOwnership","outputs": [],"stateMutability": "nonpayable","type": "function"},{"inputs": [{"internalType": "address","name": "from","type": "address"},{"internalType": "address","name": "to","type": "address"},{"internalType": "uint256","name": "tokenId","type": "uint256"}],"name": "safeTransferFrom","outputs": [],"stateMutability": "nonpayable","type": "function"},{"inputs": [{"internalType": "address","name": "from","type": "address"},{"internalType": "address","name": "to","type": "address"},{"internalType": "uint256","name": "tokenId","type": "uint256"},{"internalType": "bytes","name": "_data","type": "bytes"}],"name": "safeTransferFrom","outputs": [],"stateMutability": "nonpayable","type": "function"},{"inputs": [{"internalType": "address","name": "operator","type": "address"},{"internalType": "bool","name": "approved","type": "bool"}],"name": "setApprovalForAll","outputs": [],"stateMutability": "nonpayable","type": "function"},{"inputs": [{"internalType": "uint256","name": "_maximumCallGwei","type": "uint256"},{"internalType": "bool","name": "_gweiCheckEnabled","type": "bool"},{"internalType": "bool","name": "_contractCheckEnabled","type": "bool"}],"name": "setContractGweiChecks","outputs": [],"stateMutability": "nonpayable","type": "function"},{"inputs": [{"internalType": "uint256","name": "_dDiscountQualifier","type": "uint256"},{"internalType": "uint256","name": "_dDiscountMultiplier","type": "uint256"},{"internalType": "bool","name": "_dDiscountActive","type": "bool"}],"name": "setDTokenDiscounts","outputs": [],"stateMutability": "nonpayable","type": "function"},{"inputs": [{"internalType": "address","name": "_addr","type": "address"},{"internalType": "bool","name": "_set","type": "bool"}],"name": "setGameController","outputs": [],"stateMutability": "nonpayable","type": "function"},{"inputs": [{"internalType": "bool","name": "_gameStatus","type": "bool"}],"name": "setGameStatus","outputs": [],"stateMutability": "nonpayable","type": "function"},{"inputs": [{"internalType": "bool","name": "_set","type": "bool"}],"name": "setTumbleEnabled","outputs": [],"stateMutability": "nonpayable","type": "function"},{"inputs": [{"internalType": "uint256","name": "_tumbleBaseFee","type": "uint256"},{"internalType": "uint256","name": "_tumbleScalingFee","type": "uint256"},{"internalType": "uint256","name": "_tumblePunitiveMultiplier","type": "uint256"},{"internalType": "uint256","name": "_tumblePunitiveMultiplierThreshold","type": "uint256"}],"name": "setTumbleFees","outputs": [],"stateMutability": "nonpayable","type": "function"},{"inputs": [{"internalType": "string","name": "_newBaseURI","type": "string"}],"name": "setURI","outputs": [],"stateMutability": "nonpayable","type": "function"},{"inputs": [{"internalType": "uint256","name": "_gooeyId","type": "uint256"},{"internalType": "uint256","name": "_questType","type": "uint256"}],"name": "startQuest","outputs": [],"stateMutability": "nonpayable","type": "function"},{"inputs": [{"internalType": "bytes4","name": "interfaceId","type": "bytes4"}],"name": "supportsInterface","outputs": [{"internalType": "bool","name": "","type": "bool"}],"stateMutability": "view","type": "function"},{"inputs": [],"name": "symbol","outputs": [{"internalType": "string","name": "","type": "string"}],"stateMutability": "view","type": "function"},{"inputs": [{"internalType": "uint256","name": "index","type": "uint256"}],"name": "tokenByIndex","outputs": [{"internalType": "uint256","name": "","type": "uint256"}],"stateMutability": "view","type": "function"},{"inputs": [{"internalType": "address","name": "owner","type": "address"},{"internalType": "uint256","name": "index","type": "uint256"}],"name": "tokenOfOwnerByIndex","outputs": [{"internalType": "uint256","name": "tokenId","type": "uint256"}],"stateMutability": "view","type": "function"},{"inputs": [{"internalType": "uint256","name": "tokenId","type": "uint256"}],"name": "tokenURI","outputs": [{"internalType": "string","name": "","type": "string"}],"stateMutability": "view","type": "function"},{"inputs": [{"internalType": "address","name": "owner","type": "address"}],"name": "tokensOfOwner","outputs": [{"internalType": "uint256[]","name": "","type": "uint256[]"}],"stateMutability": "view","type": "function"},{"inputs": [],"name": "totalSupply","outputs": [{"internalType": "uint256","name": "","type": "uint256"}],"stateMutability": "view","type": "function"},{"inputs": [{"internalType": "address","name": "from","type": "address"},{"internalType": "address","name": "to","type": "address"},{"internalType": "uint256","name": "tokenId","type": "uint256"}],"name": "transferFrom","outputs": [],"stateMutability": "nonpayable","type": "function"},{"inputs": [{"internalType": "address","name": "newOwner","type": "address"}],"name": "transferOwnership","outputs": [],"stateMutability": "nonpayable","type": "function"},{"inputs": [{"internalType": "uint256","name": "gooey1","type": "uint256"},{"internalType": "uint256","name": "gooey2","type": "uint256"}],"name": "tumble","outputs": [],"stateMutability": "nonpayable","type": "function"},{"inputs": [],"name": "tumbleEnabled","outputs": [{"internalType": "bool","name": "","type": "bool"}],"stateMutability": "view","type": "function"},{"inputs": [{"internalType": "uint256","name": "_gooTumbleWaitBlocks","type": "uint256"}],"name": "updateGooTumbleWaitBlocks","outputs": [],"stateMutability": "nonpayable","type": "function"},{"inputs": [{"internalType": "uint256","name": "_gooeyId","type": "uint256"},{"internalType": "uint256","name": "_foodStore","type": "uint256"},{"internalType": "uint256","name": "_bond","type": "uint256"},{"internalType": "uint256","name": "_tumbles","type": "uint256"},{"internalType": "uint256","name": "_tumblebonus","type": "uint256"},{"internalType": "uint256","name": "_hp","type": "uint256"},{"internalType": "uint256","name": "_atk","type": "uint256"},{"internalType": "uint256","name": "_def","type": "uint256"},{"internalType": "uint256","name": "_spd","type": "uint256"}],"name": "updateGooey","outputs": [],"stateMutability": "nonpayable","type": "function"},{"inputs": [{"internalType": "uint256","name": "_maxNexus","type": "uint256"}],"name": "updateMaxNexus","outputs": [],"stateMutability": "nonpayable","type": "function"},{"inputs": [{"internalType": "address[]","name": "_addresses","type": "address[]"},{"internalType": "bool","name": "_set","type": "bool"}],"name": "whitelistSet","outputs": [],"stateMutability": "nonpayable","type": "function"},{"inputs": [],"name": "withdraw","outputs": [],"stateMutability": "payable","type": "function"}]'
          
        //   let counter
        //   let t
    
        //     // for (let i = 0; i < 1500; i++) {
        //     //   counter += '"'+i+'", '
        //     //   t = '[['+counter+']], '
        //     //   console.log(counter)
        //     // }
        //     // console.log(t)
    
        //   let data = qs1.stringify({
        //     'chain': 'polygon',
        //     'network': 'mainnet',
        //     'contract': '0x2375874eb409095efa6090bf7085ae3922543c72',
        //     'abi' : '[{"anonymous": false,"inputs": [{"indexed": true,"internalType": "address","name": "previousOwner","type": "address"},{"indexed": true,"internalType": "address","name": "newOwner","type": "address"}],"name": "OwnershipTransferred","type": "event"},{"inputs": [{"internalType": "address","name": "_dToken","type": "address"},{"internalType": "address","name": "_gToken","type": "address"},{"internalType": "address","name": "_gFruit","type": "address"},{"internalType": "address","name": "_gCore","type": "address"}],"name": "loadExterns","outputs": [],"stateMutability": "nonpayable","type": "function"},{"inputs": [],"name": "renounceOwnership","outputs": [],"stateMutability": "nonpayable","type": "function"},{"inputs": [{"internalType": "address","name": "newOwner","type": "address"}],"name": "transferOwnership","outputs": [],"stateMutability": "nonpayable","type": "function"},{"inputs": [{"internalType": "address","name": "_dToken","type": "address"},{"internalType": "address","name": "_gToken","type": "address"},{"internalType": "address","name": "_gFruit","type": "address"},{"internalType": "address","name": "_gCore","type": "address"}],"stateMutability": "nonpayable","type": "constructor"},{"inputs": [{"internalType": "address","name": "owner","type": "address"},{"internalType": "uint256","name": "baseGooeyId","type": "uint256"}],"name": "getTumblingFeesForGooeys","outputs": [{"internalType": "uint256[][]","name": "gooeyFees","type": "uint256[][]"}],"stateMutability": "view","type": "function"},{"inputs": [{"internalType": "address","name": "owner","type": "address"}],"name": "loadAllGooeysForPlayer","outputs": [{"internalType": "uint256[][]","name": "gooeyStats","type": "uint256[][]"}],"stateMutability": "view","type": "function"},{"inputs": [{"internalType": "address","name": "owner","type": "address"},{"internalType": "uint256","name": "maxFruitID","type": "uint256"}],"name": "loadFruitByOwner","outputs": [{"internalType": "uint256[]","name": "ownerFruitAmts","type": "uint256[]"}],"stateMutability": "view","type": "function" }, { "inputs": [], "name": "loadGlobalSettings", "outputs": [ { "internalType": "uint256[]", "name": "settings", "type": "uint256[]" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "uint256[]", "name": "ids", "type": "uint256[]" } ], "name": "loadGooeyStats", "outputs": [ { "internalType": "uint256[][]", "name": "gooeyStats", "type": "uint256[][]" } ], "stateMutability": "view","type": "function" }, { "inputs": [ { "internalType": "address", "name": "owner", "type": "address" }, { "internalType": "uint256", "name": "maxFruitID", "type": "uint256" } ] ,"name": "loadTokenAndFruitInfo", "outputs": [ { "internalType": "uint256[][]", "name": "tokenAndFruitAmts", "type": "uint256[][]" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "owner", "type": "address" } ], "name": "loadTokenInfo", "outputs": [ { "internalType": "uint256[]", "name": "tokenAmts", "type": "uint256[]" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "owner", "outputs": [ { "internalType": "address", "name": "", "type": "address" } ], "stateMutability": "view", "type": "function" } ] ',
        //     'method': 'loadGooeyStats',
        //     'args': '[["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "60", "61", "62", "63", "64", "65", "66", "67", "68", "69", "70", "71", "72", "73", "74", "75", "76", "77", "78", "79", "80", "81", "82", "83", "84", "85", "86", "87", "88", "89", "90", "91", "92", "93", "94", "95", "96", "97", "98", "99", "100", "101", "102", "103", "104", "105", "106", "107", "108", "109", "110", "111", "112", "113", "114", "115", "116", "117", "118", "119", "120", "121", "122", "123", "124", "125", "126", "127", "128", "129", "130", "131", "132", "133", "134", "135", "136", "137", "138", "139", "140", "141", "142", "143", "144", "145", "146", "147", "148", "149", "150", "151", "152", "153", "154", "155", "156", "157", "158", "159", "160", "161", "162", "163", "164", "165", "166", "167", "168", "169", "170", "171", "172", "173", "174", "175", "176", "177", "178", "179", "180", "181", "182", "183", "184", "185", "186", "187", "188", "189", "190", "191", "192", "193", "194", "195", "196", "197", "198", "199", "200", "201", "202", "203", "204", "205", "206", "207", "208", "209", "210", "211", "212", "213", "214", "215", "216", "217", "218", "219", "220", "221", "222", "223", "224", "225", "226", "227", "228", "229", "230", "231", "232", "233", "234", "235", "236", "237", "238", "239", "240", "241", "242", "243", "244", "245", "246", "247", "248", "249", "250", "251", "252", "253", "254", "255", "256", "257", "258", "259", "260", "261", "262", "263", "264", "265", "266", "267", "268", "269", "270", "271", "272", "273", "274", "275", "276", "277", "278", "279", "280", "281", "282", "283", "284", "285", "286", "287", "288", "289", "290", "291", "292", "293", "294", "295", "296", "297", "298", "299", "300", "301", "302", "303", "304", "305", "306", "307", "308", "309", "310", "311", "312", "313", "314", "315", "316", "317", "318", "319", "320", "321", "322", "323", "324", "325", "326", "327", "328", "329", "330", "331", "332", "333", "334", "335", "336", "337", "338", "339", "340", "341", "342", "343", "344", "345", "346", "347", "348", "349", "350", "351", "352", "353", "354", "355", "356", "357", "358", "359", "360", "361", "362", "363", "364", "365", "366", "367", "368", "369", "370", "371", "372", "373", "374", "375", "376", "377", "378", "379", "380", "381", "382", "383", "384", "385", "386", "387", "388", "389", "390", "391", "392", "393", "394", "395", "396", "397", "398", "399", "400", "401", "402", "403", "404", "405", "406", "407", "408", "409", "410", "411", "412", "413", "414", "415", "416", "417", "418", "419", "420", "421", "422", "423", "424", "425", "426", "427", "428", "429", "430", "431", "432", "433", "434", "435", "436", "437", "438", "439", "440", "441", "442", "443", "444", "445", "446", "447", "448", "449", "450", "451", "452", "453", "454", "455", "456", "457", "458", "459", "460", "461", "462", "463", "464", "465", "466", "467", "468", "469", "470", "471", "472", "473", "474", "475", "476", "477", "478", "479", "480", "481", "482", "483", "484", "485", "486", "487", "488", "489", "490", "491", "492", "493", "494", "495", "496", "497", "498", "499", "500", "501", "502", "503", "504", "505", "506", "507", "508", "509", "510", "511", "512", "513", "514", "515", "516", "517", "518", "519", "520", "521", "522", "523", "524", "525", "526", "527", "528", "529", "530", "531", "532", "533", "534", "535", "536", "537", "538", "539", "540", "541", "542", "543", "544", "545", "546", "547", "548", "549", "550", "551", "552", "553", "554", "555", "556", "557", "558", "559", "560", "561", "562", "563", "564", "565", "566", "567", "568", "569", "570", "571", "572", "573", "574", "575", "576", "577", "578", "579", "580", "581", "582", "583", "584", "585", "586", "587", "588", "589", "590", "591", "592", "593", "594", "595", "596", "597", "598", "599", "600", "601", "602", "603", "604", "605", "606", "607", "608", "609", "610", "611", "612", "613", "614", "615", "616", "617", "618", "619", "620", "621", "622", "623", "624", "625", "626", "627", "628", "629", "630", "631", "632", "633", "634", "635", "636", "637", "638", "639", "640", "641", "642", "643", "644", "645", "646", "647", "648", "649", "650", "651", "652", "653", "654", "655", "656", "657", "658", "659", "660", "661", "662", "663", "664", "665", "666", "667", "668", "669", "670", "671", "672", "673", "674", "675", "676", "677", "678", "679", "680", "681", "682", "683", "684", "685", "686", "687", "688", "689", "690", "691", "692", "693", "694", "695", "696", "697", "698", "699", "700", "701", "702", "703", "704", "705", "706", "707", "708", "709", "710", "711", "712", "713", "714", "715", "716", "717", "718", "719", "720", "721", "722", "723", "724", "725", "726", "727", "728", "729", "730", "731", "732", "733", "734", "735", "736", "737", "738", "739", "740", "741", "742", "743", "744", "745", "746", "747", "748", "749", "750", "751", "752", "753", "754", "755", "756", "757", "758", "759", "760", "761", "762", "763", "764", "765", "766", "767", "768", "769", "770", "771", "772", "773", "774", "775", "776", "777", "778", "779", "780", "781", "782", "783", "784", "785", "786", "787", "788", "789", "790", "791", "792", "793", "794", "795", "796", "797", "798", "799", "800", "801", "802", "803", "804", "805", "806", "807", "808", "809", "810", "811", "812", "813", "814", "815", "816", "817", "818", "819", "820", "821", "822", "823", "824", "825", "826", "827", "828", "829", "830", "831", "832", "833", "834", "835", "836", "837", "838", "839", "840", "841", "842", "843", "844", "845", "846", "847", "848", "849", "850", "851", "852", "853", "854", "855", "856", "857", "858", "859", "860", "861", "862", "863", "864", "865", "866", "867", "868", "869", "870", "871", "872", "873", "874", "875", "876", "877", "878", "879", "880", "881", "882", "883", "884", "885", "886", "887", "888", "889", "890", "891", "892", "893", "894", "895", "896", "897", "898", "899", "900", "901", "902", "903", "904", "905", "906", "907", "908", "909", "910", "911", "912", "913", "914", "915", "916", "917", "918", "919", "920", "921", "922", "923", "924", "925", "926", "927", "928", "929", "930", "931", "932", "933", "934", "935", "936", "937", "938", "939", "940", "941", "942", "943", "944", "945", "946", "947", "948", "949", "950", "951", "952", "953", "954", "955", "956", "957", "958", "959", "960", "961", "962", "963", "964", "965", "966", "967", "968", "969", "970", "971", "972", "973", "974", "975", "976", "977", "978", "979", "980", "981", "982", "983", "984", "985", "986", "987", "988", "989", "990", "991", "992", "993", "994", "995", "996", "997", "998", "999", "1000", "1001", "1002", "1003", "1004", "1005", "1006", "1007", "1008", "1009", "1010", "1011", "1012", "1013", "1014", "1015", "1016", "1017", "1018", "1019", "1020", "1021", "1022", "1023", "1024", "1025", "1026", "1027", "1028", "1029", "1030", "1031", "1032", "1033", "1034", "1035", "1036", "1037", "1038", "1039", "1040", "1041", "1042", "1043", "1044", "1045", "1046", "1047", "1048", "1049", "1050", "1051", "1052", "1053", "1054", "1055", "1056", "1057", "1058", "1059", "1060", "1061", "1062", "1063", "1064", "1065", "1066", "1067", "1068", "1069", "1070", "1071", "1072", "1073", "1074", "1075", "1076", "1077", "1078", "1079", "1080", "1081", "1082", "1083", "1084", "1085", "1086", "1087", "1088", "1089", "1090", "1091", "1092", "1093", "1094", "1095", "1096", "1097", "1098", "1099", "1100", "1101", "1102", "1103", "1104", "1105", "1106", "1107", "1108", "1109", "1110", "1111", "1112", "1113", "1114", "1115", "1116", "1117", "1118", "1119", "1120", "1121", "1122", "1123", "1124", "1125", "1126", "1127", "1128", "1129", "1130", "1131", "1132", "1133", "1134", "1135", "1136", "1137", "1138", "1139", "1140", "1141", "1142", "1143", "1144", "1145", "1146", "1147", "1148", "1149", "1150", "1151", "1152", "1153", "1154", "1155", "1156", "1157", "1158", "1159", "1160", "1161", "1162", "1163", "1164", "1165", "1166", "1167", "1168", "1169", "1170", "1171", "1172", "1173", "1174", "1175", "1176", "1177", "1178", "1179", "1180", "1181", "1182", "1183", "1184", "1185", "1186", "1187", "1188", "1189", "1190", "1191", "1192", "1193", "1194", "1195", "1196", "1197", "1198", "1199", "1200", "1201", "1202", "1203", "1204", "1205", "1206", "1207", "1208", "1209", "1210", "1211", "1212", "1213", "1214", "1215", "1216", "1217", "1218", "1219", "1220", "1221", "1222", "1223", "1224", "1225", "1226", "1227", "1228", "1229", "1230", "1231", "1232", "1233", "1234", "1235", "1236", "1237", "1238", "1239", "1240", "1241", "1242", "1243", "1244", "1245", "1246", "1247", "1248", "1249", "1250", "1251", "1252", "1253", "1254", "1255", "1256", "1257", "1258", "1259", "1260", "1261", "1262", "1263", "1264", "1265", "1266", "1267", "1268", "1269", "1270", "1271", "1272", "1273", "1274", "1275", "1276", "1277", "1278", "1279", "1280", "1281", "1282", "1283", "1284", "1285", "1286", "1287", "1288", "1289", "1290", "1291", "1292", "1293", "1294", "1295", "1296", "1297", "1298", "1299", "1300", "1301", "1302", "1303", "1304", "1305", "1306", "1307", "1308", "1309", "1310", "1311", "1312", "1313", "1314", "1315", "1316", "1317", "1318", "1319", "1320", "1321", "1322", "1323", "1324", "1325", "1326", "1327", "1328", "1329", "1330", "1331", "1332", "1333", "1334", "1335", "1336", "1337", "1338", "1339", "1340", "1341", "1342", "1343", "1344", "1345", "1346", "1347", "1348", "1349", "1350", "1351", "1352", "1353", "1354", "1355", "1356", "1357", "1358", "1359", "1360", "1361", "1362", "1363", "1364", "1365", "1366", "1367", "1368", "1369", "1370", "1371", "1372", "1373", "1374", "1375", "1376", "1377", "1378", "1379", "1380", "1381", "1382", "1383", "1384", "1385"]]'
        //   });
          
        //   var config = {
        //     method: 'post',
        //     url: 'https://api.gaming.chainsafe.io/evm/call',
        //     headers: { },
        //     data : data
        //   };
      
        //   // @ts-ignore
        //   axios(config)
        //   .then(function (response) {
        //     let tempArray = []
        //     let tempArray2 = []
    
        //     let arr = Object.entries(response.data)
        //     console.log(arr)
        //     const a2 = Object.entries(arr).map(key => ({ ...key}));
        //     console.log(a2)
        //     tempArray.push(a2)
        //     tempArray2.push(tempArray[0][0][1])
        //     console.log(tempArray2)
    
        //     let t = tempArray2.toString()
    
        //     let reg = t.match(/"-?\d+",?]?/g)
        //     console.log(reg)
        //     let t2 = reg.toString()
        //     let reg2 = t2.match(/-?\d+/g)
    
        //     console.log(reg2)
        //     let newGooey = []
    
        //     newGooey = {
        //         "GooeyId" : parseInt(reg2[56]),
        //         "HP" :  parseInt(reg2[1]),
        //         "ATK" : parseInt(reg2[2]),
        //         "DEF" :  parseInt(reg2[3]),
        //         "SPD" :  parseInt(reg2[4]),
        //         "Total" : parseInt(reg2[1]) + parseInt(reg2[2]) + parseInt(reg2[3]) + parseInt(reg2[4]),
        //         "BirthBlock" :  parseInt(reg2[10]),
        //         "TotalTumbles" :  parseInt(reg2[17]),
        //         "TumblesRemaining" :  parseInt(reg2[12]),
        //         "Gen" :  parseInt(reg2[11]),
        //         "Parent1" :  parseInt(reg2[18]),
        //         "Parent2" :  parseInt(reg2[19]),
        //         "Nexus" :  parseInt(reg2[14]),
        //         "TumbleRollBonus" :  parseInt(reg2[16]),
        //         "FoodStore" : parseInt(reg2[15]) * 2,
        //       }
    
        //     // Gooeys.push(newGooey)
    
        //     // console.log(newGooey)
    
        //   })
        //   .catch(function (error) {
        //     console.log(error);
        //   });
    
    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    
    
    
    
    
    
    let userGooeys = []
    let userAddress





    gooeyData
    let Gooeys
    Gooeys = gooeyData
    let g = Gooeys
    
    
    


    let dummyGooeys = Gooeys
    let dummyGooeys2 = Gooeys
    let dummyGooeys3 = Gooeys





    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    
        const getData = async() => {
          // console.log(counter)
    
    //       var data = qs1.stringify({
    //         'chain': 'polygon',
    //         'network': 'mainnet',
    //         'contract': '0xFAB55Fe6E7483b1ADBAcC377C2544b4ee79010c1',
    //         'abi': gooeyABI,
    //         'method': 'gooeyAttributes',
    //         'args': counter,
    //         // 'args': '["94"]',
    //       });
    
          var data = {
            'chain': 'polygon',
            'network': 'mainnet',
            'contract': '0x3154d38f35febe08fd0afdc6c3a1b833a49f69de',
            'abi': gooeyABI,
            'method': 'tokensOfOwner',
            'args': '["'+userAddress+'"]',
          }
    
    //       //Fruit Contract Data
    //       // var data = qs1.stringify({
    //       //   'chain': 'polygon',
    //       //   'network': 'mainnet',
    //       //   'contract': '0x2375874eb409095efa6090bf7085ae3922543c72',
    //       //   'abi' : '[{"anonymous": false,"inputs": [{"indexed": true,"internalType": "address","name": "previousOwner","type": "address"},{"indexed": true,"internalType": "address","name": "newOwner","type": "address"}],"name": "OwnershipTransferred","type": "event"},{"inputs": [{"internalType": "address","name": "_dToken","type": "address"},{"internalType": "address","name": "_gToken","type": "address"},{"internalType": "address","name": "_gFruit","type": "address"},{"internalType": "address","name": "_gCore","type": "address"}],"name": "loadExterns","outputs": [],"stateMutability": "nonpayable","type": "function"},{"inputs": [],"name": "renounceOwnership","outputs": [],"stateMutability": "nonpayable","type": "function"},{"inputs": [{"internalType": "address","name": "newOwner","type": "address"}],"name": "transferOwnership","outputs": [],"stateMutability": "nonpayable","type": "function"},{"inputs": [{"internalType": "address","name": "_dToken","type": "address"},{"internalType": "address","name": "_gToken","type": "address"},{"internalType": "address","name": "_gFruit","type": "address"},{"internalType": "address","name": "_gCore","type": "address"}],"stateMutability": "nonpayable","type": "constructor"},{"inputs": [{"internalType": "address","name": "owner","type": "address"},{"internalType": "uint256","name": "baseGooeyId","type": "uint256"}],"name": "getTumblingFeesForGooeys","outputs": [{"internalType": "uint256[][]","name": "gooeyFees","type": "uint256[][]"}],"stateMutability": "view","type": "function"},{"inputs": [{"internalType": "address","name": "owner","type": "address"}],"name": "loadAllGooeysForPlayer","outputs": [{"internalType": "uint256[][]","name": "gooeyStats","type": "uint256[][]"}],"stateMutability": "view","type": "function"},{"inputs": [{"internalType": "address","name": "owner","type": "address"},{"internalType": "uint256","name": "maxFruitID","type": "uint256"}],"name": "loadFruitByOwner","outputs": [{"internalType": "uint256[]","name": "ownerFruitAmts","type": "uint256[]"}],"stateMutability": "view","type": "function" }, { "inputs": [], "name": "loadGlobalSettings", "outputs": [ { "internalType": "uint256[]", "name": "settings", "type": "uint256[]" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "uint256[]", "name": "ids", "type": "uint256[]" } ], "name": "loadGooeyStats", "outputs": [ { "internalType": "uint256[][]", "name": "gooeyStats", "type": "uint256[][]" } ], "stateMutability": "view","type": "function" }, { "inputs": [ { "internalType": "address", "name": "owner", "type": "address" }, { "internalType": "uint256", "name": "maxFruitID", "type": "uint256" } ] ,"name": "loadTokenAndFruitInfo", "outputs": [ { "internalType": "uint256[][]", "name": "tokenAndFruitAmts", "type": "uint256[][]" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "owner", "type": "address" } ], "name": "loadTokenInfo", "outputs": [ { "internalType": "uint256[]", "name": "tokenAmts", "type": "uint256[]" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "owner", "outputs": [ { "internalType": "address", "name": "", "type": "address" } ], "stateMutability": "view", "type": "function" } ] ',
    //       //   'method': 'loadGooeyStats',
    //       //   'args': '[["94", "10"]]',
    //       // });
          
          var config = {
            method: 'post',
            url: 'https://api.gaming.chainsafe.io/evm/call',
            headers: { },
            data : data
          };
      
          // @ts-ignore
          axios(config)
          .then(function (response) {
            let tempArray = []
            let tempArray2 = []
    
            let arr = Object.entries(response.data)
            const a2 = Object.entries(arr).map(key => ({ ...key[1]}));
            // console.log(a2)
            tempArray.push(a2)
            tempArray2.push(tempArray[0][0][1])
            // console.log(tempArray2)
    
            let t = tempArray2.toString()
    
            let reg = t.match(/"-?\d+",?]?/g)
            // console.log(reg)
            let t2 = reg.toString()
            let reg2 = t2.match(/-?\d+/g)
    
            // console.log(reg2)
            // let newGooey = []
    
            // newGooey = {ID: reg2[56]}

    
            userGooeys.push(reg2)
    
            // console.log(userGooeys)
    
          })
          .then(function () {
            Gooeys = []
            for (let i of userGooeys[0]) {
                    userArray = []
                    let id = parseInt(i)
                    userArray.push(dummyGooeys.filter(goo => goo.GooeyId === id))
                    Gooeys.push(userArray[0][0])
                    // console.log(userArray[0][0])
            }
          })
          .catch(function (error) {
            console.log(error);
          });
        }
    
    //   getData().then(Gooeys = userArray);
    
    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    
    

    
    
    // console.log(Gooeys)
    
    // let g2 = JSON.stringify(Gooeys)
    
    // console.log(g2)










    // console.log(AccessoryTraits)



    

    let unsortedGooeys = Gooeys.filter(goo => goo.GooeyId >= 0)
    let sortedGooeys = []
    
    function sortByHighestGooeyNumber() {
            unsortedGooeys.sort(function(a, b) {
            sortedGooeys = unsortedGooeys
            return b.GooeyId - a.GooeyId
          })
          Gooeys = sortedGooeys 
    }
    
    function sortByLowestGooeyNumber() {
            unsortedGooeys.sort(function(a, b) {
            sortedGooeys = unsortedGooeys
            return a.GooeyId - b.GooeyId
          })
          Gooeys = sortedGooeys 
    }

    sortByLowestGooeyNumber()
    
    
    
    
    function sortByHighestHP() {
            unsortedGooeys.sort(function(a, b) {
            sortedGooeys = unsortedGooeys
            return b.HP - a.HP
          })
          Gooeys = sortedGooeys 
    }
    
    function sortByLowestHP() {
            unsortedGooeys.sort(function(a, b) {
            sortedGooeys = unsortedGooeys
            return a.HP - b.HP 
          })
          Gooeys = sortedGooeys 
    }
    
    
    
    
    
    function sortByHighestATK() {
            unsortedGooeys.sort(function(a, b) {
            sortedGooeys = unsortedGooeys
            return b.ATK - a.ATK
          })
          Gooeys = sortedGooeys 
    }
    
    function sortByLowestATK() {
            unsortedGooeys.sort(function(a, b) {
            sortedGooeys = unsortedGooeys
            return a.ATK - b.ATK 
          })
          Gooeys = sortedGooeys 
    }
    
    
    
    
    
    function sortByHighestDEF() {
            unsortedGooeys.sort(function(a, b) {
            sortedGooeys = unsortedGooeys
            return b.DEF - a.DEF
          })
          Gooeys = sortedGooeys 
    }
    
    function sortByLowestDEF() {
            unsortedGooeys.sort(function(a, b) {
            sortedGooeys = unsortedGooeys
            return a.DEF - b.DEF 
          })
          Gooeys = sortedGooeys 
    }
    
    
    
    
    
    function sortByHighestSPD() {
            unsortedGooeys.sort(function(a, b) {
            sortedGooeys = unsortedGooeys
            return b.SPD - a.SPD
          })
          Gooeys = sortedGooeys 
    }
    
    function sortByLowestSPD() {
            unsortedGooeys.sort(function(a, b) {
            sortedGooeys = unsortedGooeys
            return a.SPD - b.SPD 
          })
          Gooeys = sortedGooeys 
    }





    function sortByHighestGen() {
            unsortedGooeys.sort(function(a, b) {
            sortedGooeys = unsortedGooeys
            return b.Gen - a.Gen
          })
          Gooeys = sortedGooeys 
    }

    function sortByLowestGen() {
            unsortedGooeys.sort(function(a, b) {
            sortedGooeys = unsortedGooeys
            return a.Gen - b.Gen 
          })
          Gooeys = sortedGooeys 
    }
    
    
    
    
    
    function sortByHighestStrength() {
            unsortedGooeys.sort(function(a, b) {
            sortedGooeys = unsortedGooeys
            return b.Total - a.Total
          })
          Gooeys = sortedGooeys 
    }
    
    function sortByLowestStrength() {
            unsortedGooeys.sort(function(a, b) {
            sortedGooeys = unsortedGooeys
            return a.Total - b.Total 
          })
          Gooeys = sortedGooeys 
    }





    function sortByHighestScore() {
            unsortedGooeys.sort(function(a, b) {
            sortedGooeys = unsortedGooeys
            return b.RarityScore  - a.RarityScore
          })
          Gooeys = sortedGooeys 
    }

    function sortByLowestScore() {
            unsortedGooeys.sort(function(a, b) {
            sortedGooeys = unsortedGooeys
            return a.RarityScore - b.RarityScore 
          })
          Gooeys = sortedGooeys 
    }





    function sortByHighestStrengthRarity() {
            unsortedGooeys.sort(function(a, b) {
            sortedGooeys = unsortedGooeys
            return b.TotalRarityStrength  - a.TotalRarityStrength
          })
          Gooeys = sortedGooeys 
    }

    function sortByLowestStrengthRarity() {
            unsortedGooeys.sort(function(a, b) {
            sortedGooeys = unsortedGooeys
            return a.TotalRarityStrength - b.TotalRarityStrength 
          })
          Gooeys = sortedGooeys 
    }

    



    let number
    
    $: validateNR = function validateInput() {
        if(number < 0) {
            number = 0
        }
       }
    
    function filterByNumber() {
        Gooeys = Gooeys.filter(goo => goo.GooeyId == number)
        number = ""
    }
    
    function reset() {
        Gooeys = g
        number = ""
        sortByLowestGooeyNumber()
    }

    // function filter() {
    //     Gooeys = []
    //     for (let i = 0; i < userGooeys.length; i++) {
    //         let id = i
    //         Gooeys.push(Gooeys.filter(goo => goo.GooeyId == parseInt(id)))
    //         console.log(Gooeys)
    //     }
    // }

    // function filter() {
    //     Gooeys = Gooeys.filter(item =>  userGooeys.includes(item.GooeyId))
    //     console.log(Gooeys)
    // }
    // filter()
    // console.log("Filter: " + userGooeys)

    let shown = false

    let currentId

    let background
    let backgroundOccurences
    let backgroundPercentage

    let body
    let bodyOccurences
    let bodyPercentage

    let mask
    let maskOccurences
    let maskPercentage

    let eyes
    let eyesOccurences
    let eyesPercentage

    let ears
    let earsOccurences
    let earsPercentage

    let accessory
    let accessoryOccurences
    let accessoryPercentage

    let foreground
    let foregroundOccurences
    let foregroundPercentage

    let parent1
    let parent2

    function show(i) {
        // console.log(i)
        currentId = parseInt(i.target.attributes.id.nodeValue)

        background = (Gooeys.filter(g => g.GooeyId === currentId))[0].Background
        backgroundOccurences = (Gooeys.filter(g => g.Background === background)).length
        backgroundPercentage = (backgroundOccurences / Gooeys.length * 100).toFixed(2)

        body = (Gooeys.filter(g => g.GooeyId === currentId))[0].Body
        bodyOccurences = (Gooeys.filter(g => g.Body === body)).length
        bodyPercentage = (bodyOccurences / Gooeys.length * 100).toFixed(2)

        mask = (Gooeys.filter(g => g.GooeyId === currentId))[0].Mask
        maskOccurences = (Gooeys.filter(g => g.Mask === mask)).length
        maskPercentage = (maskOccurences / Gooeys.length * 100).toFixed(2)

        eyes = (Gooeys.filter(g => g.GooeyId === currentId))[0].Eyes
        eyesOccurences = (Gooeys.filter(g => g.Eyes === eyes)).length
        eyesPercentage = (eyesOccurences / Gooeys.length * 100).toFixed(2)

        ears = (Gooeys.filter(g => g.GooeyId === currentId))[0].Ears
        earsOccurences = (Gooeys.filter(g => g.Ears === ears)).length
        earsPercentage = (earsOccurences / Gooeys.length * 100).toFixed(2)

        accessory = (Gooeys.filter(g => g.GooeyId === currentId))[0].Accessory
        accessoryOccurences = (Gooeys.filter(g => g.Accessory === accessory)).length
        accessoryPercentage = (accessoryOccurences / Gooeys.length * 100).toFixed(2)

        foreground = (Gooeys.filter(g => g.GooeyId === currentId))[0].Foreground
        foregroundOccurences = (Gooeys.filter(g => g.Foreground === foreground)).length
        foregroundPercentage = (foregroundOccurences / Gooeys.length * 100).toFixed(2)

        parent1 = (Gooeys.filter(g => g.GooeyId === currentId))[0].Parent1
        parent2 = (Gooeys.filter(g => g.GooeyId === currentId))[0].Parent2

        shown = true
    }

    function hide() {
        shown = false
    }





    $: renderValue = 50
    function loadMore() {
        renderValue += 50
    }

    
    
    //console.log(unsortedGooeys)
    
    // "https://gooeys.dogira.finance/1.jpg"

    let rank = 0
    
    // function getRanks() {
    //     for (let i; i < 2000; i++) {
    //         rank += i
    //         console.log(rank)
    //     }
    // }
    // getRanks()





    



    let userArray = []






    let BackgroundTraits = [
        "",
        "Dawn Forest", 
        "Full Moon", 
        "Violet Root", 
        "Sunset Forest", 
        "Green Root", 
        "Emerald Root", 
        "Radiant Forest", 
        "Ruby Root", 
        "Starry Night",
    ]

    let selectedBackground





    let BodyTraits = [
        "",
        "Lavly Wave",
        "2049",
        "Lavly Violet",
        "Honey",
        "Outrun",
        "Moon Stone",
        "Blue",
        "Lavly Mascot",
        "Red Patterned",
        "Violet Stone",
        "Blue Patterned",
        "Dark Pink",
        "Spiral Candy",
        "90s Wave",
        "Dark Pearl",
        "Heart Stone",
        "Light Green",
        "Dark Marble",
        "Tea Stone",
        "Spiral Wave",
        "Spiral Lapis",
        "Spiral Violet",
        "Shaman",
        "Spike Mascot",
        "Ghostly",
        "Starry",
        "Amethyst Rune",
        "Neon Obsidian",
        "Spellfire Obsidian",
        "Emerald Rune",
        "Magma Obsidian",
        "Radiant Obsidian",
        "Ruby Rune",
        "Cosmos",
        "Ocean",
        "Sapphire Rune",
        "Dreamspace",
        "Golden",
        "Mechagoo",
        "Pink Mechagoo",
    ]

    let selectedBody





    let EarsTraits = [
        "",
        "Golden Owlear",
        "Purple Owlear",
        "Radiant Owlear",
        "Violet Owlear",
        "Slate Owlear",
        "Radiant Bunnyear",
        "Pink Bunnyear",
        "Blue Bunnyear",
        "Emerald Owlear",
        "Blue Owlear",
        "Green Bunnyear",
        "Violet Bunnyear",
        "Amethyst Owlear",
        "Cobalt Owlear",
        "Garnet Owlear",
        "Sapphire Bunnyear",
        "Blurple Bunnyear",
        "Ruby Runegram",
        "Amethyst Fairy",
        "Dreamscape Fishy",
        "Emerald Runegram",
        "Horned Fawn",
        "Green Fishy",
        "Green Mecha",
        "Magma Obsidian",
        "Spellfire Obsidian",
        "Amethyst Runegram",
        "Emerald Fishy",
        "Neon Obsidian",
        "Blue Fishy",
        "Blue Mecha",
        "Lime Runetree",
        "Sapphire Runegram",
        "Garnet Fairy",
        "Radiant Obsidian",
        "Sapphire Fairy",
        "Spellfire Runetree",
        "Emerald Fairy",
        "Spellfire Fishy",
        "Grey Mecha",
        "Pink Mecha",
        "Cosmic Runetree",
        "Orange Mecha",
    ]

    let selectedEars





    let EyesTraits = [
        "",
        "Fresh",
        "Gold",
        "Bubblegum",
        "Grey",
        "Cold Green",
        "Coral",
        "Violet",
        "Blue",
        "Dark Blue",
        "Emerald",
        "Mint",
        "Intense Blue",
        "Lemon",
        "Green",
        "Red (Smiling)",
        "Yellow (Smiling)",
        "Grey (Grumpy)",
        "Radiant (Evil)",
        "Grey (Smiling)",
        "Pink (Smiling)",
        "Blue (Smiling)",
        "Green (Smiling)",
        "Pink (Evil)",
        "Red (Evil)",
        "Yellow (Grumpy)",
        "Violet (Evil)",
        "Red (Grumpy)",
        "Grey (Evil)",
        "Violet (Grumpy)",
        "Violet (Smiling)",
        "Blue (Evil)",
        "Ghost",
        "Orange (Evil)",
    ]

    let selectedEyes





    let MaskTraits = [
        "",
        "Violet",
        "Cold Violet",
        "Khaki",
        "Cold Green",
        "Sand",
        "Sand",
        "Green",
        "Peach",
        "Blue",
        "Dark Blue",
        "Pearl Green",
        "Red",
        "Pearl",
        "Steel",
        "Pearl Pink",
        "Pomegranate",
        "Dark Green",
        "Beige",
        "Dark Grey",
        "Dark Violet",
        "Grey",
        "Sapphire Rune",
        "Mystic",
        "Cyber",
        "Pink Shaman",
        "Blue Shaman",
        "Steel Shaman",
        "Topaz Rune",
        "Khaki Shaman",
        "Violet Shaman",
        "Amethyst Rune",
        "Green Shaman",
        "Lemon Mage",
        "Shaman",
        "Ruby Rune",
        "Emerald Rune",
        "Ghostly",
        "Green Mage",
        "Dream Mage",
        "Golden",
        "Blue Mage",
        "Sand Shaman",
        "Pink Mage",
    ]

    let selectedMask





    let AccessoryTraits = [
        "",
        "Blue Butterflies",
        "Clover",
        "Leaf",
        "NONE",
        "Star Crown",
        "Blue Birdies",
        "Pizza",
        "Birdies",
        "Halo",
        "Pink Butterflies",
    ]

    let selectedAccessory





    let ForegroundTraits = [
        "",
        "Pink Shimmering Flowers",
        "Blue Shimmering Flowers",
        "Violet Radiant Field",
        "Red Shimmering Flowers",
        "Green Radiant Field",
        "Emerald Radiant Field",
        "Green Shimmering Flowers",
        "Ruby Radiant Field",
        "Fireflies",
    ]

    let selectedForeground





    function traitSubmit() {
        Gooeys = dummyGooeys2
        if (selectedBackground != "") {
            Gooeys = Gooeys.filter(goo => (goo.Background === selectedBackground)) 
        }

        if (selectedBody != "") {
            Gooeys = Gooeys.filter(goo => (goo.Body === selectedBody)) 
        }

        if (selectedEars != "") {
            Gooeys = Gooeys.filter(goo => (goo.Ears === selectedEars)) 
        }

        if (selectedEyes != "") {
            Gooeys = Gooeys.filter(goo => (goo.Eyes === selectedEyes)) 
        }

        if (selectedMask != "") {
            Gooeys = Gooeys.filter(goo => (goo.Mask === selectedMask)) 
        }

        if (selectedAccessory != "") {
            Gooeys = Gooeys.filter(goo => (goo.Accessory === selectedAccessory)) 
        }

        if (selectedForeground != "") {
            Gooeys = Gooeys.filter(goo => (goo.Foreground === selectedForeground)) 
        }

    }







    </script>
    
    <main>
    
        <Menu/>
    
        <h1 style="text-align:center">Gooity Sniper</h1>
    
        <h2 style="text-align:center">Sort by</h2>
            <div class="sort-container">
                <div class="button-container">
                    <div class="button">
                        <button style="font-family: Bangers;" on:click="{sortByHighestGooeyNumber}" type="button"># ↑</button>
                        <button style="font-family: Bangers;" on:click="{sortByLowestGooeyNumber}" type="button"># ↓</button>
                    </div>
                    <div class="button">
                        <button style="font-family: Bangers;" on:click="{sortByHighestHP}" type="button">HP ↑</button>
                        <button style="font-family: Bangers;" on:click="{sortByLowestHP}" type="button">HP ↓</button>
                    </div>
                    <div class="button">
                        <button style="font-family: Bangers;" on:click="{sortByHighestATK}" type="button">ATK ↑</button>
                        <button style="font-family: Bangers;" on:click="{sortByLowestATK}" type="button">ATK ↓</button>
                    </div>
                    <div class="button">
                        <button style="font-family: Bangers;" on:click="{sortByHighestDEF}" type="button">DEF ↑</button>
                        <button style="font-family: Bangers;" on:click="{sortByLowestDEF}" type="button">DEF ↓</button>
                    </div>
                    <div class="button">
                        <button style="font-family: Bangers;" on:click="{sortByHighestSPD}" type="button">SPD ↑</button>
                        <button style="font-family: Bangers;" on:click="{sortByLowestSPD}" type="button">SPD ↓</button>
                    </div>
                    <div class="button">
                        <button style="font-family: Bangers;" on:click="{sortByHighestGen}" type="button">GEN ↑</button>
                        <button style="font-family: Bangers;" on:click="{sortByLowestGen}" type="button">GEN ↓</button>
                    </div>
                </div>
            </div>
            <div class="sort-container2">
                <div class="button-container2">
                    <div>
                        <div>
                            <button class="strongest-button" style="font-family: Bangers;" on:click="{sortByHighestStrength}" type="button">Srongest</button>
                        </div>
                        <div>
                            <button class="weakest-button" style="font-family: Bangers;" on:click="{sortByLowestStrength}" type="button">Weakest</button>
                        </div>
                    </div>
                    <div>
                        <div>
                            <button class="rarest-button" style="font-family: Bangers;" on:click="{sortByHighestScore}" type="button">Rarest</button>
                        </div>
                        <div>
                            <button class="basic-button" style="font-family: Bangers;" on:click="{sortByLowestScore}" type="button">Most Basic</button>
                        </div>
                    </div>
                    <div>
                        <div>
                            <button class="strongest-rarest-button" style="font-family: Bangers;" on:click="{sortByHighestStrengthRarity}" type="button">Srongest & Rarest</button>
                        </div>
                        <div>
                            <button class="weakest-basic-button" style="font-family: Bangers;" on:click="{sortByLowestStrengthRarity}" type="button">Weakest & Most Basic</button>
                        </div>
                    </div>
                </div>
            </div>


    
        <h2 style="text-align:center">Search by #</h2>
        <div style="display:grid; justify-items:center; align-content:center">
            <input style="margin-bottom:10px;" type="number" name="gooey" id="Gooey" bind:value="{number}" on:blur="{validateNR}">
            <div class="search-buttons-container" style="display:grid; margin-bottom:10px;">
                <button style="font-family: Bangers;" class="confirm" on:click="{filterByNumber}" type="button">Confirm</button>
                <button style="font-family: Bangers;" class="reset" on:click="{reset}" type="button">Reset</button>
            </div>
        </div>

    <div class="details-container">
        <details>
            <summary>More ...</summary>

            <div class="search-traits-container">
                <div class="search-wallet-container">
                    <h2 style="text-align:center">Search Wallet Address</h2>
                    <input type="text" bind:value="{userAddress}">
                    <button on:click="{getData}">Confirm</button>
                </div>
    
                <div class="traits-container">
    
                    <h3>Traits</h3>
    
                    <div>
                        <div>
                            <label for="Background">({BackgroundTraits.length - 1}) Background:</label>
                            <select bind:value={selectedBackground} on:change={traitSubmit} name="Background" id="Background">
                                {#each BackgroundTraits as b}
                                <option value={b}>{b} {"("+(dummyGooeys3.filter(goo => goo.Background === b)).length+")"}</option>
                                {/each}
                            </select>
                            <!-- <p>({BackgroundTraits.length - 1})</p> -->
                        </div>
        
                        <div>
                            <label for="Body">({BodyTraits.length - 1}) Body:</label>
                            <select bind:value={selectedBody} on:change={traitSubmit} name="Body" id="Body">
                                {#each BodyTraits as b}
                                <option value="{b}">{b} {"("+(dummyGooeys3.filter(goo => goo.Body === b)).length+")"}</option>
                                {/each}
                            </select>
                            <!-- <p>{BodyTraits.length - 1}</p> -->
                        </div>
        
                        <div>
                            <label for="Ears">({EarsTraits.length - 1}) Ears:</label>
                            <select bind:value={selectedEars} on:change={traitSubmit} name="Ears" id="Ears">
                                {#each EarsTraits as b}
                                <option value="{b}">{b} {"("+(dummyGooeys3.filter(goo => goo.Ears === b)).length+")"}</option>
                                {/each}
                            </select>
                            <!-- <p>{EarsTraits.length - 1}</p> -->
                        </div>
        
                        <div>
                            <label for="Eyes">({EyesTraits.length - 1}) Eyes:</label>
                            <select bind:value={selectedEyes} on:change={traitSubmit} name="Eyes" id="Eyes">
                                {#each EyesTraits as b}
                                <option value="{b}">{b} {"("+(dummyGooeys3.filter(goo => goo.Eyes === b)).length+")"}</option>
                                {/each}
                            </select>
                            <!-- <p>{EyesTraits.length - 1}</p> -->
                        </div>
        
                        <div>
                            <label for="Mask">({MaskTraits.length - 1}) Mask:</label>
                            <select bind:value={selectedMask} on:change={traitSubmit} name="Mask" id="Mask">
                                {#each MaskTraits as b}
                                <option value="{b}">{b} {"("+(dummyGooeys3.filter(goo => goo.Mask === b)).length+")"}</option>
                                {/each}
                            </select>
                            <!-- <p>({MaskTraits.length - 1})</p> -->
                        </div>
        
                        <div>
                            <label for="Accessory">({AccessoryTraits.length - 1}) Accessory:</label>
                            <select bind:value={selectedAccessory} on:change={traitSubmit} name="Accessory" id="Mask">
                                {#each AccessoryTraits as b}
                                <option value="{b}">{b} {"("+(dummyGooeys3.filter(goo => goo.Accessory === b)).length+")"}</option>
                                {/each}
                            </select>
                            <!-- <p>({AccessoryTraits.length - 1})</p> -->
                        </div>
        
                        <div>
                            <label for="Foreground">({ForegroundTraits.length - 1}) Foreground:</label>
                            <select bind:value={selectedForeground} on:change={traitSubmit} name="Foreground" id="Foreground">
                                {#each ForegroundTraits as b}
                                <option value="{b}">{b} {"("+(dummyGooeys3.filter(goo => goo.Foreground === b)).length+")"}</option>
                                {/each}
                            </select>
                            <!-- <p>({ForegroundTraits.length - 1})</p> -->
                        </div>
    
                    </div>
    
                </div>
    
            </div>
        </details>
    </div>

          {#if shown}
            <div class="modal-container">
                <div class="modal">
                    
                    <div class="close-container">
                        <button class="close" on:click="{() => hide()}">X</button>
                    </div>

                    <div class="modal-content">
        
                        <div class="modal-info-container">
                            <div class="modal-img-container">
                                <img src="https://gooeys.dogira.finance/{currentId}.jpg" alt="Gooey">
                            </div>

                            <h2>Gooey #{currentId}</h2>

                            <div class="opensea-container">
                                <a id="opensea" href="https://opensea.io/assets/matic/0x3154d38f35febe08fd0afdc6c3a1b833a49f69de/{currentId}" target="_blank"><img src="https://opensea.io/static/images/logos/opensea.svg" alt="Opensea"></a>
                            </div>
            
                            <div class="trait-container">
                                <!-- <div>
                                    <p>Background: <br><span>{background}</span></p>
                                    <p>Occurences: <br><span>{backgroundOccurences} <br>({backgroundPercentage}%)</span></p>
                                    <p>Body: <br><span>{body}</span></p>
                                    <p>Occurences: <br><span>{bodyOccurences} <br>({bodyPercentage}%)</span></p>
                                    <p>Mask: <br><span>{mask}</span></p>
                                    <p>Occurences: <br><span>{maskOccurences} <br>({maskPercentage}%)</span></p>
                                    <p>Eyes: <br><span>{eyes}</span></p>
                                    <p>Occurences: <br><span>{eyesOccurences} <br>({eyesPercentage}%)</span></p>
                                </div>
                                <div>
                                    <p>Ears: <br><span>{ears}</span></p>
                                    <p>Occurences: <br><span>{earsOccurences} <br>({earsPercentage}%)</span></p>
                                    <p>Accessory: <br><span>{accessory}</span></p>
                                    <p>Occurences: <br><span>{accessoryOccurences} <br>({accessoryPercentage}%)</span></p>
                                    <p>Foreground: <br><span>{foreground}</span></p>
                                    <p>Occurences: <br><span>{foregroundOccurences} <br>({foregroundPercentage}%)</span></p>
                                </div> -->
                                <div>
                                    <p>Background: <br><span>{Gooeys.filter(g => g.GooeyId === currentId)[0].Background}</span></p>
                                    <p>Occurences: <br><span>{Gooeys.filter(g => g.GooeyId === currentId)[0].BackgroundTotal} <br>({Gooeys.filter(g => g.GooeyId === currentId)[0].BackgroundPercentage}%)</span></p>
                                    <p>Body: <br><span>{Gooeys.filter(g => g.GooeyId === currentId)[0].Body}</span></p>
                                    <p>Occurences: <br><span>{Gooeys.filter(g => g.GooeyId === currentId)[0].BodyTotal} <br>({Gooeys.filter(g => g.GooeyId === currentId)[0].BodyPercentage}%)</span></p>
                                    <p>Mask: <br><span>{Gooeys.filter(g => g.GooeyId === currentId)[0].Mask}</span></p>
                                    <p>Occurences: <br><span>{Gooeys.filter(g => g.GooeyId === currentId)[0].MaskTotal} <br>({Gooeys.filter(g => g.GooeyId === currentId)[0].MaskPercentage}%)</span></p>
                                    <p>Eyes: <br><span>{Gooeys.filter(g => g.GooeyId === currentId)[0].Eyes}</span></p>
                                    <p>Occurences: <br><span>{Gooeys.filter(g => g.GooeyId === currentId)[0].EyesTotal} <br>({Gooeys.filter(g => g.GooeyId === currentId)[0].EyesPercentage}%)</span></p>
                                </div>
                                <div>
                                    <p>Ears: <br><span>{Gooeys.filter(g => g.GooeyId === currentId)[0].Ears}</span></p>
                                    <p>Occurences: <br><span>{Gooeys.filter(g => g.GooeyId === currentId)[0].EarsTotal} <br>({Gooeys.filter(g => g.GooeyId === currentId)[0].EarsPercentage}%)</span></p>
                                    <p>Accessory: <br><span>{Gooeys.filter(g => g.GooeyId === currentId)[0].Accessory}</span></p>
                                    <p>Occurences: <br><span>{Gooeys.filter(g => g.GooeyId === currentId)[0].AccessoryTotal} <br>({Gooeys.filter(g => g.GooeyId === currentId)[0].AccessoryPercentage}%)</span></p>
                                    <p>Foreground: <br><span>{Gooeys.filter(g => g.GooeyId === currentId)[0].Foreground}</span></p>
                                    <p>Occurences: <br><span>{Gooeys.filter(g => g.GooeyId === currentId)[0].ForegroundTotal} <br>({Gooeys.filter(g => g.GooeyId === currentId)[0].ForegroundPercentage}%)</span></p>
                                    <p>Parent 1: <br><span>{(Gooeys.filter(g => g.GooeyId === currentId)[0].Parent1) == -1 ? "none" : "#" + (Gooeys.filter(g => g.GooeyId === currentId)[0].Parent1)}</span></p>
                                    <p>Parent 2: <br><span>{(Gooeys.filter(g => g.GooeyId === currentId)[0].Parent2) == -1 ? "none" : "#" + (Gooeys.filter(g => g.GooeyId === currentId)[0].Parent2)}</span></p>
                                </div>
                            </div>
                            <!-- <div class="parent-container">
                                <p>Parent 1: <br><span>{parent1 == -1 ? "none" : "#" + parent1}</span></p>
                                <p>Parent 2: <br><span>{parent2 == -1 ? "none" : "#" + parent2}</span></p>
                                <p>Parent 1: <br><span>{(Gooeys.filter(g => g.GooeyId === currentId)[0].Parent1) == -1 ? "none" : "#" + (Gooeys.filter(g => g.GooeyId === currentId)[0].Parent1)}</span></p>
                                <p>Parent 2: <br><span>{(Gooeys.filter(g => g.GooeyId === currentId)[0].Parent2) == -1 ? "none" : "#" + (Gooeys.filter(g => g.GooeyId === currentId)[0].Parent2)}</span></p>
                            </div> -->
                        </div>    
                    </div>

                </div>
            </div>
          {/if}

        <div class="info-container">
            {#each Gooeys.slice(0, renderValue) as goo}
            <div id="{goo.GooeyId}" on:click="{(i) => show(i)}" class="Gooey">
                <div class="rank-container">
                    <p>Rank: <span>{Gooeys.indexOf(goo)+1}</span></p>
                </div>
                <div class="img-container">
                    <img src="https://gooeys.dogira.finance/{goo.GooeyId}.jpg" alt="Gooey">
                </div>

                <div class="number-container">
                    <h3>Gooey #<span>{goo.GooeyId}</span></h3>
                </div>
                
                <div class="stats-container">
                    <p>HP: <br><span>{goo.HP.toLocaleString('en-US')}</span></p>
                    <p>ATK: <br><span>{goo.ATK.toLocaleString('en-US')}</span></p>
                    <p>Gen: <br><span>{goo.Gen.toLocaleString('en-US')}</span></p>
                    <p>SPD: <br><span>{goo.SPD.toLocaleString('en-US')}</span></p>

                    <p>DEF: <br><span>{goo.DEF.toLocaleString('en-US')}</span></p>
                    <p>Total: <br><span>{goo.Total.toLocaleString('en-US')}</span></p>
                </div>

                <div class="rarity-container">
                    <div>
                        <p>Rarity Score: <br> 
                            <span id="rarity-score">
                            <!-- {Gooeys.push(((Gooeys.length / (Gooeys.filter(g => g.Background === goo.Background).length)) + 
                            (Gooeys.length / (Gooeys.filter(g => g.Body === goo.Body).length)) +
                            (Gooeys.length / (Gooeys.filter(g => g.Mask === goo.Mask).length)) + 
                            (Gooeys.length / (Gooeys.filter(g => g.Eyes === goo.Eyes).length)) + 
                            (Gooeys.length / (Gooeys.filter(g => g.Ears === goo.Ears).length)) + 
                            (Gooeys.length / (Gooeys.filter(g => g.Accessory === goo.Accessory).length)) + 
                            (Gooeys.length / (Gooeys.filter(g => g.Foreground === goo.Foreground).length))).toFixed(0))} -->
                            {goo.RarityScore.toLocaleString('en-US')}
                            </span>
                        </p>
                    </div>
                    <div class="show-gooey-button-container">
                        <button id="{goo.GooeyId}" on:click="{(i) => show(i)}">🔍</button>
                    </div>
                </div>

                <!-- <div class="parent-container">
                    <p>Parent 1: <br><span>{goo.Parent1 == -1 ? "none" : "#" + goo.Parent1}</span></p>
                    <p>Parent 2: <br><span>{goo.Parent2 == -1 ? "none" : "#" + goo.Parent2}</span></p>
                </div> -->

                <!-- <div class="trait-container2">
                    <p>Background: <br><span>{goo.Background}</span></p>
                    <p>Occurences: <br><span>{Gooeys.filter(g => g.Background === goo.Background).length} ({(Gooeys.filter(g => g.Background === goo.Background).length / Gooeys.length * 100).toFixed(2)}%)</span></p>
                    <p>Body: <br><span>{goo.Body}</span></p>
                    {Gooeys.push("Bd", Gooeys.length / (Gooeys.filter(g => g.Body === goo.Body).length))}
                    <p>Occurences: <br><span>{Gooeys.filter(g => g.Body === goo.Body).length} ({(Gooeys.filter(g => g.Body === goo.Body).length / Gooeys.length * 100).toFixed(2)}%)</span></p>
                    <p>Mask: <br><span>{goo.Mask}</span></p>
                    <p>Occurences: <br><span>{Gooeys.filter(g => g.Mask === goo.Mask).length} ({(Gooeys.filter(g => g.Mask === goo.Mask).length / Gooeys.length * 100).toFixed(2)}%)</span></p>
                    <p>Eyes: <br><span>{goo.Eyes}</span></p>
                    <p>Occurences: <br><span>{Gooeys.filter(g => g.Eyes === goo.Eyes).length} ({(Gooeys.filter(g => g.Eyes === goo.Eyes).length / Gooeys.length * 100).toFixed(2)}%)</span></p>
                    <p>Ears: <br><span>{goo.Ears}</span></p>
                    <p>Occurences: <br><span>{Gooeys.filter(g => g.Ears === goo.Ears).length} ({(Gooeys.filter(g => g.Ears === goo.Ears).length / Gooeys.length * 100).toFixed(2)}%)</span></p>
                    <p>Accessory: <br><span>{goo.Accessory}</span></p>
                    <p>Occurences: <br><span>{Gooeys.filter(g => g.Accessory === goo.Accessory).length} ({(Gooeys.filter(g => g.Accessory === goo.Accessory).length / Gooeys.length * 100).toFixed(2)}%)</span></p>
                    <p>Foreground: <br><span>{goo.Foreground}</span></p>
                    <p>Occurences: <br><span>{Gooeys.filter(g => g.Foreground === goo.Foreground).length} ({(Gooeys.filter(g => g.Foreground === goo.Foreground).length / Gooeys.length * 100).toFixed(2)}%)</span></p>
                </div> -->
            </div>
            {/each}
        </div>

        <ScrollToTop />

        <div class="load-more"> 
            <button on:click="{loadMore}">Load More...</button>
        </div>
                    
        <Footer/>
    
    </main>
    
    <style>
    
    main {
        font-family: Bangers;
        margin: 0px;
        padding: 0px;
        background-image: linear-gradient( 95.2deg, rgba(173,252,234,1) 26.8%, rgba(192,229,246,1) 64% );
    }
    
    h1 { 
        margin: 0px;
        padding: 20px 0px;
        color: black;
    }
    
    .sort-container {
        display: flex;
        justify-content: center;
    }

    .sort-container2 {
        margin: 25px 0px;
        display: flex;
        justify-content: center;
    }
    
    .button-container {
        display: flex;
        justify-content: center;
    }

    .button-container2 {
        display: flex;
        justify-content: center;
    }

    .button-container2 > div {
        display: grid;
        justify-items: center;
        grid-template-columns: auto;
    }
    
    .button {
        display: grid;
    }
    
    button {
        background-color: rgb(98, 255, 221);
        border-radius: 5px;
        margin: 0px 10px 2.5px 0px;
        border: 1px solid black;
        width: 60px;
        height: 30px;
        font-size: 17px;
        text-align: center;
        cursor: pointer;
    }
    
    .sort-container > div > div:nth-child(6) > button:nth-child(1) {
        margin: 0px 0px 2.5px 0px;
    }
    
    .sort-container > div > div:nth-child(6) > button:nth-child(2) {
        margin: 0px 0px 2.5px 0px;
    }
    
    button:hover {
        background-color: rgb(153, 255, 233);
    }
    
    button:active {
        background-color: rgb(153, 255, 233);
        transform: scale(0.99);
        box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.11);
    }

    .strongest-button {
        background-color: rgb(243, 23, 23);
        border-radius: 5px;
        margin: 0px 10px 10px 0px;
        width: 75px;
        height: 35px;
        font-size: 17px;
        text-align: center;
        cursor: pointer;
    }

    .strongest-button:hover {
        background-color: rgb(245, 104, 104);
    }
    
    .strongest-button:active {
        background-color: rgb(243, 23, 23);
        transform: scale(0.99);
        box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.11);
    }

    .weakest-button {
        background-color: rgb(94, 216, 200);
        border-radius: 5px;
        margin: 0px 10px 0px 0px;
        width: 70px;
        height: 35px;
        font-size: 17px;
        text-align: center;
        cursor: pointer;
    }

    .weakest-button:hover {
        background-color: rgb(125, 238, 223);
    }
    
    .weakest-button:active {
        background-color: rgb(94, 216, 200);
        transform: scale(0.99);
        box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.11);
    }

    .rarest-button {
        background-color: rgb(255, 220, 22);
        border-radius: 5px;
        margin: 0px 10px 10px 0px;
        width: 60px;
        height: 35px;
        font-size: 17px;
        text-align: center;
        cursor: pointer;
    }

    .rarest-button:hover {
        background-color: rgb(255, 244, 182);
    }
    
    .rarest-button:active {
        background-color: rgb(255, 220, 22);
        transform: scale(0.99);
        box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.11);
    }

    .basic-button {
        background-color: rgb(182, 189, 190);
        border-radius: 5px;
        margin: 0px 10px 0px 0px;
        width: 85px;
        height: 35px;
        font-size: 17px;
        text-align: center;
        cursor: pointer;
    }

    .basic-button:hover {
        background-color: rgb(205, 218, 219);
    }
    
    .basic-button:active {
        background-color: rgb(182, 189, 190);
        transform: scale(0.99);
        box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.11);
    }

    .strongest-rarest-button {
        background-color: rgb(208, 117, 250);
        border-radius: 5px;
        margin: 0px 10px 10px 0px;
        width: 140px;
        height: 35px;
        font-size: 17px;
        text-align: center;
        cursor: pointer;
    }

    .strongest-rarest-button:hover {
        background-color: rgb(221, 165, 247);
    }
    
    .strongest-rarest-button:active {
        background-color: rgb(208, 117, 250);
        transform: scale(0.99);
        box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.11);
    }

    .weakest-basic-button {
        background-color: rgb(122, 168, 252);
        border-radius: 5px;
        margin: 0px 10px 0px 0px;
        width: 160px;
        height: 35px;
        font-size: 17px;
        text-align: center;
        cursor: pointer;
    }

    .weakest-basic-button:hover {
        background-color: rgb(158, 190, 250);
    }
    
    .weakest-basic-button:active {
        background-color: rgb(122, 168, 252);
        transform: scale(0.99);
        box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.11);
    }

    .search-buttons-container {
        display: grid;
        justify-items: center;
    }
    
    .confirm {
        background-color: rgb(116, 255, 98);
        border-radius: 5px;
        margin: 0px 0px 15px 0px;
        border: 1px solid black;
        width: 70px;
        height: 35px;
        font-size: 17px;
        text-align: center;
        cursor: pointer;
    }
    
    .confirm:hover {
        background-color: rgb(164, 255, 152);
    }
    
    .confirm:active {
        background-color: rgb(164, 255, 152);
        transform: scale(0.99);
        box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.11);
    }
    
    .reset {
        background-color: rgb(255, 135, 98);
        border-radius: 5px;
        margin: 0px 0px 0px 0px;
        border: 1px solid black;
        cursor: pointer;
    }
    
    .reset:hover {
        background-color: rgb(255, 171, 145);
    }
    
    .reset:active {
        background-color: rgb(255, 171, 145);
        transform: scale(0.99);
        box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.11);
    }

    .details-container {
        margin: 50px 0px 0px 0px;
        display: grid;
        justify-items: center;
    }

    details {
        display: grid;
        justify-items: center;
    }

    details > summary {
        display: grid;
        justify-items: center;
        align-self: center;
        align-content: center;
        background-color: rgba(221, 110, 255, 0.384);
        border: 2px solid black;
        width: 100px;
        height: 30px;
        cursor: pointer;
        color: rgb(214, 226, 43);
        text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;
        margin: 0px 25px;
    }

    .search-traits-container {
        display: grid;
        justify-items: center;
    }

    .search-wallet-container {
        display: grid;
        justify-items: center;
        margin-top: 50px;
    }

    .search-wallet-container > input {
        margin-bottom: 15px;
    }

    .search-wallet-container > button {
        background-color: rgb(116, 255, 98);
        border-radius: 5px;
        margin: 0px 0px 15px 0px;
        border: 1px solid black;
        width: 70px;
        height: 35px;
        font-size: 17px;
        text-align: center;
        font-family: Bangers;
        cursor: pointer;
    }

    .search-wallet-container > button:hover {
        background-color: rgb(164, 255, 152);
    }

    .search-wallet-container > button:active {
        background-color: rgb(164, 255, 152);
        transform: scale(0.99);
        box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.11);
    }

    .traits-container {
        display: grid;
        justify-items: center;
        margin: 50px 0px;
    }

    .traits-container > div {
        display: grid;
        justify-items: center;
        grid-template-columns: auto auto;
        grid-gap: 15px;
    }

    .traits-container > h3 {
        margin: 50px 0px;
    }

    .traits-container > div > div {
        display: grid;
        justify-items: center;
        margin: 10px 0px;
    }

    .traits-container > div > div > label {
        font-size: 17px;
        font-weight: 500;
        color: black;
    }

    .traits-container > div > div > select {
        font-size: 15px;
        font-weight: 700;
        color: black;
        width: 100px;
        text-align: center;
        background-color: rgb(233, 199, 255);
        border-radius: 5px;
    }

    .traits-container > div > div > select > option {
        font-size: 15px;
        font-weight: 700;
        color: black;
        width: 150px;
        background-color: rgb(205, 131, 255);
        border-radius: 5px;
    }

    /* .traits-container > div > p {
        font-size: 15px;
        font-weight: 500;
        color: black;
        width: 150px;
        text-align: center;
    } */







/*------------------ Gooey Info ---------------------------------------------------------*/

    span {
        font-family: Arial, Helvetica, sans-serif;
        font-weight: 700;
        text-align: center;
        color: rgb(253, 242, 255);
        text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;
    }

    .info-container {
        display: grid; 
        justify-items: center;  
        margin: 100px 5px 100px 5px;
        grid-template-columns: auto auto auto auto auto auto;
        padding: 10px;
        grid-gap: 15px;
        color: rgb(64, 59, 70);
        /* text-shadow: -1px -1px 0 white, 1px -1px 0 white, -1px 1px 0 black, 1px 1px 0 black; */
    }

    @media only screen and (min-width: 1151px) and (max-width: 1400px) {
        
        .info-container {
            grid-template-columns: auto auto auto auto auto;
        }  
    }

    @media only screen and (min-width: 916px) and (max-width: 1150px) {
        
        .info-container {
            grid-template-columns: auto auto auto auto;
        }  
    }

    @media only screen and (min-width: 700px) and (max-width: 915px) {
        
        .info-container {
            grid-template-columns: auto auto auto;
        }  

        .modal {
            height: 85vh !important;
        }
    }

    @media only screen and (min-width: 450px) and (max-width: 699px) {

        .modal {
            margin: 10% 15% 15% 15% !important;
            width: 90vw !important;
            height: 85vh;
        }
        
        .info-container {
            grid-template-columns: auto auto !important;
        }  
    }

    @media only screen and (min-width: 500px) and (max-width: 590px) { 

        .modal {
            height: 85vh !important;
        }
    }

    @media only screen and (min-width: 456) and (max-width: 499px) { 

        .modal {
            height: 55vh !important;
        }
    }

    @media only screen and (min-width: 350px) and (max-width: 455px) {

        .modal {
            margin: 25% 15% 15% 15% !important;
            width: 90vw !important;
            height: 75vh !important;
        }
        
        .info-container {
            grid-template-columns: auto !important;
        }  

        .button-container {
            display: grid;
            grid-template-columns: auto auto auto;
            grid-gap: 15px 0px;
        }

        .button-container2 {
            display: grid;
            grid-template-columns: auto;
            grid-gap: 15px 10px;
        }

        .trait-container > div > p {
            border: none !important;
        }
    }

    @media only screen and (min-width: 281px) and (max-width: 349px) {

        .modal {
            margin: 25% 10% 15% 10% !important;
            width: auto !important;
            height: 65vh !important;
        }

        .button-container {
            display: grid;
            grid-template-columns: auto auto auto;
            grid-gap: 15px 0px;
        }

        .button-container2 {
            display: grid;
            grid-template-columns: auto;
            grid-gap: 15px 10px;
        }

        span {
            font-weight: 700;
        }
        
        /* .Gooey {
            margin: 0px 2.5px !important;
        }

        .number-container > h3 {
            font-size: 17px;
        }

        .number-container > h3 > span {
            font-size: 18px;
        }

        .img-container > img {
            width: 137px !important; 
            height: 137px !important; 
        }

        .rank-container > p {
            font-size: 12px !important;
            font-weight: 500 !important;
        }

        .rank-container > p > span {
            font-size: 12.5px !important;
            font-weight: 700 !important;
            text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000 !important;
        } */

        .stats-container > p {
            font-size: 12px !important;
            font-weight: 500 !important;
        }

        .stats-container > p > span {
            font-size: 12px !important;
            font-weight: 700 !important;
        }

        .stats-container > p:nth-child(6) > span {
            font-size: 15px !important;
            font-weight: 700 !important;
            text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000 !important;
        }

        .trait-container > div > p {
            font-size: 12px !important;
            font-weight: 500 !important;
        }

        .rarity-container > div > p {
            font-size: 12px !important;
            font-weight: 500 !important;
        }

        .rarity-container > div > p > span {
            font-size: 15px !important;
            font-weight: 700 !important;
        }

        .trait-container > div > p {
            border: none !important;
        }

        .info-container {
            grid-template-columns: auto !important;
        } 
    }


    @media only screen and (min-width: 81px) and (max-width: 280px) {

        .modal {
            margin: 35% 10% 15% 10% !important;
            width: auto !important;
            height: 65vh !important;
        }

        .info-container {
            grid-template-columns: auto;
        }

        .button-container {
            display: grid;
            grid-template-columns: auto auto auto;
            grid-gap: 15px 0px;
        }

        .button-container2 {
            display: grid;
            grid-template-columns: auto;
            grid-gap: 15px 10px;
        }

        span {
            font-weight: 700;
        } 

        .stats-container > p {
            font-size: 12px !important;
            font-weight: 500 !important;
        }

        .stats-container > p > span {
            font-size: 12px !important;
            font-weight: 700 !important;
        }

        .stats-container > p:nth-child(6) > span {
            font-size: 15px !important;
            font-weight: 700 !important;
            text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000 !important;
        }

        .trait-container > div:nth-child(2) > p:nth-child(7) {
            border-bottom: none !important;
        }

        .trait-container > div:nth-child(2) > p:nth-child(8) {
            border-bottom: none !important;
        }

        .trait-container > div:nth-child(1) > p:nth-child(7) {
            border-bottom: none !important;
        }

        .trait-container > div:nth-child(1) > p:nth-child(8) {
            border-bottom: none !important;
        }

        .trait-container > div > p {
            font-size: 9px !important;
            font-weight: 500 !important;
            border: none !important;
        }

        .rarity-container > div > p {
            font-size: 12px !important;
            font-weight: 500 !important;
        }

        .rarity-container > div > p > span {
            font-size: 15px !important;
            font-weight: 700 !important;
        }
        
    }

    .Gooey {
        background: linear-gradient(90deg, rgba(142, 91, 223, 0.3) 0%, rgba(212, 108, 216, 0.3) 100%);
        border: 2px solid rgba(21, 48, 122, 0.473);
        border-radius: 15px;
        margin: 5px 0px;
        transition: transform ease 200ms;
    }

    .Gooey:hover {
        cursor: pointer;
        border: 2px solid #531853;
        /* box-shadow: 2px 2px 20px rgb(250, 193, 255); */
        transform: translate(0, -10px);
    }

    .rank-container {
        display: flex;
        justify-content: left;
        z-index: 3;
        margin: 0px;
        padding: 0px;
        height: 0px;
    }

    .rank-container > p {
        color: white;
        margin: 0px;
        padding: 2.5px 5px;
        z-index: 3;
        font-size: 15px;
        text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;
    }

    .rank-container > p > span {
        font-size: 17px;
        font-weight: 700;
    }

    .img-container {
        display: grid; 
        justify-items: center; 
        align-items: center; 
        margin: 0px;
    }

    .img-container > img {
        width: 200px; 
        height: 200px; 
        border-radius: 12.5px 12.5px 0px 0px; 
        border: 2px solid rgb(75, 6, 75);
    }

    .number-container {
        display: grid;
        margin: 0px;
        padding: 2.5px 0px 5px 0px;
        justify-items: center; 
    }

    .number-container > h3 {
        margin: 0px;
        font-weight: 500;
        text-align: center;
        color: rgb(253, 242, 255);
        text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;
    }

    .stats-container {
        display: grid;
        grid-template-columns: auto auto auto; 
        grid-gap: 5px; 
        justify-items:center; 
        align-items: center;
        padding: 5px 0px;
        border-top: 1px solid black;
    }

    .stats-container > p {
        font-size: 15px;
        text-align: center;
        margin: 0px;
    }

    /* .stats-container > p:nth-child(1) > span {
        color: aquamarine;
    }

    .stats-container > p:nth-child(2) > span {
        color: aquamarine;
    } */

    /* .stats-container > p:nth-child(3) > span {
        color: beige;
    } */

    /* .stats-container > p:nth-child(4) > span {
        color: aquamarine;
    } */

    /* .stats-container > p:nth-child(5) > span {
        color: aquamarine;
    } */

    .stats-container > p:nth-child(6) > span {
        font-size: 20px;
        /* color: aquamarine; */
    }

    .rarity-container {
        display: grid;
        justify-items: center;
        font-size: 15px;
        text-align: center;
        grid-template-columns: auto auto;
        border-top: 1px solid black;
        margin: 5px 0px;
    }

    .rarity-container > div > p {
        font-size: 15px;
        margin: 2.5px 0px 0px 0px;
    }

    .rarity-container > div > p > span {
        font-size: 18px;
        text-align: center;
        margin: 5px 0px;
        /* color: rgb(205, 166, 241); */
    }

    .rarity-container > .show-gooey-button-container {
        margin: 0px;
        padding: 5px 0px 0px 0px;
     } 

     .rarity-container > .show-gooey-button-container > button {
        display: block;
        justify-content: center;
        width: 40px;
        height: 30px;
        text-align: center;
        font-size: 18px;
        margin: 0px;
        padding: 0px;
     } 

    /* .parent-container {
        display: grid;
        grid-template-columns: 155px 50px;
        justify-items: center;
        padding: 10px 0px;
        border-top: 1px solid white;
        margin-top: 10px;
    }

    .parent-container > p {
        font-size: 14px;
        margin: 0px;
        text-align: center;
    } */

    .trait-container {
        display: grid; 
        grid-template-columns: auto auto; 
        justify-items: center; 
        /* border-top: 1px solid black; */
        padding: 0px 0px 0px 0px;
    }

    .trait-container > div {
        display: grid;
        grid-template-columns: auto auto; 
        /* border-left: 1px solid white; */
        margin: 0px;
        padding: 0px;
    }

    .trait-container > div > p {
        font-size: 12px;
        max-width: 75px;
        padding: 5px 5px;
        margin: 0px;
        text-align: center;
        text-shadow: none;
        border-bottom: 1px solid white;
        /* border-right: 1px solid white; */
    }

    /* .trait-container > div:nth-child(1) > p:nth-child(1) {
        border-right: none;
    }

    .trait-container > div:nth-child(1) > p:nth-child(3) {
        border-right: none;
    }

    .trait-container > div:nth-child(1) > p:nth-child(5) {
        border-right: none;
    }

    .trait-container > div:nth-child(1) > p:nth-child(7) {
        border-right: none;
    } */

    /* .trait-container > div:nth-child(2) > p {
        border-left: none;
        border-right: none;
        padding: 5px 5px -5px 0px !important;
    } */

    .trait-container > div:nth-child(2) > p:nth-child(7) {
        border-bottom: none;
    }

    .trait-container > div:nth-child(2) > p:nth-child(8) {
        border-bottom: none;
    }

    .trait-container > div:nth-child(1) > p:nth-child(7) {
        border-bottom: none;
    }

    .trait-container > div:nth-child(1) > p:nth-child(8) {
        border-bottom: none;
    }

    /* .trait-container2 {
        display: none; 
        grid-template-columns: auto auto; 
        justify-items: center; 
        border-top: 1px solid black;
        padding: 5px 0px;
        grid-gap: 5px;
    }

    .trait-container2 > p {
        font-size: 14px;
        max-width: 75px;
        padding: 5px 0px;
        margin: 0px;
        text-align: center;
    } */
    
/*------------------ Gooey Info End -----------------------------------------------------*/



/*************************************** Modal ************************************************************/

.show-gooey-button-container {
  display: flex;
  justify-content: right;
  margin: 0px;
  padding: 0px;
}

.show-gooey-button-container > button {
  display: flex;
  justify-content: right;
  margin: 0px;
  background-color: rgb(220 218 243);
}

.show-gooey-button-container > button:hover {
  background-color: rgb(191, 179, 250);
  transition: all 0.3s;
}

.modal-img-container {
    width: 100%;
    margin: 0px;
}

.modal-img-container > img {
    width: 100%;
    height: 500px;
    border-radius: 25px 25px 0px 0px;
    margin: 0px 0px 0px 0px;
}

.modal {
    background-color: #000000;
    margin: 2.5% 15% 15% 15%;
    width: 500px;
    height: 85vh;
    border-radius: 25px;
    box-shadow: 1px 1px 15px black;
}

@media (min-width: 91px) and (max-width: 730px) {
    .modal-img-container {
        width: 100%;
        margin: 0px;
    }

    .modal-img-container > img {
        width: 100% !important;
        height: auto !important;
        border-radius: 25px 25px 0px 0px !important;
        margin: 0px !important;
    }

    .modal {
        background-color: #000000;
        margin: 5% 15% 15% 15%;
        width: 90vw;
        /* height: 600px; */
        border-radius: 25px;
        box-shadow: 1px 1px 15px black;
    }

}

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
    z-index: 5;
}

.modal-info-container {
    display: grid;
}

.modal-info-container > h2 {
    margin: -40px 0px 0px 5px;
}

/* .modal-info-container > h2 > span {
    font-size: 38px;
    font-weight: 700;
    margin: -40px 0px 0px 5px;
} */

.opensea-container {
    display: flex;
    justify-content: right;
    margin: -40px 10px 0px 0px;
}

#opensea > img {
    width: 30px;
    height: 30px;
}

#opensea > img:hover {
    transform: scale(1.1);
    transition: all 0.25s;
    cursor: pointer;
}

.modal-content {
    margin-top: -52px;
    display: grid;
    justify-items: center;
    grid-template-columns: auto auto;
}

/* .modal > div:nth-child(3) {
  display: flex;
  justify-content: center;
} */

.close-container {
    display: flex;
    justify-content: right;
    padding: 10px 5px 0px 0px;
    z-index: 5;
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
    z-index: 5;
}

.close:hover {
    background-color: rgb(240, 0, 0);
}

@media (min-width: 91px) and (max-width: 455px) {


}

/*************************************** Modal ************************************************************/



.load-more {
    display: flex;
    justify-content: right;
    margin-bottom: 100px;
    padding: 0px 50px 0px 0px;
}

.load-more > button {
    font-family: Bangers;
    width: 100px;
    font-weight: 500;
}






    @media only screen and (min-width: 10px) and (max-width: 290px) {
    
      h1 {
        font-size: 40px;
      }
      
    }
    
    

    
    
    
    </style>
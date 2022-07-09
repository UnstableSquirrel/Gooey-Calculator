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
    
    
    
    
    
    
    
    
    
    
    
    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    
    //     const getData = async() => {
    //       for (let i = 0; i < 94; i++) {
    //       counter = '["'+i+'"]'
    //       // console.log(counter)
    
    //       var data = qs1.stringify({
    //         'chain': 'polygon',
    //         'network': 'mainnet',
    //         'contract': '0xFAB55Fe6E7483b1ADBAcC377C2544b4ee79010c1',
    //         'abi': gooeyABI,
    //         'method': 'gooeyAttributes',
    //         'args': counter,
    //         // 'args': '["94"]',
    //       });
    
    //       // var data = {
    //       //   'chain': 'polygon',
    //       //   'network': 'mainnet',
    //       //   'contract': '0xFAB55Fe6E7483b1ADBAcC377C2544b4ee79010c1',
    //       //   'abi': gooeyABI,
    //       //   'method': 'gooeyAttributes',
    //       //   'args': '["94"]',
    //       // }
    
    //       //Fruit Contract Data
    //       // var data = qs1.stringify({
    //       //   'chain': 'polygon',
    //       //   'network': 'mainnet',
    //       //   'contract': '0x2375874eb409095efa6090bf7085ae3922543c72',
    //       //   'abi' : '[{"anonymous": false,"inputs": [{"indexed": true,"internalType": "address","name": "previousOwner","type": "address"},{"indexed": true,"internalType": "address","name": "newOwner","type": "address"}],"name": "OwnershipTransferred","type": "event"},{"inputs": [{"internalType": "address","name": "_dToken","type": "address"},{"internalType": "address","name": "_gToken","type": "address"},{"internalType": "address","name": "_gFruit","type": "address"},{"internalType": "address","name": "_gCore","type": "address"}],"name": "loadExterns","outputs": [],"stateMutability": "nonpayable","type": "function"},{"inputs": [],"name": "renounceOwnership","outputs": [],"stateMutability": "nonpayable","type": "function"},{"inputs": [{"internalType": "address","name": "newOwner","type": "address"}],"name": "transferOwnership","outputs": [],"stateMutability": "nonpayable","type": "function"},{"inputs": [{"internalType": "address","name": "_dToken","type": "address"},{"internalType": "address","name": "_gToken","type": "address"},{"internalType": "address","name": "_gFruit","type": "address"},{"internalType": "address","name": "_gCore","type": "address"}],"stateMutability": "nonpayable","type": "constructor"},{"inputs": [{"internalType": "address","name": "owner","type": "address"},{"internalType": "uint256","name": "baseGooeyId","type": "uint256"}],"name": "getTumblingFeesForGooeys","outputs": [{"internalType": "uint256[][]","name": "gooeyFees","type": "uint256[][]"}],"stateMutability": "view","type": "function"},{"inputs": [{"internalType": "address","name": "owner","type": "address"}],"name": "loadAllGooeysForPlayer","outputs": [{"internalType": "uint256[][]","name": "gooeyStats","type": "uint256[][]"}],"stateMutability": "view","type": "function"},{"inputs": [{"internalType": "address","name": "owner","type": "address"},{"internalType": "uint256","name": "maxFruitID","type": "uint256"}],"name": "loadFruitByOwner","outputs": [{"internalType": "uint256[]","name": "ownerFruitAmts","type": "uint256[]"}],"stateMutability": "view","type": "function" }, { "inputs": [], "name": "loadGlobalSettings", "outputs": [ { "internalType": "uint256[]", "name": "settings", "type": "uint256[]" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "uint256[]", "name": "ids", "type": "uint256[]" } ], "name": "loadGooeyStats", "outputs": [ { "internalType": "uint256[][]", "name": "gooeyStats", "type": "uint256[][]" } ], "stateMutability": "view","type": "function" }, { "inputs": [ { "internalType": "address", "name": "owner", "type": "address" }, { "internalType": "uint256", "name": "maxFruitID", "type": "uint256" } ] ,"name": "loadTokenAndFruitInfo", "outputs": [ { "internalType": "uint256[][]", "name": "tokenAndFruitAmts", "type": "uint256[][]" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "owner", "type": "address" } ], "name": "loadTokenInfo", "outputs": [ { "internalType": "uint256[]", "name": "tokenAmts", "type": "uint256[]" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "owner", "outputs": [ { "internalType": "address", "name": "", "type": "address" } ], "stateMutability": "view", "type": "function" } ] ',
    //       //   'method': 'loadGooeyStats',
    //       //   'args': '[["94", "10"]]',
    //       // });
          
    //       var config = {
    //         method: 'post',
    //         url: 'https://api.gaming.chainsafe.io/evm/call',
    //         headers: { },
    //         data : data
    //       };
      
    //       // @ts-ignore
    //       axios(config)
    //       .then(function (response) {
    //         let tempArray = []
    //         let tempArray2 = []
    
    //         let arr = Object.entries(response.data)
    //         const a2 = Object.entries(arr).map(key => ({ ...key[1]}));
    //         // console.log(a2)
    //         tempArray.push(a2)
    //         tempArray2.push(tempArray[0][0][1])
    //         // console.log(tempArray2)
    
    //         let t = tempArray2.toString()
    
    //         let reg = t.match(/"-?\d+",?]?/g)
    //         // console.log(reg)
    //         let t2 = reg.toString()
    //         let reg2 = t2.match(/-?\d+/g)
    
    //         // console.log(reg2)
    //         let newGooey = []
    
    //         newGooey = {
    //             "GooeyId" : parseInt(reg2[56]),
    //             "HP" :  parseInt(reg2[1]),
    //             "ATK" : parseInt(reg2[2]),
    //             "DEF" :  parseInt(reg2[3]),
    //             "SPD" :  parseInt(reg2[4]),
    //             "Total" : parseInt(reg2[1]) + parseInt(reg2[2]) + parseInt(reg2[3]) + parseInt(reg2[4]),
    //             "BirthBlock" :  parseInt(reg2[10]),
    //             "TotalTumbles" :  parseInt(reg2[17]),
    //             "TumblesRemaining" :  parseInt(reg2[12]),
    //             "Gen" :  parseInt(reg2[11]),
    //             "Parent1" :  parseInt(reg2[18]),
    //             "Parent2" :  parseInt(reg2[19]),
    //             "Nexus" :  parseInt(reg2[14]),
    //             "TumbleRollBonus" :  parseInt(reg2[16]),
    //             "FoodStore" : parseInt(reg2[15]) * 2,
    //           }
    
    //         // Gooeys.push(newGooey)
    
    //         console.log(newGooey)
    
    //       })
    //       .catch(function (error) {
    //         console.log(error);
    //       });
    //     }
    //   }
    
    //   getData().then(data => console.log(data));
    
    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    
    







    
    gooeyData
    
    
    
    
    let Gooeys
    
    
    Gooeys = gooeyData
    
    
    // console.log(Gooeys)
    
    // let g2 = JSON.stringify(Gooeys)
    
    // console.log(g2)










    let g = Gooeys





    // let BackgroundTraits = [

    //     {"Sunset Forest 1" : Gooeys.filter(goo => goo.Background === "Sunset Forest").length},
    //     {"Sunset Forest 2" : (Gooeys.filter(goo => goo.Background === "Sunset Forest").length / Gooeys.length * 100).toFixed(2)},

    //     {"Green Root 1" : Gooeys.filter(goo => goo.Background === "Green Root").length},
    //     {"Green Root 2" : (Gooeys.filter(goo => goo.Background === "Green Root").length / Gooeys.length * 100).toFixed(2)},

    //     {"Ruby Root 1" : Gooeys.filter(goo => goo.Background === "Ruby Root").length},
    //     {"Ruby Root 2" : (Gooeys.filter(goo => goo.Background === "Ruby Root").length / Gooeys.length * 100).toFixed(2)},

    //     {"Starry Night 1" : Gooeys.filter(goo => goo.Background === "Starry Night").length},
    //     {"Starry Night 2" : (Gooeys.filter(goo => goo.Background === "Starry Night").length / Gooeys.length * 100).toFixed(2)},

    //     {"Dawn Forest 1" : Gooeys.filter(goo => goo.Background === "Dawn Forest").length},
    //     {"Dawn Forest 2" : (Gooeys.filter(goo => goo.Background === "Dawn Forest").length / Gooeys.length * 100).toFixed(2)},

    //     {"Radiant Forest 1" : Gooeys.filter(goo => goo.Background === "Radiant Forest").length},
    //     {"Radiant Forest 2" : (Gooeys.filter(goo => goo.Background === "Radiant Forest").length / Gooeys.length * 100).toFixed(2)},

    //     {"Violet Root 1" : Gooeys.filter(goo => goo.Background === "Violet Root").length},
    //     {"Violet Root 2" : (Gooeys.filter(goo => goo.Background === "Violet Root").length / Gooeys.length * 100).toFixed(2)},

    //     {"Full Moon 1" : Gooeys.filter(goo => goo.Background === "Full Moon").length},
    //     {"Full Moon 2" : (Gooeys.filter(goo => goo.Background === "Full Moon").length / Gooeys.length * 100).toFixed(2)},

    //     {"Emerald Root 1" : Gooeys.filter(goo => goo.Background === "Emerald Root").length},
    //     {"Emerald Root 2" : (Gooeys.filter(goo => goo.Background === "Emerald Root").length / Gooeys.length * 100).toFixed(2)},

    // ]

    // let BodyTraits = [
    //     {"2049 1" : Gooeys.filter(goo => goo.Body === "2049").length},
    //     {"2049 2" : (Gooeys.filter(goo => goo.Body === "2049").length / Gooeys.length * 100).toFixed(2)},

    //     {"90s Wave 1" : Gooeys.filter(goo => goo.Body === "90s Wave").length},
    //     {"90s Wave 2" : (Gooeys.filter(goo => goo.Body === "90s Wave").length / Gooeys.length * 100).toFixed(2)},

    //     {"Ruby Root 1" : Gooeys.filter(goo => goo.Body === "Ruby Root").length},
    //     {"Ruby Root 2" : (Gooeys.filter(goo => goo.Body === "Ruby Root").length / Gooeys.length * 100).toFixed(2)},

    //     {"Amethyst Rune 1" : Gooeys.filter(goo => goo.Body === "Amethyst Rune").length},
    //     {"Amethyst Rune 2" : (Gooeys.filter(goo => goo.Body === "Amethyst Rune").length / Gooeys.length * 100).toFixed(2)},

    //     {"Blue 1" : Gooeys.filter(goo => goo.Body === "Blue").length},
    //     {"Blue 2" : (Gooeys.filter(goo => goo.Body === "Blue").length / Gooeys.length * 100).toFixed(2)},

    //     {"Blue Patterned 1" : Gooeys.filter(goo => goo.Body === "Blue Patterned").length},
    //     {"Blue Patterned 2" : (Gooeys.filter(goo => goo.Body === "Blue Patterned").length / Gooeys.length * 100).toFixed(2)},

    //     {"Cosmos 1" : Gooeys.filter(goo => goo.Body === "Cosmos").length},
    //     {"Cosmos 2" : (Gooeys.filter(goo => goo.Body === "Cosmos").length / Gooeys.length * 100).toFixed(2)},

    //     {"Dark Marble 1" : Gooeys.filter(goo => goo.Body === "Dark Marble").length},
    //     {"Dark Marble 2" : (Gooeys.filter(goo => goo.Body === "Dark Marble").length / Gooeys.length * 100).toFixed(2)},

    //     {"Dark Pearl 1" : Gooeys.filter(goo => goo.Body === "Dark Pearl").length},
    //     {"Dark Pearl 2" : (Gooeys.filter(goo => goo.Body === "Dark Pearl").length / Gooeys.length * 100).toFixed(2)},

    //     {"Dark Pink 1" : Gooeys.filter(goo => goo.Body === "Dark Pink").length},
    //     {"Dark Pink 2" : (Gooeys.filter(goo => goo.Body === "Dark Pink").length / Gooeys.length * 100).toFixed(2)},

    //     {"Dreamspace 1" : Gooeys.filter(goo => goo.Body === "Dreamspace").length},
    //     {"Dreamspace 2" : (Gooeys.filter(goo => goo.Body === "Dreamspace").length / Gooeys.length * 100).toFixed(2)},

    //     {"Emerald Rune 1" : Gooeys.filter(goo => goo.Body === "Emerald Rune").length},
    //     {"Emerald Rune 2" : (Gooeys.filter(goo => goo.Body === "Emerald Rune").length / Gooeys.length * 100).toFixed(2)},

    //     {"Ghostly 1" : Gooeys.filter(goo => goo.Body === "Ghostly").length},
    //     {"Ghostly 2" : (Gooeys.filter(goo => goo.Body === "Ghostly").length / Gooeys.length * 100).toFixed(2)},

    //     {"Golden 1" : Gooeys.filter(goo => goo.Body === "Golden").length},
    //     {"Golden 2" : (Gooeys.filter(goo => goo.Body === "Golden").length / Gooeys.length * 100).toFixed(2)},

    //     {"Heart Stone 1" : Gooeys.filter(goo => goo.Body === "Heart Stone").length},
    //     {"Heart Stone 2" : (Gooeys.filter(goo => goo.Body === "Heart Stone").length / Gooeys.length * 100).toFixed(2)},

    //     {"Honey 1" : Gooeys.filter(goo => goo.Body === "Honey").length},
    //     {"Honey 2" : (Gooeys.filter(goo => goo.Body === "Honey").length / Gooeys.length * 100).toFixed(2)},

    //     {"Lavly Mascot 1" : Gooeys.filter(goo => goo.Body === "Lavly Mascot").length},
    //     {"Lavly Mascot 2" : (Gooeys.filter(goo => goo.Body === "Lavly Mascot").length / Gooeys.length * 100).toFixed(2)},

    //     {"Lavly Violet 1" : Gooeys.filter(goo => goo.Body === "Lavly Violet").length},
    //     {"Lavly Violet 2" : (Gooeys.filter(goo => goo.Body === "Lavly Violet").length / Gooeys.length * 100).toFixed(2)},

    //     {"Lavly Wave 1" : Gooeys.filter(goo => goo.Body === "Lavly Wave").length},
    //     {"Lavly Wave 2" : (Gooeys.filter(goo => goo.Body === "Lavly Wave").length / Gooeys.length * 100).toFixed(2)},

    //     {"Light Green 1" : Gooeys.filter(goo => goo.Body === "Light Green").length},
    //     {"Light Green 2" : (Gooeys.filter(goo => goo.Body === "Light Green").length / Gooeys.length * 100).toFixed(2)},

    //     {"Magma Obsidian 1" : Gooeys.filter(goo => goo.Body === "Magma Obsidian").length},
    //     {"Magma Obsidian 2" : (Gooeys.filter(goo => goo.Body === "Magma Obsidian").length / Gooeys.length * 100).toFixed(2)},

    //     {"Mechagoo 1" : Gooeys.filter(goo => goo.Body === "Mechagoo").length},
    //     {"Mechagoo 2" : (Gooeys.filter(goo => goo.Body === "Mechagoo").length / Gooeys.length * 100).toFixed(2)},

    //     {"Moon Stone 1" : Gooeys.filter(goo => goo.Body === "Moon Stone").length},
    //     {"Moon Stone 2" : (Gooeys.filter(goo => goo.Body === "Moon Stone").length / Gooeys.length * 100).toFixed(2)},

    //     {"Neon Obsidian 1" : Gooeys.filter(goo => goo.Body === "Neon Obsidian").length},
    //     {"Neon Obsidian 2" : (Gooeys.filter(goo => goo.Body === "Neon Obsidian").length / Gooeys.length * 100).toFixed(2)},

    //     {"Ocean 1" : Gooeys.filter(goo => goo.Body === "Ocean").length},
    //     {"Ocean 2" : (Gooeys.filter(goo => goo.Body === "Ocean").length / Gooeys.length * 100).toFixed(2)},

    //     {"Outrun 1" : Gooeys.filter(goo => goo.Body === "Outrun").length},
    //     {"Outrun 2" : (Gooeys.filter(goo => goo.Body === "Outrun").length / Gooeys.length * 100).toFixed(2)},

    //     {"Radiant Obsidian 1" : Gooeys.filter(goo => goo.Body === "Radiant Obsidian").length},
    //     {"Radiant Obsidian 2" : (Gooeys.filter(goo => goo.Body === "Radiant Obsidian").length / Gooeys.length * 100).toFixed(2)},

    //     {"Red Patterned 1" : Gooeys.filter(goo => goo.Body === "Red Patterned").length},
    //     {"Red Patterned 2" : (Gooeys.filter(goo => goo.Body === "Red Patterned").length / Gooeys.length * 100).toFixed(2)},

    //     {"Ruby Rune 1" : Gooeys.filter(goo => goo.Body === "Ruby Rune").length},
    //     {"Ruby Rune 2" : (Gooeys.filter(goo => goo.Body === "Ruby Rune").length / Gooeys.length * 100).toFixed(2)},

    //     {"Sapphire Rune 1" : Gooeys.filter(goo => goo.Body === "Sapphire Rune").length},
    //     {"Sapphire Rune 2" : (Gooeys.filter(goo => goo.Body === "Sapphire Rune").length / Gooeys.length * 100).toFixed(2)},

    //     {"Shaman 1" : Gooeys.filter(goo => goo.Body === "Shaman").length},
    //     {"Shaman 2" : (Gooeys.filter(goo => goo.Body === "Shaman").length / Gooeys.length * 100).toFixed(2)},

    //     {"Spellfire Obsidian 1" : Gooeys.filter(goo => goo.Body === "Spellfire Obsidian").length},
    //     {"Spellfire Obsidian 2" : (Gooeys.filter(goo => goo.Body === "Spellfire Obsidian").length / Gooeys.length * 100).toFixed(2)},

    //     {"Spike Mascot 1" : Gooeys.filter(goo => goo.Body === "Spike Mascot").length},
    //     {"Spike Mascot 2" : (Gooeys.filter(goo => goo.Body === "Spike Mascot").length / Gooeys.length * 100).toFixed(2)},

    //     {"Spiral Candy 1" : Gooeys.filter(goo => goo.Body === "Spiral Candy").length},
    //     {"Spiral Candy 2" : (Gooeys.filter(goo => goo.Body === "Spiral Candy").length / Gooeys.length * 100).toFixed(2)},

    //     {"Spiral Lapis 1" : Gooeys.filter(goo => goo.Body === "Spiral Lapis").length},
    //     {"Spiral Lapis 2" : (Gooeys.filter(goo => goo.Body === "Spiral Lapis").length / Gooeys.length * 100).toFixed(2)},

    //     {"Spiral Violet 1" : Gooeys.filter(goo => goo.Body === "Spiral Violet").length},
    //     {"Spiral Violet 2" : (Gooeys.filter(goo => goo.Body === "Spiral Violet").length / Gooeys.length * 100).toFixed(2)},

    //     {"Spiral Wave 1" : Gooeys.filter(goo => goo.Body === "Spiral Wave").length},
    //     {"Spiral Wave 2" : (Gooeys.filter(goo => goo.Body === "Spiral Wave").length / Gooeys.length * 100).toFixed(2)},

    //     {"Starry 1" : Gooeys.filter(goo => goo.Body === "Starry").length},
    //     {"Starry 2" : (Gooeys.filter(goo => goo.Body === "Starry").length / Gooeys.length * 100).toFixed(2)},

    //     {"Tea Stone 1" : Gooeys.filter(goo => goo.Body === "Tea Stone").length},
    //     {"Tea Stone 2" : (Gooeys.filter(goo => goo.Body === "Tea Stone").length / Gooeys.length * 100).toFixed(2)},

    //     {"Violet Stone 1" : Gooeys.filter(goo => goo.Body === "Violet Stone").length},
    //     {"Violet Stone 2" : (Gooeys.filter(goo => goo.Body === "Violet Stone").length / Gooeys.length * 100).toFixed(2)},

    // ]

    // let EarsTraits = [

    //     {"Amethyst Fairy 1" : Gooeys.filter(goo => goo.Ears === "Amethyst Fairy").length},
    //     {"Amethyst Fairy 2" : (Gooeys.filter(goo => goo.Ears === "Amethyst Fairy").length / Gooeys.length * 100).toFixed(2)},

    //     {"Amethyst Owlear 1" : Gooeys.filter(goo => goo.Ears === "Amethyst Owlear").length},
    //     {"Amethyst Owlear 2" : (Gooeys.filter(goo => goo.Ears === "Amethyst Owlear").length / Gooeys.length * 100).toFixed(2)},

    //     {"Amethyst Runegram 1" : Gooeys.filter(goo => goo.Ears === "Amethyst Runegram").length},
    //     {"Amethyst Runegram 2" : (Gooeys.filter(goo => goo.Ears === "Amethyst Runegram").length / Gooeys.length * 100).toFixed(2)},

    //     {"Blue Bunnyear 1" : Gooeys.filter(goo => goo.Ears === "Blue Bunnyear").length},
    //     {"Blue Bunnyear 2" : (Gooeys.filter(goo => goo.Ears === "Blue Bunnyear").length / Gooeys.length * 100).toFixed(2)},

    //     {"Blue Fishy 1" : Gooeys.filter(goo => goo.Ears === "Blue Fishy").length},
    //     {"Blue Fishy 2" : (Gooeys.filter(goo => goo.Ears === "Blue Fishy").length / Gooeys.length * 100).toFixed(2)},

    //     {"Blue Mecha 1" : Gooeys.filter(goo => goo.Ears === "Blue Mecha").length},
    //     {"Blue Mecha 2" : (Gooeys.filter(goo => goo.Ears === "Blue Mecha").length / Gooeys.length * 100).toFixed(2)},

    //     {"Blue Owlear 1" : Gooeys.filter(goo => goo.Ears === "Blue Owlear").length},
    //     {"Blue Owlear 2" : (Gooeys.filter(goo => goo.Ears === "Blue Owlear").length / Gooeys.length * 100).toFixed(2)},

    //     {"Blurple Bunnyear 1" : Gooeys.filter(goo => goo.Ears === "Blurple Bunnyear").length},
    //     {"Blurple Bunnyear 2" : (Gooeys.filter(goo => goo.Ears === "Blurple Bunnyear").length / Gooeys.length * 100).toFixed(2)},

    //     {"Cobalt Owlear 1" : Gooeys.filter(goo => goo.Ears === "Cobalt Owlear").length},
    //     {"Cobalt Owlear 2" : (Gooeys.filter(goo => goo.Ears === "Cobalt Owlear").length / Gooeys.length * 100).toFixed(2)},

    //     {"Cosmic Runetree 1" : Gooeys.filter(goo => goo.Ears === "Cosmic Runetree").length},
    //     {"Cosmic Runetree 2" : (Gooeys.filter(goo => goo.Ears === "Cosmic Runetree").length / Gooeys.length * 100).toFixed(2)},

    //     {"Dreamscape Fishy 1" : Gooeys.filter(goo => goo.Ears === "Dreamscape Fishy").length},
    //     {"Dreamscape Fishy 2" : (Gooeys.filter(goo => goo.Ears === "Dreamscape Fishy").length / Gooeys.length * 100).toFixed(2)},

    //     {"Emerald Fairy 1" : Gooeys.filter(goo => goo.Ears === "Emerald Fairy").length},
    //     {"Emerald Fairy 2" : (Gooeys.filter(goo => goo.Ears === "Emerald Fairy").length / Gooeys.length * 100).toFixed(2)},

    //     {"Emerald Fishy 1" : Gooeys.filter(goo => goo.Ears === "Emerald Fishy").length},
    //     {"Emerald Fishy 2" : (Gooeys.filter(goo => goo.Ears === "Emerald Fishy").length / Gooeys.length * 100).toFixed(2)},

    //     {"Emerald Owlear 1" : Gooeys.filter(goo => goo.Ears === "Emerald Owlear").length},
    //     {"Emerald Owlear 2" : (Gooeys.filter(goo => goo.Ears === "Emerald Owlear").length / Gooeys.length * 100).toFixed(2)},

    //     {"Emerald Runegram 1" : Gooeys.filter(goo => goo.Ears === "Emerald Runegram").length},
    //     {"Emerald Runegram 2" : (Gooeys.filter(goo => goo.Ears === "Emerald Runegram").length / Gooeys.length * 100).toFixed(2)},

    //     {"Garnet Fairy 1" : Gooeys.filter(goo => goo.Ears === "Garnet Fairy").length},
    //     {"Garnet Fairy 2" : (Gooeys.filter(goo => goo.Ears === "Garnet Fairy").length / Gooeys.length * 100).toFixed(2)},

    //     {"Garnet Owlear 1" : Gooeys.filter(goo => goo.Ears === "Garnet Owlear").length},
    //     {"Garnet Owlear 2" : (Gooeys.filter(goo => goo.Ears === "Garnet Owlear").length / Gooeys.length * 100).toFixed(2)},

    //     {"Golden Owlear 1" : Gooeys.filter(goo => goo.Ears === "Golden Owlear").length},
    //     {"Golden Owlear 2" : (Gooeys.filter(goo => goo.Ears === "Golden Owlear").length / Gooeys.length * 100).toFixed(2)},

    //     {"Green Bunnyear 1" : Gooeys.filter(goo => goo.Ears === "Green Bunnyear").length},
    //     {"Green Bunnyear 2" : (Gooeys.filter(goo => goo.Ears === "Green Bunnyear").length / Gooeys.length * 100).toFixed(2)},

    //     {"Green Fishy 1" : Gooeys.filter(goo => goo.Ears === "Green Fishy").length},
    //     {"Green Fishy 2" : (Gooeys.filter(goo => goo.Ears === "Green Fishy").length / Gooeys.length * 100).toFixed(2)},

    //     {"Green Mecha 1" : Gooeys.filter(goo => goo.Ears === "Green Mecha").length},
    //     {"Green Mecha 2" : (Gooeys.filter(goo => goo.Ears === "Green Mecha").length / Gooeys.length * 100).toFixed(2)},

    //     {"Grey Mecha 1" : Gooeys.filter(goo => goo.Ears === "Grey Mecha").length},
    //     {"Grey Mecha 2" : (Gooeys.filter(goo => goo.Ears === "Grey Mecha").length / Gooeys.length * 100).toFixed(2)},

    //     {"Horned Fawn 1" : Gooeys.filter(goo => goo.Ears === "Horned Fawn").length},
    //     {"Horned Fawn 2" : (Gooeys.filter(goo => goo.Ears === "Horned Fawn").length / Gooeys.length * 100).toFixed(2)},

    //     {"Lime Runetree 1" : Gooeys.filter(goo => goo.Ears === "Lime Runetree").length},
    //     {"Lime Runetree 2" : (Gooeys.filter(goo => goo.Ears === "Lime Runetree").length / Gooeys.length * 100).toFixed(2)},

    //     {"Magma Obsidian 1" : Gooeys.filter(goo => goo.Ears === "Magma Obsidian").length},
    //     {"Magma Obsidian 2" : (Gooeys.filter(goo => goo.Ears === "Magma Obsidian").length / Gooeys.length * 100).toFixed(2)},

    //     {"Neon Obsidian 1" : Gooeys.filter(goo => goo.Ears === "Neon Obsidian").length},
    //     {"Neon Obsidian 2" : (Gooeys.filter(goo => goo.Ears === "Neon Obsidian").length / Gooeys.length * 100).toFixed(2)},

    //     {"Orange Mecha 1" : Gooeys.filter(goo => goo.Ears === "Orange Mecha").length},
    //     {"Orange Mecha 2" : (Gooeys.filter(goo => goo.Ears === "Orange Mecha").length / Gooeys.length * 100).toFixed(2)},

    //     {"Pink Bunnyear 1" : Gooeys.filter(goo => goo.Ears === "Pink Bunnyear").length},
    //     {"Pink Bunnyear 2" : (Gooeys.filter(goo => goo.Ears === "Pink Bunnyear").length / Gooeys.length * 100).toFixed(2)},

    //     {"Pink Mecha 1" : Gooeys.filter(goo => goo.Ears === "Pink Mecha").length},
    //     {"Pink Mecha 2" : (Gooeys.filter(goo => goo.Ears === "Pink Mecha").length / Gooeys.length * 100).toFixed(2)},

    //     {"Purple Owlear 1" : Gooeys.filter(goo => goo.Ears === "Purple Owlear").length},
    //     {"Purple Owlear 2" : (Gooeys.filter(goo => goo.Ears === "Purple Owlear").length / Gooeys.length * 100).toFixed(2)},

    //     {"Radiant Bunnyear 1" : Gooeys.filter(goo => goo.Ears === "Radiant Bunnyear").length},
    //     {"Radiant Bunnyear 2" : (Gooeys.filter(goo => goo.Ears === "Radiant Bunnyear").length / Gooeys.length * 100).toFixed(2)},

    //     {"Radiant Obsidian 1" : Gooeys.filter(goo => goo.Ears === "Radiant Obsidian").length},
    //     {"Radiant Obsidian 2" : (Gooeys.filter(goo => goo.Ears === "Radiant Obsidian").length / Gooeys.length * 100).toFixed(2)},

    //     {"Radiant Owlear 1" : Gooeys.filter(goo => goo.Ears === "Radiant Owlear").length},
    //     {"Radiant Owlear 2" : (Gooeys.filter(goo => goo.Ears === "Radiant Owlear").length / Gooeys.length * 100).toFixed(2)},

    //     {"Ruby Runegram 1" : Gooeys.filter(goo => goo.Ears === "Ruby Runegram").length},
    //     {"Ruby Runegram 2" : (Gooeys.filter(goo => goo.Ears === "Ruby Runegram").length / Gooeys.length * 100).toFixed(2)},

    //     {"Sapphire Bunnyear 1" : Gooeys.filter(goo => goo.Ears === "Sapphire Bunnyear").length},
    //     {"Sapphire Bunnyear 2" : (Gooeys.filter(goo => goo.Ears === "Sapphire Bunnyear").length / Gooeys.length * 100).toFixed(2)},

    //     {"Sapphire Fairy 1" : Gooeys.filter(goo => goo.Ears === "Sapphire Fairy").length},
    //     {"Sapphire Fairy 2" : (Gooeys.filter(goo => goo.Ears === "Sapphire Fairy").length / Gooeys.length * 100).toFixed(2)},

    //     {"Sapphire Runegram 1" : Gooeys.filter(goo => goo.Ears === "Sapphire Runegram").length},
    //     {"Sapphire Runegram 2" : (Gooeys.filter(goo => goo.Ears === "Sapphire Runegram").length / Gooeys.length * 100).toFixed(2)},

    //     {"Slate Owlear 1" : Gooeys.filter(goo => goo.Ears === "Slate Owlear").length},
    //     {"Slate Owlear 2" : (Gooeys.filter(goo => goo.Ears === "Slate Owlear").length / Gooeys.length * 100).toFixed(2)},

    //     {"Spellfire Fishy 1" : Gooeys.filter(goo => goo.Ears === "Spellfire Fishy").length},
    //     {"Spellfire Fishy 2" : (Gooeys.filter(goo => goo.Ears === "Spellfire Fishy").length / Gooeys.length * 100).toFixed(2)},

    //     {"Spellfire Obsidian 1" : Gooeys.filter(goo => goo.Ears === "Spellfire Obsidian").length},
    //     {"Spellfire Obsidian 2" : (Gooeys.filter(goo => goo.Ears === "Spellfire Obsidian").length / Gooeys.length * 100).toFixed(2)},

    //     {"Spellfire Runetree 1" : Gooeys.filter(goo => goo.Ears === "Spellfire Runetree").length},
    //     {"Spellfire Runetree 2" : (Gooeys.filter(goo => goo.Ears === "Spellfire Runetree").length / Gooeys.length * 100).toFixed(2)},

    //     {"Violet Bunnyear 1" : Gooeys.filter(goo => goo.Ears === "Violet Bunnyear").length},
    //     {"Violet Bunnyear 2" : (Gooeys.filter(goo => goo.Ears === "Violet Bunnyear").length / Gooeys.length * 100).toFixed(2)},

    //     {"Violet Owlear 1" : Gooeys.filter(goo => goo.Ears === "Violet Owlear").length},
    //     {"Violet Owlear 2" : (Gooeys.filter(goo => goo.Ears === "Violet Owlear").length / Gooeys.length * 100).toFixed(2)},

    // ]

    // let EyesTraits = [

    //     {"Blue 1" : Gooeys.filter(goo => goo.Eyes === "Blue").length},
    //     {"Blue 2" : (Gooeys.filter(goo => goo.Eyes === "Blue").length / Gooeys.length * 100).toFixed(2)},

    //     {"Blue (Evil) 1" : Gooeys.filter(goo => goo.Eyes === "Blue (Evil)").length},
    //     {"Blue (Evil) 2" : (Gooeys.filter(goo => goo.Eyes === "Blue (Evil)").length / Gooeys.length * 100).toFixed(2)},

    //     {"Blue (Smiling) 1" : Gooeys.filter(goo => goo.Eyes === "Blue (Smiling)").length},
    //     {"Blue (Smiling) 2" : (Gooeys.filter(goo => goo.Eyes === "Blue (Smiling)").length / Gooeys.length * 100).toFixed(2)},

    //     {"Bubblegum 1" : Gooeys.filter(goo => goo.Eyes === "Bubblegum").length},
    //     {"Bubblegum 2" : (Gooeys.filter(goo => goo.Eyes === "Bubblegum").length / Gooeys.length * 100).toFixed(2)},

    //     {"Cold Green 1" : Gooeys.filter(goo => goo.Eyes === "Cold Green").length},
    //     {"Cold Green 2" : (Gooeys.filter(goo => goo.Eyes === "Cold Green").length / Gooeys.length * 100).toFixed(2)},

    //     {"Coral 1" : Gooeys.filter(goo => goo.Eyes === "Coral").length},
    //     {"Coral 2" : (Gooeys.filter(goo => goo.Eyes === "Coral").length / Gooeys.length * 100).toFixed(2)},

    //     {"Dark Blue 1" : Gooeys.filter(goo => goo.Eyes === "Dark Blue").length},
    //     {"Dark Blue 2" : (Gooeys.filter(goo => goo.Eyes === "Dark Blue").length / Gooeys.length * 100).toFixed(2)},

    //     {"Emerald 1" : Gooeys.filter(goo => goo.Eyes === "Emerald").length},
    //     {"Emerald 2" : (Gooeys.filter(goo => goo.Eyes === "Emerald").length / Gooeys.length * 100).toFixed(2)},

    //     {"Fresh 1" : Gooeys.filter(goo => goo.Eyes === "Fresh").length},
    //     {"Fresh 2" : (Gooeys.filter(goo => goo.Eyes === "Fresh").length / Gooeys.length * 100).toFixed(2)},

    //     {"Ghost 1" : Gooeys.filter(goo => goo.Eyes === "Ghost").length},
    //     {"Ghost 2" : (Gooeys.filter(goo => goo.Eyes === "Ghost").length / Gooeys.length * 100).toFixed(2)},

    //     {"Gold 1" : Gooeys.filter(goo => goo.Eyes === "Gold").length},
    //     {"Gold 2" : (Gooeys.filter(goo => goo.Eyes === "Gold").length / Gooeys.length * 100).toFixed(2)},

    //     {"Green 1" : Gooeys.filter(goo => goo.Eyes === "Green").length},
    //     {"Green 2" : (Gooeys.filter(goo => goo.Eyes === "Green").length / Gooeys.length * 100).toFixed(2)},

    //     {"Green (Smiling) 1" : Gooeys.filter(goo => goo.Eyes === "Green (Smiling)").length},
    //     {"Green (Smiling) 2" : (Gooeys.filter(goo => goo.Eyes === "Green (Smiling)").length / Gooeys.length * 100).toFixed(2)},

    //     {"Grey 1" : Gooeys.filter(goo => goo.Eyes === "Grey").length},
    //     {"Grey 2" : (Gooeys.filter(goo => goo.Eyes === "Grey").length / Gooeys.length * 100).toFixed(2)},

    //     {"Grey (Evil) 1" : Gooeys.filter(goo => goo.Eyes === "Grey (Evil)").length},
    //     {"Grey (Evil) 2" : (Gooeys.filter(goo => goo.Eyes === "Grey (Evil)").length / Gooeys.length * 100).toFixed(2)},

    //     {"Grey (Grumpy) 1" : Gooeys.filter(goo => goo.Eyes === "Grey (Grumpy)").length},
    //     {"Grey (Grumpy) 2" : (Gooeys.filter(goo => goo.Eyes === "Grey (Grumpy)").length / Gooeys.length * 100).toFixed(2)},

    //     {"Grey (Smiling) 1" : Gooeys.filter(goo => goo.Eyes === "Grey (Smiling)").length},
    //     {"Grey (Smiling) 2" : (Gooeys.filter(goo => goo.Eyes === "Grey (Smiling)").length / Gooeys.length * 100).toFixed(2)},

    //     {"Intense Blue 1" : Gooeys.filter(goo => goo.Eyes === "Intense Blue").length},
    //     {"Intense Blue 2" : (Gooeys.filter(goo => goo.Eyes === "Intense Blue").length / Gooeys.length * 100).toFixed(2)},

    //     {"Lemon 1" : Gooeys.filter(goo => goo.Eyes === "Lemon").length},
    //     {"Lemon 2" : (Gooeys.filter(goo => goo.Eyes === "Lemon").length / Gooeys.length * 100).toFixed(2)},

    //     {"Mint 1" : Gooeys.filter(goo => goo.Eyes === "Mint").length},
    //     {"Mint 2" : (Gooeys.filter(goo => goo.Eyes === "Mint").length / Gooeys.length * 100).toFixed(2)},

    //     {"Orange (Evil) 1" : Gooeys.filter(goo => goo.Eyes === "Orange (Evil)").length},
    //     {"Orange (Evil) 2" : (Gooeys.filter(goo => goo.Eyes === "Orange (Evil)").length / Gooeys.length * 100).toFixed(2)},

    //     {"Pink (Evil) 1" : Gooeys.filter(goo => goo.Eyes === "Pink (Evil)").length},
    //     {"Pink (Evil) 2" : (Gooeys.filter(goo => goo.Eyes === "Pink (Evil)").length / Gooeys.length * 100).toFixed(2)},

    //     {"Pink (Smiling) 1" : Gooeys.filter(goo => goo.Eyes === "Pink (Smiling)").length},
    //     {"Pink (Smiling) 2" : (Gooeys.filter(goo => goo.Eyes === "Pink (Smiling)").length / Gooeys.length * 100).toFixed(2)},

    //     {"Radiant (Evil) 1" : Gooeys.filter(goo => goo.Eyes === "Radiant (Evil)").length},
    //     {"Radiant (Evil) 2" : (Gooeys.filter(goo => goo.Eyes === "Radiant (Evil)").length / Gooeys.length * 100).toFixed(2)},

    //     {"Red (Evil) 1" : Gooeys.filter(goo => goo.Eyes === "Red (Evil)").length},
    //     {"Red (Evil) 2" : (Gooeys.filter(goo => goo.Eyes === "Red (Evil)").length / Gooeys.length * 100).toFixed(2)},

    //     {"Red (Grumpy) 1" : Gooeys.filter(goo => goo.Eyes === "Red (Grumpy)").length},
    //     {"Red (Grumpy) 2" : (Gooeys.filter(goo => goo.Eyes === "Red (Grumpy)").length / Gooeys.length * 100).toFixed(2)},

    //     {"Red (Smiling) 1" : Gooeys.filter(goo => goo.Eyes === "Red (Smiling)").length},
    //     {"Red (Smiling) 2" : (Gooeys.filter(goo => goo.Eyes === "Red (Smiling)").length / Gooeys.length * 100).toFixed(2)},

    //     {"Violet 1" : Gooeys.filter(goo => goo.Eyes === "Violet").length},
    //     {"Violet 2" : (Gooeys.filter(goo => goo.Eyes === "Violet").length / Gooeys.length * 100).toFixed(2)},

    //     {"Violet (Evil) 1" : Gooeys.filter(goo => goo.Eyes === "Violet (Evil)").length},
    //     {"Violet (Evil) 2" : (Gooeys.filter(goo => goo.Eyes === "Violet (Evil)").length / Gooeys.length * 100).toFixed(2)},

    //     {"Violet (Grumpy) 1" : Gooeys.filter(goo => goo.Eyes === "Violet (Grumpy)").length},
    //     {"Violet (Grumpy) 2" : (Gooeys.filter(goo => goo.Eyes === "Violet (Grumpy)").length / Gooeys.length * 100).toFixed(2)},

    //     {"Violet (Smiling) 1" : Gooeys.filter(goo => goo.Eyes === "Violet (Smiling)").length},
    //     {"Violet (Smiling) 2" : (Gooeys.filter(goo => goo.Eyes === "Violet (Smiling)").length / Gooeys.length * 100).toFixed(2)},

    //     {"Yellow (Grumpy) 1" : Gooeys.filter(goo => goo.Eyes === "Yellow (Grumpy)").length},
    //     {"Yellow (Grumpy) 2" : (Gooeys.filter(goo => goo.Eyes === "Yellow (Grumpy)").length / Gooeys.length * 100).toFixed(2)},

    //     {"Yellow (Smiling) 1" : Gooeys.filter(goo => goo.Eyes === "Yellow (Smiling)").length},
    //     {"Yellow (Smiling) 2" : (Gooeys.filter(goo => goo.Eyes === "Yellow (Smiling)").length / Gooeys.length * 100).toFixed(2)},

    // ]

    // let ForegroundTraits = [

    //     {"Emerald Radiant Field 1" : Gooeys.filter(goo => goo.Foreground === "Emerald Radiant Field").length},
    //     {"Emerald Radiant Field 2" : (Gooeys.filter(goo => goo.Foreground === "Emerald Radiant Field").length / Gooeys.length * 100).toFixed(2)},

    //     {"Fireflies 1" : Gooeys.filter(goo => goo.Foreground === "Fireflies").length},
    //     {"Fireflies 2" : (Gooeys.filter(goo => goo.Foreground === "Fireflies").length / Gooeys.length * 100).toFixed(2)},

    //     {"Green Radiant Field 1" : Gooeys.filter(goo => goo.Foreground === "Green Radiant Field").length},
    //     {"Green Radiant Field 2" : (Gooeys.filter(goo => goo.Foreground === "Green Radiant Field").length / Gooeys.length * 100).toFixed(2)},

    //     {"Shimmering Flowers 1" : Gooeys.filter(goo => goo.Foreground === "Shimmering Flowers").length},
    //     {"Shimmering Flowers 2" : (Gooeys.filter(goo => goo.Foreground === "Shimmering Flowers").length / Gooeys.length * 100).toFixed(2)},

    //     {"Ruby Radiant Field 1" : Gooeys.filter(goo => goo.Foreground === "Ruby Radiant Field").length},
    //     {"Ruby Radiant Field 2" : (Gooeys.filter(goo => goo.Foreground === "Ruby Radiant Field").length / Gooeys.length * 100).toFixed(2)},

    //     {"Violet Radiant Field 1" : Gooeys.filter(goo => goo.Foreground === "Violet Radiant Field").length},
    //     {"Violet Radiant Field 2" : (Gooeys.filter(goo => goo.Foreground === "Violet Radiant Field").length / Gooeys.length * 100).toFixed(2)},

    // ]

    // let MaskTraits = [

    //     {"Amethyst Rune 1" : Gooeys.filter(goo => goo.Mask === "Amethyst Rune").length},
    //     {"Amethyst Rune 2" : (Gooeys.filter(goo => goo.Mask === "Amethyst Rune").length / Gooeys.length * 100).toFixed(2)},

    //     {"Beige 1" : Gooeys.filter(goo => goo.Mask === "Beige").length},
    //     {"Beige 2" : (Gooeys.filter(goo => goo.Mask === "Beige").length / Gooeys.length * 100).toFixed(2)},

    //     {"Blue 1" : Gooeys.filter(goo => goo.Mask === "Blue").length},
    //     {"Blue 2" : (Gooeys.filter(goo => goo.Mask === "Blue").length / Gooeys.length * 100).toFixed(2)},

    //     {"Blue Mage 1" : Gooeys.filter(goo => goo.Mask === "Blue Mage").length},
    //     {"Blue Mage 2" : (Gooeys.filter(goo => goo.Mask === "Blue Mage").length / Gooeys.length * 100).toFixed(2)},

    //     {"Blue Shaman 1" : Gooeys.filter(goo => goo.Mask === "Blue Shaman").length},
    //     {"Blue Shaman 2" : (Gooeys.filter(goo => goo.Mask === "Blue Shaman").length / Gooeys.length * 100).toFixed(2)},

    //     {"Cold Green 1" : Gooeys.filter(goo => goo.Mask === "Cold Green").length},
    //     {"Cold Green 2" : (Gooeys.filter(goo => goo.Mask === "Cold Green").length / Gooeys.length * 100).toFixed(2)},

    //     {"Cold Violet 1" : Gooeys.filter(goo => goo.Mask === "Cold Violet").length},
    //     {"Cold Violet 2" : (Gooeys.filter(goo => goo.Mask === "Cold Violet").length / Gooeys.length * 100).toFixed(2)},

    //     {"Cyber 1" : Gooeys.filter(goo => goo.Mask === "Cyber").length},
    //     {"Cyber 2" : (Gooeys.filter(goo => goo.Mask === "Cyber").length / Gooeys.length * 100).toFixed(2)},

    //     {"Dark Blue 1" : Gooeys.filter(goo => goo.Mask === "Dark Blue").length},
    //     {"Dark Blue 2" : (Gooeys.filter(goo => goo.Mask === "Dark Blue").length / Gooeys.length * 100).toFixed(2)},

    //     {"Dark Green 1" : Gooeys.filter(goo => goo.Mask === "Dark Green").length},
    //     {"Dark Green 2" : (Gooeys.filter(goo => goo.Mask === "Dark Green").length / Gooeys.length * 100).toFixed(2)},

    //     {"Dark Grey 1" : Gooeys.filter(goo => goo.Mask === "Dark Grey").length},
    //     {"Dark Grey 2" : (Gooeys.filter(goo => goo.Mask === "Dark Grey").length / Gooeys.length * 100).toFixed(2)},

    //     {"Dark Violet 1" : Gooeys.filter(goo => goo.Mask === "Dark Violet").length},
    //     {"Dark Violet 2" : (Gooeys.filter(goo => goo.Mask === "Dark Violet").length / Gooeys.length * 100).toFixed(2)},

    //     {"Dream Mage 1" : Gooeys.filter(goo => goo.Mask === "Dream Mage").length},
    //     {"Dream Mage 2" : (Gooeys.filter(goo => goo.Mask === "Dream Mage").length / Gooeys.length * 100).toFixed(2)},

    //     {"Emerald Rune 1" : Gooeys.filter(goo => goo.Mask === "Emerald Rune").length},
    //     {"Emerald Rune 2" : (Gooeys.filter(goo => goo.Mask === "Emerald Rune").length / Gooeys.length * 100).toFixed(2)},

    //     {"Ghostly 1" : Gooeys.filter(goo => goo.Mask === "Ghostly").length},
    //     {"Ghostly 2" : (Gooeys.filter(goo => goo.Mask === "Ghostly").length / Gooeys.length * 100).toFixed(2)},

    //     {"Golden 1" : Gooeys.filter(goo => goo.Mask === "Golden").length},
    //     {"Golden 2" : (Gooeys.filter(goo => goo.Mask === "Golden").length / Gooeys.length * 100).toFixed(2)},

    //     {"Green 1" : Gooeys.filter(goo => goo.Mask === "Green").length},
    //     {"Green 2" : (Gooeys.filter(goo => goo.Mask === "Green").length / Gooeys.length * 100).toFixed(2)},

    //     {"Green Mage 1" : Gooeys.filter(goo => goo.Mask === "Green Mage").length},
    //     {"Green Mage 2" : (Gooeys.filter(goo => goo.Mask === "Green Mage").length / Gooeys.length * 100).toFixed(2)},

    //     {"Green Shaman 1" : Gooeys.filter(goo => goo.Mask === "Green Shaman").length},
    //     {"Green Shaman 2" : (Gooeys.filter(goo => goo.Mask === "Green Shaman").length / Gooeys.length * 100).toFixed(2)},

    //     {"Grey 1" : Gooeys.filter(goo => goo.Mask === "Grey").length},
    //     {"Grey 2" : (Gooeys.filter(goo => goo.Mask === "Grey").length / Gooeys.length * 100).toFixed(2)},

    //     {"Khaki 1" : Gooeys.filter(goo => goo.Mask === "Khaki").length},
    //     {"Khaki 2" : (Gooeys.filter(goo => goo.Mask === "Khaki").length / Gooeys.length * 100).toFixed(2)},

    //     {"Khaki Shaman 1" : Gooeys.filter(goo => goo.Mask === "Khaki Shaman").length},
    //     {"Khaki Shaman 2" : (Gooeys.filter(goo => goo.Mask === "Khaki Shaman").length / Gooeys.length * 100).toFixed(2)},

    //     {"Lemon Mage 1" : Gooeys.filter(goo => goo.Mask === "Lemon Mage").length},
    //     {"Lemon Mage 2" : (Gooeys.filter(goo => goo.Mask === "Lemon Mage").length / Gooeys.length * 100).toFixed(2)},

    //     {"Mystic 1" : Gooeys.filter(goo => goo.Mask === "Mystic").length},
    //     {"Mystic 2" : (Gooeys.filter(goo => goo.Mask === "Mystic").length / Gooeys.length * 100).toFixed(2)},

    //     {"Peach 1" : Gooeys.filter(goo => goo.Mask === "Peach").length},
    //     {"Peach 2" : (Gooeys.filter(goo => goo.Mask === "Peach").length / Gooeys.length * 100).toFixed(2)},

    //     {"Pearl 1" : Gooeys.filter(goo => goo.Mask === "Pearl").length},
    //     {"Pearl 2" : (Gooeys.filter(goo => goo.Mask === "Pearl").length / Gooeys.length * 100).toFixed(2)},

    //     {"Pearl Green 1" : Gooeys.filter(goo => goo.Mask === "Pearl Green").length},
    //     {"Pearl Green 2" : (Gooeys.filter(goo => goo.Mask === "Pearl Green").length / Gooeys.length * 100).toFixed(2)},

    //     {"Pearl Pink 1" : Gooeys.filter(goo => goo.Mask === "Pearl Pink").length},
    //     {"Pearl Pink 2" : (Gooeys.filter(goo => goo.Mask === "Pearl Pink").length / Gooeys.length * 100).toFixed(2)},

    //     {"Pink 1" : Gooeys.filter(goo => goo.Mask === "Pink").length},
    //     {"Pink 2" : (Gooeys.filter(goo => goo.Mask === "Pink").length / Gooeys.length * 100).toFixed(2)},

    //     {"Pink Mage 1" : Gooeys.filter(goo => goo.Mask === "Pink Mage").length},
    //     {"Pink Mage 2" : (Gooeys.filter(goo => goo.Mask === "Pink Mage").length / Gooeys.length * 100).toFixed(2)},

    //     {"Pink Shaman 1" : Gooeys.filter(goo => goo.Mask === "Pink Shaman").length},
    //     {"Pink Shaman 2" : (Gooeys.filter(goo => goo.Mask === "Pink Shaman").length / Gooeys.length * 100).toFixed(2)},

    //     {"Pomegranate 1" : Gooeys.filter(goo => goo.Mask === "Pomegranate").length},
    //     {"Pomegranate 2" : (Gooeys.filter(goo => goo.Mask === "Pomegranate").length / Gooeys.length * 100).toFixed(2)},

    //     {"Red 1" : Gooeys.filter(goo => goo.Mask === "Red").length},
    //     {"Red 2" : (Gooeys.filter(goo => goo.Mask === "Red").length / Gooeys.length * 100).toFixed(2)},

    //     {"Ruby Rune 1" : Gooeys.filter(goo => goo.Mask === "Ruby Rune").length},
    //     {"Ruby Rune 2" : (Gooeys.filter(goo => goo.Mask === "Ruby Rune").length / Gooeys.length * 100).toFixed(2)},

    //     {"Sand 1" : Gooeys.filter(goo => goo.Mask === "Sand").length},
    //     {"Sand 2" : (Gooeys.filter(goo => goo.Mask === "Sand").length / Gooeys.length * 100).toFixed(2)},

    //     {"Sand Shaman 1" : Gooeys.filter(goo => goo.Mask === "Sand Shaman").length},
    //     {"Sand Shaman 2" : (Gooeys.filter(goo => goo.Mask === "Sand Shaman").length / Gooeys.length * 100).toFixed(2)},

    //     {"Sapphire Rune 1" : Gooeys.filter(goo => goo.Mask === "Sapphire Rune").length},
    //     {"Sapphire Rune 2" : (Gooeys.filter(goo => goo.Mask === "Sapphire Rune").length / Gooeys.length * 100).toFixed(2)},

    //     {"Shaman 1" : Gooeys.filter(goo => goo.Mask === "Shaman").length},
    //     {"Shaman 2" : (Gooeys.filter(goo => goo.Mask === "Shaman").length / Gooeys.length * 100).toFixed(2)},

    //     {"Steel 1" : Gooeys.filter(goo => goo.Mask === "Steel").length},
    //     {"Steel 2" : (Gooeys.filter(goo => goo.Mask === "Steel").length / Gooeys.length * 100).toFixed(2)},

    //     {"Steel Shaman 1" : Gooeys.filter(goo => goo.Mask === "Steel Shaman").length},
    //     {"Steel Shaman 2" : (Gooeys.filter(goo => goo.Mask === "Steel Shaman").length / Gooeys.length * 100).toFixed(2)},

    //     {"Topaz Rune 1" : Gooeys.filter(goo => goo.Mask === "Topaz Rune").length},
    //     {"Topaz Rune 2" : (Gooeys.filter(goo => goo.Mask === "Topaz Rune").length / Gooeys.length * 100).toFixed(2)},

    //     {"Violet 1" : Gooeys.filter(goo => goo.Mask === "Violet").length},
    //     {"Violet 2" : (Gooeys.filter(goo => goo.Mask === "Violet").length / Gooeys.length * 100).toFixed(2)},

    //     {"Violet Shaman 1" : Gooeys.filter(goo => goo.Mask === "Violet Shaman").length},
    //     {"Violet Shaman 2" : (Gooeys.filter(goo => goo.Mask === "Violet Shaman").length / Gooeys.length * 100).toFixed(2)},

    // ]

    // let AccessoryTraits = [
        
    //     {"Birdies 1" : Gooeys.filter(goo => goo.Accessory === "Birdies").length},
    //     {"Birdies 2" : (Gooeys.filter(goo => goo.Accessory === "Birdies").length / Gooeys.length * 100).toFixed(2)},

    //     {"Blue Birdies 1" : Gooeys.filter(goo => goo.Accessory === "Blue Birdies").length},
    //     {"Blue Birdies 2" : (Gooeys.filter(goo => goo.Accessory === "Blue Birdies").length / Gooeys.length * 100).toFixed(2)},

    //     {"Blue Butterflies 1" : Gooeys.filter(goo => goo.Accessory === "Blue Butterflies").length},
    //     {"Blue Butterflies 2" : (Gooeys.filter(goo => goo.Accessory === "Blue Butterflies").length / Gooeys.length * 100).toFixed(2)},

    //     {"Clover 1" : Gooeys.filter(goo => goo.Accessory === "Clover").length},
    //     {"Clover 2" : (Gooeys.filter(goo => goo.Accessory === "Clover").length / Gooeys.length * 100).toFixed(2)},

    //     {"Halo 1" : Gooeys.filter(goo => goo.Accessory === "Halo").length},
    //     {"Halo 2" : (Gooeys.filter(goo => goo.Accessory === "Halo").length / Gooeys.length * 100).toFixed(2)},

    //     {"Leaf 1" : Gooeys.filter(goo => goo.Accessory === "Leaf").length},
    //     {"Leaf 2" : (Gooeys.filter(goo => goo.Accessory === "Leaf").length / Gooeys.length * 100).toFixed(2)},

    //     {"NONE 1" : Gooeys.filter(goo => goo.Accessory === "NONE").length},
    //     {"NONE 2" : (Gooeys.filter(goo => goo.Accessory === "NONE").length / Gooeys.length * 100).toFixed(2)},

    //     {"Pink Butterflies 1" : Gooeys.filter(goo => goo.Accessory === "Pink Butterflies").length},
    //     {"Pink Butterflies 2" : (Gooeys.filter(goo => goo.Accessory === "Pink Butterflies").length / Gooeys.length * 100).toFixed(2)},

    //     {"Pizza 1" : Gooeys.filter(goo => goo.Accessory === "Pizza").length},
    //     {"Pizza 2" : (Gooeys.filter(goo => goo.Accessory === "Pizza").length / Gooeys.length * 100).toFixed(2)},

    //     {"Star Crown 1" : Gooeys.filter(goo => goo.Accessory === "Star Crown").length},
    //     {"Star Crown 2" : (Gooeys.filter(goo => goo.Accessory === "Star Crown").length / Gooeys.length * 100).toFixed(2)},
    // ]


    // {"ddd 1" : Gooeys.filter(goo => goo.Background === "ddd").length},
    // {"ddd 2" : (Gooeys.filter(goo => goo.Background === "ddd").length / Gooeys.length * 100).toFixed(2)},











    
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
                                <a id="opensea" href="https://opensea.io/assets/matic/0xFAB55Fe6E7483b1ADBAcC377C2544b4ee79010c1/{currentId}" target="_blank"><img src="https://opensea.io/static/images/logos/opensea.svg" alt="Opensea"></a>
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
                                </div>
                            </div>
                            <div class="parent-container">
                                <!-- <p>Parent 1: <br><span>{parent1 == -1 ? "none" : "#" + parent1}</span></p>
                                <p>Parent 2: <br><span>{parent2 == -1 ? "none" : "#" + parent2}</span></p> -->
                                <p>Parent 1: <br><span>{(Gooeys.filter(g => g.GooeyId === currentId)[0].Parent1) == -1 ? "none" : "#" + (Gooeys.filter(g => g.GooeyId === currentId)[0].Parent1)}</span></p>
                                <p>Parent 2: <br><span>{(Gooeys.filter(g => g.GooeyId === currentId)[0].Parent2) == -1 ? "none" : "#" + (Gooeys.filter(g => g.GooeyId === currentId)[0].Parent2)}</span></p>
                            </div>
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
                    <p>HP: <br><span>{goo.HP}</span></p>
                    <p>ATK: <br><span>{goo.ATK}</span></p>
                    <p>Gen: <br><span>{goo.Gen}</span></p>
                    <p>SPD: <br><span>{goo.SPD}</span></p>

                    <p>DEF: <br><span>{goo.DEF}</span></p>
                    <p>Total: <br><span>{goo.Total}</span></p>
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
                            {goo.RarityScore}
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
        text-align: center
    }
    
    .sort-container > div > div:nth-child(6) > button:nth-child(1) {
        margin: 0px 0px 2.5px 0px;
    }
    
    .sort-container > div > div:nth-child(6) > button:nth-child(2) {
        margin: 0px 0px 2.5px 0px;
    }
    
    button:hover {
        background-color: rgb(153, 255, 233);
        cursor: pointer;
    }
    
    button:active {
        background-color: rgb(153, 255, 233);
        transform: scale(0.99);
        box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.11);
        cursor: pointer;
    }

    .strongest-button {
        background-color: rgb(243, 23, 23);
        border-radius: 5px;
        margin: 0px 10px 10px 0px;
        width: 75px;
        height: 35px;
        font-size: 17px;
        text-align: center
    }

    .strongest-button:hover {
        background-color: rgb(245, 104, 104);
        cursor: pointer;
    }
    
    .strongest-button:active {
        background-color: rgb(243, 23, 23);
        transform: scale(0.99);
        box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.11);
        cursor: pointer;
    }

    .weakest-button {
        background-color: rgb(94, 216, 200);
        border-radius: 5px;
        margin: 0px 10px 0px 0px;
        width: 70px;
        height: 35px;
        font-size: 17px;
        text-align: center
    }

    .weakest-button:hover {
        background-color: rgb(125, 238, 223);
        cursor: pointer;
    }
    
    .weakest-button:active {
        background-color: rgb(94, 216, 200);
        transform: scale(0.99);
        box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.11);
        cursor: pointer;
    }

    .rarest-button {
        background-color: rgb(255, 220, 22);
        border-radius: 5px;
        margin: 0px 10px 10px 0px;
        width: 60px;
        height: 35px;
        font-size: 17px;
        text-align: center
    }

    .rarest-button:hover {
        background-color: rgb(255, 244, 182);
        cursor: pointer;
    }
    
    .rarest-button:active {
        background-color: rgb(255, 220, 22);
        transform: scale(0.99);
        box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.11);
        cursor: pointer;
    }

    .basic-button {
        background-color: rgb(182, 189, 190);
        border-radius: 5px;
        margin: 0px 10px 0px 0px;
        width: 85px;
        height: 35px;
        font-size: 17px;
        text-align: center
    }

    .basic-button:hover {
        background-color: rgb(205, 218, 219);
        cursor: pointer;
    }
    
    .basic-button:active {
        background-color: rgb(182, 189, 190);
        transform: scale(0.99);
        box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.11);
        cursor: pointer;
    }

    .strongest-rarest-button {
        background-color: rgb(208, 117, 250);
        border-radius: 5px;
        margin: 0px 10px 10px 0px;
        width: 140px;
        height: 35px;
        font-size: 17px;
        text-align: center
    }

    .strongest-rarest-button:hover {
        background-color: rgb(221, 165, 247);
        cursor: pointer;
    }
    
    .strongest-rarest-button:active {
        background-color: rgb(208, 117, 250);
        transform: scale(0.99);
        box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.11);
        cursor: pointer;
    }

    .weakest-basic-button {
        background-color: rgb(122, 168, 252);
        border-radius: 5px;
        margin: 0px 10px 0px 0px;
        width: 160px;
        height: 35px;
        font-size: 17px;
        text-align: center
    }

    .weakest-basic-button:hover {
        background-color: rgb(158, 190, 250);
        cursor: pointer;
    }
    
    .weakest-basic-button:active {
        background-color: rgb(122, 168, 252);
        transform: scale(0.99);
        box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.11);
        cursor: pointer;
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
        text-align: center
    }
    
    .confirm:hover {
        background-color: rgb(164, 255, 152);
        cursor: pointer;
    }
    
    .confirm:active {
        background-color: rgb(164, 255, 152);
        transform: scale(0.99);
        box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.11);
        cursor: pointer;
    }
    
    .reset {
        background-color: rgb(255, 135, 98);
        border-radius: 5px;
        margin: 0px 0px 0px 0px;
        border: 1px solid black;
    }
    
    .reset:hover {
        background-color: rgb(255, 171, 145);
        cursor: pointer;
    }
    
    .reset:active {
        background-color: rgb(255, 171, 145);
        transform: scale(0.99);
        box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.11);
        cursor: pointer;
    }









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
    }

    @media only screen and (min-width: 481px) and (max-width: 699px) {
        
        .info-container {
            grid-template-columns: auto auto;
        }  
    }

    @media only screen and (min-width: 281px) and (max-width: 480px) {

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
        
        .info-container {
            grid-template-columns: auto auto;
            grid-gap: 5px 0px !important;
            padding: 0px !important;
        } 
        
        .Gooey {
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

        .parent-container > p {
            font-size: 12px !important;
            font-weight: 500 !important;
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
    }

    @media only screen and (min-width: 81px) and (max-width: 280px) {

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

        .parent-container > p {
            font-size: 12px !important;
            font-weight: 500 !important;
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

    .parent-container {
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
    }

    .trait-container {
        display: grid; 
        grid-template-columns: auto auto; 
        justify-items: center; 
        /* border-top: 1px solid black; */
        padding: 10px 0px 0px 0px;
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
    }

    .trait-container > div > p:nth-child(7) {
        border-bottom: none;
    }

    .trait-container > div > p:nth-child(8) {
        border-bottom: none;
    }

    .trait-container > div:nth-child(2) > p:nth-child(5) {
        border-bottom: none;
    }

    .trait-container > div:nth-child(2) > p:nth-child(6) {
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
        height: 600px;
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
<script>
// @ts-nocheck

// https://gooeys.dogira.finance/1
// https://opensea.io/assets/matic/0xfab55fe6e7483b1adbacc377c2544b4ee79010c1/1

import "./global.css"
import Menu from "./comps/menu.svelte"
import Footer from "./comps/footer.svelte"
import { onMount } from "svelte"
import axios from "axios"
import qs1 from 'query-string';
import { gooeyData } from './gdata.js'

// import { connected, web3, selectedAccount, chainId, chainData } from 'svelte-web3'
// import { defaultEvmStores } from 'svelte-web3'

// defaultEvmStores.setProvider('http://localhost:8545')

// let abi = "[{\"anonymous\": false,\"inputs\": [{\"indexed\": true,\"internalType\": \"address\",\"name\": \"owner\",\"type\": \"address\"},{\"indexed\": true,\"internalType\": \"address\",\"name\": \"spender\",\"type\": \"address\"},{\"indexed\": false,\"internalType\": \"uint256\",\"name\": \"value\",\"type\": \"uint256\"}],\"name\": \"Approval\",\"type\": \"event\"},{\"anonymous\": false,\"inputs\": [{\"indexed\": false,\"internalType\": \"address\",\"name\": \"_addr\",\"type\": \"address\"},{\"indexed\": false,\"i…outputs\": [{\"internalType\": \"address\",\"name\": \"\",\"type\": \"address\"}],\"stateMutability\": \"view\",\"type\": \"function\"},{\"inputs\": [],\"name\": \"TWO_MONTHS_BLOCKS\",\"outputs\": [{\"internalType\": \"uint256\",\"name\": \"\",\"type\": \"uint256\"}],\"stateMutability\": \"view\",\"type\": \"function\"},{\"inputs\": [],\"name\": \"walletSupplyLimitsEnabled\",\"outputs\": [{\"internalType\": \"bool\",\"name\": \"\",\"type\": \"bool\"}],\"stateMutability\": \"view\",\"type\": \"function\"}]"
// let address = "0x6F3Cc27E17a0f2e52D8e7693FF0d892Cea1854bF"

// let web3 = new web3.setProvider("ws://localhost:8546")
// let contract = new web3.eth.Contract(abi, address)










/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

      let gooeys = []
      
      const gooeyABI = '[{"inputs": [{"internalType": "string","name": "_name","type": "string"},{"internalType": "string","name": "_symbol","type": "string"},{"internalType": "string","name": "_initBaseURI","type": "string"},{"internalType": "address","name": "_gooeysOld","type": "address"},{"internalType": "bytes32","name": "_keyHash","type": "bytes32"}],"stateMutability": "nonpayable","type": "constructor"},{"anonymous": false,"inputs": [{"indexed": true,"internalType": "address","name": "owner","type": "address"},{"indexed": true,"internalType": "address","name": "approved","type": "address"},{"indexed": true,"internalType": "uint256","name": "tokenId","type": "uint256"}],"name": "Approval","type": "event"},{"anonymous": false,"inputs": [{"indexed": true,"internalType": "address","name": "owner","type": "address"},{"indexed": true,"internalType": "address","name": "operator","type": "address"},{"indexed": false,"internalType": "bool","name": "approved","type": "bool"}],"name": "ApprovalForAll","type": "event"},{"anonymous": false,"inputs": [{"indexed": false,"internalType": "uint256","name": "_gooeyId","type": "uint256"},{"indexed": false,"internalType": "uint256","name": "_fruitType","type": "uint256"}],"name": "EatFruit","type": "event"},{"anonymous": false,"inputs": [{"indexed": false,"internalType": "uint256","name": "_mintAmount","type": "uint256"}],"name": "InHouseMintComplete","type": "event"},{"anonymous": false,"inputs": [{"indexed": false,"internalType": "uint256","name": "_gooeyId","type": "uint256"},{"indexed": false,"internalType": "uint256","name": "randomness","type": "uint256"}],"name": "NewMintAttributes","type": "event"},{"anonymous": false,"inputs": [{"indexed": true,"internalType": "address","name": "previousOwner","type": "address"},{"indexed": true,"internalType": "address","name": "newOwner","type": "address"}],"name": "OwnershipTransferred","type": "event"},{"anonymous": false,"inputs": [{"components": [{"internalType": "bool","name": "inProgress","type": "bool"},{"internalType": "uint256","name": "blockStarted","type": "uint256"},{"internalType": "uint256","name": "blockFinished","type": "uint256"},{"internalType": "uint256","name": "status","type": "uint256"},{"internalType": "uint256","name": "statRolled","type": "uint256"},{"internalType": "uint256","name": "gooReward","type": "uint256"},{"internalType": "uint256","name": "fruitsRewarded","type": "uint256"},{"components": [{"internalType": "uint256","name": "questId","type": "uint256"},{"internalType": "uint256","name": "blockLength","type": "uint256"},{"internalType": "uint256[2]","name": "minMaxGoo","type": "uint256[2]"},{"internalType": "uint256[2]","name": "minMaxFoodRolls","type": "uint256[2]"},{"internalType": "uint256[2]","name": "minMaxFoodRange","type": "uint256[2]"},{"internalType": "uint256","name": "minRollForSuccess","type": "uint256"}],"internalType": "struct Gooeys.questSchema","name": "quest","type": "tuple"}],"indexed": false,"internalType": "struct Gooeys.quest","name": "_quest","type": "tuple"},{"indexed": false,"internalType": "uint256","name": "randomness","type": "uint256"}],"name": "QuestComplete","type": "event"},{"anonymous": false,"inputs": [{"indexed": false,"internalType": "uint256","name": "_gooeyId","type": "uint256"},{"indexed": false,"internalType": "uint256","name": "_foodStore","type": "uint256"},{"indexed": false,"internalType": "uint256","name": "_bond","type": "uint256"},{"indexed": false,"internalType": "uint256","name": "_tumbles","type": "uint256"},{"indexed": false,"internalType": "uint256","name": "_tumblebonus","type": "uint256"},{"indexed": false,"internalType": "uint256","name": "_hp","type": "uint256"},{"indexed": false,"internalType": "uint256","name": "_atk","type": "uint256"},{"indexed": false,"internalType": "uint256","name": "_def","type": "uint256"},{"indexed": false,"internalType": "uint256","name": "_spd","type": "uint256"}],"name": "StatUpdate","type": "event"},{"anonymous": false,"inputs": [{"indexed": true,"internalType": "address","name": "from","type": "address"},{"indexed": true,"internalType": "address","name": "to","type": "address"},{"indexed": true,"internalType": "uint256","name": "tokenId","type": "uint256"}],"name": "Transfer","type": "event"},{"anonymous": false,"inputs": [{"indexed": false,"internalType": "bytes32","name": "_requestId","type": "bytes32"},{"indexed": false,"internalType": "uint256","name": "_vrfResult","type": "uint256"}],"name": "VRFCallback","type": "event"},{"anonymous": false,"inputs": [{"indexed": false,"internalType": "address","name": "_tokenAddr","type": "address"},{"indexed": false,"internalType": "address","name": "_foodAddr","type": "address"},{"indexed": false,"internalType": "address","name": "_dToken","type": "address"}],"name": "externalTokensLoaded","type": "event"},{"inputs": [{"internalType": "address","name": "to","type": "address"},{"internalType": "uint256","name": "tokenId","type": "uint256"}],"name": "approve","outputs": [],"stateMutability": "nonpayable","type": "function"},{"inputs": [{"internalType": "address","name": "owner","type": "address"}],"name": "balanceOf","outputs": [{"internalType": "uint256","name": "","type": "uint256"}],"stateMutability": "view","type": "function"},{"inputs": [],"name": "baseURI","outputs": [{"internalType": "string","name": "","type": "string"}],"stateMutability": "view","type": "function"},{"inputs": [{"internalType": "uint256","name": "_gooeyId","type": "uint256"}],"name": "cancelQuest","outputs": [],"stateMutability": "nonpayable","type": "function"},{"inputs": [{"internalType": "uint256","name": "tokenId","type": "uint256"}],"name": "checkIn","outputs": [],"stateMutability": "nonpayable","type": "function"},{"inputs": [{"internalType": "uint256","name": "_gooeyId","type": "uint256"}],"name": "completeQuest","outputs": [],"stateMutability": "nonpayable","type": "function"},{"inputs": [{"internalType": "uint256","name": "_gooeyId","type": "uint256"},{"internalType": "uint256","name": "_amt","type": "uint256"},{"internalType": "uint256","name": "_foodId","type": "uint256"}],"name": "consumeFruit","outputs": [],"stateMutability": "nonpayable","type": "function"},{"inputs": [{"internalType": "uint256","name": "_startId","type": "uint256"},{"internalType": "uint256","name": "_endId","type": "uint256"}],"name": "convertOldGooeyCollection","outputs": [],"stateMutability": "nonpayable","type": "function"},{"inputs": [],"name": "dDiscountActive","outputs": [{"internalType": "bool","name": "","type": "bool"}],"stateMutability": "view","type": "function"},{"inputs": [],"name": "dDiscountMultiplier","outputs": [{"internalType": "uint256","name": "","type": "uint256"}],"stateMutability": "view","type": "function"},{"inputs": [],"name": "dDiscountQualifier","outputs": [{"internalType": "uint256","name": "","type": "uint256"}],"stateMutability": "view","type": "function"},{"inputs": [],"name": "gameStartBlock","outputs": [{"internalType": "uint256","name": "","type": "uint256"}],"stateMutability": "view","type": "function"},{"inputs": [{"internalType": "uint256","name": "tokenId","type": "uint256"}],"name": "getApproved","outputs": [{"internalType": "address","name": "","type": "address"}],"stateMutability": "view","type": "function"},{"inputs": [{"internalType": "uint256","name": "gooeyId","type": "uint256"}],"name": "getCurrentQuestInfoABIv1","outputs": [{"internalType": "uint256[8]","name": "","type": "uint256[8]"}],"stateMutability": "view","type": "function"},{"inputs": [{"internalType": "uint256","name": "questTypeId","type": "uint256"}],"name": "getQuestTypeInfoABIv1","outputs": [{"internalType": "uint256[8]","name": "","type": "uint256[8]"}],"stateMutability": "view","type": "function"},{"inputs": [{"internalType": "uint256","name": "tokenId","type": "uint256"}],"name": "getStatsABIv1","outputs": [{"internalType": "uint256[17]","name": "","type": "uint256[17]"}],"stateMutability": "view","type": "function"},{"inputs": [{"internalType": "uint256","name": "gooey","type": "uint256"}],"name": "getTumbleAvailabilityBlock","outputs": [{"internalType": "uint256","name": "tumbleBlock","type": "uint256"}],"stateMutability": "view","type": "function"},{"inputs": [{"internalType": "uint256","name": "gooey1","type": "uint256"},{"internalType": "uint256","name": "gooey2","type": "uint256"}],"name": "getTumbleCost","outputs": [{"internalType": "uint256","name": "cost","type": "uint256"}],"stateMutability": "view","type": "function"},{"inputs": [],"name": "gooTumbleWaitBlocks","outputs": [{"internalType": "uint256","name": "","type": "uint256"}],"stateMutability": "view","type": "function"},{"inputs": [{"internalType": "uint256","name": "","type": "uint256"}],"name": "gooeyAttributes","outputs": [{"components": [{"internalType": "uint256","name": "hp","type": "uint256"},{"internalType": "uint256","name": "atk","type": "uint256"},{"internalType": "uint256","name": "def","type": "uint256"},{"internalType": "uint256","name": "spd","type": "uint256"},{"internalType": "uint256","name": "originalHp","type": "uint256"},{"internalType": "uint256","name": "originalAtk","type": "uint256"},{"internalType": "uint256","name": "originalDef","type": "uint256"},{"internalType": "uint256","name": "originalSpd","type": "uint256"}],"internalType": "struct Gooeys.statInfo","name": "stats","type": "tuple"},{"components": [{"internalType": "uint256","name": "birthBlock","type": "uint256"},{"internalType": "uint256","name": "generation","type": "uint256"},{"internalType": "uint256","name": "tumblesRemaining","type": "uint256"},{"internalType": "uint256","name": "lastTumbleBlock","type": "uint256"},{"internalType": "uint256","name": "bond","type": "uint256"},{"internalType": "uint256","name": "foodStore","type": "uint256"},{"internalType": "uint256","name": "tumbleRollBonus","type": "uint256"},{"internalType": "uint256","name": "totalTumbles","type": "uint256"},{"internalType": "int256[2]","name": "parents","type": "int256[2]"}],"internalType": "struct Gooeys.lifeInfo","name": "life","type": "tuple"},{"components": [{"internalType": "string","name": "name","type": "string"},{"internalType": "uint256","name": "background","type": "uint256"},{"internalType": "uint256","name": "ears","type": "uint256"},{"internalType": "uint256","name": "body","type": "uint256"},{"internalType": "uint256","name": "mask","type": "uint256"},{"internalType": "uint256","name": "eyes","type": "uint256"},{"internalType": "uint256","name": "accessory","type": "uint256"}],"internalType": "struct Gooeys.cosmeticInfo","name": "cosmetics","type": "tuple"},{"internalType": "uint256","name": "lastUpdateBlock","type": "uint256"},{"internalType": "uint256","name": "tokenId","type": "uint256"}],"stateMutability": "view","type": "function"},{"inputs": [{"internalType": "address","name": "owner","type": "address"},{"internalType": "address","name": "operator","type": "address"}],"name": "isApprovedForAll","outputs": [{"internalType": "bool","name": "","type": "bool"}],"stateMutability": "view","type": "function"},{"inputs": [{"internalType": "address","name": "_dToken","type": "address"},{"internalType": "address","name": "_tokenAddr","type": "address"},{"internalType": "address","name": "_foodAddr","type": "address"}],"name": "loadExterns","outputs": [],"stateMutability": "nonpayable","type": "function"},{"inputs": [{"internalType": "uint256","name": "_questId","type": "uint256"},{"internalType": "uint256","name": "_hours","type": "uint256"},{"internalType": "uint256","name": "_minGoo","type": "uint256"},{"internalType": "uint256","name": "_maxGoo","type": "uint256"},{"internalType": "uint256","name": "_minFoodRoll","type": "uint256"},{"internalType": "uint256","name": "_maxFoodRoll","type": "uint256"},{"internalType": "uint256","name": "_minFoodRange","type": "uint256"},{"internalType": "uint256","name": "_maxFoodRange","type": "uint256"},{"internalType": "uint256","name": "_minRollForSuccess","type": "uint256"}],"name": "loadQuest","outputs": [],"stateMutability": "nonpayable","type": "function"},{"inputs": [],"name": "maximumCallGwei","outputs": [{"internalType": "uint256","name": "","type": "uint256"}],"stateMutability": "view","type": "function"},{"inputs": [],"name": "mint","outputs": [],"stateMutability": "payable","type": "function"},{"inputs": [],"name": "name","outputs": [{"internalType": "string","name": "","type": "string"}],"stateMutability": "view","type": "function"},{"inputs": [],"name": "owner","outputs": [{"internalType": "address","name": "","type": "address"}],"stateMutability": "view","type": "function"},{"inputs": [{"internalType": "uint256","name": "tokenId","type": "uint256"}],"name": "ownerOf","outputs": [{"internalType": "address","name": "","type": "address"}],"stateMutability": "view","type": "function"},{"inputs": [{"internalType": "bytes32","name": "requestId","type": "bytes32"},{"internalType": "uint256","name": "randomness","type": "uint256"}],"name": "rawFulfillRandomness","outputs": [],"stateMutability": "nonpayable","type": "function"},{"inputs": [],"name": "renounceOwnership","outputs": [],"stateMutability": "nonpayable","type": "function"},{"inputs": [{"internalType": "address","name": "from","type": "address"},{"internalType": "address","name": "to","type": "address"},{"internalType": "uint256","name": "tokenId","type": "uint256"}],"name": "safeTransferFrom","outputs": [],"stateMutability": "nonpayable","type": "function"},{"inputs": [{"internalType": "address","name": "from","type": "address"},{"internalType": "address","name": "to","type": "address"},{"internalType": "uint256","name": "tokenId","type": "uint256"},{"internalType": "bytes","name": "_data","type": "bytes"}],"name": "safeTransferFrom","outputs": [],"stateMutability": "nonpayable","type": "function"},{"inputs": [{"internalType": "address","name": "operator","type": "address"},{"internalType": "bool","name": "approved","type": "bool"}],"name": "setApprovalForAll","outputs": [],"stateMutability": "nonpayable","type": "function"},{"inputs": [{"internalType": "uint256","name": "_maximumCallGwei","type": "uint256"},{"internalType": "bool","name": "_gweiCheckEnabled","type": "bool"},{"internalType": "bool","name": "_contractCheckEnabled","type": "bool"}],"name": "setContractGweiChecks","outputs": [],"stateMutability": "nonpayable","type": "function"},{"inputs": [{"internalType": "uint256","name": "_dDiscountQualifier","type": "uint256"},{"internalType": "uint256","name": "_dDiscountMultiplier","type": "uint256"},{"internalType": "bool","name": "_dDiscountActive","type": "bool"}],"name": "setDTokenDiscounts","outputs": [],"stateMutability": "nonpayable","type": "function"},{"inputs": [{"internalType": "address","name": "_addr","type": "address"},{"internalType": "bool","name": "_set","type": "bool"}],"name": "setGameController","outputs": [],"stateMutability": "nonpayable","type": "function"},{"inputs": [{"internalType": "bool","name": "_gameStatus","type": "bool"}],"name": "setGameStatus","outputs": [],"stateMutability": "nonpayable","type": "function"},{"inputs": [{"internalType": "bool","name": "_set","type": "bool"}],"name": "setTumbleEnabled","outputs": [],"stateMutability": "nonpayable","type": "function"},{"inputs": [{"internalType": "uint256","name": "_tumbleBaseFee","type": "uint256"},{"internalType": "uint256","name": "_tumbleScalingFee","type": "uint256"},{"internalType": "uint256","name": "_tumblePunitiveMultiplier","type": "uint256"},{"internalType": "uint256","name": "_tumblePunitiveMultiplierThreshold","type": "uint256"}],"name": "setTumbleFees","outputs": [],"stateMutability": "nonpayable","type": "function"},{"inputs": [{"internalType": "string","name": "_newBaseURI","type": "string"}],"name": "setURI","outputs": [],"stateMutability": "nonpayable","type": "function"},{"inputs": [{"internalType": "uint256","name": "_gooeyId","type": "uint256"},{"internalType": "uint256","name": "_questType","type": "uint256"}],"name": "startQuest","outputs": [],"stateMutability": "nonpayable","type": "function"},{"inputs": [{"internalType": "bytes4","name": "interfaceId","type": "bytes4"}],"name": "supportsInterface","outputs": [{"internalType": "bool","name": "","type": "bool"}],"stateMutability": "view","type": "function"},{"inputs": [],"name": "symbol","outputs": [{"internalType": "string","name": "","type": "string"}],"stateMutability": "view","type": "function"},{"inputs": [{"internalType": "uint256","name": "index","type": "uint256"}],"name": "tokenByIndex","outputs": [{"internalType": "uint256","name": "","type": "uint256"}],"stateMutability": "view","type": "function"},{"inputs": [{"internalType": "address","name": "owner","type": "address"},{"internalType": "uint256","name": "index","type": "uint256"}],"name": "tokenOfOwnerByIndex","outputs": [{"internalType": "uint256","name": "tokenId","type": "uint256"}],"stateMutability": "view","type": "function"},{"inputs": [{"internalType": "uint256","name": "tokenId","type": "uint256"}],"name": "tokenURI","outputs": [{"internalType": "string","name": "","type": "string"}],"stateMutability": "view","type": "function"},{"inputs": [{"internalType": "address","name": "owner","type": "address"}],"name": "tokensOfOwner","outputs": [{"internalType": "uint256[]","name": "","type": "uint256[]"}],"stateMutability": "view","type": "function"},{"inputs": [],"name": "totalSupply","outputs": [{"internalType": "uint256","name": "","type": "uint256"}],"stateMutability": "view","type": "function"},{"inputs": [{"internalType": "address","name": "from","type": "address"},{"internalType": "address","name": "to","type": "address"},{"internalType": "uint256","name": "tokenId","type": "uint256"}],"name": "transferFrom","outputs": [],"stateMutability": "nonpayable","type": "function"},{"inputs": [{"internalType": "address","name": "newOwner","type": "address"}],"name": "transferOwnership","outputs": [],"stateMutability": "nonpayable","type": "function"},{"inputs": [{"internalType": "uint256","name": "gooey1","type": "uint256"},{"internalType": "uint256","name": "gooey2","type": "uint256"}],"name": "tumble","outputs": [],"stateMutability": "nonpayable","type": "function"},{"inputs": [],"name": "tumbleEnabled","outputs": [{"internalType": "bool","name": "","type": "bool"}],"stateMutability": "view","type": "function"},{"inputs": [{"internalType": "uint256","name": "_gooTumbleWaitBlocks","type": "uint256"}],"name": "updateGooTumbleWaitBlocks","outputs": [],"stateMutability": "nonpayable","type": "function"},{"inputs": [{"internalType": "uint256","name": "_gooeyId","type": "uint256"},{"internalType": "uint256","name": "_foodStore","type": "uint256"},{"internalType": "uint256","name": "_bond","type": "uint256"},{"internalType": "uint256","name": "_tumbles","type": "uint256"},{"internalType": "uint256","name": "_tumblebonus","type": "uint256"},{"internalType": "uint256","name": "_hp","type": "uint256"},{"internalType": "uint256","name": "_atk","type": "uint256"},{"internalType": "uint256","name": "_def","type": "uint256"},{"internalType": "uint256","name": "_spd","type": "uint256"}],"name": "updateGooey","outputs": [],"stateMutability": "nonpayable","type": "function"},{"inputs": [{"internalType": "uint256","name": "_maxNexus","type": "uint256"}],"name": "updateMaxNexus","outputs": [],"stateMutability": "nonpayable","type": "function"},{"inputs": [{"internalType": "address[]","name": "_addresses","type": "address[]"},{"internalType": "bool","name": "_set","type": "bool"}],"name": "whitelistSet","outputs": [],"stateMutability": "nonpayable","type": "function"},{"inputs": [],"name": "withdraw","outputs": [],"stateMutability": "payable","type": "function"}]'
      
      let counter
      let t

        // for (let i = 0; i < 1500; i++) {
        //   counter += '"'+i+'", '
        //   t = '[['+counter+']], '
        //   console.log(counter)
        // }
        // console.log(t)

    //   let data = qs1.stringify({
    //     'chain': 'polygon',
    //     'network': 'mainnet',
    //     'contract': '0x2375874eb409095efa6090bf7085ae3922543c72',
    //     'abi' : '[{"anonymous": false,"inputs": [{"indexed": true,"internalType": "address","name": "previousOwner","type": "address"},{"indexed": true,"internalType": "address","name": "newOwner","type": "address"}],"name": "OwnershipTransferred","type": "event"},{"inputs": [{"internalType": "address","name": "_dToken","type": "address"},{"internalType": "address","name": "_gToken","type": "address"},{"internalType": "address","name": "_gFruit","type": "address"},{"internalType": "address","name": "_gCore","type": "address"}],"name": "loadExterns","outputs": [],"stateMutability": "nonpayable","type": "function"},{"inputs": [],"name": "renounceOwnership","outputs": [],"stateMutability": "nonpayable","type": "function"},{"inputs": [{"internalType": "address","name": "newOwner","type": "address"}],"name": "transferOwnership","outputs": [],"stateMutability": "nonpayable","type": "function"},{"inputs": [{"internalType": "address","name": "_dToken","type": "address"},{"internalType": "address","name": "_gToken","type": "address"},{"internalType": "address","name": "_gFruit","type": "address"},{"internalType": "address","name": "_gCore","type": "address"}],"stateMutability": "nonpayable","type": "constructor"},{"inputs": [{"internalType": "address","name": "owner","type": "address"},{"internalType": "uint256","name": "baseGooeyId","type": "uint256"}],"name": "getTumblingFeesForGooeys","outputs": [{"internalType": "uint256[][]","name": "gooeyFees","type": "uint256[][]"}],"stateMutability": "view","type": "function"},{"inputs": [{"internalType": "address","name": "owner","type": "address"}],"name": "loadAllGooeysForPlayer","outputs": [{"internalType": "uint256[][]","name": "gooeyStats","type": "uint256[][]"}],"stateMutability": "view","type": "function"},{"inputs": [{"internalType": "address","name": "owner","type": "address"},{"internalType": "uint256","name": "maxFruitID","type": "uint256"}],"name": "loadFruitByOwner","outputs": [{"internalType": "uint256[]","name": "ownerFruitAmts","type": "uint256[]"}],"stateMutability": "view","type": "function" }, { "inputs": [], "name": "loadGlobalSettings", "outputs": [ { "internalType": "uint256[]", "name": "settings", "type": "uint256[]" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "uint256[]", "name": "ids", "type": "uint256[]" } ], "name": "loadGooeyStats", "outputs": [ { "internalType": "uint256[][]", "name": "gooeyStats", "type": "uint256[][]" } ], "stateMutability": "view","type": "function" }, { "inputs": [ { "internalType": "address", "name": "owner", "type": "address" }, { "internalType": "uint256", "name": "maxFruitID", "type": "uint256" } ] ,"name": "loadTokenAndFruitInfo", "outputs": [ { "internalType": "uint256[][]", "name": "tokenAndFruitAmts", "type": "uint256[][]" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "owner", "type": "address" } ], "name": "loadTokenInfo", "outputs": [ { "internalType": "uint256[]", "name": "tokenAmts", "type": "uint256[]" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "owner", "outputs": [ { "internalType": "address", "name": "", "type": "address" } ], "stateMutability": "view", "type": "function" } ] ',
    //     'method': 'loadGooeyStats',
    // //     'args': '[["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "60", "61", "62", "63", "64", "65", "66", "67", "68", "69", "70", "71", "72", "73", "74", "75", "76", "77", "78", "79", "80", "81", "82", "83", "84", "85", "86", "87", "88", "89", "90", "91", "92", "93", "94", "95", "96", "97", "98", "99", "100", "101", "102", "103", "104", "105", "106", "107", "108", "109", "110", "111", "112", "113", "114", "115", "116", "117", "118", "119", "120", "121", "122", "123", "124", "125", "126", "127", "128", "129", "130", "131", "132", "133", "134", "135", "136", "137", "138", "139", "140", "141", "142", "143", "144", "145", "146", "147", "148", "149", "150", "151", "152", "153", "154", "155", "156", "157", "158", "159", "160", "161", "162", "163", "164", "165", "166", "167", "168", "169", "170", "171", "172", "173", "174", "175", "176", "177", "178", "179", "180", "181", "182", "183", "184", "185", "186", "187", "188", "189", "190", "191", "192", "193", "194", "195", "196", "197", "198", "199", "200", "201", "202", "203", "204", "205", "206", "207", "208", "209", "210", "211", "212", "213", "214", "215", "216", "217", "218", "219", "220", "221", "222", "223", "224", "225", "226", "227", "228", "229", "230", "231", "232", "233", "234", "235", "236", "237", "238", "239", "240", "241", "242", "243", "244", "245", "246", "247", "248", "249", "250", "251", "252", "253", "254", "255", "256", "257", "258", "259", "260", "261", "262", "263", "264", "265", "266", "267", "268", "269", "270", "271", "272", "273", "274", "275", "276", "277", "278", "279", "280", "281", "282", "283", "284", "285", "286", "287", "288", "289", "290", "291", "292", "293", "294", "295", "296", "297", "298", "299", "300", "301", "302", "303", "304", "305", "306", "307", "308", "309", "310", "311", "312", "313", "314", "315", "316", "317", "318", "319", "320", "321", "322", "323", "324", "325", "326", "327", "328", "329", "330", "331", "332", "333", "334", "335", "336", "337", "338", "339", "340", "341", "342", "343", "344", "345", "346", "347", "348", "349", "350", "351", "352", "353", "354", "355", "356", "357", "358", "359", "360", "361", "362", "363", "364", "365", "366", "367", "368", "369", "370", "371", "372", "373", "374", "375", "376", "377", "378", "379", "380", "381", "382", "383", "384", "385", "386", "387", "388", "389", "390", "391", "392", "393", "394", "395", "396", "397", "398", "399", "400", "401", "402", "403", "404", "405", "406", "407", "408", "409", "410", "411", "412", "413", "414", "415", "416", "417", "418", "419", "420", "421", "422", "423", "424", "425", "426", "427", "428", "429", "430", "431", "432", "433", "434", "435", "436", "437", "438", "439", "440", "441", "442", "443", "444", "445", "446", "447", "448", "449", "450", "451", "452", "453", "454", "455", "456", "457", "458", "459", "460", "461", "462", "463", "464", "465", "466", "467", "468", "469", "470", "471", "472", "473", "474", "475", "476", "477", "478", "479", "480", "481", "482", "483", "484", "485", "486", "487", "488", "489", "490", "491", "492", "493", "494", "495", "496", "497", "498", "499", "500", "501", "502", "503", "504", "505", "506", "507", "508", "509", "510", "511", "512", "513", "514", "515", "516", "517", "518", "519", "520", "521", "522", "523", "524", "525", "526", "527", "528", "529", "530", "531", "532", "533", "534", "535", "536", "537", "538", "539", "540", "541", "542", "543", "544", "545", "546", "547", "548", "549", "550", "551", "552", "553", "554", "555", "556", "557", "558", "559", "560", "561", "562", "563", "564", "565", "566", "567", "568", "569", "570", "571", "572", "573", "574", "575", "576", "577", "578", "579", "580", "581", "582", "583", "584", "585", "586", "587", "588", "589", "590", "591", "592", "593", "594", "595", "596", "597", "598", "599", "600", "601", "602", "603", "604", "605", "606", "607", "608", "609", "610", "611", "612", "613", "614", "615", "616", "617", "618", "619", "620", "621", "622", "623", "624", "625", "626", "627", "628", "629", "630", "631", "632", "633", "634", "635", "636", "637", "638", "639", "640", "641", "642", "643", "644", "645", "646", "647", "648", "649", "650", "651", "652", "653", "654", "655", "656", "657", "658", "659", "660", "661", "662", "663", "664", "665", "666", "667", "668", "669", "670", "671", "672", "673", "674", "675", "676", "677", "678", "679", "680", "681", "682", "683", "684", "685", "686", "687", "688", "689", "690", "691", "692", "693", "694", "695", "696", "697", "698", "699", "700", "701", "702", "703", "704", "705", "706", "707", "708", "709", "710", "711", "712", "713", "714", "715", "716", "717", "718", "719", "720", "721", "722", "723", "724", "725", "726", "727", "728", "729", "730", "731", "732", "733", "734", "735", "736", "737", "738", "739", "740", "741", "742", "743", "744", "745", "746", "747", "748", "749", "750", "751", "752", "753", "754", "755", "756", "757", "758", "759", "760", "761", "762", "763", "764", "765", "766", "767", "768", "769", "770", "771", "772", "773", "774", "775", "776", "777", "778", "779", "780", "781", "782", "783", "784", "785", "786", "787", "788", "789", "790", "791", "792", "793", "794", "795", "796", "797", "798", "799", "800", "801", "802", "803", "804", "805", "806", "807", "808", "809", "810", "811", "812", "813", "814", "815", "816", "817", "818", "819", "820", "821", "822", "823", "824", "825", "826", "827", "828", "829", "830", "831", "832", "833", "834", "835", "836", "837", "838", "839", "840", "841", "842", "843", "844", "845", "846", "847", "848", "849", "850", "851", "852", "853", "854", "855", "856", "857", "858", "859", "860", "861", "862", "863", "864", "865", "866", "867", "868", "869", "870", "871", "872", "873", "874", "875", "876", "877", "878", "879", "880", "881", "882", "883", "884", "885", "886", "887", "888", "889", "890", "891", "892", "893", "894", "895", "896", "897", "898", "899", "900", "901", "902", "903", "904", "905", "906", "907", "908", "909", "910", "911", "912", "913", "914", "915", "916", "917", "918", "919", "920", "921", "922", "923", "924", "925", "926", "927", "928", "929", "930", "931", "932", "933", "934", "935", "936", "937", "938", "939", "940", "941", "942", "943", "944", "945", "946", "947", "948", "949", "950", "951", "952", "953", "954", "955", "956", "957", "958", "959", "960", "961", "962", "963", "964", "965", "966", "967", "968", "969", "970", "971", "972", "973", "974", "975", "976", "977", "978", "979", "980", "981", "982", "983", "984", "985", "986", "987", "988", "989", "990", "991", "992", "993", "994", "995", "996", "997", "998", "999", "1000", "1001", "1002", "1003", "1004", "1005", "1006", "1007", "1008", "1009", "1010", "1011", "1012", "1013", "1014", "1015", "1016", "1017", "1018", "1019", "1020", "1021", "1022", "1023", "1024", "1025", "1026", "1027", "1028", "1029", "1030", "1031", "1032", "1033", "1034", "1035", "1036", "1037", "1038", "1039", "1040", "1041", "1042", "1043", "1044", "1045", "1046", "1047", "1048", "1049", "1050", "1051", "1052", "1053", "1054", "1055", "1056", "1057", "1058", "1059", "1060", "1061", "1062", "1063", "1064", "1065", "1066", "1067", "1068", "1069", "1070", "1071", "1072", "1073", "1074", "1075", "1076", "1077", "1078", "1079", "1080", "1081", "1082", "1083", "1084", "1085", "1086", "1087", "1088", "1089", "1090", "1091", "1092", "1093", "1094", "1095", "1096", "1097", "1098", "1099", "1100", "1101", "1102", "1103", "1104", "1105", "1106", "1107", "1108", "1109", "1110", "1111", "1112", "1113", "1114", "1115", "1116", "1117", "1118", "1119", "1120", "1121", "1122", "1123", "1124", "1125", "1126", "1127", "1128", "1129", "1130", "1131", "1132", "1133", "1134", "1135", "1136", "1137", "1138", "1139", "1140", "1141", "1142", "1143", "1144", "1145", "1146", "1147", "1148", "1149", "1150", "1151", "1152", "1153", "1154", "1155", "1156", "1157", "1158", "1159", "1160", "1161", "1162", "1163", "1164", "1165", "1166", "1167", "1168", "1169", "1170", "1171", "1172", "1173", "1174", "1175", "1176", "1177", "1178", "1179", "1180", "1181", "1182", "1183", "1184", "1185", "1186", "1187", "1188", "1189", "1190", "1191", "1192", "1193", "1194", "1195", "1196", "1197", "1198", "1199", "1200", "1201", "1202", "1203", "1204", "1205", "1206", "1207", "1208", "1209", "1210", "1211", "1212", "1213", "1214", "1215", "1216", "1217", "1218", "1219", "1220", "1221", "1222", "1223", "1224", "1225", "1226", "1227", "1228", "1229", "1230", "1231", "1232", "1233", "1234", "1235", "1236", "1237", "1238", "1239", "1240", "1241", "1242", "1243", "1244", "1245", "1246", "1247", "1248", "1249", "1250", "1251", "1252", "1253", "1254", "1255", "1256", "1257", "1258", "1259", "1260", "1261", "1262", "1263", "1264", "1265", "1266", "1267", "1268", "1269", "1270", "1271", "1272", "1273", "1274", "1275", "1276", "1277", "1278", "1279", "1280", "1281", "1282", "1283", "1284", "1285", "1286", "1287", "1288", "1289", "1290", "1291", "1292", "1293", "1294", "1295", "1296", "1297", "1298", "1299", "1300", "1301", "1302", "1303", "1304", "1305", "1306", "1307", "1308", "1309", "1310", "1311", "1312", "1313", "1314", "1315", "1316", "1317", "1318", "1319", "1320", "1321", "1322", "1323", "1324", "1325", "1326", "1327", "1328", "1329", "1330", "1331", "1332", "1333", "1334", "1335", "1336", "1337", "1338", "1339", "1340", "1341", "1342", "1343", "1344", "1345", "1346", "1347", "1348", "1349", "1350", "1351", "1352", "1353", "1354", "1355", "1356", "1357", "1358", "1359", "1360", "1361", "1362", "1363", "1364", "1365", "1366", "1367", "1368", "1369", "1370", "1371", "1372", "1373", "1374", "1375", "1376", "1377", "1378", "1379", "1380", "1381", "1382", "1383", "1384", "1385"]]'
    //     'args' : '[["95"]]'
    //     });
      
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







let list = []

// let all



// /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 1616
    const getData = async() => {
      for (let i = 0; i < 0; i++) {
      counter = '["'+i+'"]'

      const endpoint="https://gooeys.dogira.finance/"+i+""
      let att = []

        try {
            const response = await axios.get(endpoint)
            // console.log(response.data)
            let posts = response.data
            // console.log(posts)
            // all = posts
            att.push(posts)
            // console.log(att)
        } catch (error) {
            console.error(error)
        }


      // console.log(counter)

      var data = qs1.stringify({
        'chain': 'polygon',
        'network': 'mainnet',
        'contract': '0xFAB55Fe6E7483b1ADBAcC377C2544b4ee79010c1',
        'abi': gooeyABI,
        'method': 'gooeyAttributes',
        'args': counter,
        // 'args': '["95"]',
      });
      
    //   let att = []

    //   var data = qs1.stringify({
    //     'chain': 'polygon',
    //     'network': 'mainnet',
    //     'contract': '0xFAB55Fe6E7483b1ADBAcC377C2544b4ee79010c1',
    //     'abi': gooeyABI,
    //     'method': 'gooeyAttributes',
    //     'args': '["94"]',
    //   });

    //Fruit Contract Data
    // var data = qs1.stringify({
    //   'chain': 'polygon',
    //   'network': 'mainnet',
    //   'contract': '0x2375874eb409095efa6090bf7085ae3922543c72',
    //   'abi' : '[{"anonymous": false,"inputs": [{"indexed": true,"internalType": "address","name": "previousOwner","type": "address"},{"indexed": true,"internalType": "address","name": "newOwner","type": "address"}],"name": "OwnershipTransferred","type": "event"},{"inputs": [{"internalType": "address","name": "_dToken","type": "address"},{"internalType": "address","name": "_gToken","type": "address"},{"internalType": "address","name": "_gFruit","type": "address"},{"internalType": "address","name": "_gCore","type": "address"}],"name": "loadExterns","outputs": [],"stateMutability": "nonpayable","type": "function"},{"inputs": [],"name": "renounceOwnership","outputs": [],"stateMutability": "nonpayable","type": "function"},{"inputs": [{"internalType": "address","name": "newOwner","type": "address"}],"name": "transferOwnership","outputs": [],"stateMutability": "nonpayable","type": "function"},{"inputs": [{"internalType": "address","name": "_dToken","type": "address"},{"internalType": "address","name": "_gToken","type": "address"},{"internalType": "address","name": "_gFruit","type": "address"},{"internalType": "address","name": "_gCore","type": "address"}],"stateMutability": "nonpayable","type": "constructor"},{"inputs": [{"internalType": "address","name": "owner","type": "address"},{"internalType": "uint256","name": "baseGooeyId","type": "uint256"}],"name": "getTumblingFeesForGooeys","outputs": [{"internalType": "uint256[][]","name": "gooeyFees","type": "uint256[][]"}],"stateMutability": "view","type": "function"},{"inputs": [{"internalType": "address","name": "owner","type": "address"}],"name": "loadAllGooeysForPlayer","outputs": [{"internalType": "uint256[][]","name": "gooeyStats","type": "uint256[][]"}],"stateMutability": "view","type": "function"},{"inputs": [{"internalType": "address","name": "owner","type": "address"},{"internalType": "uint256","name": "maxFruitID","type": "uint256"}],"name": "loadFruitByOwner","outputs": [{"internalType": "uint256[]","name": "ownerFruitAmts","type": "uint256[]"}],"stateMutability": "view","type": "function" }, { "inputs": [], "name": "loadGlobalSettings", "outputs": [ { "internalType": "uint256[]", "name": "settings", "type": "uint256[]" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "uint256[]", "name": "ids", "type": "uint256[]" } ], "name": "loadGooeyStats", "outputs": [ { "internalType": "uint256[][]", "name": "gooeyStats", "type": "uint256[][]" } ], "stateMutability": "view","type": "function" }, { "inputs": [ { "internalType": "address", "name": "owner", "type": "address" }, { "internalType": "uint256", "name": "maxFruitID", "type": "uint256" } ] ,"name": "loadTokenAndFruitInfo", "outputs": [ { "internalType": "uint256[][]", "name": "tokenAndFruitAmts", "type": "uint256[][]" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "owner", "type": "address" } ], "name": "loadTokenInfo", "outputs": [ { "internalType": "uint256[]", "name": "tokenAmts", "type": "uint256[]" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "owner", "outputs": [ { "internalType": "address", "name": "", "type": "address" } ], "stateMutability": "view", "type": "function" } ] ',
    //   'method': 'loadGooeyStats',
    //   'args': '[["94", "10"]]',
    // });
      
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
        let newGooey = []


        newGooey = 
            {
            "GooeyId" : parseInt(reg2[56]),

            "HP" :  parseInt(reg2[1]),
            "ATK" : parseInt(reg2[2]),
            "DEF" :  parseInt(reg2[3]),
            "SPD" :  parseInt(reg2[4]),
            "Total" : parseInt(reg2[1]) + parseInt(reg2[2]) + parseInt(reg2[3]) + parseInt(reg2[4]),

            "BirthBlock" :  parseInt(reg2[10]),
            "TotalTumbles" :  parseInt(reg2[17]),
            "TumblesRemaining" :  parseInt(reg2[12]),

            "Gen" :  parseInt(reg2[11]),
            "Parent1" :  parseInt(reg2[18]),
            "Parent2" :  parseInt(reg2[19]),

            "Nexus" :  parseInt(reg2[14]),
            "TumbleRollBonus" :  parseInt(reg2[16]),
            "FoodStore" : parseInt(reg2[15]) * 2,
    
            "Background" : att[0].attributes[0].value,
            "Ears" : att[0].attributes[1].value,
            "Body" : att[0].attributes[2].value,
            "Mask" : att[0].attributes[3].value,
            "Eyes" : att[0].attributes[4].value,
            "Accessory" : att[0].attributes[5].value,
            "Foreground" : att[0].attributes[6].value,





            // "BackgroundTotal" : (gooeyData.filter(x => x.Background === att[0].attributes[0].value)).length,
            // "BackgroundPercentage" : ((gooeyData.filter(x => x.Background === att[0].attributes[0].value)).length / gooeyData.length * 100).toFixed(2),

            // "BodyTotal" : (gooeyData.filter(x => x.Body === att[0].attributes[2].value)).length,
            // "BodyPercentage" : ((gooeyData.filter(x => x.Body === att[0].attributes[2].value)).length / gooeyData.length * 100).toFixed(2),

            // "MaskTotal" : (gooeyData.filter(x => x.Mask === att[0].attributes[3].value)).length,
            // "MaskPercentage" : ((gooeyData.filter(x => x.Mask === att[0].attributes[3].value)).length / gooeyData.length * 100).toFixed(2),

            // "EyesTotal" : (gooeyData.filter(x => x.Eyes === att[0].attributes[4].value)).length,
            // "EyesPercentage" : ((gooeyData.filter(x => x.Eyes === att[0].attributes[4].value)).length / gooeyData.length * 100).toFixed(2),

            // "EarsTotal" : (gooeyData.filter(x => x.Ears === att[0].attributes[1].value)).length,
            // "EarsPercentage" : ((gooeyData.filter(x => x.Ears === att[0].attributes[1].value)).length / gooeyData.length * 100).toFixed(2),

            // "AccessoryTotal" : (gooeyData.filter(x => x.Accessory === att[0].attributes[5].value)).length,
            // "AccessoryPercentage" : ((gooeyData.filter(x => x.Accessory === att[0].attributes[5].value)).length / gooeyData.length * 100).toFixed(2),

            // "ForegroundTotal" : (gooeyData.filter(x => x.Foreground === att[0].attributes[6].value)).length,
            // "ForegroundPercentage" : ((gooeyData.filter(x => x.Foreground === att[0].attributes[6].value)).length / gooeyData.length * 100).toFixed(2),

            // "RarityScore" : ((gooeyData.length / (gooeyData.filter(g => g.Background === att[0].attributes[0].value).length)) + 
            //                 (gooeyData.length / (gooeyData.filter(g => g.Body === att[0].attributes[2].value).length)) +
            //                 (gooeyData.length / (gooeyData.filter(g => g.Mask === att[0].attributes[3].value).length)) + 
            //                 (gooeyData.length / (gooeyData.filter(g => g.Eyes === att[0].attributes[4].value).length)) + 
            //                 (gooeyData.length / (gooeyData.filter(g => g.Ears === att[0].attributes[1].value).length)) + 
            //                 (gooeyData.length / (gooeyData.filter(g => g.Accessory === att[0].attributes[5].value).length)) + 
            //                 (gooeyData.length / (gooeyData.filter(g => g.Foreground === att[0].attributes[6].value).length))).toFixed(0),

            // "TotalRarityStrength" : parseInt((parseInt(reg2[1]) + parseInt(reg2[2]) + parseInt(reg2[3]) + parseInt(reg2[4]))) + 
            //                 parseInt(parseInt((gooeyData.length / (gooeyData.filter(g => g.Background === att[0].attributes[0].value).length))) + 
            //                 parseInt((gooeyData.length / (gooeyData.filter(g => g.Body === att[0].attributes[2].value).length))) +
            //                 parseInt((gooeyData.length / (gooeyData.filter(g => g.Mask === att[0].attributes[3].value).length))) + 
            //                 parseInt((gooeyData.length / (gooeyData.filter(g => g.Eyes === att[0].attributes[4].value).length))) + 
            //                 parseInt((gooeyData.length / (gooeyData.filter(g => g.Ears === att[0].attributes[1].value).length))) + 
            //                 parseInt((gooeyData.length / (gooeyData.filter(g => g.Accessory === att[0].attributes[5].value).length))) + 
            //                 parseInt((gooeyData.length / (gooeyData.filter(g => g.Foreground === att[0].attributes[6].value).length)))),





            }
            
            // {
            // "Background" : parseInt(reg2[21]),
            // "Ears" : parseInt(reg2[22]),
            // "Body" : parseInt(reg2[23]),
            // "Mask" : parseInt(reg2[24]),
            // "Eyes" : parseInt(reg2[25]),
            // "Accessory" : parseInt(reg2[26]),
            // }
          

        // console.log(newGooey)
        list.push(newGooey)
        console.log(list)

      })
      .catch(function (error) {
        console.log(error);
      });
    }
  }

  getData().then(console.log(list));



/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////









    gooeyData

    let Gooeys
    
    
    Gooeys = gooeyData

    // console.log(gooeyData.length)



// console.log(Gooeys)

// let g2 = JSON.stringify(Gooeys)

// console.log(g2)

let g = Gooeys

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

let number

$: validateNR = function validateInput() {
    if(number < 0) {
        number = 0
    }
   }

function filterByNumber() {
    Gooeys = Gooeys.filter(goo => goo.GooeyID == number)
    number = ""
}

function reset() {
    Gooeys = g
    number = ""
}


//console.log(unsortedGooeys)

// "https://gooeys.dogira.finance/1.jpg"


</script>

<!-- svelte-ignore non-top-level-reactive-declaration -->
<!-- svelte-ignore non-top-level-reactive-declaration -->
<main>

    <Menu/>

    <!-- {#if !$connected}

      <p>My application is not yet connected</p>

    {:else}

      <p>Connected to chain with id {$chainId}</p>

    {/if} -->

    <h1 style="text-align:center">All Gooeys in one place</h1>

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
                <button style="font-family: Bangers;" on:click="{sortByHighestStrength}" type="button">STG ↑</button>
                <button style="font-family: Bangers;" on:click="{sortByLowestStrength}" type="button">STG ↓</button>
            </div>
        </div>
    </div>

    <h2 style="text-align:center">Search by #</h2>
    <div style="display:grid; justify-items:center; align-content:center">
        <input style="margin-bottom:10px;" type="number" name="gooey" id="Gooey" bind:value="{number}" on:blur="{validateNR}">
        <div style="display:grid; margin-bottom:10px;">
            <button style="font-family: Bangers;" class="confirm" on:click="{filterByNumber}" type="button">Confirm</button>
            <button style="font-family: Bangers;" class="reset" on:click="{reset}" type="button">Reset</button>
        </div>
    </div>

    <div class="table-container">
        <table class="gooey-table"> 
            <thead >
                <tr>
                    <th>Gooey</th>
                    <th>Health</th> 
                    <th>Attack</th> 
                    <th>Defense</th> 
                    <th>Speed</th> 
                    <th>Total Strength</th>
                </tr>
            </thead> 
            <tbody id="gooey-table-body">
                {#each Gooeys.slice(0, 50) as goo}
                <!-- <div style="display:grid; justify-items:center; align-items:center; width:100%;" id="info-container{goo.GooeyId}">
                  <div style="display:grid; justify-items:center; align-items:center; widht:100%;">
                    <img style="width:200px; height:200px; border-radius:35px; border:2px solid purple;" src="https://gooeys.dogira.finance/{goo.GooeyId}.jpg" alt="">
                  </div>
                  <div style="display:grid; grid-template-columns:auto auto; grid-gap:20px; justify-items:center; align-items:center;">
                    <p>#{goo.GooeyId}</p>
                    <p>Gen: {goo.Gen}</p>
                  </div>
                  <div style="display:grid; grid-template-columns:auto auto; justify-items:center; align-items:center;">
                    <p>Parent1: <br>{goo.Parent1 == -1 ? "none" : goo.Parent1}</p>
                    <p>Parent2: <br>{goo.Parent2 == -1 ? "none" : goo.Parent2}</p>
                    <p>Nexus: <br>{goo.Nexus}</p>
                    <p>Tumble Bonus: <br>{goo.TumbleRollBonus}%</p>
                  </div>
                  <div>
                    <p>Food Store: <br>{goo.FoodStore}</p>
                  </div>
                </div> -->
                <tr onclick="modal5.style.display='none'">
                    <!-- <td><img style="width:15px; height:15px; border:1px solid black; border-radius:15px;" src="https://gooeys.dogira.finance/{goo.GooeyId}.jpg" alt=""># {goo.GooeyId}</td> -->
                    <td># {goo.GooeyId}</td>  
                    <td>{goo.HP}</td> 
                    <td>{goo.ATK}</td> 
                    <td>{goo.DEF}</td> 
                    <td>{goo.SPD}</td> 
                    <td>{goo.Total}</td> 
                </tr>
                {/each}
            </tbody>
        </table>
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

.button-container {
    display: flex;
    justify-content: center;
}

.button {
    display: grid;
}

button {
    background-color: rgb(98, 255, 221);
    border-radius: 5px;
    margin: 0px 10px 2.5px 0px;
    border: 1px solid black;
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

.confirm {
    background-color: rgb(116, 255, 98);
    border-radius: 5px;
    margin: 0px 0px 15px 0px;
    border: 1px solid black;
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

.table-container {
  margin-bottom: 100px;
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

.gooey-table > tbody > tr > td:nth-child(2) {
  color: #67afa8;
  text-shadow: 1px 1px 10px rgba(255, 255, 255, 0.5);
  text-align: center;
}

.gooey-table > tbody > tr > td:nth-child(3) {
  color: #f39292;
  text-shadow: 1px 1px 10px rgba(255, 255, 255, 0.5);
}

.gooey-table > tbody > tr > td:nth-child(4) {
  color: #dd9103;
  text-shadow: 1px 1px 10px rgba(255, 255, 255, 0.5);
}

.gooey-table > tbody > tr > td:nth-child(5) {
  color: #2071eb;
  text-shadow: 1px 1px 10px rgba(255, 255, 255, 0.5);
}

.gooey-table > tbody > tr > td:nth-child(6) {
  color: #000000;
  text-shadow: 1px 1px 10px rgba(255, 255, 255, 0.5);
  text-align: center;
  font-size: 20px;
}

.gooey-table > tbody > tr > td:nth-child(9) {
  color: #000000;
  text-shadow: 1px 1px 10px rgba(255, 255, 255, 0.5);
}

.gooey-table > tbody > tr > td:nth-child(n+1):nth-child(-n+5) {
  border-right: 1px solid black;
}

.gooey-table > tbody > tr > td:nth-child(6) {
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
    width: 50px !important;
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
    width: 40px !important;
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
    width: 35px !important;
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

@media only screen and (min-width: 10px) and (max-width: 290px) {

  h1 {
    font-size: 40px;
  }
  
}


/*------------------ Gooey Table End -----------------------------------------------------*/



</style>
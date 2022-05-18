import { writable } from "svelte/store"
import { browser } from "$app/env"

export const amount = writable(
    browser && (localStorage.getItem("amount") || "0"))
    
amount.subscribe((val) => browser && localStorage.setItem("amount", val))
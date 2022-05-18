import { writable as internal, get } from 'svelte/store'
import { browser } from '$app/env'

export function writable(key, initialValue) {
    
  const store = internal(initialValue)
  const {subscribe, set} = store
  if(browser){
    const json = localStorage.getItem(key)
    if (json) { set(JSON.parse(json)) }
  } 
  return {
    set(value) {
      if(browser){
      localStorage.setItem(key, JSON.stringify(value))
      }
      set(value)
    },
    update(cb) {
      const value = cb(get(store))
      this.set(value)
    },
    subscribe
  }
} 

// export function writable2(key, initialValue) {
    
//   const store2 = internal(initialValue)
//   const {subscribe, set} = store2
//   if(browser){
//     const json = localStorage.getItem(key)
//     if (json) { set(JSON.parse(json)) }
//   } 
//   return {
//     set(value) {
//       if(browser){
//       localStorage.setItem(key, JSON.stringify(value))
//       }
//       set(value)
//     },
//     update(cb) {
//       const value = cb(get(store2))
//       this.set(value)
//     },
//     subscribe
//   }
// } 
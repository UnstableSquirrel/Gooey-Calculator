<script>
   
   let open = false

      if (open == false) {
         open = true
      }

      if (open == true) {
         open = false
      }




</script>


<main>


</main>

   <div class="nav-container">
      <nav class="menu"> 
         <input type="checkbox" bind:checked={open} href="/" class="menu-open" name="menu-open" id="menu-open" />
         <label class="menu-open-button" for="menu-open">
             <span class="lines line-1"></span>
             <span class="lines line-2"></span>
             <span class="lines line-3"></span>
         </label>
         </nav>
   </div>

   <div class="slide-container" class:open >
      <div>
         <a href="#My-Gooeys">My Gooeys</a>
         <a href="#Best-Deals">Best Deals</a>
         <a href="#Tumbling-Costs">Tumbling Costs</a>
         <a href="#Stats-Calculator">Stats Calculator</a>
      </div>
   </div>

<style>

main {
   padding: 0px;
   margin: 0;
   background: #596778;
   color: #EEEEEE;
   text-align: center;
   display: flex;
}

@keyframes slide-in {
  from {
    height: 0px;
    font-size: 0px;
  }
  to {
    height: 170px;
    font-size: 20px;
  }
}

@keyframes slide-out {
  from {
   height: 170px;
   font-size: 20px;
  }
  to {
   height: 0px;
   font-size: 0px;
  }
}

/*.close {
   animation: slide-out 0.2s linear;
}*/

.slide-container {
   background: linear-gradient(45deg,  rgba(66, 183, 245, 0.4) 0%,rgba(66, 245, 189, 0.5) 100%);
   height: 0px;
   font-size : 0px;
}

.slide-container > div {
   padding: 20px 0px;
   display: grid !important;
   justify-items: center;
   grid-gap: 15px;
}

a {
   text-decoration: none;
   color: rgb(0, 0, 0);
}

a:hover {
   color: rgb(182, 92, 243);
   transition: 0.4s ease;
}

.open {
   height: 170px;
   font-size : 20px;
   animation: slide-in 0.2s linear;
}

.nav-container {
   display: flex;
   justify-content: center;
   padding: 25px;

}

.menu-open-button {
   background: #EEEEEE;
   border-radius: 100%;
   width: 70px;
   height: 70px;
   position: absolute;
   color: #FFFFFF;
   text-align: center;
   line-height: 80px;
   -webkit-transform: translate3d(0, 0, 0);
   transform: translate3d(0, 0, 0);
   -webkit-transition: -webkit-transform ease-out 200ms;
   transition: -webkit-transform ease-out 200ms;
   transition: transform ease-out 200ms;
   transition: transform ease-out 200ms, -webkit-transform ease-out 200ms;
}

.menu-open {
   display: none;
}

.lines {
   width: 25px;
   height: 3px;
   background: #596778;
   display: block;
   position: absolute;
   top: 50%;
   left: 50%;
   margin-left: -12.5px;
   margin-top: -1.5px;
   -webkit-transition: -webkit-transform 200ms;
   transition: -webkit-transform 200ms;
   transition: transform 200ms;
   transition: transform 200ms, -webkit-transform 200ms;
}

.line-1 {
   -webkit-transform: translate3d(0, -8px, 0);
   transform: translate3d(0, -8px, 0);
}

.line-2 {
   -webkit-transform: translate3d(0, 0, 0);
   transform: translate3d(0, 0, 0);
}

.line-3 {
   -webkit-transform: translate3d(0, 8px, 0);
   transform: translate3d(0, 8px, 0);
}

.menu-open:checked + .menu-open-button .line-1 {
   -webkit-transform: translate3d(0, 0, 0) rotate(45deg);
   transform: translate3d(0, 0, 0) rotate(45deg);
}

.menu-open:checked + .menu-open-button .line-2 {
   -webkit-transform: translate3d(0, 0, 0) scale(0.1, 1);
   transform: translate3d(0, 0, 0) scale(0.1, 1);
}

.menu-open:checked + .menu-open-button .line-3 {
   -webkit-transform: translate3d(0, 0, 0) rotate(-45deg);
   transform: translate3d(0, 0, 0) rotate(-45deg);
}

.menu {
   display: flex;
   width: 80px;
   height: 80px;
   text-align: center;
   box-sizing: border-box;
   font-size: 26px;
}

.menu-open-button {
   z-index: 2;
   -webkit-transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);
   transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);
   -webkit-transition-duration: 400ms;
   transition-duration: 400ms;
   -webkit-transform: scale(1.1, 1.1) translate3d(0, 0, 0);
   transform: scale(1.1, 1.1) translate3d(0, 0, 0);
   cursor: pointer;
   box-shadow: 3px 3px 0 0 rgba(0, 0, 0, 0.14);
}

.menu-open-button:hover {
   -webkit-transform: scale(1.2, 1.2) translate3d(0, 0, 0);
   transform: scale(1.2, 1.2) translate3d(0, 0, 0);
}

.menu-open:checked + .menu-open-button {
   -webkit-transition-timing-function: linear;
   transition-timing-function: linear;
   -webkit-transition-duration: 200ms;
   transition-duration: 200ms;
   -webkit-transform: scale(0.8, 0.8) translate3d(0, 0, 0);
   transform: scale(0.8, 0.8) translate3d(0, 0, 0);
}

</style>
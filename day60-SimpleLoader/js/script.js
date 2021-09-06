import { Debounce } from "../../web-page/modules/debounce.js";

(() => {
    // Create a debounce method
    const debounce = new Debounce();

    // HTML references
    const loaderContainer = document.querySelector('.loader--container');
    const loader = document.querySelector('.loader');
    const duration = 100;
    
    function getAnimationLoader() {
        loader.style.animation = "load 1s cubic-bezier(0.247, 0.287, 0.745, 0.715) infinite";
        loaderContainer.style.animation = "reverseload 1s cubic-bezier(0.375, 0.287, 0.175, 0.725) infinite";
    }
    
   const interval = setInterval( debounce.update( () => {
       getAnimationLoader()
   }), duration )

})()
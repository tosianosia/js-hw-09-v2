!function(){let t=null,n={startBtn:document.querySelector("button[data-start]"),stopBtn:document.querySelector("button[data-stop]")};function e(){n.startBtn.toggleAttribute("disabled"),n.stopBtn.toggleAttribute("disabled")}function o(){document.body.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`}n.startBtn.addEventListener("click",function(){e(),t=setInterval(o,1e3)}),n.stopBtn.addEventListener("click",function(){e(),clearInterval(t)}),n.stopBtn.setAttribute("disabled","")}();
//# sourceMappingURL=01-color-switcher.f9366ab1.js.map

const miModulo=(()=>{"use strict";let e=[];const t=["C","D","H","S"],a=["A","J","Q","K"];let l=[],n=[];const r=document.querySelector(".btnPedir"),o=document.querySelector(".btnDetener"),d=document.querySelector(".btnNuevo"),i=document.querySelectorAll(".divCartas"),s=document.querySelectorAll("small"),c=(t=2)=>{e=u(),l=[],n=[];for(let e=0;e<t;e++)l.push(0),n.push([]);console.clear(),s.forEach(e=>e.innerText=0),i.forEach(e=>e.innerHTML=""),r.disabled=!1,o.disabled=!1},u=()=>{e=[];for(let a=2;a<=10;a++)for(let l of t)e.push(a+l);for(let l of t)for(let t of a)e.push(t+l);return e},h=()=>{if(0===e.length)throw"No hay cartas en la Baraja";let t=Math.floor(Math.random()*e.length);const a=e[t];return e=e.filter(e=>e!==a),a},g=(e,t)=>{let a=(e=>{const t=e.substring(0,e.length-1);return isNaN(t)?"A"===t?11:10:1*t})(e);return 11===a&&a+l[t]>21&&2===n[t]?l[t]=l[t]+a-20:11===a&&a+l[t]>21?l[t]=l[t]+a-10:l[t]=l[t]+a,s[t].innerText=l[t],l[t]},f=(e,t)=>{const a=document.createElement("img");a.src=`assets/cartas/${e}.png`,a.classList.add("card"),i[t].append(a)},m=e=>{do{const t=h();n[n.length-1].splice(n.length-1,0,t),g(t,l.length-1),f(t,l.length-1);let a=n[0],r=n[n.length-1],o=l[l.length-1];if(e>21)break;if(21===e&&2===a){if(o<10&&r.length<2)break;if(o<21&&r.length<=2)break}else if(o>=17)break}while(l[l.length-1]<=e&&e<=21);b(e)},b=e=>{setTimeout(()=>{let t=n[0],a=n[n.length-1],r=l[l.length-1];r===e&&t.length===a.length?alert("Empate, Nadie Gana ni Pierde"):r===e&&t.length>2?alert("Empate, Nadie Gana ni Pierde"):2===t.length&&21===e?alert("BlackJack! Jugador Gana"):e>21?alert("Computadora Gana"):r>21?alert("Jugador Gana"):r>e?2===a.length&&21===r?alert("BlackJack! Computadora Gana"):alert("Computadora Gana"):r===e?alert("Empate, Nadie Gana ni Pierde"):alert("Jugador Gana")},100)};return r.addEventListener("click",()=>{const e=h();n[0].splice(0,0,e);const t=g(e,0);f(e,0),t>21?(r.disabled=!0,o.disabled=!0,m(t)):21===t&&(r.disabled=!0,o.disabled=!0,m(t))}),o.addEventListener("click",()=>{r.disabled=!0,o.disabled=!0,m(l[0])}),d.addEventListener("click",()=>{c()}),{nuevoJuego:c}})();
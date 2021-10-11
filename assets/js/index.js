/*
* 2C = Two of Clubs
* 2D = Two of Diamonds
* 2H = Two of Hearts
* 2S = Two of Spades
*/

let deck = [];
const tipos = ['C', 'D', 'H', 'S'];
const especiales = ['A', 'J', 'Q', 'K'];

let puntosJugador = 0;
let puntosComputadora = 0;

//HTML REFERENCES

const btnPedir = document.querySelector('.btnPedir');
const puntosHTML = document.querySelectorAll('small');
const divCartasJugador = document.querySelector('#jugador-cartas');
const divCartasComputadora = document.querySelector('#computadora-cartas');
const btnDetener = document.querySelector('.btnDetener');

// CREATE DECK

const crearDeck = () => {

   for(let i = 2; i<=10; i++){
      for(let tipo of tipos) {
         deck.push(i + tipo);
      }
   }

   for(let tipo of tipos){
      for(let esp of especiales) {
         deck.push(esp + tipo);
      }
   }

   return deck
};

crearDeck();

// ASK FOR A CARD

const pedirCarta = () => {

   if(deck.length === 0) {
      throw 'No hay cartas en la Baraja';
   } else {

      let i = Math.floor(Math.random()*deck.length);
      const carta = deck[i];
      deck = deck.filter((element) => element !== deck[i]);
      return carta

   }

};

// GIVE VALUE TO A CARD

const valorCarta = (carta) => {
   const aux = carta.substring(0, carta.length - 1);
   return (isNaN(aux)) ? 
         (aux === 'A') ? 11 : 10 
      : aux * 1;

};

// COMPUTER TURN

const turnoComputadora = (puntosMinimos) => {

   do {

      const carta = pedirCarta();
      puntosComputadora = puntosComputadora + valorCarta(carta);
      puntosHTML[1].innerText = puntosComputadora;

      const imgCarta = document.createElement('img');
      imgCarta.src = `assets/cartas/${ carta }.png`;
      imgCarta.classList.add('card');
      divCartasComputadora.append(imgCarta);

      if (puntosMinimos > 21) {
         break;
      }

   } while ((puntosComputadora <= puntosMinimos) && puntosMinimos <= 21);

}

//EVENTS

btnPedir.addEventListener('click', () => {


   const carta = pedirCarta();
   puntosJugador = puntosJugador + valorCarta(carta);
   puntosHTML[0].innerText = puntosJugador;

   const imgCarta = document.createElement('img');
   imgCarta.src = `assets/cartas/${ carta }.png`;
   imgCarta.classList.add('card');
   divCartasJugador.append(imgCarta);
   if (puntosJugador > 21 ) {
      console.warn('Lo siento mucho, perdiste');
      btnPedir.disabled = true;
      btnDetener.disabled = true;
      turnoComputadora(puntosJugador);
   } else if (puntosJugador === 21 ) {
      console.warn('genial, 21');
      btnPedir.disabled = true;
      btnDetener.disabled = true;
      turnoComputadora(puntosJugador);
   } 
       
});

btnDetener.addEventListener('click', () => {
   btnPedir.disabled   = true;
   btnDetener.disabled = true;
   turnoComputadora( puntosJugador );
})


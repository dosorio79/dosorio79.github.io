/* --- VARIABLES --- */

// select cards and get original shadow settings
const cards = document.getElementsByClassName('card-white');
const cardShadow = getComputedStyle(cards[0]).boxShadow;

/* ----------------------------------------------- */


/* --- FUNCTIONS --- */


/* ----------------------------------------------- */


/* --- EVENT LISTENERS --- */

// Add event listeners for mouseover and mouseout
Array.from(cards).forEach((card) => {

  // Add event listener for mouseover remove the shadow
  card.addEventListener('mouseover', () => {
    card.style.boxShadow = '0 0 32px rgba(0, 0, 0, 0.5)';
  });

  // Add event listener for mouseout, restore shadow
  card.addEventListener('mouseout', () => {
    card.style.boxShadow = cardShadow;
  });
});


/* ----------------------------------------------- */

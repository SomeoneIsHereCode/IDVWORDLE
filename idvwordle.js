const characters = [
  { name: "Lucky Guy", role: "Survivor", gender: "Male", season: 1, difficulty: 1, skins: 1, avatar: "SurvivorIconAvatars/NavLuckyGuy.jpeg"},
  { name: "Doctor", role: "Survivor", gender: "Female", season: 1, difficulty: 1, skins: 4, avatar: "SurvivorIconAvatars/NavDoctor.jpeg" },
  { name: "Lawyer", role: "Survivor", gender: "Male", season: 1, difficulty: 1, skins: 1, avatar: "SurvivorIconAvatars/NavLawyer.jpeg" },
  { name: "Thief", role: "Survivor", gender: "Male", season: 1, difficulty: 1.5, skins: 1, avatar: "SurvivorIconAvatars/NavThief.jpeg" },
  { name: "Gardener", role: "Survivor", gender: "Female", season: 1, difficulty: 1, skins: 5, avatar: "SurvivorIconAvatars/NavGardener.jpeg" },
  { name: "Magician", role: "Survivor", gender: "Male", season: 1, difficulty: 2, skins: 2, avatar: "SurvivorIconAvatars/NavMagician.jpeg" },
  { name: "Explorer", role: "Survivor", gender: "Male", season: 1, difficulty: 1.5, skins: 2, avatar: "SurvivorIconAvatars/NavExplorer.jpeg" },
  { name: "Mercenary", role: "Survivor", gender: "Male", season: 1, difficulty: 1.5, skins: 4, avatar: "SurvivorIconAvatars/NavMercenary.jpeg" },
  { name: "Coordinator", role: "Survivor", gender: "Female", season: 1, difficulty: 1, skins: 4, avatar: "SurvivorIconAvatars/NavCoordinator.jpeg" },
  { name: "Mechanic", role: "Survivor", gender: "Female", season: 1, difficulty: 2, skins: 3, avatar: "SurvivorIconAvatars/NavMechanic.jpeg" },
  { name: "Forward", role: "Survivor", gender: "Male", season: 1, difficulty: 3, skins: 2, avatar: "SurvivorIconAvatars/NavForward.jpeg" },
  { name: "The Mind's Eye", role: "Survivor", gender: "Female", season: 1, difficulty: 2.5, skins: 4, avatar: "SurvivorIconAvatars/NavTheMindsEye.jpeg" },
  { name: "Priestess", role: "Survivor", gender: "Female", season: 1, difficulty: 2, skins: 6, avatar: "SurvivorIconAvatars/NavPriestess.jpeg" },
  { name: "Perfumer", role: "Survivor", gender: "Female", season: 1, difficulty: 1.5, skins: 6, avatar: "SurvivorIconAvatars/NavPerfumer.jpeg" },
  { name: "Cowboy", role: "Survivor", gender: "Male", season: 2, difficulty: 2.5, skins: 2, avatar: "SurvivorIconAvatars/NavCowboy.jpeg" },
  { name: "Female Dancer", role: "Survivor", gender: "Female", season: 2, difficulty: 1.5, skins: 4, avatar: "SurvivorIconAvatars/NavFemaleDancer.jpeg" },
  { name: "Seer", role: "Survivor", gender: "Male", season: 3, difficulty: 1.5, skins: 5, avatar: "SurvivorIconAvatars/NavSeer.jpeg" },
  { name: "Embalmer", role: "Survivor", gender: "Male", season: 3, difficulty: 1.5, skins: 4, avatar: "SurvivorIconAvatars/NavEmbalmer.jpeg" },
  { name: "Prospector", role: "Survivor", gender: "Male", season: 5, difficulty: 2.5, skins: 6, avatar: "SurvivorIconAvatars/NavProspector.jpeg" },
  { name: "Enchantress", role: "Survivor", gender: "Female", season: 5, difficulty: 1.5, skins: 3, avatar: "SurvivorIconAvatars/NavEnchantress.jpeg" },
  { name: "Wildling", role: "Survivor", gender: "Male", season: 6, difficulty: 1.5, skins: 1, avatar: "SurvivorIconAvatars/NavWildling.jpeg" },
  { name: "Acrobat", role: "Survivor", gender: "Male", season: 6, difficulty: 2.5, skins: 5, avatar: "SurvivorIconAvatars/NavAcrobat.jpeg" },
  { name: "First Officer", role: "Survivor", gender: "Male", season: 7, difficulty: 2, skins: 3, avatar: "SurvivorIconAvatars/NavFirstOfficer.jpeg" },
  { name: "Barmaid", role: "Survivor", gender: "Female", season: 8, difficulty: 2, skins: 3, avatar: "SurvivorIconAvatars/NavBarmaid.jpeg" },
  { name: "Postman", role: "Survivor", gender: "Male", season: 9, difficulty: 1, skins: 2, avatar: "SurvivorIconAvatars/NavPostman.jpeg" },
  { name: "Grave Keeper", role: "Survivor", gender: "Male", season: 10, difficulty: 1, skins: 2, avatar: "SurvivorIconAvatars/NavGraveKeeper.jpeg" },
  { name: "\"Prisoner\"", role: "Survivor", gender: "Male", season: 10, difficulty: 2, skins: 3, avatar: "SurvivorIconAvatars/NavPrisoner.jpeg" },
  { name: "Entomologist", role: "Survivor", gender: "Female", season: 11, difficulty: 1.5, skins: 4, avatar: "SurvivorIconAvatars/NavEntomologist.jpeg" },
  { name: "Painter", role: "Survivor", gender: "Male", season: 13, difficulty: 2, skins: 2, avatar: "SurvivorIconAvatars/NavPainter.jpeg" },
  { name: "Batter", role: "Survivor", gender: "Male", season: 14, difficulty: 2.5, skins: 2, avatar: "SurvivorIconAvatars/NavBatter.jpeg" },
  { name: "Toy Merchant", role: "Survivor", gender: "Female", season: 16, difficulty: 1.5, skins: 2, avatar: "SurvivorIconAvatars/NavToyMerchant.jpeg" },
  { name: "\"Psychologist\"", role: "Survivor", gender: "Female", season: 17, difficulty: 1.5, skins: 3, avatar: "SurvivorIconAvatars/NavPsychologist.jpeg" },
  { name: "Patient", role: "Survivor", gender: "Male", season: 17, difficulty: 2.5, skins: 3, avatar: "SurvivorIconAvatars/NavPatient.jpeg" },
  { name: "Novelist", role: "Survivor", gender: "Male", season: 18, difficulty: 2, skins: 2, avatar: "SurvivorIconAvatars/NavNovelist.jpeg" },
  { name: "\"Little Girl\"", role: "Survivor", gender: "Female", season: 18, difficulty: 1, skins: 3, avatar: "SurvivorIconAvatars/NavLittleGirl.jpeg" },
  { name: "Weeping Clown", role: "Survivor", gender: "Male", season: 19, difficulty: 1.5, skins: 2, avatar: "SurvivorIconAvatars/NavWeepingClown.jpeg" },
  { name: "Professor", role: "Survivor", gender: "Male", season: 21, difficulty: 2, skins: 1, avatar: "SurvivorIconAvatars/NavProfessor.jpeg" },
  { name: "Antiquarian", role: "Survivor", gender: "Female", season: 22, difficulty: 3, skins: 2, avatar: "SurvivorIconAvatars/NavAntiquarian.jpeg" },
  { name: "Composer", role: "Survivor", gender: "Male", season: 24, difficulty: 2.5, skins: 2, avatar: "SurvivorIconAvatars/NavComposer.jpeg" },
  { name: "Journalist", role: "Survivor", gender: "Female", season: 26, difficulty: 2, skins: 3, avatar: "SurvivorIconAvatars/NavJournalist.jpeg" },
  { name: "Aeroplanist", role: "Survivor", gender: "Male", season: 27, difficulty: 3, skins: 1, avatar: "SurvivorIconAvatars/NavAeroplanist.jpeg" },
  { name: "Cheerleader", role: "Survivor", gender: "Female", season: 28, difficulty: 2, skins: 1, avatar: "SurvivorIconAvatars/NavCheerleader.jpeg" },
  { name: "Puppeteer", role: "Survivor", gender: "Male", season: 30, difficulty: 1, skins: 1, avatar: "SurvivorIconAvatars/NavPuppeteer.jpeg" },
  { name: "Fire Investigator", role: "Survivor", gender: "Male", season: 31, difficulty: 1.5, skins: 1, avatar: "SurvivorIconAvatars/NavFireInvestigator.jpeg" },
  { name: "\"Faro Lady\"", role: "Survivor", gender: "Female", season: 32, difficulty: 1.5, skins: 1, avatar: "SurvivorIconAvatars/NavFaroLady.jpeg" },
  { name: "\"Knight\"", role: "Survivor", gender: "Male", season: 34, difficulty: 1.5, skins: 2, avatar: "SurvivorIconAvatars/NavKnight.jpeg" },
  { name: "Meteorologist", role: "Survivor", gender: "Female", season: 35, difficulty: 3, skins: 2, avatar: "SurvivorIconAvatars/NavMeteorologist.jpeg" },
  { name: "Archer", role: "Survivor", gender: "Female", season: 36, difficulty: 2.5, skins: 1, avatar: "SurvivorIconAvatars/NavArcher.jpeg" },
  { name: "\"Escapologist\"", role: "Survivor", gender: "Male", season: 37, difficulty: 2, skins: 1, avatar: "SurvivorIconAvatars/NavEscapologist.jpeg" },
  { name: "Hell Ember", role: "Hunter", gender: "Male", season: 1, difficulty: 1.5, skins: 1, avatar: "HunterIconAvatars/NavHellEmber.jpeg" },
  { name: "Smiley Face", role: "Hunter", gender: "Male", season: 1, difficulty: 1, skins: 4, avatar: "HunterIconAvatars/NavSmileyFace.jpeg" },
  { name: "The Ripper", role: "Hunter", gender: "Male", season: 1, difficulty: 1, skins: 7, avatar: "HunterIconAvatars/NavTheRipper.jpeg" },
  { name: "Gamekeeper", role: "Hunter", gender: "Male", season: 1, difficulty: 2, skins: 3, avatar: "HunterIconAvatars/NavGamekeeper.jpeg" },
  { name: "Soul Weaver", role: "Hunter", gender: "Female", season: 1, difficulty: 1.5, skins: 3, avatar: "HunterIconAvatars/NavSoulWeaver.jpeg" },
  { name: "Geisha", role: "Hunter", gender: "Female", season: 1, difficulty: 1.5, skins: 6, avatar: "HunterIconAvatars/NavGeisha.jpeg" },
  { name: "The Feaster", role: "Hunter", gender: "Male", season: 1, difficulty: 1.5, skins: 3, avatar: "HunterIconAvatars/NavTheFeaster.jpeg" },
  { name: "Wu Chang", role: "Hunter", gender: "Male", season: 2, difficulty: 2, skins: 5, avatar: "HunterIconAvatars/NavWuChang.jpeg" },
  { name: "Photographer", role: "Hunter", gender: "Male", season: 2, difficulty: 2.5, skins: 4, avatar: "HunterIconAvatars/NavPhotographer.jpeg" },
  { name: "Mad Eyes", role: "Hunter", gender: "Male", season: 3, difficulty: 3, skins: 1, avatar: "HunterIconAvatars/NavMadEyes.jpeg" },
  { name: "Dream Witch", role: "Hunter", gender: "Female", season: 4, difficulty: 3, skins: 3, avatar: "HunterIconAvatars/NavDreamWitch.jpeg" },
  { name: "Axe Boy", role: "Hunter", gender: "Male", season: 5, difficulty: 2, skins: 2, avatar: "HunterIconAvatars/NavAxeBoy.jpeg" },
  { name: "Evil Reptilian", role: "Hunter", gender: "Male", season: 6, difficulty: 2, skins: 3, avatar: "HunterIconAvatars/NavEvilReptilian.jpeg" },
  { name: "Bloody Queen", role: "Hunter", gender: "Female", season: 7, difficulty: 2, skins: 5, avatar: "HunterIconAvatars/NavBloodyQueen.jpeg" },
  { name: "Guard 26", role: "Hunter", gender: "Male", season: 8, difficulty: 2, skins: 3, avatar: "HunterIconAvatars/NavGuard26.jpeg" },
  { name: "\"Herald\"", role: "Hunter", gender: "Female", season: 9, difficulty: 2, skins: 2, avatar: "HunterIconAvatars/NavDisciple.jpeg" },
  { name: "Violinist", role: "Hunter", gender: "Male", season: 11, difficulty: 1.5, skins: 3, avatar: "HunterIconAvatars/NavViolinist.jpeg" },
  { name: "Sculptor", role: "Hunter", gender: "Female", season: 12, difficulty: 2.5, skins: 2, avatar: "HunterIconAvatars/NavSculptor.jpeg" },
  { name: "\"Undead\"", role: "Hunter", gender: "Male", season: 13, difficulty: 1.5, skins: 1, avatar: "HunterIconAvatars/NavUndead.jpeg" },
  { name: "Breaking Wheel", role: "Hunter", gender: "Male", season: 15, difficulty: 3, skins: 1, avatar: "HunterIconAvatars/NavTheBreakingWheel.jpeg" },
  { name: "Naiad", role: "Hunter", gender: "Female", season: 16, difficulty: 2, skins: 3, avatar: "HunterIconAvatars/NavNaiad.jpeg" },
  { name: "Wax Artist", role: "Hunter", gender: "Male", season: 18, difficulty: 2, skins: 2, avatar: "HunterIconAvatars/NavWaxArtist.jpeg" },
  { name: "\"Nightmare\"", role: "Hunter", gender: "Male", season: 18, difficulty: 1.5, skins: 1, avatar: "HunterIconAvatars/NavNightmare.jpeg" },
  { name: "Clerk", role: "Hunter", gender: "Female", season: 20, difficulty: 3, skins: 1, avatar: "HunterIconAvatars/NavClerk.jpeg" },
  { name: "Hermit", role: "Hunter", gender: "Male", season: 22, difficulty: 2, skins: 3, avatar: "HunterIconAvatars/NavHermit.jpeg" },
  { name: "Night Watch", role: "Hunter", gender: "Male", season: 25, difficulty: 1.5, skins: 2, avatar: "HunterIconAvatars/NavNightWatch.jpeg" },
  { name: "Opera Singer", role: "Hunter", gender: "Female", season: 27, difficulty: 2.5, skins: 1, avatar: "HunterIconAvatars/NavOperaSinger.jpeg" },
  { name: "\"Fool's Gold\"", role: "Hunter", gender: "Male", season: 29, difficulty: 1.5, skins: 1, avatar: "HunterIconAvatars/NavFoolsGold.jpeg" },
  { name: "The Shadow", role: "Hunter", gender: "Female", season: 31, difficulty: 3, skins: 1, avatar: "HunterIconAvatars/NavTheShadow.jpeg" },
  { name: "\"Goatman\"", role: "Hunter", gender: "Male", season: 33, difficulty: 2.5, skins: 1, avatar: "HunterIconAvatars/NavGoatman.jpeg" },
  { name: "\"Hullabaloo\"", role: "Hunter", gender: "Male", season: 34, difficulty: 2, skins: 1, avatar: "HunterIconAvatars/NavHullabaloo.jpeg" },
  { name: "Peddler", role: "Hunter", gender: "Female", season: 37, difficulty: 2, skins: 1, avatar: "HunterIconAvatars/NavPeddler.jpeg" }
];


const dailyModeButton = document.getElementById('dailyModeButton');
const dailyModeSign = document.getElementById('dailyModeSign');
const guessInput = document.getElementById('guessInput');
const autocompleteList = document.getElementById('autocomplete-list');
const submitButton = document.getElementById('submitButton');
const retryButton = document.getElementById('retryButton');
const tbody = document.querySelector('#guessTable tbody');
const message = document.getElementById('message');


function escapeHTML(str) {
  return String(str).replace(/[&<>"']/g, function(m) {
    return ({
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#39;'
    })[m];
  });
}


// Daily Mode state
let isDailyMode = localStorage.getItem('idvDailyMode') === 'true';
let secret;
let todaySeed = new Date().toISOString().slice(0, 10);

function updateDailyModeUI() {
  if (dailyModeButton) {
    dailyModeButton.textContent = isDailyMode ? 'Freeplay Mode' : 'Daily Mode';
    dailyModeButton.classList.toggle('active', isDailyMode);
  }
  if (dailyModeSign) {
    dailyModeSign.style.display = isDailyMode ? 'block' : 'none';
  }
}

if (dailyModeButton) {
  updateDailyModeUI();
  dailyModeButton.addEventListener('click', () => {
    isDailyMode = !isDailyMode;
    localStorage.setItem('idvDailyMode', isDailyMode);
    updateDailyModeUI();
    resetGame();
  });
}

function selectCharacter() {
  if (isDailyMode) {
    const seed = todaySeed;
    const index = Math.abs(seed.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0)) % characters.length;
    secret = characters[index];
  } else {
    secret = characters[Math.floor(Math.random() * characters.length)];
  }
}

selectCharacter();


let attempts = 0;
const maxAttempts = 5;


let wins = parseInt(localStorage.getItem('idvWins')) || 0;


function updateScoreDisplay() {
  const scoreDisplay = document.getElementById('scoreDisplay');
  if (scoreDisplay) {
    scoreDisplay.textContent = `Wins: ${wins}`;
  }
}


updateScoreDisplay();


function showDropdown() {
  if (autocompleteList) autocompleteList.style.display = 'block';
}


function hideDropdown() {
  if (autocompleteList) autocompleteList.style.display = 'none';
}


// Show dropdown when input is focused or clicked
// Update input event to reset highlight
    if (guessInput) {
      guessInput.addEventListener('input', () => {
        if (isDailyMode && dailyCompleted) return; // Prevent input if daily completed
        const val = guessInput.value.toLowerCase();
        if (!autocompleteList) return;
        if (!val) {
          showAllChars();
          return;
        }
        autocompleteList.innerHTML = '';
        // Get already guessed names
        const alreadyGuessedNames = tbody ? Array.from(tbody.querySelectorAll('tr')).map(row => row.cells[1]?.textContent?.toLowerCase()) : [];
        const filtered = characters.filter(c => c.name.toLowerCase().includes(val));
        filtered.forEach(char => {
          const alreadyGuessed = Array.from(tbody.querySelectorAll('tr')).some(row =>
            row.cells[1].textContent.toLowerCase() === char.name.toLowerCase()
          );
          const item = document.createElement('div');
          item.classList.add('autocomplete-item');
          item.innerHTML = `<img src="${escapeHTML(char.avatar)}" alt="${escapeHTML(char.name)}" /><span>${escapeHTML(char.name)}</span>`;
          if (alreadyGuessed) {
            item.classList.add('autocomplete-disabled');
            item.title = 'Already guessed';
            item.addEventListener('click', () => {
              message.textContent = 'You already guessed that character.';
              guessInput.value = '';
              hideDropdown();
            });
          } else {
            item.addEventListener('click', () => {
              guessInput.value = char.name;
              hideDropdown();
              makeGuess(); // <-- Immediately submit the guess!
            });
          }
          autocompleteList.appendChild(item);
        });

        // Highlight the first non-disabled item automatically
        const items = Array.from(autocompleteList.children);
        highlightedIndex = items.findIndex(item => !item.classList.contains('autocomplete-disabled'));
        updateHighlight(items);
        showDropdown();
      });
    }


// Hide dropdown when clicking outside input or dropdown
document.addEventListener('mousedown', (e) => {
  if (
    guessInput && autocompleteList &&
    e.target !== guessInput &&
    !autocompleteList.contains(e.target)
  ) {
    hideDropdown();
  }
});


let justSelectedAutocomplete = false;




// Arrow key navigation for dropdown
if (guessInput) {
  guessInput.addEventListener('keydown', (e) => {
    if (!autocompleteList) return;
    const items = Array.from(autocompleteList.children);
    if (autocompleteList.style.display === 'block' && items.length > 0) {
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        highlightedIndex = (highlightedIndex + 1) % items.length;
        updateHighlight(items);
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        highlightedIndex = (highlightedIndex - 1 + items.length) % items.length;
        updateHighlight(items);
      } else if (e.key === 'Enter') {
        e.preventDefault();
        if (highlightedIndex >= 0) {
          // Select the highlighted item
          guessInput.value = items[highlightedIndex].querySelector('span').textContent;
          hideDropdown();
          makeGuess();
        } else {
          // Only submit if the input matches a character exactly
          const guessName = guessInput.value.trim().toLowerCase();
          const match = characters.find(c => c.name.toLowerCase() === guessName);
          if (guessName && match) {
            makeGuess();
          } else {
            // Optionally, show a message or shake the input
            if (message) message.textContent = 'Please select a valid character from the list.';
          }
        }
      }
    } else if (e.key === 'Enter') {
      e.preventDefault();
      // Only submit if the input matches a character exactly
      const guessName = guessInput.value.trim().toLowerCase();
      const match = characters.find(c => c.name.toLowerCase() === guessName);
      if (guessName && match) {
        makeGuess();
      } else {
        if (message) message.textContent = 'Please select a valid character from the list.';
      }
    }
  });
}



function updateHighlight(items) {
  items.forEach((item, idx) => {
    if (idx === highlightedIndex) {
      item.classList.add('autocomplete-highlight');
      item.scrollIntoView({ block: 'nearest' });
    } else {
      item.classList.remove('autocomplete-highlight');
    }
  });
}


// Add highlight style
const style = document.createElement('style');
style.textContent = `.autocomplete-highlight { background-color: #ffcc00 !important; color: black !important; }`;
document.head.appendChild(style);


// For daily mode progress
function getDailyKey() {
  return 'idvDaily_' + todaySeed;
}
function saveDailyProgress(data) {
  localStorage.setItem(getDailyKey(), JSON.stringify(data));
}
function loadDailyProgress() {
  const raw = localStorage.getItem(getDailyKey());
  return raw ? JSON.parse(raw) : null;
}


function showPortraitImage(character) {
  const fullBodyImage = document.getElementById("fullBodyImage");
  if (!fullBodyImage) return;
  const folder = character.role === "Survivor" ? "SurvivorAvatars" : "HunterAvatars";
  // Remove non-word characters for filename, but keep spaces for some filenames if needed
  let baseName = character.name.replace(/\s+/g, "").replace(/[^\w]/g, "");
  const exts = [".jpeg", ".jpg", ".png"];
  let idx = 0;


  function tryNextExt() {
    if (idx >= exts.length) {
      // If all fail, hide the image
      fullBodyImage.style.display = "none";
      return;
    }
    const fileName = baseName + exts[idx];
    fullBodyImage.src = `${folder}/${fileName}`;
    fullBodyImage.alt = character.name;
    fullBodyImage.style.display = "block";
    idx++;
  }


  // Try loading each extension until one succeeds
  fullBodyImage.onerror = function () {
    tryNextExt();
  };
  idx = 0;
  tryNextExt();
}


function renderGuessRow(guessChar, secret, tbody) {
  if (!tbody) return;
  const row = document.createElement('tr');
  // Set data-char-name for duplicate detection (lowercase for consistency)
  row.setAttribute('data-char-name', guessChar.name.toLowerCase());

  // Avatar cell (no flip)
  const avatarCell = document.createElement('td');
  avatarCell.className = 'avatar-cell';
  avatarCell.innerHTML = `<img src="${escapeHTML(guessChar.avatar)}" alt="${escapeHTML(guessChar.name)}" />`;
  row.appendChild(avatarCell);

  // Trait cells with flip animation
  ['name', 'role', 'gender', 'season', 'difficulty', 'skins'].forEach(key => {
    const cell = document.createElement('td');
    cell.className = 'flip-cell';

    const inner = document.createElement('div');
    inner.className = 'flip-inner';

    const front = document.createElement('div');
    front.className = 'flip-front';
    front.textContent = guessChar[key];

    const matchClass = getMatchClass(guessChar[key], secret[key], key);
const back = document.createElement('div');
back.className = `flip-back ${matchClass}`;
back.textContent = guessChar[key];
cell.classList.add(matchClass); // <-- Add this line!

    inner.appendChild(front);
    inner.appendChild(back);
    cell.appendChild(inner);
    row.appendChild(cell);

    // Trigger the flip animation after a short delay
    requestAnimationFrame(() => {
      setTimeout(() => cell.classList.add('flipped'), 50);
    });
  });

  tbody.appendChild(row);
}


// Helper function for assigning match class
function getMatchClass(guessValue, secretValue, key) {
  if (guessValue === secretValue) return 'correct';
  if (
    (key === 'season' && Math.abs(guessValue - secretValue) <= 5) ||
    (key === 'difficulty' && Math.abs(guessValue - secretValue) <= 0.5) ||
    (key === 'skins' && Math.abs(guessValue - secretValue) <= 1)
  ) {
    return 'near';
  }
  return 'wrong';
}


/**
 * Populates the autocomplete dropdown with all characters,
 * excluding those already guessed.
 */
function showAllChars() {
  if (!autocompleteList || !tbody) return;
  autocompleteList.innerHTML = '';
  const alreadyGuessedNames = Array.from(tbody.querySelectorAll('tr')).map(
    row => row.getAttribute('data-char-name')
  );
  characters.forEach(char => {
    const alreadyGuessed = Array.from(tbody.querySelectorAll('tr')).some(row =>
      row.getAttribute('data-char-name') === char.name.toLowerCase()
    );

    const item = document.createElement('div');
    item.classList.add('autocomplete-item');
    item.innerHTML = `<img src="${escapeHTML(char.avatar)}" alt="${escapeHTML(char.name)}" /><span>${escapeHTML(char.name)}</span>`;

    if (alreadyGuessed) {
      item.classList.add('autocomplete-disabled');
      item.title = 'Already guessed';
      // Do NOT add click listener
    } else {
      item.addEventListener('click', () => {
        guessInput.value = char.name;
        hideDropdown();
        // Immediately make the guess when clicking an item
        makeGuess();
      });
    }

    autocompleteList.appendChild(item);
  });

  

  // Highlight the first item automatically
  highlightedIndex = characters.length > 0 ? 0 : -1;
  updateHighlight(Array.from(autocompleteList.children));
  showDropdown();
}




function makeGuess(recursive) {
  hideDropdown();


  if (!guessInput || !tbody || !message || !submitButton || !retryButton) return;


  // If game is over, show the answer and do nothing else
  if (guessInput.disabled || (isDailyMode && dailyCompleted)) {
    message.textContent = `The character was ${secret.name}.`;
    showPortraitImage(secret); // Show portrait on repeated guess after game end
    return;
  }


   const guessName = guessInput.value.trim();
    const items = Array.from(autocompleteList.children);
    if (!guessName) {
  message.textContent = 'Please select a character.';
  return;
}
    const guessChar = characters.find(c => c.name.toLowerCase() === guessName.toLowerCase());
   if (!guessChar) {
  message.textContent = 'Character not found. Please select from the list.';
  return;
}


    // Prevent duplicate guesses always (not just on initial call)
    const rows = tbody.querySelectorAll('tr');
    for (const row of rows) {
      if (row.getAttribute('data-char-name') === guessChar.name.toLowerCase()) {
        message.textContent = 'You already guessed that character.';
        guessInput.value = '';
        return;
      }
    }




  renderGuessRow(guessChar, secret, tbody);
  attempts++;


  let completed = false;
  let resultMsg = '';
  if (guessChar.name.toLowerCase() === secret.name.toLowerCase()) {
    resultMsg = `Escaped! The character was ${secret.name}.`;
    guessInput.disabled = true;
    wins++;
    localStorage.setItem('idvWins', wins);
    updateScoreDisplay();
    submitButton.style.display = 'none';
    // Hide retry button in daily mode, show in normal mode
    retryButton.style.display = isDailyMode ? 'none' : 'inline-block';
    completed = true;
    showPortraitImage(secret); // Show portrait on win
  } else if (attempts >= maxAttempts) {
    resultMsg = `Eliminated. The character was ${secret.name}.`;
    guessInput.disabled = true;
    submitButton.style.display = 'none';
    retryButton.style.display = isDailyMode ? 'none' : 'inline-block';
    completed = true;
    showPortraitImage(secret); // Show portrait on lose
  } else {
    resultMsg = `${maxAttempts - attempts} attempts remaining.`;
  }
  message.textContent = resultMsg;


  guessInput.value = '';


  // Save daily progress if in daily mode
  if (isDailyMode) {
    let progress = loadDailyProgress() || { guesses: [], completed: false, answer: secret.name };
    progress.guesses.push(guessChar.name);
    if (completed) progress.completed = true;
    saveDailyProgress(progress);
    dailyCompleted = progress.completed;
  }
}


if (submitButton) {
  submitButton.addEventListener('click', makeGuess);
}




// Daily mode: check if already completed
let dailyCompleted = false;
function renderDailyProgress() {
  if (!tbody || !guessInput || !submitButton || !retryButton || !message) return;
  const progress = loadDailyProgress();
  if (progress) {
    dailyCompleted = progress.completed;
    // Show previous guesses
    tbody.innerHTML = '';
    progress.guesses.forEach(guessName => {
      const guessChar = characters.find(c => c.name.toLowerCase() === guessName.toLowerCase());
      if (!guessChar) return;
      renderGuessRow(guessChar, secret, tbody);
    });
    // Show result message
    if (dailyCompleted) {
      guessInput.disabled = true;
      submitButton.style.display = 'none';
      retryButton.style.display = 'none'; // Always hide retry button in daily mode
      message.textContent = (progress.guesses.includes(secret.name))
        ? `Escaped! The character was ${secret.name}.`
        : `Eliminated. The character was ${secret.name}.`;
      showPortraitImage(secret); // Show portrait if daily completed
    }
  }
}


// On load, if daily mode, render progress and disable guessing if completed
if (isDailyMode) {
  renderDailyProgress();
  if (retryButton) retryButton.style.display = 'none'; // Hide retry button in daily mode on load
}


// Make notes toggle open by default
const collapsible = document.querySelector('.collapsible');
if (collapsible) {
  const content = collapsible.nextElementSibling;
  collapsible.classList.add('active');
  if (content) content.style.display = 'block';


  collapsible.addEventListener('click', () => {
    collapsible.classList.toggle('active');
    if (content) {
      if (content.style.display === 'block') {
        content.style.display = 'none';
      } else {
        content.style.display = 'block';
      }
    }
  });
}
function resetGame() {
  attempts = 0;
  if (guessInput) {
    guessInput.disabled = false;
    guessInput.value = '';
  }
  if (submitButton) submitButton.style.display = 'inline-block';
  if (retryButton) retryButton.style.display = isDailyMode ? 'none' : 'inline-block';
  if (message) message.textContent = '';
  if (tbody) tbody.innerHTML = '';
  // Hide the fullBodyImage at the start of a new game
  const fullBodyImage = document.getElementById("fullBodyImage");
  if (fullBodyImage) {
    fullBodyImage.style.display = "none";
    fullBodyImage.src = ""; // Optionally clear src to avoid flashing old image
    fullBodyImage.alt = "";
  }
  selectCharacter();
  if (isDailyMode) {
    renderDailyProgress();
    if (retryButton) retryButton.style.display = 'none';
  }
  showAllChars();
}
if (retryButton) {
  retryButton.addEventListener('click', resetGame);
}

// Update input event to reset highlight
if (guessInput) {
  guessInput.addEventListener('input', () => {
    if (isDailyMode && dailyCompleted) return; // Prevent input if daily completed
    const val = guessInput.value.toLowerCase();
    if (!autocompleteList) return;
    if (!val) {
      showAllChars();
      return;
    }
    autocompleteList.innerHTML = '';
    // Get already guessed names
    const alreadyGuessedNames = tbody ? Array.from(tbody.querySelectorAll('tr')).map(row => row.cells[1]?.textContent?.toLowerCase()) : [];
    const filtered = characters.filter(c => c.name.toLowerCase().includes(val));
    filtered.forEach(char => {
      const alreadyGuessed = Array.from(tbody.querySelectorAll('tr')).some(row =>
        row.cells[1].textContent.toLowerCase() === char.name.toLowerCase()
      );
      const item = document.createElement('div');
      item.classList.add('autocomplete-item');
      item.innerHTML = `<img src="${escapeHTML(char.avatar)}" alt="${escapeHTML(char.name)}" /><span>${escapeHTML(char.name)}</span>`;
      if (alreadyGuessed) {
        item.classList.add('autocomplete-disabled');
        item.title = 'Already guessed';
        item.addEventListener('click', () => {
          message.textContent = 'You already guessed that character.';
          guessInput.value = '';
          hideDropdown();
        });
      } else {
        item.addEventListener('click', () => {
          guessInput.value = char.name;
          hideDropdown();
          guessInput.focus();
        });
      }
      autocompleteList.appendChild(item);
    });


    // Highlight the first non-disabled item automatically
    const items = Array.from(autocompleteList.children);
    highlightedIndex = items.findIndex(item => !item.classList.contains('autocomplete-disabled'));
    updateHighlight(items);
    showDropdown();
  });

  // Show all characters when input is focused or clicked and empty
  guessInput.addEventListener('focus', () => {
    if (isDailyMode && dailyCompleted) return;
    if (!guessInput.value) showAllChars();
  });

  guessInput.addEventListener('click', () => {
    if (isDailyMode && dailyCompleted) return;
    if (!guessInput.value) showAllChars();
  });
}

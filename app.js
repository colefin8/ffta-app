// Load JSON data files
const gameData = {};

async function loadGameData() {
  try {
    const [abilitiesRes, equipmentRes, jobsRes, weaponsRes] = await Promise.all([
      fetch('./data/abilities.json'),
      fetch('./data/equipment.json'),
      fetch('./data/jobs.json'),
      fetch('./data/weapons.json')
    ]);

    gameData.abilities = await abilitiesRes.json();
    gameData.equipment = await equipmentRes.json();
    gameData.jobs = await jobsRes.json();
    gameData.weapons = await weaponsRes.json();

    console.log('Game data loaded successfully!');
    document.body.appendChild(document.createElement('pre')).textContent = JSON.stringify(gameData, null, 2);
  } catch (error) {
    console.error('Failed to load game data:', error);
  }
}

loadGameData();

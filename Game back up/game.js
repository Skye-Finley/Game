document.addEventListener("DOMContentLoaded", function(){
    showStats();
  });
  
  let player = {
    stats : {
      "level" : 1,
      "experience" : 0,
      "maxHp" : 100,
      "currentHp" : 100,
      "maxEnergy" : 100,
      "currentEnergy" : 100,
      "maxMana" : 100,
      "currentMana" : 100,
      "gold" : 100,
      "diamonds" : 0,
    },
    skills : {
      fighting : {
        "lvl" : 1,
        "exp" : 0,
      },
      spellcasting : {
        "lvl" : 1,
        "exp" : 0,
      },
      archery : {
        "lvl" : 1,
        "exp" : 0,
      },
      fishing : {
        "lvl" : 1,
        "exp" : 0,
      },
      mining : {
        "lvl" : 1,
        "exp" : 0,
      },
      crafting : {
        "lvl" : 1,
        "exp" : 0,
      },
    }
  }
  
  const skillExp = {
    1 : 0,
    2 : 500,
    3 : 1100,
    4 : 2000,
    5 : 3500,
    6 : 5500,
    7 : 8500,
    8 : 13000,
    9 : 19000,
    10 : 27000,
    11 : 37000,
  }
  
  let minedGold = 0;
  let info = "";
  
  function main(){
    mine();
    showStats();
  }
  
  // REFILL PLAYERS ENERGY
  function addEnergy(){
    player.stats.currentEnergy = 100;
    player.stats.gold -= 100;
    document.getElementById('info').innerHTML = "";
    showStats();
  }
  
  // MINE ACTION
  function mine(){
    if(player.stats.currentEnergy >= 10){
      info = "";
      minedGold = Math.floor((Math.random()*100)+(player.skills.mining.lvl * 2));
      player.stats.gold += minedGold;
      player.stats.currentEnergy -= 10;
      calculateExp(player.skills.mining, minedGold);
      mineInfo();
    }
    else info = "Not enough energy";
    mineInfo();
  }
  
  // DISPLAY MINING COMUNICATES
  function mineInfo(){
    document.getElementById('current-gold').innerHTML = minedGold;
    document.getElementById('info').innerHTML = info;
  }
  
  // ADD EXP AND CHECK FOR LVL UP
  function calculateExp(skillName, expGained){
    skillName.exp += expGained;
    var a;
    for(a in skillExp){
     a = parseInt(a);
     if(skillExp[a] <= skillName.exp){
        skillName.lvl = a;
      }
    }
  }
  
  // DISPLAY UPDATED STATS
function mineInfo(){
  document.getElementById('current-gold').innerHTML = minedGold;
  document.getElementById('info').innerHTML = info;
}

// ADD EXP AND CHECK FOR LVL UP
function calculateExp(skillName, expGained){
  skillName.exp += expGained;
  var a;
  for(a in skillExp){
   a = parseInt(a);
   if(skillExp[a] <= skillName.exp){
      skillName.lvl = a;
    }
  }
}

// DISPLAY UPDATED STATS
function showStats(){
  document.getElementById('level').innerHTML = player.stats.level;
  document.getElementById('totalExp').innerHTML = player.stats.experience;
  document.getElementById('currentHp').innerHTML = player.stats.currentHp;
  document.getElementById('maxHp').innerHTML = player.stats.maxHp;
  document.getElementById('currentEnergy').innerHTML = player.stats.currentEnergy;
  document.getElementById('maxEnergy').innerHTML = player.stats.maxEnergy;
  document.getElementById('gold').innerHTML = player.stats.gold;
  document.getElementById('diamonds').innerHTML = player.stats.diamonds;
  document.getElementById('fighting').innerHTML = player.skills.fighting.lvl;
  document.getElementById('spellcasting').innerHTML = player.skills.spellcasting.lvl;
  document.getElementById('archery').innerHTML = player.skills.archery.lvl;
  document.getElementById('fishing').innerHTML = player.skills.fishing.lvl;
  document.getElementById('mining').innerHTML = player.skills.mining.lvl;
  document.getElementById('crafting').innerHTML = player.skills.crafting.lvl;
}
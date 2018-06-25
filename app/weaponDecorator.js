const $ = require('jquery');
const weapon = require('weapon.js');
const weaponDatabase = require('weaponDatabase.js');

function storeWeaponNames() {
  $('[drag-channel=Kinetic],[drag-channel=Energy],[drag-channel=Power]').not('[data-fate-weapon-name]').each(function(index,element) {
    $(this).attr('data-fate-weapon-name', $(this).attr('title').split("\n")[0]);
  });
}

function storeShaderNames() {
  $('[drag-channel=Shaders]').not('[data-fate-shader-name]').each(function(index,element) {
    $(this).attr('data-fate-shader-name', $(this).attr('title').split("\n")[0]);
  });
}

function storeWeaponRarity() {
  $('[data-fate-weapon-name]').not('data-fate-weapon-rarity').each(function(index,element) {
    const weaponName = $(this).attr('data-fate-weapon-name');
    if (weaponDatabase.contains(weaponName)) {
      $(this).attr('data-fate-weapon-rarity', weaponDatabase.get(weaponName).rarity);
    }
  });
}

function storeWeaponType() {
  $('[data-fate-weapon-name]').not('data-fate-weapon-type').each(function(index,element) {
    const weaponName = $(this).attr('data-fate-weapon-name');
    if (weaponDatabase.contains(weaponName)) {
      $(this).attr('data-fate-weapon-type', weaponDatabase.get(weaponName).type);
    }
  });
}

function storeModStatus() {
  $('[drag-channel=Kinetic],[drag-channel=Energy],[drag-channel=Power]').each(function(index,element) {
    $(this).attr('data-fate-is-modded', $(this).children('.item-img.complete').length > 0);
  });
}

function storeBaseLightLevel() {
  $('[drag-channel=Kinetic],[drag-channel=Energy],[drag-channel=Power]').not('[data-fate-base-light]').each(function(index,element) {
     const itemStatValue = parseInt($(this).children('.item-stat').text().match(/(\d+)/));
     const baseLightLevel = ($(this).attr('data-fate-is-modded')==='true') ? itemStatValue-5 : itemStatValue;
     $(this).attr('data-fate-base-light', baseLightLevel);
  });
}

function storeRegistrationStatus() {
  $('[data-fate-weapon-name]').each(function(index,element) {
    const weaponName = $(this).attr('data-fate-weapon-name');
    if (weaponDatabase.contains(weaponName)) {
      $(this).attr('data-fate-weapon-registered', true);
    }
  });
}

function storeJunkStatus() {
  $('[data-fate-weapon-registered]').each(function(index,element) {
    const weaponName = $(this).attr('data-fate-weapon-name');
    if (weaponDatabase.contains(weaponName)) {
      if (weaponDatabase.get(weaponName).isJunk()) {
        $(this).attr('data-fate-weapon-junk', true);
      }
    }
  });
}

function storeJudgementStatus() {
  $('[data-fate-weapon-registered]').each(function(index,element) {
    const w = weaponDatabase.get($(this).attr('data-fate-weapon-name'));
    if (w.pvpUtility === weapon.Utility.YES) {
      $(this).attr('data-fate-weapon-pvp', true);
    } else {
      $(this).removeAttr('data-fate-weapon-pvp');
    }
    if (w.pveUtility === weapon.Utility.YES) {
      $(this).attr('data-fate-weapon-pve', true);
    } else {
      $(this).removeAttr('data-fate-weapon-pve');
    }
  });
}

function storeSerialNumber() {
  $('[data-fate-weapon-registered]').not('[data-fate-serial]').each(function(index,element) {
    $(this).attr('data-fate-serial', $(this).attr('id').split("-")[0])
  });
}

function storeComments() {
  $('[data-fate-weapon-registered]').each(function(index,element) {
    const w = weaponDatabase.get($(this).attr('data-fate-weapon-name'));
    $(this).attr('data-fate-comment', w.comments);
  });
}

fateBus.subscribe(module, 'fate.refresh', function() {
  storeWeaponNames();
  storeShaderNames();
  storeWeaponRarity();
  storeWeaponType();
  storeModStatus();
  storeBaseLightLevel();
  storeRegistrationStatus();
  storeJudgementStatus();
  storeJunkStatus();
  storeSerialNumber();
  storeComments();
});

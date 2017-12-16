describe('weaponDatabase.js', function() {

  const weapon = require('weapon.js');
  const weaponDatabase = require('weaponDatabase.js');
  const postal = require('postal');

  // A weapon of each type and one without a comment (only optional data)
  const TEST_TSV_WEAPON_DATA = `Sweet Business	Exotic	Kinetic	Auto Rifle	Exotic	Y	Y	Y	Y	Pre-fire in PvP. Pair with the Rig in PvE and wreck
Hardlight	Exotic	Energy	Auto Rifle	Exotic	N	N	N	N	`;

  beforeEach(function() {
    postal.publish({topic:'fate.weaponDataFetched',data:TEST_TSV_WEAPON_DATA})
  });

  describe('in response to fate.weaponDataFetched', function() {

    describe('#contains', function() {
      it('should be true if the weapon is in the database', function() {
        expect(weaponDatabase.contains('Hardlight')).toBe(true);
      });
      it('should be false if the weapon is not in the database', function() {
        expect(weaponDatabase.contains('_')).toBe(false);
      });
      it('should not contain weapons that were changed', function() {
        postal.publish({topic:'fate.weaponDataFetched',data:TEST_TSV_WEAPON_DATA.split("\n")[0]});
        expect(weaponDatabase.contains('Hardlight')).toBe(false);
      });
    });

  });

  describe('#get', function() {

    describe('when the weapon is found', function() {
      it('should return the weapon', function() {
        const sweetBusiness = weaponDatabase.get('Sweet Business');
        const hardLight = weaponDatabase.get('Hardlight');

        expect(sweetBusiness).toEqual(jasmine.any(weapon.Weapon));
        expect(sweetBusiness.name).toEqual('Sweet Business');
        expect(sweetBusiness.rarity).toEqual('exotic');
        expect(sweetBusiness.slot).toEqual('Kinetic');
        expect(sweetBusiness.type).toEqual('Auto Rifle');
        expect(sweetBusiness.subtype).toEqual('Exotic');
        expect(sweetBusiness.isFavourite).toBe(true);
        expect(sweetBusiness.pveUseful).toBe(true);
        expect(sweetBusiness.pvpUseful).toBe(true);
        expect(sweetBusiness.raidUseful ).toBe(true);
        expect(sweetBusiness.comments).toEqual('Pre-fire in PvP. Pair with the Rig in PvE and wreck');

        expect(hardLight).toEqual(jasmine.any(weapon.Weapon));
        expect(hardLight.name).toEqual('Hardlight');
        expect(hardLight.rarity).toEqual('exotic');
        expect(hardLight.slot).toEqual('Energy');
        expect(hardLight.type).toEqual('Auto Rifle');
        expect(hardLight.subtype).toEqual('Exotic');
        expect(hardLight.isFavourite).toBe(false);
        expect(hardLight.pveUseful).toBe(false);
        expect(hardLight.pvpUseful).toBe(false);
        expect(hardLight.raidUseful ).toBe(false);
        expect(hardLight.comments).toEqual('');
      });
    });

    describe('when the weapon is not found', function() {
      it('should be null', function() {
        expect(weaponDatabase.get('_')).toBeUndefined();
      });
    });

  });

});
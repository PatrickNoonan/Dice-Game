function rollTheDice(x) {
    let min;
    let max;
    let rollResult;

    switch (x) {
        case 4:
            min = 13;
            max = 17;
            rollResult = Math.floor(Math.random() * (max - min)) + min;
            //energy reduces by 4 from 30
            break;
        case 6:
            min = 12;
            max = 20
            rollResult = Math.floor(Math.random() * Math.floor(20));
            break;
        case 8:
            min = 11;
            max = 25;
            rollResult = Math.floor(Math.random() * Math.floor(35));
            break;
        case 10:
            min = 10;
            max = 45;
            rollResult = Math.floor(Math.random() * Math.floor(45));
            break;
        case 12:
            min = 8;
            max = 55;
            rollResult = Math.floor(Math.random() * Math.floor(55));
            break;
        case 20:
            min = 0;
            max = 75;
            rollResult = Math.floor(Math.random() * Math.floor(75));
            // CHANCE OF SELF HARM
            break;
    }


    return rollResult;

}

function playerInformation() {
    let playerOneStartHP = 100 + chooseArmor();
    let playerTwoStartHP = 100 + chooseArmor();
    let playerOneAD = chooseWeapon();
    let playerTwoAD = chooseWeapon();


    function chooseArmor(x) {
        let rolledArmorResult = rollTheDice(x);
        let armorResult;

        if (rolledArmorResult <= 10) {
            document.getElementById("displayArmorValue").innerHTML = "Your armor is cloth, you start with 0 hp advantage";
            armorResult = 0;
        } else if (rolledArmorResult > 10 && rolledArmorResult <= 25) {
            document.getElementById("displayArmorValue").innerHTML = "Your armor is leather, you start with 10 hp advantage";
            armorResult = 10;
        } else if (rolledArmorResult > 25 && rolledArmorResult <= 50) {
            document.getElementById("displayArmorValue").innerHTML = "Your armor is mail, you start with 20 hp advantage";
            armorResult = 20;
        } else if (rolledArmorResult > 50) {
            document.getElementById("displayArmorValue").innerHTML = "Your armor is plate, you start with 30 hp advantage";
            armorResult = 30;
        } else {
            armorResult = "Something went wrong"
        }

        return armorResult;
    }


    function chooseWeapon(x) {
        let rolledWeaponResult = rollTheDice(x);
        let weaponResult;

        if (rolledWeaponResult <= 10) {
            document.getElementById("displayWeaponValue").innerHTML = "Your weapon is a stick, you start with 0 attack power advantage";
            weaponResult = 0;
        } else if (rolledWeaponResult > 10 && rolledWeaponResult <= 25) {
            document.getElementById("displayWeaponValue").innerHTML = "Your weapon is a knife, you start with 10 attack power advantage";
            weaponResult = 10;
        } else if (rolledWeaponResult > 25 && rolledWeaponResult <= 50) {
            document.getElementById("displayWeaponValue").innerHTML = "Your weapon is sword, you start with 20 attack power advantage";
            weaponResult = 20;
        } else if (rolledWeaponResult > 50) {
            document.getElementById("displayWeaponValue").innerHTML = "Your weapon is excalibur, you start with 30 attack power advantage";
            weaponResult = 30;
        } else {
            armorResult = "Something went wrong"
        }

        return weaponResult;
    }

    function displayHealthBar() {

    }

}

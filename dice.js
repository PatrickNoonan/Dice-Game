function rollTheDice(diceSides) {
    let min;
    let max;
    let rollResult;

    switch (diceSides) {
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

function hpInformation(player, armorResult) {

    if (player == "P1") {
        let playerOneStartHP = 100 + armorResult;
        let playerOneCurrentHP = playerOneStartHP;
        let playerOnePercentHP;
        if (playerOneCurrentHP < 100) {
            playerOnePercentHP = (playerOneCurrentHP / playerOneStartHP) * 100;
            document.getElementById("p1CurrentPercent").innerHTML = playerOnePercentHP + "%";
        } else {
            playerOnePercentHP = 100;
            //100 + %
            document.getElementById("p1CurrentPercent").innerHTML = playerOnePercentHP + "%";
        }
        document.getElementById("p1CurrentHP").innerHTML = playerOneCurrentHP + "/" + playerOneStartHP;
    }

    if (player == "P2") {
        let playerTwoStartHP = 100 + armorResult;
        let playerTwoCurrentHP = playerTwoStartHP;
        let playerTwoPercentHP;
        if (playerTwoCurrentHP < 100) {
            playerTwoPercentHP = (playerTwoCurrentHP / playerTwoStartHP) * 100;
            document.getElementById("p2CurrentPercent").innerHTML = playerTwoPercentHP + "%";
        } else {
            playerTwoPercentHP = 100;
            document.getElementById("p2CurrentPercent").innerHTML = playerTwoPercentHP + "%";
        }
        document.getElementById("p2CurrentHP").innerHTML = playerTwoCurrentHP + "/" + playerTwoStartHP;
    }

}

function atkInformation(weapon) {
    let weaponResultP1;
    let weaponResultP2;
}



function chooseArmor(player, diceSides) {
    let rolledArmorResult = rollTheDice(diceSides);
    let armorResultP1;
    let armorResultP2;

    if (player == "P1") {
        if (rolledArmorResult <= 10) {
            document.getElementById("displayArmorValueP1").innerHTML = "Your armor is cloth, you start with 0 hp advantage";
            armorResultP1 = 0;
        } else if (rolledArmorResult > 10 && rolledArmorResult <= 25) {
            document.getElementById("displayArmorValueP1").innerHTML = "Your armor is leather, you start with 10 hp advantage";
            armorResultP1 = 10;
        } else if (rolledArmorResult > 25 && rolledArmorResult <= 50) {
            document.getElementById("displayArmorValueP1").innerHTML = "Your armor is mail, you start with 20 hp advantage";
            armorResultP1 = 20;
        } else if (rolledArmorResult > 50) {
            document.getElementById("displayArmorValueP1").innerHTML = "Your armor is plate, you start with 30 hp advantage";
            armorResultP1 = 30;
        } else {
            armorResultP1 = "Something went wrong"
        }
    } else if (player == "P2") {
        if (rolledArmorResult <= 10) {
            document.getElementById("displayArmorValueP2").innerHTML = "Your armor is cloth, you start with 0 hp advantage";
            armorResultP2 = 0;
        } else if (rolledArmorResult > 10 && rolledArmorResult <= 25) {
            document.getElementById("displayArmorValueP2").innerHTML = "Your armor is leather, you start with 10 hp advantage";
            armorResultP2 = 10;
        } else if (rolledArmorResult > 25 && rolledArmorResult <= 50) {
            document.getElementById("displayArmorValueP2").innerHTML = "Your armor is mail, you start with 20 hp advantage";
            armorResultP2 = 20;
        } else if (rolledArmorResult > 50) {
            document.getElementById("displayArmorValueP2").innerHTML = "Your armor is plate, you start with 30 hp advantage";
            armorResultP2 = 30;
        } else {
            armorResultP2 = "Something went wrong"
        }
    }

    if (player == "P1") {
        return hpInformation("P1", armorResultP1);
    } else if (player == "P2") {
        return hpInformation("P2", armorResultP2);
    }
}


function chooseWeapon(player, diceSides) {
    let rolledWeaponResult = rollTheDice(diceSides);

    if (player == "P1") {
        if (rolledWeaponResult <= 10) {
            document.getElementById("displayWeaponValueP1").innerHTML = "Your weapon is a stick, you start with 0 attack power advantage";
            weaponResultP1 = 0;
        } else if (rolledWeaponResult > 10 && rolledWeaponResult <= 25) {
            document.getElementById("displayWeaponValueP1").innerHTML = "Your weapon is a knife, you start with 10 attack power advantage";
            weaponResultP1 = 10;
        } else if (rolledWeaponResult > 25 && rolledWeaponResult <= 50) {
            document.getElementById("displayWeaponValueP1").innerHTML = "Your weapon is sword, you start with 20 attack power advantage";
            weaponResultP1 = 20;
        } else if (rolledWeaponResult > 50) {
            document.getElementById("displayWeaponValueP1").innerHTML = "Your weapon is excalibur, you start with 30 attack power advantage";
            weaponResultP1 = 30;
        } else {
            armorResult = "Something went wrong"
        }
    } else if (player == "P2") {
        if (rolledWeaponResult <= 10) {
            document.getElementById("displayWeaponValueP2").innerHTML = "Your weapon is a stick, you start with 0 attack power advantage";
            weaponResultP2 = 0;
        } else if (rolledWeaponResult > 10 && rolledWeaponResult <= 25) {
            document.getElementById("displayWeaponValueP2").innerHTML = "Your weapon is a knife, you start with 10 attack power advantage";
            weaponResultP2 = 10;
        } else if (rolledWeaponResult > 25 && rolledWeaponResult <= 50) {
            document.getElementById("displayWeaponValueP2").innerHTML = "Your weapon is sword, you start with 20 attack power advantage";
            weaponResultP2 = 20;
        } else if (rolledWeaponResult > 50) {
            document.getElementById("displayWeaponValueP2").innerHTML = "Your weapon is excalibur, you start with 30 attack power advantage";
            weaponResultP2 = 30;
        } else {
            armorResult = "Something went wrong"
        }
    }
}




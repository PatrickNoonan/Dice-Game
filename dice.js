let playerOneObject = {
    startHP: 100,
    HP: 100,
    percentHP: 100,
    Weapon: "tbd",
    Armor: "tbd",
    winCount: 0,
    turnCount: true
};

let playerTwoObject = {
    startHP: 100,
    HP: 100,
    percentHP: 100,
    Weapon: "tbd",
    Armor: "tbd",
    winCount: 0,
    turnCount: false
};

function rollTheDice(diceSides) {
    let min;
    let max;
    let rollResult;

    switch (diceSides) {
        case 4:
            min = 14;
            max = 17;
            rollResult = Math.floor(Math.random() * (max - min)) + min;
            //energy reduces by 4 from 30
            break;
        case 6:
            min = 12;
            max = 22
            rollResult = Math.floor(Math.random() * (max - min)) + min;
            break;
        case 8:
            min = 11;
            max = 26;
            rollResult = Math.floor(Math.random() * (max - min)) + min;
            break;
        case 10:
            min = 10;
            max = 29;
            rollResult = Math.floor(Math.random() * (max - min)) + min;
            break;
        case 12:
            min = 6;
            max = 32;
            rollResult = Math.floor(Math.random() * (max - min)) + min;
            break;
        case 20:
            min = 0;
            max = 36;
            rollResult = Math.floor(Math.random() * (max - min)) + min;
            // CHANCE OF SELF HARM
            break;
        case 25:
            min = -20;
            max = -30;
            rollResult = Math.floor(Math.random() * (max - min)) + min;
    }

    return rollResult;

}

function hpInformation(player, armorResult) {

    if (player == "P1") {
        playerOneObject.startHP = 100 + armorResult;
        let playerOneCurrentHP = playerOneObject.startHP;
        if (playerOneCurrentHP < 100) {
            playerOneObject.percentHP = (playerOneCurrentHP / playerOneObject.startHP) * 100;
            document.getElementById("p1CurrentPercent").innerHTML = playerOneObject.percentHP + "%";
        } else {
            playerOneObject.percentHP = 100;
            //100 + %
            document.getElementById("p1CurrentPercent").innerHTML = playerOneObject.percentHP + "%";
        }
        document.getElementById("p1CurrentHP").innerHTML = playerOneCurrentHP + "/" + playerOneObject.startHP;
        playerOneObject.HP = playerOneObject.startHP
        return playerOneObject.startHP;
    }

    if (player == "P2") {
        playerTwoObject.startHP = 100 + armorResult;
        let playerTwoCurrentHP = playerTwoObject.startHP;
        if (playerTwoCurrentHP < 100) {
            playerTwoObject.percentHP = (playerTwoCurrentHP / playerTwoObject.startHP) * 100;
            document.getElementById("p2CurrentPercent").innerHTML = playerTwoObject.percentHP + "%";
        } else {
            playerTwoObject.percentHP = 100;
            document.getElementById("p2CurrentPercent").innerHTML = playerTwoObject.percentHP + "%";
        }
        document.getElementById("p2CurrentHP").innerHTML = playerTwoCurrentHP + "/" + playerTwoObject.startHP;
        playerTwoObject.HP = playerTwoObject.startHP;
        return playerTwoObject.startHP;
    }

}

function chooseArmor(player, diceSides) {
    let rolledArmorResult = rollTheDice(diceSides);

    if (player == "P1") {
        if (rolledArmorResult <= 10) {
            document.getElementById("displayArmorValueP1").innerHTML = "Your armor is cloth, you start with 0 hp advantage";
            playerOneObject.Armor = 0;
        } else if (rolledArmorResult > 10 && rolledArmorResult <= 20) {
            document.getElementById("displayArmorValueP1").innerHTML = "Your armor is leather, you start with 10 hp advantage";
            playerOneObject.Armor = 10;
        } else if (rolledArmorResult > 20 && rolledArmorResult <= 30) {
            document.getElementById("displayArmorValueP1").innerHTML = "Your armor is mail, you start with 20 hp advantage";
            playerOneObject.Armor = 20;
        } else if (rolledArmorResult > 30) {
            document.getElementById("displayArmorValueP1").innerHTML = "Your armor is plate, you start with 30 hp advantage";
            playerOneObject.Armor = 30;
        } else {
            playerOneObject.Armor = "Something went wrong"
        }
    } else if (player == "P2") {
        if (rolledArmorResult <= 10) {
            document.getElementById("displayArmorValueP2").innerHTML = "Your armor is cloth, you start with 0 hp advantage";
            playerTwoObject.Armor = 0;
        } else if (rolledArmorResult > 10 && rolledArmorResult <= 20) {
            document.getElementById("displayArmorValueP2").innerHTML = "Your armor is leather, you start with 10 hp advantage";
            playerTwoObject.Armor = 10;
        } else if (rolledArmorResult > 20 && rolledArmorResult <= 30) {
            document.getElementById("displayArmorValueP2").innerHTML = "Your armor is mail, you start with 20 hp advantage";
            playerTwoObject.Armor = 20;
        } else if (rolledArmorResult > 30) {
            document.getElementById("displayArmorValueP2").innerHTML = "Your armor is plate, you start with 30 hp advantage";
            playerTwoObject.Armor = 30;
        } else {
            playerTwoObject.Armor = "Something went wrong"
        }
    }

    if (player == "P1") {
        return hpInformation("P1", playerOneObject.Armor);
    } else if (player == "P2") {
        return hpInformation("P2", playerTwoObject.Armor);
    }
}


function chooseWeapon(player, diceSides) {
    let rolledWeaponResult = rollTheDice(diceSides);

    if (player == "P1") {
        if (rolledWeaponResult <= 10) {
            document.getElementById("displayWeaponValueP1").innerHTML = "Your weapon is a stick, you start with 0 attack power advantage";
            document.getElementById("p1StartAD").innerHTML = "Stick - 0 AD";
            playerOneObject.Weapon = 0;
        } else if (rolledWeaponResult > 10 && rolledWeaponResult <= 20) {
            document.getElementById("displayWeaponValueP1").innerHTML = "Your weapon is a knife, you start with 10 attack power advantage";
            document.getElementById("p1StartAD").innerHTML = "Knife - 10 AD";
            playerOneObject.Weapon = 10;
        } else if (rolledWeaponResult > 20 && rolledWeaponResult <= 30) {
            document.getElementById("displayWeaponValueP1").innerHTML = "Your weapon is sword, you start with 20 attack power advantage";
            document.getElementById("p1StartAD").innerHTML = "Sword - 20 AD";
            playerOneObject.Weapon = 20;
        } else if (rolledWeaponResult > 30) {
            document.getElementById("displayWeaponValueP1").innerHTML = "Your weapon is excalibur, you start with 30 attack power advantage";
            document.getElementById("p1StartAD").innerHTML = "Excalibur - 30 AD";
            playerOneObject.Weapon = 30;
        } else {
            playerOneObject.Weapon = "Something went wrong"
        }
        return playerOneObject.Weapon;
    } else if (player == "P2") {
        if (rolledWeaponResult <= 10) {
            document.getElementById("displayWeaponValueP2").innerHTML = "Your weapon is a stick, you start with 0 attack power advantage";
            document.getElementById("p2StartAD").innerHTML = "Stick - 0 AD";
            playerTwoObject.Weapon = 0;
        } else if (rolledWeaponResult > 10 && rolledWeaponResult <= 20) {
            document.getElementById("displayWeaponValueP2").innerHTML = "Your weapon is a knife, you start with 10 attack power advantage";
            document.getElementById("p2StartAD").innerHTML = "Knife - 10 AD";
            playerTwoObject.Weapon = 10;
        } else if (rolledWeaponResult > 20 && rolledWeaponResult <= 30) {
            document.getElementById("displayWeaponValueP2").innerHTML = "Your weapon is sword, you start with 20 attack power advantage";
            document.getElementById("p2StartAD").innerHTML = "Sword - 20 AD";
            playerTwoObject.Weapon = 20;
        } else if (rolledWeaponResult > 30) {
            document.getElementById("displayWeaponValueP2").innerHTML = "Your weapon is excalibur, you start with 30 attack power advantage";
            document.getElementById("p2StartAD").innerHTML = "Excalibur - 30 AD";
            playerTwoObject.Weapon = 30;
        } else {
            playerTwoObject.Weapon = "Something went wrong"
        }
        return playerTwoObject.Weapon;
    }
}

function atkFunction(player, diceSides) {
    let atkDamage;

    if (playerOneObject.Weapon !== "tbd" && playerTwoObject.Weapon !== "tbd" && playerOneObject.Armor !== "tbd" && playerTwoObject.Armor !== "tbd") {
        if (player == "P1" && playerOneObject.turnCount) {
            atkDamage = playerOneObject.Weapon + rollTheDice(diceSides);
            if (atkDamage < 0) {
                document.getElementById("displayAttackP1").innerHTML = "Fighter 1 Healed for " + (atkDamage - (atkDamage * 2)) + " HP";
                playerOneObject.HP -= atkDamage;
                document.getElementById("p1CurrentHP").innerHTML = playerOneObject.HP + "/" + playerOneObject.startHP;
                playerOneObject.percentHP = Math.floor((playerOneObject.HP / playerOneObject.startHP) * 100);
                document.getElementById("p1CurrentHP").style.width = playerOneObject.percentHP + "%";
                document.getElementById("p1CurrentPercent").innerHTML = playerOneObject.percentHP + "%";
                document.getElementById("p1CurrentPercent").style.width = playerOneObject.percentHP + "%";
                playerOneObject.turnCount = false;
                playerTwoObject.turnCount = true;
            } else {
                document.getElementById("displayAttackP1").innerHTML = "Fighter 1 dealt " + atkDamage + " damage to Fighter 2";
                playerTwoObject.HP -= atkDamage;
                document.getElementById("p2CurrentHP").innerHTML = playerTwoObject.HP + "/" + playerTwoObject.startHP;
                playerTwoObject.percentHP = Math.floor((playerTwoObject.HP / playerTwoObject.startHP) * 100);
                document.getElementById("p2CurrentHP").style.width = playerTwoObject.percentHP + "%";
                document.getElementById("p2CurrentPercent").innerHTML = playerTwoObject.percentHP + "%";
                document.getElementById("p2CurrentPercent").style.width = playerTwoObject.percentHP + "%";
                playerOneObject.turnCount = false;
                playerTwoObject.turnCount = true;
                if (playerTwoObject.HP < 1) {
                    playerOneObject.winCount += 1;
                    document.getElementById("winCountP1").innerHTML = "Fighter 1 has " + playerOneObject.winCount + " wins";
                    document.getElementById("gameOverP1").innerHTML = "Fighter 2 has been defeated, Figher 1 wins!";
                    restartGame = prompt("Fighter 1 has dealt a killing blow of " + atkDamage + " to Fighter 2!\nWould you like to play again? (Y or N)");
                    resetGame();
                }
            }
        } else if (player == "P2" && playerTwoObject.turnCount) {
            atkDamage = playerTwoObject.Weapon + rollTheDice(diceSides);
            if (atkDamage < 0) {
                document.getElementById("displayAttackP2").innerHTML = "Fighter 2 Healed for " + (atkDamage - (atkDamage * 2)) + " HP";
                playerTwoObject.HP -= atkDamage;
                document.getElementById("p2CurrentHP").innerHTML = playerTwoObject.HP + "/" + playerTwoObject.startHP;
                playerTwoObject.percentHP = Math.floor((playerTwoObject.HP / playerTwoObject.startHP) * 100);
                document.getElementById("p2CurrentHP").style.width = playerTwoObject.percentHP + "%";
                document.getElementById("p2CurrentPercent").innerHTML = playerTwoObject.percentHP + "%";
                document.getElementById("p2CurrentPercent").style.width = playerTwoObject.percentHP + "%";
                playerTwoObject.turnCount = false;
                playerOneObject.turnCount = true;
            } else {
                document.getElementById("displayAttackP2").innerHTML = "Fighter 2 dealt " + atkDamage + " damage to Fighter 1";
                playerOneObject.HP -= atkDamage;
                document.getElementById("p1CurrentHP").innerHTML = playerOneObject.HP + "/" + playerOneObject.startHP;
                playerOneObject.percentHP = Math.floor((playerOneObject.HP / playerOneObject.startHP) * 100);
                document.getElementById("p1CurrentHP").style.width = playerOneObject.percentHP + "%";
                document.getElementById("p1CurrentPercent").innerHTML = playerOneObject.percentHP + "%";
                document.getElementById("p1CurrentPercent").style.width = playerOneObject.percentHP + "%";
                playerTwoObject.turnCount = false;
                playerOneObject.turnCount = true;
                if (playerOneObject.HP < 1) {
                    playerTwoObject.winCount += 1;
                    document.getElementById("winCountP2").innerHTML = "Fighter 2 has " + playerTwoObject.winCount + " wins";
                    document.getElementById("gameOverP2").innerHTML = "Fighter 1 has been defeated, Fighter 2 wins!";
                    restartGame = prompt("Fighter 2 has dealt a killing blow of " + atkDamage + " to Fighter 1!\nWould you like to play again? (Y or N)");
                    resetGame();
                }
            }
        } else {
            alert("It's not your turn!");
        }
    } else {
        alert("Make sure you pick your armor and weapons.")
    }

}

function resetGame() {
    playerOneObject.startHP = 100;
    playerOneObject.HP = 100;
    playerOneObject.Weapon = 0;
    playerOneObject.percentHP = 100;

    playerTwoObject.startHP = 100;
    playerTwoObject.HP = 100;
    playerTwoObject.Weapon = 0;
    playerTwoObject.percentHP = 100;

    document.getElementById("p1CurrentHP").style.width = playerOneObject.percentHP + "%";
    document.getElementById("p1CurrentPercent").style.width = playerOneObject.percentHP + "%";
    document.getElementById("p2CurrentHP").style.width = playerTwoObject.percentHP + "%";
    document.getElementById("p2CurrentPercent").style.width = playerTwoObject.percentHP + "%";

    document.getElementById("p1CurrentPercent").innerHTML = playerOneObject.startHP + "%";
    document.getElementById("p2CurrentPercent").innerHTML = playerTwoObject.startHP + "%";

    document.getElementById("p1CurrentHP").innerHTML = playerOneObject.startHP + "/" + playerOneObject.startHP;
    document.getElementById("p2CurrentHP").innerHTML = playerTwoObject.startHP + "/" + playerTwoObject.startHP;

    document.getElementById("displayArmorValueP1").innerHTML = "?";
    document.getElementById("displayArmorValueP2").innerHTML = "?";

    document.getElementById("displayWeaponValueP1").innerHTML = "?";
    document.getElementById("p1StartAD").innerHTML = "0 AD";
    document.getElementById("displayWeaponValueP2").innerHTML = "?";
    document.getElementById("p2StartAD").innerHTML = "0 AD";

    document.getElementById("displayAttackP1").innerHTML = "";
    document.getElementById("gameOverP1").innerHTML = "";
    document.getElementById("displayAttackP2").innerHTML = "";
    document.getElementById("gameOverP2").innerHTML = "";
}

function showInfo() {
    alert("Welcome to my fighting game! \nEach player much first choose their armor and weapons before they take turns attacking one another. \nChoosing a lower level dice roll guaratees at least a moderate amount of damage but also guarantees that you won't do a significant amount of damage. \nThe higher dice sides used to roll, the more maximum damage you could possibly inflict, but also you may inflict as low as 0 damage (at 20 sides).\n Loser of the last round start first");
}




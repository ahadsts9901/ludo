let gPlayerSum = 0;
let yPlayerSum = 100;
let bPlayerSum = 200;
let rPlayerSum = 300;

let player1 = prompt("Enter Player 1 Name");
let player2 = prompt("Enter Player 2 Name");
let player3 = prompt("Enter Player 3 Name");
let player4 = prompt("Enter Player 4 Name");

if (player1 === "" || player1 === null) {
    player1 = "Player Green";
}

if (player2 === "" || player2 === null) {
    player2 = "Player Yellow";
}

if (player3 === "" || player3 === null) {
    player3 = "Player Blue";
}

if (player4 === "" || player4 === null) {
    player4 = "Player Red";
}

document.getElementById("player1").innerHTML = player1;
document.getElementById("player2").innerHTML = player2;
document.getElementById("player3").innerHTML = player3;
document.getElementById("player4").innerHTML = player4;

function diceAudio() {
    document.getElementById("dice-audio").play();
}

function finishAudio() {
    document.getElementById("finish-audio").play();
}

function dice1() {
    //dice

    let Dice1 = "";

    let number = Math.random(Dice1) * 6;
    number = Number.parseInt(number);
    number = number + 1;

    //player piece
    gPlayerSum = gPlayerSum + number;
    if (number === 1) {
        document.querySelector("#dice-1").innerHTML =
            '<i class="bi bi-dice-1 green"></i>';
    } else if (number === 2) {
        document.querySelector("#dice-1").innerHTML =
            '<i class="bi bi-dice-2 green"></i>';
    } else if (number === 3) {
        document.querySelector("#dice-1").innerHTML =
            '<i class="bi bi-dice-3 green"></i>';
    } else if (number === 4) {
        document.querySelector("#dice-1").innerHTML =
            '<i class="bi bi-dice-4 green"></i>';
    } else if (number === 5) {
        document.querySelector("#dice-1").innerHTML =
            '<i class="bi bi-dice-5 green"></i>';
    } else {
        document.querySelector("#dice-1").innerHTML =
            '<i class="bi bi-dice-6 green"></i>';
    }

    document.getElementById("1").innerHTML = "";
    document.getElementById("2").innerHTML = "";
    document.getElementById("3").innerHTML = "";
    document.getElementById("4").innerHTML = "";
    document.getElementById("5").innerHTML = "";
    document.getElementById("6").innerHTML = "";
    document.getElementById("7").innerHTML = "";
    document.getElementById("8").innerHTML = "";
    document.getElementById("9").innerHTML = "";
    document.getElementById("10").innerHTML = "";

    document.getElementById("11").innerHTML = "";
    document.getElementById("12").innerHTML = "";
    document.getElementById("13").innerHTML = "";
    document.getElementById("14").innerHTML = "";
    document.getElementById("15").innerHTML = "";
    document.getElementById("16").innerHTML = "";
    document.getElementById("17").innerHTML = "";
    document.getElementById("18").innerHTML = "";
    document.getElementById("19").innerHTML = "";
    document.getElementById("20").innerHTML = "";

    document.getElementById("21").innerHTML = "";
    document.getElementById("22").innerHTML = "";
    document.getElementById("23").innerHTML = "";
    document.getElementById("24").innerHTML = "";
    document.getElementById("25").innerHTML = "";
    document.getElementById("26").innerHTML = "";
    document.getElementById("27").innerHTML = "";
    document.getElementById("28").innerHTML = "";
    document.getElementById("29").innerHTML = "";
    document.getElementById("30").innerHTML = "";

    document.getElementById("31").innerHTML = "";
    document.getElementById("32").innerHTML = "";
    document.getElementById("33").innerHTML = "";
    document.getElementById("34").innerHTML = "";
    document.getElementById("35").innerHTML = "";
    document.getElementById("36").innerHTML = "";
    document.getElementById("37").innerHTML = "";
    document.getElementById("38").innerHTML = "";
    document.getElementById("39").innerHTML = "";
    document.getElementById("40").innerHTML = "";

    document.getElementById("41").innerHTML = "";
    document.getElementById("42").innerHTML = "";
    document.getElementById("43").innerHTML = "";
    document.getElementById("44").innerHTML = "";
    document.getElementById("45").innerHTML = "";
    document.getElementById("46").innerHTML = "";
    document.getElementById("47").innerHTML = "";
    document.getElementById("48").innerHTML = "";
    document.getElementById("49").innerHTML = "";
    document.getElementById("50").innerHTML = "";

    document.getElementById("51").innerHTML = "";
    document.getElementById("52").innerHTML = "";
    document.getElementById("53").innerHTML = "";
    document.getElementById("54").innerHTML = "";
    document.getElementById("55").innerHTML = "";

    if (gPlayerSum > 55) {
        gPlayerSum = gPlayerSum - number;
    }

    if (gPlayerSum == 55) {
        finishAudio();
        alert(`${player1} Won`);
        document.getElementById("guide").innerHTML = `${player1} Won`;
        document.querySelector(".button-1").disabled = true;
        document.querySelector(".button-2").disabled = true;
        document.querySelector(".button-3").disabled = true;
        document.querySelector(".button-4").disabled = true;
    }
    document.getElementById(`${gPlayerSum + 1}`).innerHTML =
        '<i class="bi bi-circle-fill green"></i>';

    document.getElementById("guide").innerHTML = `${player2} Turn`;

    document.querySelector(".button-1").disabled = true;
    document.querySelector(".button-2").disabled = false;
    document.querySelector(".button-3").disabled = true;
    document.querySelector(".button-4").disabled = true;

    console.log(gPlayerSum);
}

// .......................................................................................................

function dice2() {
    //dice

    let Dice1 = "";

    let number = Math.random(Dice1) * 6;
    number = Number.parseInt(number);
    number = number + 1;

    //player piece
    yPlayerSum = yPlayerSum + number;
    if (number === 1) {
        document.querySelector("#dice-2").innerHTML =
            '<i class="bi bi-dice-1 yellow"></i>';
    } else if (number === 2) {
        document.querySelector("#dice-2").innerHTML =
            '<i class="bi bi-dice-2 yellow"></i>';
    } else if (number === 3) {
        document.querySelector("#dice-2").innerHTML =
            '<i class="bi bi-dice-3 yellow"></i>';
    } else if (number === 4) {
        document.querySelector("#dice-2").innerHTML =
            '<i class="bi bi-dice-4 yellow"></i>';
    } else if (number === 5) {
        document.querySelector("#dice-2").innerHTML =
            '<i class="bi bi-dice-5 yellow"></i>';
    } else {
        document.querySelector("#dice-2").innerHTML =
            '<i class="bi bi-dice-6 yellow"></i>';
    }

    document.getElementById("101").innerHTML = "";
    document.getElementById("102").innerHTML = "";
    document.getElementById("103").innerHTML = "";
    document.getElementById("104").innerHTML = "";
    document.getElementById("105").innerHTML = "";
    document.getElementById("106").innerHTML = "";
    document.getElementById("107").innerHTML = "";
    document.getElementById("108").innerHTML = "";
    document.getElementById("109").innerHTML = "";
    document.getElementById("110").innerHTML = "";

    document.getElementById("111").innerHTML = "";
    document.getElementById("112").innerHTML = "";
    document.getElementById("113").innerHTML = "";
    document.getElementById("114").innerHTML = "";
    document.getElementById("115").innerHTML = "";
    document.getElementById("116").innerHTML = "";
    document.getElementById("117").innerHTML = "";
    document.getElementById("118").innerHTML = "";
    document.getElementById("119").innerHTML = "";
    document.getElementById("120").innerHTML = "";

    document.getElementById("121").innerHTML = "";
    document.getElementById("122").innerHTML = "";
    document.getElementById("123").innerHTML = "";
    document.getElementById("124").innerHTML = "";
    document.getElementById("125").innerHTML = "";
    document.getElementById("126").innerHTML = "";
    document.getElementById("127").innerHTML = "";
    document.getElementById("128").innerHTML = "";
    document.getElementById("129").innerHTML = "";
    document.getElementById("130").innerHTML = "";

    document.getElementById("131").innerHTML = "";
    document.getElementById("132").innerHTML = "";
    document.getElementById("133").innerHTML = "";
    document.getElementById("134").innerHTML = "";
    document.getElementById("135").innerHTML = "";
    document.getElementById("136").innerHTML = "";
    document.getElementById("137").innerHTML = "";
    document.getElementById("138").innerHTML = "";
    document.getElementById("139").innerHTML = "";
    document.getElementById("140").innerHTML = "";

    document.getElementById("141").innerHTML = "";
    document.getElementById("142").innerHTML = "";
    document.getElementById("143").innerHTML = "";
    document.getElementById("144").innerHTML = "";
    document.getElementById("145").innerHTML = "";
    document.getElementById("146").innerHTML = "";
    document.getElementById("147").innerHTML = "";
    document.getElementById("148").innerHTML = "";
    document.getElementById("149").innerHTML = "";
    document.getElementById("150").innerHTML = "";

    document.getElementById("151").innerHTML = "";
    document.getElementById("152").innerHTML = "";
    document.getElementById("153").innerHTML = "";
    document.getElementById("154").innerHTML = "";
    document.getElementById("155").innerHTML = "";
    document.getElementById("156").innerHTML = "";

    if (yPlayerSum > 156) {
        yPlayerSum = yPlayerSum - number;
    }

    if (yPlayerSum == 156) {
        finishAudio();
        alert(`${player2} Won`);
        document.getElementById("guide").innerHTML = `${player2} Won`;
        document.querySelector(".button-1").disabled = true;
        document.querySelector(".button-2").disabled = true;
        document.querySelector(".button-3").disabled = true;
        document.querySelector(".button-4").disabled = true;
    }
    document.getElementById(`${yPlayerSum + 1}`).innerHTML =
        '<i class="bi bi-circle-fill yellow"></i>';

    document.getElementById("guide").innerHTML = `${player3} Turn`;

    document.querySelector(".button-1").disabled = true;
    document.querySelector(".button-2").disabled = true;
    document.querySelector(".button-3").disabled = false;
    document.querySelector(".button-4").disabled = true;

    console.log(yPlayerSum);
}

//.....................................................................................................

function dice3() {
    //dice

    let Dice1 = "";

    let number = Math.random(Dice1) * 6;
    number = Number.parseInt(number);
    number = number + 1;

    //player piece
    bPlayerSum = bPlayerSum + number;
    if (number === 1) {
        document.querySelector("#dice-3").innerHTML =
            '<i class="bi bi-dice-1 blue"></i>';
    } else if (number === 2) {
        document.querySelector("#dice-3").innerHTML =
            '<i class="bi bi-dice-2 blue"></i>';
    } else if (number === 3) {
        document.querySelector("#dice-3").innerHTML =
            '<i class="bi bi-dice-3 blue"></i>';
    } else if (number === 4) {
        document.querySelector("#dice-3").innerHTML =
            '<i class="bi bi-dice-4 blue"></i>';
    } else if (number === 5) {
        document.querySelector("#dice-3").innerHTML =
            '<i class="bi bi-dice-5 blue"></i>';
    } else {
        document.querySelector("#dice-3").innerHTML =
            '<i class="bi bi-dice-6 blue"></i>';
    }

    document.getElementById("201").innerHTML = "";
    document.getElementById("202").innerHTML = "";
    document.getElementById("203").innerHTML = "";
    document.getElementById("204").innerHTML = "";
    document.getElementById("205").innerHTML = "";
    document.getElementById("206").innerHTML = "";
    document.getElementById("207").innerHTML = "";
    document.getElementById("208").innerHTML = "";
    document.getElementById("209").innerHTML = "";
    document.getElementById("210").innerHTML = "";

    document.getElementById("211").innerHTML = "";
    document.getElementById("212").innerHTML = "";
    document.getElementById("213").innerHTML = "";
    document.getElementById("214").innerHTML = "";
    document.getElementById("215").innerHTML = "";
    document.getElementById("216").innerHTML = "";
    document.getElementById("217").innerHTML = "";
    document.getElementById("218").innerHTML = "";
    document.getElementById("219").innerHTML = "";
    document.getElementById("220").innerHTML = "";

    document.getElementById("221").innerHTML = "";
    document.getElementById("222").innerHTML = "";
    document.getElementById("223").innerHTML = "";
    document.getElementById("224").innerHTML = "";
    document.getElementById("225").innerHTML = "";
    document.getElementById("226").innerHTML = "";
    document.getElementById("227").innerHTML = "";
    document.getElementById("228").innerHTML = "";
    document.getElementById("229").innerHTML = "";
    document.getElementById("230").innerHTML = "";

    document.getElementById("231").innerHTML = "";
    document.getElementById("232").innerHTML = "";
    document.getElementById("233").innerHTML = "";
    document.getElementById("234").innerHTML = "";
    document.getElementById("235").innerHTML = "";
    document.getElementById("236").innerHTML = "";
    document.getElementById("237").innerHTML = "";
    document.getElementById("238").innerHTML = "";
    document.getElementById("239").innerHTML = "";
    document.getElementById("240").innerHTML = "";

    document.getElementById("241").innerHTML = "";
    document.getElementById("242").innerHTML = "";
    document.getElementById("243").innerHTML = "";
    document.getElementById("244").innerHTML = "";
    document.getElementById("245").innerHTML = "";
    document.getElementById("246").innerHTML = "";
    document.getElementById("247").innerHTML = "";
    document.getElementById("248").innerHTML = "";
    document.getElementById("249").innerHTML = "";
    document.getElementById("250").innerHTML = "";

    document.getElementById("251").innerHTML = "";
    document.getElementById("252").innerHTML = "";
    document.getElementById("253").innerHTML = "";
    document.getElementById("254").innerHTML = "";
    document.getElementById("255").innerHTML = "";
    document.getElementById("256").innerHTML = "";

    if (bPlayerSum > 256) {
        bPlayerSum = bPlayerSum - number;
    }

    if (bPlayerSum == 256) {
        finishAudio();
        alert(`${player3} Won`);
        document.getElementById("guide").innerHTML = `${player3} Won`;
        document.querySelector(".button-1").disabled = true;
        document.querySelector(".button-2").disabled = true;
        document.querySelector(".button-3").disabled = true;
        document.querySelector(".button-4").disabled = true;
    }
    document.getElementById(`${bPlayerSum + 1}`).innerHTML =
        '<i class="bi bi-circle-fill blue"></i>';

    document.getElementById("guide").innerHTML = `${player4} Turn`;

    document.querySelector(".button-1").disabled = true;
    document.querySelector(".button-2").disabled = true;
    document.querySelector(".button-3").disabled = true;
    document.querySelector(".button-4").disabled = false;

    console.log(bPlayerSum);
}

//.........................................................................................................

function dice4() {
    //dice

    let Dice1 = "";

    let number = Math.random(Dice1) * 6;
    number = Number.parseInt(number);
    number = number + 1;

    //player piece
    rPlayerSum = rPlayerSum + number;
    if (number === 1) {
        document.querySelector("#dice-4").innerHTML =
            '<i class="bi bi-dice-1 red"></i>';
    } else if (number === 2) {
        document.querySelector("#dice-4").innerHTML =
            '<i class="bi bi-dice-2 red"></i>';
    } else if (number === 3) {
        document.querySelector("#dice-4").innerHTML =
            '<i class="bi bi-dice-3 red"></i>';
    } else if (number === 4) {
        document.querySelector("#dice-4").innerHTML =
            '<i class="bi bi-dice-4 red"></i>';
    } else if (number === 5) {
        document.querySelector("#dice-4").innerHTML =
            '<i class="bi bi-dice-5 red"></i>';
    } else {
        document.querySelector("#dice-4").innerHTML =
            '<i class="bi bi-dice-6 red"></i>';
    }

    document.getElementById("301").innerHTML = "";
    document.getElementById("302").innerHTML = "";
    document.getElementById("303").innerHTML = "";
    document.getElementById("304").innerHTML = "";
    document.getElementById("305").innerHTML = "";
    document.getElementById("306").innerHTML = "";
    document.getElementById("307").innerHTML = "";
    document.getElementById("308").innerHTML = "";
    document.getElementById("309").innerHTML = "";
    document.getElementById("310").innerHTML = "";

    document.getElementById("311").innerHTML = "";
    document.getElementById("312").innerHTML = "";
    document.getElementById("313").innerHTML = "";
    document.getElementById("314").innerHTML = "";
    document.getElementById("315").innerHTML = "";
    document.getElementById("316").innerHTML = "";
    document.getElementById("317").innerHTML = "";
    document.getElementById("318").innerHTML = "";
    document.getElementById("319").innerHTML = "";
    document.getElementById("320").innerHTML = "";

    document.getElementById("321").innerHTML = "";
    document.getElementById("322").innerHTML = "";
    document.getElementById("323").innerHTML = "";
    document.getElementById("324").innerHTML = "";
    document.getElementById("325").innerHTML = "";
    document.getElementById("326").innerHTML = "";
    document.getElementById("327").innerHTML = "";
    document.getElementById("328").innerHTML = "";
    document.getElementById("329").innerHTML = "";
    document.getElementById("330").innerHTML = "";

    document.getElementById("331").innerHTML = "";
    document.getElementById("332").innerHTML = "";
    document.getElementById("333").innerHTML = "";
    document.getElementById("334").innerHTML = "";
    document.getElementById("335").innerHTML = "";
    document.getElementById("336").innerHTML = "";
    document.getElementById("337").innerHTML = "";
    document.getElementById("338").innerHTML = "";
    document.getElementById("339").innerHTML = "";
    document.getElementById("340").innerHTML = "";

    document.getElementById("341").innerHTML = "";
    document.getElementById("342").innerHTML = "";
    document.getElementById("343").innerHTML = "";
    document.getElementById("344").innerHTML = "";
    document.getElementById("345").innerHTML = "";
    document.getElementById("346").innerHTML = "";
    document.getElementById("347").innerHTML = "";
    document.getElementById("348").innerHTML = "";
    document.getElementById("349").innerHTML = "";
    document.getElementById("350").innerHTML = "";

    document.getElementById("351").innerHTML = "";
    document.getElementById("352").innerHTML = "";
    document.getElementById("353").innerHTML = "";
    document.getElementById("354").innerHTML = "";
    document.getElementById("355").innerHTML = "";
    document.getElementById("356").innerHTML = "";

    if (rPlayerSum > 356) {
        rPlayerSum = rPlayerSum - number;
    }

    if (rPlayerSum == 356) {
        finishAudio();
        alert(`${player4} Won`);
        document.getElementById("guide").innerHTML = `${player4} Won`;
        document.querySelector(".button-1").disabled = true;
        document.querySelector(".button-2").disabled = true;
        document.querySelector(".button-3").disabled = true;
        document.querySelector(".button-4").disabled = true;
    }
    document.getElementById(`${rPlayerSum + 1}`).innerHTML =
        '<i class="bi bi-circle-fill red"></i>';

    document.getElementById("guide").innerHTML = `${player1} Turn`;

    document.querySelector(".button-1").disabled = false;
    document.querySelector(".button-2").disabled = true;
    document.querySelector(".button-3").disabled = true;
    document.querySelector(".button-4").disabled = true;

    console.log(rPlayerSum);
}
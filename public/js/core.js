let currentTab = 0; // Current tab is set to be the first tab (0)
showTab(currentTab); // Display the current tab
function materialValues() {
    let x = document.getElementById("materialOfConstruction").value;
    if (x === "A283M Gr C") {
        document.getElementById("specificMinimumYieldStress").value = 205;
        document.getElementById("modulusOfElasticity").value = 209000;
        document.getElementById("pplate").value = 7850;
    }
    if (x === "A285M Gr C") {
        document.getElementById("specificMinimumYieldStress").value = 205;
        document.getElementById("modulusOfElasticity").value = 190000;
        document.getElementById("pplate").value = 7800;
    }
    if (x === "A131M  A") {
        document.getElementById("specificMinimumYieldStress").value = 235;
        document.getElementById("modulusOfElasticity").value = 454000;
        document.getElementById("pplate").value = 7800;
    }
    if (x === "A131M B") {
        document.getElementById("specificMinimumYieldStress").value = 235  ;
        document.getElementById("modulusOfElasticity").value = 197000;
        document.getElementById("pplate").value = 7800;
    }
    if (x === "A36M") {
        document.getElementById("specificMinimumYieldStress").value = 250;
        document.getElementById("modulusOfElasticity").value = 200000;
        document.getElementById("pplate").value = 7850;
    }
    if (x === "A131M Gr EH36") {
        document.getElementById("specificMinimumYieldStress").value = 360;
        document.getElementById("modulusOfElasticity").value = 160000;
        document.getElementById("pplate").value = 7800;
    }if (x === "A573M Gr 400") {
        document.getElementById("specificMinimumYieldStress").value = 205;
        document.getElementById("modulusOfElasticity").value = 190000;
        document.getElementById("pplate").value = 7800;
    }if (x === "A285M Gr C") {
        document.getElementById("specificMinimumYieldStress").value = 220;
        document.getElementById("modulusOfElasticity").value = 190000;
        document.getElementById("pplate").value = 7700;
    }
    if (x === "A573M Gr 450") {
        document.getElementById("specificMinimumYieldStress").value = 240;
        document.getElementById("modulusOfElasticity").value = 190000;
        document.getElementById("pplate").value = 7700;
    }if (x === "A573M Gr 485") {
        document.getElementById("specificMinimumYieldStress").value = 290;
        document.getElementById("modulusOfElasticity").value = 190000;
        document.getElementById("pplate").value = 7700;
    }if (x === "A516M Gr 380") {
        document.getElementById("specificMinimumYieldStress").value = 205;
        document.getElementById("modulusOfElasticity").value = 190000;
        document.getElementById("pplate").value = 7800;
    }if (x === "A516M Gr 415") {
        document.getElementById("specificMinimumYieldStress").value = 220;
        document.getElementById("modulusOfElasticity").value = 190000;
        document.getElementById("pplate").value = 7800;
    }if (x === "A516M Gr 450") {
        document.getElementById("specificMinimumYieldStress").value = 240;
        document.getElementById("modulusOfElasticity").value = 190000;
        document.getElementById("pplate").value = 7800;
    }if (x === "A516M Gr  485") {
        document.getElementById("specificMinimumYieldStress").value = 260;
        document.getElementById("modulusOfElasticity").value = 190000;
        document.getElementById("pplate").value = 7800;
    }if (x === "A662M Gr B") {
        document.getElementById("specificMinimumYieldStress").value = 275;
        document.getElementById("modulusOfElasticity").value = 175000;
        document.getElementById("pplate").value = 7800;
    }if (x === "A662M Gr C") {
        document.getElementById("specificMinimumYieldStress").value = 295;
        document.getElementById("modulusOfElasticity").value = 241000;
        document.getElementById("pplate").value = 7800;
    }if (x === "A537M Gr 1") {
        document.getElementById("specificMinimumYieldStress").value = 345;
        document.getElementById("modulusOfElasticity").value = 200000;
        document.getElementById("pplate").value = 7800;
    }if (x === "A537M Gr 2") {
        document.getElementById("specificMinimumYieldStress").value = 380;
        document.getElementById("modulusOfElasticity").value = 200000;
        document.getElementById("pplate").value = 7800;
    }if (x === "A633M Gr C") {
        document.getElementById("specificMinimumYieldStress").value = 315;
        document.getElementById("modulusOfElasticity").value = 200000;
        document.getElementById("pplate").value = 7800;
    }if (x === "A633M Gr D") {
        document.getElementById("specificMinimumYieldStress").value = 315;
        document.getElementById("modulusOfElasticity").value = 205000;
        document.getElementById("pplate").value = 7800;
    }
    if (x === "A737M Gr B ") {
        document.getElementById("specificMinimumYieldStress").value = 345;
        document.getElementById("modulusOfElasticity").value = 205000;
        document.getElementById("pplate").value = 7800;
    }if (x === "A841M Classe 1 Gr A") {
        document.getElementById("specificMinimumYieldStress").value = 345;
        document.getElementById("modulusOfElasticity").value = 220000;
        document.getElementById("pplate").value = 7800;
    }if (x === "A841M Classe 1 Gr B") {
        document.getElementById("specificMinimumYieldStress").value = 345;
        document.getElementById("modulusOfElasticity").value = 200000;
        document.getElementById("pplate").value = 7800;
    }if (x === "A841M Classe 2 Gr A") {
        document.getElementById("specificMinimumYieldStress").value = 415;
        document.getElementById("modulusOfElasticity").value = 200000;
        document.getElementById("pplate").value = 7800;
    }if (x === "A841M Classe 2 Gr B") {
        document.getElementById("specificMinimumYieldStress").value = 415;
        document.getElementById("modulusOfElasticity").value = 200000;
        document.getElementById("pplate").value = 7800;
    }if (x === "G40.21M 260W") {
        document.getElementById("specificMinimumYieldStress").value = 260;
        document.getElementById("modulusOfElasticity").value = 190000;
        document.getElementById("pplate").value = 7800;
    }if (x === "G40.21M 260WT") {
        document.getElementById("specificMinimumYieldStress").value = 260;
        document.getElementById("modulusOfElasticity").value = 190000;
        document.getElementById("pplate").value = 7800;
    }if (x === "G40.21M 300W") {
        document.getElementById("specificMinimumYieldStress").value = 300;
        document.getElementById("modulusOfElasticity").value = 190000;
        document.getElementById("pplate").value = 7800;
    }if (x === "G40.21M 300WT") {
        document.getElementById("specificMinimumYieldStress").value = 300;
        document.getElementById("modulusOfElasticity").value = 190000;
        document.getElementById("pplate").value = 7800;
    }if (x === "G40.21M 350W") {
        document.getElementById("specificMinimumYieldStress").value = 350;
        document.getElementById("modulusOfElasticity").value = 190000;
        document.getElementById("pplate").value = 7800;
    }if (x === "G40.21M 350WT") {
        document.getElementById("specificMinimumYieldStress").value = 320;
        document.getElementById("modulusOfElasticity").value = 190000;
        document.getElementById("pplate").value = 7800;
    }if (x === "NS 235") {
        document.getElementById("specificMinimumYieldStress").value = 235;
        document.getElementById("modulusOfElasticity").value = 190000;
        document.getElementById("pplate").value = 7800;
    }if (x === "NS 250") {
        document.getElementById("specificMinimumYieldStress").value = 250;
        document.getElementById("modulusOfElasticity").value = 190000;
        document.getElementById("pplate").value = 7800;
    }if (x === "NS 275") {
        document.getElementById("specificMinimumYieldStress").value = 275;
        document.getElementById("modulusOfElasticity").value = 190000;
        document.getElementById("pplate").value = 7800;
    }if (x === "ISO 630 S275 C") {
        document.getElementById("specificMinimumYieldStress").value = 265;
        document.getElementById("modulusOfElasticity").value = 190000;
        document.getElementById("pplate").value = 7750;
    }if (x === "ISO 630 S275 D") {
        document.getElementById("specificMinimumYieldStress").value = 265;
        document.getElementById("modulusOfElasticity").value = 190000;
        document.getElementById("pplate").value = 7750;
    }if (x === "ISO 630 S355 C") {
        document.getElementById("specificMinimumYieldStress").value = 335;
        document.getElementById("modulusOfElasticity").value = 190000;
        document.getElementById("pplate").value = 7750;
    }if (x === "ISO 630 S355 D") {
        document.getElementById("specificMinimumYieldStress").value = 335;
        document.getElementById("modulusOfElasticity").value = 190000;
        document.getElementById("pplate").value = 7750;
    }if (x === "EN 10025 S275 J0") {
        document.getElementById("specificMinimumYieldStress").value = 265;
        document.getElementById("modulusOfElasticity").value = 210000;
        document.getElementById("pplate").value = 7850;
    }if (x === "EN 10025 S275 J2") {
        document.getElementById("specificMinimumYieldStress").value = 265;
        document.getElementById("modulusOfElasticity").value = 210000;
        document.getElementById("pplate").value = 7850;
    }if (x === "EN 10025 S355 J0") {
        document.getElementById("specificMinimumYieldStress").value = 335;
        document.getElementById("modulusOfElasticity").value = 210000;
        document.getElementById("pplate").value = 7850;
    }if (x === "EN 10025 S355 J2") {
        document.getElementById("specificMinimumYieldStress").value = 335;
        document.getElementById("modulusOfElasticity").value = 210000;
        document.getElementById("pplate").value = 7850;
    }if (x === "EN 10025 S355 K2") {
        document.getElementById("specificMinimumYieldStress").value = 335;
        document.getElementById("modulusOfElasticity").value = 210000;
        document.getElementById("pplate").value = 7850;
    }if (x === "ASTM A27M 60-30") {
        document.getElementById("specificMinimumYieldStress").value = 207;
        document.getElementById("modulusOfElasticity").value = 200000;
        document.getElementById("pplate").value = 7800;
    }if (x === "ASTM A27M 65-35") {
        document.getElementById("specificMinimumYieldStress").value = 242;
        document.getElementById("modulusOfElasticity").value = 200000;
        document.getElementById("pplate").value = 7800;
    }if (x === "Astm A216M WCB") {
        document.getElementById("specificMinimumYieldStress").value = 485;
        document.getElementById("modulusOfElasticity").value = 210000;
        document.getElementById("pplate").value = 7800;
    }if (x === "Astm A216M WCC") {
        document.getElementById("specificMinimumYieldStress").value = 500;
        document.getElementById("modulusOfElasticity").value = 210000;
        document.getElementById("pplate").value = 7800;
    }if (x === "Astm A216M WCA") {
        document.getElementById("specificMinimumYieldStress").value = 500;
        document.getElementById("modulusOfElasticity").value = 210000;
        document.getElementById("pplate").value = 7800;
    }if (x === "ASTM A240M 304") {
        document.getElementById("specificMinimumYieldStress").value = 207;
        document.getElementById("modulusOfElasticity").value = 200000;
        document.getElementById("pplate").value = 8000;
    }if (x === "ASTM A240M 316L") {
        document.getElementById("specificMinimumYieldStress").value = 207;
        document.getElementById("modulusOfElasticity").value = 200000;
        document.getElementById("pplate").value = 8000;
    }if (x === "ASTM A240M 321") {
        document.getElementById("specificMinimumYieldStress").value = 207;
        document.getElementById("modulusOfElasticity").value = 200000;
        document.getElementById("pplate").value = 8027;
    }if (x === "ASTM A240M 904L") {
        document.getElementById("specificMinimumYieldStress").value = 214;
        document.getElementById("modulusOfElasticity").value = 200000;
        document.getElementById("pplate").value = 7900;
    }
    if (x === "ASTM A240M UNS S31254") {
        document.getElementById("specificMinimumYieldStress").value = 310;
        document.getElementById("modulusOfElasticity").value = 200000;
        document.getElementById("pplate").value = 8000;
    }




























}

function materialValues2() {
    let x = document.getElementById("materialOfConstruction2").value;
    if (x === "A283M Gr C") {
        document.getElementById("specificMinimumYieldStress2").value = 205;
        document.getElementById("modulusOfElasticity2").value = 209000;
        document.getElementById("pplate2").value = 7850;
    }
    if (x === "A285M Gr C") {
        document.getElementById("specificMinimumYieldStress2").value = 205;
        document.getElementById("modulusOfElasticity2").value = 190000;
        document.getElementById("pplate2").value = 7800;
    }
    if (x === "A131M  A") {
        document.getElementById("specificMinimumYieldStress2").value = 235;
        document.getElementById("modulusOfElasticity2").value = 454000;
        document.getElementById("pplate2").value = 7800;
    }
    if (x === "A131M B") {
        document.getElementById("specificMinimumYieldStress2").value = 235  ;
        document.getElementById("modulusOfElasticity2").value = 197000;
        document.getElementById("pplate2").value = 7800;
    }
    if (x === "A36M") {
        document.getElementById("specificMinimumYieldStress2").value = 250;
        document.getElementById("modulusOfElasticity2").value = 200000;
        document.getElementById("pplate2").value = 7850;
    }
    if (x === "A131M Gr EH36") {
        document.getElementById("specificMinimumYieldStress2").value = 360;
        document.getElementById("modulusOfElasticity2").value = 160000;
        document.getElementById("pplate2").value = 7800;
    }if (x === "A573M Gr 400") {
        document.getElementById("specificMinimumYieldStress2").value = 205;
        document.getElementById("modulusOfElasticity2").value = 190000;
        document.getElementById("pplate2").value = 7800;
    }if (x === "A285M Gr C") {
        document.getElementById("specificMinimumYieldStress2").value = 220;
        document.getElementById("modulusOfElasticity2").value = 190000;
        document.getElementById("pplate2").value = 7700;
    }
    if (x === "A573M Gr 450") {
        document.getElementById("specificMinimumYieldStress2").value = 240;
        document.getElementById("modulusOfElasticity2").value = 190000;
        document.getElementById("pplate2").value = 7700;
    }if (x === "A573M Gr 485") {
        document.getElementById("specificMinimumYieldStress2").value = 290;
        document.getElementById("modulusOfElasticity2").value = 190000;
        document.getElementById("pplate2").value = 7700;
    }if (x === "A516M Gr 380") {
        document.getElementById("specificMinimumYieldStress2").value = 205;
        document.getElementById("modulusOfElasticity2").value = 190000;
        document.getElementById("pplate2").value = 7800;
    }if (x === "A516M Gr 415") {
        document.getElementById("specificMinimumYieldStress2").value = 220;
        document.getElementById("modulusOfElasticity2").value = 190000;
        document.getElementById("pplate2").value = 7800;
    }if (x === "A516M Gr 450") {
        document.getElementById("specificMinimumYieldStress2").value = 240;
        document.getElementById("modulusOfElasticity2").value = 190000;
        document.getElementById("pplate2").value = 7800;
    }if (x === "A516M Gr  485") {
        document.getElementById("specificMinimumYieldStress2").value = 260;
        document.getElementById("modulusOfElasticity2").value = 190000;
        document.getElementById("pplate2").value = 7800;
    }if (x === "A662M Gr B") {
        document.getElementById("specificMinimumYieldStress2").value = 275;
        document.getElementById("modulusOfElasticity2").value = 175000;
        document.getElementById("pplate2").value = 7800;
    }if (x === "A662M Gr C") {
        document.getElementById("specificMinimumYieldStress2").value = 295;
        document.getElementById("modulusOfElasticity2").value = 241000;
        document.getElementById("pplate2").value = 7800;
    }if (x === "A537M Gr 1") {
        document.getElementById("specificMinimumYieldStress2").value = 345;
        document.getElementById("modulusOfElasticity2").value = 200000;
        document.getElementById("pplate2").value = 7800;
    }if (x === "A537M Gr 2") {
        document.getElementById("specificMinimumYieldStress2").value = 380;
        document.getElementById("modulusOfElasticity2").value = 200000;
        document.getElementById("pplate2").value = 7800;
    }if (x === "A633M Gr C") {
        document.getElementById("specificMinimumYieldStress2").value = 315;
        document.getElementById("modulusOfElasticity2").value = 200000;
        document.getElementById("pplate2").value = 7800;
    }if (x === "A633M Gr D") {
        document.getElementById("specificMinimumYieldStress2").value = 315;
        document.getElementById("modulusOfElasticity2").value = 205000;
        document.getElementById("pplate2").value = 7800;
    }
    if (x === "A737M Gr B ") {
        document.getElementById("specificMinimumYieldStress2").value = 345;
        document.getElementById("modulusOfElasticity2").value = 205000;
        document.getElementById("pplate2").value = 7800;
    }if (x === "A841M Classe 1 Gr A") {
        document.getElementById("specificMinimumYieldStress2").value = 345;
        document.getElementById("modulusOfElasticity2").value = 220000;
        document.getElementById("pplate2").value = 7800;
    }if (x === "A841M Classe 1 Gr B") {
        document.getElementById("specificMinimumYieldStress2").value = 345;
        document.getElementById("modulusOfElasticity2").value = 200000;
        document.getElementById("pplate2").value = 7800;
    }if (x === "A841M Classe 2 Gr A") {
        document.getElementById("specificMinimumYieldStress2").value = 415;
        document.getElementById("modulusOfElasticity2").value = 200000;
        document.getElementById("pplate2").value = 7800;
    }if (x === "A841M Classe 2 Gr B") {
        document.getElementById("specificMinimumYieldStress2").value = 415;
        document.getElementById("modulusOfElasticity2").value = 200000;
        document.getElementById("pplate2").value = 7800;
    }if (x === "G40.21M 260W") {
        document.getElementById("specificMinimumYieldStress2").value = 260;
        document.getElementById("modulusOfElasticity2").value = 190000;
        document.getElementById("pplate2").value = 7800;
    }if (x === "G40.21M 260WT") {
        document.getElementById("specificMinimumYieldStress2").value = 260;
        document.getElementById("modulusOfElasticity2").value = 190000;
        document.getElementById("pplate2").value = 7800;
    }if (x === "G40.21M 300W") {
        document.getElementById("specificMinimumYieldStress2").value = 300;
        document.getElementById("modulusOfElasticity2").value = 190000;
        document.getElementById("pplate2").value = 7800;
    }if (x === "G40.21M 300WT") {
        document.getElementById("specificMinimumYieldStress2").value = 300;
        document.getElementById("modulusOfElasticity2").value = 190000;
        document.getElementById("pplate2").value = 7800;
    }if (x === "G40.21M 350W") {
        document.getElementById("specificMinimumYieldStress2").value = 350;
        document.getElementById("modulusOfElasticity2").value = 190000;
        document.getElementById("pplate2").value = 7800;
    }if (x === "G40.21M 350WT") {
        document.getElementById("specificMinimumYieldStress2").value = 320;
        document.getElementById("modulusOfElasticity2").value = 190000;
        document.getElementById("pplate2").value = 7800;
    }if (x === "NS 235") {
        document.getElementById("specificMinimumYieldStress2").value = 235;
        document.getElementById("modulusOfElasticity2").value = 190000;
        document.getElementById("pplate2").value = 7800;
    }if (x === "NS 250") {
        document.getElementById("specificMinimumYieldStress2").value = 250;
        document.getElementById("modulusOfElasticity2").value = 190000;
        document.getElementById("pplate2").value = 7800;
    }if (x === "NS 275") {
        document.getElementById("specificMinimumYieldStress2").value = 275;
        document.getElementById("modulusOfElasticity2").value = 190000;
        document.getElementById("pplate2").value = 7800;
    }if (x === "ISO 630 S275 C") {
        document.getElementById("specificMinimumYieldStress2").value = 265;
        document.getElementById("modulusOfElasticity2").value = 190000;
        document.getElementById("pplate2").value = 7750;
    }if (x === "ISO 630 S275 D") {
        document.getElementById("specificMinimumYieldStress2").value = 265;
        document.getElementById("modulusOfElasticity2").value = 190000;
        document.getElementById("pplate2").value = 7750;
    }if (x === "ISO 630 S355 C") {
        document.getElementById("specificMinimumYieldStress2").value = 335;
        document.getElementById("modulusOfElasticity2").value = 190000;
        document.getElementById("pplate2").value = 7750;
    }if (x === "ISO 630 S355 D") {
        document.getElementById("specificMinimumYieldStress2").value = 335;
        document.getElementById("modulusOfElasticity2").value = 190000;
        document.getElementById("pplate2").value = 7750;
    }if (x === "EN 10025 S275 J0") {
        document.getElementById("specificMinimumYieldStress2").value = 265;
        document.getElementById("modulusOfElasticity2").value = 210000;
        document.getElementById("pplate2").value = 7850;
    }if (x === "EN 10025 S275 J2") {
        document.getElementById("specificMinimumYieldStress2").value = 265;
        document.getElementById("modulusOfElasticity2").value = 210000;
        document.getElementById("pplate2").value = 7850;
    }if (x === "EN 10025 S355 J0") {
        document.getElementById("specificMinimumYieldStress2").value = 335;
        document.getElementById("modulusOfElasticity2").value = 210000;
        document.getElementById("pplate2").value = 7850;
    }if (x === "EN 10025 S355 J2") {
        document.getElementById("specificMinimumYieldStress2").value = 335;
        document.getElementById("modulusOfElasticity2").value = 210000;
        document.getElementById("pplate2").value = 7850;
    }if (x === "EN 10025 S355 K2") {
        document.getElementById("specificMinimumYieldStress2").value = 335;
        document.getElementById("modulusOfElasticity2").value = 210000;
        document.getElementById("pplate2").value = 7850;
    }if (x === "ASTM A27M 60-30") {
        document.getElementById("specificMinimumYieldStress2").value = 207;
        document.getElementById("modulusOfElasticity2").value = 200000;
        document.getElementById("pplate2").value = 7800;
    }if (x === "ASTM A27M 65-35") {
        document.getElementById("specificMinimumYieldStress2").value = 242;
        document.getElementById("modulusOfElasticity2").value = 200000;
        document.getElementById("pplate2").value = 7800;
    }if (x === "Astm A216M WCB") {
        document.getElementById("specificMinimumYieldStress2").value = 485;
        document.getElementById("modulusOfElasticity2").value = 210000;
        document.getElementById("pplate2").value = 7800;
    }if (x === "Astm A216M WCC") {
        document.getElementById("specificMinimumYieldStress2").value = 500;
        document.getElementById("modulusOfElasticity2").value = 210000;
        document.getElementById("pplate2").value = 7800;
    }if (x === "Astm A216M WCA") {
        document.getElementById("specificMinimumYieldStress2").value = 500;
        document.getElementById("modulusOfElasticity2").value = 210000;
        document.getElementById("pplate2").value = 7800;
    }if (x === "ASTM A240M 304") {
        document.getElementById("specificMinimumYieldStress2").value = 207;
        document.getElementById("modulusOfElasticity2").value = 200000;
        document.getElementById("pplate2").value = 8000;
    }if (x === "ASTM A240M 316L") {
        document.getElementById("specificMinimumYieldStress2").value = 207;
        document.getElementById("modulusOfElasticity2").value = 200000;
        document.getElementById("pplate2").value = 8000;
    }if (x === "ASTM A240M 321") {
        document.getElementById("specificMinimumYieldStress2").value = 207;
        document.getElementById("modulusOfElasticity2").value = 200000;
        document.getElementById("pplate2").value = 8027;
    }if (x === "ASTM A240M 904L") {
        document.getElementById("specificMinimumYieldStress2").value = 214;
        document.getElementById("modulusOfElasticity2").value = 200000;
        document.getElementById("pplate2").value = 7900;
    }
    if (x === "ASTM A240M UNS S31254") {
        document.getElementById("specificMinimumYieldStress2").value = 310;
        document.getElementById("modulusOfElasticity2").value = 200000;
        document.getElementById("pplate2").value = 8000;
    }



}

function hide1() {
    document.getElementById("oor").value = 0;
    document.getElementById("oir").value = 0;
    document.getElementById("boh").value = 0;
    document.getElementById("bih").value = 0;
    document.getElementById("wb").value = 0;
    document.getElementById("oor").style.display = "none";
    document.getElementById("oir").style.display = "none";
    document.getElementById("boh").style.display = "none";
    document.getElementById("bih").style.display = "none";
    document.getElementById("wb").style.display = "none";
    document.getElementById("oor0").style.display = "none";
    document.getElementById("oir0").style.display = "none";
    document.getElementById("boh0").style.display = "none";
    document.getElementById("bih0").style.display = "none";
    document.getElementById("wb0").style.display = "none";
}


function numberOfAreas() {
    let n = parseInt(document.getElementById("noa").value);
    let x;
    for (let i = 1; i < 16; i++) {
        x = i.toString();
        document.getElementById(x).value = "";
        document.getElementById(x).style.display = "block";
        document.getElementById("0" + x).style.display = "block";


        document.getElementById("rnos" + x).style.display = "block";
        document.getElementById("r0" + x).style.display = "block";

        document.getElementById("lsp" + x).value = "";
        document.getElementById("lsp" + x).style.display = "block";
        document.getElementById("lsp0" + x).style.display = "block";

        document.getElementById("reff" + x).value = "";
        document.getElementById("reff" + x).style.display = "block";
        document.getElementById("reff0" + x).style.display = "block";


        document.getElementById("aeff" + x).value = "";
        document.getElementById("aeff" + x).style.display = "block";
        document.getElementById("aeff0" + x).style.display = "block";
        document.getElementById("aieff" + x).value = "";
        document.getElementById("aieff" + x).style.display = "block";
        document.getElementById("aieff0" + x).style.display = "block";

        document.getElementById("dl" + x).value = "";
        document.getElementById("dl" + x).style.display = "block";
        document.getElementById("dl0" + x).style.display = "block";
        document.getElementById("ll" + x).value = "";
        document.getElementById("ll" + x).style.display = "block";
        document.getElementById("ll0" + x).style.display = "block";

        document.getElementById("tl" + x).value = "";
        document.getElementById("tl" + x).style.display = "block";
        document.getElementById("tl0" + x).style.display = "block";
        document.getElementById("p" + x).value = "";
        document.getElementById("p" + x).style.display = "block";
        document.getElementById("p0" + x).style.display = "block";
        document.getElementById("as" + x).value = "";
        document.getElementById("as" + x).style.display = "block";
        document.getElementById("as0" + x).style.display = "block";

    }
    for (let i = 15; i > n; i--) {
        x = i.toString();
        document.getElementById(x).value = "Undefined";
        document.getElementById(x).style.display = "none";
        document.getElementById("0" + x).style.display = "none";

        document.getElementById("rnos" + x).value = "Undefined";
        document.getElementById("rnos" + x).style.display = "none";
        document.getElementById("r0" + x).style.display = "none";

        document.getElementById("lsp" + x).value = "Undefined";
        document.getElementById("lsp" + x).style.display = "none";
        document.getElementById("lsp0" + x).style.display = "none";

        document.getElementById("reff" + x).value = "Undefined";
        document.getElementById("reff" + x).style.display = "none";
        document.getElementById("reff0" + x).style.display = "none";

        document.getElementById("aeff" + x).value = "Undefined";
        document.getElementById("aeff" + x).style.display = "none";
        document.getElementById("aeff0" + x).style.display = "none";
        document.getElementById("aieff" + x).value = "Undefined";
        document.getElementById("aieff" + x).style.display = "none";
        document.getElementById("aieff0" + x).style.display = "none";

        document.getElementById("dl" + x).value = "Undefined";
        document.getElementById("dl" + x).style.display = "none";
        document.getElementById("dl0" + x).style.display = "none";
        document.getElementById("ll" + x).value = "Undefined";
        document.getElementById("ll" + x).style.display = "none";
        document.getElementById("ll0" + x).style.display = "none";

        document.getElementById("tl" + x).value = "Undefined";
        document.getElementById("tl" + x).style.display = "none";
        document.getElementById("tl0" + x).style.display = "none";
        document.getElementById("p" + x).value = "Undefined";
        document.getElementById("p" + x).style.display = "none";
        document.getElementById("p0" + x).style.display = "none";
        document.getElementById("as" + x).value = "Undefined";
        document.getElementById("as" + x).style.display = "none";
        document.getElementById("as0" + x).style.display = "none";


    }

    document.getElementById(n.toString()).onchange = function functionReff() {
        let n = parseInt(document.getElementById("noa").value);

        let oir = parseFloat(document.getElementById("oir").value);
        let x;
        let reff = 0;
        let reff1 = 0;
        for (let i = 1; i < n - 1; i++) {

            x = i.toString();
            reff1 = reff;
            reff = 0.5 * (parseFloat(document.getElementById(x).value) + parseFloat(document.getElementById((i + 1).toString()).value));
            document.getElementById("reff" + x).value = reff;
            if (i > 1) {
                document.getElementById("aeff" + x).value = (Math.PI * (Math.pow(reff, 2) - Math.pow(reff1, 2)));
            }

        }
        document.getElementById("aeff1").value = Math.PI * Math.pow(parseFloat(document.getElementById("reff1").value), 2);

        reff1 = 0.5 * (parseFloat(document.getElementById((n - 1).toString()).value) + (oir / 2));
        document.getElementById("reff" + (n - 1).toString()).value = reff1;
        document.getElementById("aeff" + (n - 1).toString()).value = Math.PI * (Math.pow(reff1, 2) - Math.pow(reff, 2));
        document.getElementById("reff" + n.toString()).value = (oir / 2);
        document.getElementById("aeff" + n.toString()).value = Math.PI * (Math.pow((oir / 2), 2) - (Math.pow(reff1, 2))).toFixed(3);


    }
    document.getElementById("rnos" + n.toString()).onchange = function functionAieff() {

        let wd = parseFloat(document.getElementById("wd").value);
        let adeck = parseFloat(document.getElementById("adeck").value);
        let rll = parseFloat(document.getElementById("rll").value);
        let wp = parseFloat(document.getElementById("wp").value);
        let aleg = parseFloat(document.getElementById("aleg").value);


        let tl = 0;
        for (let i = 1; i < n + 1; i++) {
            x = i.toString();


            let y = parseInt(document.getElementById("rnos" + x).value);
            let aieff = parseFloat(document.getElementById("aeff" + x).value) / parseFloat(document.getElementById("rnos" + x).value);
            document.getElementById("aieff" + x).value = aieff;
            let dl = wd * aieff / adeck * 9.81 / 1000;
            document.getElementById("dl" + x).value = dl;
            let ll = parseFloat(document.getElementById("aieff" + x).value) * rll / 1000000;
            document.getElementById("ll" + x).value = ll;
            if (i < n) {
                tl = ll + dl;
            } else {
                tl = ll + dl + wp / y * 9.81 / 1000;

            }
            document.getElementById("tl" + x).value = tl;
            document.getElementById("p" + x).value = tl / aleg * 1000;

        }


    }


}


function part4() {
    //  let oir = parseFloat(document.getElementById("oir").value);
//let td = parseFloat(document.getElementById("td").value);
//    let wd = parseFloat(document.getElementById("wd").value);
//let rll = parseFloat(document.getElementById("rll").value);
//    let wp = parseFloat(document.getElementById("wp").value);
    let pod = parseFloat(document.getElementById("pod").value);
    let slz = parseFloat(document.getElementById("slz").value);
    let pth = parseFloat(document.getElementById("pth").value);


    let pid = pod - (2 * pth);
    let aleg = (Math.PI / 4) * (Math.pow(pod, 2) - Math.pow(pid, 2));
    document.getElementById("rg").value = Math.sqrt(Math.pow(pod, 2) + Math.pow(pid, 2)) / 4;
    document.getElementById("aleg").value = aleg;
    document.getElementById("pid").value = pid;
}


function gData() {
    let di = parseFloat(document.getElementById("di").value);
    let rg = parseFloat(document.getElementById("rg").value);
    let w = parseFloat(document.getElementById("w").value);
    let hor = parseFloat(document.getElementById("hor").value);
    let hext = parseFloat(document.getElementById("hext").value);
    let ttp = parseFloat(document.getElementById("ttp").value);
    let tbp = parseFloat(document.getElementById("tbp").value);
    let tir = parseFloat(document.getElementById("tir").value);
    let hir = parseFloat(document.getElementById("hir").value);
    let tor = parseFloat(document.getElementById("tor").value);
    let oor = di - 2 * rg;
    document.getElementById("oor").value = oor;
    document.getElementById("oir").value = oor - 2 * w;
    document.getElementById("boh").value = hor - hext - ttp - tbp;
    document.getElementById("bih").value = hir - ttp - tbp;
    document.getElementById("wb").value = w - tir - tor;
    document.getElementById("oor").style.display = "block";
    document.getElementById("oir").style.display = "block";
    document.getElementById("boh").style.display = "block";
    document.getElementById("bih").style.display = "block";
    document.getElementById("wb").style.display = "block";
    document.getElementById("oor0").style.display = "block";
    document.getElementById("oir0").style.display = "block";
    document.getElementById("boh0").style.display = "block";
    document.getElementById("bih0").style.display = "block";
    document.getElementById("wb0").style.display = "block";


}

function outerRim() {
    let oor = document.getElementById("oor").value;
    let tor = document.getElementById("tor").value;
    let pplate = document.getElementById("pplate").value;
    let hor = document.getElementById("hor").value;
    document.getElementById("orw").value = (Math.PI * ((oor * pplate * hor * tor))) / Math.pow(10, 9);
}

function innerRim() {
    let hir = document.getElementById("hir").value;
    let oir = document.getElementById("oir").value;
    let pplate = document.getElementById("pplate").value;
    let tir = document.getElementById("tir").value;
    document.getElementById("irw").value = (3.14159 * oir * pplate * tir * hir) / Math.pow(10, 9);
}


function bulkheads() {
    let boh = parseFloat(document.getElementById("boh").value);
    let bih = parseFloat(document.getElementById("bih").value);
    let pplate = parseFloat(document.getElementById("pplate").value);
    let wb = parseFloat(document.getElementById("wb").value);
    let tb = parseFloat(document.getElementById("tb").value);
    let n = parseFloat(document.getElementById("n").value);
    document.getElementById("bw").value = (1 / 2) * (boh + bih) * tb * wb * n * pplate / Math.pow(10, 9);

}

function deckPlate() {
    let oir = parseFloat(document.getElementById("oir").value);
    let td = parseFloat(document.getElementById("td").value);
    let pplate = parseFloat(document.getElementById("pplate").value);
    document.getElementById("dpw").value = (Math.PI / 4) * (oir * oir) * td * pplate / Math.pow(10, 9);
}

function topPontoon() {
    let oor = parseFloat(document.getElementById("oor").value);
    let oir = parseFloat(document.getElementById("oir").value);
    let pplate = parseFloat(document.getElementById("pplate").value);
    let ttp = parseFloat(document.getElementById("ttp").value);
    document.getElementById("tpw").value = ((3.14159 / 4) * ((oor * oor) - (oir * oir)) * pplate * ttp) / Math.pow(10, 9);

}

function bottomPontoon() {
    let oor = parseFloat(document.getElementById("oor").value);
    let oir = parseFloat(document.getElementById("oir").value);
    let pplate = parseFloat(document.getElementById("pplate").value);
    let tbp = parseFloat(document.getElementById("tbp").value);
    document.getElementById("bpw").value = ((Math.PI / 4) * ((Math.pow(oor, 2)) - (Math.pow(oir, 2))) * pplate * tbp) / Math.pow(10, 9);
}

function pontoonLegs() {
    let np = parseFloat(document.getElementById("np").value);
    let pls = parseFloat(document.getElementById("plsw").value);
    let pll = parseFloat(document.getElementById("pll").value);
    document.getElementById("plw").value = ((np * pls * pll) / 1000);

}

function pontoonLegsHousing() {
    let np = parseFloat(document.getElementById("np").value);
    let plh = parseFloat(document.getElementById("plhweight").value);
    let plhl = parseFloat(document.getElementById("plhl").value);
    document.getElementById("plhw").value = (np * plh * plhl) / 1000;

}

function deckLegs() {
    let nd = parseFloat(document.getElementById("nd").value);
    let plh = parseFloat(document.getElementById("DlsWeight").value);
    let plhl = parseFloat(document.getElementById("dll").value);
    document.getElementById("dlw").value = (nd * plh * plhl) / 1000;

}

function deckLegsHousing() {
    let np = document.getElementById("nd").value;
    let plh = document.getElementById("DlhWeight").value;
    let plhl = document.getElementById("dlhl").value;
    document.getElementById("dlhw").value = (np * plh * plhl) / 1000;

}

function rafters() {
    let w = document.getElementById("w").value;
    let rf = document.getElementById("rf").value;
    let rafterWeight = document.getElementById("rafterWeight").value;
    document.getElementById("rw").value = w / 1000 * rf * rafterWeight;
    let hor = parseFloat(document.getElementById("hor").value);
    let hir = parseFloat(document.getElementById("hir").value);
    let hext = parseFloat(document.getElementById("hext").value);
    let postWeight = parseFloat(document.getElementById("postWeight").value);
    let postNos = parseFloat(document.getElementById("pt").value);

    document.getElementById("pw").value = (((hir + hor - hext) / 2) / 1000) * postNos * postWeight;
}


function wPontoon() {
    let dlhw = parseFloat(document.getElementById("dlhw").value);
    let tpw = parseFloat(document.getElementById("tpw").value);
    let bpw = parseFloat(document.getElementById("bpw").value);
    let irw = parseFloat(document.getElementById("irw").value);
    let orw = parseFloat(document.getElementById("orw").value);
    let bw = parseFloat(document.getElementById("bw").value);
    let plw = parseFloat(document.getElementById("plw").value);
    let plhw = parseFloat(document.getElementById("plhw").value);
    let paw = parseFloat(document.getElementById("paw").value);
    let rw = parseFloat(document.getElementById("rw").value);
    let pw = parseFloat(document.getElementById("pw").value);
    let dpw = parseFloat(document.getElementById("dpw").value);
    let dlw = parseFloat(document.getElementById("dlw").value);
    let daw = parseFloat(document.getElementById("daw").value);
    let wp = tpw + bpw + irw + orw + bw + plhw + plw + paw + rw + pw;
    let wd = dpw + dlw + daw + dlhw;
    document.getElementById("wp").value = wp;
    document.getElementById("wd").value = wd;
    document.getElementById("wr").value = wp + wd;
}

function volume1() {
    let h1 = parseFloat(document.getElementById("h1").value);
    let oir = parseFloat(document.getElementById("oir").value);
    let w = parseFloat(document.getElementById("w").value);
    document.getElementById("v1").value = (Math.PI * 0.5 * h1 * 1.6 * ((oir + 2 * 2 / 3 * w) / 1000));
    let h2 = parseFloat(document.getElementById("h2").value);
    let oor = parseFloat(document.getElementById("oor").value);
    document.getElementById("v2").value = Math.PI * h2 * 1.6 * (((oir + oor) / 2) / 1000);
}


function volume3() {
    let h3 = parseFloat(document.getElementById("h3").value);
    let oir = parseFloat(document.getElementById("oir").value);
    let w = parseFloat(document.getElementById("w").value);
    let v1 = parseFloat(document.getElementById("v1").value);
    let v2 = parseFloat(document.getElementById("v2").value);
    let v3 = (0.5 * h3 * 1.6 * ((oir + 2 * 2 / 3 * w) / 1000)) * Math.PI;
    document.getElementById("v3").value = v3;
    document.getElementById("vol").value = v1 + v2 + v3;
}

function tdE() {
    let wd = document.getElementById("wd").value;
    let dpw = document.getElementById("dpw").value;
    let td = document.getElementById("td").value;
    let pplate = document.getElementById("pplate").value;
    let pproduct = document.getElementById("pproduct").value;
    document.getElementById("tde").value = (wd / dpw) * td;
    document.getElementById("dd").value = ((pplate / (pproduct * 1000))) * (wd / dpw) * td;
    operationFloatation();

}

function operationFloatation() {
    let wp = parseFloat(document.getElementById("wp").value);
    let pp = parseFloat(document.getElementById("pproduct").value);
    let oor = parseFloat(document.getElementById("oor").value);
    let oir = parseFloat(document.getElementById("oir").value);
    let v1 = parseFloat(document.getElementById("v1").value);
    let dd = parseFloat(document.getElementById("dd").value);


    let vd = wp / (pp * 1000);
    document.getElementById("pdv").value = vd;
    let dp = (vd - v1) * Math.pow(1000, 3) / ((Math.PI / 4) * (Math.pow(oor, 2) - Math.pow(oir, 2)));
    document.getElementById("dp").value = dp;
    document.getElementById("diffh").value = dp - dd;


    /*

       let h1 = parseFloat(document.getElementById("h1").value);
           let w = parseFloat(document.getElementById("w").value);
           let h = parseFloat(document.getElementById("h").value);
           let v1 = parseFloat(document.getElementById("v1").value);
           let v1 = parseFloat(document.getElementById("v1").value);
           */

}


function accumulatedRainWater() {
    let oor = parseFloat(document.getElementById("oor").value);
    let hrain = parseFloat(document.getElementById("hrain").value);
    let wroof = parseFloat(document.getElementById("wr").value);
    let pp = parseFloat(document.getElementById("pproduct").value);
    let v1 = parseFloat(document.getElementById("v1").value);
    let va = parseFloat(document.getElementById("va").value);
    let oir = parseFloat(document.getElementById("oir").value);
    let adeck = (Math.PI / 4) * Math.pow(oir, 2);
    let vrain = adeck * hrain / 1000000000;
    let wrain = vrain * 1000;
    let vdisplacement = (((wroof + wrain) * 1000) / (pp * 1000)) / 1000;
    document.getElementById("hdeckr").value = ((vdisplacement - v1 - va) / ((Math.PI / 4) * Math.pow((oor / 1000), 2))) * 1000;
    document.getElementById("adeck").value = adeck;
    document.getElementById("vrain").value = vrain;
    document.getElementById("wrain").value = wrain;
    document.getElementById("vdisplacement").value = vdisplacement;
    document.getElementById("alpha").value = oir / 2;

}

function centreDeckStress() {
    let v = parseFloat(document.getElementById("pr").value);
    document.getElementById("k1").value = (5.33 / (1 - Math.pow(v, 2)));
    document.getElementById("k2").value = (2.6 / (1 - Math.pow(v, 2)));
    document.getElementById("k31").value = (2 / (1 - v));
    document.getElementById("k32").value = (4 / (1 - Math.pow(v, 2)));
    document.getElementById("k41").value = 0.976;
    document.getElementById("k42").value = 1.73;


}

function noRainWater() {
    let dd = parseFloat(document.getElementById("dd").value);
    let wd = parseFloat(document.getElementById("wd").value);
    let oir = parseFloat(document.getElementById("oir").value);
    let rll = parseFloat(document.getElementById("rll").value);
    let k2 = parseFloat(document.getElementById("k2").value);
    let alpha = parseFloat(document.getElementById("alpha").value);
    let e = parseFloat(document.getElementById("e").value);
    let t = parseFloat(document.getElementById("t").value);
    let k1 = parseFloat(document.getElementById("k1").value);
    let k31 = parseFloat(document.getElementById("k31").value);
    let k41 = parseFloat(document.getElementById("k41").value);
    let k32 = parseFloat(document.getElementById("k32").value);
    let k42 = parseFloat(document.getElementById("k42").value);

    let q1;
    let pproduct = parseFloat(document.getElementById("pproduct").value);
    if (Math.abs(9.8 * (wd - (3.14 / 4) * Math.pow(oir, 2)
        * dd * pproduct * 1000 / 1000000000) / ((3.14 / 4)
        * Math.pow(oir, 2))) > Math.abs(9.8 * (wd - (3.14 / 4) * Math.pow(oir, 2)
        * dd * pproduct * 1000 / 1000000000) / ((3.14 / 4) * Math.pow(oir, 2)) + rll / 1000)) {

        q1 = 9.8 * (wd - (3.14 / 4) * Math.pow(oir, 2) * dd * pproduct * 1000 / 1000000000) / ((3.14 / 4) * Math.pow(oir, 2));
    } else {
        q1 = 9.8 * (wd - (3.14 / 4) * Math.pow(oir, 2) * dd * pproduct * 1000 / 1000000000) / ((3.14 / 4) * Math.pow(oir, 2)) + rll / 1000;
    }
    document.getElementById("q1").value = q1;

    let y1 = Math.abs(cubic((k2 / (Math.pow(t, 3))), 0, (k1 / t), ((q1 * Math.pow(alpha, 4)) / (e * Math.pow(t, 4)))));
    document.getElementById("y1").value = y1;
    document.getElementById("otc1").value = (k31 * y1 / t + k41 * Math.pow(y1 / t, 2)) * (e * Math.pow(t, 2) / Math.pow(alpha, 2));
    document.getElementById("obc1").value = k31 * y1 * e * t / Math.pow(alpha, 2);
    document.getElementById("odc1").value = k41 * Math.pow(y1, 2) * e / Math.pow(alpha, 2);
    document.getElementById("ote1").value = (k32 * y1 / t + k42 * Math.pow(y1 / t, 2)) * (e * Math.pow(t, 2) / Math.pow(alpha, 2));
    document.getElementById("obe1").value = k32 * y1 * e * t / Math.pow(alpha, 2);
    document.getElementById("ode1").value = k42 * Math.pow(y1, 2) * e / Math.pow(alpha, 2);
    document.getElementById("rh1").value = (k42 * Math.pow(y1, 2) * e / Math.pow(alpha, 2)) * t;

}

function rainWater() {
    let hrain = parseFloat(document.getElementById("hrain1").value);
    let oir = parseFloat(document.getElementById("oir").value);
    let hdeckr = parseFloat(document.getElementById("hdeckr").value);
    let pp = parseFloat(document.getElementById("pproduct").value);
    let wd = parseFloat(document.getElementById("wd").value);
    let a = (oir) / 2;
    let adeck = (Math.PI / 4) * (Math.pow(oir, 2));
    let vrain = adeck * hrain / Math.pow(1000, 3);
    let wrain = vrain * 1000;
    let ubl = ((Math.PI / 4) * Math.pow(oir, 2) * hdeckr * pp * 1000) / 1000000000;
    let dl = wrain + wd;
    let ndfad = Math.abs((ubl - dl) / (adeck / 1000000));
    let q2 = ndfad * 9.81 / 1000000;
    document.getElementById("q2").value = q2;
    document.getElementById("adeck1").value = adeck;
    document.getElementById("vrain1").value = vrain;
    document.getElementById("wrain").value = wrain;
    document.getElementById("ubl").value = ubl;
    document.getElementById("ndfad").value = ndfad;
    document.getElementById("dl").value = dl;


    let k2 = parseFloat(document.getElementById("k2").value);
    let alpha = parseFloat(document.getElementById("alpha").value);
    let e = parseFloat(document.getElementById("e").value);
    let t = parseFloat(document.getElementById("t").value);
    let k1 = parseFloat(document.getElementById("k1").value);
    let k31 = parseFloat(document.getElementById("k31").value);
    let k41 = parseFloat(document.getElementById("k41").value);
    let k32 = parseFloat(document.getElementById("k32").value);
    let k42 = parseFloat(document.getElementById("k42").value);


    let y1 = Math.abs(cubic((k2 / (Math.pow(t, 3))), 0, (k1 / t), ((q2 * Math.pow(alpha, 4)) / (e * Math.pow(t, 4)))));
    document.getElementById("y2").value = y1;
    document.getElementById("otc2").value = (k31 * y1 / t + k41 * Math.pow(y1 / t, 2)) * (e * Math.pow(t, 2) / Math.pow(alpha, 2));
    document.getElementById("obc2").value = k31 * y1 * e * t / Math.pow(alpha, 2);
    document.getElementById("odc2").value = k41 * Math.pow(y1, 2) * e / Math.pow(alpha, 2);
    document.getElementById("ote2").value = (k32 * y1 / t + k42 * Math.pow(y1 / t, 2)) * (e * Math.pow(t, 2) / Math.pow(alpha, 2));
    document.getElementById("obe2").value = k32 * y1 * e * t / Math.pow(alpha, 2);
    document.getElementById("ode2").value = k42 * Math.pow(y1, 2) * e / Math.pow(alpha, 2);
    document.getElementById("rh2").value = (k42 * Math.pow(y1, 2) * e / Math.pow(alpha, 2)) * t;


}


function myFunction() {

    let tir = parseFloat(document.getElementById("tir").value);
    let hir = parseFloat(document.getElementById("hir").value);
    let tpl = parseFloat(document.getElementById("tpl").value);
    let bpl = parseFloat(document.getElementById("bpl").value);
    let ttp = parseFloat(document.getElementById("ttp").value);
    let horwep = parseFloat(document.getElementById("horwep").value);
    let tor = parseFloat(document.getElementById("tor").value);
    let tbp = parseFloat(document.getElementById("tbp").value);
    let piw = parseFloat(document.getElementById("piw").value);

    let a1 = tir * hir;
    let a2 = tpl * ttp;
    let a3 = bpl * tbp;
    let a4 = horwep * tor;
    let ta = a1 + a2 + a3 + a4;

    let y1 = tir / 2;
    let y2 = 0.5 * piw + tir;
    let y3 = 0.5 * piw + tir;
    let y4 = 0.5 * tor + piw + tir;
    let tay = a1 * y1 + a2 * y2 + a3 * y3 + a4 * y4;
    let c1 = tay / ta;
    let h1 = Math.abs(y1 - c1);
    let h2 = Math.abs(y2 - c1);
    let h3 = Math.abs(y3 - c1);
    let h4 = Math.abs(y4 - c1);

    document.getElementById("ta1").value = a1;
    document.getElementById("ta2").value = a2;
    document.getElementById("ta3").value = a3;
    document.getElementById("ta4").value = a4;
    document.getElementById("ty1").value = y1;
    document.getElementById("ty2").value = y2;
    document.getElementById("ty3").value = y3;
    document.getElementById("ty4").value = y4;
    document.getElementById("th1").value = h1;
    document.getElementById("th2").value = h2;
    document.getElementById("th3").value = h3;
    document.getElementById("th4").value = h4;
    document.getElementById("tay1").value = a1 * y1;
    document.getElementById("tay2").value = a2 * y2;
    document.getElementById("tay3").value = a3 * y3;
    document.getElementById("tay4").value = a4 * y4;
    document.getElementById("tah1").value = a1 * Math.pow(h1, 2);
    document.getElementById("tah2").value = a2 * Math.pow(h2, 2);
    document.getElementById("tah3").value = a3 * Math.pow(h3, 2);
    document.getElementById("tah4").value = a4 * Math.pow(h4, 2);
    document.getElementById("ti1").value = Math.abs((hir * Math.pow(tir, 3)) / 12);
    document.getElementById("ti2").value = Math.abs((ttp * Math.pow(tpl, 3)) / 12);
    document.getElementById("ti3").value = Math.abs((tbp * Math.pow(bpl, 3)) / 12);
    document.getElementById("ti4").value = Math.abs((horwep * Math.pow(tor, 3)) / 12);
    document.getElementById("tot1").value = ta;
    document.getElementById("tot3").value = tay;
    let tah = a1 * Math.pow(h1, 2) + a2 * Math.pow(h2, 2) + a3 * Math.pow(h3, 2) + a4 * Math.pow(h4, 2);
    document.getElementById("tot5").value = tah;
    let ti = Math.abs((hir * Math.pow(tir, 3)) / 12) + Math.abs((ttp * Math.pow(tpl, 3)) / 12) + Math.abs((tbp * Math.pow(bpl, 3)) / 12) + Math.abs((horwep * Math.pow(tor, 3)) / 12);
    document.getElementById("tot6").value = ti;

    let lx = ti + tah;


    document.getElementById("za").value = (lx / Math.max(c1, ((piw + tir + tor) - c1)))
    document.getElementById("lx").value = lx;
    document.getElementById("c1").value = c1;
}


function pontoonStressDesign() {
    let sy = parseFloat(document.getElementById("sy").value);
    let oir = parseFloat(document.getElementById("oir").value);
    let rh1 = parseFloat(document.getElementById("rh1").value);
    let rh2 = parseFloat(document.getElementById("rh2").value);
    let za = parseFloat(document.getElementById("za").value);
    let ta = parseFloat(document.getElementById("tot1").value);


    let nlp = Math.PI * oir;
    let a = 0.5 * 360 / nlp;
    let fb = (2 / 3) * sy;
    let fc = 0.6 * sy;


    document.getElementById("fb").value = fb;
    document.getElementById("fc").value = fc;
    document.getElementById("nlp").value = nlp;
    document.getElementById("a0").value = a;


    a = a * (Math.PI / 180)


    let bm1 = ((rh1 * oir) / 4) * ((1 / Math.sin(a)) - (1 / a));
    let bm2 = ((rh1 * oir) / 4) * ((1 / a) - (1 / Math.tan(a)));
    let cf1 = rh1 / (2 * Math.sin(a));
    let cf2 = rh1 / (2 * Math.tan(a));
    let bs1 = bm1 / za;
    let bs2 = bm2 / za;
    let cs1 = cf1 / ta;
    let cs2 = cf2 / ta;
    let uc1 = (bs1 / fb) + (cs1 / fc);
    let uc2 = (bs2 / fb) + (cs2 / fc);
    document.getElementById("c11").value = bm1;
    document.getElementById("c12").value = bm2;

    document.getElementById("c21").value = cf1;
    document.getElementById("c22").value = cf2;

    document.getElementById("c31").value = bs1;
    document.getElementById("c32").value = bs2;

    document.getElementById("c41").value = cs1;
    document.getElementById("c42").value = cs2;

    document.getElementById("c51").value = fb;
    document.getElementById("c52").value = fb;
    document.getElementById("c61").value = fc;
    document.getElementById("c62").value = fc;


    document.getElementById("c71").value = uc1;
    document.getElementById("c72").value = uc2;

    document.getElementById("c81").value = condition(uc1);
    document.getElementById("c82").value = condition(uc2);


    function condition(x) {
        if (Math.abs(x) < 1) {
            return "valid";
        } else {
            return "not valid";
        }
    }

    bm1 = ((rh2 * oir) / 4) * ((1 / Math.sin(a)) - (1 / a));
    bm2 = (-1) * ((rh2 * oir) / 4) * ((1 / a) - (1 / Math.tan(a)));
    cf1 = rh2 / (2 * Math.sin(a));
    cf2 = rh2 / (2 * Math.tan(a));
    bs1 = bm1 / za;
    bs2 = bm2 / za;
    cs1 = cf1 / ta;
    cs2 = cf2 / ta;
    uc1 = (bs1 / fb) + (cs1 / fc);
    uc2 = (bs2 / fb) + (cs2 / fc);
    document.getElementById("e11").value = bm1;
    document.getElementById("e12").value = bm2;

    document.getElementById("e21").value = cf1;
    document.getElementById("e22").value = cf2;

    document.getElementById("e31").value = bs1;
    document.getElementById("e32").value = bs2;

    document.getElementById("e41").value = cs1;
    document.getElementById("e42").value = cs2;

    document.getElementById("e51").value = fb;
    document.getElementById("e52").value = fb;
    document.getElementById("e61").value = fc;
    document.getElementById("e62").value = fc;


    document.getElementById("e71").value = uc1;
    document.getElementById("e72").value = uc2;

    document.getElementById("e81").value = condition(uc1);
    document.getElementById("e82").value = condition(uc2);


}


function operationFloatationLevel() {

    let oor = parseFloat(document.getElementById("oor").value);
    let bih = parseFloat(document.getElementById("bih").value);
    let wr = parseFloat(document.getElementById("wr").value);
    //  let h=parseFloat(document.getElementById("h").value);
    let pp = parseFloat(document.getElementById("pproduct").value);

    let v2 = parseFloat(document.getElementById("v2").value);
    let v1 = parseFloat(document.getElementById("v1").value);
    let dp = parseFloat(document.getElementById("dp").value);
    let dd = parseFloat(document.getElementById("dd").value);

    let va = ((dp - dd) / bih) * v2;
    let vr = wr / (pp * 1000);
    document.getElementById("hdeck").value = (vr - v1 - va) / ((Math.PI / 4) * (Math.pow((oor / 1000), 2))) * 1000;
    document.getElementById("v12").value = v1;
    document.getElementById("va").value = va;
    document.getElementById("vr").value = vr;


}

function allowableStress() {
    let k = parseFloat(document.getElementById("elf").value);
    let l = parseFloat(document.getElementById("lsp1").value);
    let rx = parseFloat(document.getElementById("rg").value);
    let e = parseFloat(document.getElementById("modulusOfElasticity2").value);
    let sy = parseFloat(document.getElementById("specificMinimumYieldStress2").value);
    let lambda = k * l / rx;
    let cc = Math.sqrt((2 * Math.pow(Math.PI, 2) * e) / sy);
    document.getElementById("sr").value = lambda;
    document.getElementById("cc").value = cc;
    let c1 = ((1 - (Math.pow(lambda, 2) / (2 * Math.pow(cc, 2)))) * sy) / ((5 / 3) + (3 * lambda / (8 * cc)) - Math.pow(lambda, 3) / (8 * Math.pow(cc, 3)));
    let c2 = ((12 * Math.pow(Math.PI, 2) * e) / (23 * Math.pow(lambda, 2)));
    let c;
    if (lambda < cc) {
        c = c1;
    } else if (lambda <= 120) {
        c = c2;
    } else if (lambda <= 200) {

        c = (Math.min(c1, c2) / (1.6 - (lambda / 200)));

    }
    document.getElementById("scall").value = parseFloat(c).toFixed(3);
    let n = parseInt(document.getElementById("noa").value);
    let x;
    for (let i = 1; i < n + 1; i++) {
        x = i.toString();
        if ((c - parseFloat(document.getElementById("p" + x).value)) > 0) {
            document.getElementById("as" + x).value = "Satisfactory";
        }
        else
            document.getElementById("as" + x).value = "Unsatisfactory"
    }
}

function showTab(n) {
    // This function will display the specified tab of the form...
    let x = document.getElementsByClassName("tab");

    for (let i = 0; i < x.length; i++) {
        if (i === n) {
            x[i].style.setProperty("display", "flex", "important");
        } else {
            x[i].style.setProperty("display", "none", "important");
        }
    }
    //... and fix the Previous/Next buttons:
    if (n === 0) {
        document.getElementById("prevBtn").style.display = "none";
    } else {
        document.getElementById("prevBtn").style.display = "inline";
    }
    if (n === (x.length - 1)) {
        document.getElementById("nextBtn").innerHTML = "Submit";
    } else {
        document.getElementById("nextBtn").innerHTML = "Next";
    }
    //... and run a function that will display the correct step indicator:
    fixStepIndicator(n)
}

function nextPrev(n) {
    // This function will figure out which tab to display
    let x = document.getElementsByClassName("tab");
    // Exit the function if any field in the current tab is invalid:
    if (n === 1 && !validateForm()) return false;
    // Hide the current tab:
    x[currentTab].style.display = "none";
    // Increase or decrease the current tab by 1:
    currentTab = currentTab + n;
    // if you have reached the end of the form...
    if (currentTab >= x.length) {
        // ... the form gets submitted:
        document.getElementById("regForm").submit();
        return false;
    }
    // Otherwise, display the correct tab:
    showTab(currentTab);
}

function validateForm() {
    // This function deals with validation of the form fields
    let x, y, i, valid = true;
    x = document.getElementsByClassName("tab");
    y = x[currentTab].getElementsByTagName("input");
    // A loop that checks every input field in the current tab:
    for (i = 0; i < y.length; i++) {
        // If a field is empty...
        if (y[i].value === "") {
            // add an "invalid" class to the field:
            y[i].className += " invalid";
            // and set the current valid status to false
            valid = false;
        }
    }
    // If the valid status is true, mark the step as finished and valid:
    if (valid) {
        document.getElementsByClassName("step")[currentTab].className += " finish";
    }
    return valid; // return the valid status
}

function cubic(a, b, c, d) {
    let pi, q, del;
    pi = Math.PI;
    e = Math.E;

    let x = [];


    for (k = 0; k <= 2; k++) {
        x[k] = 0;
    }

    with (Math) {
        a = eval(a);
        b = eval(b);
        c = eval(c);
        d = eval(d);
        vt = -b / 3 / a;
        mvt = -vt;
        p = c / a - b * b / 3 / a / a;
        q = b * b * b / a / a / a / 13.5 + d / a - b * c / 3 / a / a;
        if (abs(p) < 1e-14) {
            p = 0
        }
        if (abs(q) < 1e-14) {
            q = 0
        }
        del = q * q / 4 + p * p * p / 27;
        if (abs(del) < 1e-14) {
            del = 0
        }


        if (del <= 0) {
            if (p !== 0) {
                kos = -q / 2 / sqrt(-p * p * p / 27);
                r = sqrt(-p / 3)
            } else {
                kos = 0;
                r = 0
            }  // vu que del<=0, si p=0, alors del=0
            if (abs(kos === 1)) {
                alpha = -pi * (kos - 1) / 2
            } else {
                alpha = acos(kos)
            }
            for (k = 0; k <= 2; k++) {
                xk = 2 * r * cos((alpha + 2 * k * pi) / 3) + vt;
                x[k] = arrondi(xk)
            }
            if (r === 0) {
                triple = "Solution triple :"
            } else {
                triple = "Trois solutions :"
            }
            return Math.max(x[0], x[1], x[2]);
        }
// ----------- fin if
        else {
            xuni = arrondi(uv(1) + uv(-1) + vt);
            return xuni;
        } //---------------------------------- fin else if(del<=0)
    } // fin with
    // ----------------------------------fin procedure

    function uv(sg) {
        with (Math) {
            r = sqrt(del);
            z = -q / 2 + sg * r;
            return sgn(z) * pow(abs(z), 1 / 3)
        }
    }

    function sgn(x) {
        s = (x > 0) - (x < 0);
        return s
    }

    function arrondi(x) {
        return sgn(x) * Math.floor(Math.abs(x) * 1e10 + .5) / 1e10
    }
}

function fixStepIndicator(n) {
    // This function removes the "active" class of all steps...
    let i, x = document.getElementsByClassName("step");
    for (i = 0; i < x.length; i++) {
        x[i].className = x[i].className.replace(" active", "");
    }
    //... and adds the "active" class on the current step:
    x[n].className += " active";
}

$(function () {
    $(document).ready(function () {
        let i, stop;
        i = 1;
        stop = 4; //num elements
        setInterval(function () {
            if (i > stop) {
                return;
            }
            $('#len' + (i++)).toggleClass('bounce');
        }, 500)
    });
});
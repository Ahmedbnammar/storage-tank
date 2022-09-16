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
        x=i.toString();
        document.getElementById(x).value = "";
        document.getElementById(x).style.display = "block";
        document.getElementById("0" + x).style.display = "block";


        document.getElementById("r"+x).value = "";
        document.getElementById("r"+x).style.display = "block";
        document.getElementById("r0" + x).style.display = "block";

        document.getElementById("lsp"+x).value = "";
        document.getElementById("lsp"+x).style.display = "block";
        document.getElementById("lsp0" + x).style.display = "block";

        document.getElementById("reff"+x).value = "";
        document.getElementById("reff"+x).style.display = "block";
        document.getElementById("reff0" + x).style.display = "block";


        document.getElementById("aeff"+x).value = "";
        document.getElementById("aeff"+x).style.display = "block";
        document.getElementById("aeff0" + x).style.display = "block";
        document.getElementById("aieff"+x).value = "";
        document.getElementById("aieff"+x).style.display = "block";
        document.getElementById("aieff0" + x).style.display = "block";

        document.getElementById("dl"+x).value = "";
        document.getElementById("dl"+x).style.display = "block";
        document.getElementById("dl0" + x).style.display = "block";
        document.getElementById("ll"+x).value = "";
        document.getElementById("ll"+x).style.display = "block";
        document.getElementById("ll0" + x).style.display = "block";

    }

    for (let i = 15; i > n; i--) {
        x=i.toString()  ;
        document.getElementById(x).value = 0;
        document.getElementById(x).style.display = "none";
        document.getElementById("0"+x).style.display = "none";

        document.getElementById("r"+x).value = 0;
        document.getElementById("r"+x).style.display = "none";
        document.getElementById("r0"+x).style.display = "none";

        document.getElementById("lsp"+x).value = 0;
        document.getElementById("lsp"+x).style.display = "none";
        document.getElementById("lsp0"+x).style.display = "none";

        document.getElementById("reff"+x).value = 0;
        document.getElementById("reff"+x).style.display = "none";
        document.getElementById("reff0"+x).style.display = "none";

        document.getElementById("aeff"+x).value = 0;
        document.getElementById("aeff"+x).style.display = "none";
        document.getElementById("aeff0"+x).style.display = "none";
        document.getElementById("aieff"+x).value = 0;
        document.getElementById("aieff"+x).style.display = "none";
        document.getElementById("aieff0"+x).style.display = "none";

        document.getElementById("dl"+x).value = 0;
        document.getElementById("dl"+x).style.display = "none";
        document.getElementById("dl0"+x).style.display = "none";
        document.getElementById("ll"+x).value = 0;
        document.getElementById("ll"+x).style.display = "none";
        document.getElementById("ll0"+x).style.display = "none";


    }


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
    var oor = document.getElementById("oor").value;
    var tor = document.getElementById("tor").value;
    var pplate = document.getElementById("pplate").value;
    var hor = document.getElementById("hor").value;
    document.getElementById("orw").value = ((3.14159 / 4) * ((oor * pplate * hor * tor)));
}

function innerRim() {
    var hir = document.getElementById("hir").value;
    var oir = document.getElementById("oir").value;
    var pplate = document.getElementById("pplate").value;
    var tir = document.getElementById("tir").value;
    document.getElementById("irw").value = (3.14159 * oir * pplate * tir * hir);
}


function bulkheads() {
    var boh = parseFloat(document.getElementById("boh").value);
    var bih = parseFloat(document.getElementById("bih").value);
    var pplate = parseFloat(document.getElementById("pplate").value);
    var wb = parseFloat(document.getElementById("wb").value);
    var tb = parseFloat(document.getElementById("tb").value);
    var n = parseFloat(document.getElementById("n").value);
    document.getElementById("bw").value = (1 / 2) * (boh + bih) * tb * wb * n * pplate;

}

function deckPlate() {
    var oir = document.getElementById("oir").value;
    var td = document.getElementById("td").value;
    var pplate = document.getElementById("pplate").value;
    document.getElementById("dpw").value = (3.14159 / 4) * (oir * oir) * td * pplate;
}

function topPontoon() {
    var oor = parseFloat(document.getElementById("oor").value);
    var oir = parseFloat(document.getElementById("oir").value);
    var pplate = parseFloat(document.getElementById("pplate").value);
    var ttp = parseFloat(document.getElementById("ttp").value);
    //document.getElementById("tpw").value = ((3.14159 / 4) * ((oor * oor) - (oir * oir)) * pplate * ttp);
    document.getElementById("tpw").value = oor;
}

function bottomPontoon() {
    var oor = document.getElementById("oor").value;
    var oir = document.getElementById("oir").value;
    var pplate = document.getElementById("pplate").value;
    var tbp = document.getElementById("tbp").value;
    document.getElementById("bpw").value = ((3.14159 / 4) * ((oor * oor) - (oir * oir)) * pplate * tbp);
}

function pontoonLegs() {
    var np = document.getElementById("np").value;
    var pls = document.getElementById("pls").value;
    var pll = document.getElementById("pll").value;
    document.getElementById("plw").value = (np * pls * pll) / 1000;

}

function pontoonLegsHousing() {
    var np = document.getElementById("np").value;
    var plh = document.getElementById("plh").value;
    var plhl = document.getElementById("plhl").value;
    document.getElementById("plhw").value = (np * plh * plhl) / 1000;

}

function deckLegs() {
    var np = document.getElementById("nd").value;
    var plh = document.getElementById("dls").value;
    var plhl = document.getElementById("dll").value;
    document.getElementById("dlw").value = (np * plh * plhl) / 1000;

}

function deckLegsHousing() {
    var np = document.getElementById("nd").value;
    var plh = document.getElementById("dlh").value;
    var plhl = document.getElementById("dlhl").value;
    document.getElementById("dlhw").value = (np * plh * plhl) / 1000;

}

function rafters() {
    var w = document.getElementById("w").value;
    var rafterNos = document.getElementById("rafterNos").value;
    var rafterWeight = document.getElementById("rafterWeight").value;
    document.getElementById("rw").value = rafterNos * w * rafterWeight;
    var hor = parseFloat(document.getElementById("hor").value);
    var hir = parseFloat(document.getElementById("hir").value);
    var hext = parseFloat(document.getElementById("hext").value);
    var postWeight = parseFloat(document.getElementById("postWeight").value);
    var postNos = parseFloat(document.getElementById("postNos").value);

    document.getElementById("pw").value = parseFloat(((hir + hor - hext) / 1000) * postNos * postWeight);
}


function wPontoon() {
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
    let wd = dpw + dlw + daw;
    document.getElementById("wp").value = wp;
    document.getElementById("wd").value = wd;
    document.getElementById("wr").value = wp + wd;
}

function volume1() {
    var h1 = parseFloat(document.getElementById("h1").value);
    var oir = parseFloat(document.getElementById("oir").value);
    var w = parseFloat(document.getElementById("w").value);
    document.getElementById("v1").value = (0.5 * h1 * 1.6 * (((oir + 2) * 2) / 3 * w) / 100);
    var h2 = parseFloat(document.getElementById("h2").value);
    var oor = parseFloat(document.getElementById("oor").value);
    document.getElementById("v2").value = h2 * 1.6 * (((oir + oor) / 2) / 100);
}


function volume3() {
    var h3 = parseFloat(document.getElementById("h3").value);
    var oir = parseFloat(document.getElementById("oir").value);
    var w = parseFloat(document.getElementById("w").value);
    var v1 = parseFloat(document.getElementById("v1").value);
    var v2 = parseFloat(document.getElementById("v2").value);
    var v3 = (0.5 * h3 * 1.6 * (((oir + 2) * 2) / 3 * w) / 100);
    document.getElementById("v3").value = v3;
    document.getElementById("vol").value = v1 + v2 + v3;
}

function tdE() {
    var wd = document.getElementById("wd").value;
    var dpw = document.getElementById("dpw").value;
    var td = document.getElementById("td").value;
    var pplate = document.getElementById("pplate").value;
    var pproduct = document.getElementById("pproduct").value;
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


    let vd = wp / (pp * 100);
    document.getElementById("pdv").value = vd;
    let dp = (vd - v1) * Math.pow(1000, 3) / ((3.14 / 4) * (Math.pow(oor, 2) - Math.pow(oir, 2)));
    document.getElementById("dp").value = dp;
    document.getElementById("diffh").value = dp - dd;

    /*
    {
        # * * * * part2 ** * *

        let
        h1 = parseFloat(document.getElementById("h1").value);
        let w = parseFloat(document.getElementById("w").value);
        let h = parseFloat(document.getElementById("h").value);
        let v1 = parseFloat(document.getElementById("v1").value);
        let v1 = parseFloat(document.getElementById("v1").value);
        #
    }
    */
}


function accumulatedRainWater() {
    let oir = parseFloat(document.getElementById("oir").value);
    let hrain = parseFloat(document.getElementById("hrain").value);
    let wroof = parseFloat(document.getElementById("wr").value);
    let pp = parseFloat(document.getElementById("pproduct").value);
    let v1 = parseFloat(document.getElementById("v1").value);
    let va = parseFloat(document.getElementById("va").value);
    let adeck = (Math.PI / 4) * Math.pow(oir, 2);
    let vrain = adeck * hrain * 1000000000;
    let wrain = vrain * 1000;
    let vdisplacement = ((wroof + wrain) * 1000) / (pp * 1000);
    document.getElementById("hdeckr").value = (vdisplacement - v1 - va) / ((Math.PI / 4) * Math.pow((oir / 1000), 2)) * 1000;
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
    var dd = parseFloat(document.getElementById("dd").value);
    var wd = parseFloat(document.getElementById("wd").value);
    var oir = parseFloat(document.getElementById("oir").value);
    var rll = parseFloat(document.getElementById("rll").value);
    var k2 = parseFloat(document.getElementById("k2").value);
    var alpha = parseFloat(document.getElementById("alpha").value);
    var e = parseFloat(document.getElementById("e").value);
    var t = parseFloat(document.getElementById("t").value);
    var k1 = parseFloat(document.getElementById("k1").value);
    var k31 = parseFloat(document.getElementById("k31").value);
    var k41 = parseFloat(document.getElementById("k41").value);
    var k32 = parseFloat(document.getElementById("k32").value);
    var k42 = parseFloat(document.getElementById("k42").value);

    var q1;
    var pproduct = parseFloat(document.getElementById("pproduct").value);
    if (Math.abs(9.8 * (wd - (3.14 / 4) * Math.pow(oir, 2) * dd * pproduct * 1000 / 1000000000) / (3.14 / 4) * Math.pow(oir, 2)) > Math.abs(9.8 * (wd - (3.14 / 4) * Math.pow(oir, 2) * dd * pproduct * 1000 / 1000000000) / (3.14 / 4) * Math.pow(oir, 2) + rll / 1000)) {
        q1 = 9.8 * (wd - (3.14 / 4) * Math.pow(oir, 2) * dd * pproduct * 1000 / 1000000000) / (3.14 / 4) * Math.pow(oir, 2);
    } else {
        q1 = 9.8 * (wd - (3.14 / 4) * Math.pow(oir, 2) * dd * pproduct * 1000 / 1000000000) / (3.14 / 4) * Math.pow(oir, 2) + rll / 1000;
    }
    document.getElementById("q1").value = q1;

    var y1 = cubic((k2 / (Math.pow(t, 3))), 0, (k1 / t), ((q1 * Math.pow(alpha, 4)) / (e * Math.pow(t, 4))));
    document.getElementById("y1").value = y1;
    document.getElementById("otc1").value = (k31 * y1 / t + k41 * Math.pow(y1 / t, 2)) * (e * Math.pow(t, 2) / Math.pow(alpha, 2));
    document.getElementById("obc1").value = k31 * y1 * e * t / Math.pow(alpha, 2);
    document.getElementById("odc1").value = k41 * Math.pow(y1, 2) * e / Math.pow(alpha, 2);
    document.getElementById("ote1").value = (k32 * y1 / t + k42 * Math.pow(y1 / t, 2)) * (e * Math.pow(t, 2) / Math.pow(alpha, 2));
    document.getElementById("obe1").value = k32 * y1 * e * t / Math.pow(alpha, 2);
    document.getElementById("ode1").value = k42 * Math.pow(y1, 2) * e / Math.pow(alpha, 2);
    document.getElementById("rh1").value = (k41 * Math.pow(y1, 2) * e / Math.pow(alpha, 2)) * t;

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
    let ndfad = (ubl - dl) / adeck;
    let q2 = ndfad * 9.81 / 1000000;
    document.getElementById("q2").value = q2;
    document.getElementById("adeck1").value = adeck;
    document.getElementById("vrain1").value = vrain;
    document.getElementById("wrain").value = wrain;
    document.getElementById("ubl").value = ubl;
    document.getElementById("ndfad").value = ndfad;
    document.getElementById("dl").value = dl;


    var k2 = parseFloat(document.getElementById("k2").value);
    var alpha = parseFloat(document.getElementById("alpha").value);
    var e = parseFloat(document.getElementById("e").value);
    var t = parseFloat(document.getElementById("t").value);
    var k1 = parseFloat(document.getElementById("k1").value);
    var k31 = parseFloat(document.getElementById("k31").value);
    var k41 = parseFloat(document.getElementById("k41").value);
    var k32 = parseFloat(document.getElementById("k32").value);
    var k42 = parseFloat(document.getElementById("k42").value);


    var y1 = cubic((k2 / (Math.pow(t, 3))), 0, (k1 / t), ((q2 * Math.pow(alpha, 4)) / (e * Math.pow(t, 4))));
    document.getElementById("y2").value = y1;
    document.getElementById("otc2").value = (k31 * y1 / t + k41 * Math.pow(y1 / t, 2)) * (e * Math.pow(t, 2) / Math.pow(alpha, 2));
    document.getElementById("obc2").value = k31 * y1 * e * t / Math.pow(alpha, 2);
    document.getElementById("odc2").value = k41 * Math.pow(y1, 2) * e / Math.pow(alpha, 2);
    document.getElementById("ote2").value = (k32 * y1 / t + k42 * Math.pow(y1 / t, 2)) * (e * Math.pow(t, 2) / Math.pow(alpha, 2));
    document.getElementById("obe2").value = k32 * y1 * e * t / Math.pow(alpha, 2);
    document.getElementById("ode2").value = k42 * Math.pow(y1, 2) * e / Math.pow(alpha, 2);
    document.getElementById("rh2").value = (k41 * Math.pow(y1, 2) * e / Math.pow(alpha, 2)) * t;


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


    let rh;
    if (rh1 === 0) {
        rh = rh1;
    } else {
        rh = rh2;
    }

    // part 2


    let bm1 = ((rh * oir) / 4) * ((1 / Math.sin(a)) - (1 / a));
    let bm2 = ((rh * oir) / 4) * ((1 / a) - (1 / Math.tan(a)));
    let cf1 = rh / (2 * Math.sin(a));
    let cf2 = rh / (2 * Math.tan(a));
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
}

function operationFloatationLevel() {
    let oir = parseFloat(document.getElementById("oir").value);
    let oor = parseFloat(document.getElementById("oor").value);
    let bih = parseFloat(document.getElementById("bih").value);
    let wr = parseFloat(document.getElementById("wr").value);
    //  let h=parseFloat(document.getElementById("h").value);
    let pp = parseFloat(document.getElementById("pproduct").value);
    let h1 = parseFloat(document.getElementById("h1").value);
    let w = parseFloat(document.getElementById("w").value);
    let v2 = parseFloat(document.getElementById("v2").value);


    let v1 = 0.5 * h1 * (oir + 2 * 2 / w) / 1000;
    let va = (bih) * v2;
    let vr = wr / (pp * 1000);
    document.getElementById("hdeck").value = (vr - v1 - va) / ((Math.PI / 4) * (Math.pow((oor / 1000), 2))) * 1000;
    document.getElementById("v12").value = v1;
    document.getElementById("va").value = va;
    document.getElementById("vr").value = vr;


}


function showTab(n) {
    // This function will display the specified tab of the form...
    var x = document.getElementsByClassName("tab");

    for (let i = 0; i < x.length; i++) {
        if(i===n){
            x[i].style.setProperty("display", "flex", "important");
        } else {
            x[i].style.setProperty("display", "none", "important");
        }
    }
    //... and fix the Previous/Next buttons:
    if (n == 0) {
        document.getElementById("prevBtn").style.display = "none";
    } else {
        document.getElementById("prevBtn").style.display = "inline";
    }
    if (n == (x.length - 1)) {
        document.getElementById("nextBtn").innerHTML = "Submit";
    } else {
        document.getElementById("nextBtn").innerHTML = "Next";
    }
    //... and run a function that will display the correct step indicator:
    fixStepIndicator(n)
}

function nextPrev(n) {
    // This function will figure out which tab to display
    var x = document.getElementsByClassName("tab");
    // Exit the function if any field in the current tab is invalid:
    if (n == 1 && !validateForm()) return false;
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
    var x, y, i, valid = true;
    x = document.getElementsByClassName("tab");
    y = x[currentTab].getElementsByTagName("input");
    // A loop that checks every input field in the current tab:
    for (i = 0; i < y.length; i++) {
        // If a field is empty...
        if (y[i].value == "") {
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
    var pi, q, del;
    pi = Math.PI;
    e = Math.E;

    var x = [];


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
    var i, x = document.getElementsByClassName("step");
    for (i = 0; i < x.length; i++) {
        x[i].className = x[i].className.replace(" active", "");
    }
    //... and adds the "active" class on the current step:
    x[n].className += " active";
}

$(function () {
    var str = '#len'; //increment by 1 up to 1-nelemnts
    $(document).ready(function () {
        var i, stop;
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
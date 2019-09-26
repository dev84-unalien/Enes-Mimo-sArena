let champions = [];
let currentP1 = 0;
let currentP2 = 0;

$.ajax({
    url: 'http://localhost/Ricardo\'sArena/Arena/Enes-Mimo-sArena/getVersus.php',
    type: 'GET',
    success: function success(result) {
        
        champions = JSON.parse(result);
        let champion1 = champions[0];
        let champion2 = champions[0];

        $("#p2_nom").html("Nom : " + champion1.nom);
        $("#p2_pa").html("Point d'attaque : " + champion1.pa);
        $("#p2_pv").html("Point de vie : " + champion1.pv);
        $("#p2_preview").attr("src", champion1.url);

        $("#p1_nom").html("Nom : " + champion2.nom);
        $("#p1_pa").html("Point d'attaque : " + champion2.pa);
        $("#p1_pv").html("Point de vie : " + champion2.pv);
        $("#p1_preview").attr("src", champion2.url);
    },
    error: function error(fail){
        alert(fail);
    }
});


function switchRight (isP1) {
    if (isP1 == true) {
        if (currentP1 > champions.length - 1) {
            currentP1 = -1;
        }
        currentP1 = currentP1 + 1;
        let champion1 = champions[currentP1];
        $("#p1_nom").html("Nom : " + champion1.nom);
        $("#p1_pa").html("Point d'attaque : " + champion1.pa);
        $("#p1_pv").html("Point de vie : " + champion1.pv);
        $("#p1_preview").attr("src", champion1.url);
    } else {
        if (currentP2 > champions.length - 1) {
            currentP2 = -1;
        }
        currentP2 = currentP2 + 1;
        let champion1 = champions[currentP2];
        $("#p2_nom").html("Nom : " + champion1.nom);
        $("#p2_pa").html("Point d'attaque : " + champion1.pa);
        $("#p2_pv").html("Point de vie : " + champion1.pv);
        $("#p2_preview").attr("src", champion1.url);
    }
}

function switchLeft (isP1) {
    if (isP1 == true) {
        if (currentP1 < 0) {
            currentP1 = champions.length;
        }
        currentP1 = currentP1 - 1;
        let champion1 = champions[currentP1];
        $("#p1_nom").html("Nom : " + champion1.nom);
        $("#p1_pa").html("Point d'attaque : " + champion1.pa);
        $("#p1_pv").html("Point de vie : " + champion1.pv);
        $("#p1_preview").attr("src", champion1.url);
    } else {
        if (currentP2 < 0) {
            currentP2 = champions.length;
        }
        currentP2 = currentP2 - 1;
        let champion1 = champions[currentP2];
        $("#p2_nom").html("Nom : " + champion1.nom);
        $("#p2_pa").html("Point d'attaque : " + champion1.pa);
        $("#p2_pv").html("Point de vie : " + champion1.pv);
        $("#p2_preview").attr("src", champion1.url);
    }
}

function confirm () {
    localStorage.champions = JSON.stringify(champions);
    localStorage.currentP1 = currentP1;
    localStorage.currentP2 = currentP2;
    document.location.href = "http://localhost/Ricardo'sArena/Arena/Enes-Mimo-sArena/Arena.html";
}
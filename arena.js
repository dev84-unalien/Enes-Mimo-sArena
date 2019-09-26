let champions = [];
let currentP1 = 0;
let currentP2 = 0;

$( document ).ready(function() {
    champions =  JSON.parse(localStorage.champions);
    currentP1 =  parseInt(localStorage.currentP1);
    currentP2 =  parseInt(localStorage.currentP2);

    let champion1 = champions[currentP1];
    let champion2 = champions[currentP2];

   $("#p1_nom").html("Nom : " + champion1.nom);
    $("#p1_pv").html("Point de vie : " + champion1.pv);
    $("#p1_preview").attr("src", champion1.url);

    $("#p2_nom").html("Nom : " + champion2.nom);
    $("#p2_pv").html("Point de vie : " + champion2.pv);
    $("#p2_preview").attr("src", champion2.url);

    let isP1 = true;
    let isFirstRound = true;
    let idDeInterval = setInterval(function () {
        $("#p1_preview").removeClass("flash");
        $("#p2_preview").removeClass("flash");
        $("#p1_preview").removeClass("tada");
        $("#p2_preview").removeClass("tada");

        if (isP1) {
            champion2.pv = champion2.pv - champion1.pa;
            $("#p2_preview").addClass("flash");
            $("#p1_preview").addClass("tada");
            $("#p2_pv").html("Point de vie : " + champion2.pv);
            isP1 = false;
        } else {
            champion1.pv = champion1.pv - champion2.pa;
            $("#p1_preview").addClass("flash");
            $("#p2_preview").addClass("tada");
            $("#p1_pv").html("Point de vie : " + champion1.pv);
            isP1 = true;
        }

        if (champion2.pv <= 0) {
            clearInterval(idDeInterval);
            setTimeout(function () {
                alert(champion2.nom + " est mort !");
                document.location.href = "http://localhost/Ricardo'sArena/Arena/Enes-Mimo-sArena/Create.html";
            }, 2000);
        }
        if (champion1.pv <= 0) {
            
            clearInterval(idDeInterval);
            setTimeout(function () {
                alert(champion1.nom + " est mort !");
                document.location.href = "http://localhost/Ricardo'sArena/Arena/Enes-Mimo-sArena/Create.html";
            }, 2000);
        }
    }, 2000);
});
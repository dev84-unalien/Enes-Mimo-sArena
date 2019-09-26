$(".confirmer").click( function () {

$.ajax({

    url : "http://localhost/getVersus.php",
    type : 'GET',

    success: alert("Ricardo a rejoint l'Arène")
    });
});
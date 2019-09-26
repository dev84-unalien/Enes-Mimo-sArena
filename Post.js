$.ajax({
    type: "POST",
    datatype: "json",
    url: "http://localhost/AddRicardo.php",
    data: JSON.stringify( { 
        
    }),

    success: updatePage,
    error: printError
});

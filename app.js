

$(document).ready(function() {

    $('#test').click(function(){
        console.log("Hello");
        // Default export is a4 paper, portrait, using milimeters for units
        var doc = new jsPDF()
        
        doc.text('Hello world!', 10, 10) 
        doc.save("viewerPreferences.pdf")
        
    });

});


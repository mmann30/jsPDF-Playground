

$(document).ready(function() {

    $('#test').click(function(){
        //pdf pagelayout parameters
        var lMargin = 15; //left margin in mm
        var rMargin = 15; //right margin in mm
        var pdfInMM = 210; //width of A4 paper in mm
        
        // Default export is portrait, using milimeters for units, a4 paper
        var doc = new jsPDF('p', 'mm', 'a4');

        var paragraph = 'Booz Allen offers a suite of Customer Relationship Management (CRM) solutions that help our clients achieve their goals through quantitative and qualitative strategies based on data gathered from all customer touch points and related systems, with the goal of improving and/or transforming the customer experience.';
        var lines = doc.splitTextToSize(paragraph, (pdfInMM-lMargin-rMargin));
        doc.setFontSize(10);
        doc.text(lMargin, 15, lines); 



        var paragraph2 = "CRM refers to practices, strategies, and technologies that companies use to manage and analyze customer interactions and data throughout the customer lifecycle, with the goal of improving business relationships with customers (marketing), assisting in customer service and retention (service), and driving sales growth (sales). CRM systems compile information on customers across different channels, including the website, telephone, live chat, direct mail, marketing materials and social media. CRM also gives customer-facing staff and management detailed information on customers' personal information, purchase/request history, buying and interaction preferences, concerns and larger trends. Through CRM, organizations can learn more about their target audiences through quantitative and qualitative analysis to improve and/or transforming the customer.";
        var lines2 = doc.splitTextToSize(paragraph, (pdfInMM-lMargin-rMargin));
        doc.setFontSize(9);
        doc.text(lMargin, 45, lines2);

        doc.setTextColor(255, 0, 0);
        doc.text("This is red", 10, 20) 
        
        
        doc.setDrawColor(255,0,0); // draw red lines
        
        doc.setLineWidth(0.1);
        doc.line(100, 20, 100, 60); // vertical line
        
        doc.setLineWidth(0.5);
        doc.line(105, 20, 105, 60);
        
        doc.setLineWidth(1);
        doc.line(110, 20, 110, 60);

        //generates the document
        doc.save("Genearted.pdf")
    });

});


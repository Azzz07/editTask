sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'form/test/integration/FirstJourney',
		'form/test/integration/pages/mathObjectPage'
    ],
    function(JourneyRunner, opaJourney, mathObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('form') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onThemathObjectPage: mathObjectPage
                }
            },
            opaJourney.run
        );
    }
);
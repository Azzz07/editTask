sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'sef/test/integration/FirstJourney',
		'sef/test/integration/pages/studList',
		'sef/test/integration/pages/studObjectPage'
    ],
    function(JourneyRunner, opaJourney, studList, studObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('sef') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onThestudList: studList,
					onThestudObjectPage: studObjectPage
                }
            },
            opaJourney.run
        );
    }
);
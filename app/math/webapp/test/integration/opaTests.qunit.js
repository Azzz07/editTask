sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'math/test/integration/FirstJourney',
		'math/test/integration/pages/mathList',
		'math/test/integration/pages/mathObjectPage'
    ],
    function(JourneyRunner, opaJourney, mathList, mathObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('math') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onThemathList: mathList,
					onThemathObjectPage: mathObjectPage
                }
            },
            opaJourney.run
        );
    }
);
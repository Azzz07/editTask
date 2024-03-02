sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'task/test/integration/FirstJourney',
		'task/test/integration/pages/collegeList',
		'task/test/integration/pages/collegeObjectPage'
    ],
    function(JourneyRunner, opaJourney, collegeList, collegeObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('task') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onThecollegeList: collegeList,
					onThecollegeObjectPage: collegeObjectPage
                }
            },
            opaJourney.run
        );
    }
);
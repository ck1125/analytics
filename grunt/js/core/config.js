if (typeof _analytics==='undefined') _analytics={};
_analytics.config = (function(){

    var linkDetailsMap = [
            'module','pod','other','context','theme','textClicked','pageName'
        ],
        variablesMap = {
            searchTerm: ['prop1','eVar1'],
            searchType: ['prop12','eVar31'],
            searchResults: ['prop34'],
            headline: ['prop3','eVar13'],
            errors: ['prop2','eVar2'],
            url: ['prop9','eVar9'],
            refDomain: ['prop36','eVar36'],
            contentType: ['prop20','eVar20'],
            contentId: ['prop21','eVar15'],
            siteName: ['prop23','eVar14'],
            browseMethod: ['prop24'],
            section: ['section'],
            section0: ['prop25','eVar26'],
            section1: ['prop27','eVar29'],
            section2: ['prop31','eVar30'],
            videoTitle: ['prop26','eVar28'],
            channel: ['eVar24','channel','hier1'],
            samId: ['prop39','eVar39'],
            loginStatus: ['eVar11'],
            ageGender: ['eVar12'],
            skyPackage: ['eVar16'],
            optIn: ['eVar38'],
            sessionCamID: ['prop62'],
            masthead: ['prop63'],
            linkDetails: ['prop15','eVar7'],
            newRepeat: ["prop70", "eVar70"],
            visitNum: ["prop69", "eVar69"],
            visitorID: ["visitorID"],
            pageName: ["pageName"],
            fullCampaign: ['prop45','eVar45'],
            insightCampaign: ['eVar46'],
            searchEngine: ['prop16','eVar3'],
            externalSearchTerm: ['prop17','eVar8'],
            pageConversion: ['eVar19'],
            fullPageDescription: ['eVar55'],
            testAndTarget: ['eVar18'],
            sessionCampaign: ['eVar47'],
            list1: ['list1'],
            list2: ['list2'],
            list3: ['list3'],
            list4: ['list4'],
            list5: ['list5']
        },

        eventsMap = {
            pageLoad: 'event1',
            error: 'event3',
            linkClick: 'event6',
            firstPageVisited: 'event7',
            secondPageVisited: 'event8',
            searchResults: 'event15',
            loginComplete: 'event16',
            loginStart: 'event17',
            regComplete: 'event18',
            regStart: 'event19',
            repeatVisit: 'event20',
            optIn: 'event25',
            zeroResults: 'event26',
            liveChat: "event36",
            passwordStart: 'event76',
            passwordComplete: 'event77',
            activateStart: 'event78',
            activateComplete: 'event79'
        },
        variableBasedEvents = {
            'searchResults': 'searchResults',
            'errors': 'error'
        };

    var linkInternalFilters = [
        'skyintranet','javahscript:'.replace('h',''),'sky.com','skysports.co.uk','skyarts.co.uk','skybet.com','skypoker.com','skybingo.com','skyvegas.com','teamtalk.com',
        'football365.com','sportinglife.com','sportal.com','bettingzone.co.uk','fixtures365.com','teamsky.com','oddschecker.com','sport365.com','skysports.com',
        'sky.zoopla.co.uk','skyoneonline.co.uk','bskybpensionplan.com','skymobileiphone.com','skymovies.com','skyone.co.uk','sky1.co.uk','skyoneonline.co.uk',
        'm.skynews.com','skyrainforestrescueschoolschallenge.org','skybroadband.com','skyartsonline.co.uk','skymoviesactive.com','skyhub.bskyb.com',
        'skyone.co.uk','sky.co.uk','skybet.mobi','socceram.com','teamtalk.co.za','football365.co.uk','jointhebiggerpicture.com','skysportsnewsradio.com','file',
        'contact.sky.com','.rainforestrescue.com','.nowtv.com',    window.location.host
    ];

    return {
        variablesMap: variablesMap,
        eventsMap: eventsMap,
        linkDetailsMap: linkDetailsMap,
        variableBasedEvents: variableBasedEvents,
        trackingServer: 'metrics.sky.com',
        trackingServerSecure: 'smetrics.sky.com',
        visitorNamespace: 'bskyb',
        charSet: 'UTF-8',
        trackDownloadLinks: true,
        trackExternalLinks: true,
        trackInlineStats: true,
        linkDownloadFileTypes: 'exe,zip,wav,mp3,mov,mpg,avi,wmv,pdf,doc,docx,xls,xlsx,ppt,pptx,air,wma,dmg',
        //anyway to make this easier to have all?
        linkInternalFilters: linkInternalFilters.join(),
        linkLeaveQueryString: false,
        linkTrackVars: 'None',
        linkTrackEvents: 'None',
        browseMethod: 'web',
        url: window.location.href.toString().split('?')[0],
        server: window.location.hostname,
        QScmpId: 'cmpid,aff',
        QScmpIdInt: 'cmpid_int',
        useForcedLinkTracking: true,
        forceLinkTrackingTimeout: 150,
        setObjectIDs: true,
        trackClicks: true,
        loadEvents:[],
        loadVariables:{}
    };

}());


if (typeof window.define === "function" && window.define.amd) {
    define("core/config", function() {
        return _analytics.config;
    });
}
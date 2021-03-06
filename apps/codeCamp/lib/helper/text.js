/*jslint node: true */
/*jslint todo: true */
'use strict';

var textHelper = {
    defaultResponse: 'Please be patient as I learn a new skill.',
    failedResponse: 'I\'m sorry. There was a problem processing this request. Check the Alexa card for details. Goodbye.',
    setupPrompt: 'Welcome to Code Camp!',
    help: 'This is the text of available help.',
    simpleHelp: 'This is the simple help.',
    goodbye: 'Thank you for talking with me. Goodbye.',

    nothingToSave: 'Trying to save nothing.',
    nothingToFind: 'Trying to find nothing.',
    saveError: 'Unable to add/update item.',
    retrieveError: 'Unable to retrieve item.',

    join: function (list, property, conjunction, prefix) {
        var i, name, names = [], nameList = '', separator = prefix ? '.' : ',';
        if (!conjunction) {
            conjunction = 'or';
        }
        if (!property) {
            property = 'speaker';
        }

        for (i = 0; i < list.length; i += 1) {
            // accept an array of names or an array of objects with a speaker property
            if (typeof list[i] === 'object' && property !== undefined) {
                name = list[i][property];
            } else {
                name = list[i];
            }
            if (names.indexOf(name) === -1 && name !== '') {
                names.push(name);
            }
        }

        for (i = 0; i < names.length; i += 1) {
            if (i > 0 && i === names.length - 1) {
                nameList += separator + ' ' + conjunction;
            } else if (i > 0) {
                nameList += separator;
            }
            if (prefix) {
                if (i > 0) {
                    nameList += ' ';
                }
                nameList += prefix + ' ' + (i + 1).toString() + ' is ';
            }
            nameList += ' ' + names[i];
        }

        return nameList;
    },

    speakerNotFound: function (name) { return 'I heard you say ' + name + ' but I could not find that name.'; },
    roomNotFound: function (room) { return 'I heard you say ' + room + ' but I could not find that room.'; },
    timeNotFound: function (time) { return 'I heard you say ' + time + ' but I could not find that time.'; },
    whichSpeaker: function (cnt, name) { return 'I found ' + cnt.toString() + ' speakers matching ' + name + '. Which speaker do you want'; },
    speakingAtCountSessions: function (cnt, name) { return name + ' is speaking at ' + cnt.toString() + ' session' + (cnt === 1 ? '' : 's') + '. '; },
    countSessionsMatchingPhrase: function (cnt, phrase) { return 'There are ' + cnt.toString() + ' session' + (cnt === 1 ? '' : 's') + ' matching ' + phrase + '. '; },
    speakersWithBadge: function (badge) { return badge + ' presenters are:'; },
    isNotHere: function (name) { return 'Sorry, ' + name + ' is not presenting today.'; },
    presentationWhenWhere: function (presentation) { return 'There is a presentation on ' + presentation.session_name + ' at ' + presentation.session_time + ' in room ' + presentation.room + '.'; },
    profileNotUpdated: function (name) { return name + ' did not update their profile information.'; },
    nextSessionTime: function (time) { return 'The next session is at ' + time + '.'; },
    sessionsNotFound: function (phrase) { return 'There are no session matching ' + phrase + '.'; },

    speakerList: [
        'aaron',
        'aaron marisi',
        'alex',
        'alex grinberg',
        'alex zeltov',
        'alfonso',
        'alfonso garcia',
        'anthony',
        'anthony verguldi',
        'atley',
        'atley hunter',
        'bapatla',
        'bender',
        'benjamin',
        'benjamin zale',
        'berman',
        'brackel',
        'brent',
        'brent schooley',
        'brian',
        'brian lyttle',
        'brian minisi',
        'chadwick',
        'chakraborty',
        'chris',
        'chris gomez',
        'chris love',
        'claudio',
        'claudio sanchez',
        'dan',
        'dan hartshorn',
        'dave',
        'dave glick',
        'david',
        'david patrick',
        'david voyles',
        'doug',
        'doug finke',
        'ferro',
        'finke',
        'fritz',
        'garcia',
        'glick',
        'goff',
        'goldman',
        'gomez',
        'greg',
        'greg hurlman',
        'grinberg',
        'hartshorn',
        'henry',
        'henry he',
        'hunter',
        'hurlman',
        'james',
        'james bender',
        'jason',
        'jason van brackel',
        'jeffrey',
        'jeffrey fritz',
        'jennifer',
        'jennifer kenderdine',
        'jess',
        'jess chadwick',
        'jon',
        'jon goldman',
        'joy',
        'joy chakraborty',
        'kay',
        'ken',
        'ken lovely',
        'kendall',
        'kendall miller',
        'kenderdine',
        'kevin',
        'kevin goff',
        'louis',
        'louis berman',
        'love',
        'lovely',
        'luckenbill',
        'lyttle',
        'marisi',
        'meine',
        'melusky',
        'michael',
        'michael luckenbill',
        'mike',
        'mike melusky',
        'miller',
        'minisi',
        'nicholas',
        'nicholas trentacoste',
        'patrick',
        'prasad',
        'prasad bapatla',
        'riccardo',
        'riccardo terrell',
        'rich',
        'rich ross',
        'rick',
        'rick wargo',
        'ross',
        'sanchez',
        'schooley',
        'scott',
        'scott kay',
        'sebastian',
        'sebastian meine',
        'snyder',
        'terrell',
        'tim',
        'tim ferro',
        'todd',
        'todd snyder',
        'trentacoste',
        'verguldi',
        'voyles',
        'wargo',
        'zale',
        'zeltov'
    ],
    badgeList: [ 'MS', 'MVP', 'Microsoft' ],
    roomList: [
        '30th street',
        'EBC',
        'MPR1',
        'MPR2',
        'MPR3',
        'berwyn',
        'malvern',
        'merion',
        'paoli',
        'strafford',
        'wynnewood'
    ],
    timeList: [
        '08:30am',
        '10:00am',
        '11:30am',
        '01:30pm',
        '03:00pm'
    ],
    sessionPhrases: [
        'ASP',
        'ASP dot net',
        'ASP dot net 4.6+',
        'ASP dot net Core',
        'ASP dot net Integration',
        'ASP.Net',
        'ASP.Net Core',
        'ASP.Net Core and Azure',
        'Advice',
        'Advice from the Trenches',
        'Alexa',
        'Alexa Skill',
        'Analytics',
        'Analytics using Apache',
        'Analytics using Apache Spark',
        'Analyzers',
        'Angular',
        'Angular 1.x',
        'Angular 1.x with Visual',
        'Angular 2',
        'Angular 2 Tooling',
        'AngularJS',
        'AngularJS Hello',
        'AngularJS Hello clientside',
        'AngularJS Hello clientside MVC',
        'AngularJS Unit',
        'AngularJS Unit Testing',
        'Apache',
        'Apache Spark',
        'Apache Spark on HDInsights',
        'App',
        'App A Primer',
        'Applications',
        'Architecting',
        'Architecting Distributed',
        'Architecting Distributed Data',
        'Architecting Distributed Data Platform',
        'Architectures',
        'Architectures that grow',
        'Azure',
        'Azure PaaS',
        'Azure Perfect',
        'Azure Perfect Together',
        'Azure SaaS',
        'Azure SaaS andor HDP',
        'Azure Service',
        'Azure Service Fabric',
        'Azure WebJobs',
        'Azure WebJobs My Next',
        'Azure helped',
        'Azure helped us improve',
        'BDD-Style',
        'BDD-Style testing',
        'BDD-Style testing for Powershell',
        'Batch',
        'Batch Processing',
        'Batch Processing with Azure',
        'Better',
        'Better Code',
        'Better Code With Live',
        'Big',
        'Big Data',
        'Big Data Analytics',
        'BigData',
        'BigData Technologies',
        'Bring',
        'Bring Solid',
        'Bring Solid to Web',
        'Business',
        'Business Processes',
        'Business Processes in SharePoint',
        'C',
        'C C++',
        'C#',
        'C# 6',
        'C++',
        'C++ on the web',
        'Career',
        'Career Advice',
        'Career tools',
        'Career tools tips',
        'Cloud',
        'Cloud How Azure',
        'Cloud How Azure helped',
        'Code',
        'Code With Live',
        'Code With Live Analyzers',
        'Common',
        'Common Misconceptions',
        'Compiler',
        'Compiler to Javascript',
        'Consultant',
        'Containers',
        'Containers and Docker',
        'Continuous',
        'Continuous Integration',
        'Continuous Integration and Deployment',
        'Cool',
        'Cool ASP',
        'Cool ASP dot net',
        'Core',
        'Core and Azure',
        'Core and Azure Perfect',
        'Couchbase',
        'Couchbase Its Web',
        'Couchbase Its Web Scale',
        'Create',
        'Create an Alexa',
        'Create an Alexa Skill',
        'Creating',
        'Creating and debugging',
        'Creating and debugging hybrid',
        'Cutting',
        'Cutting Through',
        'Cutting Through The Static',
        'Data',
        'Data Analytics',
        'Data Analytics using Apache',
        'Data Platform',
        'Data Platform using Microsofts',
        'Data Secure',
        'Debugging',
        'Debugging with WinDbg',
        'Deep',
        'Deep Dive',
        'Deep Dive on ASP',
        'Delivery',
        'Dependency',
        'Dependency Injection',
        'Deployment',
        'Deployment From New',
        'Deployment From New Idea',
        'Design',
        'Design To Make',
        'Designing',
        'Designing and Architecting',
        'Designing and Architecting Distributed',
        'DevOps',
        'DevOps to Optimize',
        'DevOps to Optimize Value',
        'Developers',
        'Developers Most Common',
        'Developers Most Common Misconceptions',
        'Developers attendees',
        'Developers attendees choose',
        'Developers attendees choose topics',
        'Development',
        'Distributed',
        'Distributed Data',
        'Distributed Data Platform',
        'Dive',
        'Dive on ASP',
        'Docker',
        'Docker on Azure',
        'Efficiency',
        'Efficiency with Visual',
        'Efficiency with Visual Studio',
        'Ember.js',
        'Ember.js 2.0',
        'Ember.js 2.0 and ASP',
        'EmberJS',
        'EmberJS ASP.Net',
        'EmberJS ASP.Net Core',
        'Everywhere',
        'Evolved',
        'Fabric',
        'Features',
        'Features You Need',
        'Functional',
        'Functional Compiler',
        'Functional Compiler to Javascript',
        'Functional Reactive',
        'Functional Reactive Programming',
        'Getting Started',
        'Getting Started With JavaScript',
        'Getting started',
        'Getting started with Containers',
        'HDInsights',
        'HDInsights on Azure',
        'HDInsights on Azure SaaS',
        'HDP',
        'HDP on Azure',
        'HDP on Azure PaaS',
        'Hack',
        'Hack Your Career',
        'Hack Your Career tools',
        'Hello',
        'Hello clientside',
        'Hello clientside MVC',
        'IOT',
        'IT',
        'IT Consultant',
        'Idea',
        'Idea to NuGet',
        'Image',
        'Image Strategy',
        'Implementing',
        'Implementing a Responsive',
        'Implementing a Responsive Image',
        'Injection',
        'Integrating',
        'Integrating Business',
        'Integrating Business Processes',
        'Integration',
        'Integration and Deployment',
        'Interface',
        'Interfaces',
        'Interfaces to Minecraft',
        'Intro',
        'Intro to AngularJS',
        'Intro to AngularJS Hello',
        'Intro to Visual',
        'Intro to Visual Web',
        'Introduction',
        'Introduction to Azure',
        'Introduction to Azure Service',
        'Introduction to BDD-Style',
        'Introduction to BDD-Style testing',
        'Introduction to Big',
        'Introduction to Big Data',
        'Introduction to Microsoft',
        'Introduction to Microsoft Azure',
        'Introduction to R',
        'Introduction to Swift',
        'Isolated',
        'Isolated with Mocks',
        'JavaScript',
        'JavaScript Evolved',
        'JavaScript Libraries',
        'JavaScript Libraries for Office',
        'Javascript',
        'Keeping Your Unit',
        'Keeping Your Unit Tests',
        'Leaflet.js',
        'Learned',
        'Learned to Love',
        'Learned to Love Dependency',
        'Libraries',
        'Libraries for Office',
        'Libraries for Office 365',
        'Live',
        'Live Analyzers',
        'Love',
        'Love Dependency',
        'Love Dependency Injection',
        'MVC',
        'MVC 6',
        'MVC 6 Getting Started',
        'Make',
        'Make Your Web',
        'Make Your Web Work',
        'Make your code',
        'Make your code work',
        'Making',
        'Making cool',
        'Making cool gadgets',
        'ManifoldJS',
        'ManifoldJS VorlonJS',
        'Mapping',
        'Mapping with Leaflet.js',
        'Maturing',
        'Maturing DevOps',
        'Maturing DevOps to Optimize',
        'Messaging',
        'Messaging for Applications',
        'Microsoft',
        'Microsoft Azure',
        'Microsofts',
        'Microsofts BigData',
        'Microsofts BigData Technologies',
        'Minecraft',
        'Minecraft or how-to',
        'Minecraft or how-to look',
        'Misconceptions',
        'Mocks',
        'Natural',
        'Natural User',
        'Natural User Interface',
        'Need',
        'New',
        'New Idea',
        'New Idea to NuGet',
        'New In C#',
        'New In C# 6',
        'Next',
        'Next SuperPower',
        'NuGet',
        'Office',
        'Office 365',
        'Optimize',
        'Optimize Value',
        'Optimize Value Delivery',
        'Optimizing',
        'Optimizing Team',
        'Optimizing Team Efficiency',
        'PaaS',
        'Panel',
        'Panel Hack',
        'Panel Hack Your Career',
        'Parts',
        'Perfect',
        'Perfect Together',
        'Pester',
        'Pester Me An Introduction',
        'Phenomenal',
        'Phenomenal IT',
        'Phenomenal IT Consultant',
        'Platform',
        'Platform using Microsofts',
        'Platform using Microsofts BigData',
        'PowerShell',
        'PowerShell V5.0',
        'PowerShell V5.0 ships',
        'Powershell',
        'Primer',
        'Processes',
        'Processes in SharePoint',
        'Processing',
        'Processing with Azure',
        'Processing with Azure WebJobs',
        'Programmatic',
        'Programmatic Interfaces',
        'Programmatic Interfaces to Minecraft',
        'Programming',
        'Programming for Natural',
        'Programming for Natural User',
        'R',
        'RabbitMQ',
        'RabbitMQ Robust',
        'RabbitMQ Robust Messaging',
        'Reactive',
        'Reactive Programming',
        'Reactive Programming for Natural',
        'Reporting',
        'Reporting Services',
        'Reporting Services for Developers',
        'Responsive',
        'Responsive Image',
        'Responsive Image Strategy',
        'Responsive Web',
        'Responsive Web Design',
        'Robust',
        'Robust Messaging',
        'Robust Messaging for Applications',
        'SQL',
        'SQL Server',
        'SQL Server Reporting',
        'SQL Server Reporting Services',
        'SaaS',
        'SaaS and or HDP',
        'SaaS and HDP',
        'SaaS or HDP',
        'Scale',
        'Scaling',
        'Scaling Systems',
        'Scaling Systems Architectures',
        'Secure',
        'Server',
        'Server Reporting',
        'Server Reporting Services',
        'Service',
        'Service Fabric',
        'Services',
        'Services for Developers',
        'Services for Developers attendees',
        'SharePoint',
        'Side',
        'Side Keeping Your Unit',
        'Side Thats Your Side',
        'Skill',
        'SlackDriven',
        'SlackDriven Development',
        'Solid',
        'Solid to Web',
        'Solid to Web Development',
        'Spark',
        'Spark on HDInsights',
        'Started',
        'Started With JavaScript',
        'Started With JavaScript Libraries',
        'Static',
        'Strategy',
        'Studio',
        'Studio and TFS',
        'Successful',
        'Successful App',
        'Successful App A Primer',
        'SuperPower',
        'Swift',
        'Swift Introduction',
        'Swift Introduction to Swift',
        'Systems',
        'Systems Architectures',
        'Systems Architectures that grow',
        'TFS',
        'TSQL',
        'TSQL for dot net',
        'Team',
        'Team Efficiency',
        'Team Efficiency with Visual',
        'Technologies',
        'Testing',
        'Tests',
        'Tests Isolated',
        'Tests Isolated with Mocks',
        'Through',
        'Through The Static',
        'Together',
        'Tooling',
        'Tooling for Angular',
        'Tooling for Angular 1.x',
        'TransactSQL',
        'TransactSQL for Developers',
        'TransactSQL for Developers attendees',
        'Trenches',
        'TypeScript',
        'TypeScript JavaScript',
        'TypeScript JavaScript Evolved',
        'Unit',
        'Unit Testing',
        'Unit Tests',
        'Unit Tests Isolated',
        'User',
        'User Interface',
        'V5.0',
        'V5.0 ships',
        'V5.0 ships with Windows',
        'Value',
        'Value Delivery',
        'Visual',
        'Visual Studio',
        'Visual Studio and TFS',
        'Visual Web',
        'Visual Web Parts',
        'VorlonJS',
        'Web',
        'Web Design',
        'Web Design To Make',
        'Web Development',
        'Web Parts',
        'Web Scale',
        'Web Work',
        'Web Work Everywhere',
        'WebJobs',
        'WebJobs My Next',
        'WebJobs My Next SuperPower',
        'WinDbg',
        'Windows',
        'Windows 10',
        'Work',
        'Work Everywhere',
        'Write',
        'Write Better',
        'Write Better Code',
        'apps',
        'apps with ManifoldJS',
        'apps with ManifoldJS VorlonJS',
        'as',
        'as a developer',
        'attendees',
        'attendees choose',
        'attendees choose topics',
        'choose',
        'choose topics',
        'clientside',
        'clientside MVC',
        'code',
        'code work',
        'code work everywhere',
        'cool',
        'cool gadgets',
        'cool gadgets with IOT',
        'cool to your kid',
        'current',
        'current state',
        'current state of C',
        'debugging',
        'debugging hybrid',
        'debugging hybrid mobile',
        'debugging hybrid mobile apps',
        'developer',
        'dot net',
        'dot net 4.6+',
        'dot net 4.6+ Features',
        'dot net Core',
        'dot net Debugging',
        'dot net Developers',
        'dot net Integration',
        'everywhere',
        'gadgets',
        'gadgets with IOT',
        'grow',
        'grow as',
        'grow as a developer',
        'help',
        'help you grow',
        'help you grow as',
        'helped',
        'helped us improve',
        'how-to',
        'how-to look',
        'how-to look cool',
        'hybrid',
        'hybrid mobile',
        'hybrid mobile apps',
        'improve',
        'improve the scalability',
        'kid',
        'look',
        'look cool',
        'mobile',
        'mobile apps',
        'mobile apps with ManifoldJS',
        'scalability',
        'scalability of our SaaS',
        'ships',
        'ships with Windows',
        'ships with Windows 10',
        'started',
        'started with Containers',
        'state',
        'state of C',
        'state of C C++',
        'techniques',
        'techniques that help',
        'testing',
        'testing for Powershell',
        'tips',
        'tips and techniques',
        'tools',
        'tools tips',
        'tools tips and techniques',
        'topics',
        'web',
        'web Make',
        'web Make your code',
        'work',
        'work everywhere'
    ]
};

module.change_code = 1;
module.exports = textHelper;

// SafeWeb Multilingual + Voice + Email-Notification Prototype
(function () {
    // ---------- LANGUAGE PACK ----------
    const i18n = {
        en: {
            appTitle: "SafeWeb",
            appTagline: "Digital Safety & TFGBV Response Toolkit",
            languageLabel: "Language",
            nav: {
                dashboard: "Dashboard",
                detect: "Detect",
                report: "Report",
                chatbot: "Chatbot",
                awareness: "Awareness",
                safety: "Safety Plan"
            },
            dashboard: {
                title: "Welcome to SafeWeb",
                intro1: "This prototype was built for the ELiDA Digital Tool Development Challenge to tackle Technology-Facilitated Gender-Based Violence (TFGBV).",
                intro2: "SafeWeb brings together detection, reporting, a supportive chatbot, awareness content, and a personal safety planning tool – all in one simple web app.",
                featureDetect: "Detect: Screen online messages for potential TFGBV risk.",
                featureReport: "Report: Log incidents and generate a case ID you can share with support services.",
                featureChatbot: "Chatbot: Get empathetic guidance and next steps 24/7.",
                featureAwareness: "Awareness: Learn about TFGBV, your rights, and how to stay safe.",
                featureSafety: "Safety Plan: Prepare a personal digital safety plan before abuse escalates.",
                quickTitle: "Quick Actions",
                btnQuickDetect: "Check a message",
                btnQuickReport: "Log a new incident",
                btnQuickChatbot: "Talk to the bot",
                statsTitle: "Your Stats (Local Only)",
                statsDesc: "These numbers are stored only in your browser (localStorage) for demo purposes.",
                statsIncidents: "Incidents logged",
                statsAnalyses: "Messages analyzed",
                statsSafetyPlans: "Safety plans saved"
            },
            detect: {
                title: "TFGBV Risk Detection",
                desc: "Paste or speak a message, comment, or DM that you are worried about. The tool will highlight potentially harmful patterns and give you a risk level. This is not a perfect AI model; it is a demo showing how automated detection could work.",
                labelText: "Message or Comment",
                placeholder: "Paste or speak the content here...",
                analyze: "Analyze",
                resultTitle: "Analysis Result",
                riskLabel: "Risk level:",
                actionsTitle: "Recommended actions",
                noTextAlert: "Please paste or speak a message first."
            },
            report: {
                title: "Incident Reporting",
                desc: "Use this space to document incidents of TFGBV you experience or witness. When the backend is configured, each incident can also send an email notification to ELiDA automatically.",
                labelPlatform: "Where did it happen?",
                platformPlaceholder: "Select platform",
                labelType: "Type of TFGBV",
                typePlaceholder: "Select type",
                labelTitle: "Short title",
                labelDescription: "Describe what happened",
                labelDate: "Date (approximate is okay)",
                labelSeverity: "Severity",
                labelUrgency: "Do you feel in immediate danger?",
                labelNotify: "Email ELiDA automatically about this incident (via backend API).",
                btnSubmit: "Save incident",
                successPrefix: "Incident saved with Case ID: ",
                successSuffix: " You can reference this when seeking support.",
                errorRequired: "Please complete the required fields.",
                errorBackend: "Incident saved locally, but there was a problem notifying ELiDA. Please check server configuration.",
                logTitle: "Your Local Incident Log",
                logDesc: "Only stored in your browser for demo purposes.",
                logEmpty: "No incidents saved yet."
            },
            chatbot: {
                title: "Support Chatbot (Prototype)",
                desc: "This is a rule-based demo of a TFGBV support chatbot. It is not a replacement for professional legal, medical, or psychosocial support – but it shows how a bot could respond with empathy, basic guidance, and links to resources.",
                welcome: "Hi, I’m your SafeWeb assistant. I can explain TFGBV, help you think through your options, and suggest where you might find support. Please avoid sharing real names or very identifying details here.",
                inputPlaceholder: "Type your message...",
                btnSend: "Send"
            },
            awareness: {
                title: "Awareness & Learning Hub",
                desc: "Understanding TFGBV is the first step to preventing it. These cards show how the app could host localized content, survivor stories, campus policies, and referral pathways."
            },
            safety: {
                title: "Personal Digital Safety Plan",
                desc: "A safety plan helps you think in advance about what you can do if TFGBV escalates. You can fill this in, save it in your browser, and edit it any time.",
                labelContacts: "Trusted contacts (friends, family, mentors)",
                labelPlatforms: "Platforms you use most",
                labelSteps: "Steps I will take if I’m targeted online",
                labelHelplines: "Local helplines / services I can contact",
                btnSave: "Save safety plan",
                previewTitle: "My Saved Safety Plan",
                previewEmpty: "No safety plan saved yet.",
                saveSuccess: "Safety plan saved on this device."
            },
            footer: "SafeWeb – TFGBV Digital Safety Toolkit (Prototype for ELiDA Hackathon)"
        },
        // NOTE: Amharic and Afaan Oromo translations are approximate; please review with native speakers.
        am: {
            appTitle: "SafeWeb",
            appTagline: "የዲጂታል ደህንነት እና የTFGBV መልስ መሳሪያ",
            languageLabel: "ቋንቋ",
            nav: {
                dashboard: "መጀመሪያ ገጽ",
                detect: "መለየት",
                report: "ሪፖርት",
                chatbot: "ቻትቦት",
                awareness: "እውቀት",
                safety: "የደህንነት እቅድ"
            },
            dashboard: {
                title: "ወደ SafeWeb እንኳን ሰላምታ መጡ",
                intro1: "ይህ ፕሮቶታይፕ የ ELiDA ዲጂታል መሳሪያ ቻለንጅን ለመደገፍ ለ ቴክኖሎጂ ተጋላጭ ጾታ-አይነት ጥቃት (TFGBV) መቃቋም ተሰርቷል።",
                intro2: "SafeWeb መለያየት ፣ ሪፖርት ፣ የድጋፍ ቻትቦት ፣ የእውቀት መረጃ እና የግል የዲጂታል ደህንነት እቅድን በአንድ ቀላል መተግበሪያ ውስጥ ያካትታል።",
                featureDetect: "መለየት፡ መልዕክቶችን እና አስተያየቶችን የTFGBV ምልክቶች እንዳሉባቸው ይመርመሩ።",
                featureReport: "ሪፖርት፡ ጉዳዮችን ይመዝግቡ እና ከድጋፍ አገልግሎት ጋር ለመጠቀም Case ID ይፍጠሩ።",
                featureChatbot: "ቻትቦት፡ 24/7 የሚገኝ የስሜት ድጋፍ እና ምክር።",
                featureAwareness: "እውቀት፡ TFGBV ምንድን እንደሆነ ፣ መብቶትን እና መከላከያ መንገዶችን ይማሩ።",
                featureSafety: "የደህንነት እቅድ፡ ጥቃት ከማበዛት በፊት የግል የዲጂታል ደህንነት እቅድ ይዘጋጁ።",
                quickTitle: "ፈጣን ተግባራት",
                btnQuickDetect: "መልዕክት መፈተሽ",
                btnQuickReport: "አዲስ ሪፖርት መመዝገብ",
                btnQuickChatbot: "ከቻትቦት ጋር መነጋገር",
                statsTitle: "ስታቲስቲክስ (በዚህ መሣሪያ ብቻ)",
                statsDesc: "እነዚህ ቁጥሮች በአንተ አሳሽ (browser localStorage) ውስጥ ብቻ ይቀመጣሉ።",
                statsIncidents: "የተመዘገቡ ጉዳዮች",
                statsAnalyses: "የተተነበዩ መልዕክቶች",
                statsSafetyPlans: "የተቀመጡ የደህንነት እቅዶች"
            },
            detect: {
                title: "የTFGBV ምክንያት መለያየት",
                desc: "የምታስጨንቅህን መልዕክት ፣ አስተያየት ወይም DM በማስገባት ወይም በመናገር ላክ። መሣሪያው አደገኛ ሊሆኑ የሚችሉ ቃላትን ይጠቁማል እና የስጋት ደረጃ ይሰጥሃል። ይህ ፕሮቶታይፕ ነው ፣ ፍጹም የአርቲፊሻል ኢንተለጀንስ ሞዴል አይደለም።",
                labelText: "መልዕክት ወይም አስተያየት",
                placeholder: "መልዕክቱን እዚህ ያስገቡ ወይም ይናገሩ...",
                analyze: "መተንተን",
                resultTitle: "የትንታኔ ውጤት",
                riskLabel: "የስጋት ደረጃ፦",
                actionsTitle: "የሚመከሩ እርምጃዎች",
                noTextAlert: "እባኮትን መጀመሪያ መልዕክት ያስገቡ ወይም ይናገሩ።"
            },
            report: {
                title: "የጉዳይ ሪፖርት መመዝገቢያ",
                desc: "የተጋለጡበትን ወይም የታዩትን TFGBV ጉዳዮች እዚህ ይመዝግቡ። ባከንድ ከተዘጋጀ በኋላ ሪፖርቶች በኤሜይል ወደ ELiDA ሊተላለፉ ይችላሉ።",
                labelPlatform: "ጉዳዩ የተፈጠረበት መድረክ",
                platformPlaceholder: "መድረክ ይምረጡ",
                labelType: "የTFGBV አይነት",
                typePlaceholder: "አይነት ይምረጡ",
                labelTitle: "አጭር ርእስ",
                labelDescription: "የተፈጠረውን ነገር ይገልጹ",
                labelDate: "ቀን (ገምታዊ መሆኑ ይቻላል)",
                labelSeverity: "ጉዳዩ ከባድነት",
                labelUrgency: "በቀጥታ አደጋ ውስጥ ያሉ እንደሆነ ተሰማዎታ?",
                labelNotify: "ይህን ሪፖርት በባከንድ ኤፒአይ በኩል በራስ-ሰር ወደ ELiDA በኢሜይል መላክ።",
                btnSubmit: "ሪፖርት መቀመጫ",
                successPrefix: "ጉዳዩ በ Case ID ተመዝግቧል፦ ",
                successSuffix: " እንደዚህ ሲሉ ከድጋፍ አገልግሎት ጋር ማጣመር ትችላለህ።",
                errorRequired: "እባክዎ አስፈላጊ መስኮችን ሁሉ ይሙሉ።",
                errorBackend: "ጉዳዩ በአሳሽዎ ላይ ተመዝግቧል፣ ግን ELiDA ለማሳወቅ ችግኝ ተፈጥሯል። የserver ቅንብርን ያረጋግጡ።",
                logTitle: "በአሳሽ ላይ የተመዘገቡ ጉዳዮች",
                logDesc: "ሁሉም መረጃ በአንተ አሳሽ (browser) ውስጥ ብቻ ይቀመጣሉ።",
                logEmpty: "ጉዳይ አልተመዘገበም።"
            },
            chatbot: {
                title: "የድጋፍ ቻትቦት (ፕሮቶታይፕ)",
                desc: "ይህ ቻትቦት የTFGBV ጉዳዮችን ከአስፈላጊ መረጃ እና ድጋፍ ጋር የሚያቀርብ ቀላል መሳሪያ ነው። የህክምና ፣ የህግ ወይም የስነ-ልቦና ባለሙያ እርዳታን አይተካም።",
                welcome: "ሰላም ፣ እኔ የ SafeWeb የድጋፍ ቻትቦት ነኝ። TFGBV ምንድን እንደሆነ እንዲያውቁ ፣ አማራጮትን እንዲያስቡ እና የድጋፍ አገልግሎቶችን እንዴት እንደሚገኙ ልጠብቃችሁ እችላለሁ። እባክዎ የግል ስሞች እና በጣም ሊለዩ የሚችሉ መረጃዎችን አትጋሩ።",
                inputPlaceholder: "መልዕክትዎን እዚህ ይጻፉ...",
                btnSend: "ላክ"
            },
            awareness: {
                title: "የእውቀት እና ማስተዋል ማዕከል",
                desc: "TFGBV ምንድን እንደሆነ መረዳት የመከላከል መጀመሪያ ደረጃ ነው። እነዚህ ካርዶች የአካባቢ መረጃዎች ፣ ታሪኮች እና ህጎች መረዳት እንዴት እንደሚቻል ያሳያሉ።"
            },
            safety: {
                title: "የግል የዲጂታል ደህንነት እቅድ",
                desc: "TFGBV ሲጨምር ምን እንደሚያደርጉ በቀድሞ ማሰብ ይህ እቅድ ይረዳዎታል። መረጃው በአሳሽዎ ላይ ብቻ ይቀመጣል።",
                labelContacts: "የምታመኑባቸው ጓደኞች ፣ ቤተሰብ እና መምህራን",
                labelPlatforms: "በየቀኑ የምትጠቀሙባቸው መድረኮች",
                labelSteps: "መለያየት ከተጀመረ በኋላ የምንወስዳቸው እርምጃዎች",
                labelHelplines: "የአካባቢ የረዳት መስመሮች / አገልግሎቶች",
                btnSave: "የደህንነት እቅድ ማስቀመጫ",
                previewTitle: "የተቀመጠው የደህንነት እቅድ",
                previewEmpty: "እስካሁን የደህንነት እቅድ አልተቀመጠም።",
                saveSuccess: "የደህንነት እቅድ በዚህ መሣሪያ ተቀምጧል።"
            },
            footer: "SafeWeb – የTFGBV የዲጂታል ደህንነት መሳሪያ (ELiDA Hackathon ፕሮቶታይፕ)"
        },
        om: {
            appTitle: "SafeWeb",
            appTagline: "Meeshaa Nageenya Dijitaalaa fi Deebii TFGBV",
            languageLabel: "Afaan",
            nav: {
                dashboard: "Fuula Jalqabaa",
                detect: "Argachuu",
                report: "Gabaasa",
                chatbot: "Chaatii-botii",
                awareness: "Beekumsa",
                safety: "Karoora Nageenyaa"
            },
            dashboard: {
                title: "SafeWeb irratti Baga Nagaan Dhuftan",
                intro1: "Prototayipiin kun carraa deggersa misoomaa ELiDAf kan qophaaʼe yoo taʼu, miidhaa saala irratti hundaaʼe kan teknoolojiin itti gargaaramtu (TFGBV) irraa ittisuuf hojjetame.",
                intro2: "SafeWeb toora tokko keessatti meeshaalee akka argannoo, gabaasa, chaatii-botii deeggarsaa, odeeffannoo hubannoo fi karoora nageenyaa dhuunfaa walitti fidda.",
                featureDetect: "Argannoo: Ergaa fi yaada interneetii sakattaʼa; mallattoo TFGBV ni agarsiisa.",
                featureReport: "Gabaasa: Haala miidhaa keessa dabre galmeessi; Case ID ittiin deeggarsa barbaaddu argadhu.",
                featureChatbot: "Chaatii-botii: Deeggarsa sammuu fi gorsa guyyaa fi halkan argadhu.",
                featureAwareness: "Beekumsa: Maal akka TFGBV taʼe, mirga kee fi mala of eegu baradhu.",
                featureSafety: "Karoora Nageenyaa: Yeroo miidhaan cimu dura karoora nageenyaa dijitaalaa dhuunfaa qopheessi.",
                quickTitle: "Gochoota Ariifataa",
                btnQuickDetect: "Ergaa sakattaʼi",
                btnQuickReport: "Gabaasa haaraa galmeessi",
                btnQuickChatbot: "Chaatii-bot wajjin haasaʼi",
                statsTitle: "Lakkoofsa (naannoo kana qofatti)",
                statsDesc: "Lakkoofsi kunniin browser kee keessatti qofa ni kuufamu (localStorage).",
                statsIncidents: "Gabaasawwan galmaaʼan",
                statsAnalyses: "Ergaawwan sakattaʼaman",
                statsSafetyPlans: "Karoora nageenyaa kuufame"
            },
            detect: {
                title: "Argannoo Miidhaa TFGBV",
                desc: "Ergaa, yaada, yookaan DM isin sodaachise as kattaa yookaan haasaʼi. Meeshaan kun jechoota miidhaa geessisan adda baasa, sadarkaa sodaachisaa siif ibsa. Kun prototayipii qofa; model AI guutuu miti.",
                labelText: "Ergaa yookaan Yaada",
                placeholder: "Ergaan isaa as galchi yookaan haasaʼi...",
                analyze: "Sakattaʼi",
                resultTitle: "Buʼaa Sakattaʼaa",
                riskLabel: "Sadarkaa sodaachisaa:",
                actionsTitle: "Tarkaanfiiwwan gorsaman",
                noTextAlert: "Mee jalqaba ergaa yookaan haasaʼi."
            },
            report: {
                title: "Galmee Gabaasa Miidhaa",
                desc: "Miidhaa TFGBV keessa dabartanii yookaan argitan as galmeessuu dandeessu. Bakka-buʼinsa backend yoo qopheessanitti, gabaasni hundi emailiin gara ELiDA tti ergamee ni mulʼata.",
                labelPlatform: "Eessaa irratti taʼe?",
                platformPlaceholder: "Platform filadhu",
                labelType: "Gosa TFGBV",
                typePlaceholder: "Gosa filadhu",
                labelTitle: "Mata-duree gabaabaa",
                labelDescription: "Haala miidhaa sanaa balʼinaan ibsi",
                labelDate: "Guyyaa (yeroo muraasa yoo taʼes ni taʼa)",
                labelSeverity: "Sadarkaa hamaa",
                labelUrgency: "Amma saffisaan sodaachisaa taʼee isin qunnamee?",
                labelNotify: "Gabaasni kun backend API fayyadamuun emailiin gara ELiDA haa ergame.",
                btnSubmit: "Gabaasa kuusi",
                successPrefix: "Gabaasni Case ID kanaan galmaaʼe: ",
                successSuffix: " Deeggarsa barbaaddu yeroo gaafattu Case ID kana fayyadamuu dandeessa.",
                errorRequired: "Malfaktoonni barbaachisan hundi guutamuu qabu.",
                errorBackend: "Gabaasni browser kee keessatti ni kuufame; garuu ELiDA beeksisuuf dogoggorri jira. Qindaaʼina server sirreessi.",
                logTitle: "Galmee gabaasota kee (naannoo kana qofa)",
                logDesc: "Odeeffannoon hundi browser keessan keessatti qofa ni kuufama.",
                logEmpty: "Gabaasni ammaaf hin jiru."
            },
            chatbot: {
                title: "Chaatii-botii Deeggarsaa (Prototayipii)",
                desc: "Chaatii-botii kun odeeffannoo fi deeggarsa salphaa miidhaa TFGBV irratti kennuuf kan qophaaʼe dha. Tajaajila ogeessa fayyaa, seeraa yookaan sammuu bakka hin buutu.",
                welcome: "Akkam jirtu, ani gargaaraa SafeWeb ti. TFGBV maal akka taʼe siif ibsuun, filannoo kee ittiin yaadattu fi bakka deeggarsi argamu siif agarsiisuun nan dandaʼa. Maaloo maqaa namaa fi odeeffannoo si adda baasu hedduu hin qoodin.",
                inputPlaceholder: "Ergaa kee asii barreessi...",
                btnSend: "Ergi"
            },
            awareness: {
                title: "Buʼaa Beekumsaa fi Hubannoo",
                desc: "TFGBV beekuun dura ittiin of-eegu dha. Kaardiiwwan kun odeeffannoo naannoo, seerota, akkasumas tajaajila deeggarsaa adda addaa hammachiisuun ni agarsiisu."
            },
            safety: {
                title: "Karoora Nageenyaa Dijitaalaa Dhuunfaa",
                desc: "Karoora nageenyaa qabaachuun, miidhaan yammuu hammaatu tarkaanfii maal fudhattu akka beektu si gargaara. Odeeffannoon kun browser kee keessatti qofa ni kuufama.",
                labelContacts: "Namoota amanamoo (hiriyoota, maatii, barsiisota)",
                labelPlatforms: "Platformoota yeroo baayʼee itti fayyadamtu",
                labelSteps: "Yoo interneetii irratti na miidhan maal nan godha?",
                labelHelplines: "Lakkoofsa bilbilaa fi tajaajiloota naannoo",
                btnSave: "Karoora nageenyaa kuusi",
                previewTitle: "Karoora nageenyaa koo",
                previewEmpty: "Karoora nageenyaa hin kuufamne.",
                saveSuccess: "Karoora nageenyaa siʼa kanaatti meeshaa kana irratti kuufame."
            },
            footer: "SafeWeb – Meeshaa Nageenyaa Dijitaalaa fi TFGBV (Prototayipii ELiDA Hackathon)"
        }
    };

    let currentLang = localStorage.getItem("sw_lang") || "en";
    let lastBotReplyText = "";

    function $(id) {
        return document.getElementById(id);
    }

    // ---------- VIEW NAVIGATION ----------
    const views = document.querySelectorAll(".view");
    const navButtons = document.querySelectorAll(".nav-btn");
    const quickButtons = document.querySelectorAll(".quick-actions button");

    function showView(id) {
        views.forEach(v => v.classList.toggle("active", v.id === id));
        navButtons.forEach(btn => btn.classList.toggle("active", btn.dataset.target === id));
    }

    navButtons.forEach(btn => {
        btn.addEventListener("click", () => showView(btn.dataset.target));
    });

    quickButtons.forEach(btn => {
        btn.addEventListener("click", () => showView(btn.dataset.target));
    });

    // ---------- LOCAL STORAGE HELPERS ----------
    function getLocalJson(key, fallback) {
        try {
            const v = localStorage.getItem(key);
            return v ? JSON.parse(v) : fallback;
        } catch (e) {
            return fallback;
        }
    }
    function setLocalJson(key, value) {
        localStorage.setItem(key, JSON.stringify(value));
    }

    function refreshStats() {
        const incidents = getLocalJson("sw_incidents", []);
        const analyses = Number(localStorage.getItem("sw_analyses") || "0");
        const safety = getLocalJson("sw_safety_plan", null) ? 1 : 0;

        $("stat-incidents").textContent = incidents.length;
        $("stat-analyses").textContent = analyses;
        $("stat-safety-plans").textContent = safety;
    }

    // ---------- LANGUAGE SWITCHING ----------
    const langSelect = $("lang-select");

    function applyTranslations() {
        const t = i18n[currentLang];

        // Header
        $("text-app-title").textContent = t.appTitle;
        $("text-app-tagline").textContent = t.appTagline;
        $("label-language").textContent = t.languageLabel;

        $("nav-dashboard").textContent = t.nav.dashboard;
        $("nav-detect").textContent = t.nav.detect;
        $("nav-report").textContent = t.nav.report;
        $("nav-chatbot").textContent = t.nav.chatbot;
        $("nav-awareness").textContent = t.nav.awareness;
        $("nav-safety").textContent = t.nav.safety;

        // Dashboard
        $("dash-title").textContent = t.dashboard.title;
        $("dash-intro-1").textContent = t.dashboard.intro1;
        $("dash-intro-2").textContent = t.dashboard.intro2;
        $("dash-feature-detect").innerHTML = "<strong>" + t.nav.detect + ":</strong> " + t.dashboard.featureDetect.split(": ").slice(-1)[0];
        $("dash-feature-report").innerHTML = "<strong>" + t.nav.report + ":</strong> " + t.dashboard.featureReport.split(": ").slice(-1)[0];
        $("dash-feature-chatbot").innerHTML = "<strong>" + t.nav.chatbot + ":</strong> " + t.dashboard.featureChatbot.split(": ").slice(-1)[0];
        $("dash-feature-awareness").innerHTML = "<strong>" + t.nav.awareness + ":</strong> " + t.dashboard.featureAwareness.split(": ").slice(-1)[0];
        $("dash-feature-safety").innerHTML = "<strong>" + t.nav.safety + ":</strong> " + t.dashboard.featureSafety.split(": ").slice(-1)[0];

        $("dash-quick-title").textContent = t.dashboard.quickTitle;
        $("btn-quick-detect").textContent = t.dashboard.btnQuickDetect;
        $("btn-quick-report").textContent = t.dashboard.btnQuickReport;
        $("btn-quick-chatbot").textContent = t.dashboard.btnQuickChatbot;

        $("dash-stats-title").textContent = t.dashboard.statsTitle;
        $("dash-stats-desc").textContent = t.dashboard.statsDesc;
        $("stat-incidents-label").textContent = t.dashboard.statsIncidents;
        $("stat-analyses-label").textContent = t.dashboard.statsAnalyses;
        $("stat-safety-plans-label").textContent = t.dashboard.statsSafetyPlans;

        // Detect
        $("detect-title").textContent = t.detect.title;
        $("detect-desc").textContent = t.detect.desc;
        $("detect-label-text").textContent = t.detect.labelText;
        $("detect-text").placeholder = t.detect.placeholder;
        $("analyze-btn").textContent = t.detect.analyze;
        $("detect-result-title").textContent = t.detect.resultTitle;
        $("detect-risk-label").textContent = t.detect.riskLabel;
        $("detect-actions-title").textContent = t.detect.actionsTitle;

        // Report
        $("report-title").textContent = t.report.title;
        $("report-desc").textContent = t.report.desc;
        $("report-label-platform").textContent = t.report.labelPlatform;
        $("report-platform-placeholder").textContent = t.report.platformPlaceholder;
        $("report-label-type").textContent = t.report.labelType;
        $("report-type-placeholder").textContent = t.report.typePlaceholder;
        $("report-label-title").textContent = t.report.labelTitle;
        $("report-label-description").textContent = t.report.labelDescription;
        $("report-label-date").textContent = t.report.labelDate;
        $("report-label-severity").textContent = t.report.labelSeverity;
        $("report-label-urgency").textContent = t.report.labelUrgency;
        $("report-label-notify").textContent = t.report.labelNotify;
        $("report-btn-submit").textContent = t.report.btnSubmit;
        $("report-log-title").textContent = t.report.logTitle;
        $("report-log-desc").textContent = t.report.logDesc;
        $("report-log-empty").textContent = t.report.logEmpty;

        // Chatbot
        $("chatbot-title").textContent = t.chatbot.title;
        $("chatbot-desc").textContent = t.chatbot.desc;
        $("chatbot-welcome").textContent = t.chatbot.welcome;
        $("chat-input").placeholder = t.chatbot.inputPlaceholder;
        $("chat-btn-send").textContent = t.chatbot.btnSend;

        // Awareness
        $("awareness-title").textContent = t.awareness.title;
        $("awareness-desc").textContent = t.awareness.desc;

        // Safety
        $("safety-title").textContent = t.safety.title;
        $("safety-desc").textContent = t.safety.desc;
        $("safety-label-contacts").textContent = t.safety.labelContacts;
        $("safety-label-platforms").textContent = t.safety.labelPlatforms;
        $("safety-label-steps").textContent = t.safety.labelSteps;
        $("safety-label-helplines").textContent = t.safety.labelHelplines;
        $("safety-btn-save").textContent = t.safety.btnSave;
        $("safety-preview-title").textContent = t.safety.previewTitle;
        $("safety-preview-empty").textContent = t.safety.previewEmpty;

        // Footer
        $("footer-text").textContent = t.footer;
    }

    langSelect.value = currentLang;
    langSelect.addEventListener("change", () => {
        currentLang = langSelect.value;
        localStorage.setItem("sw_lang", currentLang);
        applyTranslations();
    });

    // ---------- VOICE UTILITIES ----------
    function getSpeechLangCode() {
        if (currentLang === "am") return "am-ET";
        if (currentLang === "om") return "om-ET"; // may fall back
        return "en-US";
    }

    function speak(text) {
        if (!("speechSynthesis" in window)) return;
        const utter = new SpeechSynthesisUtterance(text);
        utter.lang = getSpeechLangCode();
        const voices = window.speechSynthesis.getVoices();
        const match = voices.find(v => v.lang === utter.lang) || voices.find(v => v.lang.startsWith(utter.lang.split("-")[0]));
        if (match) utter.voice = match;
        window.speechSynthesis.speak(utter);
    }

    function startRecognition(onResult) {
        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        if (!SpeechRecognition) {
            alert("Speech recognition is not supported in this browser.");
            return;
        }
        const rec = new SpeechRecognition();
        rec.lang = getSpeechLangCode();
        rec.interimResults = false;
        rec.maxAlternatives = 1;
        rec.onresult = (e) => {
            const text = e.results[0][0].transcript;
            onResult(text);
        };
        rec.onerror = () => {};
        rec.start();
    }

    // ---------- DETECTION MODULE ----------
    const riskyKeywords = [
        "kill you", "rape you", "slut", "whore", "bitch", "cunt",
        "leak your nudes", "post your photos", "send me nudes",
        "share your pics", "doxx", "address is", "i know where you live",
        "stupid woman", "you people", "burn you", "acid", "honour killing",
        "revenge porn", "slap you", "beat you", "fag", "dyke", "gay freak"
    ];

    function analyzeText(text) {
        const lower = text.toLowerCase();
        let score = 0;
        const matches = [];

        riskyKeywords.forEach(kw => {
            if (lower.includes(kw)) {
                score += 3;
                matches.push(kw);
            }
        });

        if (/[iI][' ]?ll (kill|hurt|beat|destroy)/.test(text)) {
            score += 4;
            matches.push("Threat of physical violence");
        }
        if (/send (me )?(nudes|pics)/i.test(text)) {
            score += 3;
            matches.push("Pressure for sexual images");
        }
        if (/(you|u) (are|r) (a )?(bitch|whore|slut|cunt)/i.test(text)) {
            score += 3;
            matches.push("Gendered insult");
        }
        if (/(i will|gonna) (post|share) (your|ur) (photos|pics|nudes)/i.test(text)) {
            score += 4;
            matches.push("Threat to share private images");
        }

        if (!text.trim()) return null;

        let level, summary, actions;
        if (score >= 7) {
            level = "HIGH";
            summary = {
                en: "This message contains serious red flags for TFGBV, including threats, gendered insults or image-based abuse.",
                am: "ይህ መልዕክት ከባድ የTFGBV ምልክቶች አሉት፣ ስለሚሉ ማስታወሻዎች፣ ጾታ የተመለከቱ ስድብ ቃላት ወይም እይታ ተመስርቶ ጥቃት ይጠቁማል።",
                om: "Ergichi mallattoo sodaachisaa TFGBV cimaa qaba; doorsisaa, jechoota saala arrabsaa fi suuraa balleessaa fayyadamu of keessaa qaba."
            }[currentLang] || "";
            actions = [
                {
                    en: "If you feel in immediate danger, contact emergency services or a trusted person right away.",
                    am: "በቀጥታ አደጋ እንዳሉ ከተሰማዎት ፣ እባክዎ ፈጣን አስቸኳይ አገልግሎት ወይም የምታመኑበትን ሰው ያናግሩ።",
                    om: "Yoo sodaa saffisaa keessa jirtan taʼe, tajaajila hatattamaa yookaan nama amanamtuu tokkotti bilbila."
                },
                {
                    en: "Take screenshots and save evidence in a safe place (not only on one device).",
                    am: "ስክሪንሹት ይውሰዱ እና ማስረጃውን በደህና ቦታ ያስቀምጡ፣ በአንድ መሣሪያ ብቻ አይድሉም።",
                    om: "Screenshot fudhadhu; ragaa kee bakka nageenya qabu keessatti kuusi, meeshaa tokkotti qofa hin kuusin."
                },
                {
                    en: "Block and report the account on the platform.",
                    am: "መነሻውን አካውንት ይቆም እና በመድረኩ ላይ ያመልክቱ።",
                    om: "Akkaawunticha ugguri; platform irratti gabaasi."
                },
                {
                    en: "Consider contacting a local helpline, GBV service, or legal aid organisation.",
                    am: "የአካባቢ የመረጃ መስመሮችን ፣ የGBV አገልግሎትን ወይም የሕግ እገዛ ድርጅቶችን ማነጋገር ይመርምሩ።",
                    om: "Lakkoofsa bilbilaa deeggarsaa, tajaajila GBV yookaan dhaabbilee deeggarsa seeraa quunnami."
                }
            ].map(a => a[currentLang] || a.en);
        } else if (score >= 3) {
            level = "MEDIUM";
            summary = {
                en: "This message shows concerning behaviour that might be part of TFGBV (harassment, pressure or degrading language).",
                am: "ይህ መልዕክት ከTFGBV ጋር የተያያዙ የሚያስጨንቁ ባህሪያት (ማስቃወም፣ ግፍ ማድረግ ወይም የስድብ ቃላት) ሊኖሩበት ይችላሉ።",
                om: "Ergichi amala sodaachisaa kan akka doorsisaa, arrabsoo fi dhiibbaa agarsiisa; TFGBV keessaa taʼuu dandaʼa."
            }[currentLang] || "";
            actions = [
                {
                    en: "Set clear boundaries and avoid engaging further if it does not feel safe.",
                    am: "ግዴታዎትን ግልጽ ያድርጉ እና እርስዎን ካልከበረ ውይይት አቁሙ።",
                    om: "Daangaa kee ifa godhi; yoo nageenya hin argamsiisin itti fufuu dhiisi."
                },
                {
                    en: "Screenshot and store the evidence if the behaviour continues.",
                    am: "ባህሪው ከቀጠለ ፣ ስክሪንሹት ይውሰዱ እና ማስረጃውን ያስቀመጡ።",
                    om: "Yoo itti fufe screenshot fudhadhu; ragaa kee kuusi."
                },
                {
                    en: "Use platform tools like block, mute, or restrict.",
                    am: "በመድረኩ ላይ ያሉ መሣሪያዎችን (block, mute, restrict) ይጠቀሙ።",
                    om: "Meeshalee akka block, mute fi restrict jedhaman fayyadami."
                },
                {
                    en: "Talk to a trusted friend, mentor, or counsellor if you can.",
                    am: "ተተማመነው ካሉ ጓደኞች፣ መምህራን ወይም አማካሪዎች ጋር ይነጋገሩ።",
                    om: "Yoo dandeesse hiriyya, maatii yookaan nama gorsiif amanamtuu waliin haasaʼi."
                }
            ].map(a => a[currentLang] || a.en);
        } else {
            level = "LOW";
            summary = {
                en: "The tool did not detect obvious high-risk TFGBV patterns, but that does not mean the message is okay. Your feelings matter.",
                am: "መሣሪያው ከባድ የTFGBV ምልክቶችን አልተገናኘም፣ ግን ይህ መልዕክት ጥሩ ማለት አይደለም። ስሜትዎ አስፈላጊ ነው።",
                om: "Meeshaan kun mallattoo sodaachisaa guddaa hin arganne; garuu ergichi kun gaarii jechu miti. Yaada fi ilaalchi kee barbaachisaa dha."
            }[currentLang] || "";
            actions = [
                {
                    en: "Trust your instincts – if something feels wrong, it is important.",
                    am: "በልብዎ ያለውን ይታሰቡ፤ ነገሩ የማይሰማዎት ከሆነ አስፈላጊ ነው።",
                    om: "Yeroo sodaan sitti dhagahame amani; yoo dogoggoraa sitti fakkaate, qooda guddaa qaba."
                },
                {
                    en: "You can still block or mute the person if you are uncomfortable.",
                    am: "ራስዎን ካልተረጋገጡ ፣ ሰውየውን መከልከል ወይም መቆም ይችላሉ።",
                    om: "Yoo of hin amanne, nama sana ugguruun yookaan calʼisiisuun ni dandaʼama."
                },
                {
                    en: "If the behaviour escalates, document it and seek support.",
                    am: "ባህሪው ከቀጠለ እና ከባድ ከሆነ ፣ ይመዝገቡት እና ድጋፍ ፈልጉ።",
                    om: "Yoo haalaan hammaate, haala sana galmeessi; deeggarsa barbaadi."
                }
            ].map(a => a[currentLang] || a.en);
        }

        return { level, summary, matches, actions };
    }

    const analyzeBtn = $("analyze-btn");
    const detectText = $("detect-text");
    const detectResult = $("detect-result");
    const riskLevelEl = $("risk-level");
    const riskSummaryEl = $("risk-summary");
    const riskKeywordsEl = $("risk-keywords");
    const riskActionsEl = $("risk-actions");
    const detectVoiceBtn = $("btn-detect-voice");
    const detectSpeakBtn = $("btn-detect-speak");

    analyzeBtn.addEventListener("click", () => {
        const text = detectText.value;
        const t = i18n[currentLang];
        const result = analyzeText(text);
        if (!result) {
            alert(t.detect.noTextAlert);
            return;
        }
        localStorage.setItem("sw_analyses", Number(localStorage.getItem("sw_analyses") || "0") + 1);

        riskLevelEl.textContent = result.level;
        riskSummaryEl.textContent = result.summary;
        riskKeywordsEl.innerHTML = "";
        riskActionsEl.innerHTML = "";

        if (result.matches.length) {
            result.matches.forEach(m => {
                const span = document.createElement("span");
                span.className = "pill";
                span.textContent = m;
                riskKeywordsEl.appendChild(span);
            });
        } else {
            const span = document.createElement("span");
            span.className = "pill";
            span.textContent = "No specific risky phrase detected";
            riskKeywordsEl.appendChild(span);
        }

        result.actions.forEach(a => {
            const li = document.createElement("li");
            li.textContent = a;
            riskActionsEl.appendChild(li);
        });

        detectResult.classList.remove("hidden");
        refreshStats();
    });

    detectVoiceBtn.addEventListener("click", () => {
        startRecognition(text => {
            detectText.value = text;
        });
    });

    detectSpeakBtn.addEventListener("click", () => {
        if (riskSummaryEl.textContent) {
            speak(riskSummaryEl.textContent);
        }
    });

    // ---------- INCIDENT REPORTING + EMAIL NOTIFY ----------
    const incidentForm = $("incident-form");
    const incidentList = $("incident-list");
    const incidentSuccess = $("incident-success");
    const incidentError = $("incident-error");
    const notifyElidaCheckbox = $("notify-elida");

    function generateCaseId() {
        const ts = Date.now().toString(36).toUpperCase();
        const rand = Math.random().toString(36).substring(2, 6).toUpperCase();
        return "SW-" + ts + "-" + rand;
    }

    function renderIncidents() {
        const incidents = getLocalJson("sw_incidents", []);
        incidentList.innerHTML = "";
        const t = i18n[currentLang];
        if (!incidents.length) {
            incidentList.classList.add("empty");
            incidentList.innerHTML = '<p class="muted small" id="report-log-empty">' +
                t.report.logEmpty + "</p>";
            return;
        }
        incidentList.classList.remove("empty");
        incidents
            .slice()
            .reverse()
            .forEach(inc => {
                const div = document.createElement("div");
                div.className = "incident-item";
                div.innerHTML = `
                    <h4>${inc.title}</h4>
                    <div class="incident-meta">
                        <div><strong>Case ID:</strong> <span class="case-id">${inc.caseId}</span></div>
                        <div>${inc.type} · ${inc.platform} · ${inc.severity}</div>
                        <div>${inc.date || "Date not set"} · Danger now: ${inc.urgency}</div>
                    </div>
                `;
                incidentList.appendChild(div);
            });
    }

    incidentForm.addEventListener("submit", async (e) => {
        e.preventDefault();
        const t = i18n[currentLang];

        const platform = $("platform").value;
        const type = $("incident-type").value;
        const title = $("incident-title").value.trim();
        const description = $("incident-description").value.trim();
        const date = $("incident-date").value;
        const severity = $("severity").value;
        const urgency = $("urgency").value;
        const notifyElida = notifyElidaCheckbox.checked;

        if (!platform || !type || !title || !description) {
            alert(t.report.errorRequired);
            return;
        }

        const incidents = getLocalJson("sw_incidents", []);
        const caseId = generateCaseId();
        const incident = {
            caseId,
            platform,
            type,
            title,
            description,
            date,
            severity,
            urgency,
            notifyElida,
            createdAt: new Date().toISOString()
        };
        incidents.push(incident);
        setLocalJson("sw_incidents", incidents);

        incidentForm.reset();
        incidentSuccess.textContent = t.report.successPrefix + caseId + t.report.successSuffix;
        incidentSuccess.classList.remove("hidden");
        incidentError.classList.add("hidden");
        setTimeout(() => incidentSuccess.classList.add("hidden"), 7000);
        renderIncidents();
        refreshStats();

        if (notifyElida) {
            try {
                await fetch("/api/incidents", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(incident)
                });
            } catch (err) {
                incidentError.textContent = t.report.errorBackend;
                incidentError.classList.remove("hidden");
                setTimeout(() => incidentError.classList.add("hidden"), 7000);
            }
        }
    });

    // ---------- CHATBOT ----------
    const chatWindow = $("chat-window");
    const chatForm = $("chat-form");
    const chatInput = $("chat-input");
    const chatVoiceBtn = $("btn-chat-voice");
    const chatSpeakLastBtn = $("btn-chat-speak-last");

    function addMessage(text, from) {
        const message = document.createElement("div");
        message.className = "chat-message " + from;
        const bubble = document.createElement("div");
        bubble.className = "bubble";
        bubble.textContent = text;
        message.appendChild(bubble);
        chatWindow.appendChild(message);
        chatWindow.scrollTop = chatWindow.scrollHeight;
    }

    function botReply(userText) {
        const t = userText.toLowerCase();
        const lang = currentLang;

        if (t.includes("what is tfgbv") || t.includes("tfgbv")) {
            if (lang === "am") {
                return "TFGBV በቴክኖሎጂ መንገድ የሚፈጠር ጾታ ተመስርቶ ጥቃት ነው። በመስመር ላይ ማስቃወም፣ ያልተፈቀደ የምስል ፋይል ማካፈል፣ መከታተያ ፣ doxxing እና የሌሎች አካል ነው።";
            }
            if (lang === "om") {
                return "TFGBV jechuun miidhaa saalaa irratti hundaaʼe kan interneetii fi teknoolojiin itti gargaaramanidha. Fakkeenyaaf doorsisaa, akkaawuntii sobaa, suuraa e-mailiin erguu fi doxxing of keessaa qaba.";
            }
            return "TFGBV stands for Technology-Facilitated Gender-Based Violence. It includes online harassment, non-consensual image sharing, stalking, doxxing, impersonation, and other forms of abuse carried out using digital tools.";
        }
        if (t.includes("report") || t.includes("how do i report")) {
            if (lang === "am") {
                return "ጉዳዩን በአፍታ እና በዝርዝር መግለጽ እንዲቻል በመጀመሪያ በአፕሊኬሽኑ ውስጥ ያመዝግቡ። ስክሪንሹት ይውሰዱ ፣ በመድረኩ ላይ ቢቻል ቁጥጥር ያስፈልጋሉ እና የአካባቢ የGBV ተቋማትን ማነጋገር ይመከራል።";
            }
            if (lang === "om") {
                return "Miidhaa gabaasuuf: (1) Ragaa akka screenshot fi URL kuusi, (2) platform irratti akkaawunticha gabaasi, (3) namoota amanamoo fi tajaajila deeggarsaa naannoo quunnami.";
            }
            return "You can document what happened using the Report tab in this app. In real life, you can also: (1) screenshot evidence, (2) block and report the account on the platform, (3) reach out to a trusted person, and (4) contact local GBV or legal support services if available.";
        }
        if (t.includes("unsafe") || t.includes("threat") || t.includes("danger")) {
            if (lang === "am") {
                return "እንደዚህ ስለሚሰማዎ ይቅርታ እጠይቃለሁ። በቀጥታ አደጋ ከተሰማዎት ፣ ጤናዎን በመጀመሪያ ያስቡ እና አስቸኳይ መስመር፣ የምታመኑበት ሰው ወይም ተቋም ይደውሉ። ከሚጎዳዎ ጋር መወያየት አስፈላጊ ካልሆነ አቁሙ።";
            }
            if (lang === "om") {
                return "Yoo sodaan guddaan si muudee fi balaa hatattamaa keessa jirtu sitti dhagahame, iddoo nageenyi jiru deemi; tajaajila hatattamaa ykn nama amanamtii bilbili. Namicha si miidhuu deemu waliin mariʼachuu dhiisi.";
            }
            return "I am sorry you are facing that. If you feel in immediate danger, it is important to prioritise your safety: move to a safe place if possible, contact emergency services or someone you trust, and avoid responding to the person who is threatening you.";
        }
        if (t.includes("rights") || t.includes("law")) {
            if (lang === "am") {
                return "መብትዎ በሀገርዎ ሕግ ይመራል። ብዙ ቦታዎች ያልተፈቀደ የምስል ማካፈል፣ ከባድ ስጋትና ማስጠንቀቂያ ዓይነቶች የተከለከሉ ሊሆኑ ይችላሉ። የሕግ እገዛ ድርጅት ወይም የሴቶች መብት ተቋም ማነጋገር ይመከራል።";
            }
            if (lang === "om") {
                return "Mirgii kee seera biyya ati keessa jirtu irratti hundaaʼa. Bakka hedduu irratti suuraa humnaan erguu, doorsisaa cimaa fi miidhaan interneetii seeraan dhoorkamaniiru. Tajaajila seeraa naannoo, dhaabbilee mirga dubartootaa yookaan ABO irratti hundaʼan barbaadi.";
            }
            return "Your exact rights depend on your country, but in many places non-consensual image sharing, threats, and serious online harassment can be crimes. A local legal aid provider, women’s organisation or human rights group may help you understand the laws that apply.";
        }
        if (t.includes("sad") || t.includes("anxious") || t.includes("depressed")) {
            if (lang === "am") {
                return "ይህን ስለምትሰሙ እጅግ አሳዝኛለሁ። የመስመር ላይ ጥቃት ከፍተኛ የስነ-ልቦና ጫና ሊመጣ ይችላል። የምታመኑትን ሰው ወይም ስነ-ልቦና ባለሙያ መነጋገር ከቻሉ መሞከር ይረዳል፤ ከመድረኩ ጊዜ መውሰድና ትፈልጉትን ነገር መስራትም ጥቂት ሊያሳርፍ ይችላል።";
            }
            if (lang === "om") {
                return "Akka ammaa akkasitti gaddeetta jechuun na gaddisiisa. Miidhaan interneetii sammuu ni rakkisa. Yoo dandeesse nama si dhagahu fi si amanatu, yookaan ogeessa fayyaa sammuu waliin haasaʼi; yeroo muraasa interneetii irraa boqonnaa fudhachuu fi wantoota ati jaallattu hojjechuu ni gargaara.";
            }
            return "I am really sorry you are feeling this way. TFGBV can be emotionally exhausting. If possible, consider talking to someone you trust or a mental health professional. Taking breaks from the platform and doing things you enjoy can also help a little.";
        }
        if (t.includes("thank")) {
            if (lang === "am") {
                return "እኔን ስታገኙኝ እጅግ አመሰግናለሁ። የሚፈጠረው ነገር በእርስዎ ላይ አይጠራም፣ ደህና መሆን ዋና መብትዎ ነው።";
            }
            if (lang === "om") {
                return "Galatoomi ergaa koo waliin qooddeef. Miidhaa sitti geessame kanaaf ati itti gaafatamaa miti; nageenyi kee mirga kee ti.";
            }
            return "You are welcome. Remember, what is happening is not your fault, and you deserve to feel safe online and offline.";
        }

        // default supportive reply
        if (lang === "am") {
            return "ስለተካፈሉት እናመሰግናለን። ሁሉን አወቅኩ ብዬ ላልነበርም ፣ ደህና መሆን መብትዎ ነው። በመተግበሪያው ውስጥ ያለውን የመለያየትና የሪፖርት መሣሪያዎች መጠቀም ትችላለህ እና የምታመኑባቸውን ሰዎች ወይም ተቋማት መጠቀም ይመከራል።";
        }
        if (lang === "om") {
            return "Odeeffannoo kana na waliin qooduun kee galata guddaa qaba. Haala guutuu hin beeku taʼus, nageenyi kee murteessaa dha. Meeshaalee sakattaʼaa fi gabaasa kana fayyadami; namoota amanamtuu fi tajaajila deeggarsaa naannoo quunnamuuf yaali.";
        }
        return "Thank you for sharing that with me. I may not fully understand the situation, but you deserve to be safe and respected. You can use the Detect and Report tools in this app, and consider reaching out to trusted people or local support services for more personalised help.";
    }

    chatForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const text = chatInput.value.trim();
        if (!text) return;
        addMessage(text, "user");
        chatInput.value = "";
        setTimeout(() => {
            const reply = botReply(text);
            lastBotReplyText = reply;
            addMessage(reply, "bot");
            speak(reply);
        }, 300);
    });

    chatVoiceBtn.addEventListener("click", () => {
        startRecognition(text => {
            chatInput.value = text;
        });
    });

    chatSpeakLastBtn.addEventListener("click", () => {
        if (lastBotReplyText) {
            speak(lastBotReplyText);
        }
    });

    // ---------- AWARENESS CONTENT ----------
    const awarenessItems = [
        {
            key: "what_is_tfgbv",
            title: {
                en: "What counts as Technology-Facilitated GBV?",
                am: "TFGBV ምንድን ነው?",
                om: "TFGBV maal fakkeessa?"
            },
            tags: ["Basics", "Definition"],
            body: {
                en: "TFGBV includes behaviours like repeated harassment, threats, stalking, non-consensual sharing of images, doxxing, and using fake accounts to control or shame someone because of their gender or sexuality.",
                am: "TFGBV የተደጋጋሚ ማስቃወም፣ ማስጠንቀቂያ፣ መከታተያ፣ ያልተፈቀደ የምስል አካፋይነት፣ doxxing እና ሴቶችን ወይም LGBTQ+ ሰዎችን ለመቆጣጠር የሚተገበሩ የመስመር ላይ ጥቃቶችን ያካትታል።",
                om: "TFGBV jechuun doorsisaa interneetii, suuraa nama hin eeyyamiin qooduu, doxxing, hordoffii fi akkaawuntii sobaa fayyadamuun nama saala isaatiin arrabsuu fi toʼachuu of keessaa qaba."
            }
        },
        {
            key: "evidence",
            title: {
                en: "Why evidence matters",
                am: "ማስረጃ ስንዴት አስፈላጊ ነው?",
                om: "Ragaan maaliif barbaachisaa dha?"
            },
            tags: ["Practical tips"],
            body: {
                en: "If you feel safe to do so, keep screenshots, chat logs, and links as evidence. This can support you if you later decide to report the incident to a platform, school, employer, or authorities.",
                am: "ደህና እንደምትሰሙ ካለ ፣ ስክሪንሹት ይውሰዱ ፣ ሸክላ መልዕክቶችንና አገናኞችን ይጠብቁ። በኋላ ለመድረክ፣ ትምህርት ቤት፣ ሥራ ቦታ ወይም ሀላፊ አካላት ሲያመለክቱ ይረዳዎታል።",
                om: "Yoo of eeggannoo gahaa qabu taʼe screenshot, chaatii fi URL akka ragaa kuusuu ni dandeessa. Kun yeroo dhumaa miidhaa kana platform, mana barumsaa yookaan abbaa alangaa biraan gabaastutti si deeggara."
            }
        },
        {
            key: "mental_health",
            title: {
                en: "Looking after your mental health",
                am: "የስነ-ልቦና ጤናዎን መጠበቅ",
                om: "Fayyaa sammuu kee eegi"
            },
            tags: ["Self-care"],
            body: {
                en: "Being targeted online can lead to anxiety, sleep problems, and shame. It helps to take breaks from the platform, talk to trusted people, and remind yourself that the abuse is not your fault.",
                am: "በመስመር ላይ መተጋለጥ ጭንቀት፣ የእንቅልፍ ችግኝና ውርደት ስሜት ሊያመጣ ይችላል። ከመድረኩ ጊዜ በጊዜ መቆም ፣ ጥሩ የሆኑ ሰዎችን መነጋገር ፣ ጥቃቱ እርስዎ ምክንያት እንዳልሆነ ራስዎን ማስታወስ ይረዳል።",
                om: "Miidhaan interneetii soda, rafa dhabuu fi of komachiisuu fida. Platform irraa yeroo muraasa boqonnaa fudhachuu, namoota amanamtuu waliin haasaʼuu fi miidhaan sun siif yakka miti jechuun of yaadachiisuun gaarii dha."
            }
        },
        {
            key: "bystander",
            title: {
                en: "Helping a friend who is targeted",
                am: "ተጋለጠ ጓደኛን መርዳት",
                om: "Hiriyyaa miidhaa interneetii irra gaʼee gargaaruu"
            },
            tags: ["Bystander action"],
            body: {
                en: "Listen without blaming, believe their story, and ask how you can support them. Offer to help document evidence or report the account if they want that.",
                am: "ወዳጅዎን ሳትወቀሱ ተመልከቱ፣ የሚነግሩዎትን ያመኑ እና 'እንዴት እረዳህ?' ብለው ይጠይቁ። ካስፈለገ ማስረጃ በመሰብሰብ ወይም በመድረኩ ላይ ለመመለከት ስራ ይረዱት።",
                om: "Hiriyyaa kee yakka isaaf taasifame hin komatiin dhagahi; himannaa isaa amani; akkamitti si gargaaran jechuu dandeessa. Yeroo barbaade ragaa galmeessuu fi akkaawunticha gabaasuuf isaaf gargaari."
            }
        },
        {
            key: "security",
            title: {
                en: "Stronger passwords & 2FA",
                am: "ጠንካራ ማስገቢያ ቃላትና 2FA",
                om: "Jecha darbii cimaa fi 2FA"
            },
            tags: ["Safety"],
            body: {
                en: "Use strong, unique passwords and enable two-factor authentication (2FA) on your accounts. This makes it harder for abusive partners or strangers to break in or impersonate you.",
                am: "ጠንካራ እና ብቻዎን የሆነ የማስገቢያ ቃል ይጠቀሙ፣ በአካውንቶቻችሁ ላይ ሁለት-ደረጃ ማረጋገጫ (2FA) ያንቁ። ይህ አካውንትዎን በማስተናገድ እና በመተመን እንዲጠቅም ይከላከላል።",
                om: "Jecha darbii cimaa fi addaa fayyadami; akkasumas account kee irratti 2FA banuu yaali. Kun nama si miidhuu barbaadu yookaan nama si fakkeessuuf yaalu dura dhaabbata."
            }
        }
    ];

    const awarenessGrid = $("awareness-grid");
    function renderAwareness() {
        awarenessGrid.innerHTML = "";
        awarenessItems.forEach(item => {
            const card = document.createElement("div");
            card.className = "awareness-card";
            const tagsHtml = item.tags.map(t => '<span class="tag">' + t + "</span>").join("");
            const title = item.title[currentLang] || item.title.en;
            const body = item.body[currentLang] || item.body.en;
            card.innerHTML = `
                <h4>${title}</h4>
                <div class="tag-row">${tagsHtml}</div>
                <p class="small">${body}</p>
            `;
            awarenessGrid.appendChild(card);
        });
    }

    // ---------- SAFETY PLAN ----------
    const safetyForm = $("safety-form");
    const safetyPreview = $("safety-preview");
    const safetySuccess = $("safety-success");

    function renderSafetyPlan() {
        const plan = getLocalJson("sw_safety_plan", null);
        const t = i18n[currentLang];
        if (!plan) {
            safetyPreview.innerHTML = '<p id="safety-preview-empty">' + t.safety.previewEmpty + "</p>";
            safetyPreview.classList.add("muted", "small");
            return;
        }
        safetyPreview.classList.remove("muted", "small");
        safetyPreview.innerHTML = `
            <h4>${t.safety.labelContacts}</h4>
            <p>${plan.trustedContacts || "-"}</p>
            <h4>${t.safety.labelPlatforms}</h4>
            <p>${plan.platforms || "-"}</p>
            <h4>${t.safety.labelSteps}</h4>
            <p>${plan.steps || "-"}</p>
            <h4>${t.safety.labelHelplines}</h4>
            <p>${plan.helplines || "-"}</p>
        `;
    }

    safetyForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const t = i18n[currentLang];

        const trustedContacts = $("trusted-contacts").value.trim();
        const platforms = $("safety-platforms").value.trim();
        const steps = $("safety-steps").value.trim();
        const helplines = $("safety-helplines").value.trim();

        const plan = { trustedContacts, platforms, steps, helplines, updatedAt: new Date().toISOString() };
        setLocalJson("sw_safety_plan", plan);
        safetySuccess.textContent = t.safety.saveSuccess;
        safetySuccess.classList.remove("hidden");
        setTimeout(() => safetySuccess.classList.add("hidden"), 4000);
        renderSafetyPlan();
        refreshStats();
    });

    function loadSafetyForm() {
        const plan = getLocalJson("sw_safety_plan", null);
        if (!plan) return;
        $("trusted-contacts").value = plan.trustedContacts || "";
        $("safety-platforms").value = plan.platforms || "";
        $("safety-steps").value = plan.steps || "";
        $("safety-helplines").value = plan.helplines || "";
    }

    // ---------- INIT ----------
    applyTranslations();
    renderAwareness();
    renderIncidents();
    renderSafetyPlan();
    loadSafetyForm();
    refreshStats();
})();
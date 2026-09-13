/* =========================================================
   KRISHIRAKSHAK AI
   SMART FARMING ASSISTANT
   COMPLETE FRONTEND SCRIPT
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* =====================================================
       API
       ===================================================== */

    const API_BASE = "http://127.0.0.1:3000";

    /* =====================================================
       LANGUAGE
       ===================================================== */

    let currentLanguage = "en";

    const languageButtons = document.querySelectorAll(".language");

    const translations = {
        en: {
            farmOverview: "FARM OVERVIEW",
            greeting: "Good morning, Farmer 👋",
            welcome: "Here's what's happening with your farm today.",
            dashboard: "Dashboard",
            myFarm: "My Farm",
            cropRisk: "Crop Risk",
            cropScan: "Crop Scan",
            weather: "Weather",
            aiAssistant: "AI Assistant",
            marketInsights: "Market Insights",
            history: "History",

            myFarmLabel: "MY FARM",
            rampurFarm: "Rampur Farm",
            location: "Rampur, Uttar Pradesh",
            crop: "Crop",
            area: "Area",
            wheat: "Wheat",
            acres: "5.6 Acres",

            systemOnline: "System Online",
            aiServices: "AI services active",

            aiMonitoring: "AI FARM MONITORING",

            heroTitle:
                "Keep your crops healthy,<br><span>grow with confidence.</span>",

            heroDescription:
                "KrishiRakshak AI continuously analyzes your crop, weather and farm conditions to help you make better decisions.",

            scanMyCrop: "Scan My Crop",
            askAI: "Ask AI",

            currentCrop: "Current Crop",

            farmHealth: "Farm Health",
            goodCondition: "Good condition",
            cropRisk: "Crop Risk",
            lowRisk: "Low risk",
            weatherRisk: "Weather Risk",
            stable: "Stable",
            soilMoisture: "Soil Moisture",
            optimal: "Optimal",

            cropHealth: "Crop Health",
            cropCondition: "Current wheat crop condition",
            healthy: "Healthy",

            temperature: "Temperature",
            rainForecast: "Rain Forecast",
            growthStage: "Growth Stage",
            flowering: "Flowering",

            todaysWeather: "Today's Weather",
            partlyCloudy: "Partly Cloudy",
            feelsLike: "Feels like 31°C",
            humidity: "Humidity",
            wind: "Wind",
            rain: "Rain",
            today: "Today",

            aiCropRisk: "AI Crop Risk",
            multiSignal: "Multi-signal analysis",
            heatStress: "Heat Stress",

            todaysAction: "Today's Action Plan",
            recommendedBy: "Recommended by KrishiRakshak AI",
            recommendedAction: "RECOMMENDED ACTION",
            actionTitle: "Monitor soil moisture",
            actionDescription:
                "Current moisture levels are healthy. Check again before the next irrigation.",
            viewRecommendation: "View Full Recommendation",

            yourFarm: "YOUR FARM",
            healthyFields: "Healthy fields.",
            smarterDecisions: "Smarter decisions.",
            farmJourney:
                "AI-powered insights for every stage of your crop journey.",

            needHelp: "Need help with your farm?",
            askAnything:
                "Ask me anything about your crop, weather, disease risk or farming decisions.",

            placeholder: "Ask in English or हिंदी...",
            cropQuestion: "Crop health?",
            irrigationQuestion: "कब सिंचाई करें?",
            weatherQuestion: "Weather risk?",

            editFarm: "Edit Farm",
            farmName: "Farm Name",
            farmLocation: "Location",
            farmCrop: "Crop",
            farmArea: "Area",
            saveFarm: "Save Changes",
            cancel: "Cancel"
        },

        hi: {
            farmOverview: "खेत का अवलोकन",
            greeting: "सुप्रभात, किसान 👋",
            welcome: "आज आपके खेत में क्या हो रहा है, यहाँ देखें।",
            dashboard: "डैशबोर्ड",
            myFarm: "मेरा खेत",
            cropRisk: "फसल जोखिम",
            cropScan: "फसल स्कैन",
            weather: "मौसम",
            aiAssistant: "AI सहायक",
            marketInsights: "बाज़ार जानकारी",
            history: "इतिहास",

            myFarmLabel: "मेरा खेत",
            rampurFarm: "रामपुर फार्म",
            location: "रामपुर, उत्तर प्रदेश",
            crop: "फसल",
            area: "क्षेत्रफल",
            wheat: "गेहूं",
            acres: "5.6 एकड़",

            systemOnline: "सिस्टम ऑनलाइन",
            aiServices: "AI सेवाएं सक्रिय हैं",

            aiMonitoring: "AI खेत निगरानी",

            heroTitle:
                "अपनी फसल को स्वस्थ रखें,<br><span>आत्मविश्वास के साथ खेती करें।</span>",

            heroDescription:
                "KrishiRakshak AI आपकी फसल, मौसम और खेत की स्थिति का लगातार विश्लेषण करता है ताकि आप बेहतर खेती के फैसले ले सकें।",

            scanMyCrop: "फसल स्कैन करें",
            askAI: "AI से पूछें",

            currentCrop: "वर्तमान फसल",

            farmHealth: "खेत का स्वास्थ्य",
            goodCondition: "अच्छी स्थिति",
            cropRisk: "फसल जोखिम",
            lowRisk: "कम जोखिम",
            weatherRisk: "मौसम जोखिम",
            stable: "स्थिर",
            soilMoisture: "मिट्टी की नमी",
            optimal: "उपयुक्त",

            cropHealth: "फसल स्वास्थ्य",
            cropCondition: "वर्तमान गेहूं की फसल की स्थिति",
            healthy: "स्वस्थ",

            temperature: "तापमान",
            rainForecast: "बारिश का अनुमान",
            growthStage: "विकास अवस्था",
            flowering: "फूल आने की अवस्था",

            todaysWeather: "आज का मौसम",
            partlyCloudy: "आंशिक रूप से बादल",
            feelsLike: "महसूस होने वाला तापमान 31°C",
            humidity: "नमी",
            wind: "हवा",
            rain: "बारिश",
            today: "आज",

            aiCropRisk: "AI फसल जोखिम",
            multiSignal: "कई संकेतों का विश्लेषण",
            heatStress: "गर्मी का तनाव",

            todaysAction: "आज की कार्य योजना",
            recommendedBy: "KrishiRakshak AI की सलाह",
            recommendedAction: "अनुशंसित कार्य",
            actionTitle: "मिट्टी की नमी की निगरानी करें",
            actionDescription:
                "वर्तमान मिट्टी की नमी अच्छी है। अगली सिंचाई से पहले दोबारा जांच करें।",
            viewRecommendation: "पूरी सलाह देखें",

            yourFarm: "आपका खेत",
            healthyFields: "स्वस्थ खेत।",
            smarterDecisions: "बेहतर फैसले।",
            farmJourney:
                "आपकी फसल के हर चरण के लिए AI आधारित जानकारी।",

            needHelp: "अपने खेत के लिए मदद चाहिए?",
            askAnything:
                "अपनी फसल, मौसम, बीमारी के जोखिम या खेती से जुड़े फैसलों के बारे में पूछें।",

            placeholder: "हिंदी या English में पूछें...",
            cropQuestion: "फसल कैसी है?",
            irrigationQuestion: "सिंचाई कब करें?",
            weatherQuestion: "मौसम का जोखिम?",

            editFarm: "खेत संपादित करें",
            farmName: "खेत का नाम",
            farmLocation: "स्थान",
            farmCrop: "फसल",
            farmArea: "क्षेत्रफल",
            saveFarm: "परिवर्तन सेव करें",
            cancel: "रद्द करें"
        }
    };


    /* =====================================================
       HELPERS
       ===================================================== */

    function setText(selector, text) {
        const element = document.querySelector(selector);

        if (element) {
            element.textContent = text;
        }
    }


    function setHTML(selector, html) {
        const element = document.querySelector(selector);

        if (element) {
            element.innerHTML = html;
        }
    }


    function escapeHTML(text) {
        const div = document.createElement("div");
        div.textContent = text;
        return div.innerHTML;
    }


    function getElement(selectors) {
        for (const selector of selectors) {
            const element = document.querySelector(selector);

            if (element) {
                return element;
            }
        }

        return null;
    }


    /* =====================================================
       FARM DATA
       ===================================================== */

    const defaultFarmData = {
        name: "Rampur Farm",
        location: "Rampur, Uttar Pradesh",
        crop: "Wheat",
        area: "5.6 Acres"
    };


    let farmData = defaultFarmData;

    try {
        const savedFarm =
            localStorage.getItem("krishiFarmData");

        if (savedFarm) {
            farmData = JSON.parse(savedFarm);
        }
    } catch (error) {
        console.log("Farm data load error:", error);
        farmData = defaultFarmData;
    }


    /* =====================================================
       UPDATE FARM DISPLAY
       ===================================================== */

    function updateFarmDisplay() {

        const farmName =
            document.querySelector(".farm-card h3");

        const farmLocation =
            document.querySelector(".farm-card p");

        const farmDetails =
            document.querySelectorAll(".farm-details strong");


        if (farmName) {
            farmName.textContent = farmData.name;
        }


        if (farmLocation) {
            farmLocation.innerHTML = `
                <i class="fa-solid fa-location-dot"></i>
                ${escapeHTML(farmData.location)}
            `;
        }


        if (farmDetails[0]) {
            farmDetails[0].textContent =
                currentLanguage === "hi" &&
                farmData.crop.toLowerCase() === "wheat"
                    ? "गेहूं"
                    : farmData.crop;
        }


        if (farmDetails[1]) {
            farmDetails[1].textContent =
                farmData.area;
        }


        const currentCrop =
            document.querySelector(
                ".image-overlay-card strong"
            );

        if (currentCrop) {
            currentCrop.textContent =
                currentLanguage === "hi" &&
                farmData.crop.toLowerCase() === "wheat"
                    ? "गेहूं"
                    : farmData.crop;
        }
    }


    /* =====================================================
       LANGUAGE CHANGE
       ===================================================== */

    function changeLanguage(language) {

        if (!translations[language]) {
            language = "en";
        }

        currentLanguage = language;

        const t = translations[currentLanguage];


        /* ---------- SIDEBAR ---------- */

        const navItems =
            document.querySelectorAll(".nav-item");

        const navTexts = [
            t.dashboard,
            t.myFarm,
            t.cropRisk,
            t.cropScan,
            t.weather,
            t.aiAssistant,
            t.marketInsights,
            t.history
        ];


        navItems.forEach((item, index) => {

            const span = item.querySelector("span");

            if (span && navTexts[index]) {
                span.textContent = navTexts[index];
            }

        });


        /* ---------- FARM ---------- */

        setText(
            ".farm-card-top span",
            t.myFarmLabel
        );


        const farmDetails =
            document.querySelectorAll(
                ".farm-details div"
            );


        if (farmDetails[0]) {

            const label =
                farmDetails[0].querySelector("span");

            if (label) {
                label.textContent = t.crop;
            }

        }


        if (farmDetails[1]) {

            const label =
                farmDetails[1].querySelector("span");

            if (label) {
                label.textContent = t.area;
            }

        }


        setText(
            ".online-status strong",
            t.systemOnline
        );

        setText(
            ".online-status small",
            t.aiServices
        );


        /* ---------- HEADER ---------- */

        setText(
            ".small-heading",
            t.farmOverview
        );

        setText(
            ".welcome-section h1",
            t.greeting
        );

        setText(
            ".welcome-text",
            t.welcome
        );


        /* ---------- HERO ---------- */

        setHTML(
            ".hero-label",
            `<span class="pulse"></span>${t.aiMonitoring}`
        );


        setHTML(
            ".hero-content h2",
            t.heroTitle
        );


        setText(
            ".hero-content > p",
            t.heroDescription
        );


        const scanButton =
            document.querySelector("#scanCropBtn") ||
            document.querySelector(".primary-btn");


        if (scanButton) {

            const textSpan =
                scanButton.querySelector(".btn-text") ||
                scanButton.querySelector("span");

            if (textSpan) {
                textSpan.textContent = t.scanMyCrop;
            } else {
                scanButton.innerHTML =
                    `<i class="fa-solid fa-camera"></i>${t.scanMyCrop}`;
            }

        }


        setText(
            ".image-overlay-card span",
            t.currentCrop
        );


        /* ---------- STATS ---------- */

        const statLabels =
            document.querySelectorAll(
                ".stat-card-header > span"
            );


        const statTexts = [
            t.farmHealth,
            t.cropRisk,
            t.weatherRisk,
            t.soilMoisture
        ];


        statLabels.forEach((element, index) => {

            if (statTexts[index]) {
                element.textContent =
                    statTexts[index];
            }

        });


        const statStatuses =
            document.querySelectorAll(
                ".stat-status"
            );


        if (statStatuses[0]) {
            statStatuses[0].innerHTML =
                `<i class="fa-solid fa-arrow-up"></i>${t.goodCondition}`;
        }


        if (statStatuses[1]) {
            statStatuses[1].innerHTML =
                `<i class="fa-solid fa-circle-check"></i>${t.lowRisk}`;
        }


        if (statStatuses[2]) {
            statStatuses[2].innerHTML =
                `<i class="fa-solid fa-circle-check"></i>${t.stable}`;
        }


        if (statStatuses[3]) {
            statStatuses[3].innerHTML =
                `<i class="fa-solid fa-check"></i>${t.optimal}`;
        }


        /* ---------- CARD TITLES ---------- */

        const cardTitles =
            document.querySelectorAll(
                ".card-title h2"
            );

        const cardDescriptions =
            document.querySelectorAll(
                ".card-title p"
            );


        if (cardTitles[0]) {
            cardTitles[0].textContent =
                t.cropHealth;
        }


        if (cardDescriptions[0]) {
            cardDescriptions[0].textContent =
                t.cropCondition;
        }


        if (cardTitles[1]) {
            cardTitles[1].textContent =
                t.todaysWeather;
        }


        if (cardTitles[2]) {
            cardTitles[2].textContent =
                t.aiCropRisk;
        }


        if (cardDescriptions[2]) {
            cardDescriptions[2].textContent =
                t.multiSignal;
        }


        /* ---------- HEALTH ---------- */

        setHTML(
            ".health-label",
            `<span class="status-dot"></span>${t.healthy}`
        );


        const healthRows =
            document.querySelectorAll(
                ".health-row"
            );


        if (healthRows[0]) {
            const span =
                healthRows[0].querySelector("span");

            if (span) {
                span.textContent =
                    t.temperature;
            }
        }


        if (healthRows[1]) {
            const span =
                healthRows[1].querySelector("span");

            if (span) {
                span.textContent =
                    t.soilMoisture;
            }
        }


        if (healthRows[2]) {
            const span =
                healthRows[2].querySelector("span");

            if (span) {
                span.textContent =
                    t.rainForecast;
            }
        }


        if (healthRows[3]) {

            const span =
                healthRows[3].querySelector("span");

            const strong =
                healthRows[3].querySelector("strong");

            if (span) {
                span.textContent =
                    t.growthStage;
            }

            if (strong) {
                strong.textContent =
                    t.flowering;
            }
        }


        /* ---------- WEATHER ---------- */

        setText(
            ".weather-condition strong",
            t.partlyCloudy
        );


        /* ---------- RISK ---------- */

        setHTML(
            ".risk-level",
            `<span class="risk-dot"></span>${t.lowRisk}`
        );


        const factors =
            document.querySelectorAll(
                ".factor-top span"
            );


        if (factors[0]) {
            factors[0].textContent =
                t.heatStress;
        }


        if (factors[1]) {
            factors[1].textContent =
                t.soilMoisture;
        }


        if (factors[2]) {
            factors[2].textContent =
                t.rainForecast;
        }


        /* ---------- ACTION ---------- */

        const actionCard =
            document.querySelector(".action-card");


        if (actionCard) {

            const title =
                actionCard.querySelector(
                    ".card-title h2"
                );

            const description =
                actionCard.querySelector(
                    ".card-title p"
                );

            if (title) {
                title.textContent =
                    t.todaysAction;
            }

            if (description) {
                description.textContent =
                    t.recommendedBy;
            }
        }


        setText(
            ".action-label",
            t.recommendedAction
        );


        setText(
            ".action-main h3",
            t.actionTitle
        );


        setText(
            ".action-main p",
            t.actionDescription
        );


        /* ---------- FARM IMAGE ---------- */

        setText(
            ".field-overlay > span",
            t.yourFarm
        );


        setHTML(
            ".field-overlay h2",
            `${t.healthyFields}<br>${t.smarterDecisions}`
        );


        setText(
            ".field-overlay p",
            t.farmJourney
        );


        /* ---------- AI ---------- */

        setText(
            ".assistant-top span",
            "KRISHIRAKSHAK AI"
        );


        setText(
            ".assistant-top h2",
            t.needHelp
        );


        setText(
            ".assistant-text",
            t.askAnything
        );


        const input =
            document.getElementById(
                "assistantInput"
            );


        if (input) {
            input.placeholder =
                t.placeholder;
        }


        const quickButtons =
            document.querySelectorAll(
                ".quick-questions button"
            );


        if (quickButtons[0]) {
            quickButtons[0].textContent =
                t.cropQuestion;
        }


        if (quickButtons[1]) {
            quickButtons[1].textContent =
                t.irrigationQuestion;
        }


        if (quickButtons[2]) {
            quickButtons[2].textContent =
                t.weatherQuestion;
        }


        /* ---------- LANGUAGE BUTTON ---------- */

        languageButtons.forEach(button => {
            button.classList.remove("active");
        });


        if (language === "en") {
            languageButtons[0]?.classList.add("active");
        }


        if (language === "hi") {
            languageButtons[1]?.classList.add("active");
        }


        updateFarmDisplay();
    }


    /* =====================================================
       LANGUAGE BUTTON EVENTS
       ===================================================== */

    languageButtons.forEach((button, index) => {

        button.addEventListener("click", () => {

            const language =
                index === 0 ? "en" : "hi";

            changeLanguage(language);

        });

    });


    /* =====================================================
       WEATHER
       ===================================================== */

    async function loadKrishiWeather(
        city = "Rampur"
    ) {

        console.log(
            "🌤️ Loading weather for:",
            city
        );


        try {

            const response =
                await fetch(
                    `${API_BASE}/api/weather?city=${encodeURIComponent(city)}`
                );


            const data =
                await response.json();


            console.log(
                "🌤️ Weather server response:",
                data
            );


            if (!response.ok) {

                throw new Error(
                    data.error ||
                    "Weather unavailable"
                );

            }


            /* ---------- TEMPERATURE ---------- */

            const tempElement =
                document.querySelector(
                    ".weather-card .temperature"
                );


            if (tempElement) {

                tempElement.innerHTML =
                    `${Math.round(data.main.temp)}<span>°C</span>`;

            }


            /* ---------- CONDITION ---------- */

            const conditionElement =
                document.querySelector(
                    ".weather-condition strong"
                );


            if (conditionElement) {

                const description =
                    data.weather?.[0]?.description ||
                    "Clear";

                conditionElement.textContent =
                    description.replace(
                        /\b\w/g,
                        letter =>
                            letter.toUpperCase()
                    );

            }


            /* ---------- FEELS LIKE ---------- */

            const feelsLikeElement =
                document.querySelector(
                    ".weather-condition span"
                );


            if (feelsLikeElement) {

                const feels =
                    Math.round(
                        data.main.feels_like
                    );

                feelsLikeElement.textContent =
                    currentLanguage === "hi"
                        ? `महसूस होने वाला तापमान ${feels}°C`
                        : `Feels like ${feels}°C`;

            }


            /* ---------- HUMIDITY ---------- */

            const weatherDetails =
                document.querySelectorAll(
                    ".weather-details strong"
                );


            if (weatherDetails[0]) {

                weatherDetails[0].textContent =
                    `${data.main.humidity}%`;

            }


            /* ---------- WIND ---------- */

            if (weatherDetails[1]) {

                const windSpeed =
                    (
                        Number(data.wind.speed || 0) *
                        3.6
                    ).toFixed(1);


                weatherDetails[1].textContent =
                    `${windSpeed} km/h`;

            }


            /* ---------- RAIN ---------- */

            if (weatherDetails[2]) {

                const rainAmount =
                    data.rain?.["1h"] || 0;


                weatherDetails[2].textContent =
                    `${rainAmount} mm`;

            }


            /* ---------- WEATHER ICON ---------- */

            const weatherIcon =
                document.querySelector(
                    ".weather-card .weather-icon i"
                );


            if (weatherIcon) {

                const weatherMain =
                    (
                        data.weather?.[0]?.main ||
                        ""
                    ).toLowerCase();


                weatherIcon.className =
                    "fa-solid";


                if (weatherMain === "clear") {

                    weatherIcon.classList.add(
                        "fa-sun"
                    );

                } else if (
                    weatherMain === "clouds"
                ) {

                    weatherIcon.classList.add(
                        "fa-cloud-sun"
                    );

                } else if (
                    weatherMain === "rain" ||
                    weatherMain === "drizzle"
                ) {

                    weatherIcon.classList.add(
                        "fa-cloud-rain"
                    );

                } else if (
                    weatherMain === "thunderstorm"
                ) {

                    weatherIcon.classList.add(
                        "fa-cloud-bolt"
                    );

                } else if (
                    weatherMain === "snow"
                ) {

                    weatherIcon.classList.add(
                        "fa-snowflake"
                    );

                } else {

                    weatherIcon.classList.add(
                        "fa-cloud"
                    );

                }

            }


            /* ---------- LOCATION ---------- */

            const weatherLocation =
                document.querySelector(
                    ".weather-card .card-title p"
                );


            if (weatherLocation) {

                weatherLocation.textContent =
                    `${data.name}, ${data.sys.country}`;

            }


            console.log(
                "✅ LIVE WEATHER UPDATED"
            );

        } catch (error) {

            console.error(
                "❌ WEATHER ERROR:",
                error
            );

        }

    }


    /* =====================================================
       AI RESPONSE BOX
       ===================================================== */

    function getAIResponseBox() {

        let responseBox =
            document.getElementById(
                "aiResponse"
            );


        if (responseBox) {
            return responseBox;
        }


        responseBox =
            document.createElement("div");


        responseBox.id =
            "aiResponse";


        const assistantCard =
            document.querySelector(
                ".assistant-card"
            );


        const input =
            document.getElementById(
                "assistantInput"
            );


        if (
            assistantCard &&
            input &&
            input.parentElement
        ) {

            assistantCard.insertBefore(
                responseBox,
                input.parentElement
            );

        } else if (assistantCard) {

            assistantCard.appendChild(
                responseBox
            );

        } else {

            document.body.appendChild(
                responseBox
            );

        }


        return responseBox;
    }

/* =====================================================
   UPDATE CROP DASHBOARD FROM AI SCAN
===================================================== */

function updateCropDashboard(
    health,
    risk,
    actionPlan,
    observation,
    possibleIssue,
    prevention
) {

    console.log("🌱 Updating crop dashboard...");
    console.log("Health:", health);
    console.log("Risk:", risk);
    console.log("Actions:", actionPlan);

    /* ---------- CROP HEALTH ---------- */

    const healthCard =
        document.querySelector(".crop-health-card");

    if (healthCard && health) {

        const score =
            Math.max(
                0,
                Math.min(
                    100,
                    Number(health.score) || 0
                )
            );

        const healthStatus =
            health.status || "Moderate";

        /* Health status */

        const healthLabel =
            healthCard.querySelector(".health-label");

        if (healthLabel) {

            healthLabel.innerHTML = `
                <span class="status-dot"></span>
                ${
                    currentLanguage === "hi"
                        ? (
                            healthStatus === "Healthy"
                                ? "स्वस्थ"
                                : healthStatus === "Poor"
                                    ? "कमजोर"
                                    : "मध्यम"
                          )
                        : healthStatus
                }
            `;

        }

        /* Health score */

        const scoreElements =
            healthCard.querySelectorAll(
                ".health-score, .health-percentage, .score"
            );

        scoreElements.forEach(element => {

            element.textContent =
                `${score}%`;

        });

        /* Progress bars */

        const progress =
            healthCard.querySelector(
                ".progress-fill, .health-progress, .progress-bar"
            );

        if (progress) {

            progress.style.width =
                `${score}%`;

        }

        /* Store latest result */

        healthCard.dataset.healthScore =
            score;

        healthCard.dataset.healthStatus =
            healthStatus;

    }


    /* ---------- AI CROP RISK ---------- */

    const riskCard =
        document.querySelector(".risk-card");

    if (riskCard && risk) {

        const riskLevel =
            risk.level || "Medium";

        const riskReason =
            risk.reason ||
            (
                currentLanguage === "hi"
                    ? "फसल की निगरानी जारी रखें।"
                    : "Continue monitoring the crop."
            );

        const riskElement =
            riskCard.querySelector(".risk-level");

        if (riskElement) {

            let riskText;

            if (currentLanguage === "hi") {

                riskText =
                    riskLevel === "Low"
                        ? "कम जोखिम"
                        : riskLevel === "High"
                            ? "उच्च जोखिम"
                            : "मध्यम जोखिम";

            } else {

                riskText =
                    riskLevel === "Low"
                        ? "Low risk"
                        : riskLevel === "High"
                            ? "High risk"
                            : "Medium risk";

            }

            riskElement.innerHTML = `
                <span class="risk-dot"></span>
                ${riskText}
            `;

        }

        /* Risk reason */

        const reasonElement =
            riskCard.querySelector(
                ".risk-reason, .risk-description"
            );

        if (reasonElement) {

            reasonElement.textContent =
                riskReason;

        }

        riskCard.dataset.riskLevel =
            riskLevel;

    }


    /* ---------- TODAY'S ACTION PLAN ---------- */

    const actionCard =
        document.querySelector(".action-card");

    if (actionCard) {

        const actions =
            Array.isArray(actionPlan)
                ? actionPlan
                : [];

        const actionTitle =
            actionCard.querySelector(
                ".action-main h3"
            );

        const actionDescription =
            actionCard.querySelector(
                ".action-main p"
            );

        if (actions.length > 0) {

            if (actionTitle) {

                actionTitle.textContent =
                    actions[0];

            }

            if (actionDescription) {

                actionDescription.textContent =
                    actions.length > 1
                        ? actions.slice(1).join(" • ")
                        : (
                            currentLanguage === "hi"
                                ? "आज इस सलाह के अनुसार फसल की निगरानी करें।"
                                : "Follow this recommendation and monitor the crop today."
                          );

            }

        }

        /* Store complete action plan */

        actionCard.dataset.actionPlan =
            JSON.stringify(actions);

    }


    /* ---------- AI RESPONSE WITH OBSERVATION ---------- */

    const responseBox =
        getAIResponseBox();

    if (responseBox && (observation || possibleIssue)) {

        console.log(
            "🔎 Crop observation:",
            observation
        );

        console.log(
            "⚠️ Possible issue:",
            possibleIssue
        );

    }


    console.log(
        "✅ CROP DASHBOARD UPDATED"
    );

}
    /* =====================================================
       AI LOADING
       ===================================================== */

    function showLoading() {

        const responseBox =
            getAIResponseBox();


        responseBox.style.display =
            "flex";


        responseBox.innerHTML = `
            <div class="response-icon">
                <i class="fa-solid fa-sparkles"></i>
            </div>

            <div class="response-content">

                <div
                    class="solution-heading"
                    style="
                        font-weight:700;
                        color:#244b31;
                    "
                >
                    ${currentLanguage === "hi"
                        ? "समाधान"
                        : "Solution"}
                </div>

                <p>
                    ${
                        currentLanguage === "hi"
                            ? "KrishiRakshak AI आपके सवाल का समाधान तैयार कर रहा है..."
                            : "KrishiRakshak AI is preparing your solution..."
                    }
                </p>

            </div>
        `;
    }


    /* =====================================================
       SHOW AI RESPONSE
       ===================================================== */

    function showAIResponse(answer) {

        const responseBox =
            getAIResponseBox();


        responseBox.style.display =
            "flex";


        let cleanAnswer =
            String(answer || "").trim();


        if (!cleanAnswer) {

            cleanAnswer =
                currentLanguage === "hi"
                    ? "AI से कोई उत्तर प्राप्त नहीं हुआ।"
                    : "No answer was received from AI.";

        }


        /* ---------- ESCAPE HTML ---------- */

        cleanAnswer =
            escapeHTML(cleanAnswer);


        /* ---------- SOLUTION HEADING ---------- */

        cleanAnswer =
            cleanAnswer.replace(
                /(^|\n)\s*(?:#{1,6}\s*)?\*{0,2}(Solution|समाधान)\*{0,2}\s*:?\s*(?=\n|$)/gim,
                `$1<div class="solution-heading" style="font-weight:700;color:#244b31;">$2</div>`
            );


        /* ---------- HEADINGS ---------- */

        cleanAnswer =
            cleanAnswer.replace(
                /^#{1,6}\s+(.+)$/gm,
                "<h4>$1</h4>"
            );


        /* ---------- BOLD ---------- */

        cleanAnswer =
            cleanAnswer.replace(
                /\*\*(.*?)\*\*/g,
                "<strong>$1</strong>"
            );


        /* ---------- ITALIC ---------- */

        cleanAnswer =
            cleanAnswer.replace(
                /(?<!\*)\*(?!\s)(.*?)(?<!\*)\*(?!\*)/g,
                "<em>$1</em>"
            );


        /* ---------- INLINE CODE ---------- */

        cleanAnswer =
            cleanAnswer.replace(
                /`([^`]+)`/g,
                "<code>$1</code>"
            );


        /* ---------- NUMBERED LIST ---------- */

        cleanAnswer =
            cleanAnswer.replace(
                /^\s*(\d+)\.\s+(.+)$/gm,
                '<div class="number-point"><b>$1.</b> $2</div>'
            );


        /* ---------- BULLETS ---------- */

        cleanAnswer =
            cleanAnswer.replace(
                /^\s*[-•]\s+(.+)$/gm,
                '<div class="number-point">• $1</div>'
            );


        /* ---------- NEW LINES ---------- */

        cleanAnswer =
            cleanAnswer.replace(
                /\n{2,}/g,
                '<div class="answer-gap"></div>'
            );


        cleanAnswer =
            cleanAnswer.replace(
                /\n/g,
                "<br>"
            );


        responseBox.innerHTML = `
            <div class="response-icon">
                <i class="fa-solid fa-sparkles"></i>
            </div>

            <div class="response-content">

                <div
                    class="solution-heading"
                    style="
                        font-weight:700;
                        color:#244b31;
                        margin-bottom:8px;
                    "
                >
                    ${currentLanguage === "hi"
                        ? "समाधान"
                        : "Solution"}
                </div>

                <div class="ai-answer">
                    ${cleanAnswer}
                </div>

            </div>
        `;

    }


    /* =====================================================
       AI CHAT
       ===================================================== */

    async function getAIResponse(question) {

        try {

            console.log(
                "🤖 Sending AI question:",
                question
            );


            const response =
                await fetch(
                    `${API_BASE}/api/chat`,
                    {
                        method: "POST",

                        headers: {
                            "Content-Type":
                                "application/json"
                        },

                        body:
                            JSON.stringify({
                                message: question,
                                language:
                                    currentLanguage,

                                instruction:
                                    currentLanguage === "hi"
                                        ? "Understand Hindi or Hinglish. Reply in simple Hindi. Give practical farming advice."
                                        : "Answer in the same language/style as the user. If the user writes Hinglish in English letters, reply in simple Hinglish using English letters. Give practical farming advice."
                            })
                    }
                );


            const data =
                await response.json();


            console.log(
                "🤖 AI response:",
                data
            );


            if (!response.ok) {

                throw new Error(
                    data.details ||
                    data.error ||
                    `Server error ${response.status}`
                );

            }


            const answer =
                data.answer ||
                data.message ||
                data.response ||
                data.text;


            if (!answer) {

                throw new Error(
                    "AI returned an empty answer."
                );

            }


            return answer;

        } catch (error) {

            console.error(
                "❌ AI CONNECTION ERROR:",
                error
            );


            return currentLanguage === "hi"
                ? `AI Error: ${error.message}`
                : `AI Error: ${error.message}`;

        }

    }


    /* =====================================================
       TEXT TO SPEECH
       ===================================================== */

    function speak(text) {

        if (!text || !text.trim()) {
            return;
        }


        if (
            !("speechSynthesis" in window)
        ) {

            console.log(
                "Speech synthesis not supported."
            );

            return;
        }


        window.speechSynthesis.cancel();


        let cleanText =
            String(text)

                .replace(
                    /#{1,6}\s*/g,
                    ""
                )

                .replace(
                    /\*\*(.*?)\*\*/g,
                    "$1"
                )

                .replace(
                    /\*(.*?)\*/g,
                    "$1"
                )

                .replace(
                    /`([^`]+)`/g,
                    "$1"
                )

                .replace(
                    /^\s*[-•]\s*/gm,
                    ""
                )

                .replace(
                    /^\s*\d+\.\s*/gm,
                    ""
                )

                .replace(
                    /[#*_~`]/g,
                    ""
                )

                .replace(
                    /\n+/g,
                    ". "
                )

                .replace(
                    /\s+/g,
                    " "
                )

                .trim();


        if (!cleanText) {
            return;
        }


        const voices =
            window.speechSynthesis.getVoices();


        let voice = null;

        let speechLanguage =
            currentLanguage === "hi"
                ? "hi-IN"
                : "en-IN";


        if (currentLanguage === "hi") {

            voice =
                voices.find(
                    v =>
                        v.lang &&
                        v.lang.toLowerCase() ===
                            "hi-in"
                ) ||

                voices.find(
                    v =>
                        v.lang &&
                        v.lang.toLowerCase()
                            .startsWith("hi")
                ) ||

                voices.find(
                    v =>
                        v.name &&
                        v.name.toLowerCase()
                            .includes("hindi")
                );

        } else {

            voice =
                voices.find(
                    v =>
                        v.lang &&
                        v.lang.toLowerCase() ===
                            "en-in"
                ) ||

                voices.find(
                    v =>
                        v.lang &&
                        v.lang.toLowerCase()
                            .startsWith("en-in")
                ) ||

                voices.find(
                    v =>
                        v.lang &&
                        v.lang.toLowerCase()
                            .startsWith("en")
                );

        }


        const utterance =
            new SpeechSynthesisUtterance(
                cleanText
            );


        utterance.lang =
            speechLanguage;


        if (voice) {
            utterance.voice = voice;
        }


        utterance.rate = 0.9;
        utterance.pitch = 1;
        utterance.volume = 1;


        utterance.onend = () => {

            console.log(
                "🔊 AI voice finished"
            );

        };


        utterance.onerror = event => {

            console.error(
                "🔊 Speech error:",
                event.error
            );

        };


        window.speechSynthesis.speak(
            utterance
        );

    }


    /* =====================================================
       ASK AI
       ===================================================== */

    async function askAI(question) {

        if (
            !question ||
            !question.trim()
        ) {
            return;
        }


        if (
            "speechSynthesis" in window
        ) {

            window.speechSynthesis.cancel();

        }


        showLoading();


        const answer =
            await getAIResponse(
                question.trim()
            );


        showAIResponse(
            answer
        );


        /* Save history */

        saveHistory(
            "AI",
            question.trim(),
            answer
        );


        if (
            answer &&
            !answer.startsWith("AI Error:")
        ) {

            speak(answer);

        }

    }


    /* =====================================================
       AI INPUT
       ===================================================== */

    const assistantInput =
        document.getElementById(
            "assistantInput"
        );


    const assistantSend =
        document.getElementById(
            "assistantSend"
        );


    if (assistantSend) {

        assistantSend.addEventListener(
            "click",
            () => {

                const question =
                    assistantInput?.value.trim();


                if (!question) {

                    assistantInput?.focus();

                    return;
                }


                assistantInput.value = "";


                askAI(question);

            }
        );

    } else {

        console.warn(
            "⚠️ assistantSend button not found."
        );

    }


    /* =====================================================
       ENTER KEY
       ===================================================== */

    if (assistantInput) {

        assistantInput.addEventListener(
            "keydown",
            event => {

                if (
                    event.key === "Enter" &&
                    !event.shiftKey
                ) {

                    event.preventDefault();


                    if (assistantSend) {

                        assistantSend.click();

                    } else {

                        askAI(
                            assistantInput.value
                        );

                        assistantInput.value =
                            "";

                    }

                }

            }
        );

    }


    /* =====================================================
       QUICK QUESTIONS
       ===================================================== */

    document
        .querySelectorAll(
            ".quick-questions button"
        )
        .forEach(button => {

            button.addEventListener(
                "click",
                () => {

                    const question =
                        button.textContent.trim();


                    if (assistantInput) {
                        assistantInput.value =
                            question;
                    }


                    askAI(question);

                }
            );

        });


    /* =====================================================
       VOICE RECOGNITION
       ===================================================== */

    const SpeechRecognition =
        window.SpeechRecognition ||
        window.webkitSpeechRecognition;


    let recognition = null;

    let isListening = false;


    const assistantVoice =
        document.getElementById(
            "assistantVoice"
        );


    const heroVoice =
        document.getElementById(
            "voiceBtn"
        );


    if (SpeechRecognition) {

        recognition =
            new SpeechRecognition();


        recognition.continuous =
            false;


        recognition.interimResults =
            false;


        recognition.maxAlternatives =
            1;


        recognition.onstart = () => {

            isListening = true;


            assistantVoice?.classList.add(
                "listening"
            );


            heroVoice?.classList.add(
                "listening"
            );


            console.log(
                "🎤 VOICE LISTENING..."
            );

        };


        recognition.onresult = event => {

            const text =
                event.results[0][0]
                    .transcript
                    .trim();


            console.log(
                "🎤 Voice result:",
                text
            );


            if (assistantInput) {

                assistantInput.value =
                    text;

            }


            isListening = false;


            assistantVoice?.classList.remove(
                "listening"
            );


            heroVoice?.classList.remove(
                "listening"
            );


            if (text) {

                askAI(text);

            }

        };


        recognition.onerror = event => {

            console.error(
                "🎤 Voice recognition error:",
                event.error
            );


            isListening = false;


            assistantVoice?.classList.remove(
                "listening"
            );


            heroVoice?.classList.remove(
                "listening"
            );


            if (
                event.error ===
                "not-allowed"
            ) {

                alert(
                    currentLanguage === "hi"
                        ? "Microphone permission allow करें।"
                        : "Please allow microphone permission."
                );

            }

        };


        recognition.onend = () => {

            isListening = false;


            assistantVoice?.classList.remove(
                "listening"
            );


            heroVoice?.classList.remove(
                "listening"
            );


            console.log(
                "🎤 Voice listening ended."
            );

        };


        function startVoice() {

            if (!recognition) {
                return;
            }


            if (isListening) {

                recognition.stop();

                return;

            }


            if (
                "speechSynthesis" in window
            ) {

                window.speechSynthesis.cancel();

            }


            recognition.lang =
                currentLanguage === "hi"
                    ? "hi-IN"
                    : "en-IN";


            try {

                recognition.start();

            } catch (error) {

                console.log(
                    "Voice start:",
                    error
                );

            }

        }


        if (assistantVoice) {

            assistantVoice.addEventListener(
                "click",
                startVoice
            );

        }


        if (heroVoice) {

            heroVoice.addEventListener(
                "click",
                startVoice
            );

        }


        console.log(
            "✅ Speech Recognition ready"
        );

    } else {

        console.warn(
            "❌ Speech Recognition is not supported in this browser."
        );

    }


    /* =====================================================
       CROP SCAN
       ===================================================== */

    const scanCropBtn =
        document.getElementById(
            "scanCropBtn"
        ) ||
        document.querySelector(
            ".primary-btn"
        );


    let cropInput =
        document.getElementById(
            "cropImageInput"
        );


    if (!cropInput) {

        cropInput =
            document.createElement(
                "input"
            );


        cropInput.type =
            "file";


        cropInput.id =
            "cropImageInput";


        cropInput.accept =
            "image/*";


        cropInput.style.display =
            "none";


        document.body.appendChild(
            cropInput
        );

    }


    if (scanCropBtn) {

        scanCropBtn.addEventListener(
            "click",
            () => {

                console.log(
                    "📷 Crop Scan button clicked"
                );


                cropInput.value =
                    "";


                cropInput.click();

            }
        );

    }


    cropInput.addEventListener(
        "change",
        async () => {

            const file =
                cropInput.files?.[0];


            if (!file) {
                return;
            }


            console.log(
                "📷 Selected image:",
                file.name
            );


            if (
                !file.type.startsWith(
                    "image/"
                )
            ) {

                alert(
                    currentLanguage === "hi"
                        ? "कृपया फसल की image चुनें।"
                        : "Please select a crop image."
                );

                return;

            }


            if (
                file.size >
                10 * 1024 * 1024
            ) {

                alert(
                    currentLanguage === "hi"
                        ? "Image 10 MB से छोटी होनी चाहिए।"
                        : "Image must be smaller than 10 MB."
                );

                return;

            }


            showLoading();


            const responseBox =
                getAIResponseBox();


            responseBox.innerHTML = `
                <div class="response-icon">
                    <i class="fa-solid fa-camera"></i>
                </div>

                <div class="response-content">

                    <div
                        class="solution-heading"
                        style="
                            font-weight:700;
                            color:#244b31;
                        "
                    >
                        ${
                            currentLanguage === "hi"
                                ? "समाधान"
                                : "Solution"
                        }
                    </div>

                    <p>
                        ${
                            currentLanguage === "hi"
                                ? "आपकी फसल की image का AI analysis किया जा रहा है..."
                                : "KrishiRakshak AI is analyzing your crop image..."
                        }
                    </p>

                </div>
            `;


            const formData =
                new FormData();


            formData.append(
                "image",
                file
            );


            formData.append(
                "language",
                currentLanguage
            );


            try {

                
                console.log(
                 "📡 Sending crop image to Groq Vision..."

                );


                const response =
                    await fetch(
                        `${API_BASE}/api/crop-scan`,
                        {
                            method: "POST",
                            body: formData
                        }
                    );


                const data =
                    await response.json();


                console.log(
                    "📷 Crop scan response:",
                    data
                );


                if (!response.ok) {

                    throw new Error(
                        data.details ||
                        data.error ||
                        "Crop analysis failed"
                    );

                }


                const answer =
                    data.answer ||
                    data.message ||
                    data.response ||
                    data.text;


                if (!answer) {

                    throw new Error(
                        "Crop AI returned empty answer."
                    );

                }


                showAIResponse(
                    answer
                );
                
                updateCropDashboard(
                  data.health,
                  data.risk,
                  data.actionPlan,
                  data.observation,
                  data.possibleIssue,
                  data.prevention
                );

                saveHistory(
                    "Crop Scan",
                    file.name,
                    answer
                );


                speak(answer);


                console.log(
                    "✅ CROP SCAN SUCCESS"
                );

            } catch (error) {

                console.error(
                    "❌ CROP SCAN ERROR:",
                    error
                );


                showAIResponse(
                    currentLanguage === "hi"
                        ? `फसल स्कैन में समस्या आई: ${error.message}`
                        : `Crop analysis failed: ${error.message}`
                );

            }

        }
    );


    /* =====================================================
       EDIT FARM
       ===================================================== */

    const editFarmBtn =
        document.getElementById(
            "editFarmBtn"
        );


    function closeFarmEditor() {

        const modal =
            document.getElementById(
                "farmEditModal"
            );


        if (modal) {
            modal.remove();
        }

    }


    function openFarmEditor() {

        const t =
            translations[
                currentLanguage
            ];


        closeFarmEditor();


        const modal =
            document.createElement(
                "div"
            );


        modal.id =
            "farmEditModal";


        modal.innerHTML = `
            <div class="farm-modal-overlay">

                <div class="farm-modal">

                    <div class="farm-modal-header">

                        <div>

                            <span class="farm-modal-label">
                                ${t.myFarmLabel}
                            </span>

                            <h2>
                                ${t.editFarm}
                            </h2>

                        </div>

                        <button
                            type="button"
                            class="farm-modal-close"
                            id="closeFarmModal"
                        >
                            <i class="fa-solid fa-xmark"></i>
                        </button>

                    </div>


                    <div class="farm-form">

                        <label>
                            ${t.farmName}

                            <input
                                type="text"
                                id="farmNameInput"
                                value="${escapeHTML(farmData.name)}"
                            >
                        </label>


                        <label>
                            ${t.farmLocation}

                            <input
                                type="text"
                                id="farmLocationInput"
                                value="${escapeHTML(farmData.location)}"
                            >
                        </label>


                        <label>
                            ${t.farmCrop}

                            <input
                                type="text"
                                id="farmCropInput"
                                value="${escapeHTML(farmData.crop)}"
                            >
                        </label>


                        <label>
                            ${t.farmArea}

                            <input
                                type="text"
                                id="farmAreaInput"
                                value="${escapeHTML(farmData.area)}"
                            >
                        </label>

                    </div>


                    <div class="farm-modal-actions">

                        <button
                            type="button"
                            class="farm-cancel-btn"
                            id="cancelFarmBtn"
                        >
                            ${t.cancel}
                        </button>


                        <button
                            type="button"
                            class="farm-save-btn"
                            id="saveFarmBtn"
                        >
                            <i class="fa-solid fa-check"></i>
                            ${t.saveFarm}
                        </button>

                    </div>

                </div>

            </div>
        `;


        document.body.appendChild(
            modal
        );


        document
            .getElementById(
                "closeFarmModal"
            )
            ?.addEventListener(
                "click",
                closeFarmEditor
            );


        document
            .getElementById(
                "cancelFarmBtn"
            )
            ?.addEventListener(
                "click",
                closeFarmEditor
            );


        document
            .getElementById(
                "saveFarmBtn"
            )
            ?.addEventListener(
                "click",
                () => {

                    const name =
                        document
                            .getElementById(
                                "farmNameInput"
                            )
                            ?.value
                            .trim();


                    const location =
                        document
                            .getElementById(
                                "farmLocationInput"
                            )
                            ?.value
                            .trim();


                    const crop =
                        document
                            .getElementById(
                                "farmCropInput"
                            )
                            ?.value
                            .trim();


                    const area =
                        document
                            .getElementById(
                                "farmAreaInput"
                            )
                            ?.value
                            .trim();


                    if (
                        !name ||
                        !location ||
                        !crop ||
                        !area
                    ) {

                        alert(
                            currentLanguage === "hi"
                                ? "कृपया सभी जानकारी भरें।"
                                : "Please fill in all farm details."
                        );

                        return;

                    }


                    farmData = {
                        name,
                        location,
                        crop,
                        area
                    };


                    localStorage.setItem(
                        "krishiFarmData",
                        JSON.stringify(
                            farmData
                        )
                    );


                    updateFarmDisplay();


                    closeFarmEditor();


                    showAIResponse(
                        currentLanguage === "hi"
                            ? "आपके खेत की जानकारी सफलतापूर्वक अपडेट हो गई है।"
                            : "Your farm information has been updated successfully."
                    );

                }
            );


        modal
            .querySelector(
                ".farm-modal-overlay"
            )
            ?.addEventListener(
                "click",
                event => {

                    if (
                        event.target.classList.contains(
                            "farm-modal-overlay"
                        )
                    ) {

                        closeFarmEditor();

                    }

                }
            );

    }


    if (editFarmBtn) {

        editFarmBtn.addEventListener(
            "click",
            openFarmEditor
        );

    }


    /* =====================================================
       HISTORY
       ===================================================== */

    function saveHistory(
        type,
        question,
        answer
    ) {

        try {

            const history =
                JSON.parse(
                    localStorage.getItem(
                        "krishiHistory"
                    ) || "[]"
                );


            history.unshift({

                type,
                question,
                answer,
                date:
                    new Date().toLocaleString()

            });


            localStorage.setItem(
                "krishiHistory",
                JSON.stringify(
                    history.slice(0, 30)
                )
            );

        } catch (error) {

            console.log(
                "History save error:",
                error
            );

        }

    }


    function openHistory() {

        let history = [];


        try {

            history =
                JSON.parse(
                    localStorage.getItem(
                        "krishiHistory"
                    ) || "[]"
                );

        } catch (error) {

            history = [];

        }


        const old =
            document.getElementById(
                "historyModal"
            );


        if (old) {
            old.remove();
        }


        const modal =
            document.createElement(
                "div"
            );


        modal.id =
            "historyModal";


        let content = "";


        if (!history.length) {

            content =
                currentLanguage === "hi"
                    ? "<p>अभी कोई history उपलब्ध नहीं है।</p>"
                    : "<p>No history available yet.</p>";

        } else {

            content =
                history
                    .map(item => {

                        return `
                            <div
                                style="
                                    padding:14px;
                                    margin-bottom:10px;
                                    border:1px solid #e3e8e4;
                                    border-radius:12px;
                                    background:#fff;
                                "
                            >

                                <strong>
                                    ${escapeHTML(item.type)}
                                </strong>

                                <p
                                    style="
                                        margin:7px 0;
                                        font-weight:600;
                                    "
                                >
                                    ${escapeHTML(item.question)}
                                </p>

                                <small>
                                    ${escapeHTML(
                                        item.date
                                    )}
                                </small>

                            </div>
                        `;

                    })
                    .join("");

        }


        modal.innerHTML = `
            <div
                class="farm-modal-overlay"
                style="
                    position:fixed;
                    inset:0;
                    background:rgba(0,0,0,.45);
                    display:flex;
                    align-items:center;
                    justify-content:center;
                    z-index:9999;
                    padding:20px;
                "
            >

                <div
                    class="farm-modal"
                    style="
                        max-width:650px;
                        width:100%;
                        max-height:80vh;
                        overflow:auto;
                    "
                >

                    <div
                        style="
                            display:flex;
                            justify-content:space-between;
                            align-items:center;
                            margin-bottom:18px;
                        "
                    >

                        <h2>
                            ${
                                currentLanguage === "hi"
                                    ? "इतिहास"
                                    : "History"
                            }
                        </h2>

                        <button
                            type="button"
                            id="closeHistoryModal"
                            style="
                                border:0;
                                background:none;
                                font-size:22px;
                                cursor:pointer;
                            "
                        >
                            ×
                        </button>

                    </div>

                    ${content}

                </div>

            </div>
        `;


        document.body.appendChild(
            modal
        );


        document
            .getElementById(
                "closeHistoryModal"
            )
            ?.addEventListener(
                "click",
                () => modal.remove()
            );


        modal
            .querySelector(
                ".farm-modal-overlay"
            )
            ?.addEventListener(
                "click",
                event => {

                    if (
                        event.target.classList.contains(
                            "farm-modal-overlay"
                        )
                    ) {

                        modal.remove();

                    }

                }
            );

    }


    /* =====================================================
       SIDEBAR NAVIGATION
       ===================================================== */

    const weatherCard =
        document.querySelector(
            ".weather-card"
        );


    /* Weather card ko navbar target do */

    if (
        weatherCard &&
        !weatherCard.id
    ) {

        weatherCard.id =
            "weather";

    }


    document
        .querySelectorAll(
            ".nav-item"
        )
        .forEach(item => {

            item.addEventListener(
                "click",
                event => {

                    const href =
                        item.getAttribute(
                            "href"
                        );


                    /* ---------- CROP SCAN ---------- */

                    if (
                        item.id ===
                        "cropScanNav"
                    ) {

                        event.preventDefault();


                        scanCropBtn?.click();


                        return;

                    }


                    /* ---------- HISTORY ---------- */

                    const text =
                        item.textContent
                            .trim()
                            .toLowerCase();


                    if (
                        text === "history" ||
                        text === "इतिहास"
                    ) {

                        event.preventDefault();


                        openHistory();


                        return;

                    }


                    /* ---------- NORMAL NAV ---------- */

                    if (
                        href &&
                        href.startsWith("#")
                    ) {

                        event.preventDefault();


                        const target =
                            document.querySelector(
                                href
                            );


                        if (target) {

                            target.scrollIntoView({
                                behavior:
                                    "smooth",
                                block:
                                    "start"
                            });

                        }


                        document
                            .querySelectorAll(
                                ".nav-item"
                            )
                            .forEach(nav => {

                                nav.classList.remove(
                                    "active"
                                );

                            });


                        item.classList.add(
                            "active"
                        );

                    }

                }
            );

        });


    /* =====================================================
       INITIAL LOAD
       ===================================================== */

    changeLanguage("en");

    updateFarmDisplay();

    loadKrishiWeather(
        farmData.location
            .split(",")[0]
            .trim() || "Rampur"
    );


    /* =====================================================
       REFRESH WEATHER EVERY 10 MINUTES
       ===================================================== */

    setInterval(
        () => {

            loadKrishiWeather(
                farmData.location
                    .split(",")[0]
                    .trim() || "Rampur"
            );

        },
        10 * 60 * 1000
    );


    /* =====================================================
       SPEECH VOICES LOAD
       ===================================================== */

    if (
        "speechSynthesis" in window
    ) {

        window.speechSynthesis.onvoiceschanged =
            () => {

                console.log(
                    "🔊 Browser voices loaded:",
                    window.speechSynthesis
                        .getVoices()
                        .length
                );

            };

    }


    /* =====================================================
       READY
       ===================================================== */

    console.log(
        "===================================="
    );

    console.log(
        "🌱 KRISHIRAKSHAK AI READY"
    );

    console.log(
        "🤖 AI Chat: READY"
    );

    console.log(
        "🎤 Voice Recognition: READY"
    );

    console.log(
        "🔊 Voice Output: READY"
    );

    console.log(
        "📷 Crop Scan: READY"
    );

    console.log(
        "🌤️ Weather: READY"
    );

    console.log(
        "🌐 Hindi / English: READY"
    );

    console.log(
        "🧭 Navbar: READY"
    );

    console.log(
        "===================================="
    );

});
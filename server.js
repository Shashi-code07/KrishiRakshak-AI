const express = require("express");
const cors = require("cors");
const multer = require("multer");
require("dotenv").config();

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

const upload = multer({
    storage: multer.memoryStorage(),
    limits: {
        fileSize: 10 * 1024 * 1024
    }
});

/* =========================
   SERVER CHECK
========================= */

app.get("/", (req, res) => {
    res.send("KrishiRakshak AI Server is running 🌱");
});

/* =========================
   AI CHAT API - GROQ
========================= */

app.post("/api/chat", async (req, res) => {

    console.log("\n=================================");
    console.log("🌱 AI REQUEST RECEIVED");
    console.log("=================================");

    try {

        const { message, language } = req.body;

        console.log("Question:", message);
        console.log("Language:", language);

        if (!message || !message.trim()) {
            return res.status(400).json({
                error: "Message is required"
            });
        }

        const apiKey = process.env.GROQ_API_KEY;

        if (!apiKey) {
            console.error("❌ GROQ_API_KEY missing");

            return res.status(500).json({
                error: "Groq API key is missing"
            });
        }

        const isHinglish =
            language !== "hi" &&
            /(\bkaise\b|\bkya\b|\bhai\b|\bmein\b|\bme\b|\bko\b|\bke\b|\bki\b|\bka\b|\bse\b|\bfasal\b|\bdhan\b|\bgehun\b|\bpaani\b|\bkab\b|\bkitna\b)/i.test(message);

        const languageName =
              language === "hi"
               ? "Hindi"
               : isHinglish
                    ? "Hinglish"
                    : "English";
        const prompt = `
You are KrishiRakshak AI, a smart agriculture assistant
for Indian farmers.

Answer the farmer's question in ${languageName}.
IMPORTANT LANGUAGE RULE:
If language is Hindi, write the ENTIRE answer only in Hindi Devanagari script.
Do not use English sentences.
Use simple Hindi that an Indian farmer can easily understand.

If language is Hinglish, write the ENTIRE answer in simple Hinglish using English letters.
Do not switch to formal English.

If language is English, write the answer entirely in English.
If the language is Hinglish, reply in simple natural Hinglish
using English letters. Do not convert Hinglish into formal English.

If the language is Hindi, reply in Hindi script.

If the language is English, reply in English.

Give practical, simple and useful farming advice.

Consider:
- Indian crops
- Soil
- Irrigation
- Weather
- Fertilizers
- Pests
- Diseases
- Crop protection
- Sustainable farming

If disease or pest is mentioned:
- Explain possible causes.
- Give safe immediate steps.
- Do not blindly recommend pesticides.
- If chemicals are mentioned, advise following the product label
  and local agricultural guidance.

Do not invent exact pesticide doses when important information
is missing.

Keep the answer clear and reasonably concise.

Farmer's question:
${message}
`;

        console.log("📡 Sending request to Groq...");

        const groqResponse = await fetch(
            "https://api.groq.com/openai/v1/chat/completions",
            {
                method: "POST",

                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${apiKey}`
                },

                body: JSON.stringify({
                    model: "qwen/qwen3.6-27b",

                    messages: [
                        {
                            role: "user",
                            content: prompt
                        }
                    ],

                    temperature: 0.7,
                    max_completion_tokens: 700,
                    reasoning_effort: "none"
                })
            }
        );

        const data = await groqResponse.json();

        console.log(
            "Groq HTTP status:",
            groqResponse.status
        );

        if (!groqResponse.ok) {

            console.error(
                "❌ GROQ ERROR:",
                JSON.stringify(data, null, 2)
            );

            return res.status(500).json({
                error: "Groq API request failed",
                details:
                    data?.error?.message ||
                    "Unknown Groq error"
            });
        }

        const answer =
            data?.choices?.[0]?.message?.content;

        if (!answer) {

            console.error(
                "❌ Empty Groq response:",
                JSON.stringify(data, null, 2)
            );

            return res.status(500).json({
                error: "Groq returned an empty response"
            });
        }

        console.log("✅ AI ANSWER SUCCESS");
        console.log("=================================\n");

        return res.json({
            answer: answer
        });

    } catch (error) {

        console.error("❌ SERVER ERROR:");
        console.error(error);

        return res.status(500).json({
            error: "AI response failed",
            details: error.message
        });
    }
});

/* =========================
   WEATHER API
========================= */

app.get("/api/weather", async (req, res) => {

    console.log("🌤️ WEATHER REQUEST RECEIVED");

    try {

        const apiKey = process.env.OPENWEATHER_API_KEY;
        const city = req.query.city || "Rampur";

        console.log("City:", city);

        if (!apiKey) {

            console.log("❌ OPENWEATHER_API_KEY missing");

            return res.status(500).json({
                error: "OpenWeather API key is missing"
            });
        }

        const url =
            `https://api.openweathermap.org/data/2.5/weather` +
            `?q=${encodeURIComponent(city)}` +
            `&appid=${encodeURIComponent(apiKey)}` +
            `&units=metric`;

        const response = await fetch(url);
        const data = await response.json();

        console.log(
            "OpenWeather status:",
            response.status
        );

        if (!response.ok) {

            return res.status(response.status).json({
                error:
                    data?.message ||
                    "Weather data unavailable"
            });
        }

        console.log("✅ WEATHER SUCCESS");

        return res.json(data);

    } catch (error) {

        console.error("❌ WEATHER ERROR:", error);

        return res.status(500).json({
            error: "Weather request failed",
            details: error.message
        });
    }
});

/* =========================
   MARKET INSIGHTS
   FARMER.IN
========================= */

app.get("/api/market", async (req, res) => {

    console.log("📊 MARKET REQUEST RECEIVED");

    try {

        const response = await fetch(
            "https://farmer.in/api/open/prices.json"
        );

        const data = await response.json();

        console.log(
            "Farmer.in status:",
            response.status
        );

        if (!response.ok) {

            return res.status(response.status).json({
                error: "Market data unavailable"
            });
        }

        return res.json(data);

    } catch (error) {

        console.error("❌ MARKET ERROR:", error);

        return res.status(500).json({
            error: "Market request failed",
            details: error.message
        });
    }
});

/* =========================
   AI CROP IMAGE SCAN API
   GROQ VISION
========================= */

app.post(
    "/api/crop-scan",
    upload.single("image"),
    async (req, res) => {

        console.log("\n=================================");
        console.log("🌿 CROP IMAGE SCAN REQUEST");
        console.log("=================================");

        try {

            const apiKey = process.env.GROQ_API_KEY;

            if (!apiKey) {

                return res.status(500).json({
                    error: "Groq API key is missing"
                });
            }

            if (!req.file) {

                return res.status(400).json({
                    error: "Crop image is required"
                });
            }

            const language =
                req.body.language === "hi"
                    ? "Hindi"
                    : "English";

            console.log(
                "Image:",
                req.file.originalname
            );

            console.log(
                "Type:",
                req.file.mimetype
            );

            console.log(
                "Language:",
                language
            );

            /*
              Groq Vision accepts local images
              as a base64 data URL.
            */

            const base64Image =
                req.file.buffer.toString("base64");

            const imageDataURL =
                `data:${req.file.mimetype};base64,${base64Image}`;

            const prompt = `
You are KrishiRakshak AI, an agricultural crop health assistant
for Indian farmers.

Analyze the uploaded crop or leaf image carefully.

Reply in ${language}.

Return ONLY valid JSON.
Do not use markdown.
Do not use code fences.

Use exactly this structure:

{
  "healthScore": 0,
  "healthStatus": "Healthy",
  "riskLevel": "Low",
  "riskReason": "Short explanation",
  "observation": "What is visibly noticeable",
  "possibleIssue": "Most likely issue or No obvious issue",
  "todayActions": [
    "First practical action",
    "Second practical action",
    "Third practical action"
  ],
  "prevention": "Short prevention advice"
}

Rules:

- healthScore must be between 0 and 100.
- healthStatus must be Healthy, Moderate, or Poor.
- riskLevel must be Low, Medium, or High.
- Base the analysis only on what can reasonably be inferred from the image.
- If the image is unclear, reduce confidence and say so.
- Do not claim a disease with certainty unless the visual evidence is strong.
- Do not blindly recommend pesticides.
- Do not invent exact pesticide doses.
- If chemical treatment may be required, advise following the product label
  and local agricultural guidance.
- Today actions must be practical and safe.
- Consider Indian farming conditions.
- Keep every field concise.
- Keep todayActions to exactly 3 short actions.
- Keep the complete JSON response under 400 words.
`;

            console.log(
                "📡 Sending crop image to Groq Vision..."
            );

            const groqResponse = await fetch(
                "https://api.groq.com/openai/v1/chat/completions",
                {
                    method: "POST",

                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${apiKey}`
                    },

                    body: JSON.stringify({

                        model: "qwen/qwen3.6-27b",

                        messages: [
                            {
                                role: "user",

                                content: [
                                    {
                                        type: "text",
                                        text: prompt
                                    },
                                    {
                                        type: "image_url",
                                        image_url: {
                                            url: imageDataURL
                                        }
                                    }
                                ]
                            }
                        ],

                        temperature: 0.2,

                        max_completion_tokens: 700,

                        reasoning_effort: "none",

                        response_format: {
                            type: "json_object"
                        }
                    })
                }
            );

            const data = await groqResponse.json();

            console.log(
                "Groq Vision HTTP status:",
                groqResponse.status
            );

            if (!groqResponse.ok) {

                console.error(
                    "❌ CROP GROQ ERROR:",
                    JSON.stringify(data, null, 2)
                );

                return res.status(500).json({
                    error: "Crop image analysis failed",
                    details:
                        data?.error?.message ||
                        "Unknown Groq error"
                });
            }

            let answer =
                data?.choices?.[0]?.message?.content;

            if (!answer) {

                return res.status(500).json({
                    error: "Groq returned an empty crop analysis"
                });
            }

            console.log(
                "Raw Groq crop response:"
            );

            console.log(answer);

            /*
              Remove accidental code fences
              just in case the model returns them.
            */

            answer = answer
                .replace(/```json/gi, "")
                .replace(/```/g, "")
                .trim();

            let analysis;

            try {

                analysis = JSON.parse(answer);

            } catch (parseError) {

                console.error(
                    "❌ JSON PARSE ERROR:",
                    parseError.message
                );

                return res.json({
                    answer: answer
                });
            }

            const healthScore =
                Math.max(
                    0,
                    Math.min(
                        100,
                        Number(analysis.healthScore) || 0
                    )
                );

            const healthStatus =
                analysis.healthStatus ||
                "Moderate";

            const riskLevel =
                analysis.riskLevel ||
                "Medium";

            const riskReason =
                analysis.riskReason ||
                "Crop condition requires monitoring.";

            const observation =
                analysis.observation ||
                "No clear observation available.";

            const possibleIssue =
                analysis.possibleIssue ||
                "No obvious issue detected.";

            const todayActions =
                Array.isArray(analysis.todayActions)
                    ? analysis.todayActions
                    : [];

            const prevention =
                analysis.prevention ||
                "Continue regular crop monitoring.";

            /*
              Same readable format as before.
            */

            const readableAnswer = `
**Observation**
${observation}

**Possible Issue**
${possibleIssue}

**Solution**
${
    todayActions.length
        ? todayActions
            .map(
                (action, index) =>
                    `${index + 1}. ${action}`
            )
            .join("\n")
        : "Monitor the crop and follow local agricultural guidance."
}

**Prevention**
${prevention}
`;

            console.log(
                "🌱 Health Score:",
                healthScore
            );

            console.log(
                "🛡️ Risk:",
                riskLevel
            );

            console.log(
                "📅 Actions:",
                todayActions.length
            );

            console.log(
                "✅ CROP ANALYSIS SUCCESS"
            );

            return res.json({

                answer: readableAnswer,

                health: {
                    score: healthScore,
                    status: healthStatus
                },

                risk: {
                    level: riskLevel,
                    reason: riskReason
                },

                actionPlan: todayActions,

                observation: observation,

                possibleIssue: possibleIssue,

                prevention: prevention
            });

        } catch (error) {

            console.error(
                "❌ CROP SCAN SERVER ERROR:"
            );

            console.error(error);

            return res.status(500).json({
                error: "Crop analysis failed",
                details: error.message
            });
        }
    }
);

/* =========================
   START SERVER
========================= */

const server = app.listen(
    PORT,
    "127.0.0.1",
    () => {

        console.log("");

        console.log(
            "================================="
        );

        console.log(
            "🌱 KrishiRakshak AI Server"
        );

        console.log(
            "================================="
        );

        console.log(
            `Server running on http://localhost:${PORT}`
        );

        console.log(
            "AI endpoint: /api/chat"
        );

        console.log(
            "Weather endpoint: /api/weather"
        );

        console.log(
            "Market endpoint: /api/market"
        );

        console.log(
            "Crop endpoint: /api/crop-scan"
        );

        console.log(
            "AI Provider: Groq"
        );

        console.log(
            "================================="
        );
    }
);

/*
   Keep Node process alive.
*/

setInterval(() => {
    // Server heartbeat
}, 60000);

process.on("SIGINT", () => {

    console.log(
        "\nStopping KrishiRakshak AI Server..."
    );

    server.close(() => {
        process.exit(0);
    });
});
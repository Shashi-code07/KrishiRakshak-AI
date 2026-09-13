# 🌱 KrishiRakshak AI | Smart Farming

KrishiRakshak AI is an AI-powered smart farming assistant designed to help Indian farmers make better decisions about crop health, farming risks, weather, market conditions, and daily crop management.

The platform combines **AI-powered crop image analysis, intelligent farming assistance, weather information, market insights, and actionable recommendations** in a simple farmer-friendly dashboard.

---

## 🚜 Key Features

### 🤖 AI Farming Assistant

Ask farming-related questions and receive practical AI-generated guidance about:

* Crop management
* Irrigation
* Soil
* Fertilizers
* Pests and diseases
* Crop protection
* Sustainable farming practices

Supports **English and Hindi** responses.

### 📷 AI Crop Scan

Upload a crop or leaf image and let the AI analyze visible crop conditions.

The system provides:

* 🌿 Crop Health Score
* 🛡️ Risk Level
* 🔎 Visible Observations
* ⚠️ Possible Issues
* 📋 Today's Action Plan
* 🛡️ Prevention Advice

The recommendations are designed to be practical and easy to understand.

### 🛡️ AI Crop Risk

The system evaluates crop conditions and provides a risk assessment:

* Low Risk
* Medium Risk
* High Risk

It also explains the reason behind the identified risk.

### 📋 Action Plan

After crop analysis, farmers receive practical actions that can be followed immediately.

### 🌤️ Weather

Provides weather information for the selected farming location using weather data.

Weather information can help farmers plan:

* Irrigation
* Spraying
* Field activities
* Crop protection

### 📊 Market Insights

Displays agricultural market price information to help farmers understand current market conditions and make better selling decisions.

### 🎙️ Voice Assistant

The platform supports voice-based interaction using browser speech recognition and speech synthesis.

Farmers can ask questions using their voice and receive spoken responses.

### 🌐 Hindi / English

The interface supports:

* English
* Hindi

The AI assistant also responds according to the selected language.

### 📱 Responsive Dashboard

The application is designed to work across:

* Desktop
* Laptop
* Tablet
* Mobile-sized screens

---

## 🧠 How It Works

```text
Farmer
   ↓
KrishiRakshak AI Dashboard
   ↓
 ┌─────────────────────────────┐
 │ AI Farming Assistant        │
 │ Crop Image Scan             │
 │ Crop Risk Analysis          │
 │ Action Plan                 │
 │ Weather                     │
 │ Market Insights             │
 │ Voice Interaction           │
 └─────────────────────────────┘
   ↓
AI & Data APIs
   ↓
Actionable Farming Guidance
```

---

## 🛠️ Technology Stack

### Frontend

* HTML5
* CSS3
* JavaScript
* Font Awesome
* Responsive UI

### Backend

* Node.js
* Express.js
* CORS
* Multer
* dotenv

### AI

* Groq API
* Qwen model
* AI-powered text assistance
* AI-powered crop image analysis

### External Data

* OpenWeather API
* Farmer.in Open Market API

---

## 📁 Project Structure

```text
KRISHI-SENSE-AI/
│
├── index.html
├── style.css
├── script.js
│
├── server/
│   ├── server.js
│   ├── package.json
│   ├── package-lock.json
│   └── .env
│
└── README.md
```

> **Important:** `.env` contains private API keys and must never be uploaded to a public GitHub repository.

---

## ⚙️ Local Setup

### 1. Clone the repository

```bash
git clone https://github.com/YOUR-USERNAME/KrishiRakshak-AI.git
```

### 2. Open the project

```bash
cd KrishiRakshak-AI
```

### 3. Install backend dependencies

```bash
cd server
npm install
```

### 4. Create `.env`

Inside the `server` folder, create a file named:

```text
.env
```

Add your own API keys:

```env
GROQ_API_KEY=YOUR_GROQ_API_KEY
OPENWEATHER_API_KEY=YOUR_OPENWEATHER_API_KEY
```

Never publish these keys publicly.

### 5. Start the backend

```bash
node server.js
```

The backend will run on:

```text
http://localhost:3000
```

### 6. Start the frontend

From the project root, serve the frontend using a local HTTP server.

Example:

```bash
http-server -p 5500
```

Then open:

```text
http://127.0.0.1:5500
```

---

## 🔐 API Security

API keys are stored using environment variables instead of being hard-coded into the source code.

The `.env` file should remain local and should be added to `.gitignore`.

Example:

```text
.env
node_modules/
```

---

## 🎯 Problem We Address

Farmers often need quick and understandable information about crop health, weather, market conditions, pests, and crop management.

KrishiRakshak AI brings these capabilities together into one simple platform so that farmers can:

* Understand visible crop problems
* Assess crop risks
* Get practical next steps
* Check weather conditions
* View market information
* Ask farming questions using AI
* Interact through voice

---

## 🌾 Impact

KrishiRakshak AI aims to support farmers with:

* Better crop monitoring

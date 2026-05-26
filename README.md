# 🌤️ Weather App

A responsive weather application built with **React**, **Node.js**, and **Express** that fetches real-time weather data using a public API and displays it with smooth **Lottie animations** based on current weather conditions.

![Weather App Preview](./preview.png)

---

## 🚀 Features

- 🔍 **City Search** — Search weather data for any city worldwide
- 🌡️ **Real-time Weather Data** — Displays temperature, humidity, wind speed, latitude & longitude
- 🎞️ **Lottie Animations** — Dynamic weather animations that change based on cloud/weather conditions
- ⚠️ **Input Validation** — Handles wrong or invalid city names with user-friendly error messages
- ⏳ **Loading State** — Shows a loading indicator while fetching data from the API
- 📱 **Responsive UI** — Clean and minimal design styled with Tailwind CSS

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Frontend | React JS |
| Backend | Node.js, Express |
| Styling | Tailwind CSS |
| Animations | Lottie Files |
| Data Source | Public Weather API (OpenWeatherMap) |

---

## 📁 Project Structure

```
weather-app/
├── client/                 # React frontend
│   ├── src/
│   │   ├── components/     # Weather card, search bar, animations
│   │   ├── App.jsx
│   │   └── main.jsx
│   └── public/
├── server/                 # Node.js + Express backend
│   ├── index.js            # Express server & API routes
│   └── .env                # API key (not committed)
├── package.json
└── README.md
```

---

## ⚙️ Getting Started

### Prerequisites

- Node.js v18+
- npm or yarn
- OpenWeatherMap API key (free at [openweathermap.org](https://openweathermap.org/api))

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/weather-app.git
   cd weather-app
   ```

2. **Install server dependencies**
   ```bash
   cd server
   npm install
   ```

3. **Set up environment variables**

   Create a `.env` file inside the `server/` folder:
   ```env
   API_KEY=your_openweathermap_api_key
   PORT=5000
   ```

4. **Install client dependencies**
   ```bash
   cd ../client
   npm install
   ```

5. **Run the app**

   Start the backend server:
   ```bash
   cd server
   node index.js
   ```

   Start the React frontend:
   ```bash
   cd client
   npm run dev
   ```

6. Open your browser at `http://localhost:5173`

---

## 🌐 API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| GET | `/api/weather?city=Chennai` | Fetches weather data for the given city |

---

## 📸 Screenshots

| Search | Weather Result | Invalid City |
|---|---|---|
| Search bar with city input | Temperature, humidity, wind speed with Lottie animation | Error message for wrong city |

---

## 🔒 Environment Variables

| Variable | Description |
|---|---|
| `API_KEY` | Your OpenWeatherMap API key |
| `PORT` | Port for the Express server (default: 5000) |

> ⚠️ Never commit your `.env` file. It is already added to `.gitignore`.

---

## 🙋‍♂️ Author

**Arun**
- GitHub: [@your-username](https://github.com/Arunkumar1321)
- LinkedIn: [your-linkedin](https://linkedin.com/in/arun-kumar-1325d)

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

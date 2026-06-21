# 🌤️ Weather App

A clean, responsive weather application that shows real-time weather conditions for any city in the world. Built while practicing vanilla JavaScript and working with REST APIs.

![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)


## ✨ Features

- 🔍 Search current weather conditions by city name
- 🌡️ Displays temperature, humidity, and wind speed
- 🎨 Dynamic weather icons that change based on conditions (clear, clouds, rain, drizzle, mist, snow)
- 📱 Fully responsive design
- ⌨️ Search by clicking the button or pressing Enter

## 🛠️ Built With

- **HTML5** – structure and markup
- **CSS3** – styling, gradients, and responsive layout
- **JavaScript (Vanilla)** – API calls, DOM manipulation, async/await
- **[OpenWeatherMap API](https://openweathermap.org/api)** – Geocoding API + Current Weather Data API



## 🚀 Getting Started

### Prerequisites

You'll need a free API key from [OpenWeatherMap](https://openweathermap.org/api).

> **Note:** New API keys can take up to a couple of hours to activate after signup.

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/darshini240906/your-repo-name.git
   cd your-repo-name
   ```

2. **Add your API key**

   Create a file named `config.js` in the root folder (this file is gitignored, so your key stays private):
   ```javascript
   const apiKey = "YOUR_OPENWEATHERMAP_API_KEY";
   ```

   A template is provided in `config.example.js` — just copy it and rename:
   ```bash
   cp config.example.js config.js
   ```
   Then paste in your actual key.

3. **Open the app**

   Simply open `index.html` in your browser, or use a tool like [VS Code Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) for the best experience.


## 🔑 How It Works

1. The user types a city name and hits search.
2. The app calls OpenWeatherMap's **Geocoding API** to convert the city name into latitude/longitude coordinates.
3. Those coordinates are passed to the **Current Weather API** to fetch live weather data.
4. The DOM updates with the temperature, humidity, wind speed, and a matching weather icon.

## 🎯 What I Learned

- Making asynchronous API calls with `fetch()` and `async/await`
- Chaining two dependent API requests (geocoding → weather lookup)
- Manipulating the DOM dynamically based on API responses
- Keeping API keys out of version control using `.gitignore`
- Basic error handling for invalid city names and failed requests

## 🔮 Future Improvements

- [ ] Add a 5-day forecast view
- [ ] Add geolocation support (detect user's current location automatically)
- [ ] Add loading spinner during API calls
- [ ] Add unit toggle (°C / °F)
- [ ] Improve error messages with better UI feedback

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙋‍♀️ Author

**Darshini**
- GitHub: [@darshini240906](https://github.com/darshini240906)
- LinkedIn: [s-darshini-jeya-shakthi](https://www.linkedin.com/in/s-darshini-jeya-shakthi-a5198431b)

---

⭐ If you found this project helpful, consider giving it a star!

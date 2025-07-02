# Dynamic Weather App

A modern, responsive weather application built with React that provides real-time weather information and 5-day forecasts for cities worldwide.

## 🌤️ Features

- **City Search**: Search for weather information by city name
- **Current Weather**: Display current temperature, weather conditions, and weather icons
- **5-Day Forecast**: View detailed weather predictions for the next 5 days
- **Real-time Data**: Fetches live weather data from OpenWeather API
- **Error Handling**: Graceful handling of invalid city names and API errors
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Weather Icons**: Visual weather condition indicators

## 🛠️ Technologies Used

- **React 18** - Frontend framework
- **React Hooks** - useState and useEffect for state management
- **OpenWeather API** - Real-time weather data source
- **CSS3** - Modern styling and responsive design
- **JavaScript ES6+** - Modern JavaScript features

## 📋 Prerequisites

Before running this project, ensure you have:

- **Node.js** (version 16.0 or higher)
- **npm** (version 8.0 or higher)
- **OpenWeather API Key** (free registration required)

Check your versions:
```bash
node --version
npm --version
```

## 🔑 API Setup

1. **Get OpenWeather API Key**:
   - Visit [OpenWeather API](https://openweathermap.org/api)
   - Sign up for a free account
   - Generate your API key

2. **Environment Configuration**:
   - Create a `.env` file in the project root
   - Add your API key:
   ```
   VITE_WEATHER_API_KEY=your_api_key_here
   ```

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/nourmeena/weather-app.git
cd weather-app
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Set Up Environment Variables

```bash
# Create .env file in root directory
touch .env

# Add your OpenWeather API key
echo "VITE_WEATHER_API_KEY=your_api_key_here" > .env
```

### 4. Start Development Server

```bash
npm run dev
```

The application will open at `http://localhost:5173`

### 5. Build for Production

```bash
npm run build
```

### 6. Preview Production Build

```bash
npm run preview
```

## 🔧 Key Features Implementation

### API Integration
- **useEffect Hook**: Fetches weather data on component mount and city change
- **Error Handling**: Manages API errors and invalid city responses
- **Loading States**: Displays loading indicators during API calls

### State Management
- **useState**: Manages weather data, loading states, and error messages
- **Custom Hooks**: Encapsulates weather data logic for reusability

### User Experience
- **Real-time Search**: Instant weather updates on city search
- **Responsive Design**: Optimized for all screen sizes
- **Visual Feedback**: Loading spinners and error messages

## 🎨 Weather Data Display

The app displays:
- **Current Temperature** in Celsius
- **Weather Condition** (clear sky, cloudy, rainy, etc.)
- **Weather Icons** representing current conditions
- **Additional Details**: Humidity, pressure, visibility, feels-like temperature
- **5-Day Forecast** with daily temperatures and conditions


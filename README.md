# Weather App

## Overview

This Weather App is designed to provide users with real-time weather updates and forecasts for multiple locations globally. It leverages React Native for cross-platform mobile development and the OpenWeather API for fetching weather data.

## Project Structure

Here's a breakdown of the key directories and files in this project:

### `/assets`

Contains static files such as images, fonts, and icons used throughout the app.

- **`/images`**: Store all images.
- **`/fonts`**: Custom fonts.

### `/components`

Reusable UI components used across the app.

- **`WeatherCard.js`**: Displays weather information for a single location.
- **`SearchBar.js`**: Input component for searching cities.

### `/screens`

Contains all the screens of the app.

- **`HomeScreen.js`**: The main screen that displays the weather dashboard.
- **`DetailsScreen.js`**: Shows detailed weather information for a selected location.

### `/navigation`

Manages the navigation of the app.

- **`AppNavigator.js`**: Root navigator setup using React Navigation.

### `/api`

Handles all API requests.

- **`weatherService.js`**: Functions to fetch weather data from OpenWeather API.

### `/utils`

Utility functions and helpers.

- **`convertTemp.js`**: Utility to convert temperature between Celsius and Fahrenheit.

### `/styles`

Global styles and theme information.

- **`themes.js`**: Defines colors and common styles.

### `App.js`

The entry point of the application. Sets up the app with navigation and global providers.

### `app.json`

Configuration file for the Expo app, including name, icons, permissions, etc.

## Features

- **Live Weather Data**: View current conditions like temperature, humidity, and wind.
- **City Search**: Add cities to your dashboard by searching.
- **Weather Forecasts**: Get hourly and daily forecasts.
- **Unit Conversion**: Switch between Celsius and Fahrenheit.

## Technologies Used

- **React Native**
- **Expo**
- **OpenWeather API**
- **React Navigation**

## Setup and Installation

### Prerequisites

- Node.js
- npm or Yarn
- Expo CLI

### Installation Steps

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/weather-app.git
   cd weather-app
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   expo start
   ```

## Usage

Navigate through the app using the bottom tab navigator. Search for cities using the search bar at the top of the Home screen. Select any city card to view detailed forecasts.

## Contributing

Contributions are welcome. Please follow the standard fork-and-pull request workflow.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- OpenWeather for the weather data.
- Expo for the development platform.
- React Native community for support and libraries.

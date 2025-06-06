# FirstPost - React News App

A simple React application that displays the latest news headlines by category using the NewsAPI.

## Features

- Browse top headlines by category (Technology, Business, Health, Sports, Entertainment)
- Responsive Bootstrap UI
- Loads news dynamically from [NewsAPI](https://newsapi.org/)
- Fallback image for articles without images

## Setup

1. **Clone the repository:**
   ```
   git clone https://github.com/your-username/firstpost.git
   cd firstpost
   ```

2. **Install dependencies:**
   ```
   npm install
   ```

3. **Get your NewsAPI key:**
   - Sign up at [NewsAPI](https://newsapi.org/) and get your API key.

4. **Create a `.env` file in the root directory:**
   ```
   VITE_API_KEY=your_newsapi_key_here
   ```

5. **Start the development server:**
   ```
   npm run dev
   ```

6. **Open in browser:**
   - Visit [http://localhost:5173](http://localhost:5173) (or the port shown in your terminal).

## Project Structure

```
src/
  Components/
    Navbar.jsx
    NewsBoard.jsx
    NewsItem.jsx
  assets/
    news.png
  App.jsx
  main.jsx
```

## Dependencies

- React
- Vite
- Bootstrap

## Notes

- Make sure your API key is kept private and not committed to version control.
- Some images may not load due to browser tracking prevention; a fallback image is used in such cases.

## License

This project is for learning purposes.
# Random Quote Generator

A React-based random quote generator with category filtering, favorites system, and social sharing capabilities. View the live demo [here](https://glglak.github.io/random-quote-generator).

## Features

- 🔄 Generate random quotes
- 🏷️ Filter quotes by categories
- ⭐ Save favorite quotes
- 📱 Responsive design
- 🌓 Dark/Light mode
- 📊 Quote statistics
- 📲 Social media sharing
- 🔍 Search functionality
- 📋 Copy to clipboard
- 💾 Local storage persistence

## Technologies Used

- React 18
- React Router v6
- TailwindCSS
- React Icons
- GitHub Pages
- LocalForage
- React Share

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/glglak/random-quote-generator.git
   cd random-quote-generator
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Build for production:
   ```bash
   npm run build
   ```

5. Deploy to GitHub Pages:
   ```bash
   npm run deploy
   ```

## Project Structure

```
src/
├── components/          # Reusable components
│   ├── layout/         # Layout components
│   ├── quotes/         # Quote-related components
│   └── ui/             # UI components
├── contexts/           # React contexts
├── data/              # Static data and constants
├── hooks/             # Custom hooks
├── pages/             # Page components
├── services/          # API and service functions
├── styles/            # Global styles
└── utils/             # Utility functions
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

import React, { useState, useEffect } from 'react';
import './App.css';

const quotes = [
  { text: 'Be the change you wish to see in the world.', author: 'Mahatma Gandhi', category: 'inspirational' },
  { text: 'The only way to do great work is to love what you do.', author: 'Steve Jobs', category: 'motivational' },
  { text: 'Success is not final, failure is not fatal: it is the courage to continue that counts.', author: 'Winston Churchill', category: 'motivational' },
  { text: 'In three words I can sum up everything I've learned about life: it goes on.', author: 'Robert Frost', category: 'inspirational' },
  { text: 'The future belongs to those who believe in the beauty of their dreams.', author: 'Eleanor Roosevelt', category: 'inspirational' },
  { text: 'Don't watch the clock; do what it does. Keep going.', author: 'Sam Levenson', category: 'motivational' },
  { text: 'Life is what happens when you're busy making other plans.', author: 'John Lennon', category: 'life' },
  { text: 'The purpose of our lives is to be happy.', author: 'Dalai Lama', category: 'life' },
];

function App() {
  const [currentQuote, setCurrentQuote] = useState(quotes[0]);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [filteredQuotes, setFilteredQuotes] = useState(quotes);

  const categories = ['all', ...new Set(quotes.map(quote => quote.category))];

  useEffect(() => {
    if (selectedCategory === 'all') {
      setFilteredQuotes(quotes);
    } else {
      setFilteredQuotes(quotes.filter(quote => quote.category === selectedCategory));
    }
  }, [selectedCategory]);

  const getRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * filteredQuotes.length);
    setCurrentQuote(filteredQuotes[randomIndex]);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setCurrentQuote(null);
  };

  return (
    <div className="App">
      <div className="quote-container">
        <h1>Random Quote Generator</h1>
        
        <div className="category-filters">
          {categories.map(category => (
            <button
              key={category}
              className={`category-btn ${selectedCategory === category ? 'active' : ''}`}
              onClick={() => handleCategoryChange(category)}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        {currentQuote ? (
          <div className="quote-box">
            <p className="quote-text">"{currentQuote.text}"</p>
            <p className="quote-author">- {currentQuote.author}</p>
            <p className="quote-category">Category: {currentQuote.category}</p>
          </div>
        ) : (
          <div className="quote-box">
            <p className="quote-text">Click "Generate Quote" to see a quote from the selected category</p>
          </div>
        )}
        
        <button onClick={getRandomQuote}>Generate Quote</button>
      </div>
    </div>
  );
}

export default App;
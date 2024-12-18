import React, { createContext, useContext, useState } from 'react';

const FavoriteQuotesContext = createContext();

export const FavoriteQuotesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  const addToFavorites = (quote) => {
    setFavorites((prev) => {
      // Check if quote already exists
      if (prev.some((q) => q.text === quote.text)) {
        return prev;
      }
      return [...prev, quote];
    });
  };

  const removeFromFavorites = (quote) => {
    setFavorites((prev) => prev.filter((q) => q.text !== quote.text));
  };

  const value = {
    favorites,
    addToFavorites,
    removeFromFavorites,
  };

  return (
    <FavoriteQuotesContext.Provider value={value}>
      {children}
    </FavoriteQuotesContext.Provider>
  );
};

export const useFavoriteQuotes = () => {
  const context = useContext(FavoriteQuotesContext);
  if (context === undefined) {
    throw new Error('useFavoriteQuotes must be used within a FavoriteQuotesProvider');
  }
  return context;
};

import React, { createContext, useContext, useState } from "react";

const BadgeContext = createContext({});

export function useBadge() {
  return useContext(BadgeContext);
}

export default function CategoryProvider({ children }) {
  const [categories, setCategories] = useState([]);

  const toggleSelect = (category) => {
    console.log(categories);
    categories.includes(category.toLowerCase())
      ? setCategories((prev) =>
          prev.filter((c) => {
            console.log("Filter:", c);
            return c.toLowerCase() != category.toLowerCase();
          })
        )
      : setCategories((prev) => prev.concat(category.toLowerCase()));
  };

  const value = {
    toggleSelect,
  };

  return (
    <BadgeContext.Provider value={value}>
      {categories.length > 0 && (
        <style jsx global>
          {`
            article:not(.${categories
                  .toString()
                  .toLowerCase()
                  .replace(" ", "-")
                  .replace(",", ", .")}) {
              opacity: 0.6;
            }
          `}
        </style>
      )}
      {children}
    </BadgeContext.Provider>
  );
}

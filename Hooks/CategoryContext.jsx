import React, { createContext, useContext, useState } from "react";

const BadgeContext = createContext({});

export function useBadge() {
  return useContext(BadgeContext);
}

export default function CategoryProvider({ children }) {
  const [categories, setCategories] = useState([]);

  const value = {
    categories,
    setCategories,
  };

  const selectedBadges = children.filter((child) =>
    Array(child.classList).includes(categories.values)
  );
  Array(selectedBadges).forEach((child) => child.add);

  console.log(selectedBadges);

  return (
    <BadgeContext.Provider value={value}>{children}</BadgeContext.Provider>
  );
}

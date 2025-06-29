import { createContext, useContext, useState } from "react";

const FilterContext = createContext();

export const FilterProvider =({ children }) => {
    const [activeFilters, setActiveFilters] = useState([]);

    return (
        <FilterContext.Provider value={{ activeFilters, setActiveFilters}}>
            {children}
        </FilterContext.Provider>
    )
};

export const useFilters = () => useContext(FilterContext);
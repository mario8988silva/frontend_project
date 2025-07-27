import { revelantIcons } from "../utils/filters";

export const useToggleFilter = (setActiveFilters) => {
  return (label) => {
    const icon = revelantIcons.find((icon) => icon.label === label);
    const category = icon?.category;

    setActiveFilters((prev) => {
      const isActive = prev.includes(label);

      if (category === "schools") {
        return isActive ? [] : [label];
      }

      return isActive ? prev.filter((f) => f !== label) : [...prev, label];
    });
  };
};

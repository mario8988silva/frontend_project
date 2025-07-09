import { useFilters } from '../app/store';
import icons from '../data/icons.json';

const FilterResetButton = () => {
    const { activeFilters, setActiveFilters } = useFilters();
    const resetItem = icons.find(f => f.label === "Reset Selecion" && f.type === "fonts-google");

    if (!activeFilters.length) return null;

    /*
    console.log("Reset Button: ", activeFilters.length);
    */

    return (
        <button className="iconTextBtn filterResetButton" onClick={ () => setActiveFilters([])}>
            <span className="icon material-symbols-outlined">{resetItem.value}</span>
            {`${resetItem.label} (${activeFilters.length})`}
          </button>
    )
};

export default FilterResetButton;
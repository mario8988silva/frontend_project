import { FilterProvider } from '../app/store';
import ProjectsFilters from './ProjectsFilters';
import ProjectsResults from './ProjectsResults';
import useToggle from "../hooks/useToggle";
import FilterResetButton from './FilterResetButton';


const ProjectsMain = () => {

  const { isActive, toggle, close } = useToggle();

  return (
    <FilterProvider>
      <main id="ProjectsMain" className="ProjectsMain">

        <ul className="filtersMenuContainer">

          <li key="resetButton" className="filtersItem resetButton">
            <FilterResetButton />
          </li>

          <li>
            <button onClick={toggle} className="iconTextBtn filtersToggle">

              <span
                className="icon material-symbols-outlined"
              >
                {isActive ? "close" : "filter_alt"}
              </span>

              <span
                className="buttonToogleLegend"
              >
                {isActive ? "Close Filters" : "Open Filters"}
              </span>

            </button>
          </li>
        </ul>

        <ProjectsFilters
          isOpen={isActive}
          toggleOpen={toggle}
          closeFilters={close}
        />
        <ProjectsResults />
      </main>
    </FilterProvider>
  );
};

export default ProjectsMain;
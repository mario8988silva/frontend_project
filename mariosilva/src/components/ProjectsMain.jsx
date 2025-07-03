import { FilterProvider } from '../app/store';
import ProjectsFilters from './ProjectsFilters';
import ProjectsResults from './ProjectsResults';
import useToggle from "../hooks/useToggle";

const ProjectsMain = () => {

  const { isActive, toggle, close } = useToggle();

  return (
    <FilterProvider>
      <main>

        <ul className="filtersMenuContainer">
          <li>
            <button onClick={toggle} className="filtersToggle">
              <span className="icon material-symbols-outlined ">{isActive ? "close" : "filter_alt"}</span>
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
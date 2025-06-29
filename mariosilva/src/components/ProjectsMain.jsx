import { FilterProvider } from '../app/store';
import ProjectsFilters from './ProjectsFilters';
import ProjectsResults from './ProjectsResults';

const ProjectsMain = () => {
  return (
    <FilterProvider>
      <main>
        <ProjectsFilters />
        <ProjectsResults />
      </main>
    </FilterProvider>
  );
};

export default ProjectsMain;
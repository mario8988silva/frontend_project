import { filterProjectByCourse } from "../utils/filters";
import ProjectCard from "./ProjectCard";

const CourseArticle = ({ course, projects }) => {

    const { id, cPeriod, cSchool, cCourse, cHours } = course;

    /* lógica para inserir projectos nos devidos cursos */
    const courseProjects = filterProjectByCourse (projects, cCourse);

    return (
        <article key={id} className="projectsSchools">

            <div className="timeline"></div>

            <header className="iconTextBtn schoolContainer">
                <span className="timelineDot"></span>

                <h2>
                    <span id="schoolPeriod">{cPeriod}</span>
                    <span> · </span>
                    <span id="schoolName">{cSchool}</span>
                    <span> · </span>
                    <span id="schoolCourse">{cCourse}</span>
                    <span id="courseHours"> ({cHours}h)</span>
                </h2>
            </header>

            <nav className="projectCardContainer">
                <ProjectCard projects={courseProjects} />
            </nav>
        </article>
    );
};

export default CourseArticle;
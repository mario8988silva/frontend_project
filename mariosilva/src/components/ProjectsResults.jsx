import React from "react";
import courses from "../data/courses.json";

console.log(courses);

const ProjectsResults = () => {
    
    return (
        <section className="results">
            {courses.map(({ id, period, school, course, hours }) => (
            <article key={id} className="projectsSchools">

                <div className="timeline"></div>

                <header className="iconTextBtn schoolContainer">
                    <span className="timelineDot"></span>
                    <h2>
                        <span id="schoolPeriod">{period}</span>
                        <span> · </span>
                        <span id="schoolName">{school}</span>
                        <span> · </span>
                        <span id="schoolCourse">{course}</span>
                        <span id="courseHours"> ({hours}h)</span>
                    </h2>
                </header>

                <nav className="projectCardContainer">
{/*
                    <article href="" class="projectCard">
                        <figure class="pMainImage"></figure>
                        <h4 class="pName">pName</h4>
                        <p class="pDescription close">Lorem ipsum dolor sit amet consectetur. Nibh amet tristique purus enim eleifend risus etiam fermentum dictum. Aliquam felis feugiat lacus commodo eget aliquet.</p>
                        <a href="" class="pInnerLink close">pInnerLink</a>
                        <div class="pTools close">
                            <span class="material-symbols-outlined">person</span>
                            <span class="material-symbols-outlined">person</span>
                        </div>
                        <div class="pFilters close">
                            <span class="material-symbols-outlined">person</span>
                            <span class="material-symbols-outlined">person</span>
                        </div>
                    </article>

                    <article href="" class="projectCard">
                        <figure class="pMainImage"></figure>
                        <h4 class="pName">pName</h4>
                        <p class="pDescription">Lorem ipsum dolor sit amet consectetur. Nibh amet tristique purus enim eleifend risus etiam fermentum dictum. Aliquam felis feugiat lacus commodo eget aliquet.</p>
                        <a href="" class="pInnerLink">pInnerLink</a>
                        <div class="pTools">
                            <span class="material-symbols-outlined">person</span>
                            <span class="material-symbols-outlined">person</span>
                        </div>
                        <div class="pFilters">
                            <span class="material-symbols-outlined">person</span>
                            <span class="material-symbols-outlined">person</span>
                        </div>
                    </article>
                    */}

                    
                </nav>
            </article>
            ))}

        </section>
    )
}

export default ProjectsResults;
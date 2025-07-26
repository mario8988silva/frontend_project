import React from "react";
import DownloadButton from "./DownloadButton";

const Values = () => {
    return (
        <section id="valuesAndMethods" className="valuesAndMethods">
            <article>
                <p>My process usually begins by understanding the core idea or challenge of a project.</p>
                <p>From there, I break it down into key stages:
                research, structure, design, content, development, and testing.</p>
                <p>To stay focused and flexible, I organize and prioritize tasks using a hybrid approach — combining Scrum principles with the Eisenhower Matrix.</p>
                <p>I work in tight feedback loops, regularly presenting progress to clients or stakeholders to ensure alignment throughout. Each round informs the next — whether that means refining wireframes, adjusting layouts, or rethinking functionality.</p>
                <p>This loop continues until we reach a polished, functional result — or until the deadline calls for delivery.</p>

                <DownloadButton
                href="public/docs/curriculum_a4_v6-eng_dig.pdf"
                label="Download Resume"
                icon={{
                    type: "fonts-google",
                    value: "download",
                    label: "download icon", 
                }}
                />

            </article>
        </section>
    )
}

export default Values;
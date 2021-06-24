import { Fragment } from "react";

import { useInvestigator } from "@/data/hooks";
import type { Project } from "@/types";

interface ProjectCardProps {
    project: Project;
}

export default function ProjectCard(props: ProjectCardProps) {
    const { project } = props;

    const PI = useInvestigator(project.PI_id);

    return (
        <div>
            <h3>Project</h3>

            <h4>Created: {new Date(project.created)}</h4>

            <h4>Name: {project.name}</h4>

            <h4>Description:</h4>
            <p>{project.description}</p>

            <h4>
                Specialties:{" "}
                {project.specialties.length
                    ? project.specialties.join(", ")
                    : "none listed"}
            </h4>

            <h4>PI</h4>
            {!PI ? (
                <h5>Loading...</h5>
            ) : (
                <Fragment>
                    <h5>Name: {PI.name}</h5>
                    <h5>Email: {PI.email}</h5>
                    <h5>
                        Specialties:{" "}
                        {PI.specialties.length
                            ? PI.specialties.join(", ")
                            : "none listed"}
                    </h5>
                </Fragment>
            )}

            <h4>Contact info</h4>
            <h5>Name: {project.contact.name}</h5>
            <h5>Email: {project.contact.email}</h5>

            <h4>Commitment</h4>
            <h5>Number of weeks: {project.commitment.weeks}</h5>
            <h5>Hours per week: {project.commitment.hoursPerWeek}</h5>
        </div>
    );
}

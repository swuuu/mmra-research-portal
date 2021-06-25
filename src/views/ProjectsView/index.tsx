import ProjectCard from "@/components/ProjectCard";
import type { Project } from "@/types";

export interface ProjectsViewProps {
    projects: Project[];
}

export default function ProjectsView(props: ProjectsViewProps) {
    const { projects } = props;

    return (
        <div>
            <h2>Projects</h2>

            {projects.map((project, i) => (
                <ProjectCard key={i} project={project} />
            ))}
        </div>
    );
}

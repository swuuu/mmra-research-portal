import type { GetStaticProps } from "next";

import { fetchProjectIDs } from "@/data/backend";
import { useProjects } from "@/data/hooks";
import ProjectsView from "@/views/ProjectsView";

export const getStaticProps: GetStaticProps = async () => {
    const projectIDs = await fetchProjectIDs();

    return { props: { projectIDs } };
};

export default function ProjectsPage(props: any) {
    const projects = useProjects(props.projectIDs);

    return (
        <div>
            <h1>MMRA Research Portal</h1>

            <ProjectsView projects={projects.filter((x) => x).map((x) => x!)} />
        </div>
    );
}

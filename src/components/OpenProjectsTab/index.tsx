import type { Project } from "@/types";

// components
import SearchBar from "../SearchBar";
import ProjectDeck from "../ProjectDeck";

interface ProjectCardProps {
	projects: Project[];
}

export default function OpenProjectsTab(props: ProjectCardProps) {
    const { projects } = props;

    return (
        <>
            <SearchBar/>
            <ProjectDeck projects={projects}/>
        </>
    )
    

}
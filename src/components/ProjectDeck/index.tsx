import type { Project } from "@/types";
import { v4 as uuidv4 } from 'uuid';

// components
import CardDeck from "react-bootstrap/CardDeck";
import ProjectCard from "../ProjectCard";

interface ProjectDeckProps {
	projects: Project[];
}

function createRows(projects: Project[]): Project[][] {
	let rows: Project[][] = [];
	for (let i = 0; i < projects.length; i = i+ 3) {
		let row = [];
		for (let j = 0; j < 3; j++) {
			if (i + j > projects.length) {
                row.push(projects[i + j]);
				rows.push(row);
				console.log(rows);
                return rows;
            }
			row.push(projects[i + j]);
		}
		rows.push(row);
	}
	return rows;
}

export default function ProjectDeck(props: ProjectDeckProps) {
	const { projects } = props;
	let rows = createRows(projects);
	return (
		<div className="tabs-body-container">
			{rows.map(row => (
				<CardDeck key={uuidv4()}>
                    {<ProjectCard project={row[0]}/>}
                    {row[1] === undefined ? null : <ProjectCard project={row[1]}/>}
                    {row[2] === undefined ? null : <ProjectCard project={row[2]}/>}
                </CardDeck>
			))}
		</div>
	);
}

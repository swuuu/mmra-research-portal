import type { GetStaticProps } from "next";

import { fetchProjectIDs } from "@/data/backend";
import { useProjects } from "@/data/hooks";

// react components
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";

// custom components
import Navbar from "../components/Navbar";
import OpenProjectsTab from "../components/OpenProjectsTab";

export const getStaticProps: GetStaticProps = async () => {
	const projectIDs = await fetchProjectIDs();

	return { props: { projectIDs } };
};

// temporary
import { specialties } from "@/types";

export default function ProjectsPage(props: any) {
	const projects = useProjects(props.projectIDs);

	return (
		<div>
			<Navbar />
			<Tabs>
				<Tab eventKey="Open Projects" title="Open Projects">
					<OpenProjectsTab projects={props}/>
				</Tab>
				<Tab eventKey="Closed Projects" title="Closed Projects"><div>Hello World!</div></Tab>
				<Tab
					eventKey="Principal Investigators"
					title="Principal Investigators"
				></Tab>
				<Tab
					eventKey="Sumbit Your Project"
					title="Sumbit Your Project"
				></Tab>
			</Tabs>

			{/* <ProjectsView projects={projects.filter((x) => x).map((x) => x!)} /> */}
		</div>
	);
}

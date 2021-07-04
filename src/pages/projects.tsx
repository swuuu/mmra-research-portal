import type { GetStaticProps } from "next";

import { fetchProjectIDs } from "@/data/backend";
import { useProjects } from "@/data/hooks";

// react components
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";

// custom components
import Navbar from "../components/Navbar";
import ProjectDeck from "../components/ProjectDeck";

export const getStaticProps: GetStaticProps = async () => {
	const projectIDs = await fetchProjectIDs();

	return { props: { projectIDs } };
};

// temporary
import { specialties } from "@/types";
let p1 = {
	created: "00/00/0000",
	id: "0asd12asd",
	commitment: {
		hoursPerWeek: 20,
		weeks: 7,
	},
	contact: {
		email: "abc@def.com",
		name: "Chuck Norris",
	},
	deadline: "20/2/2022",
	description:
		"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus fringilla egestas neque, nec auctor arcu.",
	otherInvestigators_ids: ["asdasd"],
	PI_id: "123123asdasd123123123",
	specialties: [specialties[0]],
	tasks: ["data analysis", "data cleaning"],
	title: "Sternal wound complications: An update",
};

let p2 = {
	created: "00/00/0000",
	id: "0asd12asd",
	commitment: {
		hoursPerWeek: 20,
		weeks: 7,
	},
	contact: {
		email: "def@abc.com",
		name: "Jane Lee",
	},
	deadline: "20/2/2022",
	description:
		"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus fringilla egestas neque, nec auctor arcu.",
	otherInvestigators_ids: ["asdasd"],
	PI_id: "123123asdasd123123123",
	specialties: [specialties[0]],
	tasks: ["data analysis", "data cleaning"],
	title: "Changes in Burn Patterns Over Time",
}

export default function ProjectsPage(props: any) {
	// const projects = useProjects(props.projectIDs);

	return (
		<div>
			<Navbar />
			<Tabs>
				<Tab eventKey="Open Projects" title="Open Projects">
					<ProjectDeck projects={[p1, p2, p1]}/>
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

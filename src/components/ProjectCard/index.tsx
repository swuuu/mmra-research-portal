import { Fragment } from "react";

import { useInvestigator } from "@/data/hooks";
import type { Project } from "@/types";

// styles
import styles from "./projectCard.module.css";

// components
import Image from "next/image";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/ListGroupItem";

// random images
import MedicationImage from "../../../public/images/medication.jpg";

interface ProjectCardProps {
	project: Project;
}

export default function ProjectCard(props: ProjectCardProps) {
	const { project } = props;

	const PI = useInvestigator(project.PI_id);

	return (
		<Card style={{ maxWidth: "400px" }}>
			{/* <Image src={MedicationImage} width={362} height={160} alt="random image"></Image> */}
			<Card.Img as={Image} src={MedicationImage}></Card.Img>
			<Card.Body>
				<Card.Title>{project.title}</Card.Title>
				<Card.Text>
					<span className={styles.cardSectionTitle}>Description</span>
					<br />
					{project.description}
				</Card.Text>
			</Card.Body>
			<ListGroup className="list-group-flush">
				<ListGroupItem>
					<span className={styles.cardSectionTitle}>Specialties</span>
					<br />
					<span className={styles.cardSectionText}>
						{project.specialties.length
							? project.specialties.join(", ")
							: "none listed"}
					</span>
				</ListGroupItem>
				<ListGroupItem>
					<span className={styles.cardSectionTitle}>
						Principal Investigator
					</span>
					<br />
					<span className={styles.cardSectionText}>
						{!PI ? (
							<h5>Loading...</h5>
						) : (
							<>
								Name: {PI.name} <br />
								Email: {PI.email} <br />
								Specialties: <br />
								{PI.specialties?.length
									? PI.specialties.join(", ")
									: "none listed"}
							</>
						)}
					</span>
				</ListGroupItem>
				<ListGroupItem>
					<span className={styles.cardSectionTitle}>
						Contact Info
					</span>
					<br />
					<span className={styles.cardSectionText}>
						Name: {project.contact.name}
					</span>
					<br />
					<span className={styles.cardSectionText}>
						Email: {project.contact.email}
					</span>
					<br />
				</ListGroupItem>
				<ListGroupItem>
					<span className={styles.cardSectionTitle}>Commitment</span>
					<br />
					<span className={styles.cardSectionText}>
						Number of weeks: {project.commitment.weeks}
					</span>
					<br />
					<span className={styles.cardSectionText}>
						Hours per week: {project.commitment.hoursPerWeek}
					</span>
					<br />
				</ListGroupItem>
			</ListGroup>
		</Card>
	);
}

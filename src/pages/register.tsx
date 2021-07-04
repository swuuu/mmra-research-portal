import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

// utilities
import { interests } from "../utils";

// components
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Navbar from "../components/Navbar";

export default function Register(props: any) {
	const [profession, setProfession] = useState("");

	return (
		<>
			<Navbar />
			<Jumbotron>
				<h5>
					Welcome to the MMRA Research Portal! Please fill in the form
					below to create your account.
				</h5>
			</Jumbotron>
			<Form>
				<Form.Group>
					<Form.Label>Email address</Form.Label>
					<Form.Control
						type="email"
						placeholder="Please enter your McGill email address"
					/>
				</Form.Group>

				<Form.Group>
					<Form.Label>Password</Form.Label>
					<Form.Control
						type="password"
						placeholder="Please enter your McGill password"
					/>
				</Form.Group>
				<hr />
				<Form.Group>
					<Form.Label>
						Please indicate your professional status
					</Form.Label>
					<Form.Control
						as="select"
						onClick={(e: any) => {
							setProfession(e.target.value);
						}}
					>
						<option value="student">Medical Student</option>
						<option value="resident">Resident</option>
						<option value="staff">Staff</option>
					</Form.Control>
				</Form.Group>

				{/*Medical Students*/}
				{profession === "student" && (
					<>
						<Form.Group>
							<Form.Label>
								Please indicate your year of study
							</Form.Label>
							<Form.Control as="select">
								<option>M1</option>
								<option>M2</option>
								<option>M3</option>
								<option>M4</option>
							</Form.Control>
						</Form.Group>
						<Form.Group>
							<Form.Label>
								Please indicate your area of interest (Note that
								you can modify your choices later in the
								settings)
							</Form.Label>
							{interests.map((interest) => (
								<Form.Check
									type="checkbox"
									key={uuidv4()}
									label={interest}
								/>
							))}
						</Form.Group>
					</>
				)}

				{/*Residents*/}
				{profession === "resident" && (
					<>
						<Form.Group>
							<Form.Label>
								Please indicate your year of study
							</Form.Label>
							<Form.Control as="select">
								<option>PGY1</option>
								<option>PGY2</option>
								<option>PGY3</option>
								<option>PGY4</option>
								<option>PGY5</option>
								<option>PGY6</option>
								<option>PGY7</option>
							</Form.Control>
						</Form.Group>
						<Form.Group>
							<Form.Label>
								Please indicate your area of interest (Note that
								you can modify your choices later in the
								settings)
							</Form.Label>
							{interests.map((interest) => (
								<Form.Check
									type="checkbox"
									key={uuidv4()}
									label={interest}
								/>
							))}
						</Form.Group>
					</>
				)}

				{/*Staff*/}

				<Button variant="primary" type="submit">
					Create Profile
				</Button>
			</Form>
		</>
	);
}

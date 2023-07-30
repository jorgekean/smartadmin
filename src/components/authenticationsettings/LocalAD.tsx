import React, { useState } from "react";
import { Button, Card, Col, Form, Row } from "react-bootstrap";

interface FormState {
    ldapServer: string;
    ldapContainer: string;
}

const initialFormState: FormState = {
    ldapServer: "",
    ldapContainer: "",
};

const LocalAD: React.FC = () => {
    const [formState, setFormState] = useState<FormState>(initialFormState);

    // Handle form submission
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Process form data here
        const formDataList = Object.entries(formState).map(([key, value]) => ({
            Code: key,
            Value: value,
        }));
        console.log(formDataList);
    };

    // Generic function to handle form field changes
    const handleFieldChange = (fieldName: keyof FormState) => (
        e: React.ChangeEvent<HTMLInputElement>
    ) => {
        setFormState((prevState) => ({
            ...prevState,
            [fieldName]: e.target.value,
        }));
    };

    return (
        <Card>
            <Card.Header>
                <Card.Title className="mb-0">Local Active Directory</Card.Title>
            </Card.Header>
            <Card.Body>
                <Form onSubmit={handleSubmit}>
                    <Row>
                        <Col>
                            <Form.Group className="mb-3">
                                <Form.Label>LDAP Server</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="ldapServer"
                                    value={formState.ldapServer}
                                    onChange={handleFieldChange("ldapServer")}
                                    placeholder="LDAP Server"
                                />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>LDAP Container</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="ldapContainer"
                                    value={formState.ldapContainer}
                                    onChange={handleFieldChange("ldapContainer")}
                                    placeholder="LDAP Container"
                                />
                            </Form.Group>
                        </Col>
                    </Row>

                    <Button variant="primary" type="submit">
                        Save changes
                    </Button>
                </Form>
            </Card.Body>
        </Card>
    );
};

export default LocalAD;

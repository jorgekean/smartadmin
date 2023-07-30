import React, { useState } from "react";
import { Button, Card, Col, Form, Row } from "react-bootstrap";

interface FormState {
    clientId: string;
    tenant: string;
    authority: string;
    redirectUri: string;
}

const initialFormState: FormState = {
    clientId: "",
    tenant: "",
    authority: "",
    redirectUri: "",
};

const AzureAD: React.FC = () => {
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
                <Card.Title className="mb-0">Azure Active Directory</Card.Title>
            </Card.Header>
            <Card.Body>
                <Form onSubmit={handleSubmit}>
                    <Row>
                        <Col>
                            <Form.Group className="mb-3">
                                <Form.Label>Client Id</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="clientId"
                                    value={formState.clientId}
                                    onChange={handleFieldChange("clientId")}
                                    placeholder="Client Id"
                                />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Tenant</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="tenant"
                                    value={formState.tenant}
                                    onChange={handleFieldChange("tenant")}
                                    placeholder="Tenant"
                                />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Authority</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="authority"
                                    value={formState.authority}
                                    onChange={handleFieldChange("authority")}
                                    placeholder="Authority"
                                />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Redirect Uri</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="redirectUri"
                                    value={formState.redirectUri}
                                    onChange={handleFieldChange("redirectUri")}
                                    placeholder="Redirect Uri"
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

export default AzureAD;

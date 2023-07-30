import React, { useState } from "react";
import { Button, Card, Col, Form, Row } from "react-bootstrap";

interface FormState {
    authorizationServerId: string;
    clientId: string;
    redirectUri: string;
    clientSecret: string;
    oktaDomain: string;
    postLogoutRedirectUri: string;
}

const initialFormState: FormState = {
    authorizationServerId: "",
    clientId: "",
    redirectUri: "",
    clientSecret: "",
    oktaDomain: "",
    postLogoutRedirectUri: "",
};

const Okta: React.FC = () => {
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
                <Card.Title className="mb-0">Okta</Card.Title>
            </Card.Header>
            <Card.Body>
                <Form onSubmit={handleSubmit}>
                    <Row>
                        <Col>
                            <Form.Group className="mb-3">
                                <Form.Label>Authorization Server Id</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="authorizationServerId"
                                    value={formState.authorizationServerId}
                                    onChange={handleFieldChange("authorizationServerId")}
                                    placeholder="Authorization Server Id"
                                />
                            </Form.Group>
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
                                <Form.Label>Redirect Uri</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="redirectUri"
                                    value={formState.redirectUri}
                                    onChange={handleFieldChange("redirectUri")}
                                    placeholder="Redirect Uri"
                                />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Client Secret</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="clientSecret"
                                    value={formState.clientSecret}
                                    onChange={handleFieldChange("clientSecret")}
                                    placeholder="Client Secret"
                                />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Okta Domain</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="oktaDomain"
                                    value={formState.oktaDomain}
                                    onChange={handleFieldChange("oktaDomain")}
                                    placeholder="Okta Domain"
                                />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Post Logout Redirect Uri</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="postLogoutRedirectUri"
                                    value={formState.postLogoutRedirectUri}
                                    onChange={handleFieldChange("postLogoutRedirectUri")}
                                    placeholder="Post Logout Redirect Uri"
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

export default Okta;

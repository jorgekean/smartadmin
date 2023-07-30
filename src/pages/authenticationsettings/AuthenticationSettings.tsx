import React from "react";
import { Container } from "react-bootstrap";
import { Helmet } from "react-helmet-async";
import AuthenticationSettings from "../../components/authenticationsettings/AuthenticationSettings"

const AuthenticationSettingsPage = () => (
    <React.Fragment>
        <Helmet title="Authentication Settings" />
        <Container fluid className="p-0">
            <h1 className="h3 mb-3">Authentication</h1>
            <AuthenticationSettings />
        </Container>
    </React.Fragment>
);

export default AuthenticationSettingsPage;
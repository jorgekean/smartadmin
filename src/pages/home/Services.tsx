import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Badge, Col, Card, Row, Container } from "react-bootstrap";

// import { DollarSign, ShoppingBag, Shield } from "react-feather";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShieldHalved, faUserShield, faUserGear, faUsers } from "@fortawesome/free-solid-svg-icons";
import useTheme from "../../hooks/useTheme";
import { THEME } from "../../constants";

import "./Services.css"
import Tabs from "./Tabs";

// import illustration from "../../../assets/img/illustrations/customer-support.png";

const Services = () => {
    const { t } = useTranslation();
    const { theme } = useTheme();

    return (
        <section className="landing-intro pb-5 pb-lg-7">
            <Container className="">
                <Row className="align-items-center">
                    <Col md="6" xl className="d-flex">
                        <Card className={`flex-fill card-service ${theme === THEME.DARK && 'card-dark'}`}>
                            <Card.Body className=" py-4">
                                <div className="d-flex align-items-start">
                                    <div className="flex-grow-1">
                                        <h3 className="mb-2">Admin Access</h3>
                                        <p className="mb-2">Request temporary admin access.</p>
                                        {/* <div className="mb-0">
                                            <Badge bg="" className="badge-soft-success me-2">
                                                +5.35%
                                            </Badge>
                                            <span className="text-muted">Since last week</span>
                                        </div> */}
                                    </div>
                                    <div className="d-inline-block ms-3">
                                        <div className="stat">
                                            <FontAwesomeIcon icon={faShieldHalved} />
                                        </div>
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md="6" xl className="d-flex">
                        <Card className={`flex-fill card-service ${theme === THEME.DARK && 'card-dark'}`}>
                            <Card.Body className=" py-4">
                                <div className="d-flex align-items-start">
                                    <div className="flex-grow-1">
                                        <h3 className="mb-2">My Access</h3>
                                        <p className="mb-2">View your current entitlements.</p>
                                        {/* <div className="mb-0">
                                            <Badge bg="" className="badge-soft-success me-2">
                                                +5.35%
                                            </Badge>
                                            <span className="text-muted">Since last week</span>
                                        </div> */}
                                    </div>
                                    <div className="d-inline-block ms-3">
                                        <div className="stat">
                                            <FontAwesomeIcon icon={faUserShield} />
                                        </div>
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md="6" xl className="d-flex">
                        <Card className={`flex-fill card-service ${theme === THEME.DARK && 'card-dark'}`}>
                            <Card.Body className=" py-4">
                                <div className="d-flex align-items-start">
                                    <div className="flex-grow-1">
                                        <h3 className="mb-2">Service Account</h3>
                                        <p className="mb-2">Request new service account.</p>
                                        {/* <div className="mb-0">
                                            <Badge bg="" className="badge-soft-danger me-2">
                                                -4.25%
                                            </Badge>
                                            <span className="text-muted">Since last week</span>
                                        </div> */}
                                    </div>
                                    <div className="d-inline-block ms-3">
                                        <div className="stat">
                                            <FontAwesomeIcon icon={faUserGear} />
                                        </div>
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md="6" xl className="d-flex">
                        <Card className={`flex-fill card-service ${theme === THEME.DARK && 'card-dark'}`}>
                            <Card.Body className=" py-4">
                                <div className="d-flex align-items-start">
                                    <div className="flex-grow-1">
                                        <h3 className="mb-2">Active Directory Group</h3>
                                        <p className="mb-2">Request new AD Group.</p>
                                        {/* <div className="mb-0">
                                            <Badge bg="" className="badge-soft-success me-2">
                                                +8.65%
                                            </Badge>
                                            <span className="text-muted">Since last week</span>
                                        </div> */}
                                    </div>
                                    <div className="d-inline-block ms-3">
                                        <div className="stat">
                                            <FontAwesomeIcon icon={faUsers} />
                                        </div>
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                {/* <Row>
                    <Tabs></Tabs>
                </Row> */}
            </Container>
        </section>
    );
};

export default Services;

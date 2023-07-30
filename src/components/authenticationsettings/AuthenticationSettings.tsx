import { faShieldHalved } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { Badge, Card, Col, Container, ListGroup, Row } from 'react-bootstrap';
import { Helmet } from 'react-helmet-async';
import Okta from './Okta';
import AzureAD from './AzureAD';
import LocalAD from './LocalAD';
import axios from 'axios';

interface NavigationItem {
    id: number;
    title: string;
    href: string;
    content: JSX.Element;
}

const AuthenticationSettings: React.FC = () => {
    const [selectedItemId, setSelectedItemId] = useState<number>(1);

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get("/api/settings");// , { params: { environment: "DEFAULT", type: "authOkta" } }
            const { settings } = response.data;

            console.log(settings)
        };
        fetchData();
    }, [])

    const navigationItems: NavigationItem[] = [
        {
            id: 1,
            title: 'Okta',
            href: '#',
            content: <Okta />
        },
        {
            id: 2,
            title: 'Azure AD',
            href: '#',
            content: <AzureAD />
        },
        {
            id: 3,
            title: 'Local AD',
            href: '#',
            content: <LocalAD />
        }
    ];

    const handleItemClick = (itemId: number) => {
        setSelectedItemId(itemId);
    };

    return (
        <Row>
            <Col md="3" xl="2">
                <Card>
                    <Card.Header>
                        <Card.Title className="mb-0"><FontAwesomeIcon icon={faShieldHalved} /> Settings</Card.Title>
                    </Card.Header>
                    <ListGroup variant="flush">
                        {navigationItems.map((item) => (
                            <ListGroup.Item
                                key={item.id}
                                href={item.href}
                                action
                                active={item.id === selectedItemId}
                                onClick={() => handleItemClick(item.id)}
                            >
                                {item.title}
                            </ListGroup.Item>
                        ))}
                    </ListGroup>
                </Card>
            </Col>
            <Col md="9" xl="10">
                {navigationItems.find((item) => item.id === selectedItemId)?.content}
            </Col>
        </Row>
    );
};

export default AuthenticationSettings;

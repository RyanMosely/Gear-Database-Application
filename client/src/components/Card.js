import React from 'react';
import PlaceholderImg from '../placeholder-img.jpg';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function InfoCard() {
    return (
        <Card id="card" style={{ width: '18rem' }}>
            <Card.Img variant="top" src={PlaceholderImg} />
            <br />
            <Button variant="primary">Primary</Button>{' '}
        </Card>
    )
}

export default InfoCard;
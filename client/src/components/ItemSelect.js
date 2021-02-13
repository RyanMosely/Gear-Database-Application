import React from 'react';
import PlaceholderImg from '../placeholder-img.jpg';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function ItemSelectCard() {
    return (
        <Card id="card" style={{ width: '18rem' }}>
            <Card.Img variant="top" src={PlaceholderImg} />
            <br />
            <Card.Body>
                <Card.Title>Title</Card.Title>
                <Card.Text>
                lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                </Card.Text>
            <br />
            <Button variant="primary">Add to Cart</Button>
        </Card.Body>
            
        </Card>
    )
}

export default ItemSelectCard;
import React, { useState } from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import UserImg from '../../user.png';
import InfoCard from '../../components/InfoCard';
import { Form, Button } from 'react-bootstrap';
import './index.scss';
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3001/'
})

const Register = () => {

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [addressLine1, setAddressLine1] = useState("");
  const [addressLine2, setAddressLine2] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [occupation, setOccupation] = useState("");

  const registerUser = async () => {
    let res = await api.post('/register', {
      firstname: firstName,
      lastname: lastName,
      email: email,
      phonenumber: phoneNumber,
      addressline1: addressLine1,
      addressline2: addressLine2,
      city: city,
      country: country,
      state: state,
      zipcode: zipCode,
      occupation: occupation
    })
    console.log(res);
  }

  // Rewrite this Code Block
  // const login = () => {
  //   Axios({
  //     method: "POST",
  //     data: {
  //       first_name: FirstName
  //     },
  //     withCredentials: true,
  //     url: "http://localhost:3001/login",
  //   }).then((res) => console.log(res));
  // }

  return (
    <Container id="profile">
      <div className="sign-up-container">
        <Form>
          <Row>
            <Col>
              <Form.Group controlId="formFirstName">
                <Form.Label>First Name</Form.Label>
                <Form.Control type="text" value={firstName} onChange={e => setFirstName(e.target.value)}  placeholder="Enter First Name" />
                  <Form.Text className="text-muted">
                  </Form.Text>
              </Form.Group>
              <Form.Group controlId="formLastName">
                <Form.Label>Last Name</Form.Label>
                <Form.Control type="text" value={lastName} onChange={e => setLastName(e.target.value)} placeholder="Enter Last Name" />
                  <Form.Text className="text-muted">
                  </Form.Text>
              </Form.Group>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Enter email" />
                  <Form.Text className="text-muted">
                  </Form.Text>
              </Form.Group>
              <Form.Group controlId="formPhoneNumber">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control type="text" value={phoneNumber} onChange={e => setPhoneNumber(e.target.value)} placeholder="Enter Phone Number" />
                  <Form.Text className="text-muted">
                  </Form.Text>
              </Form.Group>
              <Form.Group controlId="AddressLineOne">
                <Form.Label>Address Line 1</Form.Label>
                <Form.Control type="text" value={addressLine1} onChange={e => setAddressLine1(e.target.value)} placeholder="Enter Address" />
                  <Form.Text className="text-muted">
                  </Form.Text>
              </Form.Group>
              <Form.Group controlId="AddressLineTwo">
                <Form.Label>Address Line 2</Form.Label>
                <Form.Control type="text" value={addressLine2} onChange={e => setAddressLine2(e.target.value)} placeholder="Enter Address 2 (Apartment, suite, etc.)" />
                  <Form.Text className="text-muted">
                  </Form.Text>
              </Form.Group>
              </Col>
              <Col>
              <Form.Group controlId="City">
                <Form.Label>City</Form.Label>
                <Form.Control type="text" value={city} onChange={e => setCity(e.target.value)} placeholder="Enter City" />
                  <Form.Text className="text-muted">
                  </Form.Text>
              </Form.Group>
              <Form.Group controlId="Country">
                <Form.Label>Country</Form.Label>
                <Form.Control type="text" value={country} onChange={e => setCountry(e.target.value)} placeholder="Enter Country" />
                  <Form.Text className="text-muted">
                  </Form.Text>
              </Form.Group>
              <Form.Group controlId="State">
                <Form.Label>State</Form.Label>
                <Form.Control type="text" value={state} onChange={e => setState(e.target.value)} placeholder="Enter State" />
                  <Form.Text className="text-muted">
                  </Form.Text>
              </Form.Group>
              <Form.Group controlId="ZipCode">
                <Form.Label>Zip Code</Form.Label>
                <Form.Control type="text" value={zipCode} onChange={e => setZipCode(e.target.value)} placeholder="Enter Zip Code" />
                  <Form.Text className="text-muted">
                  </Form.Text>
              </Form.Group>
              <Form.Group controlId="Occupation">
                <Form.Label>Occupation</Form.Label>
                <Form.Control type="text" value={occupation} onChange={e => setOccupation(e.target.value)} placeholder="Enter Occupation" />
                  <Form.Text className="text-muted">
                  </Form.Text>
              </Form.Group>
              <Form.Group controlId="formBasicPassword">
                <Form.Label>
                  Password
                </Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              <Form.Group controlId="formBasicPassword">
                <Form.Label>
                  Re-enter Password
                </Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              <Form.Group controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check if Owner Op" />
              </Form.Group>
              <Button onClick={ () => registerUser() } variant="primary" type="submit">
                Submit
              </Button>
            </Col>
          </Row>
        </Form>
      </div>
    </Container>
  )
}

export default Register;
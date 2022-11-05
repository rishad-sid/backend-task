import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



function Signin() {
    return (
        <Container>
            <Row className="p-5">
                <Col className="p-5">
                    <div className="p-5">
                        <h3>Signin</h3>
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" />
                            </Form.Group>

                            <div className="d-flex">
                                <div className="p-2 ps-0">
                                    <Button variant="primary" type="submit">
                                        Signin
                                    </Button>
                                </div>
                                <div className="p-2">
                                    <p className="p-2">Don't have an account? <a href="/register" style={{ textDecoration: 'none' }}>Register</a> instead!</p>
                                </div>
                            </div>
                        </Form>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default Signin;
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import BasicDatePicker from '../../components/date-time-picker/datePicker';
import BasicTimePicker from '../../components/date-time-picker/timePicker';



function Appointment() {
    return (
        <Container>
            <Row className="p-5 pt-3">
                <Col className="p-5 pt-3">
                    <div className="p-5 pt-3">
                        <h3>Make an appointment</h3>
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicGender">
                                <Form.Label className="fw-semibold">Gender</Form.Label>
                                <Form.Select aria-label="Gender">
                                    <option value="1">Male</option>
                                    <option value="2">Female</option>
                                </Form.Select>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicAge">
                                <Form.Label className="fw-semibold">Age</Form.Label>
                                <Form.Control type="text" placeholder="Enter your age" />
                            </Form.Group>

                            <div className="d-flex">
                                <div className="ps-0 p-2"><BasicDatePicker /></div>
                                <div className="p-2"><BasicTimePicker /></div>
                            </div>

                            <Button variant="primary" type="submit">
                                Confirm
                            </Button>
                        </Form>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default Appointment;
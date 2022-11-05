import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import Table from 'react-bootstrap/Table';
import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function Profile() {
    return (
        <Container>
            <Row className="p-5 pt-3">
                <Col className="p-5 pt-3">
                    <div className="p-5 pt-3">
                        <h3 className="pb-3">User Profile</h3>
                        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                            <Row>
                                <Col sm={3}>
                                    <Nav variant="pills" className="flex-column">
                                        <Nav.Item>
                                            <Nav.Link className="fw-semibold text-dark" eventKey="first">Profile</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link className="fw-semibold text-dark" eventKey="second">Appointments</Nav.Link>
                                        </Nav.Item>
                                    </Nav>
                                </Col>
                                <Col sm={9}>
                                    <Tab.Content>
                                        <Tab.Pane eventKey="first">
                                            <Table striped bordered hover>
                                                <tbody>
                                                    <tr>
                                                        <td className="fw-semibold">Name</td>
                                                        <td>Mark Otto</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="fw-semibold">Email</td>
                                                        <td>otto@notmail.com</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="fw-semibold">Gender</td>
                                                        <td>Male</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="fw-semibold">Age</td>
                                                        <td>30</td>
                                                    </tr>
                                                </tbody>
                                            </Table>

                                        </Tab.Pane>
                                        <Tab.Pane eventKey="second">
                                            <Table striped bordered hover size="sm">
                                                <thead>
                                                    <tr>
                                                        <th>Id</th>
                                                        <th>Date</th>
                                                        <th>Time</th>
                                                        <th>Edit</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>1</td>
                                                        <td>22nd November</td>
                                                        <td>12 AM</td>
                                                        <th>
                                                            <div className="d-flex">
                                                                <div className="p-1"><FontAwesomeIcon className="text-muted" icon={faPenToSquare} /></div>
                                                                <div className="p-1"><FontAwesomeIcon className="text-muted" icon={faTrash} /></div>
                                                            </div>
                                                        </th>
                                                    </tr>
                                                    <tr>
                                                        <td>2</td>
                                                        <td>22nd November</td>
                                                        <td>12 AM</td>
                                                        <th>
                                                            <div className="d-flex">
                                                                <div className="p-1"><FontAwesomeIcon className="text-muted" icon={faPenToSquare} /></div>
                                                                <div className="p-1"><FontAwesomeIcon className="text-muted" icon={faTrash} /></div>
                                                            </div>
                                                        </th>
                                                    </tr>
                                                    <tr>
                                                        <td>3</td>
                                                        <td>22nd November</td>
                                                        <td>12 AM</td>
                                                        <th>
                                                            <div className="d-flex">
                                                                <div className="p-1"><FontAwesomeIcon className="text-muted" icon={faPenToSquare} /></div>
                                                                <div className="p-1"><FontAwesomeIcon className="text-muted" icon={faTrash} /></div>
                                                            </div>
                                                        </th>
                                                    </tr>
                                                </tbody>
                                            </Table>
                                        </Tab.Pane>
                                    </Tab.Content>
                                </Col>
                            </Row>
                        </Tab.Container>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default Profile;
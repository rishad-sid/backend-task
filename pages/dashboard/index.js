import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';
import { faArrowDown, faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Pagination from 'react-bootstrap/Pagination';



function Dashboard() {
    return (
        <Container>
            <Row className="p-5 pt-3">
                <Col className="p-5 pt-3">
                    <div>
                        <h3 className="pb-3">Admin dashboard</h3>
                        <Table striped bordered hover size="sm">
                            <thead>
                                <tr>
                                    <th>Id</th>
                                    <th>First Name</th>
                                    <th>Last Name</th>
                                    <th>Gender</th>
                                    <th>Age</th>
                                    <th>Date</th>
                                    <th>Time</th>
                                    <th>Edit</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td>Male</td>
                                    <td>24</td>
                                    <td>22nd November</td>
                                    <td>12 AM</td>
                                    <th>
                                        <div className="d-flex">
                                            <div className="p-1"><FontAwesomeIcon className="text-muted" icon={faPenToSquare} /></div>
                                            <div className="p-1"><FontAwesomeIcon className="text-muted" icon={faTrash} /></div>
                                            <div className="p-1"><FontAwesomeIcon className="text-muted" icon={faArrowDown} /></div>
                                        </div>
                                    </th>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>Jacob</td>
                                    <td>Thornton</td>
                                    <td>Male</td>
                                    <td>24</td>
                                    <td>22nd November</td>
                                    <td>12 AM</td>
                                    <th>
                                        <div className="d-flex">
                                            <div className="p-1"><FontAwesomeIcon className="text-muted" icon={faPenToSquare} /></div>
                                            <div className="p-1"><FontAwesomeIcon className="text-muted" icon={faTrash} /></div>
                                            <div className="p-1"><FontAwesomeIcon className="text-muted" icon={faArrowDown} /></div>
                                        </div>
                                    </th>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td>Anna</td>
                                    <td>Maria</td>
                                    <td>Female</td>
                                    <td>24</td>
                                    <td>22nd November</td>
                                    <td>12 AM</td>
                                    <th>
                                        <div className="d-flex">
                                            <div className="p-1"><FontAwesomeIcon className="text-muted" icon={faPenToSquare} /></div>
                                            <div className="p-1"><FontAwesomeIcon className="text-muted" icon={faTrash} /></div>
                                            <div className="p-1"><FontAwesomeIcon className="text-muted" icon={faArrowDown} /></div>
                                        </div>
                                    </th>
                                </tr>
                            </tbody>
                        </Table>
                        <Pagination>
                            <Pagination.First />
                            <Pagination.Prev />
                            <Pagination.Item active>{1}</Pagination.Item>
                            <Pagination.Ellipsis />

                            <Pagination.Item>{10}</Pagination.Item>
                            <Pagination.Item>{11}</Pagination.Item>
                            <Pagination.Item>{12}</Pagination.Item>
                            <Pagination.Item>{13}</Pagination.Item>
                            <Pagination.Item>{14}</Pagination.Item>

                            <Pagination.Ellipsis />
                            <Pagination.Item>{20}</Pagination.Item>
                            <Pagination.Next />
                            <Pagination.Last />
                        </Pagination>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default Dashboard;
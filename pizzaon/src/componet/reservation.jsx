// import Container from 'react-bootstrap/esm/Container';
// import './reservation.css';
// import Row from 'react-bootstrap/esm/Row';
// import Button from 'react-bootstrap/Button';
// const Reservation = () => {
//     return (
//         <>
//             <section className='reservation-section  py-5'>
//                 <Container>
//                     <Row>
//                         <div className="col-6">
//                             <div className="book-reservation-img">
//                                 <img src="src/img/book-img.jpg" alt="" />
//                             </div>
//                         </div>
//                         <div className="col-6 px-4">
//                             <div className="book-reservation-content">
//                                 <h3>Reservation ________</h3>
//                                 <h1>Book A Table Now!</h1>
//                             </div>

//                             <div className="reservation-form d-flex">
//                                 <div className="col-6 me-4">
//                                     <input type="text" className='reservation-name' placeholder='Name*' />
//                                 </div>
//                                 <div className="col-6">
//                                     <input type="text" className='reservation-name' placeholder='Email*' />
//                                 </div>
//                             </div>

//                             <div className="reservation-form d-flex my-5">
//                                 <div className="col-6 me-4">
//                                     <input type="text" className='reservation-name' placeholder='phone*' />
//                                 </div>
//                                 <div className="col-6">
//                                     <input type="text" className='reservation-name' placeholder='Time*' />
//                                 </div>
//                             </div>

//                             <div className="reservation-form d-flex">
//                                 <div className="col-6 me-4">
//                                     <input type="text" className='reservation-name' placeholder='Date*' />
//                                 </div>
//                                 <div className="col-6">
//                                     <input type="text" className='reservation-name' placeholder='Guest*' />
//                                 </div>

//                             </div>
//                             <div className="reservation-form d-flex pt-5">
//                                 <Button className='btn btn-warning'>Book Now</Button>
//                             </div>
//                         </div>


//                     </Row>
//                 </Container>

//             </section>
//         </>
//     )
// };

// export default Reservation; 
import Container from 'react-bootstrap/Container';
import './reservation.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

const Reservation = () => {
    return (
        <section className='reservation-section py-5'>
            <Container>
                <Row>
                    {/* Image column */}
                    <Col lg={6} xs={12} className="mb-4 mb-lg-0">
                        <div className="book-reservation-img">
                            <img src="src/img/book-img.jpg" alt="reservation" className="img-fluid" />
                        </div>
                    </Col>

                    {/* Form column */}
                    <Col lg={6} xs={12} className="px-4">
                        <div className="book-reservation-content">
                            <h3>Reservation ________</h3>
                            <h1>Book A Table Now!</h1>
                        </div>

                        {/* Row 1 */}
                        <Row className="my-3">
                            <Col md={6} xs={12} className="mb-3 mb-md-0">
                                <input type="text" className='reservation-name' placeholder='Name*' />
                            </Col>
                            <Col md={6} xs={12}>
                                <input type="text" className='reservation-name' placeholder='Email*' />
                            </Col>
                        </Row>

                        {/* Row 2 */}
                        <Row className="my-3">
                            <Col md={6} xs={12} className="mb-3 mb-md-0">
                                <input type="text" className='reservation-name' placeholder='Phone*' />
                            </Col>
                            <Col md={6} xs={12}>
                                <input type="text" className='reservation-name' placeholder='Time*' />
                            </Col>
                        </Row>

                        {/* Row 3 */}
                        <Row className="my-3">
                            <Col md={6} xs={12} className="mb-3 mb-md-0">
                                <input type="text" className='reservation-name' placeholder='Date*' />
                            </Col>
                            <Col md={6} xs={12}>
                                <input type="text" className='reservation-name' placeholder='Guest*' />
                            </Col>
                        </Row>

                        {/* Button */}
                        <Row className="pt-4">
                            <Col>
                                <Button className='btn btn-warning'>Book Now</Button>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </section>
    )
};

export default Reservation;

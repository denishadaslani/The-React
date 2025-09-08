import Container from 'react-bootstrap/esm/Container';
import './reservation.css';
import Row from 'react-bootstrap/esm/Row';
import Button from 'react-bootstrap/Button';
const Reservation = () => {
    return (
        <>
            <section className='reservation-section  py-5'>
                <Container>
                    <Row>
                        <div className="col-6">
                            <div className="book-reservation-img">
                                <img src="src/img/book-img.jpg" alt="" />
                            </div>
                        </div>
                        <div className="col-6 px-4">
                            <div className="book-reservation-content">
                                <h3>Reservation ________</h3>
                                <h1>Book A Table Now!</h1>
                            </div>

                            <div className="reservation-form d-flex">
                                <div className="col-6 me-4">
                                    <input type="text" className='reservation-name' placeholder='Name*' />
                                </div>
                                <div className="col-6">
                                    <input type="text" className='reservation-name' placeholder='Email*' />
                                </div>
                            </div>

                            <div className="reservation-form d-flex my-5">
                                <div className="col-6 me-4">
                                    <input type="text" className='reservation-name' placeholder='phone*' />
                                </div>
                                <div className="col-6">
                                    <input type="text" className='reservation-name' placeholder='Time*' />
                                </div>
                            </div>

                            <div className="reservation-form d-flex">
                                <div className="col-6 me-4">
                                    <input type="text" className='reservation-name' placeholder='Date*' />
                                </div>
                                <div className="col-6">
                                    <input type="text" className='reservation-name' placeholder='Guest*' />
                                </div>

                            </div>
                            <div className="reservation-form d-flex pt-5">
                                <Button className='btn btn-warning'>Book Now</Button>
                            </div>
                        </div>


                    </Row>
                </Container>

            </section>
        </>
    )
};

export default Reservation;
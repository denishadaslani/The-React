// import './booknowreserve.css'
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';

// const Bookreserve = () => {
//     return (
//         <>
//             <section className='bookreserve-section'>
//                 <Container>
//                     <Row>
//                         <div className="col-6 p-0">
//                             <div className="bookreserve-content">
//                                 <h3>Reserve Your Seat ________</h3>
//                                 <h2 >Call Us Or Visit Place</h2>
//                                 <p>Lorem ipsum dolor sit amet,colur consectetur omni adipisicing elit, sed do eiusmod tempor incididunt labore et magna aliqua.</p>
//                             </div>
//                             <Row>

//                                 <div className="col-6 reserve-address">
//                                     <h4>Torre Annunziata</h4>
//                                     <p className='mt-3 mx-3' >
//                                         1614 E. Bell Rd #104.
//                                         Salerno, AZ 85022
//                                         (989) 867-1010
//                                         Open today 11AM-10PM0
//                                     </p>
//                                 </div>
//                                 <div className="col-6 reserve-address">
//                                     <h4>Posillipo</h4>
//                                     <p className='mt-3 mx-3'>204 E. Pizzetta Tommaso
//                                         Sorrento, AZ 85022
//                                         (989) 867-1010
//                                         Open today 11AM-10PM0</p>
//                                 </div>
//                                 <div className="col-6 reserve-address ">
//                                     <h4>Torre del Greco</h4>
//                                     <p className='mt-3 mx-3'>
//                                         Vale Puglia 54
//                                         Torre Del Greco AZ 85022
//                                         (989) 867-1010
//                                         Open today 11AM-10PM0
//                                     </p>
//                                 </div>
//                                 <div className="col-6 reserve-address">
//                                     <h4>Naples Mercato</h4>
//                                     <p className='mt-3 mx-3'>Corso Itali AA
//                                         Naples, AZ 85022
//                                         (989) 867-1010
//                                         Open today 11AM-10PM0</p>
//                                 </div>


//                             </Row>

//                         </div>
//                         <div className="col-6">
//                             <div className="bookreserve-img">
//                                 <img src="./src/img/reserve-img.jpg" className='img-fluid' alt="" />
//                             </div>
//                         </div>
//                     </Row>
//                 </Container>
//             </section>
//         </>
//     )
// };

// export default Bookreserve;

import './booknowreserve.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

const Bookreserve = () => {
    return (
        <section className='bookreserve-section'>
            <Container>
                <Row>
                    {/* Content Column */}
                    <div className="col-lg-6 col-12 p-0">
                        <div className="bookreserve-content">
                            <h3>Reserve Your Seat ________</h3>
                            <h2>Call Us Or Visit Place</h2>
                            <p>Lorem ipsum dolor sit amet,colur consectetur omni adipisicing elit, sed do eiusmod tempor incididunt labore et magna aliqua.</p>
                        </div>

                        <Row>
                            <div className="col-md-6 col-12 reserve-address">
                                <h4>Torre Annunziata</h4>
                                <p className='mt-3 mx-3'>
                                    1614 E. Bell Rd #104.<br />
                                    Salerno, AZ 85022<br />
                                    (989) 867-1010<br />
                                    Open today 11AM-10PM
                                </p>
                            </div>

                            <div className="col-md-6 col-12 reserve-address">
                                <h4>Posillipo</h4>
                                <p className='mt-3 mx-3'>
                                    204 E. Pizzetta Tommaso<br />
                                    Sorrento, AZ 85022<br />
                                    (989) 867-1010<br />
                                    Open today 11AM-10PM
                                </p>
                            </div>

                            <div className="col-md-6 col-12 reserve-address">
                                <h4>Torre del Greco</h4>
                                <p className='mt-3 mx-3'>
                                    Vale Puglia 54<br />
                                    Torre Del Greco AZ 85022<br />
                                    (989) 867-1010<br />
                                    Open today 11AM-10PM
                                </p>
                            </div>

                            <div className="col-md-6 col-12 reserve-address">
                                <h4>Naples Mercato</h4>
                                <p className='mt-3 mx-3'>
                                    Corso Itali AA<br />
                                    Naples, AZ 85022<br />
                                    (989) 867-1010<br />
                                    Open today 11AM-10PM
                                </p>
                            </div>
                        </Row>
                    </div>

                    {/* Image Column */}
                    <div className="col-lg-6 col-12">
                        <div className="bookreserve-img">
                            <img src="./src/img/reserve-img.jpg" className='img-fluid' alt="reserve" />
                        </div>
                    </div>
                </Row>
            </Container>
        </section>
    )
};

export default Bookreserve;

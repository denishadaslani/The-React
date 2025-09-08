// import { Container, Row } from 'react-bootstrap';
// import './booknowbanner.css'
// const Bookbanner = () => {
//     return (
//         <>
//             {/* <section className='book-banner-section'>
//                   <Container fluid>
//                     <Row>
//                         <div className="col-6">
//                             <div className="book-banner-title ">
//                                 <h2 className='book-banner-heading col-5'>Book A Table</h2>
//                                 <p className='book-banner-para col-9' >Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
//                             </div>
//                         </div>
//                         <div className="col-6">
//                             <div className="banner-content">
//                                 <div className="banner-img">
//                                     <img src="src/componet/img/onion.png" alt="" />
//                                 </div>
//                             </div>

//                         </div>
//                     </Row>
//                 </Container>
//             </section> */}

//         </>
//     )
// }

// export default Bookbanner

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './booknowbanner.css'
// import { Link } from 'react-router';
const Bookbanner = () => {
    return (
        <>
            {/* banner start  */}
            <section className='book-banner-section'>
                <Container fluid>
                    <Row className='d-flex align-items-center'>
                        <img src='./src/img/banner-leaf.png' className='banner-leaf-img'></img>
                        <img src='./src/img/banner-onion.png' className='banner-onion-img'></img>
                        <img src='./src/img/banner-tamato.png' className='banner-tamato-img'></img>
                        <div className='col-12 col-lg-6'>
                            <div className='banner-content'>
                                <h1>Book A Table</h1>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            </div>
                        </div>
                        <div className='col-12 col-lg-5'>
                            <ul className="banner-menu">
                                <li className='me-3 "text-decoration-none"'>Home</li> /
                                <li className='ms-3'>Book A Table</li>
                            </ul>
                        </div>
                    </Row>

                </Container>
            </section>
            {/* banner end  */}


        </>
    )
}
export default Bookbanner;

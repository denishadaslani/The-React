import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";

const Bookmap = () => {
    return (
        <section className="py-5">
            <Container>
                <Row>
                    <div className="col-12">
                        <div className="bookmap">

                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3718.9363919205257!2d72.86874387424541!3d21.234370780686792!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04f4783e04dc3%3A0x84283bcabd051a32!2sRed%20%26%20White%20Skill%20Education%20-%20Mota%20Varachha%2C%20Surat!5e0!3m2!1sen!2sin!4v1758358192047!5m2!1sen!2sin" width="100%"
                                height="450"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                    </div>
                </Row>
            </Container>
        </section>
    );
};

export default Bookmap;

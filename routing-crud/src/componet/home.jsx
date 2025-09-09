import Container from "react-bootstrap/esm/Container";
import { useEffect, useState } from "react";
import { getStorageData } from "../services/storage.data";
import { Card, Button } from "react-bootstrap";

const Home = () => {
    const [product, setProduct] = useState([]);
    useEffect(() => {
        let data = getStorageData();
        setProduct(data);
    }, []);
    return (
        <>
            <Container>
                <h1>Home Page</h1>
                {product.map((product) => {
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={product.image} />
                        <Card.Body>
                            <Card.Title>{product.title}</Card.Title>
                            <Card.Text>
                               {product.description}
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                })}
            </Container>
        </>
    )
};

export default Home;

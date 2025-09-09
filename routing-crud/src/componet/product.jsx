import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import { getStorageData, setStorageData } from '../services/storage.data';
import { useNavigate } from 'react-router';

const Product = () => {
    const innitialState = {
        title: "",
        description: "",
        price: "",
        quantity: "",
        category: "",
        image: "",
    }
    const [inputform, setInputForm] = useState(innitialState);
    const navigate = useNavigate();
    const handalchanged = (e) => {
        const { name, value } = e.target;
        setInputForm({ ...inputform, [name]: value })
    }


    const handalsubmit = (e) => {
        e.preventDefault();
        // inputform.id = generateuniqueid();   
        inputform.id = Math.floor(Math.random() * 100);
        console.log("submit", inputform);
        let oldData = getStorageData();
        oldData.push(inputform);
        setStorageData(oldData);
        setInputForm(innitialState);
        navigate("/");
    }
    return (
        <>
            <h1 style={{ textAlign: "center" }}> Add Product</h1>
            <Container>
                <Form onSubmit={handalsubmit}>
                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                        <Form.Label column sm="2">
                            Title
                        </Form.Label>
                        <Col sm="6">
                            <Form.Control type="text" name='title' value={inputform.title} onChange={handalchanged} placeholder="Title" />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                        <Form.Label column sm="2">
                            Description
                        </Form.Label>
                        <Col sm="6">
                            <Form.Control type="text" name='description' value={inputform.description} onChange={handalchanged} placeholder="Description" />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                        <Form.Label column sm="2">
                            Price
                        </Form.Label>
                        <Col sm="6">
                            <Form.Control type="number" name='price' value={inputform.price} onChange={handalchanged} placeholder="price" />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                        <Form.Label column sm="2">
                            Quantity
                        </Form.Label>
                        <Col sm="6">
                            <Form.Control type="number" name='quantity' value={inputform.quantity} onChange={handalchanged} placeholder="quantity" />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                        <Form.Label column sm="2">
                            Category
                        </Form.Label>
                        <Col sm="6">
                            <Form.Select name='category' value={inputform.category} onChange={handalchanged} aria-label="Default select example">
                                <option>Select Category</option>
                                <option value="1">Moblie</option>
                                <option value="2">Furniture</option>
                                <option value="3">Fashion</option>
                            </Form.Select>
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                        <Form.Label column sm="2">
                            Product img
                        </Form.Label>
                        <Col sm="6">
                            <Form.Control type="text" name='image' value={inputform.image} onChange={handalchanged} placeholder=" select img url" />
                        </Col>
                    </Form.Group>

                    <Button style={{ textAlign: "center", marginLeft: "20%" }} type='submit' variant="primary">Submit</Button>
                </Form>
            </Container>


        </>
    )
};
export default Product;
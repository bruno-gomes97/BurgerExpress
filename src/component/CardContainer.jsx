import { useEffect, useState } from 'react';
import { Row, Col, Card, Button } from "react-bootstrap";
import CartOffcanvas from './CartOffcanvas';

const CardContainer = ({ url }) => {

    const [product, setProduct] = useState([]);
    const [show, setShow] = useState(false);
    const [cart, setCart] = useState([])

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(() => {

        async function getData() {
            const res = await fetch(url);
            const data = await res.json();

            setProduct(data)
        }

        getData()
    }, [])

    const handleAddToCart = (item) => {
        setCart((prevCart) => {
            const itemExists = prevCart.find(cartItem => cartItem.id === item.id);

            if (itemExists) {
                return prevCart.map(cartItem =>
                    cartItem.id === item.id
                        ? { ...cartItem, quantity: cartItem.quantity + 1 }
                        : cartItem
                )
            } else {
                return [...prevCart, { ...item, quantity: 1 }]
            }
        })
    }

    // Incrementar quantidade
    const handleIncrementQuantity = (itemId) => {
        setCart((prevCart) =>
            prevCart.map(item => 
                item.id === itemId 
                ? { ...item, quantity: item.quantity + 1 }
                : item
            )
        );
    }

    // Decremento
    const handleDecrementQuantity = (itemId) => {
        setCart((prevCart) =>
            prevCart.map(item =>
                item.id === itemId && item.quantity > 1 
                ? {...item, quantity: item.quantity - 1}
                : item
            )
        )
    }

    const handleFinalizeOrder = () => {
        alert("Pedido finalizado com sucesso!")
        setCart([])
        handleClose();
    }

    return (
        <div>
            <Row xs={1} md={2} className="g-4 m-2">
                {product.map((item) => (
                    <Col key={item.id}>
                        <Card>
                            <Card.Img variant="top" src={item.image} />
                            <Card.Body>
                                <Card.Title>{item.nome}</Card.Title>
                                <Card.Text>
                                    {item.descricao}
                                </Card.Text>
                                <Card.Text style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                    R$ {item.preco}
                                    <Button variant="danger" onClick={() => handleAddToCart(item)}>Adicionar {item.preco}</Button>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
                <div className="d-flex justify-content-center mt-3">
                    <Button variant="success" onClick={handleShow}>
                        Ver Pedido
                    </Button>
                </div>
            </Row>

            <CartOffcanvas show={show}
                handleClose={handleClose}
                cart={cart}
                handleFinalizeOrder={handleFinalizeOrder} 
                handleIncrementQuantity={handleIncrementQuantity}
                handleDecrementQuantity={handleDecrementQuantity}
                />
                
        </div>
    )
}

export default CardContainer
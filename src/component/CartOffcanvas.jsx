import { Offcanvas, Button } from "react-bootstrap";


const CartOffcanvas = ({ show, handleClose, cart, handleFinalizeOrder, handleIncrementQuantity, handleDecrementQuantity }) => {
    // calcula o valor total
    const totalValue = cart.reduce((acc, item) => acc + item.preco * item.quantity, 0);

    return (
        <Offcanvas show={show} onHide={handleClose}>
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>Pedidos</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                {cart.map((item) => (
                    <div key={item.id} style={{ borderBottom: '1px solid #ccc', paddingBottom: '10px', marginBottom: '10px' }}>
                        <h5>{item.nome}</h5>
                        <p>{item.descricao}</p>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <Button variant="outline-secondary" size="sm" onClick={() => handleDecrementQuantity(item.id)}>
                                -
                            </Button>
                            <span style={{ margin: '0 10px' }}>{item.quantity}</span>
                            <Button variant="outline-secondary" size="sm" onClick={() => handleIncrementQuantity(item.id)}>
                                +
                            </Button>
                            <span>R$ {item.preco * item.quantity}</span>
                        </div>
                    </div>
                ))}
                <div style={{ borderTop: '2px solid #007bff', marginBottom: '1rem' }}>
                    <div className="d-flex justify-content-between mt-4">
                        <strong>Total:</strong>
                        <strong>R$ {totalValue.toFixed(2)}</strong>
                    </div>
                </div>
                < div className="d-flex justify-content-between mt-4">
                    <Button variant="primary" onClick={handleFinalizeOrder} disabled={cart.length === 0}>
                        Finalizar Pedido
                    </Button>
                </div>
            </Offcanvas.Body>
        </Offcanvas >
    )
}

export default CartOffcanvas;
import { Offcanvas, Button } from "react-bootstrap";

const CartOffcanvas = ({ show, handleClose, cart, handleFinalizeOrder }) => {
    // calcula o valor total
    const totalValue = cart.reduce((total, item) => total + (item.preco * item.quantity), 0);

    return (
        <Offcanvas show={show} onHide={handleClose}>
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>Pedidos</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                {cart.length > 0 ? (
                    <>
                        {
                            cart.map((item, index) => (
                                <div key={index} className="d-flex justify-content-between mb-2">
                                    <span>{item.nome} (x{item.quantity})</span>
                                    <span>R$ {item.preco * item.quantity}</span>
                                </div>
                            ))}
                        <div style={{ borderTop: '2px solid #007bff', marginBottom: '1rem' }}>
                            <div className="d-flex justify-content-between mt-4">
                                <strong>Total:</strong>
                                <strong>R$ {totalValue.toFixed(2)}</strong>
                            </div>
                        </div>
                        < div className="d-flex justify-content-between mt-4">
                            <Button variant="primary" onClick={handleFinalizeOrder}>
                                Finalizar Pedido
                            </Button>
                        </div>
                    </>
                ) : (
                    <p>O carrinho está vazio.</p>
                )}
            </Offcanvas.Body>
        </Offcanvas >
    )
}

export default CartOffcanvas;
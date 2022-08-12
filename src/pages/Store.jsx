import { Col, Row } from "react-bootstrap"
export const Store = () => {
    return (
        <>
            <h1 className="text-center">Welcome to <span className="font-weight-bold" style={{ letterSpacing: "0.2rem"}}>FAKE SHOP</span>!</h1>
            <Row xs={1} md={2} lg={3} className="g-2">
                <Col>Item</Col>
            </Row>
        </>
    )
}
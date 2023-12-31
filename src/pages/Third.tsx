import { Container, Row, Col } from 'react-bootstrap';
import Isla from "../components/Icons/first_pic.jpg";
import kosumo from "../components/Icons/2nd_pic.jpg";
import { Fade, Bounce } from "react-awesome-reveal";

import "../styles/Third.css"


export default function Third() {
    return (
        <div className='Third_container' style={{ backgroundColor: "green" }}>
            <Container>
                <Row>
                    <Col>
                        <Fade direction='down'>
                            <p className='intro'>Knowing your name and seeing your face in chat for the first time</p>
                            <p className='sub_intro'>"I can't forget this because after we play apex we always talking in the firing range"</p>
                        </Fade>
                    </Col>
                </Row>
                <Row xs={1} md={2} >
                    <Col className='text_center'>
                        <div className='k-san'>
                            K-san
                        </div>
                    </Col>
                    <Col>
                        <Bounce>
                            <div className='img_isla'>
                                <img src={Isla} alt="" />
                            </div>
                        </Bounce>
                    </Col>
                </Row>
                <Row xs={1} md={2}>
                    <Col>
                        <Bounce>
                            <div className='img_kosumo'>
                                <img src={kosumo} alt="" />
                            </div>
                        </Bounce>
                    </Col>
                    <Col className='text_center'>
                        <div className='kosumo'>
                            Kosumo
                        </div>
                    </Col>
                </Row>
            </Container>
        </div >
    );
}
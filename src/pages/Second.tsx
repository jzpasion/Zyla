import { Container, Row, Col, Card } from 'react-bootstrap';
import Isla from "../components/Icons/Isla.png";
import ww from "../components/Icons/3.png";
import gg from "../components/Icons/gg.png";
import hato from "../components/Icons/hato.png";
import nf from "../components/Icons/nf.png";
import yatta from "../components/Icons/yatta.png";
import { Fade, JackInTheBox } from "react-awesome-reveal";
import "../styles/Second.css"


export default function Second() {
    return (
        <div className='second_container'>
            <Container >
                <Row>
                    <Col>
                        <Fade direction='down'>
                            <p className='intro'>Then I became somehow attracted to you</p>
                            <p className='sub_intro'>"It was also the time we chat each other on twitter and playing off stream"</p>
                        </Fade>
                    </Col>
                </Row>
                <Row>
                    <JackInTheBox>
                        <div className='card_isla'>
                            <div className='img_holder'>
                                <img src={Isla} alt="" />
                            </div>
                        </div>
                    </JackInTheBox>
                </Row>
                <Row>
                    <div className='isla_aira'>
                        Isla
                    </div>
                </Row>
                <Row xs={1} md={2}>
                    <Col>
                        <Fade direction='left' duration={1000}>
                            <Card className='card_hours'>
                                <Card.Title className='card_title'>Hours Watched</Card.Title>
                                <Card.Body className='card_body'>
                                    451
                                </Card.Body>
                            </Card>
                        </Fade>
                    </Col>
                    <Col>
                        <Fade direction='right' duration={1000}>
                            <Card className='card_sent'>
                                <Card.Title className='card_title'>Chats Sent</Card.Title>
                                <Card.Body className='card_body'>
                                    6,013
                                </Card.Body>
                            </Card>
                        </Fade>
                    </Col>
                </Row>
                <Row xs={1} md={2} >
                    <Col>
                        <Fade direction='left' duration={1200}>
                            <Card className='card_earned'>
                                <Card.Title className='card_title'>Channel Points Earned</Card.Title>
                                <Card.Body className='card_body'>
                                    219,660
                                </Card.Body>
                            </Card>
                        </Fade>
                    </Col>
                    <Col>
                        <Fade direction='right' duration={1200}>
                            <Card className='card_emotes'>
                                <Card.Title className='card_title'>My favorite emotes</Card.Title>
                                <Card.Body className='emotes'>
                                    <img src={ww} alt="" />
                                    <img src={nf} alt="" />
                                    <img src={hato} alt="" />
                                    <img src={gg} alt="" />
                                    <img src={yatta} alt="" />
                                </Card.Body>
                            </Card>
                        </Fade>
                    </Col>
                </Row>
            </Container>
        </div >
    );
}
import Typed from 'react-typed';
import { Container, Row, Col } from 'react-bootstrap';
import islaBanner from "../components/Icons/banner.png";
import bits from "../components/Icons/bits-01.png";
import smile from "../components/Icons/smile.png";
import founder from "../components/Icons/founder.png";
import { Fade } from "react-awesome-reveal";

import "../styles/First.css"

export default function First() {
    return (
        <div className='first_container' style={{ backgroundColor: "#1C768F" }}>
            <Container>
                <Row >
                    <Col>
                        <Fade direction='down'>
                            <p className='intro'>It all started here</p>
                            <p className='sub_intro'>"It was on june 4th when I start following you"</p>
                        </Fade>
                    </Col>
                </Row>
                <Row>
                    <Col md={3}>
                    </Col>
                    <Col md={6}>
                        <Fade direction="up">
                            <div className='twitch_layout'>
                                <div className='isla_banner'>
                                    <img src={islaBanner} alt="" />
                                </div>
                                <div className='twitch_chat_header'>
                                    <p>Chat</p>
                                </div>

                                <div className='twitch_chat'>
                                    <p>Welcome to Isla's chat room!</p>
                                </div>
                                <div className='twitch_chat_input'>
                                    <img className='chat_founder' src={founder} alt="" />
                                    <Typed className='type_chat'
                                        strings={['Hey~ Isla', 'How are you today?', 'Genki genki, moto moto wa? w', 'NF NF NF']}
                                        typeSpeed={130}
                                        backSpeed={80}
                                        loop
                                    />
                                    <img className='chat_smile' src={smile} alt="" />
                                    <img className='chat_bits' src={bits} alt="" />
                                </div>
                            </div>
                        </Fade>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
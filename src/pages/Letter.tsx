import { Container, Row, Col } from 'react-bootstrap';
import apex from "../components/Icons/apex_icon.png"
import letter from "../components/Icons/Letter.png"
import "../styles/Letter.css"
import { useState } from 'react';
import { Fade, JackInTheBox } from "react-awesome-reveal";

export default function Letter() {
    const [visible, setVisible] = useState(false);

    function setVisibilty() {
        setVisible(!visible);
    }
    return (
        <div className='Letter_container'>
            <Container>
                <Row>
                    <Col>
                        <Fade direction='down'>
                            <p className='intro'>So for now I just wanna give you this</p>
                            <p className='sub_intro'>"Open your Apex love pack"</p>
                        </Fade>
                    </Col>
                </Row>
                <JackInTheBox>

                    <div className='apex_img' onClick={setVisibilty}>
                        <img src={apex} alt="" />
                    </div>
                </JackInTheBox>

            </Container>
            <div className='popup_image' style={{ visibility: visible ? 'visible' : 'hidden' }} onClick={setVisibilty}>
                <div className='image_letter'>
                    <img src={letter} alt="" />
                </div>
            </div>
        </div >
    );
}
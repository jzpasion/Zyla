
import { Container, Row, Col } from 'react-bootstrap';
import first_pic from "../components/Icons/1_pic.jpg";
import second_pic from "../components/Icons/2_pic.jpg";
import third_pic from "../components/Icons/3_pic.jpg";
import fourth_pic from "../components/Icons/4_pic.jpg";
import { Fade, Bounce } from "react-awesome-reveal";
import "../styles/Fourth.css"


export default function Fourth() {
    return (
        <div className='Fourth_container'>
            <Container>
                <Row>
                    <Col>
                        <Fade direction='down'>
                            <p className='intro_4'>And having a chance to see and date you in person</p>
                            <p className='sub_intro_4'>"My best day in japan~ also owls owls owls owls ww"</p>
                        </Fade>
                    </Col>
                </Row>
                <Row className='picture_group' xs={1} md={4}>
                    <Col>
                        <Bounce>
                            <div className='img_1'>
                                <img src={first_pic} alt="" />
                            </div>
                        </Bounce>
                    </Col>
                    <Col>
                        <Bounce delay={100}>
                            <div className='img_2'>
                                <img src={second_pic} alt="" />
                            </div>
                        </Bounce>
                    </Col>
                    <Col>
                        <Bounce delay={200}>
                            <div className='img_3'>
                                <img src={third_pic} alt="" />
                            </div>
                        </Bounce>
                    </Col>
                    <Col>
                        <Bounce delay={300}>
                            <div className='img_4'>
                                <img src={fourth_pic} alt="" />
                            </div>
                        </Bounce>
                    </Col>
                </Row>
            </Container>
        </div >
    );
}
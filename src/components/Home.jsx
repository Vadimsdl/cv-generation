import {Row, Col, AutoComplete, Button, Typography} from 'antd';
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { useLoaderData } from "react-router";

const { Title, Paragraph } = Typography;

const Home = () => {
    const navigate = useNavigate();
    const team = useLoaderData();
    const [username, setUsername] = useState("");

    const handellClick = () => {
        navigate(`/cv-generation/${username}`);
    }

    return (
        <Row type="flex" justify="center" align="middle" style={{minHeight: '97vh'}}>
            <Col style={{width: "100%"}}>
                <Row justify={"center"}>
                    <Col>
                        <Title level={3}>Hello, this is a CV generator from your github</Title>
                    </Col>
                </Row>
                <Row justify={"center"}>
                    <Col>
                        <Paragraph strong type={"secondary"}>Write any username that interests you</Paragraph>
                    </Col>
                </Row>
                <Row justify={"center"} gutter={[8, 8]}>
                    <Col md={10} sm={10}>
                        <AutoComplete
                            autoClearSearchValue={false}
                            style={{
                                width: "100%",
                            }}
                            onChange={(value) => setUsername(value)}
                            onKeyPress={(event) => event.key === 'Enter' ? handellClick() : null }
                            placeholder="Select a person"
                            fieldNames={{
                                label: "login", value: "login",
                            }}
                            filterOption={(inputValue, option) =>
                                option.login.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
                            }
                            options={team}
                        />
                    </Col>
                    <Col>
                        <Button onClick={() => handellClick()}>Submit</Button>
                    </Col>
                </Row>
            </Col>
        </Row>
    );
}

export default Home;
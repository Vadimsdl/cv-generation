import { useLoaderData } from "react-router";
import {Col, Row} from "antd";
import Left from "./sidebar/left/Left";
import Right from "./sidebar/right/Right";

const CV = () => {
    const team = useLoaderData();

    return (
        <Row gutter={[48, 48]}>
            <Col>
                <Left user={team} />
            </Col>
            <Col>
                <Right user={team} />
            </Col>
        </Row>
    );
}

export default CV;
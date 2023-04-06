import { Avatar, Col, Row, Typography } from "antd";
import s from "./Left.module.scss";

const { Text, Paragraph } = Typography;
const Left = (props) => {
    const { user: {
        avatar_url,
        name
    }} = props;

    return (
        <>
            <Row gutter={[16, 16]} align={"middle"}>
                <Col>
                    <Avatar className={s.avatar} size={"large"} src={avatar_url}/>
                </Col>
                <Col>
                    <Paragraph className={s.name}>
                        <Text className={s.name} strong>Name:</Text> {name}
                    </Paragraph>
                </Col>
            </Row>
        </>
    );
}

export default Left;
import {Col, Row, Typography} from "antd";
import s from "./Right.module.scss";
import CountUp from "react-countup";
import {useEffect, useState} from "react";
import {getRepository, getRepositoryInfo} from "../../../action";

const {
    Text,
    Paragraph,
    Title,
    Link,
} = Typography;

const Left = (props) => {
    const { user: {
        bio,
        public_repos,
        public_gists,
        blog,
        url,
        followers,
        following,
        login
    }} = props;
    const [languages, setLanguages] = useState([]);

    useEffect(() => {
        getRepository(login).then((response) => {
           return getRepositoryInfo(login, response[0].name).then((data) => {
               const langs = Object.entries(data);
               const equal = (langs.reduce((accumulated, count) => accumulated + count[1], 0) / 100);
               const sortedLanguages = langs
                   .map(([language, count]) => [language, count / equal ])
                   .sort((a, b) => b[1] - a[1]);
               setLanguages(sortedLanguages);
           })
        })
    } ,[])

    return (
        <>
            <Title level={2}>Main information: </Title>
            <Row>
               <Col>
                    <Paragraph className={s.font}>
                        <Text className={s.font} strong>BIO: </Text> {bio}
                    </Paragraph>
                </Col>
                <Col>
                    <Text className={s.font}>
                        Number of public repositories <CountUp end={public_repos} separator="," />,
                        number of public gists <CountUp end={public_gists} separator=","/>,
                        also number of followers <CountUp end={followers} separator=","/> and
                        following <CountUp end={following} separator=","/>
                    </Text>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Paragraph className={s.font} strong>Links:</Paragraph>
                </Col>
                <Col>
                    <Paragraph className={s.font} strong>- Blog: <Link className={s.font} href={blog}>{blog}</Link></Paragraph>
                    <Paragraph className={s.font} strong>- Github: <Link className={s.font} href={url}>{url}</Link></Paragraph>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Paragraph className={s.font} strong>Repositories:</Paragraph>
                </Col>
            </Row>
            <Row>
                {languages.map(([language, percentage]) => (
                    <Col key={`${language}=${percentage}`}>
                        <Paragraph className={s.font} strong>- {language}: <Link className={s.font} href={blog}>{percentage}</Link></Paragraph>
                    </Col>
                ))}
            </Row>
        </>
    );
}

export default Left;
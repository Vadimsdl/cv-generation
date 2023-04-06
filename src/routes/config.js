import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home";
import CV from "../components/CV";
import {getAllUsers, getCurrentUser} from "../action";
import {Button, Result} from "antd";
import {checkStorage, setItem} from "../action/localStorage";

export const router = createBrowserRouter([
    {
        path: "/cv-generation/",
        loader: () => {
            const cache = checkStorage("all");
            return cache ? cache : getAllUsers().then((data) => setItem("all", data));
        },
        errorElement: <Result
            status="error"
            title="Submission Failed"
            subTitle="Please check and modify the information before resubmitting."
            extra={[
                <Button href="/cv-generation/" type="primary" key="console">
                    Go Home
                </Button>
            ]}
        />,
        element: <Home />,
    },
    {
        path: "/cv-generation/:username",
        loader: ({ params }) => {
            const cache = checkStorage(params.username);
            return cache ? cache : getCurrentUser(params.username).then(data => setItem(params.username, data));
        },
        errorElement: <Result
            status="error"
            title="Submission Failed"
            subTitle="Please check and modify the information before resubmitting."
            extra={[
                <Button href="/cv-generation/" type="primary" key="console">
                    Go Home
                </Button>
            ]}
        />,
        element: <CV />,
    },
]);
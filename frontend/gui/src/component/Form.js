import React from "react";
import { Form, Input, Button } from "antd";
import {connect} from "react-redux";
import axios from "axios";

class CustomForm extends React.Component {
    handleFormSubmit = (values, requestType, articleID) => {
        const postObj = {
            title: values.title,
            content: values.content
        };

        axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
        axios.defaults.xsrfCookieName = "csrftoken";
        axios.defaults.headers = {
            "Content-Type": "application/json",
            Authorization: `Token ${this.props.token}`
        };

        switch (requestType) {
            case "post":
                return axios
                    .post("http://127.0.0.1:8000/api/create/", postObj)
                    .then(res => console.log(res))
                    .catch(error => console.log(error));
            case "put":
                return axios
                    .put(`http://127.0.0.1:8000/api/${articleID}/update/`, postObj)
                    .then(res => console.log(res))
                    .catch(error => console.log(error));
            default:
                console.log("request type for form is unknown");
        }
    };
    render() {
        return (
            <div>
                <Form
                    onFinish={event =>
                        this.handleFormSubmit(
                            event,
                            this.props.requestType,
                            this.props.articleID
                        )
                    }
                >
                    <Form.Item name="title" label="Title">
                        <Input placeholder="Put a title here." />
                    </Form.Item>

                    <Form.Item name="content" label="Content">
                        <Input placeholder="Enter Some Content ..." />
                    </Form.Item>

                    <Form.Item>
                        <Button type="primary" htmlType="submit">
                            {this.props.btnText}
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        token: state.token
    };
};

export default connect(mapStateToProps)( CustomForm );

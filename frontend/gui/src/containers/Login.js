import React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import * as actions from "../store/actions/auth";

import { Spin, Form, Input, Button } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

class Login extends React.Component {
    render() {
        let errorMessage = null;
        if (this.props.error) {
            errorMessage = <p>{this.props.error.message}</p>;
        }
        const onFinish = values => {
            this.props.onAuth(values.username, values.password);
            this.props.history.push("/");
        };

        const onFinishFailed = errorInfo => {
            console.log("Failed:", errorInfo);
        };
        return (
            <div>
                {errorMessage}
                {this.props.loading ? (
                    <Spin indicator={antIcon} />
                ) : (
                    <Form
                        name="basic"
                        initialValues={{
                            remember: true
                        }}
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                    >
                        <Form.Item
                            label="Username"
                            name="username"
                            rules={[
                                {
                                    required: true,
                                    message: "Please input your username!"
                                }
                            ]}
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item
                            label="Password"
                            name="password"
                            rules={[
                                {
                                    required: true,
                                    message: "Please input your password!"
                                }
                            ]}
                        >
                            <Input.Password />
                        </Form.Item>

                        <Form.Item>
                            <Button
                                type="primary"
                                htmlType="submit"
                                style={{ marginRight: "10px" }}
                            >
                                Login
                            </Button>
                            Or
                            <NavLink
                                to="/signup/"
                                style={{ marginRight: "10px" }}
                            >
                                {" "}
                                Signup
                            </NavLink>
                        </Form.Item>
                    </Form>
                )}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        loading: state.loading,
        error: state.error
    };
};
// We are call the function therefore it is a dipatch
const mapDispatchToProps = dispatch => {
    return {
        onAuth: (username, password) => {
            dispatch(actions.authLogin(username, password));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);

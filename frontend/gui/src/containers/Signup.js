import React from "react";
import { NavLink } from "react-router-dom";
import { Form, Input, Button } from "antd";

import * as actions from "../store/actions/auth";
import { connect } from "react-redux";

class Signup extends React.Component {
    state = {
        confirmDirty: false,
    }

    render() {
        const onFinish = values => {
            this.props.onAuth(
                values.username,
                values.email,
                values.password,
                values.confirm
            );
            this.props.history.push("/");
        };
        return (
            <Form
                name="register"
                onFinish={onFinish}
                initialValues={{
                    residence: ["zhejiang", "hangzhou", "xihu"],
                    prefix: "86"
                }}
                scrollToFirstError
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
                    <Input placeholder="Username" />
                </Form.Item>

                <Form.Item
                    name="email"
                    label="E-mail"
                    rules={[
                        {
                            type: "email",
                            message: "The input is not valid E-mail!"
                        },
                        {
                            required: true,
                            message: "Please input your E-mail!"
                        }
                    ]}
                >
                    <Input placeholder="E-mail" />
                </Form.Item>

                <Form.Item
                    name="password"
                    label="Password"
                    rules={[
                        {
                            required: true,
                            message: "Please input your password!"
                        }
                    ]}
                    hasFeedback
                >
                    <Input.Password placeholder="Password"/>
                </Form.Item>

                <Form.Item
                    name="confirm"
                    label="Confirm Password"
                    dependencies={["password"]}
                    hasFeedback
                    rules={[
                        {
                            required: true,
                            message: "Please confirm your password!"
                        },
                        ({ getFieldValue }) => ({
                            validator(rule, value) {
                                if (
                                    !value ||
                                    getFieldValue("password") === value
                                ) {
                                    return Promise.resolve();
                                }

                                return Promise.reject(
                                    "The two passwords that you entered do not match!"
                                );
                            }
                        })
                    ]}
                >
                    <Input.Password placeholder="Confirm Password"/>
                </Form.Item>

                <Form.Item>
                    <Button type="primary" htmlType="submit">
                        Signup
                    </Button>
                    {" "}
                    Or
                    <NavLink style={{ marginRight: "10px" }} to="/login/">
                        {" "}
                        Login
                    </NavLink>
                </Form.Item>
            </Form>
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
        onAuth: (username, email, password1, password2) => {
            dispatch(actions.authSignup(username, email, password1, password2));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Signup);

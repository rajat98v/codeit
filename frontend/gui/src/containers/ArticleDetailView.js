import React from "react";
import axios from "axios";
import { connect } from 'react-redux';

import { Form, Button, Card } from "antd";

import CustomForm from "../component/Form";

class ArticleDetail extends React.Component {
    state = {
        articles: {}
    };
    componentDidMount() {
        const articleID = this.props.match.params.articleID;
        axios.get(`http://127.0.0.1:8000/api/${articleID}`).then(res => {
            this.setState({
                articles: res.data
            });
        });
    }
    handleDelete() {
        const articleID = this.props.match.params.articleID;
        axios.defaults.headers = {
            "Content-Type": "applicationi/json",
            Authorization: `Token ${this.props.token}`
        }
        axios.delete(`http://127.0.0.1:8000/api/${articleID}/delete/`)
            .then(res=>{
                if(res.status === 204) {
                    this.props.history.push(`/`);
                }
            })
    }

    render() {
        return (
            <div>
            Done
                <Card title={this.state.articles.title}>
                    <p>{this.state.articles.content}</p>
                </Card>
                <CustomForm
                    {...this.props}
                    token = {this.props.token}
                    requestType="put"
                    articleID={this.props.match.params.articleID}
                    btnText="Update"
                />
                <Form onFinish={event => this.handleDelete(event)}>
                    <Button type="danger" htmlType="submit">
                        Delete
                    </Button>
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

export default connect(mapStateToProps)(ArticleDetail);

import React, {useState} from 'react';
import {Button, Col, Container, Form, Row} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {addUserAction, fetchUserAction} from "../../redux/actions";
import UserListPage from "../UserListPage/UserListPage";

const UserRegisterPage = () => {
    const dispatch = useDispatch();
    const {userList} = useSelector(state => state.usersReducer)
    const userForm = {
        name: '',
        username: '',
        email: ''
    };

    const [userInfo, setUserInfo] = useState(userForm);
    const formValue = (e) => {
        setUserInfo({
            ...userInfo,
            [e.target.name]: e.target.value
        })
    }

    const addUser = (e) => {
        e.preventDefault();
        dispatch(fetchUserAction(userInfo));
        dispatch(addUserAction(userInfo));
    };

    return (
        <div>
            <Container>
                <Form onSubmit={addUser}>
                    <Row>
                        <Col lg={3}>
                            <Form.Group className='mb-3' controlId="name">
                                <Form.Control
                                    type="text"
                                    placeholder='name'
                                    name='name'
                                    onChange={formValue}
                                />
                            </Form.Group>
                        </Col>
                        <Col lg={3}>
                            <Form.Group className='mb-3' controlId="username">
                                <Form.Control
                                    type="text"
                                    placeholder='username'
                                    name='username'
                                    onChange={formValue}
                                />
                            </Form.Group>
                        </Col>
                        <Col lg={3}>
                            <Form.Group className='mb-3' controlId="email">
                                <Form.Control
                                    type="text"
                                    placeholder='email'
                                    name='email'
                                    onChange={formValue}
                                />
                            </Form.Group>
                        </Col>
                        <Col lg={3}>
                            <Button type='submit' variant='success' className='w-100'>
                                register user
                            </Button>
                            {/*{userList.map((user) => <UserListPage userInfo={user} />)}*/}
                        </Col>
                    </Row>
                </Form>
            </Container>
        </div>
    );
};

export default UserRegisterPage;
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button, Form, Grid, Header, Message, Segment } from 'semantic-ui-react';

import { login } from '../../store';
import { ApplicationState } from '../../store/types';

export const Login: React.FC = ({}) => {
    const dispatch = useDispatch();

    const { loading, error } = useSelector((state: ApplicationState) => state.login);

    const [state, setState] = React.useState({
        email: '',
        password: '',
    });

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        dispatch(login(state.email, state.password));
    };

    const onValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setState({ ...state, [e.target.name]: e.target.value });
    };

    return (
        <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
            <Grid.Column style={{ maxWidth: 450 }}>
                <Header as='h2' color='teal' textAlign='center'>
                    Log-in
                </Header>
                <Form size='large' onSubmit={onSubmit} error={error != undefined} loading={loading}>
                    <Segment stacked>
                        <Form.Input fluid icon='user' iconPosition='left' placeholder='E-mail address' name='email' value={state.email} onChange={onValueChange} />
                        <Form.Input fluid icon='lock' iconPosition='left' placeholder='Password' type='password' name='password' value={state.password} onChange={onValueChange} />

                        <Message error header='Login Failed!' content={error} />

                        <Button color='teal' fluid size='large' type='submit' disabled={!(state.email && state.password)}>
                            Login
                        </Button>
                    </Segment>
                </Form>
                <Message>
                    New to us?&nbsp;&nbsp;
                    <Link to='/Registration' className='btn btn-link'>
                        Register Here
                    </Link>
                </Message>
            </Grid.Column>
        </Grid>
    );
};

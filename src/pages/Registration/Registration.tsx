import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, FormGroup, FormRadio, Grid, Header, Segment } from 'semantic-ui-react';

import { registartion } from '../../store';
import { ApplicationState } from '../../store/types';
export const Registration: React.FC = () => {
    const dispatch = useDispatch();
    const { loading } = useSelector((state: ApplicationState) => state.registration);
    const [state, setState] = React.useState({
        email: '',
        password: '',
        firstname: '',
        lastname: '',
        dob: new Date(),
        gender: '',
        address1: '',
        address2: '',
        phonenumber: 0,
    });

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        dispatch(registartion(state));
    };

    const onValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setState({ ...state, [e.target.name]: e.target.value });
    };
    const onRadioClick = (e: React.FormEvent<HTMLInputElement>) => {
        setState({ ...state, gender: e.currentTarget.innerText });
    };
    return (
        <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
            <Grid.Column style={{ maxWidth: 450 }}>
                <Header as='h2' color='teal' textAlign='center'>
                    Sign-Up
                </Header>
                <Form size='large' onSubmit={onSubmit} loading={loading}>
                    <Segment stacked>
                        <FormGroup inline={true}>
                            <Form.Input label='First name' placeholder='First name' required value={state.firstname} name='firstname' onChange={onValueChange} />
                            <Form.Input label='Last name' placeholder='Last name' value={state.lastname} name='lastname' onChange={onValueChange} />
                        </FormGroup>
                        <FormGroup inline={true}>
                            <label>DOB:</label>
                            <Form.Input type='date' label='DOB' placeholder='Date of Birth' value={state.dob} name='dob' onChange={onValueChange} />
                        </FormGroup>
                        <FormGroup inline={true}>
                            <label>Gender</label>
                            <FormRadio label='Male' value={state.gender} name='gender' checked={state.gender == 'Male'} onChange={onRadioClick} />
                            <FormRadio label='Female' value={state.gender} name='gender' checked={state.gender == 'Female'} onChange={onRadioClick} />
                            <FormRadio label='Other' value={state.gender} name='gender' checked={state.gender == 'Other'} onChange={onRadioClick} />
                        </FormGroup>
                        <FormGroup inline={true}>
                            <Form.Input label='Email Id' placeholder='Email Id' name='email' onChange={onValueChange} value={state.email} required />
                            <Form.Input label='Password' placeholder='Password' name='password' onChange={onValueChange} value={state.password} type='password' required />
                        </FormGroup>

                        <FormGroup inline={true}>
                            <Form.Input label='Address Line1' placeholder='Door Number and Street' name='address1' onChange={onValueChange} value={state.address1} />
                            <Form.Input label='Address Line2' placeholder='Landmark' onChange={onValueChange} name='address2' value={state.address2} />
                        </FormGroup>
                        <FormGroup inline={true}>
                            <Form.Field label='Phone No' placeholder='Mobile Number' control='input' type='tel' name='phonenumber' value={state.phonenumber} onChange={onValueChange} required />
                        </FormGroup>
                        <FormGroup inline={true}>
                            <Form.Button color='teal' type='submit'>
                                Submit
                            </Form.Button>
                            <Form.Button>Cancel</Form.Button>
                        </FormGroup>
                    </Segment>
                </Form>
            </Grid.Column>
        </Grid>
    );
};

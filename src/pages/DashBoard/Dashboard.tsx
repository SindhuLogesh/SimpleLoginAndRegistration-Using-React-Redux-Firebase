import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Form, Grid, Header, Label, List, Segment } from 'semantic-ui-react';

import { dashborad } from '../../store';
import { history } from '../../store/configureStore';
import { ApplicationState } from '../../store/types';
export const Dashboard: React.FC = () => {
    const dispatch = useDispatch();

    const { user, userInfo, loading } = useSelector((state: ApplicationState) => ({ ...state.login, ...state.dashboard }));

    useEffect(() => {
        if (user) dispatch(dashborad(user));
    }, [user]);
    return (
        <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
            <Grid.Column style={{ maxWidth: 450 }}>
                <Header as='h2' color='teal' textAlign='center'>
                    User Details
                </Header>
                <Form size='large' loading={loading}>
                    <Segment stacked>
                        <List divided selection>
                            <List.Item>
                                <Label color='red' horizontal>
                                    First Name
                                </Label>
                                {userInfo?.firstname}
                            </List.Item>
                            <List.Item>
                                <Label color='purple' horizontal>
                                    Last Name
                                </Label>
                                {userInfo?.lastname}
                            </List.Item>
                            <List.Item>
                                <Label color='red' horizontal>
                                    Gender
                                </Label>
                                {userInfo?.gender}
                            </List.Item>
                            <List.Item>
                                <Label horizontal>Email:</Label>
                                {userInfo?.email}
                            </List.Item>
                            <List.Item>
                                <Label horizontal>Address:</Label>
                                {`${userInfo?.address1} ${userInfo?.address2}`}
                            </List.Item>
                            <List.Item>
                                <Label horizontal>Mobile Number:</Label>
                                {userInfo?.phonenumber}
                            </List.Item>
                        </List>
                        <Button onClick={() => history.push('/Login')}>Exit</Button>
                    </Segment>
                </Form>
            </Grid.Column>
        </Grid>
    );
};

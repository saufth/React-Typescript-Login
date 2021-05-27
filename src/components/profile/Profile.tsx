import { Component } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import axios, { AxiosResponse } from 'axios';

import Navbar from '../navigation/Navbar';

import { UserUsername } from '../../typings/user';

export interface UserData {
    row_key: string;
    contact_key: string;
    profile_key: string;
    created_at: string;
}

export default class LoginForm extends Component<RouteComponentProps<UserUsername>, UserData> {

    private readonly userUsername: Readonly<UserUsername>;

    public constructor(props: RouteComponentProps<UserUsername>) {
        super(props);
        this.userUsername = {
            username: this.props.match.params.username
        };
        this.state = {
            row_key: '',
            contact_key: '',
            profile_key: '',
            created_at: ''
        }
    }

    public componentDidMount = async (): Promise<void> => {
        try {
            const response: AxiosResponse = await axios.post('http://localhost:8080/profile', {
                username: this.userUsername.username
            });
            this.setState(() => ({
                row_key: response.data.row_key,
                contact_key: response.data.contact_key,
                profile_key: response.data.profile_key,
                created_at: response.data.created_at
            }));
            this.state = response.data;
        } catch (error) {
            alert('Algo salio mal');
        }
    }

    public render = (): JSX.Element => {
        return (
            <div className="">
                <Navbar pathName={this.props.location.pathname} />
            </div>
        );
    }

}

import { Component, FormEvent } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import axios, { AxiosResponse, AxiosRequestConfig } from 'axios';

import Navbar from '../../navigation/Navbar';
import InputUsername from '../inputs/InputUsername';
import InputPassword from '../inputs/InputPassword';
import Button from '../buttons/Button';

import { UserCredentials } from '../../../typings/user';
import Empty from '../../../typings/empty';

import '../../../assets/css/futuraFonts.css';

export default class LoginForm extends Component<RouteComponentProps<Empty>, Empty> {

    private readonly loginURL: string = 'http://localhost:8080/login';

    private readonly axiosRequestConfig: AxiosRequestConfig = {
        headers: {
            'Content-Type': 'application/json'
        },
        withCredentials: true
    };

    private userCredentials: UserCredentials;

    constructor(props: RouteComponentProps<Empty>) {
        super(props);
        this.userCredentials = {
            username: '',
            password: ''
        };
        this.handleLogin = this.handleLogin.bind(this);
        this.setUsername = this.setUsername.bind(this);
        this.setPassword = this.setPassword.bind(this);
    }

    private handleLogin = async (event: FormEvent<HTMLFormElement>): Promise<void> => {
        try {
            event.preventDefault();
            const axiosResponse: AxiosResponse<any> = await axios.post(
                this.loginURL,
                this.userCredentials,
                this.axiosRequestConfig
            );
            alert(axiosResponse.data.message);
        } catch (error) {
            alert('El usuario o la contraseña no coinciden');
        }
    }

    private setUsername = (username: string): void => {
        this.userCredentials.username = username;
    }

    private setPassword = (password: string): void => {
        this.userCredentials.password = password;
    }

    public render = (): JSX.Element => {
        return (
            <div>
                <Navbar pathName={this.props.location.pathname} />

                <div className="min-h-screen bg-white flex flex-col justify-center">

                    <div className="max-w-md w-full mx-auto">
                        <div className="text-center font-medium text-xl futura__book">
                            Inicia sesión
                        </div>
                    </div>

                    <div className="max-w-md w-full mx-auto mt-4 p-8 rounded border border-gray-300">
                        <form method="post" className="space-y-6" onSubmit={ this.handleLogin }>

                            <InputUsername setValue={ this.setUsername } />

                            <InputPassword setValue={ this.setPassword } />

                            <Button textValue="Iniciar sesión" />

                        </form>
                    </div>

                </div>
            </div>
        );
    }

}

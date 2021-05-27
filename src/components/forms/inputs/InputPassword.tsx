import { Component, ChangeEvent } from 'react';

import { UserPassword } from '../../../typings/user';
import { StringSetter } from '../../../typings/accesors';

export default class InputPassword extends Component<StringSetter, UserPassword> {

    public constructor(props: StringSetter) {
        super(props);
        this.state = {
            password: ''
        };
        this.handlePassword = this.handlePassword.bind(this);
    }

    private handlePassword = async (event: ChangeEvent<HTMLInputElement>): Promise<void> => {
        await this.setState((): UserPassword => ({
            password: event.target.value
        }));
        this.props.setValue(this.state.password);
    }

    public render = (): JSX.Element => {
        return (
            <div>

                <label htmlFor="userPassword" className="text-sm font-bold text-gray-600 block">
                    Password
                </label>

                <input 
                    id="userPassword" 
                    name="password" 
                    type="password" 
                    value={ this.state.password } 
                    className="w-full p-2 border border-gray-300 rounded mt-1" 
                    placeholder="Password" 
                    onChange={ this.handlePassword } 
                    required />

            </div>
        );
    }

}

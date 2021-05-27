import { Component, ChangeEvent } from 'react';

import { UserUsername } from '../../../typings/user';
import { StringSetter } from '../../../typings/accesors';

export default class InputUsername extends Component<StringSetter, UserUsername> {

    constructor(props: StringSetter) {
        super(props);
        this.state = {
            username: ''
        };
        this.handleUsername = this.handleUsername.bind(this);
    }
    private handleUsername = async (event: ChangeEvent<HTMLInputElement>): Promise<void> => {
        await this.setState((): UserUsername => ({
            username: event.target.value
        }));
        this.props.setValue(this.state.username)
    }

    public render = (): JSX.Element => {
        return (
            <div>

                <label htmlFor="userUsername" className="text-sm font-bold text-gray-600 block">
                    Username
                </label>

                <input 
                    id="userUsername"
                    name="username" 
                    type="text" 
                    value={ this.state.username } 
                    className="w-full p-2 border border-gray-300 rounded mt-1" 
                    placeholder="Username" 
                    onChange={ this.handleUsername }
                    required />

            </div>
        );
    }

}

import { Component } from 'react';
// import { UserPassword } from '../../../typings/user';

interface SimpleText {
    textValue: string;
}

export default class Button extends Component<SimpleText, SimpleText> {

    public constructor(props: SimpleText) {
        super(props);
        this.state = {
            textValue: this.props.textValue
        };
    }

    public render = (): JSX.Element => {
        return (

            <div className="flex items-center justify-between">
                <button 
                    className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 rounded-md text-white text-sm" 
                >
                    { this.state.textValue }
                </button>
            </div>

        );
    }

}

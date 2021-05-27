import { Component } from 'react';
import { RouteComponentProps } from 'react-router-dom';

import Navbar from '../navigation/Navbar';

import Empty from '../../typings/empty';

export default class Welcome extends Component<RouteComponentProps<Empty>, Empty> {

    public render = (): JSX.Element => {
        return (
            <div>
                <Navbar pathName={this.props.location.pathname} />
            </div>
        );
    }

}

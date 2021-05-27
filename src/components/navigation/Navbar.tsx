import { Component } from 'react';
import { Link } from 'react-router-dom';

import Empty from '../../typings/empty';

import logoWhite from '../../assets/img/logos/logo.svg';
import '../../assets/css/futuraFonts.css';

interface PathName {
    pathName: string;
}

export default class Navbar extends Component<PathName, Empty> {

    private readonly linkToLogin: JSX.Element = <div className="w-1/2 flex justify-end">
        <div className="self-center font-light text-sm">
            <Link to="/login" >
                Iniciar sesión
            </Link>
        </div>
    </div>;

    public render = (): JSX.Element => {
        return (
            <nav className="sticky top-0 w-full h-14 overflow-hidden bg-white border-b border-gray-300">
                <div className="w-5/6 h-full mx-auto flex">
                    <div className="w-1/2 flex">
                        <div className="self-center">
                            <img src={ logoWhite } alt="Grupo CCIMA" className="h-8" />
                        </div>
                    </div>
                    { this.props.pathName !== '/login' &&  this.linkToLogin }
                </div>
            </nav>
        );
    }

}

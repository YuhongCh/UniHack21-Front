import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link} from 'react-router-dom';
import {HeaderWrapper} from '../style';

export default function header(){
    return (
        <Router>
            <HeaderWrapper>
                <nav>
                    <ul>
                        <li><Link to='/'> Home </Link></li>
                        <li><Link to="/square"> Square </Link></li>
                        <li><Link to="/data_map"> Map </Link></li>
                        <li><Link to="/user"> Peronsal Info </Link></li>
                        <li><Link to="/mentor"> Match Mentor </Link></li>
                        <li><Link to='/room'> Room </Link></li>
                    </ul>
                </nav>
            </HeaderWrapper>
        </Router>
    );
}
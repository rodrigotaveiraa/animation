import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom';

import App from './App';
import Hello from './Hello';
import SemRota from './SemRota';

const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={App} />
                <Route path="/login" component={Hello} />
                <Route path="*" component={SemRota} />
            </Switch>
        </Router>
    )
}

export default Routes;
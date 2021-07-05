import FooterContainer from './containers/footer'
import {GlobalStyle} from './globalStyles.js'
import Navbar from './components/Navbar/Navbar'

export default function App() {

    return (
        <div>
            <Navbar />
            <div style={{height:'700px', background: "#2b2a5a"}}>
            </div>
            <FooterContainer />
        </div>
    )
}
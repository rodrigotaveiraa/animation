import VerifyAnimation from './animation/Verify';
import './App.scss';


const Hello = () => {
    const redirecionarLogin = () => {
        setInterval(() => window.location.href = 'http://localhost:3000', 1000)
    }

    return (
        <div className="animation">
            <VerifyAnimation />
            {redirecionarLogin()}
        </div>
    )
}

// background: linear-gradient(90deg,#7500DB,#9844E1);

export default Hello;
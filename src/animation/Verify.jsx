import { useState } from 'react';
import Lottie from 'react-lottie';
import animationData from './lf30_editor_n5vh9goh.json'

const VerifyAnimation = () => {
    const [state, setState] = useState({isStopped: false, isPaused: false})

    const defaultOptions = {
        loop: false,
        autoplay: true, 
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
    };
    return (
        <div>
            <Lottie 
                options={defaultOptions}
                height={250}
                width={250}
                isStopped={state.isStopped}
                isPaused={state.isPaused} 
            />
        </div>
    )
}

export default VerifyAnimation;
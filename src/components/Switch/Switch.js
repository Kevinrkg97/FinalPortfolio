import React, { useState } from 'react';
import {
    SwitchContainer,
    SwitchWrapper,
    SwitcBGC,
    ButtonSwitch
} from './Switch.elements';
import {BsSun, BsMoon} from 'react-icons/bs';


const Switch = (props) =>{

    const [position, setPosition] = useState(false);
    let iconTheme = props.theme === 'light' ? <BsSun /> : <BsMoon />

    const changeMode = () => {
        if(props.theme === 'light'){
            props.setTheme('dark');
            changePosition();
        }else{
            props.setTheme('light');
            changePosition();
        }
    }

    const changePosition = () =>{
        setPosition(!position);
    }

    return (
        <>
            <SwitchContainer>
                <SwitchWrapper>
                    <SwitcBGC>
                        <ButtonSwitch onClick={() => changeMode()} position = {position} >
                            {iconTheme}
                        </ButtonSwitch>
                    </SwitcBGC>
                </SwitchWrapper>
            </SwitchContainer>
        </>
    )
}

export default Switch;
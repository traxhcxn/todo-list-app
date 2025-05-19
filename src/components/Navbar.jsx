import React from 'react'
import logo from '/logo.png'
import { AppButton } from './Buttons'

function Navbar({ onResetButtonClick }) {
    return (
        <div className='px-5 flex justify-between'>
            <img
                src={logo}
                className='size-16'
            />
            <AppButton
                className={'py-5'}
                buttonText={'Reset All'}
                onClick={onResetButtonClick}
            />
        </div>
    )
}

export default Navbar
import React, { useState } from 'react'
import { AppButton } from '../components/Buttons'
import ListContainer from './ListContainer'

function MainContainer({ lists, setLists }) {

    const onCreateButtonClick = () => {
        const newList = {
            id: Date.now(),
            title: ""
        }
        setLists((prevLists) => [...prevLists, newList])
    }

    return (
        <div className='pt-10 flex flex-col items-center'>
            <AppButton
                buttonText={'Create New List'}
                onClick={onCreateButtonClick}
            />
            {lists.map((list) => (
                <div key={list.id} className='relative'>
                    <ListContainer />
                </div>
            ))}
        </div>
    )
}

export default MainContainer
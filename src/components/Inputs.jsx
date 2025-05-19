import React from 'react'
import { CircleCheck } from 'lucide-react'
import { IconButton } from './Buttons'

export const TitleInput = ({ value, onValueChange, onTitleButtonClick }) => {
    return (
        <div className='flex items-center gap-3'>
            <input
                type='text'
                className='border border-[#afafaf] rounded-md h-8 text-sm px-3'
                placeholder='Enter List Title'
                value={value}
                onChange={onValueChange}
            />
            <IconButton
                Icon={CircleCheck}
                stroke={"#198ffb"}
                size={16}
                buttonText={'Save'}
                onClick={onTitleButtonClick}
            />
        </div>
    )
}

export const TaskInput = ({value, onValueChange, onTaskButtonClick}) => {
    return (
        <div className='flex items-center gap-3'>
            <input
                type='text'
                className='border border-[#afafaf] rounded-md h-8 text-sm px-3'
                value={value}
                onChange={onValueChange}
            />
            <IconButton
                Icon={CircleCheck}
                stroke={"#198ffb"}
                size={16}
                buttonText={'Save'}
                onClick={onTaskButtonClick}
            />
        </div>
    )
}
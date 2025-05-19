import React from 'react'

export const AppButton = ({ className, buttonText, onClick }) => {
	return (
		<div className={className}>
			<button className='bg-[#7EC0FD] px-5 py-2 font-semibold text-[#353535] rounded-md cursor-pointer shadow-md' onClick={onClick}>{buttonText}</button>
		</div>
	)
}

export const IconButton = ({ className, Icon, color, size, stroke, strokeWidth, onClick, buttonText }) => {
	return (
		<div className={className}>
			<button className='py-2 cursor-pointer flex items-center gap-1 bg-[#cee7fe] w-max px-3 rounded-md' onClick={onClick}>
				<Icon
					color={color}
					size={size}
					stroke={stroke}
					strokeWidth={strokeWidth}
				/>
				<p className='text-[#353535] text-xs'>{buttonText}</p>
			</button>
		</div>
	)
}

export const IconOnlyButton = ({ Icon, className, color, size, stroke, strokeWidth, onClick }) => {
	return (
		<div className={className}>
			<button onClick={onClick} className='cursor-pointer'>
				<Icon
					color={color}
					size={size}
					stroke={stroke}
					strokeWidth={strokeWidth}
				/>
			</button>
		</div>
	)
}
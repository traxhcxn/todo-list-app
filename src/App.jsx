import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import MainContainer from './containers/MainContainer'

function App() {

	const [lists, setLists] = useState([])

	const onResetAllButtonClick = () => {
		setLists([])
	}

	return (
		<div className='h-screen bg-[#F5FAFF]'>
			<Navbar onResetButtonClick={onResetAllButtonClick} />
			<MainContainer lists={lists} setLists={setLists} />
		</div>
	)
}

export default App
import { useState } from 'react'
import Header from '@/components/Header/Header'
import Main from '@/components/Main/Main'
import Skills from '@/components/Skills/Skills'
import Footer from '@/components/Footer'

function App() {
	const [isMobMenuActive, setIsMobMenuActive] = useState(false)
	const [marginTop, setMarginTop] = useState('')

	return (
		<>
			<Header
				isMobMenuActive={isMobMenuActive}
				setIsMobMenuActive={setIsMobMenuActive}
				setMarginTop={setMarginTop}
			/>

			<div
				style={{ marginTop: marginTop + 'px' }}
				className=" mx-auto max-w-7xl px-4 "
			>
				<Main />
				<Skills />
				{/* <Footer /> */}
			</div>
		</>
	)
}

export default App

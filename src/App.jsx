import Header from '@/components/Header/Header'
import Footer from '@/components/Footer'
import Main from '@/components/Main/Main'
import { useEffect, useLayoutEffect, useState } from 'react'

function App() {
	const [isMobMenuActive, setIsMobMenuActive] = useState(false)
	const [marginTop, setMarginTop] = useState('')

	useEffect(() => {
		document.body.classList.toggle('scroll-hidden')
		document.documentElement.classList.toggle('scroll-hidden')
	}, [isMobMenuActive])

	useLayoutEffect(() => {}, [])

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
				<Footer />
			</div>
		</>
	)
}

export default App

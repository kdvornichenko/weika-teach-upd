import mainGirlSolid from '@/assets/main-girl/main-girl-solid.svg'
import mainMapAnimated from '@/assets/main-girl/main-map_animated.svg'
import { useEffect, useState } from 'react'

const Girl = () => {
	const [isGirlHidden, setIsGirlHidden] = useState(true)

	useEffect(() => {
		const timer = setTimeout(() => {
			setIsGirlHidden(!isGirlHidden)
		}, 3200)

		return () => {
			clearTimeout(timer)
		}
	}, [])

	return (
		<div className="relative h-80 w-80 min-[425px]:h-[420px] min-[425px]:w-[420px] sm:w-1/2">
			<img
				className="absolute top-0 left-0 right-0 bottom-0 z-0 m-auto"
				src={mainMapAnimated}
				alt="Map"
			/>

			<img
				className={
					(isGirlHidden ? 'opacity-0' : 'opacity-100') +
					' absolute top-0 left-0 right-0 bottom-0 z-20 m-auto transition-opacity duration-500'
				}
				src={mainGirlSolid}
				alt="Girl"
			/>
		</div>
	)
}

export default Girl

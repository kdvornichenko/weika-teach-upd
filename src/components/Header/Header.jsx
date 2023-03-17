import Burger from '@/ui/Burger/Burger'
import Button from '@/ui/Button'
import Logo from '../Logo'
import Nav from './Nav'

import '@/ui/Burger/Burger.scss'
import { useLayoutEffect, useRef } from 'react'

const Header = ({ isMobMenuActive, setIsMobMenuActive, setMarginTop }) => {
	const ref = useRef()

	useLayoutEffect(() => {
		setMarginTop(ref.current.offsetHeight)
	}, [])

	return (
		<>
			<header
				ref={ref}
				className={
					(isMobMenuActive ? '' : 'backdrop-blur-xl') +
					' fixed top-0 z-[70] w-full py-3'
				}
			>
				<div className="mx-auto flex max-w-7xl items-center justify-between px-4">
					<Logo />
					<nav className="hidden sm:block">
						<ul className="text-main flex gap-3 md:gap-8 xl:gap-10">
							<Nav color="main" />
						</ul>
					</nav>
					<Button
						className=" hidden h-10 w-32 rounded-md text-base sm:block md:h-12 md:w-40 lg:h-16 lg:w-52 lg:text-xl xl:h-[70px] xl:w-56 xl:text-2xl"
						text="Let’s Talk"
						isSolid={true}
					/>

					<Burger
						isMobMenuActive={isMobMenuActive}
						setIsMobMenuActive={setIsMobMenuActive}
					/>
				</div>
			</header>

			{/* Mobile menu */}
			<div className="sm:hidden">
				<div
					className={
						(isMobMenuActive ? 'z-[60] opacity-100' : '-z-10 opacity-0') +
						' fixed top-0 left-0 h-screen w-screen backdrop-blur-xl'
					}
				></div>
				<div
					className={
						(isMobMenuActive ? 'right-0' : '-right-1/2') +
						' bg-main fixed top-0 z-[60] flex h-screen w-1/2 flex-col justify-center pr-5 transition-all duration-300'
					}
				>
					<nav className="block w-fit self-end sm:hidden">
						<ul className="flex flex-col items-end gap-3 text-right">
							<Nav />
						</ul>
					</nav>
					<Button
						className=" mt-5 -mr-0.5 h-10 w-32 self-end rounded-md text-base sm:block md:h-12 md:w-40 lg:h-16 lg:w-52 lg:text-xl xl:h-[70px] xl:w-56 xl:text-2xl"
						text="Let’s Talk"
						isSolid={false}
					/>
				</div>
			</div>
		</>
	)
}

export default Header

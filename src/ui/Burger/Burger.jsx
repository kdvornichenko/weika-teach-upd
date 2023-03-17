const Burger = ({ isMobMenuActive, setIsMobMenuActive }) => {
	const onBurgerClick = () => {
		setIsMobMenuActive(!isMobMenuActive)
		document.documentElement.classList.toggle('scroll-hidden')
	}

	return (
		<div
			className={
				'menu-icon-svg sm:hidden ' + (isMobMenuActive ? 'is-open' : '')
			}
		>
			<svg width="1000px" height="1000px">
				<path
					className="path1"
					d="M 300 400 L 700 400 C 900 400 900 750 600 850 A 400 400 0 0 1 200 200 L 800 800"
				></path>
				<path className="path2" d="M 300 500 L 700 500"></path>
				<path
					className="path3"
					d="M 700 600 L 300 600 C 100 600 100 200 400 150 A 400 380 0 1 1 200 800 L 800 200"
				></path>
			</svg>
			<button className="menu-icon-trigger" onClick={onBurgerClick}></button>
		</div>
	)
}

export default Burger

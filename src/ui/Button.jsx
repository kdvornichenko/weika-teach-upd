const Button = ({ text, isSolid, className }) => {
	const solidBtn =
		'bg-main hover:text-main text-white hover:bg-white hover:border-main'
	const outlineBtn =
		'text-main hover:bg-main bg-white hover:text-white hover:border-white'

	return (
		<button
			className={
				(isSolid ? solidBtn : outlineBtn) +
				' border-main border-2 transition-all duration-300 ' +
				className
			}
		>
			{text}
		</button>
	)
}

export default Button

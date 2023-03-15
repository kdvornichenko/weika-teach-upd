const Button = ({ text, isSolid, styles }) => {
	const solidBtn = 'bg-main hover:text-main text-white hover:bg-white'
	const outlineBtn = 'text-main hover:bg-main bg-white hover:text-white'

	return (
		<button
			className={
				isSolid
					? solidBtn
					: outlineBtn +
					  ' border-main border-2 transition-all duration-200' +
					  ' ' +
					  styles
			}
		>
			{text}
		</button>
	)
}

export default Button

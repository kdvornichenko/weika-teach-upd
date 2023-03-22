import { linksData } from '@/data/navData'

const Nav = ({ color }) => {
	return (
		<>
			{' '}
			{linksData.map((item) => (
				<li className="w-fit" key={item.text}>
					<a
						className={
							(color === 'main'
								? 'before:bg-main text-main'
								: 'text-white before:bg-white') +
							' relative block font-medium duration-200 before:absolute before:bottom-0 before:left-0 before:h-0.5 before:w-0 before:transition-all hover:before:w-full md:text-base lg:text-xl'
						}
						href={item.link}
					>
						{item.text}
					</a>
					<span className="text-main bg-main"></span>
				</li>
			))}
		</>
	)
}

export default Nav

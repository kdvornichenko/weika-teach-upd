import Button from '@/ui/Button'
import Logo from './Logo'

const Header = () => {
	const linksData = [
		{
			link: '#home',
			text: 'Home',
		},
		{
			link: '#skills',
			text: 'Skills',
		},
		{
			link: '#about',
			text: 'About Me',
		},
		{
			link: '#contact',
			text: 'Contact',
		},
	]

	return (
		<div className="flex items-center justify-between">
			<Logo />
			<nav>
				<ul className="flex gap-10">
					{linksData.map((item) => (
						<li key={item.text}>
							<a
								className="text-main before:bg-main relative block text-xl font-medium duration-200 before:absolute before:bottom-0 before:left-0 before:h-0.5 before:w-0 before:transition-all hover:before:w-full"
								href={item.link}
							>
								{item.text}
							</a>
						</li>
					))}
				</ul>
			</nav>
			<Button
				styles="h-[70px] w-56 rounded-md text-2xl"
				text="Let’s Talk"
				isSolid={false}
			/>
		</div>
	)
}

export default Header

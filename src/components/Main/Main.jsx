import Button from '@/ui/Button'
import BulbIcon from './BulbIcon'
import Girl from './Girl'

const Main = () => {
	return (
		<section className="flex flex-col-reverse items-center sm:mt-5 sm:flex-row sm:gap-5 md:mt-14 lg:mt-16 xl:mt-14">
			<div className="w-96 text-center sm:w-1/2 sm:text-left">
				<div className="flex flex-col-reverse items-center sm:flex-row sm:gap-10">
					<h1 className="text-2xl font-semibold sm:text-4xl lg:text-5xl xl:text-6xl xl:leading-tight">
						Learn <br className="hidden sm:block" /> English{' '}
						<br className="hidden sm:block" /> For IT
					</h1>
					<BulbIcon />
				</div>
				<div className="text-secondary mt-5 text-lg sm:mt-6 lg:mt-7 lg:text-xl xl:mt-10 xl:text-2xl">
					Learn English with me and become confident at work within 3 month
				</div>
				<ul className="mt-2 flex justify-center md:justify-start lg:mt-4 xl:mt-7">
					{[
						'Interactive platform',
						'Practise regularly',
						'Achieve YOUR goals',
					].map((item) => (
						<li
							key={item}
							className="w-24 text-base sm:w-28 sm:text-lg md:w-28 lg:w-32 lg:text-xl xl:w-36 xl:text-2xl"
						>
							{item}
						</li>
					))}
				</ul>
				<Button
					isSolid={true}
					text="Get Started"
					className="mt-7 h-14 w-72 rounded-lg text-base sm:h-16 sm:w-60	sm:text-lg md:h-20 md:w-72 md:text-xl xl:mt-14 xl:h-24 xl:w-96 xl:text-3xl"
				/>
			</div>
			<Girl />
		</section>
	)
}

export default Main

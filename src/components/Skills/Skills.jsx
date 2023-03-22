import { cardsData } from '@/data/cardsData'
import Card from './Card'

const Skills = () => {
	return (
		<section id="skills" className="xl:mt-36">
			<h2>Skills</h2>
			<div className="grid h-[894px] grid-cols-3 grid-rows-[60%_40%] gap-2.5 xl:mt-24">
				{cardsData.map((item) => (
					<Card
						key={item.title}
						img={item.img}
						title={item.title}
						description={item.description}
					/>
				))}
			</div>
		</section>
	)
}

export default Skills

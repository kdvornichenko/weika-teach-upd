import Button from '@/ui/Button'

const Card = ({ img, title, description }) => {
	return (
		<div className="bg-cardBg child(2):pt-6 flex-row-reverse rounded-lg first:col-[1_/span_1] first:row-[1_/_span_2] first:pt-9 last:col-[2_/span_2] last:row-[2_/span_1] last:flex last:items-center last:gap-16 xl:p-9 ">
			<img src={img} alt={title} className="m-auto" />
			<div>
				<h3 className="leading-[80px]">{title}</h3>
				<p className="text-secondary ">{description}</p>
				<Button
					text="Learn more"
					isSolid={false}
					className="mt-8 h-14 w-56 rounded-md"
				/>
			</div>
		</div>
	)
}

export default Card

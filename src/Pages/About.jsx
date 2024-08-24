import { formatNumber } from "../utils/helpers";

const analytics = [
	{
		id: 1,
		value: 2.5,
		title: "Years of experience",
	},
	{
		id: 2,
		value: 30,
		title: "Projects work",
	},
	{
		id: 3,
		value: 1520,
		title: "Positive reviews",
	},
	{
		id: 4,
		value: 2035,
		title: "customers",
	},
];

function AnalyticsCard({ analytic }) {
	return (
		<div className='rounded-lg p-6 bg-[var(--bg-color-200)]'>
			<h2 className='text-2xl font-extrabold mb-4 text-[var(--text-color)]'>
				{formatNumber(analytic.value)}
			</h2>
			<p className='font-semibold text-lg'>{analytic.title}</p>
		</div>
	);
}

function About() {
	return (
		<main className='bg-[var(--bg-color-200)] overflow-hidden'>
			<div>
				<div className='flex flex-wrap p-7 gap-16'>
					<div className='text-center w-full md:w-1/2 text-[var(--text-color)] md:text-left'>
						<h3 className='font-bold text-[var(--yellow-primary)] mb-2'>
							How it started
						</h3>
						<h2 className='font-bold text-2xl text-[var(--text-color)] mb-4'>
							Our Goal is to transform your Ideas of Business into
							Reality.
						</h2>
						<p className='text-md'>
							FluxDevs is a cutting-edge software development
							startup dedicated to creating bespoke software
							solutions that drive business growth and innovation.
							By leveraging the latest technologies and agile
							methodologies, CodeWave Innovations aims to help
							companies across various industries transform their
							operations and enhance their digital presence.
						</p>
					</div>
					<div className='w-full md:w-1/2 rounded-md overflow-hidden shadow-md mb-6'>
						<img
							src='discussion_group.jpeg'
							alt='discussion group'
							className='object-fit'
						/>
					</div>
				</div>

				<div className='flex flex-wrap gap-6'>
					{analytics.map((analytic) => (
						<AnalyticsCard
							analytic={analytic}
							key={analytic.id}
						/>
					))}
				</div>
			</div>
		</main>
	);
}
export default About;

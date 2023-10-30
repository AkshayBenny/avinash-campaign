import Image from 'next/image'

export default function Home() {
	return (
		<main className='bg-[#e5f0f8] flex min-h-screen flex-col items-center justify-center p-6 lg:p-24 ${inter.className}'>
			<div className='flex-col lg:flex lg:flex-row items-center justify-center'>
				<Image
					src='/avinash-2.jpeg'
					alt='Picture of Avinash'
					width={182}
					height={182}
					className='w-full lg:w-fit'
				/>
				<div className='h-full w-full '>
					<h1 className='text-[#0065bd] font-black px-4 py-3 text-5xl uppercase'>
						Avinsah Ethiraj
					</h1>
					<p className='bg-[#d32205] tracking-wider uppercase px-4 py-3'>
						For Dorm Rep
					</p>
					<div className='bg-[#0065bd] px-4 py-3 h-full text-lg'>
						<p>Campaigning for a Better Halls Experience!</p>
					</div>
				</div>
			</div>
			<p className='text-gray-900 mt-12 text-center leading-7 tracking-widest'>
				Hello, Strathclyde University students! I&apos;m excited to
				announce my candidacy for the position of Halls Rep, a role
				dedicated to enhancing the lives of students residing in
				university halls and private accommodations. As your Halls Rep,
				I will be your dedicated spokesperson, representing your needs
				and concerns directly to the Vice President Welfare and
				collaborating with the Student Exec on impactful campaigns.
				Together, let&apos;s create a vibrant, inclusive, and supportive
				living environment for all halls residents. Vote for change,
				vote for a better halls experience!
			</p>

			<a
				className='w-full lg:w-fit'
				href='https://www.strathunion.com/elections/candidates/36/#:~:text=honorarium%20of%20%C2%A3600.-,Avinash%20Ethiraj,-Gayatri%20Vijay%20Kale'>
				<button className='uppercase bg-[#0065bd] px-5 py-4 mt-12 w-full'>
					Vote now !
				</button>
			</a>
		</main>
	)
}

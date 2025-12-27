import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import Image from 'next/image'

export default function AboutPage() {
	return (
		<div className='min-h-screen bg-gray-50'>
			<Navbar />
			
			{/* About Us Section */}
			<div className='container mx-auto px-4 py-16'>
				<div className='flex flex-col lg:flex-row items-center gap-12'>
					{/* Left Side - Content */}
					<div className='lg:w-[60%] space-y-6'>
						<h1 className='text-4xl font-bold text-[#0A1E5B] mb-4'>
							About TechHub
						</h1>
						<p className='text-gray-700 text-lg leading-relaxed'>
							Welcome to TechHub, your premier destination for high-quality laptops and computer accessories. 
							We are committed to providing the latest technology solutions to meet all your computing needs.
						</p>
						<p className='text-gray-700 text-lg leading-relaxed'>
							Founded with a passion for technology and customer satisfaction, TechHub has grown to become 
							a trusted name in the laptop retail industry. We offer a carefully curated selection of laptops 
							from leading brands including Dell, HP, Lenovo, ASUS, MSI, and more.
						</p>
						<h2 className='text-2xl font-semibold text-[#0A1E5B] mt-8'>
							Our Mission
						</h2>
						<p className='text-gray-700 text-lg leading-relaxed'>
							Our mission is to empower individuals and businesses with the right technology tools. 
							Whether you're a student, professional, gamer, or business owner, we have the perfect 
							laptop solution for you. We pride ourselves on offering competitive prices, excellent 
							customer service, and expert advice.
						</p>
						<h2 className='text-2xl font-semibold text-[#0A1E5B] mt-8'>
							Why Choose Us?
						</h2>
						<ul className='space-y-3 text-gray-700 text-lg'>
							<li className='flex items-start'>
								<span className='text-orange-500 mr-3 text-xl'>✓</span>
								<span>Wide selection of laptops from top brands</span>
							</li>
							<li className='flex items-start'>
								<span className='text-orange-500 mr-3 text-xl'>✓</span>
								<span>Competitive pricing and special offers</span>
							</li>
							<li className='flex items-start'>
								<span className='text-orange-500 mr-3 text-xl'>✓</span>
								<span>Expert customer support and guidance</span>
							</li>
							<li className='flex items-start'>
								<span className='text-orange-500 mr-3 text-xl'>✓</span>
								<span>Secure online shopping experience</span>
							</li>
							<li className='flex items-start'>
								<span className='text-orange-500 mr-3 text-xl'>✓</span>
								<span>Fast and reliable shipping</span>
							</li>
							<li className='flex items-start'>
								<span className='text-orange-500 mr-3 text-xl'>✓</span>
								<span>Warranty and after-sales support</span>
							</li>
						</ul>
					</div>

					{/* Right Side - Image */}
					<div className='lg:w-[40%]'>
						<div className='relative w-full h-[600px] rounded-2xl overflow-hidden shadow-2xl'>
							<Image
								src='https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&auto=format&fit=crop'
								alt='About TechHub'
								fill
								className='object-cover'
								priority
							/>
						</div>
					</div>
				</div>

				{/* Additional Info Section */}
				<div className='mt-16 grid md:grid-cols-3 gap-8'>
					<div className='bg-white p-8 rounded-lg shadow-md text-center'>
						<div className='w-16 h-16 bg-[#0A1E5B] rounded-full flex items-center justify-center mx-auto mb-4'>
							<span className='text-white text-2xl font-bold'>5+</span>
						</div>
						<h3 className='text-xl font-semibold text-[#0A1E5B] mb-2'>Years of Experience</h3>
						<p className='text-gray-600'>Serving customers with quality products and services</p>
					</div>

					<div className='bg-white p-8 rounded-lg shadow-md text-center'>
						<div className='w-16 h-16 bg-[#0A1E5B] rounded-full flex items-center justify-center mx-auto mb-4'>
							<span className='text-white text-2xl font-bold'>1K+</span>
						</div>
						<h3 className='text-xl font-semibold text-[#0A1E5B] mb-2'>Happy Customers</h3>
						<p className='text-gray-600'>Trusted by thousands of satisfied clients</p>
					</div>

					<div className='bg-white p-8 rounded-lg shadow-md text-center'>
						<div className='w-16 h-16 bg-[#0A1E5B] rounded-full flex items-center justify-center mx-auto mb-4'>
							<span className='text-white text-2xl font-bold'>500+</span>
						</div>
						<h3 className='text-xl font-semibold text-[#0A1E5B] mb-2'>Products Available</h3>
						<p className='text-gray-600'>Wide range of laptops and accessories</p>
					</div>
				</div>
			</div>

			<Footer />
		</div>
	)
}

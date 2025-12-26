'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { ShoppingCart, User, Search } from 'lucide-react'

export function Navbar() {
	const [searchQuery, setSearchQuery] = useState('')
	const [selectedCategory, setSelectedCategory] = useState('All Categories')

	return (
		<nav className='bg-white border-b border-gray-200 sticky top-0 z-50'>
			<div className='w-full px-4 sm:px-6 lg:px-8'>
				<div className='flex items-center justify-between h-20'>
					{/* Logo */}
					<Link href='/' className='flex items-center gap-2 flex-shrink-0'>
						<div className='w-10 h-10 bg-[#0A1E5B] rounded-lg flex items-center justify-center'>
							<span className='text-white font-bold text-lg'>T</span>
						</div>
						<span className='text-xl font-bold text-gray-900'>
							TechHub
						</span>
					</Link>

					{/* Search Bar */}
					<div className='flex-1 max-w-2xl mx-8 hidden md:flex'>
						<div className='relative w-full flex items-center border-2 border-blue-900 rounded-full overflow-hidden bg-white'>
							<Input
								type='text'
								placeholder='Search Your Products'
								value={searchQuery}
								onChange={(e) => setSearchQuery(e.target.value)}
								className='flex-1 pl-6 pr-4 h-10 border-0 bg-transparent text-gray-900 placeholder:text-gray-400 focus-visible:ring-0 focus-visible:ring-offset-0'
							/>
							<div className='flex items-center'>
								<select
									value={selectedCategory}
									onChange={(e) => setSelectedCategory(e.target.value)}
									className='px-4 h-10 bg-transparent text-gray-700 font-medium cursor-pointer border-0 outline-none appearance-none pr-8 text-sm'
								>
									<option>All Categories</option>
									<option>Laptops</option>
									<option>Gaming Laptops</option>
									<option>Business Laptops</option>
									<option>Ultrabooks</option>
									<option>Accessories</option>
								</select>
								<svg className='w-4 h-4 text-gray-600 absolute right-[110px] pointer-events-none' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
									<path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M19 9l-7 7-7-7' />
								</svg>
							</div>
							<button className='bg-orange-500 hover:bg-orange-600 text-white px-6 h-10 flex items-center justify-center transition-colors'>
								<Search className='w-5 h-5' />
							</button>
						</div>
					</div>

					{/* Right Actions */}
					<div className='flex items-center gap-6'>
						<Link
							href='/auctions'
							className='text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors'
						>
							Auctions
						</Link>
						<Link
							href='/cart'
							className='relative text-gray-700 hover:text-gray-900 transition-colors'
						>
							<ShoppingCart className='w-6 h-6' />
							<span className='absolute -top-2 -right-2 w-5 h-5 bg-blue-600 text-white text-xs font-bold rounded-full flex items-center justify-center'>
								0
							</span>
						</Link>
						<Link
							href='/account'
							className='text-gray-700 hover:text-gray-900 transition-colors'
						>
							<User className='w-6 h-6' />
						</Link>
						<Link href='/login'>
							<Button 
								variant="outline"
								
								className='border-[#0A1E5B] text-[#0A1E5B] hover:[#0A1E5B]/90 rounded-lg h-10 px-6'
							>
								Sign In
							</Button>
						</Link>
						<Link href='/seller/dashboard'>
							<Button className='bg-[#0A1E5B] hover:bg-[#0A1E5B]/90 text-white rounded-lg h-10 px-6'>
								Sell Now
							</Button>
						</Link>
					</div>
				</div>
			</div>
		</nav>
	)
}

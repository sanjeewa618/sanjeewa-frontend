'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { ShoppingCart, User, Search } from 'lucide-react'

export function Navbar() {
	const [searchQuery, setSearchQuery] = useState('')

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
						<div className='relative w-full'>
							<Input
								type='text'
								placeholder='Search laptops, accessories...'
								value={searchQuery}
								onChange={(e) => setSearchQuery(e.target.value)}
								className='w-full pl-4 pr-10 h-10 rounded-lg border border-gray-300 bg-gray-50 text-gray-900 placeholder:text-gray-500'
							/>
							<button className='absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700'>
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

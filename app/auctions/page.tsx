import { Navbar } from '@/components/navbar'
import { ProductFilters } from '@/components/product-filters'
import { AuctionCard } from '@/components/auction-card'
import Link from 'next/link'

const auctionListings = [
  {
    id: '1',
    name: 'Dell XPS 15 Plus Premium Edition - Limited Time Auction',
    brand: 'Dell',
    image: '/placeholder.svg?key=1aqpe',
    currentBid: 1450,
    numberOfBids: 23,
    timeLeft: '2 hours left',
    rating: 4.8,
    seller: 'TechStore_Pro',
  },
  {
    id: '2',
    name: 'MacBook Pro 16" M2 Max - Rare Configuration Auction',
    brand: 'Apple',
    image: '/placeholder.svg?key=2bqpe',
    currentBid: 2100,
    numberOfBids: 45,
    timeLeft: '5 hours left',
    rating: 4.9,
    seller: 'AppleReseller',
  },
  {
    id: '3',
    name: 'Gaming Laptop Auction - RTX 4080 Beast Machine',
    brand: 'ASUS',
    image: '/placeholder.svg?key=3cqpe',
    currentBid: 1800,
    numberOfBids: 38,
    timeLeft: '8 hours left',
    rating: 4.7,
    seller: 'GamingGear_Co',
  },
  {
    id: '4',
    name: 'ThinkPad X1 Extreme Gen 5 - Business Laptop Auction',
    brand: 'Lenovo',
    image: '/placeholder.svg?key=4dqpe',
    currentBid: 1200,
    numberOfBids: 16,
    timeLeft: '1 day left',
    rating: 4.6,
    seller: 'BusinessTech',
  },
  {
    id: '5',
    name: 'MSI Creator Z16 HX - Content Creator Laptop Auction',
    brand: 'MSI',
    image: '/placeholder.svg?key=5eqpe',
    currentBid: 1650,
    numberOfBids: 32,
    timeLeft: '12 hours left',
    rating: 4.5,
    seller: 'CreatorHub',
  },
  {
    id: '6',
    name: 'HP Spectre x360 - Convertible Laptop Auction',
    brand: 'HP',
    image: '/placeholder.svg?key=6fqpe',
    currentBid: 950,
    numberOfBids: 12,
    timeLeft: '3 days left',
    rating: 4.4,
    seller: 'TechDeals247',
  },
]

export default function AuctionsPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-indigo-100 to-blue-200 dark:from-slate-900 dark:via-blue-950 dark:to-indigo-950 border-b border-blue-300 dark:border-blue-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Live Auction Events
          </h1>
          <p className="text-lg text-muted-foreground">
            Bid on exclusive and limited-edition laptops from top sellers
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Sidebar Filters */}
          <aside className="lg:w-64 flex-shrink-0">
            <ProductFilters />
          </aside>

          {/* Auctions Grid */}
          <div className="flex-1">
            <div className="mb-6 flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold text-foreground">Active Auctions</h2>
                <p className="text-sm text-muted-foreground">Showing {auctionListings.length} live auctions</p>
              </div>
              <select className="border border-border bg-background rounded-lg px-4 py-2 text-sm text-foreground cursor-pointer">
                <option>Ending Soon</option>
                <option>Newest</option>
                <option>Most Bids</option>
                <option>Highest Price</option>
                <option>Lowest Price</option>
              </select>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {auctionListings.map(auction => (
                <AuctionCard key={auction.id} {...auction} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-semibold mb-4">About TechHub Auctions</h3>
              <p className="text-sm opacity-80">Your premium destination for competitive bidding</p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Auction Info</h3>
              <ul className="space-y-2 text-sm opacity-80">
                <li><Link href="#" className="hover:opacity-100 transition-opacity">How Auctions Work</Link></li>
                <li><Link href="#" className="hover:opacity-100 transition-opacity">Bidding Tips</Link></li>
                <li><Link href="#" className="hover:opacity-100 transition-opacity">Seller List</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Customer Service</h3>
              <ul className="space-y-2 text-sm opacity-80">
                <li><Link href="#" className="hover:opacity-100 transition-opacity">Contact Us</Link></li>
                <li><Link href="#" className="hover:opacity-100 transition-opacity">FAQs</Link></li>
                <li><Link href="#" className="hover:opacity-100 transition-opacity">Support</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Legal</h3>
              <ul className="space-y-2 text-sm opacity-80">
                <li><Link href="#" className="hover:opacity-100 transition-opacity">Auction Terms</Link></li>
                <li><Link href="#" className="hover:opacity-100 transition-opacity">Privacy Policy</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-primary-foreground/20 pt-8 text-center text-sm opacity-80">
            <p>&copy; 2025 TechHub Auctions. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}

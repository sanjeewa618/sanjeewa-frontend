'use client'

import { useState, useEffect } from 'react'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import Image from 'next/image'
import { ShoppingCart, Star } from 'lucide-react'
import { useToast } from "@/components/ui/use-toast"

// Mock Data for Accessories
const ACCESSORIES = [
    {
        id: 101,
        name: "Logitech MX Master 3S",
        brand: "Logitech",
        price: 99.99,
        category: "Mice",
        rating: 4.8,
        reviews: 2450,
        image: "/placeholder.svg?key=mouse"
    },
    {
        id: 102,
        name: "Keychron K2 Pro Mechanical Keyboard",
        brand: "Keychron",
        price: 89.99,
        category: "Keyboards",
        rating: 4.9,
        reviews: 890,
        image: "/placeholder.svg?key=keyboard"
    },
    {
        id: 103,
        name: "Sony WH-1000XM5 Headphones",
        brand: "Sony",
        price: 348.00,
        category: "Headphones",
        rating: 4.7,
        reviews: 1200,
        image: "/placeholder.svg?key=headphones"
    },
    {
        id: 104,
        name: "Samsung T7 Shield 2TB SSD",
        brand: "Samsung",
        price: 159.99,
        category: "Storage",
        rating: 4.9,
        reviews: 3100,
        image: "/placeholder.svg?key=ssd"
    },
    {
        id: 105,
        name: "Razer DeathAdder V3 Pro",
        brand: "Razer",
        price: 149.99,
        category: "Mice",
        rating: 4.6,
        reviews: 950,
        image: "/placeholder.svg?key=razer"
    },
    {
        id: 106,
        name: "Anker USB-C Hub 7-in-1",
        brand: "Anker",
        price: 34.99,
        category: "Cables & Hubs",
        rating: 4.5,
        reviews: 5400,
        image: "/placeholder.svg?key=hub"
    }
]

export default function AccessoriesPage() {
    const [items, setItems] = useState(ACCESSORIES)
    const [sortBy, setSortBy] = useState('name')
    const { toast } = useToast()

    // Handle Sorting
    useEffect(() => {
        const sorted = [...items].sort((a, b) => {
            if (sortBy === 'name') {
                return a.name.localeCompare(b.name)
            } else if (sortBy === 'brand') {
                return a.brand.localeCompare(b.brand)
            } else if (sortBy === 'price-low') {
                return a.price - b.price
            } else if (sortBy === 'price-high') {
                return b.price - a.price
            }
            return 0
        })
        setItems(sorted)
    }, [sortBy])

    const addToCart = (product: any) => {
        const savedCart = localStorage.getItem('cart')
        let cart = savedCart ? JSON.parse(savedCart) : []

        // Check if item already exists
        const existingItemIndex = cart.findIndex((item: any) => item.id === product.id)

        if (existingItemIndex > -1) {
            cart[existingItemIndex].quantity += 1
        } else {
            cart.push({
                id: product.id,
                name: product.name,
                price: product.price,
                image: product.image,
                quantity: 1
            })
        }

        localStorage.setItem('cart', JSON.stringify(cart))

        // Dispatch custom event to update Navbar
        window.dispatchEvent(new Event('cart-updated'))

        toast({
            title: "Added to Cart",
            description: `${product.name} has been added to your cart.`,
        })
    }

    return (
        <main className="min-h-screen bg-background">
            <Navbar />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
                    <div>
                        <h1 className="text-3xl font-bold text-foreground">Computer Accessories</h1>
                        <p className="text-muted-foreground mt-1">Upgrade your setup with premium peripherals</p>
                    </div>

                    <div className="flex items-center gap-2">
                        <span className="text-sm font-medium text-muted-foreground">Sort by:</span>
                        <Select value={sortBy} onValueChange={setSortBy}>
                            <SelectTrigger className="w-[180px]">
                                <SelectValue placeholder="Sort by" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="name">Name (A-Z)</SelectItem>
                                <SelectItem value="brand">Brand (A-Z)</SelectItem>
                                <SelectItem value="price-low">Price: Low to High</SelectItem>
                                <SelectItem value="price-high">Price: High to Low</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {items.map((product) => (
                        <div key={product.id} className="bg-card border border-border rounded-lg overflow-hidden hover:shadow-lg transition-shadow group">
                            <div className="relative aspect-square bg-secondary">
                                <Image
                                    src={product.image}
                                    alt={product.name}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                                />
                            </div>

                            <div className="p-4">
                                <div className="text-xs text-muted-foreground mb-1">{product.brand}</div>
                                <h3 className="font-semibold text-foreground leading-tight mb-2 h-10 line-clamp-2">
                                    {product.name}
                                </h3>

                                <div className="flex items-center mb-3">
                                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                                    <span className="text-xs font-medium ml-1">{product.rating}</span>
                                    <span className="text-xs text-muted-foreground ml-1">({product.reviews})</span>
                                </div>

                                <div className="flex items-center justify-between mt-auto">
                                    <div className="text-lg font-bold text-primary">${product.price.toFixed(2)}</div>
                                    <Button
                                        size="sm"
                                        onClick={() => addToCart(product)}
                                        className="bg-[#0A1E5B] hover:bg-[#0A1E5B]/90 text-white"
                                    >
                                        <ShoppingCart className="w-4 h-4 mr-2" />
                                        Add
                                    </Button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <Footer />
        </main>
    )
}

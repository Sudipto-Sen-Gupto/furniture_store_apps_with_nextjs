"use client"

import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const featuredItems = [
  {
    id: 1,
    name: "Modern Sofa",
    price: "$299",
    image: "https://via.placeholder.com/300x200",
  },
  {
    id: 2,
    name: "Wooden Chair",
    price: "$99",
    image: "https://via.placeholder.com/300x200",
  },
  {
    id: 3,
    name: "Luxury Bed",
    price: "$499",
    image: "https://via.placeholder.com/300x200",
  },
  {
    id: 4,
    name: "Office Desk",
    price: "$199",
    image: "https://via.placeholder.com/300x200",
  },
]

export default function FeaturedPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-10">
      
      {/* Header */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold mb-2">Featured Products</h1>
        <p className="text-gray-500">
          Discover our most popular and trending items
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {featuredItems.map((item) => (
          <Card
            key={item.id}
            className="rounded-2xl shadow-sm hover:shadow-lg transition duration-300"
          >
            <CardContent className="p-0">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-48 object-cover rounded-t-2xl"
              />
              <div className="p-4">
                <h2 className="text-lg font-semibold">{item.name}</h2>
                <p className="text-gray-500">{item.price}</p>
              </div>
            </CardContent>

            <CardFooter className="p-4 pt-0">
              <Button className="w-full">Add to Cart</Button>
            </CardFooter>
          </Card>
        ))}
      </div>

    </div>
  )
}
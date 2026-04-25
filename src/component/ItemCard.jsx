"use client"

import Image from "next/image"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Star } from "lucide-react"


const ItemCard = ({datum}) => {
    const item=datum
  return (
    <Card className="group rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition duration-300 border">

      {/* Image */}
      <div className="relative w-full h-60 overflow-hidden">
        <Image
          src={item.image}
          alt={item.name}
          fill
          className="object-cover group-hover:scale-110 transition duration-500"
        />

        {/* Category Badge */}
        <span className="absolute top-3 left-3 bg-black/70 text-white text-xs px-3 py-1 rounded-full">
          {item.necessity_sector}
        </span>
      </div>

      {/* Content */}
      <CardContent className="p-4 space-y-2">
        <h2 className="text-lg font-semibold group-hover:text-indigo-600 transition">
          {item.name}
        </h2>

        <p className="text-sm text-gray-500 line-clamp-2">
          {item.description}
        </p>

        {/* Rating */}
        <div className="flex items-center gap-1 text-yellow-500">
          <Star className="w-4 h-4 fill-yellow-500" />
          <span className="text-sm text-gray-700">{item.rating}</span>
        </div>

        {/* Price */}
        <p className="text-xl font-bold text-indigo-600">
          ${item.price}
        </p>
      </CardContent>

      {/* Footer */}
      <CardFooter className="p-4 pt-0 flex gap-2">
        <Button className="w-full">Add to Cart</Button>
        <Button variant="outline" className="w-full">
          View
        </Button>
      </CardFooter>

    </Card>
  )
}

export default ItemCard
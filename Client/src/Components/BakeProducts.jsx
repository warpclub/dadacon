import React from 'react'

export default function BakeProducts() {
  return (
    <div>
      <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
  <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
      <h1 className="sm:text-3xl md:text-5xl font-medium title-font mb-2 text-gray-900">Our Products</h1>
      <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">
</p>
    </div>
    <div className="flex flex-wrap -m-4">
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a className="block relative h-48 rounded overflow-hidden">
          <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="https://dummyimage.com/420x260"/>
        </a>
        <div className="mt-4">
          <h2 className="text-gray-900 title-font text-lg font-medium">Chocolate Mousse Pudding</h2>
          <p className="mt-1">$16.00</p>
        </div>
      </div>
 

      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a className="block relative h-48 rounded overflow-hidden">
          <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="https://dummyimage.com/423x263"/>
        </a>
        <div className="mt-4">
          <h2 className="text-gray-900 title-font text-lg font-medium">Oreo Cake</h2>
          <p className="mt-1">$18.40</p>
        </div>
      </div>
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a className="block relative h-48 rounded overflow-hidden">
          <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="/donuts.jpg"/>
        </a>
        <div className="mt-4">
  
          <h2 className="text-gray-900 title-font text-lg font-medium">Chocolate Donuts</h2>
          <p className="mt-1">$16.00</p>
        </div>
      </div>

      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a className="block relative h-48 rounded overflow-hidden">
          <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="/Sourdough Bread.jpg"/>
        </a>
        <div className="mt-4">
          <h2 className="text-gray-900 title-font text-lg font-medium">Sourdough Bread</h2>
          <p className="mt-1">$18.40</p>
        </div>
      </div>
    </div>
  </div>
</section>
    </div>
  )
}

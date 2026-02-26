import React, { useState } from 'react'
import data from './data.json'

const List = () => {


  return (
    <>

      {
        data.map((phone, i) => {
          return (
            <div
              key={i}
              className="flex items-center justify-between w-[96%] ml-[2%] bg-white rounded-2xl shadow-md hover:shadow-2xl transition-shadow duration-300 p-6 gap-6 cursor-pointer hover:scale-[1.01] transform"
            >
              {/* 🖼️ Phone Image */}
              <div className="shrink-0 flex items-center justify-center w-[180px] h-[180px] bg-gray-100 rounded-xl overflow-hidden">
                <img
                  src={phone.image}
                  alt={phone.title}
                  className="object-contain w-full h-full transition-transform duration-300 hover:scale-105"
                />
              </div>

              {/* 📋 Phone Details */}
              <div className="flex flex-col grow">
                <h1 className="text-xl font-semibold text-gray-800 mb-2">{phone.title}</h1>

                <ul className="text-sm text-gray-600 space-y-1 mb-2">
                  {phone.details.map((el, ind) => (
                    <li key={ind} className="leading-tight">
                      • {el}
                    </li>
                  ))}
                </ul>

                <div className="flex items-center gap-2 mt-2">
                  <span className="text-yellow-500 font-semibold">⭐ {phone.rating}</span>
                  <span className="text-gray-500 text-sm">({phone.reviews})</span>
                </div>
              </div>

              {/* 💰 Price Section */}
              <div className="text-right">
                <h1 className="text-gray-400 line-through text-sm">{phone.originalPrice}</h1>
                <h2 className="text-green-600 text-2xl font-bold">{phone.price}</h2>
                <p className="text-xs text-gray-500 mt-1">Limited time offer</p>
              </div>
            </div>

          )
        })
      }

    </>
  )
}

export default List

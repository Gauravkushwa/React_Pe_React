import React from 'react'
import { useState } from 'react'

const Popup = ({ onClose, actionType }) => {

    return (
        <>
            <div className="fixed inset-0 flex items-center justify-center bg-amber-700 bg-opacity-50">
                <div className="bg-white rounded-2xl p-6 w-90 shadow-lg relative">
                    {/* Conditional UI based on action type */}
                    {actionType === "edit" && (
                        <>
                            <div className='grid py-5 px-2'>
                                <h2 className='text-[26px]'>⚠️ Edit </h2>
                                <h3 className='text-[20px] p-2'>Are Your sure Edit this</h3>
                                <div className='grid gap-2 grid-cols-2 px-5 py-2'>
                                    <button className='bg-green-900 text-white'>Yes</button>
                                    <button className='bg-red-600 text-white'>No</button>
                                </div>
                            </div>
                        </>
                    )}

                    {actionType === "delete" && (
                        <>
                            <div className='grid py-5 px-2'>
                                <h2 className='text-[26px]'>⚠️ Delete </h2>
                                <h3 className='text-[20px] p-2'>Are Your sure Delete this</h3>
                                <div className='grid gap-2 grid-cols-2 px-5 py-2'>
                                    <button className='bg-green-900 text-white'>Yes</button>
                                    <button className='bg-red-600 text-white'>No</button>
                                </div>
                            </div>
                        </>
                    )}

                    {/* Common Close Button */}
                    <button
                        onClick={onClose}
                        className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
                    >
                        ✕
                    </button>
                </div>
            </div>
        </>
    )
}

export default Popup



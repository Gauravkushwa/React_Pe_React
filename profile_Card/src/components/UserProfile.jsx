import React from 'react'
import Button from './Button'
// import { FaFacebook } from "react-icons/fa";
// import { FaTwitter } from "react-icons/fa";
// import { FaInstagramSquare } from "react-icons/fa";
// import { FaYoutube } from "react-icons/fa";

const UserProfile = () => {
    return (
        <>
            <div>
                <div className="container">
                    Profile Card UI Design
                </div>
                <div className=' h-[450px] w-[350px] bg-white-500 rounded-3xl overflow-hidden shadow-2md'>
                    <div className='w-full bg-blue-500 h-32  '>
                        <div className=' relative  w-[10rem] h-[10rem] '>
                            <img className="absolute translate-x-1/2 translate-y-1/5  h-full w-full rounded-full aspect-square object-cover p-[4px] border-4 bg-white border-blue-500" src="https://media.gettyimages.com/id/1471725712/photo/smiling-young-woman-taking-selfies-while-relaxing-at-home.jpg?s=612x612&w=gi&k=20&c=CTfYxYtpyGex-andy2azAf-7YJbE8h3Q1p2rWUVUpbg=" alt="" />
                        </div>
                    </div>
                    <div>
                        {/* <FaFacebook />
                        <FaTwitter />
                        <FaInstagramSquare />
                        <FaYoutube /> */}
                    </div>
                    <div className=' mt-[7rem] ml-[1rem] flex gap-[5rem]'>
                        <Button text="Message" />
                        <Button text="Subscribe" />
                    </div>
                </div>
            </div>

        </>
    )
}


export default UserProfile

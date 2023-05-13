
import React from 'react'
import Image from 'next/image'
import { personContact, personData } from '../person-info/page'
import { Linkedin, Twitter, Medium, Envelope, userImg } from '../icons'

export default function SideBar(){
  return (
    <>
      <div className='w-full md:w-5/6 bg-black text-white p-4 md:p-9 flex flex-col items-center justify-center'>
        <div className='pt-10 md:pt-30 pb-6 md:pb-20'>
          <Image
            src={userImg}
            alt='Profile image'
            width={200}
            height={200}
            className='rounded-full'
          />
          <div className='pt-4 md:pt-5 text-2xl md:text-3xl text-yellow-500 font-serif text-center'>
            {personData.name}
          </div>
        </div>
        <div className='text-center'>{personData.education}</div>
        <div className='flex pt-10 md:pt-16 space-x-3'>
          <div>
            <a href={personContact.contact[0]}>
              <Linkedin />
            </a>
          </div>
          <div>
            <a href={personContact.contact[1]}>
              <Twitter />
            </a>
          </div>
          <div>
            <a href={personContact.contact[2]}>
              <Medium />
            </a>
          </div>
          <div>
            <a href={personContact.contact[3]}>
              <Envelope />
            </a>
          </div>
        </div>
      </div>
    </>
  )
}




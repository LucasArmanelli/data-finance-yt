import React from 'react'
import Laptop from '../assets/laptop.jpg'

const Analytics = () => {
  return (
    <div className='w-full bg-white p-16 px-4'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
        <img className='w-[500px] mx-auto my-auto' src={Laptop} alt="/" />
        <div className='flex flex-col justify-center'>
          <p className='text-[#00df9a] font-bold'>DASHBOARD</p>
          <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Controle seus dados através de um painel de controle</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Perferendis quos dolore aut quia maxime labore dolorem voluptates illum,
            nobis numquam ducimus quam corporis, officia vitae! Laborum quo odio exercitationem fuga.
          </p>
          <button className='button button--secondary md:mx-0'>Começar Agora</button>
        </div>
      </div>
    </div>
  )
}

export default Analytics
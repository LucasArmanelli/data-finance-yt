import React from 'react'
import Single from '../assets/single.png'
import Double from '../assets/double.png'
import Triple from '../assets/triple.png'

const Cards = () => {
  return (
    <div className='w-full py-[10rem] px-4 bg-white'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
        <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
          <img className='w-20 mx-auto mt-[-3rem] bg-white' src={Single} alt="/" />
          <h2 className='text-2xl font-bold text-center py-8'>Um Usuário</h2>
          <p className='text-center text-4xl font-bold'>R$ 159,00</p>
          <div className='text-center font-medium'>
            <p className='py-2 border-b mx-8 mt-8'>500 GB armazenamento</p>
            <p className='py-2 border-b mx-8'>1 Usuário Garantido</p>
            <p className='py-2 border-b mx-8'>Envio de até 2 GB</p>
          </div>
          <button className='button button--primary'>Iniciar Teste</button>
        </div>
        <div className='w-full shadow-xl flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300'>
          <img className='w-20 mx-auto mt-[-3rem] bg-white' src={Double} alt="/" />
          <h2 className='text-2xl font-bold text-center py-8'>Dois Usuários</h2>
          <p className='text-center text-4xl font-bold'>R$ 199,00</p>
          <div className='text-center font-medium'>
            <p className='py-2 border-b mx-8 mt-8'>500 GB armazenamento</p>
            <p className='py-2 border-b mx-8'>2 Usuários Garantidos</p>
            <p className='py-2 border-b mx-8'>Envio de até 5 GB</p>
          </div>
          <button className='button button--secondary'>Iniciar Teste</button>
        </div>
        <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
          <img className='w-20 mx-auto mt-[-3rem] bg-white' src={Triple} alt="/" />
          <h2 className='text-2xl font-bold text-center py-8'>Três Usuários</h2>
          <p className='text-center text-4xl font-bold'>R$ 239,00</p>
          <div className='text-center font-medium'>
            <p className='py-2 border-b mx-8 mt-8'>1 TB armazenamento</p>
            <p className='py-2 border-b mx-8'>3 Usuários Garantidos</p>
            <p className='py-2 border-b mx-8'>Envio de até 10 GB</p>
          </div>
          <button className='button button--primary'>Iniciar Teste</button>
        </div>
      </div>
    </div>
  )
}

export default Cards
import React from 'react'
import Card from './elements/Card'
import Table from './elements/Table'

const DashBoard = () => {
  return (
    <main className='p-5 max-w-7xl'>
      <div>
        <h1 className='font-bold text-2xl'>DashBoard</h1>
      </div>

      <div className='mt-5 flex flex-wrap gap-5'>
        <Card />
        <Card />
        <Card />
      </div>
      <div>
        <Table />
      </div>
    </main>
  )
}

export default DashBoard
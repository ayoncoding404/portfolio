import React from 'react'
import sample from '../Assets/sample.pdf'

const DLC = () => {
  return (
    <div className='dlc'>
        <a href={sample} download className='btn'>Curriculam Vitae</a>
        <a href='#contact' className='btn btn-primary' > Let's Have  Coffee </a>
    </div>
  )
}

export default DLC
import React from 'react'

function FilterButton({icon, label}) {
  return (
    <div className='filter-button'>
        {icon}
        <p>{label}</p>
    </div>
  )
}

export default FilterButton
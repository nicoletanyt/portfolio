import React from 'react'

function FilterButton({ icon, label, setCategory, category }) {

  const handleClick = () => {
    if (category == label) {
      setCategory("")
    } else {
      setCategory(label)
    }
  }

	return (
		<div className={"filter-button ".concat(category == label && "selected")} onClick={handleClick}>
			{icon}
			<p>{label}</p>
		</div>
	);
}

export default FilterButton
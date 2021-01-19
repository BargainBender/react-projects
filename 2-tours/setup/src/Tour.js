import React, { useState } from 'react'

const Tour = ({ id, image, info, price, name, removeTour }) => {
	const [isExpanded, setIsExpanded] = useState(false)
	return (
		<article className='single-tour'>
			<img src={image} alt={name} />
			<footer>
				<div className='tour-info'>
					<h4>{name}</h4>
					<h4 className='tour-price'>${price}</h4>
				</div>
				<p>
					{isExpanded ? info : `${info.substring(0, 200)}...`}
					<button onClick={() => setIsExpanded(!isExpanded)}>
						{isExpanded ? 'Show less' : 'Read More'}
					</button>
				</p>
				<button className='delete-btn' onClick={() => removeTour(id)}>
					Not interested
				</button>
			</footer>
		</article>
	)
}

export default Tour

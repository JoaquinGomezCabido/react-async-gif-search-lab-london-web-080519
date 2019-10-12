import React from "react";

const GifList = props => {
	return (
		<div>
			<ul>
				{props.gifs.map(gif => (
					<img key={gif.slug} src={gif.url} alt={gif.url} />
				))}
			</ul>
		</div>
	);
};

export default GifList;

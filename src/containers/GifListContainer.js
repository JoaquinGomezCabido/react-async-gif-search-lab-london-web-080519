import React from "react";
import GifList from "../components/GifList";
import GifSearch from "../components/GifSearch";

class GifListContainer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			gifs: [],
		};
	}

	getGifs = searchTerm => {
		return fetch(
			`http://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=dc6zaTOxFJmzC&rating=g`,
		)
			.then(resp => resp.json())
			.then(gifList =>
				this.setState({
					gifs: [gifList.data[0], gifList.data[1], gifList.data[2]],
				}),
			);
	};

	handleSubmission = (event, searchTerm) => {
		event.preventDefault();
		this.getGifs(searchTerm);
	};

	render() {
		return (
			<div>
				<GifList gifs={this.state.gifs} />
				<GifSearch handleSubmission={this.handleSubmission} />
			</div>
		);
	}
}

export default GifListContainer;

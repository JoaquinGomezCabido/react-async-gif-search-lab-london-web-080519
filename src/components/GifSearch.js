import React from "react";

class GifSearch extends React.Component {
	constructor(props) {
		super(props);
		this.state = { searchTerm: "" };
	}

	handleInput = event => {
		this.setState({ searchTerm: event.target.value });
	};

	render() {
		return (
			<div>
				<form
					onSubmit={event =>
						this.props.handleSubmission(event, this.state.searchTerm)
					}
				>
					<input
						type="text"
						value={this.state.searchTerm}
						onChange={this.handleInput}
					/>
				</form>
			</div>
		);
	}
}

export default GifSearch;

import React from "react";

class Search extends React.Component {
  constructor() {
    super();
    this.state = {
      search: "",
    };
  }

  handleKey = e => {
    if (e.key === 'Enter') {
      this.props.searchMovies(this.state.search)
    }
  }

  render() {
    return (
      <div className="row">
        <div className="input-field">
          <input
          type="search"
          className="validate"
          placeholder="search"
          value={this.state.search}
          onChange={(e) => this.setState({search: e.target.value})}
          onKeyDown={this.handleKey}
          />
          <button className="btn search-btn" onClick={() => this.props.searchMovies(this.state.search)}>Search</button>
        </div>
      </div>
    );
  }
}

export { Search };

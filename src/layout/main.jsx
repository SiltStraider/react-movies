import React from "react";
import { Movies } from "../components/movies";
import { Preloader } from "../components/preloader";
import {Search} from "../components/search";

class Main extends React.Component {
  state = {
    movies: [],
  };

  componentDidMount() {
    fetch("http://www.omdbapi.com/?i=tt3896198&apikey=3e1bbc1b&s=matrix")
      .then((response) => response.json())
      .then((data) => this.setState({ movies: data.Search }));
  }

  searchMovies = str => {
    fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=3e1bbc1b&s=${str}`)
      .then((response) => response.json())
      .then((data) => this.setState({ movies: data.Search }));
  }

  render() {
    const { movies } = this.state;

    return (
      <main className="content container">
        <Search searchMovies={this.searchMovies}/>
        {movies.length ? <Movies movies={this.state.movies} /> : <Preloader />}
      </main>
    );
  }
}

export { Main };

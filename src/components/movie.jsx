import React from "react";

function Movie(props) {
  const { Title, Year, imdbID, Type, Poster } = props;

  return (
    <div id={imdbID} className="movie card">
      <div className="card-image">
        {Poster === "N/A" ? (
          <img
            className="activator"
            src={`https://placehold.co/300x430?text=${Title}`}
          />
        ) : (
          <img className="activator" src={Poster} />
        )}
      </div>
      <div className="card-content">
        <span className="card-title">{Title}</span>
        <p>
          {Year} <span className="right">{Type}</span>
        </p>
      </div>
    </div>
  );
}

export { Movie };

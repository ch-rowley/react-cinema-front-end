import React from "react";
import { shallow } from "enzyme";
import MovieCard from "../MovieCard.js";

describe("MovieCard", () => {
  let wrapper;
  const movieDetails = {
    title: "Amazing Movie",
    tagline: "A memorable tagline",
    runtime: "90m",
    cert: "Rated PG",
    posterURL: "a_movie_poster_url",
  };

  beforeEach(() => {
    wrapper = shallow(
      <MovieCard {...movieDetails}>child component information</MovieCard>
    );
  });

  it("renders the movie details", () => {
    expect(wrapper.text()).toContain(movieDetails.title);
    expect(wrapper.text()).toContain(movieDetails.tagline);
    expect(wrapper.text()).toContain(movieDetails.runtime);
    expect(wrapper.text()).toContain(movieDetails.cert);
  });

  it("renders a movie poster", () => {
    expect(wrapper.find("img").length).toBe(1);
    expect(wrapper.find("img").props().src).toBe(movieDetails.posterURL);
  });

  it("has an alt prop for the movie poster that refers to the title", () => {
    expect(wrapper.find("img").props().alt).toContain(movieDetails.title);
  });

  it("renders child components", () => {
    expect(wrapper.text()).toContain("child component information");
  });
});

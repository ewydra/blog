import React from "react";
import { shallow } from "enzyme";
import { ArticleList } from "./ArticleList";
import ArticleListItem from "./ArticleListItem";

const setup = () => {
  const articles = [
    {
      id: 1,
      title: "Article one",
      date: "January 1, 2019 13:00:00",
      abstract: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eu sollicitudin libero, vitae lacinia orci.`,
    },
    {
      id: 2,
      title: "Article two",
      date: "January 2, 2019 15:00:00",
      abstract:
        "Phasellus a dapibus enim. Nam malesuada ex a massa convallis mattis.",
      text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eu sollicitudin libero, vitae lacinia orci.`,
    },
  ];
  return {
    articles,
    fetchArticles: jest.fn(),
  };
};

describe("ArticleList", () => {
  it("should render correctly with passed props", () => {
    const props = setup();
    const component = shallow(<ArticleList {...props} />);
    expect(component.childAt(0).children()).toHaveLength(2);
    expect(component.exists(ArticleListItem)).toBe(true);
    expect(component.childAt(0).childAt(0).prop("article")).toEqual(
      props.articles[0]
    );
  });
});

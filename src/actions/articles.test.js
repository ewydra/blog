import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import mockAxios from 'axios';
import * as types from '../types/articles';
import * as actions from './articles';

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)
const store = mockStore()

const fetchArticlesData = [
  {
    id: 1,
    title: 'Title',
    date: 'May 6, 2019 13:30:00',
    abstract: 'Abstract',
    text: 'Text'
  },
  {
    id: 2,
    title: 'Title 2',
    date: 'May 7, 2019 13:30:00',
    abstract: 'Abstract 2',
    text: 'Text 2'
  }
];

const addArticleData = {
  id: 3,
  title: 'New article title',
  date: 'August 23, 2019 21:39:00',
  abstract: 'New article abstract',
  text: 'New article content'
};

const setupHistory = () => ({ push: jest.fn()});

describe('articles actions', () => {
  beforeEach(() => {
    store.clearActions();
  });

  it('creates GET_ARTICLES_SUCCESS after succesfully fetching articles', async () => {
    mockAxios.get.mockImplementationOnce(() => Promise.resolve({ data: fetchArticlesData }));

    const expectedActions = [
      { type: types.GET_ARTICLES },
      { type: types.GET_ARTICLES_SUCCESS, payload: fetchArticlesData }
    ];

    await store.dispatch(actions.fetchArticles())

    expect(store.getActions()).toEqual(expectedActions);
    expect(mockAxios.get).toHaveBeenCalledTimes(1);
  });

  it('creates ADD_ARTICLE_SUCCESS after succesfully adding article', async () => {
    mockAxios.post.mockImplementationOnce(() => Promise.resolve({ data: addArticleData }));

    const expectedActions = [
      { type: types.ADD_ARTICLE },
      { type: types.ADD_ARTICLE_SUCCESS, payload: addArticleData }
    ];

    await store.dispatch(actions.createArticle(addArticleData, setupHistory()))

    expect(store.getActions()).toEqual(expectedActions);
    expect(mockAxios.post).toHaveBeenCalledTimes(1);
  });
});

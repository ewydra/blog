import reducer from './articles';
import * as types from '../types/articles';

const setup = () => ({ byId: {}, allIds: [], loading: false, error: null });

const getArticlesData = [
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

describe('articles reducer', () => {
  const initialState = setup();
  it('should return initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it('should handle ADD_ARTICLE', () => {
    expect(
      reducer(setup(), {
        type: types.ADD_ARTICLE
      })).toEqual({
        byId: {},
        allIds: [],
        loading: true,
        error: null
    });
  });

  it('should handle ADD_ARTICLE_SUCCESS', () => {
    expect(
      reducer(setup(), {
        type: types.ADD_ARTICLE_SUCCESS,
        payload: addArticleData
      })).toEqual({
        loading: false,
        byId: {
          3: addArticleData,
        },
        allIds: [3],
        error: null
    });
  });

  it('should handle GET_ARTICLES_SUCCESS', () => {
    expect(
      reducer(setup(), {
        type: types.GET_ARTICLES_SUCCESS,
        payload: getArticlesData
      })).toEqual({
        loading: false,
        byId: {
          1: {
            id: 1,
            title: 'Title',
            date: 'May 6, 2019 13:30:00',
            abstract: 'Abstract',
            text: 'Text'
          },
          2: {
            id: 2,
            title: 'Title 2',
            date: 'May 7, 2019 13:30:00',
            abstract: 'Abstract 2',
            text: 'Text 2'
          }
        },
        allIds: [1, 2],
        error: null
    });
  });

  it('should handle ADD_ARTICLE_ERROR', () => {
    expect(
      reducer(setup(), {
        type: types.ADD_ARTICLE_ERROR,
        payload: 'error'
      })).toEqual({
        allIds: [],
        byId: {},
        loading: false,
        error: 'error'
    });
  });
})

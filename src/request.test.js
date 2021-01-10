import Request from './request';

describe('request', () => {
  it('should perform get request', async () => {
    const request = new Request();

    expect(await request.get('https://pokeapi.co/api/v2/pokemon/pikachu')).toEqual(expect.objectContaining({
      id: 25,
      weight: 60,
      name: 'pikachu'
    }))
  })
})

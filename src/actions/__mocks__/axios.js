import axios from "axios";

const mockAxios = jest.genMockFromModule('axios')
mockAxios.CancelToken = axios.CancelToken;

mockAxios.create = jest.fn(() => mockAxios)

export default mockAxios

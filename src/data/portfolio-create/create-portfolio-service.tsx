import { AxiosResponse } from 'axios';

import axios from 'axios';
import { CreatePortfolioRequest } from '../portfolio-create/create-portfolio-request';
import { CreatePortfolioResponse } from '../portfolio-create/create-portfolio-response';
// import TokenService from '../../shared/token.service';

// const token = TokenService.getLocalAccessToken();
axios.defaults.baseURL = 'https://625d371895cd5855d61d3b1e.mockapi.io/';
axios.defaults.headers.common['Authorization'] = `Auth from Instance`
axios.defaults.headers.common['Content-Type'] = `application/json`

const CreatePortfolio = async (
  data: CreatePortfolioRequest
): Promise<CreatePortfolioResponse> => {
  const response = await axios.post<CreatePortfolioResponse>(
    '/portfolios',
    data
  );
  return response.data;
};

export { CreatePortfolio };
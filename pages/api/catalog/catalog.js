import api from './index';

export const getCatalog = () =>  {
    return api.get('/catalog');
}
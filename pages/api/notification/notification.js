import api from './index';

export const getNotification = () =>  {
    return api.get('/notification');
}
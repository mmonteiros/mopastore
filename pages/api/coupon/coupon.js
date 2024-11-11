import api from './index';

export const getCoupon = () =>  {
    try {
        return api.get('/getCoupon');}
    catch (e) {
        console.log('error get coupon:', e)
    }
}

export const postCoupon = ({data}) =>  {
    try {
        return api.post('/createCoupon', data);
    }
    catch (e) {
        console.log('error get coupon:', e)
    }
}
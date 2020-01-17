const express = require('express');
const router = express.Router();
let fetchCtrl = require('../api/fetch.ctrl');
let apiCtrl = require('../api/api');

router.get('/fetchSlides', fetchCtrl.fetchSlides);
router.get('/fetchTopStores', fetchCtrl.fetchTopStores);
router.get('/fetchTopBlogs', fetchCtrl.fetchTopBlogs);
router.get('/fetchTopDeals', fetchCtrl.fetchTopDeals);
router.get('/fetchCoupons', fetchCtrl.fetchCoupons);
router.get('/singleStoreData', fetchCtrl.singleStoreData);
router.get('/fetchStores', fetchCtrl.fetchStores);
router.get('/fetchRandomStores', fetchCtrl.fetchRandomStores);
router.get('/fetchCategories', fetchCtrl.fetchCategories);
router.get('/searchQuery', fetchCtrl.searchQuery);
router.get('/fetchBlogsWithLimit', fetchCtrl.fetchBlogsWithLimit);
router.get('/fetchSingleBlog', fetchCtrl.fetchSingleBlog);
router.get('/fetchTopStoresName', fetchCtrl.fetchTopStoresName);


router.post('/increaseBlogViews', fetchCtrl.increaseBlogViews);

router.post('/subscribeMe', apiCtrl.subscribeMe);

module.exports = router;
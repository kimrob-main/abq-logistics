const express = require('express');
const router = express.Router();
const customerController = require('../controllers/customerController');

/**
 *  Customer Routes 
 */

router.get('/', customerController.home);
router.get('/admin', customerController.homepage);
router.get('/tracking', customerController.tracking);
router.get('/about', customerController.about);
router.get('/add', customerController.addCustomer);
router.post('/add', customerController.postCustomer);
router.get('/view/:id', customerController.view);
router.get('/edit/:id', customerController.edit);
router.put('/edit/:id', customerController.editPost);
router.get('/tracking/delete/:tracking', customerController.deleteTracking);
router.put('/tracking/:id', customerController.addTracking);
router.delete('/edit/:id', customerController.deleteCustomer);

router.post('/search', customerController.searchCustomers);



module.exports = router;
var express = require('express');
var router = express.Router();
var models = require('../models/index');


router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/menu/create', function(req, res, next) {
  console.log("up in the menu create route");
    models.Menu.create({
        space: req.body.space,
        bevItems: req.body.bevItems,
        foodItems: req.body.foodItems,
        costPerPerson: req.body.costPerPerson,
    }).then(function(menu){
        res.json(menu);
    }).catch(function(err){
        res.json(err);
    });
}); 

router.put('/menu/update/:menuId', function(req, res, next) {
    models.Menu.find({
      where: {
        id: req.params.menuId
      }
    }).then(function(menu){
      menu.updateAttributes({
          space: req.body.space,
          bevItems: req.body.bevItems,
          foodItems: req.body.foodItems,
          costPerPerson: req.body.costPerPerson,
      }).then(function(menu){
          res.json(menu);
      }).catch(function(err){
          res.json(err);
      });
    });
}); 


router.get('/menu/:space', function(req, res) {
    models.Menu.findAll({
        where: {
            space: req.params.space 
        }
    }).then(function(menus){
        if (menus.length>0) {
            res.json(menus);
        }
        else {
            res.json({msg: "No menus for this "+req.params.space+", or incorrect name."});
        }
    });
});


router.delete('/menu/delete/:menuId', function(req, res) {
    models.Menu.destroy({
        where: {
            id: req.params.menuId 
        }
    }).then(function(menu){
        res.json({msg: "Menu deleted."});
    }).catch(function(err) {
        res.json(err);
    });
});



module.exports = router;

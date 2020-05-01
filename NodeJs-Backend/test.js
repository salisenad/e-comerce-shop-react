// var express = require('express');
// var app = express();
// var bodyParser = require('body-parser');
// var cors = require('cors');
// app.use(cors()) // Use this after the variable declaration
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended: false}));
// // app.get('/funions', function (req, res) {
// //     res.send('You give me some funions foo!!!!');
// // })

// var products = [
//     {
//         "id" : "1",
//         "title": "Product one",
//         "price": 10,
//         "description": "Good product",
//         "allowInShop": '1',
//         "imgUrl" : 'https://i.pinimg.com/236x/24/d2/74/24d2746955831bd38a8bf62060162f2b.jpg',
//         "categoryName": "Trockenware"
        
//     },
//     {
//         "id" : "2",
//         "title": "Product two",
//         "price": 20.20,
//         "description": "Good product",
//         "allowInShop": '1',
//         "imgUrl" : 'https://thumbs.dreamstime.com/b/beautiful-attractive-girl-night-beach-sand-stars-hugs-moon-artistic-photography-137715461.jpg',
//         "categoryName": "Kuhlprodukte"

//     },    
        
//     {
//         "id" : "3",
//         "title": "Product three",
//         "price": 30,
//         "description": "Good product",
//         "allowInShop": '1',
//         "imgUrl" : 'https://thumbs.dreamstime.com/b/beautiful-attractive-girl-night-beach-sand-stars-hugs-moon-artistic-photography-137715461.jpg',
//         "categoryName": "Trockenware"

//     },  
        
//     {
//         "id" : "4",
//         "title": "Product three",
//         "price": 30,
//         "description": "Good product",
//         "allowInShop": '1',
//         "imgUrl" : 'https://thumbs.dreamstime.com/b/beautiful-attractive-girl-night-beach-sand-stars-hugs-moon-artistic-photography-137715461.jpg',
//         "categoryName": "Tiefkuhlprodukte"

//     },{
        
//         "id" : "5",
//         "title": "Product three",
//         "price": 30,
//         "description": "Good product",
//         "allowInShop": '1',
//         "imgUrl" : 'https://thumbs.dreamstime.com/b/beautiful-attractive-girl-night-beach-sand-stars-hugs-moon-artistic-photography-137715461.jpg',
//         "categoryName": "Trockenware"

//     },{
        
//         "id" : "6",
//         "title": "Product three",
//         "price": 30,
//         "description": "Good product",
//         "allowInShop": '1',
//         "imgUrl" : 'https://thumbs.dreamstime.com/b/beautiful-attractive-girl-night-beach-sand-stars-hugs-moon-artistic-photography-137715461.jpg',
//         "categoryName": "Trockenware"

//     },{
        
//         "id" : "7",
//         "title": "Product three",
//         "price": 30,
//         "description": "Good product",
//         "allowInShop": '1',
//         "imgUrl" : 'https://thumbs.dreamstime.com/b/beautiful-attractive-girl-night-beach-sand-stars-hugs-moon-artistic-photography-137715461.jpg',
//         "categoryName": "Trockenware"

//     },{
        
//         "id" : "8",
//         "title": "Product three",
//         "price": 30,
//         "description": "Good product",
//         "allowInShop": '1',
//         "imgUrl" : 'https://thumbs.dreamstime.com/b/beautiful-attractive-girl-night-beach-sand-stars-hugs-moon-artistic-photography-137715461.jpg',
//         "categoryName": "Trockenware"

//     },{
        
//         "id" : "9",
//         "title": "Product three",
//         "price": 30,
//         "description": "Good product",
//         "allowInShop": '1',
//         "imgUrl" : 'https://thumbs.dreamstime.com/b/beautiful-attractive-girl-night-beach-sand-stars-hugs-moon-artistic-photography-137715461.jpg',
//         "categoryName": "Trockenware"

//     },
//     ]


// var categories = [
//     {
//         "id": "1",
//         "categoryName": "Trockenware",
//         "description": "description per categorin e pare",
//         "childCategory": [
//             {
//                 "id" :"1",
//                 "childName": "Molle",
//                 "description": "testchild"
//             },
//                     {
//                     "id" :"2",
//                     "childName": "Pjeshke",
//                     "description": "testchild"

//                     },
                  
//                  ]
//     },
//     {
//         "id": "2",
//         "categoryName": "Kuhlprodukte",
//         "description": "description per categorin e dyte",
//         "childCategory": [
//                     {
//                     "id" :"3",
//                     "childName": "Dredhez",
//                     "description": "testchild"

//                     },
//                     {
//                         "id" :"4",
//                         "childName": "Qershi",
//                         "description": "testchild"

//                     },
//                 ]
//     }, {
//         "id": "3",
//         "categoryName": "Tiefkuhlprodukte",
//         "description": "description per categorin e trete",
//         "childCategory": [
//                     {
//                     "id" :"5",
//                     "childName": "Ananas",
//                     "description": "testchild"

//                     },
//                     {
//                         "id" :"6",
//                         "childName": "Domate",
//                         "description": "testchild"

//                     },
//                 ]
//     },
//     {
//         "id": "4",
//         "categoryName": "Getranke",
//         "description": "description per categorin e trete",
//         "childCategory": [
//                 {
//                 "id" :"7",
//                 "childName": "Pjeshke",
//                 "description": "testchild"

//                 },
//                 {
//                     "id" :"8",
//                     "childName": "Laptop",
//                     "description": "testchild"

//                 },
//             ]
//     },
//     {
//         "id": "5",
//         "categoryName": "Verpackung",
//         "description": "description per categorin e trete",
//         "childCategory": [
//                 {
//                 "id" :"9",
//                 "childName": "Monitor",
//                 "description": "testchild"

//                 },
//                 {
//                     "id" :"10",
//                     "childName": "Tastatur",
//                     "description": "testchild"

//                 }
//             ]
//     },
// ]
// var carouselImages = [
//     {
//         "id": "1",
//         "carouselImages": "carousel One",
//         "caruselUrl": "https://jpcamara.com/wp-content/uploads/2015/02/carousel.jpg"
//     },
//     {
//         "id": "2",
//         "carouselImages": "carousel two",
//         "caruselUrl": "https://jpcamara.com/wp-content/uploads/2015/02/carousel.jpg"
//     },{
//         "id": "3",
//         "carouselImages": "carousel thre",
//         "caruselUrl": "https://jpcamara.com/wp-content/uploads/2015/02/carousel.jpg"
//     }
// ]

// // Crud for products
// app.get('/products', function(request, response){
//     response.send(products);
// });

// app.post('/create/products', function(request, response) {
//     var product = request.body;
//     if(!product || product.title === "") {
//         response.status(500).send({error: "Your product must have an title"})
//     }else {
//         products.push(product);
//         if(!product.id) {
//            product.id = Math.floor((Math.random() * 10000) + 1).toString()
//         }
//         response.status(200).send(product)
//     }
// })

// app.put('/products/:productId', function(request, response){
//     var newTitle = request.body.title;
//     var newPrice = request.body.price;
//     var newDescription = request.body.description;
//     var newAllowInShop = request.body.allowInShop;
//     var newImgUrl = request.body.imgUrl;
//     var newCategoryName = request.body.categoryName;
//     if(!newTitle || newTitle === "") {
//         response.status(500).send({error: "You must provide product title"})
//     } else {
//         var objectFound = false;
//         for(var x = 0; x  < products.length; x++) {
//             var prod = products[x];
//             if(prod.id === request.params.productId) {
//                 products[x].title = newTitle;
//                 products[x].price = newPrice;
//                 products[x].description = newDescription;
//                 products[x].allowInShop = newAllowInShop;
//                 products[x].imgUrl = newImgUrl;
//                 products[x].categoryName = newCategoryName;
         
//                 objectFound = true
//                 break;} }
//         if(!objectFound) {
//             response.status(500).send({error: "product id not found"})
//         }else {
//             response.send(products);

//         }
//     }
// });

// app.delete('/products/:productId', function(request, response){
//         var objectFound = false;
//         for(var x = 0; x  < products.length; x++) {
//             var prod = products[x];
//             if(prod.id === request.params.productId) {
//                 products.splice(x, 1);
//                 objectFound = true
//                 break;} }
//         if(!objectFound) {
//             response.status(500).send({error: "product id not found"})
//         }else {
//             // response.status(200).send(products)
//             response.send({Success: "Product deleted successfully"} );
//         }

// });

// /////



// // Crud for categories
// app.get('/categories', function (request, response) {
//     response.send(categories);
// })

// app.post('/create/categories', function(request, response) {
//     var category = request.body;
//     if(!category || category.categoryName === "") {
//         response.status(500).send({error: "Your category must have an name"})
//     }else {
//         categories.push(category);
//         if(!category.id) {
//             category.id = Math.floor((Math.random() * 10000) +1).toString()
//         }
//         response.status(200).send(category)
//     }
// })

// app.put('/categories/:categoriesId', function(request, response){
//     var newCategoryname = request.body.categoryName;
//     var newDescription = request.body.description;
//     var newChildCategory = request.body.childCategory;

//     if(!newCategoryname || newCategoryname === "") {
//         response.status(500).send({error: "You must provide a category name"})
//     } else {
//         var objectFound = false;
//         for(var x = 0; x  < categories.length; x++) {
//             var cat = categories[x];
//             if(cat.id === request.params.categoriesId) {
//                 categories[x].categoryName = newCategoryname;
//                 categories[x].description = newDescription;
//                 categories[x].childCategory = newChildCategory;
//                 objectFound = true
//                 break;} }
//         if(!objectFound) {
//             response.status(500).send({error: "product id not found"})
//         }else {
//             response.send(categories);
//         }
//     }
// });

// app.delete('/categories/:categoriesId', function(request, response){
//     var objectFound = false;
//     for(var x = 0; x  < categories.length; x++) {
//         var cat = categories[x];
//         if(cat.id === request.params.categoriesId) {
//             categories.splice(x, 1);
//             objectFound = true
//             break;} }
//     if(!objectFound) {
//         response.status(500).send({error: "product id not found"})
//     }else {
//         // response.status(200).send(products)
//         response.send({Success: "Product deleted successfully"} );
//     }

// });



// // Crud for Carousels
// app.get('/carousels', function(request, response){
//     response.send(carouselImages);
// })
// app.post('/create/carousels', function(request, response) {
//     var carousel = request.body;
//     if(!carousel || carousel.carouselImages === "") {
//         response.status(500).send({error: "Your carousel must have an name"})
//     }else {
//         carouselImages.push(carousel);
//         if(!carousel.id) {
//             carousel.id = Math.floor((Math.random() * 10000) +1).toString()
//         }
//         response.status(200).send(carousel)
//     }
// })


// app.put('/carousels/:carouselsId', function(request, response){
//     var newCarouselImages = request.body.carouselImages;
//     var newCaruselUrl = request.body.caruselUrl;

//     if(!newCarouselImages || newCarouselImages === "") {
//         response.status(500).send({error: "You must provide a carousel name"})
//     } else {
//         var objectFound = false;
//         for(var x = 0; x  < carouselImages.length; x++) {
//             var car = carouselImages[x];
//             if(car.id === request.params.carouselsId) {
//                 carouselImages[x].carouselImages = newCarouselImages;
//                 carouselImages[x].caruselUrl = newCaruselUrl;
//                 objectFound = true
//                 break;} }
//         if(!objectFound) {
//             response.status(500).send({error: "carousel id not found"})
//         }else {
//             response.send(carouselImages);
//         }
//     }
// });



// app.delete('/carousels/:carouselsId', function(request, response){
//     var objectFound = false;
//     for(var x = 0; x  < carouselImages.length; x++) {
//         var car = carouselImages[x];
//         if(car.id === request.params.carouselsId) {
//             carouselImages.splice(x, 1);
//             objectFound = true
//             break;} }
//     if(!objectFound) {
//         response.status(500).send({error: "Carousel  id not found"})
//     }else {
//         // response.status(200).send(products)
//         response.send({Success: "Carousel deleted successfully"} );
//     }

// });




// //



// app.put('/ingredients/:ingredientId', function(request, response){
//     var newText = request.body.text;

//     if(!newText || newText === "") {
//         response.status(500).send({error: "You must provide ingredient text"})
//     } else {
//         var objectFound = false;
//         for(var x = 0; x  < ingredients.length; x++) {
//             var ing = ingredients[x];

//             if(ing.id === request.params.ingredientId) {
//                 ingredients[x].text = newText;
//                 objectFound = true
//                 break;
//             } 
//         }

//         if(!objectFound) {
//             response.status(500).send({error: "ingredient id not found"})
//         }else {
//             response.send(ingredients);

//         }
//     }
  
// });


// app.listen(8080, function(){
//     console.log("First Api runing on port 8080!");
// })
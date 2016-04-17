// goog.require('goog.dom');

// goog.events.listen(
//     goog.dom.getElement('searchButton'),
//     goog.events.EventType.CLICK,
//     function(e) { alert("click") }
// );

var homeData = {
  brand: "Fragrare",
  cartItemList: [1,2],
  marketingMsg: {
    msg: "Show your love to mom",
    savings: "20%",
    holiday: "Mother's Day"
  },
  currentYear: new Date().getFullYear(),
  productList:[{
    imgURL: "static/imgs/arrangement-2_2.jpg",
    price: 30,
    name: "garden mix",
    holiday: "Mother's Day"
  },{
    imgURL: "static/imgs/arrangement-3.jpeg",
    price: 33,
    name: "bright & cherry",
    holiday: "Mother's Day"
  },{
    imgURL: "static/imgs/arrangement-6.jpeg",
    price: 45,
    name: "romantic mix",
    holiday: "Anniversary"
  },{
    imgURL: "static/imgs/arrangement-5.jpeg",
    price: 50,
    name: "emma's collection",
    holiday: "Mother's Day"
  },{
    imgURL: "static/imgs/arrangement-1.jpeg",
    price: 38,
    name: "four seasons",
    holiday: "Anniversary"
  },{
    imgURL: "static/imgs/arrangement-10.jpeg",
    price: 42,
    name: "the blossom",
    holiday: "Birthday's Day"
  },{
    imgURL: "static/imgs/arrangement-4.jpeg",
    price: 30,
    name: "pastel padals",
    holiday: "Mother's Day"
  },{
    imgURL: "static/imgs/arrangement-11.jpeg",
    price: 50,
    name: "juicy",
    holiday: "Birthday's Day"
  }]
};

window.onload = function(){
  document.getElementById("main-body").innerHTML = florist.home.home(homeData);

  document.getElementById('searchButton').onclick = function (event){
    event.preventDefault();
    var catalogData = homeData;
    catalogData['searchWord'] = document.getElementById("search_input").value;
    document.getElementById("main-body").innerHTML = florist.catalog.page(catalogData);
  };

  // document.getElementsByClassName('product-box').onclick = function (event){
  //   event.preventDefault();
  //   var catalogData = homeData;
  //   catalogData['searchWord'] = document.getElementById("search_input").value;
  //   document.getElementById("main-body").innerHTML = florist.product.page(catalogData);
  // };
};


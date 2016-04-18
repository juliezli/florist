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
  }],
  marketingMsg: {
    msg: "Show your love to mom",
    savings: "20%",
    holiday: "Mother's Day"
  },
  product:{
     imgURL: "static/imgs/arrangement-11.jpeg",
     price: "from $30",
     name: "SOFT CREAMS & WHITES",
     description: "A sweet, soft palette of pastels with whites, this organic-form arrangement features premium blooms such ashydrangea, sweet peas, stock, mums, and ranunculus."
  }
};

var productData = {
    brand: "Fragrare",
    cartItemList: [1],
    currentYear: new Date().getFullYear(),
    marketingMsg: {
      msg: "Show your love to mom",
      savings: "20%",
      holiday: "Mother's Day"
    },
    itemList: [
      {
        imgURL: "static/imgs/arrangement-11.jpeg",
        name: "SOFT CREAMS & WHITES",
        price: 30,
        description: "A sweet, soft palette of pastels with whites, this organic-form arrangement features premium blooms such as hydrangea, sweet peas, stock, mums, and ranunculus."
      },
      {
        imgURL: "static/imgs/arrangement-11.jpeg",
        name: "SOFT CREAMS & WHITES",
        price: 30,
        description: "A sweet, soft palette of pastels with whites, this organic-form arrangement features premium blooms such as hydrangea, sweet peas, stock, mums, and ranunculus."
      },
    ],
    total: 60
  };
function mainBody() {
  /**
   * Product Box 
   */
   function handleClickProductBoxes() {
    var productBoxList = document.getElementsByClassName('product-box');
    for(var i = 0; i<productBoxList.length; i++) {
      goog.events.listen(productBoxList[i], goog.events.EventType.CLICK, function(event) {
        event.preventDefault();
        document.body.innerHTML = florist.product.page(homeData);
        $('.selectpicker').selectpicker({});
      });
    }
  };

  /**
   * Navigation 
   */


  /**
   * Search Button Function 
   */
  document.body.innerHTML = florist.home.home(homeData);
  goog.events.listen(document.getElementById('searchButton'), goog.events.EventType.CLICK, function (event){
    event.preventDefault();
    if (goog.dom.getElement("search_input").value === null || goog.dom.getElement("search_input").value === "") {
      goog.dom.classlist.add(goog.dom.getElement("searchButton"), "btn-red");
      goog.dom.classlist.add(goog.dom.getElement("search_input"), "empty-search");
      goog.dom.classlist.remove(goog.dom.getElement("search_empty_alert_text"), "hidden");
    } else {
      var catalogData = homeData;
      catalogData['searchWord'] = goog.dom.getElement("search_input").value;
      document.body.innerHTML = florist.cartPage.cartPage(productData);
    };
  });

  goog.events.listen(goog.dom.getElement("search_input"), goog.events.EventType.TEXTINPUT, function(event) {
    if (goog.dom.getElement("search_input").value !== null && goog.dom.getElement("search_input").value !== "") {
      goog.dom.classlist.remove(goog.dom.getElement("searchButton"), "btn-red");
      goog.dom.classlist.remove(goog.dom.getElement("search_input"), "empty-search");
      goog.dom.classlist.add(goog.dom.getElement("search_empty_alert_text"), "hidden");
    }
  });

  /**
   * Cart 
   */
   goog.events.listen(goog.dom.getElement('viewCartButton'), goog.events.EventType.CLICK, function (event) {
    event.preventDefault();
    var catalogData = homeData;
    catalogData['searchWord'] = goog.dom.getElement("search_input").value;;
    document.body.innerHTML = florist.cartPage.cartPage(productData);

    /**
     * Payment 
     */
    goog.events.listen(goog.dom.getElement('checkoutButton'), goog.events.EventType.CLICK, function (event) {
      event.preventDefault();
      var catalogData = homeData;
      catalogData['searchWord'] = goog.dom.getElement("search_input").value;;
      document.body.innerHTML = florist.payment.paymentPage(productData);
      $('.selectpicker').selectpicker({});
    });
  });



  /**
   * Hero CTA 
   */
  goog.events.listen(goog.dom.getElement('homeHeroCta'), goog.events.EventType.CLICK, function (event) {
    event.preventDefault();
    var catalogData = homeData;
    catalogData['searchWord'] = 'Catalog';
    document.body.innerHTML = florist.catalog.page(catalogData);
    handleClickProductBoxes();
  });

  handleClickProductBoxes();
};

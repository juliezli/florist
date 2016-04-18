var mainHandler = {
  data: {
    brand: "Fragrare",
    cartItemList: [],
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
      holiday: "Mother's Day",
      description: "A sweet, soft palette of pastels with whites, this organic-form arrangement features premium blooms such ashydrangea, sweet peas, stock, mums, and ranunculus."
    },{
      imgURL: "static/imgs/arrangement-3.jpeg",
      price: 33,
      name: "bright & cherry",
      holiday: "Mother's Day",
      description: "A sweet, soft palette of pastels with whites, this organic-form arrangement features premium blooms such ashydrangea, sweet peas, stock, mums, and ranunculus."
    },{
      imgURL: "static/imgs/arrangement-6.jpeg",
      price: 45,
      name: "romantic mix",
      holiday: "Anniversary",
      description: "A sweet, soft palette of pastels with whites, this organic-form arrangement features premium blooms such ashydrangea, sweet peas, stock, mums, and ranunculus."
    },{
      imgURL: "static/imgs/arrangement-5.jpeg",
      price: 50,
      name: "emma's collection",
      holiday: "Mother's Day",
      description: "A sweet, soft palette of pastels with whites, this organic-form arrangement features premium blooms such ashydrangea, sweet peas, stock, mums, and ranunculus."
    },{
      imgURL: "static/imgs/arrangement-1.jpeg",
      price: 38,
      name: "four seasons",
      holiday: "Anniversary",
      description: "A sweet, soft palette of pastels with whites, this organic-form arrangement features premium blooms such ashydrangea, sweet peas, stock, mums, and ranunculus."
    },{
      imgURL: "static/imgs/arrangement-10.jpeg",
      price: 42,
      name: "the blossom",
      holiday: "Birthday's Day",
      description: "A sweet, soft palette of pastels with whites, this organic-form arrangement features premium blooms such ashydrangea, sweet peas, stock, mums, and ranunculus."
    },{
      imgURL: "static/imgs/arrangement-4.jpeg",
      price: 30,
      name: "pastel padals",
      holiday: "Mother's Day",
      description: "A sweet, soft palette of pastels with whites, this organic-form arrangement features premium blooms such ashydrangea, sweet peas, stock, mums, and ranunculus."
    },{
      imgURL: "static/imgs/arrangement-11.jpeg",
      price: 50,
      name: "juicy",
      holiday: "Birthday's Day",
      description: "A sweet, soft palette of pastels with whites, this organic-form arrangement features premium blooms such ashydrangea, sweet peas, stock, mums, and ranunculus."
    }],
    marketingMsg: {
      msg: "Show your love to mom",
      savings: "20%",
      holiday: "Mother's Day",
      description: "A sweet, soft palette of pastels with whites, this organic-form arrangement features premium blooms such ashydrangea, sweet peas, stock, mums, and ranunculus."
    },
    product: {
      imgURL: "static/imgs/arrangement-11.jpeg",
      price: 30,
      name: "juicy",
      holiday: "Birthday's Day",
      description: "A sweet, soft palette of pastels with whites, this organic-form arrangement features premium blooms such ashydrangea, sweet peas, stock, mums, and ranunculus."
    },
    total: 0
  },
  init: function() {
    this.renderMainPage();
  },
  renderMainPage: function() {
    document.body.innerHTML = florist.home.home(this.data);
    this.addSearchHandler();
    this.addViewCartButtonHandler();
    this.addNavBarButtonsHandler();

    this.addClickProductBoxHandler();
    this.addViewCatalogButtonHandler();
  },
  renderCatalogPage: function() {
    document.body.innerHTML = florist.catalog.page(this.data);
    this.addSearchHandler();
    this.addNavBarButtonsHandler();
    this.addViewCartButtonHandler();

    this.addClickProductBoxHandler();
  },
  renderProductPage: function() {
    document.body.innerHTML = florist.product.page(this.data);
    this.addSearchHandler();
    this.addNavBarButtonsHandler();
    this.addViewCartButtonHandler();
    this.addAddToCartHandler();

    $('.selectpicker').selectpicker({});
  },
  renderPaymentPage: function() {
    document.body.innerHTML = florist.payment.paymentPage(this.data);
    this.addSearchHandler();
    this.addViewCartButtonHandler();
    this.addNavBarButtonsHandler();
    $('.selectpicker').selectpicker({});
  },
  renderCartPage: function() {
    document.body.innerHTML = florist.cartPage.cartPage(this.data);
    this.addNavBarButtonsHandler();
    this.addViewCartButtonHandler();
    this.addSearchHandler();
    this.addCheckoutButtonHandler();
  },
  addClickProductBoxHandler: function() {
    var productBoxList = document.getElementsByClassName('product-box');
    var self = this;
    for(var i = 0; i<productBoxList.length; i++) {
      goog.events.listen(productBoxList[i], goog.events.EventType.CLICK, function(event) {
        event.preventDefault();
        self.renderProductPage();
      });
    }
  },
  addSearchHandler: function() {
    var self = this;
    goog.events.listen(document.getElementById('searchButton'), goog.events.EventType.CLICK, function (event){
      event.preventDefault();
      if (goog.dom.getElement("search_input").value === null || goog.dom.getElement("search_input").value === "") {
        goog.dom.classlist.add(goog.dom.getElement("searchButton"), "btn-red");
        goog.dom.classlist.add(goog.dom.getElement("search_input"), "empty-search");
        goog.dom.classlist.remove(goog.dom.getElement("search_empty_alert_text"), "hidden");
      } else {
        self.data['searchWord'] = goog.dom.getElement("search_input").value;
        self.renderCatalogPage();
      };
    });

    goog.events.listen(goog.dom.getElement("search_input"), goog.events.EventType.TEXTINPUT, function(event) {
      if (goog.dom.getElement("search_input").value !== null && goog.dom.getElement("search_input").value !== "") {
        goog.dom.classlist.remove(goog.dom.getElement("searchButton"), "btn-red");
        goog.dom.classlist.remove(goog.dom.getElement("search_input"), "empty-search");
        goog.dom.classlist.add(goog.dom.getElement("search_empty_alert_text"), "hidden");
      }
    });
  },
  addViewCartButtonHandler: function() {
    var self = this;
    goog.events.listen(goog.dom.getElement('viewCartButton'), goog.events.EventType.CLICK, function (event) {
      event.preventDefault();
      self.data['searchWord'] = goog.dom.getElement("search_input").value;;
      self.renderCartPage();
    });
  },
  addCheckoutButtonHandler: function() {
    var self = this;
    goog.events.listen(goog.dom.getElement('checkoutButton'), goog.events.EventType.CLICK, function (event) {
      event.preventDefault();
      self.renderPaymentPage();
    });
  },
  addViewCatalogButtonHandler: function() {
    var self = this;
    goog.events.listen(goog.dom.getElement('homeHeroCta'), goog.events.EventType.CLICK, function (event) {
      event.preventDefault();
      self.data['searchWord'] = 'Catalog';
      self.renderCatalogPage();
    });
  },
  addNavBarButtonsHandler: function() {
    var self = this;
    goog.events.listen(goog.dom.getElement('navHome'), goog.events.EventType.CLICK, function (event) {
      event.preventDefault();
      self.renderMainPage();
    });
    goog.events.listen(goog.dom.getElement('navCatalog'), goog.events.EventType.CLICK, function (event) {
      event.preventDefault();
      self.renderCatalogPage();
    });
  },
  addAddToCartHandler: function() {
    var self = this;
    goog.events.listen(goog.dom.getElement('addToCart'), goog.events.EventType.CLICK, function (event) {
      event.preventDefault();
      self.data.cartItemList.push(self.data.product);
      self.data.total = self.data.total + 30;
      self.renderProductPage();
      goog.dom.classlist.add(goog.dom.getElement("cartNavButton"), "open");
      event.stopPropagation();
    });
  }
}

function mainBody() {
  mainHandler.init();
};

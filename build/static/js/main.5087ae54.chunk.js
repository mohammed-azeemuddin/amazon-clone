(this["webpackJsonpamazon-clone"]=this["webpackJsonpamazon-clone"]||[]).push([[0],{109:function(e,t,a){},110:function(e,t,a){},112:function(e,t,a){"use strict";a.r(t);var n=a(4),c=a.n(n),r=a(38),l=a.n(r),i=(a(72),a(58)),o=a(13),m=(a(73),a(74),a(59)),s=a.n(m),u=a(61),d=a.n(u),p=a(24),E=Object(n.createContext)(),_=function(e){var t=e.reducer,a=e.initialState,r=e.children;return c.a.createElement(E.Provider,{value:Object(n.useReducer)(t,a)},r)},g=function(){return Object(n.useContext)(E)},h=a(44),v=(a(76),a(113),h.a.initializeApp({apiKey:"AIzaSyAzRyLyTez77tUeHRy97CKAy-GVG90P6Xg",authDomain:"challenge-d6288.firebaseapp.com",projectId:"challenge-d6288",storageBucket:"challenge-d6288.appspot.com",messagingSenderId:"1024865075975",appId:"1:1024865075975:web:2352f9e275eccbf2093ba2"}).firestore()),f=h.a.auth();var b=function(){var e=g(),t=Object(o.a)(e,2),a=t[0],n=a.basket,r=a.user;return t[1],c.a.createElement("div",{className:"header"},c.a.createElement(p.b,{to:"/"},c.a.createElement("img",{className:"header__logo",src:"http://pngimg.com/uploads/amazon/amazon_PNG11.png"})),c.a.createElement("div",{className:"header__search"},c.a.createElement("input",{className:"header__searchInput",type:"text"}),c.a.createElement(s.a,{className:"header__searchIcon"})),c.a.createElement("div",{className:"header__nav"},c.a.createElement(p.b,{to:!r&&"/login"},c.a.createElement("div",{onClick:function(){r&&f.signOut()},className:"header__option"},c.a.createElement("span",{className:"header__optionLineOne"},"Hello ",r?r.email:"Guest"),c.a.createElement("span",{className:"header__optionLineTwo"},r?"Sign Out":"Sign In"))),c.a.createElement(p.b,{to:"/orders"},c.a.createElement("div",{className:"header__option"},c.a.createElement("span",{className:"header__optionLineOne"},"Returns"),c.a.createElement("span",{className:"header__optionLineTwo"},"& Orders"))),c.a.createElement("div",{className:"header__option"},c.a.createElement("span",{className:"header__optionLineOne"},"Your"),c.a.createElement("span",{className:"header__optionLineTwo"},"Prime")),c.a.createElement(p.b,{to:"/checkout"},c.a.createElement("div",{className:"header__optionBasket"},c.a.createElement(d.a,null),c.a.createElement("span",{className:"header__optionLineTwo header__basketCount"},null===n||void 0===n?void 0:n.length)))))};a(81),a(82);var N=function(e){var t=e.id,a=e.title,n=e.image,r=e.price,l=e.rating,i=g(),m=Object(o.a)(i,2),s=(m[0],m[1]);return c.a.createElement("div",{className:"product"},c.a.createElement("div",{className:"product__info"},c.a.createElement("p",null,a),c.a.createElement("p",{className:"product__price"},c.a.createElement("p",null,"\u20b9",c.a.createElement("span",null,c.a.createElement("strong",null,r)))),c.a.createElement("div",{className:"product__rating"},Array(l).fill().map((function(e,t){return c.a.createElement("p",null,c.a.createElement("span",null,"\u2b50"))})))),c.a.createElement("img",{src:n}),c.a.createElement("button",{onClick:function(){s({type:"ADD_TO_BASKET",item:{id:t,title:a,image:n,price:r,rating:l}})}},"Add to Basket"))};var O=function(){return c.a.createElement("div",{className:"home"},c.a.createElement("div",{className:"home__container"},c.a.createElement("img",{className:"home__image",src:"https://m.media-amazon.com/images/I/61aUfpZteZL._SX3000_.jpg",alt:""}),c.a.createElement("div",{className:"home__row"},c.a.createElement(N,{id:"12345387",title:"Atomic Habits: The life-changing million copy bestseller Paperback",price:541,image:"https://images-na.ssl-images-amazon.com/images/I/51-nXsSRfZL._SX328_BO1,204,203,200_.jpg",rating:3}),c.a.createElement(N,{id:"1732642",title:"boAt Xtend Smartwatch with Alexa Built-in, 1.69\u201d HD Display & 5 ATM Water Resistance(Pitch Black)",price:2999,image:"https://m.media-amazon.com/images/I/61IMRs+o0iL._SL1500_.jpg",rating:4})),c.a.createElement("div",{className:"home__row"},c.a.createElement(N,{id:"12345389",title:"Apple iPhone 13 Pro (256GB) - Sierra Blue",price:129900,image:"https://m.media-amazon.com/images/I/61jLiCovxVL._SL1500_.jpg",rating:4}),c.a.createElement(N,{id:"126742",title:"Echo (4th Gen, 2020 release) | Powered by Dolby and Alexa (Black)",price:6999,image:"https://m.media-amazon.com/images/I/61-DjUz7JxL.jpg",rating:5}),c.a.createElement(N,{id:"1545642",title:"Cadbury Dairy Milk Silk Fruit and Nut Chocolate Bar, 137g (Pack of 3)",price:483,image:"https://m.media-amazon.com/images/I/61QNTafi2iL._SL1500_.jpg",rating:4})),c.a.createElement("div",{className:"home__row"},c.a.createElement(N,{id:"1234522",title:"Samsung 34-inch (86.40cm) Curved Monitor- 21:9 Ultrawide QLED, Thunderbolt 3 Port- LC34J791WTWXXL, Gray",price:85600,image:"https://m.media-amazon.com/images/I/91pi34PiUPL._SL1500_.jpg",rating:4}))))},y=(a(83),a(84),a(33)),j=a.n(y),k=a(17),S=a(27),C=function(e){return null===e||void 0===e?void 0:e.reduce((function(e,t){return t.price+e}),0)},T=function(e,t){switch(console.log(t),t.type){case"ADD_TO_BASKET":return Object(S.a)(Object(S.a)({},e),{},{basket:[].concat(Object(k.a)(e.basket),[t.item])});case"EMPTY_BASKET":return Object(S.a)(Object(S.a)({},e),{},{basket:[]});case"REMOVE_FROM_BASKET":var a=e.basket.findIndex((function(e){return e.id===t.id})),n=Object(k.a)(e.basket);return a>=0?n.splice(a,1):console.warn("Cant remove product (id: ".concat(t.id,") as its not in basket!")),Object(S.a)(Object(S.a)({},e),{},{basket:n});case"SET_USER":return Object(S.a)(Object(S.a)({},e),{},{user:t.user});default:return e}},A=a(14);var P=function(){var e=Object(A.f)(),t=g(),a=Object(o.a)(t,2),n=a[0].basket;return a[1],c.a.createElement("div",{className:"subtotal"},c.a.createElement(j.a,{renderText:function(e){return c.a.createElement(c.a.Fragment,null,c.a.createElement("p",null,"Subtotal (",null===n||void 0===n?void 0:n.length," items):",c.a.createElement("strong",null,e)),c.a.createElement("small",{className:"subtotal_gift"},c.a.createElement("input",{type:"checkbox"})," This order contains a gift"))},decimalScale:2,value:C(n),displayType:"text",thousandSeparator:!0,prefix:"\u20b9"}),c.a.createElement("button",{onClick:function(t){return e("/payment")}},"Proceed to Checkout"))};a(88);var w=function(e){var t=e.id,a=e.image,n=e.title,r=e.price,l=e.rating,i=e.hideButton,m=g(),s=Object(o.a)(m,2),u=(s[0].basket,s[1]);return c.a.createElement("div",{className:"checkoutProduct"},c.a.createElement("img",{className:"checkoutProduct__image",src:a}),c.a.createElement("div",{className:"checkoutProduct__info"},c.a.createElement("p",{className:"checkoutProduct__title"},n),c.a.createElement("p",{className:"checkoutProduct__price"},c.a.createElement("p",null,c.a.createElement("span",null,"\u20b9",c.a.createElement("strong",null,r)))),c.a.createElement("div",{className:"checkoutProduct__rating"},Array(l).fill().map((function(e,t){return c.a.createElement("p",null,"\u2b50")}))),!i&&c.a.createElement("button",{onClick:function(){u({type:"REMOVE_FROM_BASKET",id:t})}},"Remove from Basket")))};var L=function(){var e=g(),t=Object(o.a)(e,2),a=t[0],n=a.basket,r=a.user;return t[1],c.a.createElement("div",{className:"checkout"},c.a.createElement("div",{className:"checkout__left"},c.a.createElement("img",{className:"checkout__ad",src:"https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg",alt:""}),c.a.createElement("div",null,c.a.createElement("h3",null,"Hello, ",null===r||void 0===r?void 0:r.email),c.a.createElement("h2",{className:"checkout__title"},"Your shopping Basket"),n.map((function(e){return c.a.createElement(w,{id:e.id,title:e.title,image:e.image,price:e.price,rating:e.rating})})))),c.a.createElement("div",{className:"checkout__right"},c.a.createElement(P,null)))};a(89);var B=function(){var e=Object(A.f)(),t=Object(n.useState)(""),a=Object(o.a)(t,2),r=a[0],l=a[1],i=Object(n.useState)(""),m=Object(o.a)(i,2),s=m[0],u=m[1];return c.a.createElement("div",{className:"login"},c.a.createElement(p.b,{to:"/"},c.a.createElement("img",{className:"login__logo",src:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"})),c.a.createElement("div",{className:"login__container"},c.a.createElement("h1",null,"Sign-in"),c.a.createElement("form",null,c.a.createElement("h5",null,"E-mail"),c.a.createElement("input",{type:"text",value:r,onChange:function(e){return l(e.target.value)}}),c.a.createElement("h5",null,"Password"),c.a.createElement("input",{type:"password",value:s,onChange:function(e){return u(e.target.value)}}),c.a.createElement("button",{type:"submit",onClick:function(t){t.preventDefault(),f.signInWithEmailAndPassword(r,s).then((function(t){e("/")})).catch((function(e){return alert(e.message)}))},className:"login__signInButton"},"Sign In")),c.a.createElement("p",null,"By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use & Sale. Please see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice."),c.a.createElement("button",{onClick:function(t){t.preventDefault(),f.createUserWithEmailAndPassword(r,s).then((function(t){t&&e("/")})).catch((function(e){return alert(e.message)}))},className:"login__registerButton"},"Create your Amazon Account")))},x=a(0),I=a.n(x),z=a(3),M=a(30),R=(a(90),a(62)),D=a.n(R).a.create({baseURL:"https://us-central1-challenge-d6288.cloudfunctions.net/api"});var F=function(){var e=g(),t=Object(o.a)(e,2),a=t[0],r=a.basket,l=a.user,i=t[1],m=Object(A.f)(),s=Object(M.useStripe)(),u=Object(M.useElements)(),d=Object(n.useState)(!1),E=Object(o.a)(d,2),_=E[0],h=E[1],f=Object(n.useState)(""),b=Object(o.a)(f,2),N=b[0],O=b[1],y=Object(n.useState)(null),k=Object(o.a)(y,2),S=k[0],T=k[1],P=Object(n.useState)(!0),L=Object(o.a)(P,2),B=L[0],x=L[1],R=Object(n.useState)(!0),F=Object(o.a)(R,2),U=F[0],K=F[1];Object(n.useEffect)((function(){(function(){var e=Object(z.a)(I.a.mark((function e(){var t;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,D({method:"post",url:"/payments/create?total=".concat(100*C(r))});case 2:t=e.sent,K(t.data.clientSecret);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[r]),console.log("the secret is>>> ",U);var Y=function(){var e=Object(z.a)(I.a.mark((function e(t){return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),O(!0),e.next=4,s.confirmCardPayment(U,{payment_method:{card:u.getElement(M.CardElement)}}).then((function(e){var t=e.paymentIntent;v.collection("users").doc(null===l||void 0===l?void 0:l.uid).collection("orders").doc(t.id).set({basket:r,amount:t.amount,created:t.created}),h(!0),T(null),O(!1),i({type:"EMPTY_BASKET"}),m("/orders")}));case 4:e.sent;case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return c.a.createElement("div",{className:"payment"},c.a.createElement("div",{className:"payment__container"},c.a.createElement("h1",null,"Checkout (",c.a.createElement(p.b,{to:"/checkout"},null===r||void 0===r?void 0:r.length," items)")),c.a.createElement("div",{className:"payment__section"},c.a.createElement("div",{className:"payment__title"},c.a.createElement("h3",null,"Delivery Address")),c.a.createElement("div",{className:"payment__address"},c.a.createElement("p",null,null===l||void 0===l?void 0:l.email),c.a.createElement("p",null,"123 React Lane"),c.a.createElement("p",null,"Los Angeles, CA"))),c.a.createElement("div",{className:"payment__section"},c.a.createElement("div",{className:"payment__title"},c.a.createElement("h3",null,"Review items and delivery")),c.a.createElement("div",{className:"payment__items"},r.map((function(e){return c.a.createElement(w,{id:e.id,title:e.title,image:e.image,price:e.price,rating:e.rating})})))),c.a.createElement("div",{className:"payment__section"},c.a.createElement("div",{className:"payment__title"},c.a.createElement("h3",null,"Payment Method")),c.a.createElement("div",{className:"payment__details"},c.a.createElement("form",{onSubmit:Y},c.a.createElement(M.CardElement,{onChange:function(e){x(e.empty),T(e.error?e.error.message:"")}}),c.a.createElement("div",{className:"payment__priceContainer"},c.a.createElement(j.a,{renderText:function(e){return c.a.createElement("h3",null,"Order Total: ",e)},decimalScale:2,value:C(r),displayType:"text",thousandSeparator:!0,prefix:"\u20b9"}),c.a.createElement("button",{disabled:N||B||_},c.a.createElement("span",null,N?c.a.createElement("p",null,"Processing"):"Buy Now"))),S&&c.a.createElement("div",null,S))))))},U=a(63),K=a(64),Y=a.n(K);a(109);var G=function(e){var t,a=e.order;return c.a.createElement("div",{className:"order"},c.a.createElement("h2",null,"Order"),c.a.createElement("p",null,Y.a.unix(a.data.created).format("MMMM Do YYYY, h:mma")),c.a.createElement("p",{className:"order__id"},c.a.createElement("small",null,a.id)),null===(t=a.data.basket)||void 0===t?void 0:t.map((function(e){return c.a.createElement(w,{id:e.id,title:e.title,image:e.image,price:e.price,rating:e.rating,hideButton:!0})})),c.a.createElement(j.a,{renderText:function(e){return c.a.createElement("h3",{className:"order__total"},"Order Total: ",e)},decimalScale:2,value:a.data.amount/100,displayType:"text",thousandSeparator:!0,prefix:"\u20b9"}))};a(110);var X=function(){var e=g(),t=Object(o.a)(e,2),a=t[0],r=(a.basket,a.user),l=(t[1],Object(n.useState)([])),i=Object(o.a)(l,2),m=i[0],s=i[1];return Object(n.useEffect)((function(){r?v.collection("users").doc(null===r||void 0===r?void 0:r.uid).collection("orders").orderBy("created","desc").onSnapshot((function(e){s(e.docs.map((function(e){return{id:e.id,data:e.data()}})))})):s([])}),[r]),c.a.createElement("div",{class:"orders"},c.a.createElement("h1",null,"Your Orders"),c.a.createElement("div",{className:"orders__order"},null===m||void 0===m?void 0:m.map((function(e){return c.a.createElement(G,{order:e})}))))},W=Object(U.a)("pk_test_51KRxLcSIXOpM78ObnTvUFT3B6SW8F02hw1wrlrRq74FEPtdKEcLgu1FspGYIDsYQTnuM0wfDNFgFX1Cs7gcWm4I600GwcVv8xC");var H=function(){var e=g(),t=Object(o.a)(e,2);Object(i.a)(t[0]);var a=t[1];return Object(n.useEffect)((function(){f.onAuthStateChanged((function(e){console.log("THE USER IS >>>",e),a(e?{type:"SET_USER",user:e}:{type:"SET_USER",user:null})}))}),[]),c.a.createElement(p.a,null,c.a.createElement("div",{className:"app"},c.a.createElement(A.c,null,c.a.createElement(A.a,{path:"/orders",element:[c.a.createElement(b,null),c.a.createElement(X,null)]}),c.a.createElement(A.a,{path:"/login",element:[c.a.createElement(B,null)]}),c.a.createElement(A.a,{path:"/checkout",element:[c.a.createElement(b,null),c.a.createElement(L,null)]}),c.a.createElement(A.a,{path:"/payment",element:[c.a.createElement(b,null),c.a.createElement(M.Elements,{stripe:W},c.a.createElement(F,null))]}),c.a.createElement(A.a,{path:"/",element:[c.a.createElement(b,null),c.a.createElement(O,null)]}))))},V=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,125)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,r=t.getLCP,l=t.getTTFB;a(e),n(e),c(e),r(e),l(e)}))};l.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(_,{initialState:{basket:[],user:null},reducer:T},c.a.createElement(H,null))),document.getElementById("root")),V()},67:function(e,t,a){e.exports=a(112)},72:function(e,t,a){},73:function(e,t,a){},74:function(e,t,a){},81:function(e,t,a){},82:function(e,t,a){},83:function(e,t,a){},84:function(e,t,a){},88:function(e,t,a){},89:function(e,t,a){},90:function(e,t,a){}},[[67,1,2]]]);
//# sourceMappingURL=main.5087ae54.chunk.js.map
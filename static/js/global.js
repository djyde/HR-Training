!(function(){
  $(document).ready(function(){
    $('.tabular.menu .item').tab();

    $('.ui.checkbox').checkbox();

    $('.ui.dropdown').dropdown();

    $('.activating.element').popup();

    $('.flexslider').flexslider({
      slideshowSpeed: 3000,
      controlNav: false,
      directionNav: false
    });

    $('.special.cards .image').dimmer({
      on: 'hover'
    });

    var books = [];
    var initBooks = [{
      id: 1,
      title: 'Faust',
      image: 'https://upload.wikimedia.org/wikipedia/commons/0/07/Goethe\'s_Faust.jpeg',
      author: 'Goethe',
      price: 12
    }]

    if(localStorage.getItem('cart')){
      books = JSON.parse(localStorage.getItem('cart'));
    } else {
      localStorage.setItem('cart',JSON.stringify(initBooks));
    }

    

    var app = new Vue({
      el: '#app',
      data: {
        books: books,
        cartCount: books.length,
        isCartEmpty: books.length === 0 ? true : false,
      },
      methods: {
        add: function(){
          books.push({
            id: 1,
            title: 'Faust',
            image: 'https://upload.wikimedia.org/wikipedia/commons/0/07/Goethe\'s_Faust.jpeg',
            author: 'Goethe',
            price: 12
          })
          localStorage.setItem('cart',JSON.stringify(books));
          app.books = books;
          app.cartCount = books.length;
          app.isCartEmpty = false;
          $('#cart').popup('toggle');
        },

        remove: function(index){
          books.splice(index,1);
          localStorage.setItem('cart',JSON.stringify(books));
          app.books = books;
          app.cartCount = books.length;
          app.isCartEmpty = books.length === 0 ? true : false;
        }
      }
    })
  })
})()
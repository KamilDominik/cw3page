<template>
  <div id="app">
    <div id="sort_search">
      <header>
        <h1> Lesson store </h1>
      </header>
      <div id="sort_panel" v-show="show_products || !this.len">
        <Strong>SORTING OPTIONS</Strong>
        <select v-model="sorty.type">
          <option value="">Default</option>
          <option value="P">Price</option>
          <option value="A">Availability </option>
        </select>
        <br><br><br>
        <Strong>ORDER BY</Strong>
        <select v-model="sorty.order_by">
          <option value="">Default</option>
          <option value="HL">High to Low</option>
          <option value="LH">Low to High</option>
        </select>
        <br><br><br>
        <input type="button" value="SORT" @click="sort_array">
      </div>
      <div id="search_bar" v-show="hideit">
        <strong>Search</strong>
        <input type="text" v-model= "search_term"><br>
      </div>
      <!-- button for the shopping cart -->
      <button v-show="len" @click="show_cart">{{this.cart.length}}  Shopping Cart</button>
      <br>
    </div>
    <div id="prods">
      <displayProducts @addproduct='add_to_cart' :courses="courses" v-show= show_products></displayProducts>
    </div>
    <checkout @removefromcart='remove_from_cart' @placeOrder='place_my_order' :cart="cart"  v-show= !show_products></checkout>
  </div>
</template>

<script>

import checkout from './components/checkout.vue'
import displayProducts from './components/displayProducts.vue'


export default {
  name: 'app',
  components: {
    displayProducts, checkout
  },
  data()
  {
    return{
      hideit :true,
      search_term :'',
      courses:[],
      show_products:true,
      ref:true,
      cart:[],
      len:false,
      sorty:
      {
        type: '',
        order_by: ''
      }
    }
  },
//function to load data from MongoDB Atlas using GET request
  created: function () {
  fetch('https://cw3-main.herokuapp.com/collection/products')
    .then(response => response.json())
    .then(data => this.courses = data)
    .catch(err=> console.log(err.message))
  },
  watch:{
    search_term() 
    {
      fetch('https://cw3-main.herokuapp.com/collection/products'+ this.search_term)
      .then(response => response.json())
      .then(data => 
      this.courses = data)
      .catch(err => console.log(err.message))
    }
  },

  computed:
  {
    filtered_courses() {
      return this.courses.filter((course) => {
      return course.subject.match(this.search_term) || course.campus.match(this.search_term);
      })
    },
    search_only() {
      return true;
    },
  },  
  methods: {
    place_my_order(order) 
    {
      //POST request to server
      fetch('https://cw3-main.herokuapp.com/collection/orders',
      {
        method:'POST',
        headers:
        {
          'Content-Type' : 'application/json'
        },
        body:JSON.stringify(order)
      })
      .then(response =>
      {
        console.log(response);
        alert("Order Placed Successfully");
      })
      this.cart=[];
      this.len = false;
      this.show_product = true;
      this.hideit = true;
    },    
    show_cart() {
      if (this.show_products === true){
        this.show_products = false;
        this.hideit = false;
        }
        else {
          this.show_products = true;
          this.hideit = true;
        }
    },
    sort_array() {
      if (this.sorty.type == "P" && this.sorty.order_by == "HL") 
      {
        fetch('https://cw3-main.herokuapp.com/collection/products/price/-1')
        .then(response => response.json())
        .then(data => 
        this.courses = data)
        .catch(err => console.log(err.message))
      }
      else if (this.sorty.type == "P" && this.sorty.order_by == "LH") {
        fetch('https://cw3-main.herokuapp.com/collection/products/price/1')
        .then(response => response.json())
        .then(data => 
        this.courses = data)
        .catch(err => console.log(err.message))
      }
      else if (this.sorty.type == "A" && this.sorty.order_by == "HL") {
        fetch('https://cw3-main.herokuapp.com/collection/products/price/-1')
        .then(response => response.json())
        .then(data => 
        this.courses = data)
        .catch(err => console.log(err.message))
      }          
      else if (this.sorty.type == "A" && this.sorty.order_by == "LH") {
        fetch('https://cw3-main.herokuapp.com/collection/products/price/1')
        .then(response => response.json())
        .then(data => 
        this.courses = data)
        .catch(err => console.log(err.message))
      }           
      this.show_product=false;
      this.show_product=true;          
    },
    remove_from_cart(id_p) {
    //fix the broken code
    var deletedItem;
    for(var i=0;i<this.cart.length;i++)
    {
      if(this.cart[i]._id === id_p)
      {
        deletedItem = this.cart.splice(i,1);
      }          
    }             
    //checking the number of items in the cart
    if (this.cart.length === 0) 
    {
      this.len = false;
      this.show_products = true;
      this.hideit = true;
    }
    //needs to replace back to products
    var tempItem;
    for(i=0; i<this.courses.length;i++)
    {
      if(this.courses[i]._id === deletedItem[0]._id)
      {
        this.courses[i].spaces = this.courses[i].spaces + 1;
        this.courses[i].A_D = false;
        tempItem = this.courses[i];
      }
    }
    const tempObj = {spaces:tempItem.spaces ,A_D:tempItem.A_D};
    fetch('https://cw3-main.herokuapp.com/collection/products/'+tempItem._id , 
    {
      method:'PUT',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify(tempObj)
    })
    .then(response =>
    {
      console.log(response);
    })        
  },
    //function to add items to the cart
    add_to_cart(id_p) 
    {
      for (var i = 0; i < this.courses.length; i++)
      {
        if (this.courses[i]._id === id_p) 
        {
          //pushing items to the cart array   
          this.cart.push(this.courses[i]);
          //enabling the shopping cart button(as atleast one course is added at this point)
          this.len = true;
          if (this.courses[i].spaces > 0) 
          {
            //needs to replace with PUT request 
            this.courses[i].spaces = this.courses[i].spaces - 1;
            if(this.courses[i].spaces === 0)
            {
              this.courses[i].A_D = true;
            }           
            const tempObj = {spaces:this.courses[i].spaces ,A_D:this.courses[i].A_D};
            fetch('https://cw3-main.herokuapp.com/collection/products/'+this.courses[i]._id , 
            {
              method:'PUT',
              headers:{
                'Content-Type':'application/json'
              },
              body:JSON.stringify(tempObj)
            })
            .then(response =>
            {
              console.log(response);
            })
          }
        }
      }
    }    
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#sort_panel{
  display:block;
  float :left;
  padding-top: 30px;
  width : 400px;
  height : 175px;
  border : 1px solid black;
  border-radius: 10px;
}
#search_bar{
margin-left: 150px;
margin-top:50x;
display :block;
float:left;
}
#sort_search{
  display:block;
  height: 350px;
}
h1{
  font-size: 45px;
}
</style>

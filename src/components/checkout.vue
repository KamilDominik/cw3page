<template>
<div >
    <!-- The checout page starts here -->
      <div v-for="c in cart" :key="c.id">
        <div id="v_cart">
            <h2>{{c.subject}}</h2>
            <p>{{c.campus}}</p>
            <p>{{c.price}}</p>
            <input type="button" value="Remove" @click="remove_from_cart(c._id)">
        </div>
      </div>
    <!-- This div is to take input for placing order -->
    <p>First Name</p>
    <input type="text" id="fname" v-model="order.first_name"><br><br>
    <p>Last Name</p>
    <input type="text" id="lname" v-model="order.last_name"><br><br>
    <p>Phone Number</p>
    <input type="text" id="phone" v-model="order.phone_number"><br><br>
    <p>Post Code</p>
    <input type="text" id="postcode" v-model="order.postcode"><br><br>
    <p>Address Line</p>
    <input type="text" id="address" v-model="order.address"><br><br>
    <input type="button" value="Place Order" v-show="all_info" @click="place_my_order">
</div>   
</template>

<script>
  var myregex1 = /^\d+\d*$/;
  var myregex2 = /^[a-z]+[a-z]*$/;
export default{
    name: "checkOut",
    props:['cart'],
    data(){
        return{
            s_p : !(this.show_products),
            order:
            {
                first_name:'',
                last_name: '',
                phone_number: '',
                postcode: '',
                address: '',
                items: []
            },
        }
    },
    computed:
    {
        all_info() {
            //checking if all the information is correct in the form
            if (myregex1.test(this.order.phone_number) && myregex2.test(this.order.first_name) && myregex2.test(this.order.last_name) ){
            return true;
        }
      else{
        return false;
      }
    }
    },
    methods:
    {
        remove_from_cart(id)
        {
            this.$emit('removefromcart',id);
        },
        place_my_order()
        {
            this.order.items = this.cart;
            this.$emit('placeOrder',this.order);
        }
    }
}
</script>

<style>
#v_cart{
    display:block;
    float:left;
    width: 150px;
    height :150px;
    border : 1px solid pink;
    border-radius : 5px;
    margin : 5px;
}

</style>

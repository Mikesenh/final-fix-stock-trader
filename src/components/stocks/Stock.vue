<template>
  <div class="col-sm-6 col-md-4">
    <div class="panel panel-success">
      <div class="panel-heading">
        <h3 class="panel-title">
          <!--ToDo: Display the stock.name data object-->
          {{ stock.name }}
          <!--ToDo: Inside <small> tags display Price: stock.price-->
            <small> {{ stock.price }} </small>
        </h3>
      </div>
      <div class="panel-body">
        <div class="pull-left">
          <!--ToDo: Inside input use v-model.number and pass quantity-->
          <!--ToDo: Bind to class using : and pass object called danger that takes in insufficientFunds-->
          <input
            v-model.number="quantity"
            type="number"
            class="form-control"
            placeholder="Quantity"
            :class="{danger: insufficientFunds}"

          >
        </div>
        <div class="pull-right">
          <!--ToDo: Inside the button add a click event that calls buyStock-->
          <!--ToDo: Bind to disabled using : and set it equal to insufficientFunds || quantity is less than or equal to 0 || !Number.isInteger(quantity)-->
          <button @click="buyStock" class="btn btn-success" :disabled = "insufficientFunds || quantity <= 0">
            <!--ToDo: Display insufficientFunds data object and add if using ? 'Not Enough' else 'Buy'-->
            <!-- condition ? exprIfTrue : exprIfFalse -->
            {{ insufficientFunds ? 'Insufficient Funds' : 'Buy' }}
            <!--insufficientFunds ? 'Not Enough' : 'Buy'-->
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.danger {
  border: 1px solid red;
}
</style>

<script>
export default {
  //ToDo: Set props equal to stock using array syntax
  props: ["stock"],
  data () {
    return {
      //ToDo: Create data object called quantity and set it to 0
      quantity: 0
    }
  },
  computed: {
    //ToDo: Create a computed function called funds
    funds: function() {
    //ToDo: Have funds() return $store.getters.funds
      return this.$store.getters.funds
    },
    //ToDo: Create a computed function called insufficientFunds
    insufficientFunds: function() {
      //ToDo: Have insufficientFunds() return this.quantity * this.stock.price > this.funds
      return this.quantity * this.stock.price > this.funds
    }
    
  },
  methods: {
    //ToDo: Create buyStock method
    buyStock: function() {
      //ToDo: Create const called order that holds an object
      const order = {
    //ToDo: Set stockId: to this.stock.id
      stockId: this.stock.id,
    //ToDo: Set stockPrice: to this.stock.price
      stockPrice: this.stock.price,
    //ToDo: Set quantity: to this.quantity
      quantity: this.quantity
    //ToDo: Outside the data object $store.dispatch() passing 'buyStock' and order
    //ToDo: Reset quantity to 0
      }
      this.$store.dispatch('buyStock', order)
      this.quantity = 0
    }
  }
}
</script>
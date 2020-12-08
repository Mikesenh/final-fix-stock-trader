<template>
    <div class="col-sm-6 col-md-4">
        <div class="panel panel-info">
            <div class="panel-heading">
                <h3 class="panel-title">
                    <!--ToDo: Display the stock.name data object-->
                    {{ stock.name }}
                    <!--ToDo: Inside <small> tags display Price: stock.price | Quantity stock.quantity-->
                    <small>Price: {{stock.price}} | Quantity {{stock.quantity}} </small>
                </h3>
            </div>
            <div class="panel-body">
                <div class="pull-left">
                    <!--ToDo: Inside input use v-model.number and pass quantity-->
                        <!--ToDo: Bind to class using : and pass object called danger that takes in insufficientQuantity-->
                    <input  v-model.number="quantity"
                            :class="{ danger: insufficientQuantity }"
                            type="number"
                            class="form-control"
                            placeholder="Quantity"> 
                </div>
                <div class="pull-right">
                    <!--ToDo: Inside the button add a click event that calls sellStock-->
                        <!--ToDo: Bind to disabled using : and set it equal to insufficientQuantity || quantity is less than or equal to 0 || !Number.isInteger(quantity)-->
                    <button class="btn btn-success" @click="sellStock" :disabled="insufficientQuantity || quantity <= 0 " >
                        <!--ToDo: Display insufficientQuantity data object and add if using ? 'Not Enough' else 'Sell'-->
                        <!-- condition ? exprIfTrue : exprIfFalse -->
                        {{ insufficientQuantity ? 'Not Enough' : 'Sell' }}

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
import { mapActions } from 'vuex'
    //ToDo: Import mapActions from vuex

    export default {
        //ToDo: Set props equal to stock using array syntax
        props: ["stock"],
        data() {
            return {
                //ToDo: Create data object called quantity and set it to 0
                quantity: 0
            }
        },
        computed: {
            //ToDo: Create a computed function called insufficientQuantity
            insufficientQuantity: function () {
                //ToDo: Have insufficientQuantity() return this.quantity > this.stock.quantity
                return this.quantity > this.stock.quantity
            }
        },
        methods: {
            //ToDo: Create ...mapActions method
            ...mapActions({
            //ToDo: Call placeSellOrder: 'sellStock'
          placeSellOrder : 'sellStock'
            }),
            //ToDo: Create sellStock method
            sellStock: function () {
                const order = {
                    stockId: this.stock.id,
                    stockPrice: this.stock.price,
                    quantity: this.quantity
                }
                this.placeSellOrder(order)
                this.quantity = 0;
            }
                //ToDo: Create const called order that holds an object
                    //ToDo: Set stockId: to this.stock.id
                    //ToDo: Set stockPrice: to this.stock.price
                    //ToDo: Set quantity: to this.quantity
            //ToDo: Outside the data object pass the data object order to placeSellOrder()
            //ToDo: Reset quantity to 0
        }
    }
</script>
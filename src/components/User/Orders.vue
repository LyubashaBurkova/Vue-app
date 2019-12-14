<template>
  <v-container>
    <v-layout row>
      <v-flex xs12 sm6 offset-sm3>
        <h1 class="text--secondary mb-3">Orders</h1>
        <v-list class="mb-3" two-line subheader>
          <v-list-tile avatar
                       v-for="order in orders"
                       :key="order.id">
            <!--<v-list-tile-action>
        <v-checkbox v-model="notifications"></v-checkbox>
      </v-list-tile-action>-->
            <v-list-tile-action>
              <!--input-value    :input-value="order.done"-->
              <v-checkbox color="success"
                          :input-value="order.done"
                          @change="markDone(order)"></v-checkbox>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>{{order.name}}</v-list-tile-title>
              <v-list-tile-sub-title>{{order.phone}}</v-list-tile-sub-title>
            </v-list-tile-content>
            <v-list-tile-action>
              <v-btn class="primary"
                     :to="'/ad/'+ order.id">
                Open
              </v-btn>
            </v-list-tile-action>
          </v-list-tile>
        </v-list>        
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
  export default {


    data() {
      return {
        notifications: false,
        orders: [
          {
            id: '123',
            name: '123',
            phone: '1324545',
            adId: '123',
            done: true
          }
        ],
        items: [1, 2, 3, 4, 5, 6],
        nexNum: 6
      }
    },
    methods: {
      markDone() {
        this.order.done = true
      },
      getIndex() {
        return Math.floor(Math.random() * this.items.length)
      },
      add() {
        this.items.splice(this.getIndex(), 0, this.nexNum++)
      },
      remove() {
        this.items.splice(this.getIndex(), 1)
      }
    }
  }
</script>

<style>
  .width300{
    width:300px;
    text-align: center;
    margin: 0 auto;
  }

  .ma-enter-active,
  .ma-leave-active { 
    transition: all 2s;
  }

  .ma-enter,
  .ma-leave-to {
    transform: translateX(-100px);
  }

</style>

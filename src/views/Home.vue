<template>
  <v-data-table :headers="columns" :items="items" :loading="loading" />
</template>

<script>
import HelloWorld from "../components/HelloWorld";
import { getCustomers, getOrderDetails, getAll } from "../api";
import { MXLoading } from "../mixins";
import { CustomerRepository } from "../repositories";

export default {
  name: "Home",

  components: {
    HelloWorld
  },
  mixins: [MXLoading],

  created() {
    this.customerRepo = new CustomerRepository();
    this.loadData();
  },
  data() {
    return {
      columns: [
        {
          text: "Customer ID",
          value: "CustomerID"
        },
        {
          text: "Company Name",
          value: "CompanyName"
        },
        {
          text: "Contact Name",
          value: "ContactName"
        }
      ],
      items: []
    };
  },
  methods: {
    async loadData() {
      try {
        this.showLoading();
        this.items = await this.customerRepo.getAll();
        // this.items = await getAll("Customers", {
        //   $top: 10,
        //   $skip: 1,
        //   $expand: "Orders"
        // });
        // const orderDetail = await getOrderDetails(10447);
      } catch (error) {
      } finally {
        this.hideLoading();
      }
    }
  }
};
</script>

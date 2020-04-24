<template>
  <div class="card">
        <div class="card-header">
          List of Tasks
        </div>
        <div class="card-body">
          <p class="card-text alert alert-primary">Click on the task description to edit</p>
        </div>
        <div class="list-group" >
          <ListRow v-for="item in items" :key="item._id" v-bind:item="item" v-bind:onUpdate="updateItem" v-bind:onDelete="deleteItem"/>
        </div>
        <div class="card-body">
          <button class="btn btn-info" v-on:click="addItem">New task</button>
        </div>
      </div>
</template>

<script>
import ListRow from '@/components/ListRow.vue'
import ApiService from '@/components/ApiService.vue'

export default {
  name: 'List',
  data () {
    return {
      items: []
    }
  },
  components: {
    ListRow
  },
  created () {
    this.getItems()
  },
  methods: {
    getItems () {
      ApiService.all(items => {
        items.forEach(item => {
          item.desc = ApiService.decodeHTML(item.desc)
        })
        this.items = items
      })
    },
    addItem () {
      this.$router.push('add')
    },
    deleteItem (event) {
      const id = event.target.id
      ApiService.delete(id, () => {
        this.getItems()
      })
    },
    updateItem (event) {
      const id = event.target.id
      this.$router.push('/update/' + id)
    }
  }
}
</script>

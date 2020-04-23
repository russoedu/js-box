<template>
  <div class="card">
        <div class="card-header">
          List of Tasks
        </div>
        <div class="card-body">
          <p class="card-text alert alert-primary">Click on the task description to edit</p>
        </div>
        <div class="list-group" >
          <ListRow v-for="item in items" :key="item._id" v-bind:item="item" v-bind:onUpdate="onUpdate" v-bind:onDelete="onDelete"/>
        </div>
        <div class="card-body">
          <button class="btn btn-info" v-on:click="add">New task</button>
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
    this.fillData()
  },
  methods: {
    fillData () {
      ApiService.all(items => {
        this.items = items
      })
    },
    add () {
      this.$router.push('add')
    },
    onDelete (event) {
      ApiService.delete(event.target.id, () => {
        this.fillData()
      })
    },
    onUpdate (event) {
      this.$router.push(`update/${event.target.id}`)
    }
  }
}
</script>

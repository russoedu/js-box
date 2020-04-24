<template>
  <Form
    title="Edit Task"
    v-model="item.desc"
    submitTitle="Update"
    v-bind:handleSubmit="updateItem"
  />
</template>

<script>
import Form from '@/components/Form.vue'
import ApiService from '@/components/ApiService.vue'

export default {
  name: 'Update',
  components: {
    Form
  },
  data () {
    return {
      item: ''
    }
  },
  created () {
    ApiService.get(this.$route.params.id, item => {
      item.desc = ApiService.decodeHTML(item.desc)
      this.item = item
    })
  },
  methods: {
    updateItem () {
      ApiService.update(this.item.desc, this.item._id, () => {
        this.$router.push('/')
      })
    }
  }
}
</script>

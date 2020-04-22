<template>
  <Form
    title="Edit Task"
    v-model="item.desc"
    submitTitle="Update"
    v-bind:handleSubmit="handleSubmit" />
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
      this.item = item
    })
  },
  methods: {
    handleSubmit (desc) {
      ApiService.update(desc, this.item._id, () => {
        this.$router.push('/')
      })
    }
  }
}
</script>

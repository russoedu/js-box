<template>
  <Form
    title="Add Task"
    v-model="desc"
    submitTitle="Add"
    v-bind:handleSubmit="handleSubmit" />
</template>

<script>
import Form from '@/components/Form.vue'
import ApiService from '@/components/ApiService.vue'

export default {
  name: 'Add',
  components: {
    Form
  },
  data () {
    return {
      desc: ''
    }
  },
  methods: {
    handleSubmit (desc) {
      ApiService.add(desc, () => {
        this.$router.push('/')
      })
    }
  }
}
</script>

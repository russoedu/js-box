<template>
  <Form
    title="Add Task"
    submitTitle="Add"
    v-model="desc"
    v-bind:handleSubmit="addItem" />
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
    addItem () {
      ApiService.add(this.desc, () => {
        this.$router.push('/')
      })
    }
  }
}
</script>

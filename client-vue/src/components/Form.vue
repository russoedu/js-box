<template>
  <div class="card">
    <form v-on:submit.prevent="submit">
      <div class="card-header">
        <div class="panel-heading">
          {{title}}
        </div>
      </div>
      <div class="card-body">
        <p class="card-text">
          Task description
        </p>
        <input
          type="text"
          class="form-control"
          v-model="descLocal"
          ref="desc"
        />
        <div v-if="alert" class="alert alert-warning" id="desc-input-alert" role="alert">
          Task description can&apos;t be empty
          <button type="button" class="close" aria-label="Close" v-on:click="closeAlert">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
      </div>
      <div class="card-body">
        <button
          type="submit"
          class="btn btn-primary"
        >
          {{submitTitle}}
        </button>
        <button type="button" class="btn btn-info" v-on:click="cancel">Cancel</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'Form',
  props: {
    title: String,
    desc: String,
    submitTitle: String,
    handleSubmit: Function
  },
  model: {
    prop: 'desc',
    event: 'descChange'
  },
  computed: {
    descLocal: {
      get () {
        return this.desc
      },
      set (value) {
        this.$emit('descChange', value)
      }
    }
  },
  mounted () {
    this.focusOnDesc()
  },
  data () {
    return {
      alert: false
    }
  },
  methods: {
    submit (event) {
      if (this.descLocal === '') {
        this.alert = true
      } else {
        this.handleSubmit(this.descLocal)
      }
    },
    closeAlert () {
      this.alert = false
    },
    cancel () {
      this.$router.push('/')
    },
    focusOnDesc () {
      this.$refs.desc.focus()
    }
  }
}
</script>

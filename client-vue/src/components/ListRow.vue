<template>
  <div class="list-group-item">
    <button
      v-bind:id="item._id"
      class="btn btn-delete btn-danger bmd-btn-fab bmd-btn-fab-sm"
      value="Delete"
      v-on:click="onDelete"
    >
      &times;
    </button>
    <span
      v-bind:id="item._id"
      class="lead item-description"
      v-on:click="onUpdate"
    >
      {{item.desc}}
    </span>
  </div>
</template>

<script>
export default {
  name: 'ListRow',
  props: {
    item: Object,
    onDelete: Function,
    onUpdate: Function
  }
}
</script>

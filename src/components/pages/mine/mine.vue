<template>
 <div class="mine page">
    <mt-button @click.native = "handleClick">按钮</mt-button>
</div>
</template>
 
<script>
export default{
 name: 'mine',
 methods: {
  handleClick: function() {
   this.$toast('Hello world!');
  }
 }
}
</script>
 
<style lang="scss" scoped>
</style>
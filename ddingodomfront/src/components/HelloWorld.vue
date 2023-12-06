<template>

 {{UserName}}  <h2>Heoll World</h2>

</template>

<script>


export default {
  name : 'HelloWorld',
  data() {
    UserName : ""
  },
  created() {
    console.log( this.$store.state.name);
  }
}
  //
</script>

<template>
  <div class="products-create  p-5">
    <div class="title">
        <h3>Sell an item</h3>
    </div>
    <form action="" @submit.prevent>
        <div class="image">
            <label for="image">Upload Image</label>
            <input class="form-control" type="file" accept="image/*" name="image" id="image">
            <img src="" alt="">
        </div>
        <div class="title">
            <label for="title">Title</label>
            <input type="text" id="title" name="title">
        </div>
        <div class="desc">
            <label for="description">Descripe Your Item</label>
            <textarea id="description" name="description"/>
        </div>
        <div class="category">
            <label for="category">Category</label>
            <select name="category" id="">
                <option value="A-Z">A-Z</option>
                <option value="A-Z">Z-A</option>
                <option value="A-Z">Price: Low to High</option>
                <option value="A-Z">Price: High to Low</option>
              </select>
        </div>
        <div class="price">
            <label for="price">Item Price</label>
            <input type="number" id="price" name="price"/>
        </div>
        <button class="submit  px-8 py-2 bg-lime-200 text-[14px] leading-[22px]" @click="submit()">Upload Item</button>
    </form>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'products-create',
  methods:{
    submit() {
      this.$emit('close-create-popup')
    }
  },
  components: {
  }
}
</script>
<style scoped>
.title {
  width: 684px;
  height: 34px;

}
 .title h3 {
  font-family: Lexend Deca;
  font-size: 30px;
  font-weight: 500;
  line-height: 34px;
  text-align: left;
  
  }
</style>

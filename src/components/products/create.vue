<template>
  <div class="products-create px-5">
    <div class="title h-[34px] w-full">
      <h3 class="text-[30px] font-medium leading-9 text-left font-bodyFont">Sell an item</h3>
    </div>
    <form @submit.prevent class="pt-[20px]">
      <div class="content-form pb-[10px]">
        <div class="image">
          <label for="image">Upload Photos</label>
          <input 
            class="form-control" 
            type="file" 
            accept="image/*" 
            name="image" 
            id="image" 
            @change="handleImageUpload"
            ref="imageInput" 
            style="display: none;" 
          >
          <div 
            class="image-preview h-[10rem]" 
            @click="triggerUpload"
            style="width: 100%; cursor: pointer;"
          >
            <img 
              v-if="product.image" 
              :src="product.image" 
              alt="Uploaded Image" 
              style="width: 100%; height: 100%;"
            />
            <span v-else class="upload-btn m-auto"> <span class="border borer-[#D9F99D] w-[139px] h-[44px] pt-[8px] text-center text-[#171717] text-[14px] font-[400] leading-[22px] " style="border: 1px solid #D9F99D ">Upload Photo</span></span>
          </div>
        </div>
        <div class="title py-[2px]">
          <label for="title">Title</label>
          <input  class="w-full p-2 focus:outline-none border" v-model="product.name" type="text" id="title" name="title">
        </div>
        <div class="desc py-[5px]">
          <label for="description " class="">Describe Your Item</label>
          <textarea  class="w-full p-2 focus:outline-none border" v-model="product.description" id="description" name="description"></textarea>
        </div>
        <div class="category py-[2px]">
          <label for="category">Category</label>
          <select  class="w-full p-2 focus:outline-none border" v-model="product.category" name="category" id="">
            <option value="Men Clothes">Men Clothes</option>
            <option value="Kids Clothes">Kids Clothes</option>
            <option value="Woman Clothes">Woman Clothes</option>
          </select>
        </div>
        <div class="price py-[2px] w-full relative">
          <label for="price">Item Price</label>
          <span class="text-gray-800 absolute left-3 bottom-2">£</span>
          <input class="left-[10px] w-full p-2 focus:outline-none border text-right" v-model="product.price" type="number" id="price" name="price" placeholder="00.00"/>
        </div>
      </div>
      <div class="submit-btn w-full">
        <button class="submit px-8 py-2 bg-lime-200 text-[14px] leading-[22px] w-full" @click="submit()">Upload Item</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'products-create',
  data() {
    return {
      product: {
        name: "",
        price: null,
        category: 'Men Clothes',
        description: null,
        image: 'images/products/blose.png',
      },
    };
  },
  methods: {
    handleImageUpload(event) {
      const file = event.target.files[0];
      if (file) {
        this.product.image = URL.createObjectURL(file);
        // Hide the upload button by manipulating the display directly
        this.$refs.imageInput.style.display = 'none';
      }
    },
    triggerUpload() {
      this.$refs.imageInput.click();
    },
    submit() {
      this.product.image ='images/products/blose.png'
      this.$emit('add-product', this.product);
    },
  },
  components: {},
};
</script>

<style scoped>
  input[type="number"]::-webkit-inner-spin-button,
  input[type="number"]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
}

label {
  font-family: Lexend Deca;
  font-size: 14px;
  font-weight: 300;
  line-height: 22px;
  text-align: left;
  display: block;
}
.image-preview {
  border: 1px dashed #ccc;
  padding: 10px;
  position: relative;
  
}
.upload-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  max-height: 100px; /* Set a height for the upload area */
  color: #aaa;
}
@media (max-width: 767px) {
  .submit-btn {
    padding-bottom: 20px;
   }
}
@media (max-width: 320px) {
  .title h3 {
    font-size: 20px;
    line-height: 22px;
  }
  label {
    font-size: 12px;
    line-height:14px;
  }
 .title {height: auto;}
 .upload-btn span {
  height: auto;
  width: auto;
  padding: 5px;
  font-size: 12px;
  line-height:14px;
 }
 .category select {
  font-size: 12px;
  line-height:14px;
 }
 .submit-btn button{
  font-size: 12px;
  line-height:14px;
 }
 
}
</style>

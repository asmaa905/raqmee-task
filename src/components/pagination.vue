<template>
  <div class="flex flex-col justify-center  items-center mx-auto" style="width: 95%; margin: auto;">
    <template v-if="products && products.length">

    <div class="grid md:grid-cols-4  sm:grid-cols-3" aria-live="polite" style="width: 100%;">
        <div class="product px-2 gap-5 " v-for="prod in products" :key="prod.id">
          <div class="image w-full h-[70%]">
            <img class="h-full w-full"  :src="prod.image" alt="" />
          </div>
          <div class="prod-info grid justify-between items-start grid-cols-5 pt-[10px]">
            <div class="col-span-4 prod-data text-left" style="align-self: self-start;">
              <p class="name  text-[#171717]">{{ prod.name }}</p>
              <p class="price">£{{ prod.price }}.00</p>
              <div class="vendor flex justify-start gap-2 items-center">
                <div class="vendor-avatar">
                  <img :src="prod?.vendor?.image" :alt="prod?.vendor?.name" />
                </div>
                <p class="vendor-name text-[#171717] text-[10px] leading-4	 text-left">{{ prod?.vendor?.name }}</p>
              </div>
            </div>
            
            <div class="fav text-right col-span-1  ml-auto">
              <svg width="17" height="15" viewBox="0 0 17 15" :fill="prod.fav ? 'red' : 'none'" :stroke="prod.fav? '#1d1c1c' : '#1d1c1c'" xmlns="http://www.w3.org/2000/svg">
                <path d="M2.53487 2.52572C1.07041 3.99018 1.07041 6.36455 2.53487 7.82902L8.93657 14.2307L15.3382 7.82902C16.8026 6.36455 16.8026 3.99018 15.3382 2.52572C13.8737 1.06125 11.4993 1.06125 10.0349 2.52572L8.93657 3.62411L7.83817 2.52572C6.37371 1.06125 3.99934 1.06125 2.53487 2.52572Z" stroke="#171717" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </div>
          </div>
        </div>

    </div>

    <nav class="pagination-container  grid md:grid-cols-3   " style=" width: 100%">
      <div class="pagination-button flex items-center justify-start" 
           @click="prevPage" 
           :disabled="currentPage === 1" 
           aria-label="Previous page" title="Previous page">
        <div class="image md:mr-2 sm:mr-1" style="width:18px; height: 14px;">
          <img src="images/icons/prev.svg" style="width: 100%; height: 100%;" alt="" />
        </div>
        <span style="font-size: 14px; line-height: 22px;">Previous</span>
      </div>

      <div style="">
        <span v-for="page in pageCount" :key="page">
          <button 
            class="pagination-number md:pl-[8px] md:text-lg sm:text-sm md:m-[0.25rem]" 
            :class="{ active: currentPage === page }" 
            @click="changePage(page)">
            {{ page }}
          </button>
        </span>
      </div>

      <div class="pagination-button flex items-center justify-end" 
           @click="nextPage" 
           :disabled="currentPage === pageCount" 
           aria-label="Next page" title="Next page">
        <span style="font-size: 14px; line-height: 22px;">Next</span>
        <div class="image e ml-2" style="width:18px; height: 14px;">
          <img src="images/icons/next.svg" style="width: 100%; height: 100%;" alt="" />
        </div>
      </div>
    </nav>
  </template>
  <template v-else>
    <p>No products available.</p>
  </template>
  </div>
</template>

<script>
export default {
  name: "pagination-vue",
  props: {
    products: {
      type: Array,
      required: true,
    },
    currentPage: {
      type: Number,
      required: true,
    },
    pageCount: {
      type: Number,
      required: true,
    },
  },
  methods: {
    changePage(page) {
      this.$emit('change-page', page);
    },
    prevPage() {
      if (this.currentPage > 1) {
        this.changePage(this.currentPage - 1);
      }
    },
    nextPage() {
      if (this.currentPage < this.pageCount) {
        this.changePage(this.currentPage + 1);
      }
    },
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Inter&display=swap');

.hidden {
  display: none;
}

.pagination-container {
  width: calc(100% - 2rem);
  display: flex;
  align-items: center;
  position: relative;
  padding: 1rem 0;
  justify-content: center;
}

.pagination-number,
.pagination-button {
  font-size: 1.1rem;
  background-color: transparent;
  border: none;
 margin: 0.25rem 0.25rem;
  cursor: pointer;
  border-radius: .2rem;
  padding: 7px 15px;
}
.pagination-button {
  font-size: 1.1rem;
  background-color: transparent;
  border: none;
  margin: 0.25rem 0.25rem;
  cursor: pointer;
  border-radius: .2rem;
  padding: 7px 15px;
}
.pagination-number {
  color: #878383;
}

.pagination-number:hover,
.pagination-button:not(.disabled):hover {
  background: #fff;
}

.pagination-number.active {
  color: #1d1c1c;
  background: #fff;
  border: 1.5px solid #D9F99D;

box-sizing: border-box;
}
.fav {
  border: 1px solid #E5E5E5;
  
  gap: 10px;
  border-radius: 4px ;

}
.vendor-name {
  font-family: Lexend Deca;



}

</style>

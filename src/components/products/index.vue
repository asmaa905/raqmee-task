<template>
  <div class="home bg-white">
    <div class="container mx-auto sm:px-10 px-0">
      <div class="flex flex-col justify-center items-center  px-2  mt-[85px] w-[95%] m-auto h-[44px]">
        <div class="products-head row mx-auto w-full  justify-between md:gap-2 h-full">
          <div class="search-cont p-2 flex lg:w-[37.6%] md:w-[50%]  sm:w-[50%] relative  h-full">
            <input
              class="w-full"
              type="text"
              placeholder="search"
              v-model="search_term"
              @input="searchProduct"
            />
            <div class="image absolute right-4 top:50%">
              <img src="images/icons/search.svg" alt="search" />
            </div>
          </div>
          <div class="filter-set  lg:w-[29.3%] md:w-[50%] sm:w-[50%] flex md:justify-end gap-[3.8%] sm:justify-end lg:flex-row ">
            <div class="filter flex justify-end items-center lg:w-[64.07%] w-full">
              <p class="label pr-2 leading-[14px] text-[10px] xl:leading-[22px] xl:text-[16px]">Sort by</p>
             <!--  line-height: 22px; font-size: 14px; -->

              <!-- <div class=""> -->
                <select v-model="sortBy" name="sortBy" class="select-cont p-3  sort-by input-select  w-[74%] text-[#737373] text-[14px] text-left leading-[22px">
                  <option value="A-Z">A-Z</option>
                  <option value="Z-A">Z-A</option>
                  <option value="Price: Low to High">Price: Low to High</option>
                  <option value="Price: High to Low">Price: High to Low</option>
                </select>
              <!-- </div> -->

            </div>
            <button class="hidden lg:flex w-[32.03%] create-btn xl:px-8 px-2 bg-lime-200 text-[14px] leading-[22px]" @click="$emit('show-create-popup')">
              <div class="icon">
                <i class="fa-regular fa-plus"></i>
              </div>
              <span class="text">Set Item</span>
            </button>
          </div>

        </div>
        <div class="lg:hidden  row mx-auto w-full lg:justify-between md:justify-center md:gap-2">
          <button class="flex create-btn  px-[23px] w-full mt-2 bg-lime-200 text-[14px] leading-[22px]" @click="$emit('show-create-popup')">
            <div class="icon">
              <i class="fa-regular fa-plus"></i>
            </div>
            <span class="text">Set Item</span>
          </button>
        </div>
      </div>

      <div class="flex flex-col justify-center items-center mt-[43.26px]">
        <div class="products-pagination w-auto">
          <Pagination
            :products="paginatedProducts"
            :current-page="currentPage"
            :page-count="pageCount"
            @change-page="changePage"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Pagination from '@/components/pagination.vue';
import { mapGetters } from "vuex";

export default {
  name: 'products-index',
  components: {
    Pagination,
  },
  data() {
    return {
      search_term: '',
      currentPage: 1,
      itemsPerPage: 4,
      sortBy:'Price: Low to High'
    };
  },
  computed: {
    ...mapGetters({ products: "products" }),

    filteredProducts() {
      return this.products.filter((prod) =>
        prod.name.toLowerCase().includes(this.search_term.toLowerCase()) ||
        prod.category.toLowerCase().includes(this.search_term.toLowerCase())
      );
    },

    paginatedProducts() {
      const start = (this.currentPage - 1) * this.itemsPerPage;
      const sortedProducts = [...this.filteredProducts]; // Create a copy for sorting
      
      if (this.sortBy === 'A-Z') {
        sortedProducts.sort((a, b) => (a.name.toLowerCase() > b.name.toLowerCase()) ? 1 : -1);
      } else if (this.sortBy === 'Z-A') {
        sortedProducts.sort((a, b) => (a.name.toLowerCase() < b.name.toLowerCase()) ? 1 : -1);
      } else if (this.sortBy === 'Price: Low to High') {
        sortedProducts.sort((a, b) => a.price - b.price);
      } else if (this.sortBy === 'Price: High to Low') {
        sortedProducts.sort((a, b) => b.price - a.price);
      }
  
      return sortedProducts.slice(start, start + this.itemsPerPage);
    },

    pageCount() {
      return Math.ceil(this.filteredProducts.length / this.itemsPerPage);
    },
  },

  created: async function () {
    await this.$store.dispatch("index");
  },
  methods: {
    searchProduct() {
      this.currentPage = 1; // Reset to first page on search
    },
    changePage(page) {
      this.currentPage = page;
    },
    moveToNext() {
      this.currentPage ++;
    },
    moveTopPrev() {
      this.currentPage --;
    },
  },
  watch: {
  sortBy(val) {
    if(val) {
      this.currentPage = 1; // Reset to the first page on sort change

    }
  }
}

};
</script>

<style>
body {
  font-family: Lexend Deca;
}
.row {
    display: flex;
}


  button.create-btn .text {
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 300;
   
    
    text-align: center;
    color: #171717;
  }
  button.create-btn {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding-top: 11px;
    padding-bottom:11px;
    border-radius: 4px;
  }

  .input-select {
    gap: 0px;
    border-radius: 4px 0px 0px 0px;
    border: 1px solid #E5E5E5;
    opacity: 0px;

  }
.filter label {
  opacity: 0px;
  font-family: Lexend Deca;
  
  font-weight: 400;

  text-align: left;

}
.search-cont {
 /* width: 528.68px;*/
  max-height: 44px;
  /*top: 85px;*/
  gap: 0px;
  border-radius: 4px ;
  
  border: 1px solid #E5E5E5;
  padding: 11px 13px 11px 13px;
  border-radius: 4px;

}
.select-cont  {
  max-height: 44px;
  gap: 0px;  
  border: 1px solid #E5E5E5;
  padding: 11px 13px 11px 13px;
  border-radius: 4px;
}
</style>
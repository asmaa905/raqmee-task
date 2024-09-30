<template>
<div class="overlay h-full w-full bg-[#171717] absolute top-0 bottom-0 right-0 left-0 flex flex-col justify-center items-center">
        <div class=" bg-white popup absolute rounded-[4px] md:w-[35rem] md:h-[37rem] sm:w-[35rem]  w-[96%]">
            <div class="popup-head w-full h-16 flex justify-between gap-9 items-center  px-5">
                <div class="title">
                    <h2>{{title}}</h2>
                </div>
                <button class="close"  @click="$emit('close-popup')"> 
                    <i class="fa-solid fa-close"></i>

                </button>
            </div>
            <div class="w-full content md:px-5">
                <slot />
            </div>
        </div>
    </div>
</template>
<script>
export default {
  name: 'pop-up',
  props:{
    title: {default: ''}
  }

}
</script>
<style>
.overlay {
    padding-top: 82.27px;
    padding-left: 70px;
}
.popup {
    


}
@media (max-width: 600px) {
    .popup {
      width: 80%
    }
    .overlay {
        padding: 0;
    }
    .popup .popup-head .content {
        padding-left: 1.25rem;
    padding-right: 1.25rem;
    }

  }
  @media (max-width: 320px) {

    .popup .popup-head .content {
        padding-left: 0.5rem;
        padding-right: 0.25rem;
    }
  }

</style>
<template>
<div class="overlay h-[1064px] w-full bg-[#171717] absolute top-0 bottom-0 right-0 left-0">
        <div class=" bg-white popup absolute">
            <div class="popup-head w-full h-16 flex justify-between gap-9 items-center  p-5">
                <div class="title">
                    <h2>{{title}}</h2>
                </div>
                <button class="close"  @click="$emit('close-popup')"> 
                    <i class="fa-solid fa-close"></i>

                </button>
            </div>
            <div class="content p-5">
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
.popup {
    width: 784px;
    height: 500px;
    top: 82.27px;
    left: 278px;
    gap: 0px;
    border-radius: 4px 0px 0px 0px;
}
.popup .content {
    width: Hug (784px)px;
    height: Hug (899.46px)px;
    top: 82.27px;
    left: 278px;
    padding: 50px 0px 0px 0px;
    gap: 10px;
    border-radius: 4px 0px 0px 0px;
    opacity: 0px;

}

</style>
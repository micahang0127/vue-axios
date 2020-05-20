<template>
  <div>
      <!-- <div>{{ datas }}</div>
      <div>{{ datas.fe1 }}</div>
      <div>{{ datas.fe2 }}</div> -->
      <div v-for="(item, index) in datas" :key="index">
        {{ item }}
      </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            datas: [],
        }
    },
   created (){
    //    const url = '';
   
    axios.get('https://raw.githubusercontent.com/joshua1988/doit-vuejs/master/data/demo.json')
            .then(res=> {
                console.log('succ:'+res);
                this.datas = res.data;
            })
            .catch(err =>{
                console.log(err);
            });

   }

}
</script>

<style>

</style>
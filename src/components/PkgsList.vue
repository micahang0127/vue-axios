<template>
  <div>
      <h2>Pkgs</h2>
     <table style="margin-left:350px; text-align: center;">
         <thead>
             <tr>
                 <th>ID</th>
                 <th>TITLE</th>
             </tr>
         </thead>
         <tbody>
             <tr v-for="(item, index) in datas" :key="index">
                 <td>{{ item.id }}</td>
                 <td>{{ item.title }}</td>
             </tr>
         </tbody>
     </table>
  </div>
</template>

<script>
import { fetchPkgsList } from '../api/index.js';
// import axios from 'axios';

export default {
    data() {
        return {
            datas: []
        }
    },
   created (){
    fetchPkgsList()
            .then( res => {
                console.log(res);
                this.datas = res.data.data;
            })
            .catch(err =>{
                console.log(err);
            });

   }

}
</script>

<style>

</style>
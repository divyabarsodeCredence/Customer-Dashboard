<template>
        <div class="container-fluid">
			<div class="">
				<select class="form-control" v-model="customerName" @change="fetchData()">
					<option value="Albus Dumbeldore">Albus Dumbeldore</option>
					<option value="Harry Potter">Harry Potter</option>
				</select>
			</div>
            <portfolio-highlights></portfolio-highlights>
            <main-nav></main-nav>
			<keep-alive>
            	<router-view ref="dashTab" @change="change()"></router-view>
			</keep-alive>
        </div>
</template>

<script>
"use strict";
define([
    'Vue',
    'vue-router',
	'axios',
    'vue!components/portfolioHighlights',
    'vue!components/nav',
    'vue!components/profileDashboard/profileDashboard',
    'vue!components/portfolioOverview/portfolioOverview'
  ], 
  function(
    Vue,
    VueRouter,
	axios,
    portfolioHighlights,
    Nav,
    profileDashboard, 
    portfolioOverview
  ){

  const routes = [
    { path: '/profileDashboard', component: profileDashboard},
    { path: '/portfolioOverview', component: portfolioOverview}
  ]
  const router = new VueRouter({
    routes 
  })

  Vue.use(VueRouter)

  return new Vue({
    template: template,
    router,
    components: {
        "portfolio-highlights": portfolioHighlights,
        "main-nav":Nav
    },
    data: {
		"dashboardData":{},
		"customerName":"Albus Dumbeldore"
    },
	watch:{
		"$route": function(){
//		 	this.callSetData();
		}	
	}  ,
	
    methods: {
		change(){
			alert()	
		},
		fetchData:function(){
			let _this=this;
			 axios
			  .get('/customer1?customerName='+this.customerName)
			  .then(response => {
				 _this.dashboardData=response.data[0];
				 _this.callSetData();
			 })
		},
		callSetData(){
			var _this=this;
				
			 _this.$refs.dashTab.setData(_this.dashboardData);
		}
    },
	  created(){
		  this.fetchData();

	  },
	  mounted(){

	  }
  })
});
</script>
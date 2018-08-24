<template>
    <div class="addressDetails">
        <div class="row" v-if="Object.keys(data).length">
			<div class="col-lg-5 col-md-5 col-xs-5">
				<div>{{data.name}}</div>
				<div class="emailId"><i class="fa fa-envelope"></i> &nbsp; <a :href="data.emailId">{{data.emailId}}</a></div>
			</div>
			<div class="col-lg-7 col-md-7 col-xs-7">
				<i class="fa fa-mobile"></i> &nbsp; {{data.phoneNo}}
			</div>
			<div class="col-lg-12 address">
				<h4>Communication/Correspondance Address</h4>
				<div class="addDetail">
					<div v-for="add in addArray">{{add}}</div>
				</div>
			</div>
		</div>
		
    </div>    
</template>

<script>
"use strict";
define(function (require, exports, module){
    module.exports = {
        template: template   ,
		data(){
			return {
				"data_src" : "addressDetails",
				"data": {}
			}	
		},
		methods:{
		
		},
		computed:{
			addArray(){
				let add=this.data.address.split(",");
				add.forEach((a1,index)=>{
					if(index < add.length-1 )
						add[index]+=",";
				})
				return add;
			}	
		},
		mounted(){

		}
		
    }
});

</script>
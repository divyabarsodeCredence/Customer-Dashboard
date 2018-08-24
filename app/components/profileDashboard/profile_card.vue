<template>
        <div id="customer_profile_card_data" class="customer_profile_card_wrp">
				<div class="card text-center">
					<img src="app/core/img/user_img.png" />
						<h3 class="mcard-head ">{{data}}</h3>
						<h4 class="blue-text lighten-3">RM: Jyotiv Seth</h4>
						<button class="btn btn-primary">Update Profile</button> 
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
				"data_src" : "customerName",
				"data": ""
			}	
		},
		methods:{
		
		},
		computed:{
		},
		mounted(){

		}
		
    }
});

</script>
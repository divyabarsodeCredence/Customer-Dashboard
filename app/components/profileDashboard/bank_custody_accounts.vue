<template>
        <section class="userlinked-accounts" v-if="data.length"> 
			<div class="row" v-for="account in data">
				<div class="col-sm-3 col-xs-2 padding-0 border-style">
					  <img class=" bank-img-style" src="app/core/img/boa.png" alt="">
				</div>
				<div class="col-sm-9 col-xs-10 ">
					<div class="text-warning lead fnt-14">{{account.bankName}}</div>
					<small class="text-muted">
						  <p class="fnt-12 text-default lead fnt-14 disp-inline">Ac. No.</p>
						  <p class="fnt-b10 fnt-Cblack disp-inline">{{account.accountNumber}}</p>
					</small>
					<div class="text-muted fnt18 lead">$ {{account.amount}} </div>
			  	</div>
			  </div> 
    	</section>
</template>

<script>
"use strict";
define(function (require, exports, module){
    module.exports = {
        template: template,
		data(){
			return {
				"data_src": "bankAccounts",
				"data":[]
			}	
		},
		methods:{
			
		},
		mounted(){
 
		}
    }
});

</script>
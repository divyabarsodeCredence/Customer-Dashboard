<template>
		<div>
			<div class="row">
				<div class="col-lg-12">
					<div class="card" style="min-height:auto;">
						<h2 class="mcard-head mcard-header">Change in Portfolio Value</h2>
						<div class="mcard-body">
							<change-in-portfolio-value></change-in-portfolio-value>
						</div>
					</div>
				</div>
			</div>
			<div class="row">
				<div class="col-lg-4 col-md-4">
					<div class="card">
						<h2 class="mcard-head bluebg">Asset Allocation </h2>
						<div class="mcard-body" id="assetAllocation">
							<asset-allocation></asset-allocation>
						</div>
					</div>
				</div>
			</div>
		</div>
</template>

<script>
"use strict";
define(function (require, exports, module){
	var change_in_portfolio_value = require("vue!components/portfolioOverview/change_in_portfolio_value");
	var asset_allocation = require("vue!components/portfolioOverview/asset_allocation");

    module.exports = {
        template: template,    
		components:{
			"change-in-portfolio-value":change_in_portfolio_value,
			"asset-allocation":asset_allocation
		},
         computed: {
            username () {
                return this.$route.params.username
            }
        },
        methods: {
			setData(data){
				console.log("overview")
			},
            goBack () {
                window.history.length > 1
                ? this.$router.go(-1)
                : this.$router.push('/')
            }
        },
		mounted(){
			this.setData(this.$parent.dashboardData);
		}
    }
});

</script>
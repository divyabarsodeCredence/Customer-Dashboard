<template>
    <div class="assetAllocation">
  		<pie-chart id="assetAllocationGraph" data_bucket=""></pie-chart>
    </div>    
</template>

<script>
"use strict";
define(function (require, exports, module){
	var pie_chart = require("vue!components/charts/pie_chart");

    module.exports = {
        template: template   ,
		components:{
			"pie-chart": pie_chart	
		},
		data(){
			return {
				data:{
					values:[8, 28, 16, 27, 28],
					labels: ['Cash', 'Equity', 'Mutual Funds', "Fixed Income", "Alternate Income"]
				}
			}
		},
		methods:{
		
		},
		mounted(){

		}
		
    }
});

</script>
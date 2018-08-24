<template>
    <div class="graphContainer">
		 <div :id="id" ><!-- Plotly chart will be drawn inside this DIV --></div>
    </div>    
</template>

<script>
"use strict";
define(function (require, exports, module){
	var Plotly=require("plotly");
    module.exports = {
        template: template   ,
		data(){
			return {
				
			}
		},
		props:["id"],
		methods:{
			drawGraph(){
				var values=[8, 28, 16, 27, 28];
				var labels=['Cash', 'Equity', 'Mutual Funds', "Fixed Income", "Alternate Income"]
				var container='mydiv'
				var text=[];
				for(let i=0;i< values.length;i++){
					text.push("<span style='font-size:10px'>"+ labels[i] + "</span><br><b  style='font-size:14px'>"+ values[i] + "%</b>");
				}
				var data = [{
				  values,
				  labels,
				  text,
				  textinfo: 'text',
				  type: 'pie',
				  hole: .8,
				  hoverinfo: 'label+percent',
				 'marker': {
				  'colors': [
					'#69f8c3',
					'#ef5030',
					'#55addf',
					'#2c3d4f',
					'#f6ac2f',
					'#5fab9e',
					'#fe9456',
					'#fdf264'
				  ]
				}
				}];

				var layout = {
				showlegend: false,
				legend: {"orientation": "h"},

				height: 300,
				  margin: {
					l: 50,
					r: 50,
					b: 50,
					t: 50,
					pad: 4
				  }
				};

				Plotly.newPlot(this.id, data, layout,  {displayModeBar: false});

			}
		},
		mounted(){
			this.drawGraph();
		}
		
    }
});

</script>
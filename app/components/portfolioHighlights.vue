<template>
		<div class="portfolio-highlights-wrp">
				<div class="col-sm-2 lft-padding ">
					<div class="cards card-bg-color1">
						<div class="media">
							<div class="media-left">
							 <span class="sprite card-icon1"></span>
							</div>
							<div class="media-body">
								<div class="card-title">INVESTMENT VALUE</div>
								<div class="card-value">{{Investment_Value}}</div>
							</div>
						</div>
					</div>
				</div>
				<div class="col-sm-2 lft-padding ">
					<div class="cards card-bg-color2">
						<div class="media">
							<div class="media-left">
									<span class="sprite card-icon2"></span> 
	
							</div>
							<div class="media-body">
								<div class="card-title">CAPITAL INVESTED</div>
								<div class="card-value">{{Capital_Invested}}</div>
							</div>
						</div>
					</div>
				</div>
				<div class="col-sm-2 lft-padding ">
					<div class="cards card-bg-color3">
						<div class="media">
							<div class="media-left">
									<span class="sprite card-icon3"></span>  </div>
							<div class="media-body">
								<div class="card-title">INCOME</div>
								<div class="card-value">{{Income}}</div>
							</div>
						</div>
					</div>
				</div>
				<div class="col-sm-2 lft-padding ">
					<div class="cards card-bg-color4">
						<div class="media">
							<div class="media-left">
									<span class="sprite card-icon4"></span> 
							 </div>
							<div class="media-body">
								<div class="card-title">EXPENCES</div>
								<div class="card-value">{{Expenses}}</div>
							</div>
						</div>
					</div>
				</div>
				<div class="col-sm-4  lft-padding ">
					<div class="cards card-bg-color5">
						<div class="media">
							<div class="media-left">
									<span class="sprite card-icon5"></span> 
							</div>
							<div class="media-body">
								<div class="comtainer">
								<div class="row">
								<div class="col-sm-2">
									<div class="card-title"><span class="xs-fnt-text">MTD</span></div>
									<div class="card-value"><span class=" xs-fnt-nmbr">{{MTD}}</span></div>
								</div>  
									<div class="col-sm-2">
										<div class="card-title"><span class="xs-fnt-text">QTD</span></div>
										<div class="card-value"><span class=" xs-fnt-nmbr">{{QTD}}</span></div>
									</div>
									<div class="col-sm-2">
										<div class="card-title"><span class="xs-fnt-text">YTD</span></div>
										<div class="card-value"><span class=" xs-fnt-nmbr">{{YTD}}</span></div>
									</div>
									<div class="col-sm-6">
										<div class="card-title"><span class="xs-fnt-text">SINCE INCEPTION</span></div>
										<div class="card-value"><span class=" xs-fnt-nmbr">{{Since_Inception}}</span></div>
									</div>
									  
								</div>    
								</div>
							</div>
						</div>
					</div>
			</div>
			
		</div>
</template>

<script>
"use strict";
define(function (require, exports, module){
    module.exports = {
        template: template,        
        mounted(){
			this.refreshComponent();
        }
		,data:function() {
            return {
				"Investment_Value": "",
				"Capital_Invested": "",
				"MTD": "",
				"QTD": "",
				"YTD": "",
				"Since_Inception": "",
				"Income": "",
				"Expenses": "",
				"Investible_Cash": "",
				"Withdrawable_Limit": ""	
            }
		}  
		,methods:{          
			refreshComponent: function () {
				fetch('http://localhost:3000/Portfolio_Highlights')
				.then(function(response) {
					return response.json();
				})
				.then((function(data) {
						for(var key in data[0])
						{
							this[key]=data[0][key]
						}
				}).bind(this));
			}
	  
	}
}
});

</script>
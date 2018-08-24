<template>

             <div class="row" id="profile-dashboard-data" >
                    <div class="col-sm-3">
                      	<profile-card></profile-card>
                    </div>
                    <div class="col col-sm-6">
                        <div class="card">
                            <h2 class="mcard-head">Address Details</h2>
							<div class="mcard-body"><address-details ></address-details></div>
                        </div>
                    </div>
                    <div class="col col-sm-3">
                        <div class="card">
                            <h2 class="mcard-head">Bank & Custody Accounts</h2>
							<div class="mcard-body"><bank-custody-accounts ></bank-custody-accounts></div>
            
                        </div>
                    </div>
                    <div class="col col-sm-3">
                        <div class="card">
                            <h2 class="mcard-head">Networth</h2>
                        </div>
                    </div>
                    <div class="col col-sm-6">
                        <div class="card">
                            <h2 class="mcard-head">My Family Members</h2>
                            <div id="family_tree_data"></div>
                        </div>
                    </div>
                    <div class="col col-sm-3">
                        <div class="card">
                            <h2 class="mcard-head">Linked Accounts</h2>
                        </div>
                    </div>
                    <div class="col col-sm-3">
                        <div class="card">
                            <h2 class="mcard-head">Bank &amp; Custody Accounts</h2>

                        </div>
                    </div>
                    <div class="col col-sm-3">
                        <div class="card ">
                            <h2 class="mcard-head">Key Portfolio Alerts</h2>
                        </div>
                    </div>
                    <div class="col col-sm-3">
                        <div class="card">
                            <h2 class="mcard-head">Opportunities</h2>
                        </div>
                    </div>
                    <div class="col col-sm-6">
                        <div class="card">
                            <h2 class="mcard-head">History &amp; Add Interaction</h2>
                        </div>
                    </div>
                </div>
                <!-- profile dashboard -->
</template>

<script>
"use strict";
define(function (require, exports, module){

var address_details = require("vue!components/profileDashboard/address_details");
var bank_custody_accounts = require("vue!components/profileDashboard/bank_custody_accounts");
var profile_card = require("vue!components/profileDashboard/profile_card");

    module.exports = {
        template: template,    
         components: {
			"address-details": address_details,
			"bank-custody-accounts": bank_custody_accounts,
			"profile-card": profile_card
        },
		data(){
			return {
				"data_source":[],
				"tabData":{}
			}
		},
        methods: {
			
			setData(data){
				let dataKeys=Object.keys(data);
				console.log("profileDashboard");
				this.$children.forEach((child)=>{
					let dataSrc=child.data_src;
					/*if(dataSrc.constructor===Array){
					   	dataSrc.forEach((dsrc)=>{
							console.log(dsrc,"=",data[dsrc])
							child.data[dsrc]=data[dsrc];
						})
				   }
					else*/ 
					if(dataKeys.includes(dataSrc)){
						child.data=data[dataSrc];
					}
					else{
						data.customerAccount.forEach((cusAcc)=>{
							if(cusAcc.consolidated){
								child.data=cusAcc[dataSrc];
							}
						})
					}

//					console.log(child.data,"==")
				})
			},
            goBack () {
                window.history.length > 1
                ? this.$router.go(-1)
                : this.$router.push('/')
            }
        },
		mounted(){
//			alert("hi");
		}
    }
});

</script>
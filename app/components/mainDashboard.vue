"use strict";
define(function (require, exports, module){
        let portfolioHighlights=require("cmp.portfolioHighlights"); //child component
        

    module.exports = {
       template: '#main-dashboard-template'

        ,mounted(){
        }
        ,components: {
            "portfolio-highlights": portfolioHighlights
        }
		,data:function() {
            return {
            }
		}  
		,methods:{          
			refreshComponent: function(){
            }
	    }
}
});

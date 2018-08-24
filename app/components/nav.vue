<template>
<div>
    <ul class="nav nav-pills">
            <li>
                <router-link to="/profileDashboard">
                    <span class="tab-fnt">Profile</span>
                </router-link>
            </li>
            <li>
                <router-link to="/portfolioOverview">
                    <span class="tab-fnt">Portfolio Overview</span>
                </router-link>
            </li>
            <li>
                <a href="#portfolio-holdings">
                    <span class="tab-fnt">Portfolio Holdings</span>
                </a>
            </li>
            <li>
                    <a href="#portfolio-performance">
                        <span class="tab-fnt">Portfolio Performance</span>
                    </a>
                </li>
            <li>
                <a href="#transaction-details">
                    <span class="tab-fnt">Transaction Details</span>
                </a>
            </li>
        </ul>
       
        
</div>
</template>


<script>
"use strict";
define(function (require, exports, module){
    module.exports = {
        template: template
    }
});
</script>
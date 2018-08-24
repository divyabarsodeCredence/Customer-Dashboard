require.config({
    baseUrl: 'app',
    paths: {
        "jquery": "core/js/jquery-3.3.1.min",
        "bootstrap": "core/js/bootstrap.min",
        "Vue": "core/js/vue/vue",
        "vue": "core/js/vue/vue-require",
        "vue-router": "core/js/vue/vue-router",
        "axios": "core/js/axios.min",
		"plotly": "core/js/plotly.min"
    },
    shim: {
    }
});

require(['Vue', 'vue'], function(Vue, vue) {
    require(['vue!app'], function(App){
        App.$mount('#vue-app');
    });
})

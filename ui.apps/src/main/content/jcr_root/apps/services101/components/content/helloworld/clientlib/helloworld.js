Vue.component('helloworldmessage', {
    data: function() {
        return {
            message: "Hello Vue!"
        }
    },
    props: {
        'modelUri': {
            type: String,
            required: true
        }
    },
    template: "<pre>{{ message }}</pre>",
    mounted: function () {

        console.log(this);

        this.$http.get(this.modelUri).then(function (response) {
            console.log(response);
            this.message = response.bodyText;

        }, function (response) {
            console.log(response);
            this.message = "Whoops, got an error while fetching the mode.";
        });
    }
});

new Vue({
    el: '.helloworld'
});
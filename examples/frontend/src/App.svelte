<script>
    import { onMount } from 'svelte';
    import {
        OpenAPI,
        AuthenticateService,
        CustomerService,
    } from '@nopcommerce/frontend';

    export let email;

    onMount(async () => {
        // use this api endpoint (make sure to only write the host here, without trailing slash)
        OpenAPI.BASE = 'http://localhost:5000';

        // get a nopcommerce api token
        const response = await AuthenticateService.postGetToken({
            email: 'demo@demo.com',
            password: 'demo',
            is_guest: false,
        });

        // assign the current token to be used by the api
        OpenAPI.TOKEN = response.token;

        // get the customer info from nopcommerce
        const customerInfo = await CustomerService.getInfo();
        console.log(customerInfo.email);

        // update a local variable
        email = customerInfo.email;
    });
</script>

<h1>Hello {email}!</h1>

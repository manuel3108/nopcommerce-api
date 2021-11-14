<script>
    import { onMount } from 'svelte';
    import {
        OpenAPI,
        AuthenticateService,
        StoreService,
    } from '@nopcommerce/backend';

    let stores = [];

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

        const allStores = await StoreService.getGetAll();
        allStores.forEach((store) => {
            stores.push(`${store.name} (${store.url})`);
        });

        // update a local variable
        stores = stores;
    });
</script>

{#each stores as store}
    {store} <br />
{/each}

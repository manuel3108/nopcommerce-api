# @nopcommerce/frontend (unofficial)

This (unofficial) project aims to provide an api client for the [official NopCommerce API Plugin](https://www.nopcommerce.com/en/web-api). You will need to buy this api seperately to be able to use this package.

This package provides an auto-generated client stub for the NopCommerce Frontend API, including typescript type definitions.

## Installation

```bash
npm i @nopcommerce/frontend
```

## Usage

```js
import {
    OpenAPI,
    AuthenticateService,
    CustomerService,
} from '@nopcommerce/frontend';

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
```

## Example application

Head over to the repository [here](https://github.com/manuel3108/nopcommerce-api/tree/main/examples/frontend) to see a small svelte-based demo application

## Contributing

Contributions are always welcome!
Please see [here for more details](https://github.com/manuel3108/nopcommerce-api)

## License

[MIT](https://choosealicense.com/licenses/mit/)

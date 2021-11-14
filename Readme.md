# nopcommerce-api

This project aims to provide an api client for the [official NopCommerce API Plugin](https://www.nopcommerce.com/en/web-api).

To follow the NopCommerce convention, this api is divided into two parts, the [frontend](./packages/frontend/Readme.md) and the [backend](./packages/backend/Readme.md). Please see the according readmes for more details.

## Contributing

Contributions are always welcome!

## Updating to a new NopCommerce version

-   open the file `updateApi.js` and modify the version of the new plugin

```js
const frontendVersion = '1.06';
const backendVersion = '1.06';
```

-   run `npm run generate`

The application will then fetch the new NopCommerce api definitions and re-generate the client automatically.

## Publishing

To deploy this project run

```bash
  npm run release
```

Note: Make sure to update the files before, by running `npm run generate`

## License

[MIT](https://choosealicense.com/licenses/mit/)

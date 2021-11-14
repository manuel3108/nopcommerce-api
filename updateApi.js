import { promises as fs } from 'fs';
import fetch from 'node-fetch';
import OpenApi from 'openapi-typescript-codegen';

const base = 'https://api.swaggerhub.com/apis/nopCommerceAPI';
const frontendVersion = '1.06';
const backendVersion = '1.06';

// auto generated
const frontendPath =
    base + `/nop-commerce_web_api_frontend/v${frontendVersion}`;
const backendPath = base + `/nop-commerce_web_api_backend/v${backendVersion}`;
const frontendFile = 'swagger_frontend.json';
const backendFile = 'swagger_backend.json';
const frontendPackageDir = 'packages/frontend';
const backendPackageDir = 'packages/backend';

doWork();

async function doWork() {
    // download api swagger files
    await downloadApiDefinition(frontendPath, frontendFile);
    await downloadApiDefinition(backendPath, backendFile);

    // generate operationIds for proper service generation
    await fixSwagger(frontendFile);
    await fixSwagger(backendFile);

    // generate client stub
    await generateApi(frontendFile, frontendPackageDir);
    await generateApi(backendFile, backendPackageDir);

    // update the version of the packages
    await updateVersion(frontendPackageDir, frontendVersion);
    await updateVersion(backendPackageDir, backendVersion);
}

async function downloadApiDefinition(url, filePath) {
    // get the content of the url
    const response = await fetch(url);
    const json = await response.json();

    // and write it to the file in a formatted manner, to be able to correctly track the changes in git
    await fs.writeFile(filePath, JSON.stringify(json, null, 2));
}

async function fixSwagger(filePath) {
    // read the content of the swagger file
    const content = await fs.readFile(filePath);
    const swagger = JSON.parse(content);

    Object.keys(swagger.paths).forEach((path) => {
        Object.keys(swagger.paths[path]).forEach((method) => {
            // generate operationId for proper Method names in service
            const action = path.split('/')[3];
            swagger.paths[path][method].operationId = method + action;
        });
    });

    // and write it to the file in a formatted manner, to be able to correctly track the changes in git
    const text = JSON.stringify(swagger, null, 2);
    await fs.writeFile(filePath, text);
}

async function generateApi(filePath, outputDir) {
    // generate web client
    await OpenApi.generate({
        input: filePath,
        output: outputDir,
    });
}

async function updateVersion(packageDir, version) {
    const versionSuffix = version.split('.')[1];

    const filePath = packageDir + '/package.json';
    const content = await fs.readFile(filePath);
    const packageJson = JSON.parse(content);

    const currentVersion = packageJson.version.split('.');
    packageJson.version = `${currentVersion[0]}.${versionSuffix}.${currentVersion[2]}`;

    await fs.writeFile(filePath, JSON.stringify(packageJson, null, 2));
}

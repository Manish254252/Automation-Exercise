import test, { expect } from "@playwright/test";
import { log } from "node:console";
import { logger } from "../../utils/Logger";
import { ApiClient } from "../../utils/ApiUtils";
import { loadTestData } from "../../utils/TestDataLoader";
import { BASE_URLS } from "../../utils/env";

test('API 1: Get All Products List', async ({ request }) => {

    const response = await request.get(" https://automationexercise.com/api/productsList")
    console.log(response.status());

    //   console.log(json);

})
test('API 2: POST To All Products List', async ({ request }) => {

    const response = await request.post(" https://automationexercise.com/api/productsList", { data: {} })
    const json = await (response).json()
    console.log(response.status());
    expect(response.status()).toBe(200)

})

test('API 3: Get All Brands List', async ({ request }) => {

    const response = await request.get(" https://automationexercise.com/api/productsList")
    const json = await (response).json()
    console.log(response.status());

    //   console.log(json);

})

test('API 4: Search Product with query parameter', async ({ request }) => {
    const response = await request.post("https://automationexercise.com/api/searchProduct",
        {
            data: { search_product: "jean" }, // send in request body
            params: { search_product: "jean" },
            headers: {
                'Content-Type': 'application/json' // important for JSON body
            }
        })
    const json = await response.json();
    console.log(json);

    expect(await response.json()).toMatchObject({ responseCode: 400 });
});

test('Json Placeholder API 1', async ({ request }) => {
    const ApiUtils = new ApiClient(request,BASE_URLS.Bee)
    const response = ApiUtils.get("/posts/1")
    const json = (await response).json()
    const statuscode = (await response).status()
    console.log(await json);
    console.log(statuscode);
    expect(statuscode).toBe(200)


})

test('Json Placeholder API 2 ', async ({ request }) => {

    const response = request.get("https://jsonplaceholder.typicode.com/posts/")
    const json = (await response).json()
    const statuscode = (await response).status()
    console.log(await json);
    console.log(statuscode);
    expect(statuscode).toBe(200)


})


test('Json Placeholder API 4 ', async ({ request }) => {

    let response = await request.post("https://json-placeholder.mock.beeceptor.com/login",
        {
            data: {

                "username": "michael",
                "password": "success-password"

            },
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
    const json = await response.json()
    const statuscode = response.status()
    console.log(await json);
    let token = json.token
    console.log(statuscode);
    response = await request.put("https://json-placeholder.mock.beeceptor.com/posts/",
        {
            data: {

                title: 'foo1',
                body: 'bar',
                userId: 1

            },
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
                'token': token

            }
        })
    console.log(response);

    expect(statuscode).toBe(200)


})

test('Json Placeholder API 5 ', async ({ request }) => {

    const response = await request.put("https://jsonplaceholder.typicode.com/posts/1",
        {
            data: {
                title: 'foo1bar',

            },
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
    const json = (await response).json()
    const statuscode = (await response).status()
    console.log(await json);
    console.log(statuscode);
    expect(statuscode).toBe(200)


})

test('Json Placeholder API 6 ', async ({ request }) => {
    logger.info("Get API Executed")
    let id = [3, 5, 7]
    const response = await request.get("https://api.restful-api.dev/objects", {
        params: {
            id: id
        },
        failOnStatusCode: true

    })

    const json = await response.json()
    const statuscode = response.status()
    logger.info(json);
    logger.info(statuscode);
    // logger.info(response.headersArray());
    logger.info(response.headers());
    expect(statuscode).toBe(200)




})

test('Json Placeholder API 7 ', async ({ request }) => {

    const response = await request.get("https://jsonplaceholder.typicode.com/posts",
        {

            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        });
    expect(response.ok()).toBe(true)
    const json = (response).json()
    const statuscode = (response).status()
    console.log(await json);
    console.log(statuscode);
    logger.info(response.statusText())
    logger.info(await response.text())
    logger.info(await response.url())
    expect(response).toBeOK()
    expect(statuscode).toBe(200)


})
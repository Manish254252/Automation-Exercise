import test, { expect } from "@playwright/test";
import { logger } from "../../utils/Logger";
import { ApiClient } from "../../utils/ApiUtils";
import { loadTestData } from "../../utils/TestDataLoader";
import { validateSchema } from "../../utils/SchemaValidator";
import posts from "../schemas/Beeceptor.schema.json"
import User from "../schemas/User.schema.json"



test('Beeceptor Placeholder API 1', async ({ request },testInfo) => {
     const testData = loadTestData(testInfo)
    const ApiUtils = new ApiClient(request)
    const response = ApiUtils.post("/login",testData.data)
    const json = (await response).json()
    const statuscode = (await response).status()
    console.log(await json);
    console.log(statuscode);
    expect(statuscode).toBe(200)
})

test('Beeceptor Placeholder API 2', async ({ request },testInfo) => {
    const testData = loadTestData(testInfo)
    const ApiUtils = new ApiClient(request)
    const response = ApiUtils.post("/login",testData.data)
    const json = (await response).json()
    const statuscode = (await response).status()
    console.log(await json);
    console.log(statuscode);
    expect(statuscode).toBe(401)
})

test('Beeceptor Placeholder API 3', async ({ request },testInfo) => {
    // const testData = loadTestData(testInfo)
    const ApiUtils = new ApiClient(request)
    const response = ApiUtils.get("/posts")
    const json = (await response).json()
    const status = (await response).status()    
    expect(status).toBe(200)
    logger.info(await json)
    // validateSchema(posts,await json)
})

test('Beeceptor Placeholder API 4', async ({ request },testInfo) => {
    // const testData = loadTestData(testInfo)
    const ApiUtils = new ApiClient(request)
    const response = ApiUtils.get("/users")
    const json = (await response).json()
    const status = (await response).status()    
    expect(status).toBe(200)
    logger.info(await json)
    validateSchema(User,await json)
})
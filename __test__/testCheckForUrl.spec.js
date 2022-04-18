import { checkForUrl } from '../src/client/js/urlChecker.js'

describe("Testing CheckForUrl functionality", () => {
    test("Check for valid url. It should return true", () => {
        // Define the input for the function, if any, in the form of variables/array
        // Define the expected output, if any, in the form of variables/array
        // The expect() function, in combination with a Jest matcher, is used to check if the function produces the expected output
        // The general syntax is `expect(myFunction(arg1, arg2, ...)).toEqual(expectedValue);`, where `toEqual()` is a matcher
        expect(checkForUrl("http://valid-url.net")).toBe(true);
    }),
    test("Check for invalid url. It should return false", () => {
        expect(checkForUrl("This is not a url")).toBe(false);
    }),
    test("Check for empty string. It should return false", () => {
        expect(checkForUrl("")).toBe(false);
    }),
    test("Check for null url value. It should return false", () => {
        expect(checkForUrl(null)).toBe(false);
    })
});

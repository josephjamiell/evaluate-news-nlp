import { formHandler, handleSubmit } from '../src/client/js/formHandler.js'

describe("Testing formHandler functionality", () => {
    test("checking for handleSubmit. It should be defined.", () => {
        expect(handleSubmit).toBeDefined();
    })
})
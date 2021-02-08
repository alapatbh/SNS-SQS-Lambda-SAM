const index = require("../index");
const assert = require('chai').assert
describe(" Test ", () => {

    it("should test", ()=>{
        assert.equal("Hello", index.getResponse());
    })
})
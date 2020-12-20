const _ = require("lodash");

export const testFn = (name: string) => {
    let user = {name}
    console.log("Hello ", _.pick(user, "name") )
};
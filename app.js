
exports.lambdaHandler = async (event) => {
    console.log("Hello World!");
    const response = {
        statusCode: 200,
        headers: {
            'Content-Type': 'application/JSON',
        },
        body: "Hello World!"
    };
    return response;
};
const AWS = require('aws-sdk');
exports.sendMessage = async (event, context) => {
    try {
        console.log(event.body);

        let params = {
            Message: event.body, /* required */
            TopicArn: process.env.TOPIC_ARN
          };
        let publishedData = await new AWS.SNS({apiVersion: '2010-03-31'}).publish(params).promise();
        return getResponse(publishedData.MessageId, 200);
        
    } catch (error) {
        console.log("ERROR", error);
        return await getResponse("error", 500);
    }
}

exports.getMessage = async (event, context) => {
    try{
        console.log("Lambda triggered by SQS!");
    }
    catch(err){
        console.log(err);
    }
}

const getResponse = async (message, statusCode) => {

    return {
        statusCode: statusCode,
        body: JSON.stringify({ message: message }),
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "OPTIONS, GET, POST, PUT, DELETE",
            "Access-Control-Allow-Headers": "Content-Type, authorization"
        }
    }
}
# AWS Lambda Container 

This repository contains necessary instructions to create a docker image out of an AWS Lambda, publish the image in AWS ECR and create a Lambda function behind an AWS API Gateway.

1. Build a docker image.
   The necessary Dockerfile is present in the root folder. OPen terminal from this folder and run the following command.
    ```docker build -t random-letter .```
2. Publish the image to ECR.
   - ```$ aws ecr create-repository --repository-name random-letter --image-scanning-configuration scanOnPush=true```
   - ```$ docker tag random-letter:latest 123412341234.dkr.ecr.sa-east-1.amazonaws.com/random-letter:latest```
   - ```$ aws ecr get-login-password | docker login --username AWS --password-stdin 123412341234.dkr.ecr.sa-east-1.amazonaws.com```
   - ```$ docker push 123412341234.dkr.ecr.sa-east-1.amazonaws.com/random-letter:latest```
3. From AWS Lambda Console:
    - Click on Create function. Select Container image, give the function a name, and then Browse images to look for the right image in my ECR repositories.
    - Select the container image that we have published.
4. Create an AWS API GATE for the Lambda and Try triggering the lambda with route.

Reference : https://aws.amazon.com/blogs/aws/new-for-aws-lambda-container-image-support/

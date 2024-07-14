/* Amplify Params - DO NOT EDIT
	API_CRMDEMO_GRAPHQLAPIENDPOINTOUTPUT
	API_CRMDEMO_GRAPHQLAPIIDOUTPUT
	API_CRMDEMO_GRAPHQLAPIKEYOUTPUT
	ENV
	REGION
Amplify Params - DO NOT EDIT */

import crypto from '@aws-crypto/sha256-js';
import { defaultProvider } from '@aws-sdk/credential-provider-node';
import { SignatureV4 } from '@aws-sdk/signature-v4';
import { HttpRequest } from '@aws-sdk/protocol-http';
import { default as fetch, Request } from 'node-fetch';


const GRAPHQL_ENDPOINT = process.env.API_CRMDEMO_GRAPHQLAPIENDPOINTOUTPUT;
const AWS_REGION = process.env.AWS_REGION || 'us-east-1';
const { Sha256 } = crypto;



function preparateQuery(event){
  const {userName,request: {userAttributes: { name, email }}} = event;
  let query=`mutation MyMutation {
  createOPERARIO(input: {id: "${userName}", NOMBRE: "${name}", EMAIL: "${email}"}) {
    id
    NOMBRE
    EMAIL
  }
}
`;
  console.log(query)
  return query;
}

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */

 export const handler = async (event) => {

  const query=preparateQuery(event);
  const endpoint = new URL(GRAPHQL_ENDPOINT);

  const signer = new SignatureV4({
    credentials: defaultProvider(),
    region: AWS_REGION,
    service: 'appsync',
    sha256: Sha256
  });

  const requestToBeSigned = new HttpRequest({
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      host: endpoint.host
    },
    hostname: endpoint.host,
    body: JSON.stringify({ query }),
    path: endpoint.pathname
  });

  const signed = await signer.sign(requestToBeSigned);
  const request = new Request(endpoint, signed);

  let statusCode = 200;
  let body;
  let response;

  try {
    response = await fetch(request);
    body = await response.json();
    console.log(body)
    if (body.errors) statusCode = 400;
    return event;
  } catch (error) {
    statusCode = 500;
    body = {
      errors: [
        {
          message: error.message
        }
      ]
    };
    return body;
  }



};
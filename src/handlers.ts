import { APIGatewayProxyEvent, APIGatewayProxyEventQueryStringParameters, APIGatewayProxyResult } from "aws-lambda";

type Action = "$connect" | "$disconnect" | "getMessages" | "sendMessage" | "getClients";

export const handle = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
  //
  const connectionId = event.requestContext.connectionId as string;
  const routeKey = event.requestContext.routeKey as Action;

  switch (routeKey) {
    case "$connect":
      return handleConnect(connectionId, event.queryStringParameters);
    default:
      return {
        statusCode: 403,
        body: "",
      };
  }
};

const handleConnect = async (
  connectionId: string,
  queryParams: APIGatewayProxyEventQueryStringParameters | null,

): Promise<APIGatewayProxyResult> => {
  if(!queryParams || !queryParams["nickname"]) {
    return {
      statusCode: 403,
      body: ""
    }
  }
};

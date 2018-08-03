/**
1)
input: definition ID      output:   instance ID
create workflow instance by passing in deWorkflowDefinition ID

2)
input: instance ID
get instanceID from #1 then pass form data to instance
*/
import { Base64 } from "js-base64";

const randomInt = Math.floor(Math.random() * 10000000);
/* HR WORKFLOW DEFINITION */
const url1 = `https://workflow-qa.bluesprucecapital.net/cDevWorkflowRESTAPI/api/deWorkflowDefinition/createInstance/e9b65dfb-532c-4c17-bb38-cdc4fdd77069?instanceName=instance${
  randomInt
}`;

export const fetchWrap = async (body, firstName, lastName) => {
  console.log("fetchWrap f");
  let newBody = {
    oVariableDefaultValues: body,
    oGlobalDefaultValues: {}
  };
  const auth = Base64.encode(
    firstName + " " + lastName + ":8D63-C786-B0CC-3C30-9D40-6ECF-9E84-3498"
  );
  const requestHeaders = {
    Accept: "application/json",
    "Content-Type": "application/json",
    Authorization: `Basic ${auth}`
  };
  let options = {
    method: "POST",
    headers: requestHeaders,
    body: JSON.stringify(newBody)
    //  credentials: "include"
  };

  const res1 = await fetch(url1, options);
  res1.ok ? console.log("response1 ok") : console.log("response1 not ok");
  const data1 = await res1.json();

  const url2 = `https://workflow-qa.bluesprucecapital.net/cDevWorkflowRESTAPI/api/deWorkflowInstance/executeWithParms/${
    data1.instanceID
  }`;
  const res2 = await fetch(url2, options);
  res2.ok ? console.log("response2 ok") : console.log("response2 not ok");
  //const data = await res2.json();
  //return data;
};

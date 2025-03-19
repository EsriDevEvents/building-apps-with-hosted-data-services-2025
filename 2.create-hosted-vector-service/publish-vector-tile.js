import { ArcGISIdentityManager, File, request } from "@esri/arcgis-rest-request"
import { publishParameters } from '../schemas/vector-tile-berlin-buildings.mjs';

// Replace with the ID of your feature service item
const yourItemId = "YOUR_FEATURE_SERVICE_ID";

const publishVectorTileLayer = async () => {
  console.log('Start publishing vector tile service from feature service process...');

  // login to portal
  const username = process.env.DEMOUSER
  const password = process.env.DEMOPASS
  const auth = await ArcGISIdentityManager.signIn({
    username, 
    password,
  });
  
  // get current user
  const user = await auth.getUser();
  
  // publish operation url
  const publishURL = `${auth.portal}/content/users/${user.username}/publish`;
  
  // execute publish operation
  const publishedService = await request(publishURL, {
    authentication: auth,
    params: {
      itemid: yourItemId,
      filetype: "featureService", // Input type
      outputType: "vectorTiles", // Output type
      publishParameters: publishParameters,
      // publish parameters
      // https://developers.arcgis.com/rest/users-groups-and-items/publish-item.htm
    },
  }).catch(e => {
    console.error(e.response.error.message);
    e.response.error.details.forEach(e => console.error(e));
  });
  
  // handle results
  if(publishedService){
    publishedService.services.forEach(s => {
      if(s.success == false){
        console.error(`Error: ${JSON.stringify(publishedService)}`);
        console.error(`Error: ${JSON.stringify(publishedService.services[0].error)}`);
      }else{
        console.log("New vector tile service created: ");
        console.log(`\tService ID: ${s.serviceItemId}`);
        console.log(`\tService URL: ${s.serviceurl}`)
      }
    });
  }
}

publishVectorTileLayer();
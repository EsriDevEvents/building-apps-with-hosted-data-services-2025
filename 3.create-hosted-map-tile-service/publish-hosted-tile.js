import {
  ArcGISIdentityManager,
  request,
} from '@esri/arcgis-rest-request';
import { publishParameters } from '../schemas/map-tile-berlin-buildings.mjs';

const publishVectorTileLayer = async () => {
  // login to portal
  const username = process.env.DEMOUSER
  const password = process.env.DEMOPASS
  
  const auth = await ArcGISIdentityManager.signIn({
    username, 
    password,
  });

  // get current user
  const user = await auth.getUser();

  // get username
  const userName = user.username;

  // publish operation url
  const publishURL = `${auth.portal}/content/users/${userName}/publish`;

  // execute publish operation
  const publishedService = await request(publishURL, {
    authentication: auth,
    params: {
      itemid: 'YOUR_FEATURE_SERVICE_ID',
      outputType: 'tiles',
      filetype: 'featureService',
      publishParameters: publishParameters,
      buildInitialCache: false
      // publish parameters
      // https://developers.arcgis.com/rest/users-groups-and-items/publish-item.htm
    },
  });

   // handle results
   console.log('New service created: ');
   publishedService.services.forEach((s) => {
     console.log(`\tid: ${s.serviceItemId} \n\turl:${s.serviceurl}`);
   });
 
 };
 
 publishVectorTileLayer();
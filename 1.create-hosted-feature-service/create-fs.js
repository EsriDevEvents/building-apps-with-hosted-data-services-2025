import { ArcGISIdentityManager } from "@esri/arcgis-rest-request"
import {
  createFeatureService,
  addToServiceDefinition,
} from "@esri/arcgis-rest-feature-service"

const createNewService = async () => {
  // login to the portal
  const username = process.env.DEMOUSER
  const password = process.env.DEMOPASS
  
  const auth = await ArcGISIdentityManager.signIn({
    username, 
    password,
  });

  // define layer schema
  const layerSchema = [
    {
      name: "my_points",
      type: "Feature Layer",
      defaultVisibility: true,
      isDataVersioned: false,
      supportsRollbackOnFailureParameter: true,
      supportsAdvancedQueries: false,
      geometryType: "esriGeometryPoint",
      minScale: 0,
      maxScale: 0,
      extent: {
        spatialReference: {
          wkid: 4326,
        },
        xmin: -118.84764718980026,
        ymin: 33.99799168307417,
        xmax: -118.7618165013238,
        ymax: 34.026450333167524,
      },
      drawingInfo: {
        // More info in the WebMap Spec: https://developers.arcgis.com/web-map-specification/objects/drawingInfo/
        transparency: 0,
        labelingInfo: null,
        renderer: {
          type: "simple",
          symbol: {
            color: [20, 158, 206, 130],
            size: 18,
            angle: 0,
            xoffset: 0,
            yoffset: 0,
            type: "esriSMS",
            style: "esriSMSCircle",
            outline: {
              color: [255, 255, 255, 220],
              width: 2.25,
              type: "esriSLS",
              style: "esriSLSSolid",
            },
          },
        },
      },
      allowGeometryUpdates: true,
      hasAttachments: true,
      htmlPopupType: "esriServerHTMLPopupTypeNone",
      hasM: false,
      hasZ: false,
      objectIdField: "OBJECTID",
      fields: [
        {
          name: "OBJECTID",
          type: "esriFieldTypeOID",
          alias: "OBJECTID",
          sqlType: "sqlTypeOther",
          nullable: false,
          editable: false,
          domain: null,
          defaultValue: null,
        },
        {
          name: "id",
          type: "esriFieldTypeInteger",
          alias: "id",
          sqlType: "sqlTypeInteger",
          nullable: true,
          editable: true,
          domain: null,
          defaultValue: null,
        },
        {
          name: "name",
          type: "esriFieldTypeString",
          alias: "name",
          sqlType: "sqlTypeNVarchar",
          nullable: true,
          editable: true,
          domain: null,
          defaultValue: null,
          length: 256,
        },
        {
          name: "rating",
          type: "esriFieldTypeString",
          alias: "rating",
          sqlType: "sqlTypeNVarchar",
          nullable: true,
          editable: true,
          domain: null,
          defaultValue: null,
          length: 256,
        },
      ],
      templates: [
        {
          name: "New Feature",
          description: "",
          drawingTool: "esriFeatureEditToolPoint",
          prototype: {
            attributes: {
              id: null,
              name: null,
              rating: null,
            },
          },
        },
      ],
      supportedQueryFormats: "JSON",
      hasStaticData: true,
      maxRecordCount: 10000,
      capabilities: "Query,Extract",
    },
  ]


  // create the service
  const newService = await createFeatureService({
    authentication: auth,
    item: {
      name: "My Points",
      capabilities: "Query, Extract",
      description: "Place points along the California coast line",
      units: "esriMeters",
      initialExtent: {
        xmin: -134.74729261792592,
        ymin: 23.56096242376989,
        xmax: -55.695547615409396,
        ymax: 50.309217030288835,
        spatialReference: { wkid: 4326 },
      },
      spatialReference: { wkid: 4326 },
    },
  })

  // create layer
  const newFeatureLayer = await addToServiceDefinition(newService.serviceurl, {
    authentication: auth,
    layers: layerSchema,
  })

  console.log(
    `New item created:\n\tid:${newService.itemId}\n\turl:${newService.serviceurl}`
  )

}

createNewService()
const publishParameters = {
  "name": "Berlin_Buildings_Feature_Service_new",
  "tilingSchema": {
      "tileCacheInfo": {
          "spatialReference": {
              "wkid": 102100,
              "latestWkid": 3857
          },
          "origin": {
              "x": -20037508.342787,
              "y": 20037508.342787
          },
          "rows": 256,
          "cols": 256,
          "dpi": 96,
          "preciseDpi": 96,
          "lods": [
              {
                  "level": 0,
                  "resolution": 156543.033928,
                  "scale": 591657527.591555
              },
              {
                  "level": 1,
                  "resolution": 78271.5169639999,
                  "scale": 295828763.795777
              },
              {
                  "level": 2,
                  "resolution": 39135.7584820001,
                  "scale": 147914381.897889
              },
              {
                  "level": 3,
                  "resolution": 19567.8792409999,
                  "scale": 73957190.948944
              },
              {
                  "level": 4,
                  "resolution": 9783.93962049996,
                  "scale": 36978595.474472
              },
              {
                  "level": 5,
                  "resolution": 4891.96981024998,
                  "scale": 18489297.737236
              },
              {
                  "level": 6,
                  "resolution": 2445.98490512499,
                  "scale": 9244648.868618
              },
              {
                  "level": 7,
                  "resolution": 1222.99245256249,
                  "scale": 4622324.434309
              },
              {
                  "level": 8,
                  "resolution": 611.49622628138,
                  "scale": 2311162.217155
              },
              {
                  "level": 9,
                  "resolution": 305.748113140558,
                  "scale": 1155581.108577
              },
              {
                  "level": 10,
                  "resolution": 152.874056570411,
                  "scale": 577790.554289
              },
              {
                  "level": 11,
                  "resolution": 76.4370282850732,
                  "scale": 288895.277144
              },
              {
                  "level": 12,
                  "resolution": 38.2185141425366,
                  "scale": 144447.638572
              },
              {
                  "level": 13,
                  "resolution": 19.1092570712683,
                  "scale": 72223.819286
              },
              {
                  "level": 14,
                  "resolution": 9.55462853563415,
                  "scale": 36111.909643
              },
              {
                  "level": 15,
                  "resolution": 4.77731426794937,
                  "scale": 18055.954822
              },
              {
                  "level": 16,
                  "resolution": 2.38865713397468,
                  "scale": 9027.977411
              },
              {
                  "level": 17,
                  "resolution": 1.19432856685505,
                  "scale": 4513.988705
              },
              {
                  "level": 18,
                  "resolution": 0.597164283559817,
                  "scale": 2256.994353
              },
              {
                  "level": 19,
                  "resolution": 0.298582141647617,
                  "scale": 1128.497176
              },
              {
                  "level": 20,
                  "resolution": 0.14929107082380833,
                  "scale": 564.248588
              },
              {
                  "level": 21,
                  "resolution": 0.07464553541190416,
                  "scale": 282.124294
              },
              {
                  "level": 22,
                  "resolution": 0.03732276770595208,
                  "scale": 141.062147
              }
          ]
      },
      "tileImageInfo": {
          "format": "PNG32",
          "compressionQuality": 0,
          "antialiasing": true
      },
      "cacheStorageInfo": {
          "storageFormat": "esriMapCacheStorageModeExploded",
          "packetSize": 128
      }
  },
  "minScale": 9028,
  "maxScale": 1128,
  "layers": [
      {
          "id": 0,
          "drawingInfo": {
              "renderer": {
                  "type": "uniqueValue",
                  "visualVariables": [
                      {
                          "type": "sizeInfo",
                          "valueExpression": "$view.scale",
                          "stops": [
                              {
                                  "size": 2,
                                  "value": 631
                              },
                              {
                                  "size": 1,
                                  "value": 1971
                              },
                              {
                                  "size": 0.5,
                                  "value": 7882
                              },
                              {
                                  "size": 0,
                                  "value": 15764
                              }
                          ],
                          "target": "outline"
                      }
                  ],
                  "field1": "building",
                  "defaultLabel": "Other",
                  "defaultSymbol": {
                      "type": "esriSFS",
                      "color": [
                          170,
                          170,
                          170,
                          255
                      ],
                      "outline": {
                          "type": "esriSLS",
                          "color": [
                              153,
                              153,
                              153,
                              64
                          ],
                          "width": 0.75,
                          "style": "esriSLSSolid"
                      },
                      "style": "esriSFSSolid"
                  },
                  "uniqueValueGroups": [
                      {
                          "classes": [
                              {
                                  "label": "apartments",
                                  "symbol": {
                                      "type": "esriSFS",
                                      "color": [
                                          237,
                                          81,
                                          81,
                                          255
                                      ],
                                      "outline": {
                                          "type": "esriSLS",
                                          "color": [
                                              153,
                                              153,
                                              153,
                                              64
                                          ],
                                          "width": 0.75,
                                          "style": "esriSLSSolid"
                                      },
                                      "style": "esriSFSSolid"
                                  },
                                  "values": [
                                      [
                                          "apartments"
                                      ]
                                  ]
                              },
                              {
                                  "label": "yes",
                                  "symbol": {
                                      "type": "esriSFS",
                                      "color": [
                                          20,
                                          158,
                                          206,
                                          255
                                      ],
                                      "outline": {
                                          "type": "esriSLS",
                                          "color": [
                                              153,
                                              153,
                                              153,
                                              64
                                          ],
                                          "width": 0.75,
                                          "style": "esriSLSSolid"
                                      },
                                      "style": "esriSFSSolid"
                                  },
                                  "values": [
                                      [
                                          "yes"
                                      ]
                                  ]
                              },
                              {
                                  "label": "residential",
                                  "symbol": {
                                      "type": "esriSFS",
                                      "color": [
                                          167,
                                          198,
                                          54,
                                          255
                                      ],
                                      "outline": {
                                          "type": "esriSLS",
                                          "color": [
                                              153,
                                              153,
                                              153,
                                              64
                                          ],
                                          "width": 0.75,
                                          "style": "esriSLSSolid"
                                      },
                                      "style": "esriSFSSolid"
                                  },
                                  "values": [
                                      [
                                          "residential"
                                      ]
                                  ]
                              },
                              {
                                  "label": "commercial",
                                  "symbol": {
                                      "type": "esriSFS",
                                      "color": [
                                          158,
                                          85,
                                          156,
                                          255
                                      ],
                                      "outline": {
                                          "type": "esriSLS",
                                          "color": [
                                              153,
                                              153,
                                              153,
                                              64
                                          ],
                                          "width": 0.75,
                                          "style": "esriSLSSolid"
                                      },
                                      "style": "esriSFSSolid"
                                  },
                                  "values": [
                                      [
                                          "commercial"
                                      ]
                                  ]
                              },
                              {
                                  "label": "office",
                                  "symbol": {
                                      "type": "esriSFS",
                                      "color": [
                                          252,
                                          146,
                                          31,
                                          255
                                      ],
                                      "outline": {
                                          "type": "esriSLS",
                                          "color": [
                                              153,
                                              153,
                                              153,
                                              64
                                          ],
                                          "width": 0.75,
                                          "style": "esriSLSSolid"
                                      },
                                      "style": "esriSFSSolid"
                                  },
                                  "values": [
                                      [
                                          "office"
                                      ]
                                  ]
                              },
                              {
                                  "label": "roof",
                                  "symbol": {
                                      "type": "esriSFS",
                                      "color": [
                                          255,
                                          222,
                                          62,
                                          255
                                      ],
                                      "outline": {
                                          "type": "esriSLS",
                                          "color": [
                                              153,
                                              153,
                                              153,
                                              64
                                          ],
                                          "width": 0.75,
                                          "style": "esriSLSSolid"
                                      },
                                      "style": "esriSFSSolid"
                                  },
                                  "values": [
                                      [
                                          "roof"
                                      ]
                                  ]
                              },
                              {
                                  "label": "allotment_house",
                                  "symbol": {
                                      "type": "esriSFS",
                                      "color": [
                                          247,
                                          137,
                                          216,
                                          255
                                      ],
                                      "outline": {
                                          "type": "esriSLS",
                                          "color": [
                                              153,
                                              153,
                                              153,
                                              64
                                          ],
                                          "width": 0.75,
                                          "style": "esriSLSSolid"
                                      },
                                      "style": "esriSFSSolid"
                                  },
                                  "values": [
                                      [
                                          "allotment_house"
                                      ]
                                  ]
                              },
                              {
                                  "label": "bungalow",
                                  "symbol": {
                                      "type": "esriSFS",
                                      "color": [
                                          183,
                                          129,
                                          74,
                                          255
                                      ],
                                      "outline": {
                                          "type": "esriSLS",
                                          "color": [
                                              153,
                                              153,
                                              153,
                                              64
                                          ],
                                          "width": 0.75,
                                          "style": "esriSLSSolid"
                                      },
                                      "style": "esriSFSSolid"
                                  },
                                  "values": [
                                      [
                                          "bungalow"
                                      ]
                                  ]
                              },
                              {
                                  "label": "garages",
                                  "symbol": {
                                      "type": "esriSFS",
                                      "color": [
                                          60,
                                          175,
                                          153,
                                          255
                                      ],
                                      "outline": {
                                          "type": "esriSLS",
                                          "color": [
                                              153,
                                              153,
                                              153,
                                              64
                                          ],
                                          "width": 0.75,
                                          "style": "esriSLSSolid"
                                      },
                                      "style": "esriSFSSolid"
                                  },
                                  "values": [
                                      [
                                          "garages"
                                      ]
                                  ]
                              },
                              {
                                  "label": "retail",
                                  "symbol": {
                                      "type": "esriSFS",
                                      "color": [
                                          107,
                                          107,
                                          214,
                                          255
                                      ],
                                      "outline": {
                                          "type": "esriSLS",
                                          "color": [
                                              153,
                                              153,
                                              153,
                                              64
                                          ],
                                          "width": 0.75,
                                          "style": "esriSLSSolid"
                                      },
                                      "style": "esriSFSSolid"
                                  },
                                  "values": [
                                      [
                                          "retail"
                                      ]
                                  ]
                              }
                          ]
                      }
                  ],
                  "uniqueValueInfos": [
                      {
                          "label": "apartments",
                          "symbol": {
                              "type": "esriSFS",
                              "color": [
                                  237,
                                  81,
                                  81,
                                  255
                              ],
                              "outline": {
                                  "type": "esriSLS",
                                  "color": [
                                      153,
                                      153,
                                      153,
                                      64
                                  ],
                                  "width": 0.75,
                                  "style": "esriSLSSolid"
                              },
                              "style": "esriSFSSolid"
                          },
                          "value": "apartments"
                      },
                      {
                          "label": "yes",
                          "symbol": {
                              "type": "esriSFS",
                              "color": [
                                  20,
                                  158,
                                  206,
                                  255
                              ],
                              "outline": {
                                  "type": "esriSLS",
                                  "color": [
                                      153,
                                      153,
                                      153,
                                      64
                                  ],
                                  "width": 0.75,
                                  "style": "esriSLSSolid"
                              },
                              "style": "esriSFSSolid"
                          },
                          "value": "yes"
                      },
                      {
                          "label": "residential",
                          "symbol": {
                              "type": "esriSFS",
                              "color": [
                                  167,
                                  198,
                                  54,
                                  255
                              ],
                              "outline": {
                                  "type": "esriSLS",
                                  "color": [
                                      153,
                                      153,
                                      153,
                                      64
                                  ],
                                  "width": 0.75,
                                  "style": "esriSLSSolid"
                              },
                              "style": "esriSFSSolid"
                          },
                          "value": "residential"
                      },
                      {
                          "label": "commercial",
                          "symbol": {
                              "type": "esriSFS",
                              "color": [
                                  158,
                                  85,
                                  156,
                                  255
                              ],
                              "outline": {
                                  "type": "esriSLS",
                                  "color": [
                                      153,
                                      153,
                                      153,
                                      64
                                  ],
                                  "width": 0.75,
                                  "style": "esriSLSSolid"
                              },
                              "style": "esriSFSSolid"
                          },
                          "value": "commercial"
                      },
                      {
                          "label": "office",
                          "symbol": {
                              "type": "esriSFS",
                              "color": [
                                  252,
                                  146,
                                  31,
                                  255
                              ],
                              "outline": {
                                  "type": "esriSLS",
                                  "color": [
                                      153,
                                      153,
                                      153,
                                      64
                                  ],
                                  "width": 0.75,
                                  "style": "esriSLSSolid"
                              },
                              "style": "esriSFSSolid"
                          },
                          "value": "office"
                      },
                      {
                          "label": "roof",
                          "symbol": {
                              "type": "esriSFS",
                              "color": [
                                  255,
                                  222,
                                  62,
                                  255
                              ],
                              "outline": {
                                  "type": "esriSLS",
                                  "color": [
                                      153,
                                      153,
                                      153,
                                      64
                                  ],
                                  "width": 0.75,
                                  "style": "esriSLSSolid"
                              },
                              "style": "esriSFSSolid"
                          },
                          "value": "roof"
                      },
                      {
                          "label": "allotment_house",
                          "symbol": {
                              "type": "esriSFS",
                              "color": [
                                  247,
                                  137,
                                  216,
                                  255
                              ],
                              "outline": {
                                  "type": "esriSLS",
                                  "color": [
                                      153,
                                      153,
                                      153,
                                      64
                                  ],
                                  "width": 0.75,
                                  "style": "esriSLSSolid"
                              },
                              "style": "esriSFSSolid"
                          },
                          "value": "allotment_house"
                      },
                      {
                          "label": "bungalow",
                          "symbol": {
                              "type": "esriSFS",
                              "color": [
                                  183,
                                  129,
                                  74,
                                  255
                              ],
                              "outline": {
                                  "type": "esriSLS",
                                  "color": [
                                      153,
                                      153,
                                      153,
                                      64
                                  ],
                                  "width": 0.75,
                                  "style": "esriSLSSolid"
                              },
                              "style": "esriSFSSolid"
                          },
                          "value": "bungalow"
                      },
                      {
                          "label": "garages",
                          "symbol": {
                              "type": "esriSFS",
                              "color": [
                                  60,
                                  175,
                                  153,
                                  255
                              ],
                              "outline": {
                                  "type": "esriSLS",
                                  "color": [
                                      153,
                                      153,
                                      153,
                                      64
                                  ],
                                  "width": 0.75,
                                  "style": "esriSLSSolid"
                              },
                              "style": "esriSFSSolid"
                          },
                          "value": "garages"
                      },
                      {
                          "label": "retail",
                          "symbol": {
                              "type": "esriSFS",
                              "color": [
                                  107,
                                  107,
                                  214,
                                  255
                              ],
                              "outline": {
                                  "type": "esriSLS",
                                  "color": [
                                      153,
                                      153,
                                      153,
                                      64
                                  ],
                                  "width": 0.75,
                                  "style": "esriSLSSolid"
                              },
                              "style": "esriSFSSolid"
                          },
                          "value": "retail"
                      }
                  ]
              },
              "transparency": 0,
              "labelingInfo": null
          }
      }
  ],
  "cacheOnDemand": true,
  "capabilities": "Map,ChangeTracking",
  "cacheOnDemandMinScale": 9028
}

export { publishParameters }
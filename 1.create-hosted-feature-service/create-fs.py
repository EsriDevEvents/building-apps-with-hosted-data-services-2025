import os
from arcgis import GIS
from pathlib import Path
import datetime

# log in
user = os.getenv('DEMOUSER')
pwd = os.getenv('DEMOPASS')
portal = GIS(username=user, password=pwd)

# local path to shapefile zip file
input_file_path = str(
    Path(__file__).parent / "../data/BerlinBuildingsFL25.geojson"
)

now = datetime.datetime.now()
human_readable_date = now.strftime("%Y %m %d %H %M %S")

# add the zip file as an item to portal
item = portal.content.add(
    {
        "title": "Berlin Buildings Feature Service " + human_readable_date,
        "description": "Esri Developer and Tech Summit 2025: Building apps with hosted data",
        "tags": "demo",
        "type": "GeoJson" # "Shapefile",
        # More: https://developers.arcgis.com/rest/users-groups-and-items/items-and-item-types/
    },
    input_file_path,
)

# publish the item to create a hosted featurelayer
hosted_service = item.publish(None)

print(f"New item id : {hosted_service.id, }, url: {hosted_service.layers[0].url}")

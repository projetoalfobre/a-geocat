---
schema: default
title: OpenStreetMap - Prehistoric sites in Iberia
region: Iberia
notes: Georeferenced toponym list from Galician-Portuguese 'Cancioneiros'
doiurl: https://doi.org/10.5281/zenodo.10535242
doiimg: https://zenodo.org/badge/DOI/10.5281/zenodo.10535242.svg
resources:
  - name: https://zenodo.org/badge/DOI/10.5281/zenodo.10535242.svg
    url: 'https://doi.org/10.5281/zenodo.10535242'
    format: jpg
  - name: ![DOI](https://zenodo.org/badge/DOI/10.5281/zenodo.10535242.svg)
    url: 'http://data.phl.opendata.arcgis.com/datasets/1839b35258604422b0b520cbb668df0d_0.zip'
    format: shp
  - name: Air Monitoring Stations GeoService
    url: 'https://services.arcgis.com/fLeGjb7u4uXqeF9q/arcgis/rest/services/Air_Monitoring_Stations/FeatureServer/0/query'
    format: gpkg
license: 'https://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/'
category:
  - Political
  - Modern
maintainer: nelson gonçalves (aka nafergo)
maintainer_email: nafergo@gmail.com
date: 21-01-2024

published: false
---


## Description
This is a dataset with elements from OpenStreetMap tagged with *historic=archaeological_site in Iberia*.

## Data

| Type | Link |
| :------ |:--- |
| Download | [geoJSON](https://projetoalfobre.github.io/alfobre-gis-repository/Iberian_Peninsula/archaeological/openstreetmap/OSM_historic_archaeological_site_in_Iberia.geojson) [GPKG](https://projetoalfobre.github.io/alfobre-gis-repository/Iberian_Peninsula/archaeological/openstreetmap/OSM_historic_archaeological_site_in_Iberia.gpkg) |
| Services | [WFS](https://qgiscloud.com/alfobre/OSM_historic_archaeological_site_in_Iberia/wms?SERVICE=WMS&REQUEST=GetCapabilities) |

## Harvesting
### Source
[OpenStreetMap](https://www.openstreetmap.org/)

### Method
Used [Over-pass turbo](https://overpass-turbo.eu/) to download *historic=archaeological_site in Iberia* from [OpenStreetMap](https://www.openstreetmap.org/)

### Date
9/11/2023

<br/>

### License and copyright

{% include license.html %}

Original datasets by © [OpenStreetMap](https://www.openstreetmap.org/), licensed under the [Open Data Commons Open Database License](https://opendatacommons.org/licenses/odbl/) (ODbL) by the [OpenStreetMap Foundation](https://osmfoundation.org/) (OSMF).

##### Attribution text
*{{ page.title | strip_html }}* by A-GeoCat (Alfobre.com), available under a Creative Commons Attribution 4.0 International (http://creativecommons.org/licenses/by/4.0) at https://projetoalfobre.github.io/a-geocat/. This work is based on data by © [OpenStreetMap](https://www.openstreetmap.org/) - openstreetmap.org/copyright


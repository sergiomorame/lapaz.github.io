var wms_layers = [];


        var lyr_Positron_0 = new ol.layer.Tile({
            'title': 'Positron',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &middot; <a href="https://cartodb.com/basemaps/">Map tiles by CartoDB, under CC BY 3.0. Data by OpenStreetMap, under ODbL.</a>',
                url: 'https://a.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png'
            })
        });
var format_Lapaz_1 = new ol.format.GeoJSON();
var features_Lapaz_1 = format_Lapaz_1.readFeatures(json_Lapaz_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Lapaz_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lapaz_1.addFeatures(features_Lapaz_1);
var lyr_Lapaz_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Lapaz_1, 
                style: style_Lapaz_1,
                popuplayertitle: 'La paz',
                interactive: false,
                title: '<img src="styles/legend/Lapaz_1.png" /> La paz'
            });
var format_colonias_2 = new ol.format.GeoJSON();
var features_colonias_2 = format_colonias_2.readFeatures(json_colonias_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_colonias_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_colonias_2.addFeatures(features_colonias_2);
var lyr_colonias_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_colonias_2, 
                style: style_colonias_2,
                popuplayertitle: 'colonias',
                interactive: true,
                title: '<img src="styles/legend/colonias_2.png" /> colonias'
            });
var format_IncidenciasAgua_3 = new ol.format.GeoJSON();
var features_IncidenciasAgua_3 = format_IncidenciasAgua_3.readFeatures(json_IncidenciasAgua_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_IncidenciasAgua_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_IncidenciasAgua_3.addFeatures(features_IncidenciasAgua_3);
var lyr_IncidenciasAgua_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_IncidenciasAgua_3, 
                style: style_IncidenciasAgua_3,
                popuplayertitle: 'Incidencias Agua',
                interactive: true,
    title: 'Incidencias Agua<br />\
    <img src="styles/legend/IncidenciasAgua_3_0.png" /> Solicitud de pipa<br />'
        });

lyr_Positron_0.setVisible(true);lyr_Lapaz_1.setVisible(true);lyr_colonias_2.setVisible(true);lyr_IncidenciasAgua_3.setVisible(true);
var layersList = [lyr_Positron_0,lyr_Lapaz_1,lyr_colonias_2,lyr_IncidenciasAgua_3];
lyr_Lapaz_1.set('fieldAliases', {'qc_id': 'qc_id', 'id': 'id', 'cveigecem': 'cveigecem', 'cveinegi': 'cveinegi', 'nom_mun': 'nom_mun', 'iddeleg': 'iddeleg', 'area_km2_o': 'area_km2_o', 'area_km2': 'area_km2', 'PobTotal': 'PobTotal', });
lyr_colonias_2.set('fieldAliases', {'cve_igecem': 'cve_igecem', 'nom_mun': 'nom_mun', 'nom_col': 'nom_col', 'area_m': 'area_m', });
lyr_IncidenciasAgua_3.set('fieldAliases', {'Marca temp': 'Marca temp', 'Tipo de pr': 'Tipo de pr', 'Nombre(s)': 'Nombre(s)', 'Apellido(s': 'Apellido(s', 'Municipio': 'Municipio', 'Colonia/Ba': 'Colonia/Ba', 'Avenida/Bo': 'Avenida/Bo', 'N�mero e': 'N�mero e', 'N�mero I': 'N�mero I', 'C�digo P': 'C�digo P', 'Manzana/Lo': 'Manzana/Lo', 'Lugar de r': 'Lugar de r', 'Tel�fono': 'Tel�fono', 'Long': 'Long', 'Lat': 'Lat', });
lyr_Lapaz_1.set('fieldImages', {'qc_id': 'TextEdit', 'id': 'TextEdit', 'cveigecem': 'TextEdit', 'cveinegi': 'TextEdit', 'nom_mun': 'TextEdit', 'iddeleg': 'TextEdit', 'area_km2_o': 'TextEdit', 'area_km2': 'TextEdit', 'PobTotal': 'TextEdit', });
lyr_colonias_2.set('fieldImages', {'cve_igecem': 'TextEdit', 'nom_mun': 'TextEdit', 'nom_col': 'TextEdit', 'area_m': 'TextEdit', });
lyr_IncidenciasAgua_3.set('fieldImages', {'Marca temp': 'TextEdit', 'Tipo de pr': 'TextEdit', 'Nombre(s)': 'TextEdit', 'Apellido(s': 'TextEdit', 'Municipio': 'TextEdit', 'Colonia/Ba': 'TextEdit', 'Avenida/Bo': 'TextEdit', 'N�mero e': 'TextEdit', 'N�mero I': 'TextEdit', 'C�digo P': 'TextEdit', 'Manzana/Lo': 'TextEdit', 'Lugar de r': 'TextEdit', 'Tel�fono': 'TextEdit', 'Long': 'TextEdit', 'Lat': 'TextEdit', });
lyr_Lapaz_1.set('fieldLabels', {'qc_id': 'hidden field', 'id': 'hidden field', 'cveigecem': 'hidden field', 'cveinegi': 'hidden field', 'nom_mun': 'hidden field', 'iddeleg': 'hidden field', 'area_km2_o': 'hidden field', 'area_km2': 'no label', 'PobTotal': 'no label', });
lyr_colonias_2.set('fieldLabels', {'cve_igecem': 'hidden field', 'nom_mun': 'hidden field', 'nom_col': 'inline label - always visible', 'area_m': 'hidden field', });
lyr_IncidenciasAgua_3.set('fieldLabels', {'Marca temp': 'inline label - always visible', 'Tipo de pr': 'inline label - always visible', 'Nombre(s)': 'hidden field', 'Apellido(s': 'hidden field', 'Municipio': 'hidden field', 'Colonia/Ba': 'hidden field', 'Avenida/Bo': 'hidden field', 'N�mero e': 'hidden field', 'N�mero I': 'hidden field', 'C�digo P': 'hidden field', 'Manzana/Lo': 'hidden field', 'Lugar de r': 'hidden field', 'Tel�fono': 'hidden field', 'Long': 'hidden field', 'Lat': 'hidden field', });
lyr_IncidenciasAgua_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
var wms_layers = [];

var lyr_MSA_FR_0 = new ol.layer.Image({
                            opacity: 1,
                            title: "MSA_FR",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/MSA_FR_0.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-617639.146891, 5018881.576459, 1198377.697038, 6658209.126106]
                            })
                        });
var format_Agrg_1 = new ol.format.GeoJSON();
var features_Agrg_1 = format_Agrg_1.readFeatures(json_Agrg_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Agrg_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Agrg_1.addFeatures(features_Agrg_1);
var lyr_Agrg_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Agrg_1, 
                style: style_Agrg_1,
                interactive: true,
                title: '<img src="styles/legend/Agrg_1.png" /> Agrégé'
            });

lyr_MSA_FR_0.setVisible(true);lyr_Agrg_1.setVisible(true);
var layersList = [lyr_MSA_FR_0,lyr_Agrg_1];
lyr_Agrg_1.set('fieldAliases', {'Département': 'Département', 'MSA': 'MSA', });
lyr_Agrg_1.set('fieldImages', {'Département': '', 'MSA': 'TextEdit', });
lyr_Agrg_1.set('fieldLabels', {'Département': 'header label', 'MSA': 'inline label', });
lyr_Agrg_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
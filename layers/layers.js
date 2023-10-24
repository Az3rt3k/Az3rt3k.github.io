var wms_layers = [];

var lyr_MSA_FR_0 = new ol.layer.Image({
                            opacity: 1,
                            title: "MSA_FR",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/MSA_FR_0.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-613689.031431, 5053363.441511, 1189930.096516, 6635936.216523]
                            })
                        });
var format_Statistiquesdezones_1 = new ol.format.GeoJSON();
var features_Statistiquesdezones_1 = format_Statistiquesdezones_1.readFeatures(json_Statistiquesdezones_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Statistiquesdezones_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Statistiquesdezones_1.addFeatures(features_Statistiquesdezones_1);
var lyr_Statistiquesdezones_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Statistiquesdezones_1, 
                style: style_Statistiquesdezones_1,
                interactive: true,
                title: '<img src="styles/legend/Statistiquesdezones_1.png" /> Statistiques de zones'
            });

lyr_MSA_FR_0.setVisible(true);lyr_Statistiquesdezones_1.setVisible(true);
var layersList = [lyr_MSA_FR_0,lyr_Statistiquesdezones_1];
lyr_Statistiquesdezones_1.set('fieldAliases', {'Département': 'Département', 'MSA': 'MSA', 'MSA GLOBIO': 'MSA GLOBIO', });
lyr_Statistiquesdezones_1.set('fieldImages', {'Département': 'TextEdit', 'MSA': 'TextEdit', 'MSA GLOBIO': 'TextEdit', });
lyr_Statistiquesdezones_1.set('fieldLabels', {'Département': 'header label', 'MSA': 'inline label', 'MSA GLOBIO': 'inline label', });
lyr_Statistiquesdezones_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
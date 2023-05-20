var wms_layers = [];

var lyr_Dcoupmasque_0 = new ol.layer.Image({
                            opacity: 1,
                            title: "Découpé (masque)",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Dcoupmasque_0.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-613689.031431, 5053363.441511, 1189930.096516, 6635936.216523]
                            })
                        });
var format_Reprojet2_1 = new ol.format.GeoJSON();
var features_Reprojet2_1 = format_Reprojet2_1.readFeatures(json_Reprojet2_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Reprojet2_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Reprojet2_1.addFeatures(features_Reprojet2_1);
var lyr_Reprojet2_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Reprojet2_1, 
                style: style_Reprojet2_1,
                interactive: false,
                title: '<img src="styles/legend/Reprojet2_1.png" /> Reprojeté2'
            });

lyr_Dcoupmasque_0.setVisible(true);lyr_Reprojet2_1.setVisible(true);
var layersList = [lyr_Dcoupmasque_0,lyr_Reprojet2_1];
lyr_Reprojet2_1.set('fieldAliases', {'Département': 'Département', 'MSA': 'MSA', 'MSA Globio': 'MSA Globio', });
lyr_Reprojet2_1.set('fieldImages', {'Département': 'TextEdit', 'MSA': 'TextEdit', 'MSA Globio': 'TextEdit', });
lyr_Reprojet2_1.set('fieldLabels', {'Département': 'inline label', 'MSA': 'inline label', 'MSA Globio': 'inline label', });
lyr_Reprojet2_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
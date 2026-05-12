var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_po_distritos_UTM_v20_1 = new ol.format.GeoJSON();
var features_po_distritos_UTM_v20_1 = format_po_distritos_UTM_v20_1.readFeatures(json_po_distritos_UTM_v20_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_po_distritos_UTM_v20_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_po_distritos_UTM_v20_1.addFeatures(features_po_distritos_UTM_v20_1);
var lyr_po_distritos_UTM_v20_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_po_distritos_UTM_v20_1, 
                style: style_po_distritos_UTM_v20_1,
                popuplayertitle: 'po_distritos_UTM_v20',
                interactive: true,
                title: '<img src="styles/legend/po_distritos_UTM_v20_1.png" /> po_distritos_UTM_v20'
            });
var format_BASE2025BASE2025_2 = new ol.format.GeoJSON();
var features_BASE2025BASE2025_2 = format_BASE2025BASE2025_2.readFeatures(json_BASE2025BASE2025_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BASE2025BASE2025_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BASE2025BASE2025_2.addFeatures(features_BASE2025BASE2025_2);
var lyr_BASE2025BASE2025_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BASE2025BASE2025_2, 
                style: style_BASE2025BASE2025_2,
                popuplayertitle: 'BASE 2025-BASE 2025',
                interactive: true,
    title: 'BASE 2025-BASE 2025<br />\
    <img src="styles/legend/BASE2025BASE2025_2_0.png" /> Básica Alternativa-Avanzado<br />\
    <img src="styles/legend/BASE2025BASE2025_2_1.png" /> Básica Alternativa-Inicial e Intermedio<br />\
    <img src="styles/legend/BASE2025BASE2025_2_2.png" /> Básica Especial<br />\
    <img src="styles/legend/BASE2025BASE2025_2_3.png" /> Básica Especial-Inicial<br />\
    <img src="styles/legend/BASE2025BASE2025_2_4.png" /> Básica Especial-Primaria<br />\
    <img src="styles/legend/BASE2025BASE2025_2_5.png" /> Educación Ocupacional<br />\
    <img src="styles/legend/BASE2025BASE2025_2_6.png" /> Escuela Formación Artística<br />\
    <img src="styles/legend/BASE2025BASE2025_2_7.png" /> Escuela Superior Pedagógica<br />\
    <img src="styles/legend/BASE2025BASE2025_2_8.png" /> Inicial - Cuna-jardín<br />\
    <img src="styles/legend/BASE2025BASE2025_2_9.png" /> Inicial - Jardín<br />\
    <img src="styles/legend/BASE2025BASE2025_2_10.png" /> Instituto Superior Pedagógico<br />\
    <img src="styles/legend/BASE2025BASE2025_2_11.png" /> Instituto Superior Tecnológico<br />\
    <img src="styles/legend/BASE2025BASE2025_2_12.png" /> Primaria<br />\
    <img src="styles/legend/BASE2025BASE2025_2_13.png" /> Primaria de Adultos<br />\
    <img src="styles/legend/BASE2025BASE2025_2_14.png" /> Secundaria<br />\
    <img src="styles/legend/BASE2025BASE2025_2_15.png" /> Secundaria de Adultos<br />\
    <img src="styles/legend/BASE2025BASE2025_2_16.png" /> Técnico Productiva<br />' });
var format_vias_3 = new ol.format.GeoJSON();
var features_vias_3 = format_vias_3.readFeatures(json_vias_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_vias_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_vias_3.addFeatures(features_vias_3);
var lyr_vias_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_vias_3, 
                style: style_vias_3,
                popuplayertitle: 'vias',
                interactive: false,
    title: 'vias<br />\
    <img src="styles/legend/vias_3_0.png" /> Asfaltado<br />\
    <img src="styles/legend/vias_3_1.png" /> Afirmado<br />\
    <img src="styles/legend/vias_3_2.png" /> Sin afirmar<br />\
    <img src="styles/legend/vias_3_3.png" /> Trocha<br />' });

lyr_OSMStandard_0.setVisible(true);lyr_po_distritos_UTM_v20_1.setVisible(true);lyr_BASE2025BASE2025_2.setVisible(true);lyr_vias_3.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_po_distritos_UTM_v20_1,lyr_vias_3,lyr_BASE2025BASE2025_2];
lyr_po_distritos_UTM_v20_1.set('fieldAliases', {'IDDPTO': 'IDDPTO', 'DEPART': 'DEPART', 'PROV_ID': 'PROV_ID', 'PROVINCIA': 'PROVINCIA', 'DIST_ID': 'DIST_ID', 'DISTRITO': 'DISTRITO', 'AREA_Km2': 'AREA_Km2', 'AREA_Ha': 'AREA_Ha', });
lyr_BASE2025BASE2025_2.set('fieldAliases', {'N°': 'N°', 'CÓDIGO LOCAL': 'CÓDIGO LOCAL', 'COD_MOD': 'COD_MOD', 'CODINST': 'CODINST', 'NOMBRE DE LAS INSTITUCIONES EDUCATIVAS DEL LOCAL EDUCATIVO': 'NOMBRE DE LAS INSTITUCIONES EDUCATIVAS DEL LOCAL EDUCATIVO', 'CENTRO POBLADO': 'CENTRO POBLADO', 'DISTRITO': 'DISTRITO', 'PROVINCIA': 'PROVINCIA', 'UGEL': 'UGEL', 'DIRECCION': 'DIRECCION', 'NIVEL/MODALIDAD': 'NIVEL/MODALIDAD', 'NIVEL': 'NIVEL', 'D_FORMA': 'D_FORMA', 'DAREACENSO': 'DAREACENSO', 'DIRECTOR': 'DIRECTOR', 'TOTAL ALUMNOS': 'TOTAL ALUMNOS', 'TDOCENTE': 'TDOCENTE', 'TSECCION': 'TSECCION', });
lyr_vias_3.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'ZONUTM': 'Zona UTM', 'FUENTE': 'Entidad generadora', 'ORIGEN': 'Origen del objeto', 'CODRUT': 'Código de la Ruta', 'NIVVIA': 'Nivel de la vía', 'TIPSUP': 'Tipo de superficie', 'ESTCON': 'Estado de conservación', 'LONVIA': 'Longitud de la vía', 'ANCVIA': 'Ancho de la vía', 'OBSERV': 'Observacion o referencia', 'DOCREG': 'Documento que avala el registro', 'FECREG': 'Fecha de registro del objeto', 'SHAPE_Length': 'SHAPE_Length', });
lyr_po_distritos_UTM_v20_1.set('fieldImages', {'IDDPTO': 'Hidden', 'DEPART': 'Hidden', 'PROV_ID': 'Hidden', 'PROVINCIA': 'TextEdit', 'DIST_ID': 'Hidden', 'DISTRITO': 'Hidden', 'AREA_Km2': 'Hidden', 'AREA_Ha': 'Hidden', });
lyr_BASE2025BASE2025_2.set('fieldImages', {'N°': 'Range', 'CÓDIGO LOCAL': 'Range', 'COD_MOD': 'Range', 'CODINST': 'Range', 'NOMBRE DE LAS INSTITUCIONES EDUCATIVAS DEL LOCAL EDUCATIVO': 'TextEdit', 'CENTRO POBLADO': 'TextEdit', 'DISTRITO': 'TextEdit', 'PROVINCIA': 'TextEdit', 'UGEL': 'TextEdit', 'DIRECCION': 'TextEdit', 'NIVEL/MODALIDAD': 'TextEdit', 'NIVEL': 'TextEdit', 'D_FORMA': 'TextEdit', 'DAREACENSO': 'TextEdit', 'DIRECTOR': 'TextEdit', 'TOTAL ALUMNOS': 'Range', 'TDOCENTE': 'Range', 'TSECCION': 'TextEdit', });
lyr_vias_3.set('fieldImages', {'OBJECTID': 'TextEdit', 'ZONUTM': 'ValueMap', 'FUENTE': 'TextEdit', 'ORIGEN': 'ValueMap', 'CODRUT': 'TextEdit', 'NIVVIA': 'Range', 'TIPSUP': 'ValueMap', 'ESTCON': 'ValueMap', 'LONVIA': 'TextEdit', 'ANCVIA': 'TextEdit', 'OBSERV': 'TextEdit', 'DOCREG': 'TextEdit', 'FECREG': 'DateTime', 'SHAPE_Length': 'TextEdit', });
lyr_po_distritos_UTM_v20_1.set('fieldLabels', {'PROVINCIA': 'inline label - always visible', });
lyr_BASE2025BASE2025_2.set('fieldLabels', {'N°': 'inline label - always visible', 'CÓDIGO LOCAL': 'inline label - always visible', 'COD_MOD': 'inline label - always visible', 'CODINST': 'inline label - always visible', 'NOMBRE DE LAS INSTITUCIONES EDUCATIVAS DEL LOCAL EDUCATIVO': 'inline label - always visible', 'CENTRO POBLADO': 'inline label - always visible', 'DISTRITO': 'inline label - always visible', 'PROVINCIA': 'inline label - always visible', 'UGEL': 'inline label - always visible', 'DIRECCION': 'inline label - always visible', 'NIVEL/MODALIDAD': 'inline label - always visible', 'NIVEL': 'inline label - always visible', 'D_FORMA': 'inline label - always visible', 'DAREACENSO': 'inline label - always visible', 'DIRECTOR': 'inline label - always visible', 'TOTAL ALUMNOS': 'inline label - always visible', 'TDOCENTE': 'inline label - always visible', 'TSECCION': 'inline label - always visible', });
lyr_vias_3.set('fieldLabels', {'OBJECTID': 'no label', 'ZONUTM': 'no label', 'FUENTE': 'no label', 'ORIGEN': 'no label', 'CODRUT': 'no label', 'NIVVIA': 'no label', 'TIPSUP': 'no label', 'ESTCON': 'no label', 'LONVIA': 'no label', 'ANCVIA': 'no label', 'OBSERV': 'no label', 'DOCREG': 'no label', 'FECREG': 'no label', 'SHAPE_Length': 'no label', });
lyr_vias_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});

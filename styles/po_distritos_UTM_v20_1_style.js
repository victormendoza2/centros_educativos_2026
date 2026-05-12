var size = 0;
var placement = 'point';

var style_po_distritos_UTM_v20_1 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; 
    var value = feature.get("");
    var labelFont = "14.3px \'MS Shell Dlg 2\', sans-serif";
    var labelFill = "#000000";
    var bufferColor = "#ffffff";
    var bufferWidth = 3.0;
    var textAlign = "left";
    var offsetX = 0;
    var offsetY = 0;
    var placement = 'point';
    if ("" !== null && resolution > 0 && resolution < 140) {
        labelText = String("");
    }
    var style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,0,0,1.0)', lineDash: [2.8499999999999996,0.57], lineCap: 'butt', lineJoin: 'miter', width: 0.57}),fill: new ol.style.Fill({color: 'rgba(230,245,201,0.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];

    return style;
};

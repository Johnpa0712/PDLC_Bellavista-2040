var size = 0;
var placement = 'point';

var style_NiveldeDensidadPoblacional_1 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = feature.get("densidad");
    var labelText = "";
    size = 0;
    var labelFont = "10px, sans-serif";
    var labelFill = "#000000";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    var placement = 'point';
    if ("" !== null) {
        labelText = String("");
    }
    if (value >= 0.000372 && value <= 0.015400) {
            style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(59,59,59,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.57}),fill: new ol.style.Fill({color: 'rgba(247,251,255,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 0.015400 && value <= 0.033624) {
            style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(59,59,59,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.57}),fill: new ol.style.Fill({color: 'rgba(200,220,240,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 0.033624 && value <= 0.051132) {
            style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(59,59,59,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.57}),fill: new ol.style.Fill({color: 'rgba(115,178,216,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 0.051132 && value <= 0.086723) {
            style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(59,59,59,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.57}),fill: new ol.style.Fill({color: 'rgba(41,121,185,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 0.086723 && value <= 0.170372) {
            style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(59,59,59,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.57}),fill: new ol.style.Fill({color: 'rgba(8,48,107,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    };

    return style;
};

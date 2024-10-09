var wms_layers = [];

var format_Manzanas_0 = new ol.format.GeoJSON();
var features_Manzanas_0 = format_Manzanas_0.readFeatures(json_Manzanas_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Manzanas_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Manzanas_0.addFeatures(features_Manzanas_0);
var lyr_Manzanas_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Manzanas_0, 
                style: style_Manzanas_0,
                popuplayertitle: "Manzanas",
                interactive: false,
                title: '<img src="styles/legend/Manzanas_0.png" /> Manzanas'
            });
var format_NiveldeDensidadPoblacional_1 = new ol.format.GeoJSON();
var features_NiveldeDensidadPoblacional_1 = format_NiveldeDensidadPoblacional_1.readFeatures(json_NiveldeDensidadPoblacional_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NiveldeDensidadPoblacional_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NiveldeDensidadPoblacional_1.addFeatures(features_NiveldeDensidadPoblacional_1);
var lyr_NiveldeDensidadPoblacional_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_NiveldeDensidadPoblacional_1, 
                style: style_NiveldeDensidadPoblacional_1,
                popuplayertitle: "Nivel de Densidad Poblacional",
                interactive: true,
    title: 'Nivel de Densidad Poblacional<br />\
    <img src="styles/legend/NiveldeDensidadPoblacional_1_0.png" /> Muy bajo<br />\
    <img src="styles/legend/NiveldeDensidadPoblacional_1_1.png" /> Bajo<br />\
    <img src="styles/legend/NiveldeDensidadPoblacional_1_2.png" /> Medio<br />\
    <img src="styles/legend/NiveldeDensidadPoblacional_1_3.png" /> Alto<br />\
    <img src="styles/legend/NiveldeDensidadPoblacional_1_4.png" /> Muy alto<br />'
        });
var format_reasVerdes_2 = new ol.format.GeoJSON();
var features_reasVerdes_2 = format_reasVerdes_2.readFeatures(json_reasVerdes_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_reasVerdes_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasVerdes_2.addFeatures(features_reasVerdes_2);
var lyr_reasVerdes_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasVerdes_2, 
                style: style_reasVerdes_2,
                popuplayertitle: "Áreas Verdes",
                interactive: false,
                title: '<img src="styles/legend/reasVerdes_2.png" /> Áreas Verdes'
            });
var format_Distritoscapatransparente_3 = new ol.format.GeoJSON();
var features_Distritoscapatransparente_3 = format_Distritoscapatransparente_3.readFeatures(json_Distritoscapatransparente_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Distritoscapatransparente_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Distritoscapatransparente_3.addFeatures(features_Distritoscapatransparente_3);
var lyr_Distritoscapatransparente_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Distritoscapatransparente_3, 
                style: style_Distritoscapatransparente_3,
                popuplayertitle: "Distritos capa transparente",
                interactive: false,
                title: '<img src="styles/legend/Distritoscapatransparente_3.png" /> Distritos capa transparente'
            });
var format_LmiteDistrital_4 = new ol.format.GeoJSON();
var features_LmiteDistrital_4 = format_LmiteDistrital_4.readFeatures(json_LmiteDistrital_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LmiteDistrital_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LmiteDistrital_4.addFeatures(features_LmiteDistrital_4);
var lyr_LmiteDistrital_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LmiteDistrital_4, 
                style: style_LmiteDistrital_4,
                popuplayertitle: "Límite Distrital",
                interactive: false,
                title: '<img src="styles/legend/LmiteDistrital_4.png" /> Límite Distrital'
            });
var format_polylines_5 = new ol.format.GeoJSON();
var features_polylines_5 = format_polylines_5.readFeatures(json_polylines_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_polylines_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_polylines_5.addFeatures(features_polylines_5);
var lyr_polylines_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_polylines_5, 
                style: style_polylines_5,
                popuplayertitle: "polylines",
                interactive: true,
                title: '<img src="styles/legend/polylines_5.png" /> polylines'
            });
var format_lines_6 = new ol.format.GeoJSON();
var features_lines_6 = format_lines_6.readFeatures(json_lines_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_lines_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_lines_6.addFeatures(features_lines_6);
var lyr_lines_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_lines_6, 
                style: style_lines_6,
                popuplayertitle: "lines",
                interactive: true,
                title: '<img src="styles/legend/lines_6.png" /> lines'
            });
var group_Bellavista_Final_2024P = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "Bellavista_Final_2024P"});
var group_0 = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "0"});
var group_00Manzana = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "00Manzana"});
var group_ATInvViaPublica = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "A.T Inv. Via. Publica"});
var group_A1_LETRAS = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "A1_LETRAS"});
var group_A1_MOBILIARIO = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "A1_MOBILIARIO"});
var group_A1_MUROS = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "A1_MUROS"});
var group_A1_PISTA = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "A1_PISTA"});
var group_AABORRADOR = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "AA-BORRADOR"});
var group_BERMAS_JARDIN = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "BERMAS_JARDIN"});
var group_BERMAS_PISO = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "BERMAS_PISO"});
var group_Ctecho1 = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "C-techo1"});
var group_Ctecho2 = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "C-techo2"});
var group_CERCO = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "CERCO"});
var group_EquipamientoUrbano = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "Equipamiento Urbano"});
var group_FALTA = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "FALTA"});
var group_GPS = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "GPS"});
var group_LimiteDistrito = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "Limite Distrito"});
var group_LimiteHabilitacionesUrbanas = new ol.layer.Group({
                                layers: [lyr_polylines_5,],
                                fold: "open",
                                title: "Limite Habilitaciones Urbanas"});
var group_LimiteLoteCatastral = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "Limite Lote Catastral"});
var group_LimiteLoteUrbano = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "Limite Lote Urbano"});
var group_LimiteManzanaCatastral = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "Limite Manzana Catastral"});
var group_LimiteManzanaurbana = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "Limite Manzana urbana"});
var group_LimitedeParque = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "Limite de Parque"});
var group_Limitesectores = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "Limite sectores"});
var group_NUM_CUADRA = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "NUM_CUADRA"});
var group_NombreCalles = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "Nombre Calles"});
var group_NombreParques = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "Nombre Parques"});
var group_NombredeHabilitaciones = new ol.layer.Group({
                                layers: [lyr_lines_6,],
                                fold: "open",
                                title: "Nombre de Habilitaciones"});
var group_NroPuestoCatastral = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "Nro Puesto Catastral"});
var group_NroPuestoUI = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "Nro Puesto U.I"});
var group_NroLoteCatastral = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "Nro. Lote Catastral"});
var group_NroLoteUrbano = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "Nro. Lote Urbano"});
var group_NroManzanacatastral = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "Nro. Manzana catastral"});
var group_NroManzanaurbana = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "Nro. Manzana urbana"});
var group_NrodeIngresos = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "Nro. de Ingresos"});
var group_Nrosector = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "Nro. sector"});
var group_RAMPA = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "RAMPA"});
var group_SARDINEL = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "SARDINEL"});
var group_VEREDA = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "VEREDA"});
var group_VERMA = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "VERMA"});
var group_Zonificacion = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "Zonificacion"});
var group_area_recreacion_jardin = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "area_recreacion_jardin"});
var group_area_recreacion_otros = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "area_recreacion_otros"});
var group_area_recreacion_piso = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "area_recreacion_piso"});
var group_bms = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "bms"});
var group_comp_vial_bermalateral_jardin = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "comp_vial_bermalateral_jardin"});
var group_comp_vial_bermalateral_piso = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "comp_vial_bermalateral_piso"});
var group_manzanas = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "manzanas"});
var group_parques = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "parques"});
var group_perimetro = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "perimetro"});
var group_sardinelnuevo = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "sardinelnuevo"});
var group_geoportalgli_ogpp_vial_lima = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "geoportal:gli_ogpp_vial_lima"});
var group_03DIMENSINECONMICA = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "03 DIMENSIÓN ECONÓMICA"});
var group_Centrosdesalud = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "Centros de salud"});
var group_CentrosEducativos = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "Centros Educativos"});
var group_02DIMENSININFRAESTRUCTURA = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "02 DIMENSIÓN INFRAESTRUCTURA"});
var group_INEIFortaentoV121_Bellavista = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "INEI Fortaento V1.21 _Bellavista"});
var group_Mapageneral = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "Mapa general"});
var group_Mapa3 = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "Mapa 3"});
var group_MapadeenfoqueLMyCallao = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "Mapa de enfoque LM y Callao"});
var group_Mapa2 = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "Mapa 2"});
var group_Lmitesreferencialesycartografabase = new ol.layer.Group({
                                layers: [lyr_Manzanas_0,lyr_NiveldeDensidadPoblacional_1,lyr_reasVerdes_2,lyr_Distritoscapatransparente_3,lyr_LmiteDistrital_4,],
                                fold: "open",
                                title: "Límites referenciales y cartografía base"});
var group_Otrascapas = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "Otras capas"});

lyr_Manzanas_0.setVisible(true);lyr_NiveldeDensidadPoblacional_1.setVisible(true);lyr_reasVerdes_2.setVisible(true);lyr_Distritoscapatransparente_3.setVisible(true);lyr_LmiteDistrital_4.setVisible(true);lyr_polylines_5.setVisible(true);lyr_lines_6.setVisible(true);
var layersList = [group_Lmitesreferencialesycartografabase,group_LimiteHabilitacionesUrbanas,group_NombredeHabilitaciones];
lyr_Manzanas_0.set('fieldAliases', {'id': 'id', 'ubigeo': 'ubigeo', 'codccpp': 'codccpp', 'zona': 'zona', 'manzana': 'manzana', 'viv_mz': 'viv_mz', 'llave_mzs': 'llave_mzs', 'idmanzana': 'idmanzana', 'codigo': 'codigo', 'shape.stle': 'shape.stle', 'descripcio': 'descripcio', 'llave': 'llave', 'dpto': 'dpto', 'prov': 'prov', 'dist': 'dist', 'ccpp': 'ccpp', 'pobcensada': 'pobcensada', 'pobvivpart': 'pobvivpart', 'vivparopre': 'vivparopre', 'area_m2': 'area_m2', 'densidad': 'densidad', });
lyr_NiveldeDensidadPoblacional_1.set('fieldAliases', {'id': 'id', 'ubigeo': 'ubigeo', 'codccpp': 'codccpp', 'zona': 'zona', 'manzana': 'manzana', 'viv_mz': 'viv_mz', 'llave_mzs': 'llave_mzs', 'idmanzana': 'idmanzana', 'codigo': 'codigo', 'shape.stle': 'shape.stle', 'descripcio': 'descripcio', 'llave': 'llave', 'dpto': 'dpto', 'prov': 'prov', 'dist': 'dist', 'ccpp': 'ccpp', 'pobcensada': 'pobcensada', 'pobvivpart': 'pobvivpart', 'vivparopre': 'vivparopre', 'area_m2': 'area_m2', 'densidad': 'densidad', });
lyr_reasVerdes_2.set('fieldAliases', {'id': 'id', 'objectid': 'objectid', 'coddpto': 'coddpto', 'codprov': 'codprov', 'coddist': 'coddist', 'ubigeo': 'ubigeo', 'idccpp': 'idccpp', 'nomccpp': 'nomccpp', 'codccpp': 'codccpp', 'distrito': 'distrito', 'shape_leng': 'shape_leng', 'shape_area': 'shape_area', });
lyr_Distritoscapatransparente_3.set('fieldAliases', {'OBJECTID_1': 'OBJECTID_1', 'UBIGEO': 'UBIGEO', 'CODDEP': 'CODDEP', 'DEPARTAMEN': 'DEPARTAMEN', 'CODPROV': 'CODPROV', 'PROVINCIA': 'PROVINCIA', 'CODDIST': 'CODDIST', 'DISTRITO': 'DISTRITO', 'CAPITAL': 'CAPITAL', 'FUENTE': 'FUENTE', });
lyr_LmiteDistrital_4.set('fieldAliases', {'OBJECTID_1': 'OBJECTID_1', 'UBIGEO': 'UBIGEO', 'CODDEP': 'CODDEP', 'DEPARTAMEN': 'DEPARTAMEN', 'CODPROV': 'CODPROV', 'PROVINCIA': 'PROVINCIA', 'CODDIST': 'CODDIST', 'DISTRITO': 'DISTRITO', 'CAPITAL': 'CAPITAL', 'FUENTE': 'FUENTE', });
lyr_polylines_5.set('fieldAliases', {'fid': 'fid', 'handle': 'handle', 'block': 'block', 'etype': 'etype', 'space': 'space', 'layer': 'layer', 'olinetype': 'olinetype', 'linetype': 'linetype', 'color': 'color', 'ocolor': 'ocolor', 'color24': 'color24', 'transparency': 'transparency', 'lweight': 'lweight', 'linewidth': 'linewidth', 'ltscale': 'ltscale', 'visible': 'visible', 'width': 'width', 'thickness': 'thickness', 'ext': 'ext', });
lyr_lines_6.set('fieldAliases', {'fid': 'fid', 'handle': 'handle', 'block': 'block', 'etype': 'etype', 'space': 'space', 'layer': 'layer', 'olinetype': 'olinetype', 'linetype': 'linetype', 'color': 'color', 'ocolor': 'ocolor', 'color24': 'color24', 'transparency': 'transparency', 'lweight': 'lweight', 'linewidth': 'linewidth', 'ltscale': 'ltscale', 'visible': 'visible', 'thickness': 'thickness', 'ext': 'ext', 'width': 'width', });
lyr_Manzanas_0.set('fieldImages', {'id': 'Range', 'ubigeo': 'TextEdit', 'codccpp': 'TextEdit', 'zona': 'TextEdit', 'manzana': 'TextEdit', 'viv_mz': 'TextEdit', 'llave_mzs': 'TextEdit', 'idmanzana': 'TextEdit', 'codigo': 'TextEdit', 'shape.stle': 'TextEdit', 'descripcio': 'TextEdit', 'llave': 'TextEdit', 'dpto': 'TextEdit', 'prov': 'TextEdit', 'dist': 'TextEdit', 'ccpp': 'TextEdit', 'pobcensada': 'Range', 'pobvivpart': 'Range', 'vivparopre': 'Range', 'area_m2': 'TextEdit', 'densidad': 'TextEdit', });
lyr_NiveldeDensidadPoblacional_1.set('fieldImages', {'id': 'Range', 'ubigeo': 'TextEdit', 'codccpp': 'TextEdit', 'zona': 'TextEdit', 'manzana': 'TextEdit', 'viv_mz': 'TextEdit', 'llave_mzs': 'TextEdit', 'idmanzana': 'TextEdit', 'codigo': 'TextEdit', 'shape.stle': 'TextEdit', 'descripcio': 'TextEdit', 'llave': 'TextEdit', 'dpto': 'TextEdit', 'prov': 'TextEdit', 'dist': 'TextEdit', 'ccpp': 'TextEdit', 'pobcensada': 'Range', 'pobvivpart': 'Range', 'vivparopre': 'Range', 'area_m2': 'TextEdit', 'densidad': 'TextEdit', });
lyr_reasVerdes_2.set('fieldImages', {'id': 'Range', 'objectid': 'TextEdit', 'coddpto': 'TextEdit', 'codprov': 'TextEdit', 'coddist': 'TextEdit', 'ubigeo': 'TextEdit', 'idccpp': 'TextEdit', 'nomccpp': 'TextEdit', 'codccpp': 'TextEdit', 'distrito': 'TextEdit', 'shape_leng': 'TextEdit', 'shape_area': 'TextEdit', });
lyr_Distritoscapatransparente_3.set('fieldImages', {'OBJECTID_1': 'TextEdit', 'UBIGEO': 'TextEdit', 'CODDEP': 'TextEdit', 'DEPARTAMEN': 'TextEdit', 'CODPROV': 'TextEdit', 'PROVINCIA': 'TextEdit', 'CODDIST': 'TextEdit', 'DISTRITO': 'TextEdit', 'CAPITAL': 'TextEdit', 'FUENTE': 'TextEdit', });
lyr_LmiteDistrital_4.set('fieldImages', {'OBJECTID_1': 'TextEdit', 'UBIGEO': 'TextEdit', 'CODDEP': 'TextEdit', 'DEPARTAMEN': 'TextEdit', 'CODPROV': 'TextEdit', 'PROVINCIA': 'TextEdit', 'CODDIST': 'TextEdit', 'DISTRITO': 'TextEdit', 'CAPITAL': 'TextEdit', 'FUENTE': 'TextEdit', });
lyr_polylines_5.set('fieldImages', {'fid': 'TextEdit', 'handle': 'Range', 'block': 'Range', 'etype': 'Range', 'space': 'Range', 'layer': 'TextEdit', 'olinetype': 'TextEdit', 'linetype': 'TextEdit', 'color': 'TextEdit', 'ocolor': 'Range', 'color24': 'Range', 'transparency': 'Range', 'lweight': 'Range', 'linewidth': 'TextEdit', 'ltscale': 'TextEdit', 'visible': 'Range', 'width': 'TextEdit', 'thickness': 'TextEdit', 'ext': 'TextEdit', });
lyr_lines_6.set('fieldImages', {'fid': '', 'handle': '', 'block': '', 'etype': '', 'space': '', 'layer': '', 'olinetype': '', 'linetype': '', 'color': '', 'ocolor': '', 'color24': '', 'transparency': '', 'lweight': '', 'linewidth': '', 'ltscale': '', 'visible': '', 'thickness': '', 'ext': '', 'width': '', });
lyr_Manzanas_0.set('fieldLabels', {'id': 'no label', 'ubigeo': 'no label', 'codccpp': 'no label', 'zona': 'no label', 'manzana': 'no label', 'viv_mz': 'no label', 'llave_mzs': 'no label', 'idmanzana': 'no label', 'codigo': 'no label', 'shape.stle': 'no label', 'descripcio': 'no label', 'llave': 'no label', 'dpto': 'no label', 'prov': 'no label', 'dist': 'no label', 'ccpp': 'no label', 'pobcensada': 'no label', 'pobvivpart': 'no label', 'vivparopre': 'no label', 'area_m2': 'no label', 'densidad': 'no label', });
lyr_NiveldeDensidadPoblacional_1.set('fieldLabels', {'id': 'hidden field', 'ubigeo': 'hidden field', 'codccpp': 'hidden field', 'zona': 'hidden field', 'manzana': 'hidden field', 'viv_mz': 'hidden field', 'llave_mzs': 'hidden field', 'idmanzana': 'hidden field', 'codigo': 'hidden field', 'shape.stle': 'hidden field', 'descripcio': 'hidden field', 'llave': 'hidden field', 'dpto': 'hidden field', 'prov': 'hidden field', 'dist': 'hidden field', 'ccpp': 'hidden field', 'pobcensada': 'inline label - visible with data', 'pobvivpart': 'hidden field', 'vivparopre': 'hidden field', 'area_m2': 'inline label - visible with data', 'densidad': 'inline label - visible with data', });
lyr_reasVerdes_2.set('fieldLabels', {'id': 'no label', 'objectid': 'no label', 'coddpto': 'no label', 'codprov': 'no label', 'coddist': 'no label', 'ubigeo': 'no label', 'idccpp': 'no label', 'nomccpp': 'no label', 'codccpp': 'no label', 'distrito': 'no label', 'shape_leng': 'no label', 'shape_area': 'no label', });
lyr_Distritoscapatransparente_3.set('fieldLabels', {'OBJECTID_1': 'no label', 'UBIGEO': 'no label', 'CODDEP': 'no label', 'DEPARTAMEN': 'no label', 'CODPROV': 'no label', 'PROVINCIA': 'no label', 'CODDIST': 'no label', 'DISTRITO': 'no label', 'CAPITAL': 'no label', 'FUENTE': 'no label', });
lyr_LmiteDistrital_4.set('fieldLabels', {'OBJECTID_1': 'no label', 'UBIGEO': 'no label', 'CODDEP': 'no label', 'DEPARTAMEN': 'no label', 'CODPROV': 'no label', 'PROVINCIA': 'no label', 'CODDIST': 'no label', 'DISTRITO': 'no label', 'CAPITAL': 'no label', 'FUENTE': 'no label', });
lyr_polylines_5.set('fieldLabels', {'fid': 'no label', 'handle': 'no label', 'block': 'no label', 'etype': 'no label', 'space': 'no label', 'layer': 'no label', 'olinetype': 'no label', 'linetype': 'no label', 'color': 'no label', 'ocolor': 'no label', 'color24': 'no label', 'transparency': 'no label', 'lweight': 'no label', 'linewidth': 'no label', 'ltscale': 'no label', 'visible': 'no label', 'width': 'no label', 'thickness': 'no label', 'ext': 'no label', });
lyr_lines_6.set('fieldLabels', {'fid': 'no label', 'handle': 'no label', 'block': 'no label', 'etype': 'no label', 'space': 'no label', 'layer': 'no label', 'olinetype': 'no label', 'linetype': 'no label', 'color': 'no label', 'ocolor': 'no label', 'color24': 'no label', 'transparency': 'no label', 'lweight': 'no label', 'linewidth': 'no label', 'ltscale': 'no label', 'visible': 'no label', 'thickness': 'no label', 'ext': 'no label', 'width': 'no label', });
lyr_lines_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
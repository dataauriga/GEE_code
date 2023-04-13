var table = ee.FeatureCollection("users/yustinusseno/Crosscut_MBI/sawit_scope25"),
    geometry = 
    /* color: #d63000 */
    /* shown: false */
    /* displayProperties: [
      {
        "type": "rectangle"
      }
    ] */
    ee.Geometry.Polygon(
        [[[88.86628501197418, 9.798402032618045],
          [88.86628501197418, -18.476986827630313],
          [160.40925376197418, -18.476986827630313],
          [160.40925376197418, 9.798402032618045]]], null, false);

          var sawit25 = table
          .filter(ee.Filter.notNull(['LUAS']))
          .reduceToImage({
            properties:['LUAS'],
            reducer: ee.Reducer.first()
          });
          
          print(sawit25)
          
          Map.addLayer (sawit25,{min : 1, max : 3, palette:['005', 'ffaa00', 'aa0000']},'sawit25')
          Map.addLayer (table,{},'sawit25v2')
          
          Export.image.toDrive({
            image         : sawit25,
            description   : 'sawit25',
            fileNamePrefix: 'sawit25',
            region        : geometry,
            scale         : 30,
            maxPixels     : 1e13
          })
          
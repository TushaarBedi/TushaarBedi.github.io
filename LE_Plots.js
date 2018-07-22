// Defining the main function, which will call the getData function
function init(){
  buildbarcharts();
}

//------------------------------------------------------------------------------------------------------------

// Define buildbarcharts function which will build the default chart when the page first loads
function buildbarcharts(){
  
  var chart_data = [{
    x: ['1900s - 47', '1910s - 49', '1920s - 54', '1930s - 60', '1940s - 62', '1950s - 67', '1960s - 67', '1970s - 68', '1980s - 71',
    '1990s - 73', '2000s - 75', '2010s - 80', '2018 - 87'],
    // y: [1,2,3,4,5,6,7,8,9,10,11,12,13],
    y: [47,49,54,60,62,67,67,68,71,73,75,80,87],
    type: "bar",
    marker: {
      color: 'yellow'
    }
  }];
  var layout = {
    title: "Life Expectancy - Male",
    xaxis: { title: "Decades"},
    yaxis: { title: "Age in Years"}
  };
  Plotly.plot("plot", chart_data, layout);
}

//---------------------------------------------------------------------------------------------

// Defining the new update Charts function which will call for new charts to be plotted each time 
//this function is called from getDataCharts() function

function updatePlotly(newdata, newlayout) {
  var BAR = document.getElementById("plot");  
  Plotly.newPlot(BAR, newdata, newlayout);
}

//---------------------------------------------------------------------------------------------

function getDataCharts(dataset) {
  var data = [];
  var layout = {};
  
  switch (dataset) {
    
    case "dataset1":
    data = [{
      x: ['1900s - 47', '1910s - 49', '1920s - 54', '1930s - 60', '1940s - 62', '1950s - 67', '1960s - 67', '1970s - 68', '1980s - 71',
      '1990s - 73', '2000s - 75', '2010s - 80', '2018 - 87'],
      // y: [1,2,3,4,5,6,7,8,9,10,11,12,13],
      y: [47,49,54,60,62,67,67,68,71,73,75,80,87],
      
      type: "bar",
      marker: {
        color: 'skyblue'
      }
    }];
    layout = {
      title: "Life Expectancy - Male",
      xaxis: { title: "Decades"},
      yaxis: { title: "Age in Years"}
    };
    break;
    
    case "dataset2":
    data = [{
      x: ['1900s - 49', '1910s - 52', '1920s - 66', '1930s - 64', '1940s - 67', '1950s - 72', '1960s - 74', '1970s - 76', '1980s - 78',
      '1990s - 80', '2000s - 80', '2010s - 82', '2018 - 89'],
      y: [49,52,66,64,67,72,74,76,78,80,80,82,89],
      type: "bar",
      marker: {
        color: 'pink'
      }
    }];
    layout = {
      title: "Life Expectancy - Female",
      xaxis: { title: "Decades"},
      yaxis: { title: "Age in Years"}
    };
    break;
    //-------------------------------------------------------------------------------------------------
    
    
    default:
    data = [];
    layout = {title: "No Graph has been selected"};
  }
  updatePlotly(data, layout);
}

init();

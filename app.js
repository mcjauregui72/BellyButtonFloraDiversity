
//Instead of importing data from url, reference samples.json file saved in repository root
//which is recommended to make dashboard self-contained when using Pages 
//A. Define urlData for import file: const urlData = "https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json";
//B. Promise pending for json data from urlData not necessary since samples.json saved in repo root
//const dataPromise = d3.json(urlData);
  //console.log("Data promise: ", dataPromise);

const urlData = "samples.json";

//To update content of sample-metadata element on webpage: 
//1. Define 'metaData' function to take 'demographicInfo'/meta_data as parameter
//2. Assign 'meta_data' value of 'metadata' key inside json data (portion denoted by 'data.metadata')
//3. Define 'meta_data' as variable holding 'sample-metadata' retrieved from json
//4. Select html element with div id="sample-metadata" and save to demSelect variable 

//Select "sample-metadata" element from html and save as 'demSelect', then reset 'demSelect' content to 
//'demographicInfo' template string representing details of selected trial participant's demographic info
    function metaDataFunc(demographicInfo) {     
      let demSelect = d3.select("#sample-metadata")
      demSelect.html(
        `id: ${demographicInfo.id} <br>
        ethnicity: ${demographicInfo.ethnicity} <br>
        gender: ${demographicInfo.gender} </br>
        age: ${demographicInfo.age} <br>
        location: ${demographicInfo.location} <br>
        bbtype: ${demographicInfo.bbtype} </br>
        wfreq: ${demographicInfo.wfreq}`  
      );
    }

// Define 'samples' and 'meta_data' variable in scope accessible to all functions (ie., outside .then() function)
var samples;
var meta_data;

// Load JSON data, save object as 'data'
d3.json(urlData)
    .then(function(data) {
      console.log(data);
      
    //Use dot notation to access 'metadata' and 'samples' parts of 'data' object  
    //Define 'meta_data' as metadata key within 'data' object
    //Define 'samples' as samples key within 'data' object 
      meta_data = data.metadata;
      samples = data.samples;
    
    //Select html element with id="selDataset" and save in 'selector' variable
    //contains reference to onchange="optionChanged(this.value)">
      let selector = d3.select("#selDataset");
    
    //.forEach() method iterates over each object in meta_data array 1 by 1, so '#sample-metadata' element displays only one object at a time
    //Within loop, current object's 'id' permits dynamic creation of option element in dropdown menu
    meta_data.forEach((obj) => {
           let id = obj.id;
      
    //selector.append("option") appends option elements to selector element to create selectable options
    //text(id) sets text content of option element (how text displays in dropdown) and .property("value", id) sets value property of option element to value of id
    selector.append("option").text(id).property("value", id);  
        });

    //Call all charts and pass first element of 'meta_data' and 'samples' arrays as arguments    
      metaDataFunc(meta_data[0]);
      barChartFunc(samples[0]);
      bubbleChartFunc(samples[0]);
      gaugeChartFunc(meta_data[0]);
  });

    
    function optionChanged(value) {     //'value' = value of selected option in dropdown menu
      const selectedId = samples.find((item) => item.id === value);    //Use .find() to isolate 'id' in question in samples array  
                                                                      //(item) => function looks for desired element in meta_data array by searching for   
                                                                      //case where 'id' is same as 'value' value passed to optionChanged function
      const demographicInfo = meta_data.find((item) => item.id == value);

    //Pass 'demographicInfo' and 'selectedId' as parameters to functions that will display data related to selected trial participant
    metaDataFunc(demographicInfo);
    barChartFunc(selectedId);
    bubbleChartFunc(selectedId);
    gaugeChartFunc(demographicInfo);  
    }

    //For trial participant in question, define and create bar chart that displays top ten 'sample_values' in reverse order
    function barChartFunc(selectedId) {
      let x_axis = selectedId.sample_values.slice(0,10).reverse();
      let y_axis = selectedId.otu_ids
          .slice(0,10)
          .reverse()
          //Add "OTU" prefix to each otu_ids and make them available to the y-axis
          .map((item) => `OTU ${item}`); 
      //Store in 'text' top 10 .otu_labels' in reverse order for use in y-axis
          let text = selectedId.otu_labels.slice(0,10).reverse();
      //Define configuration for BarChart
        BarChart = {
          x: x_axis,
          y: y_axis,
          text: text,
          type: "bar",
          orientation: "h",
        };

        let chart = [BarChart];
      //Define layout for BarChart
        let layout = {
          margin: {
            l: 100,
            r: 100,
            t: 0,
            b: 50,
          },
          height: 500,
          width: 500,
        };
        Plotly.newPlot("bar",chart, layout);     //Plot the BarChart
      }

    //For trial participant in question, define and create BUBBLE CHART that displays 'otu_ids' for x values, 
    //'sample_values' for y values, 'sample_values' for  marker size, 'otu_ids' for marker colors, 'otu_labels' for text values
    function bubbleChartFunc(selectedId) {
      console.log("Bubble Chart Data:", selectedId);
      let x_axis = selectedId.otu_ids;
      let y_axis = selectedId.sample_values;
      let marker_size = selectedId.sample_values;
      let color = selectedId.otu_ids;
      let text = selectedId.otu_labels;

      let bubble = {
        x: x_axis,
        y: y_axis,
        text: text,
        mode: "markers",       //Create scatter plot where marker represents each data point
        marker: {
          color: color,
          colorscale: "Rainbow",
          size: marker_size,
        },
        type: "scatter",
      };
      let chart = [bubble];  

      let layout = {  
        xaxis: {        //use xaxis instead of x_axis
          title: {text: "OTU ID"},
        },
      };
      Plotly.newPlot("bubble",chart, layout);
    }

    function gaugeChartFunc(demographicInfo) {
      let wfreq = demographicInfo.wfreq;

  let data = [{
    domain: { x: [0, 1], y: [0, 1] },
    value: wfreq,
    title: { text: "Belly Button Washing Frequency<br><sub>Scrubs per Week</sub>" },
    type: "indicator",
    mode: "gauge+number",
    gauge: {
      axis: { range: [0, 9], tickwidth: 1, tickcolor: "darkgray" },
      bar: { color: "darkblue" },
      steps: [
        { range: [0, 1], color: "#f8f3ec" },
        { range: [1, 2], color: "#f4f1e4" },
        { range: [2, 3], color: "#e9e6ca" },
        { range: [3, 4], color: "#e5e7b4" },
        { range: [4, 5], color: "#d5e599" },
        { range: [5, 6], color: "#b7cc92" },
        { range: [6, 7], color: "#8cbf88" },
        { range: [7, 8], color: "#8abb8f" },
        { range: [8, 9], color: "#85b48a" }
      ],
    }
  }];

  let layout = {
    width: 400,
    height: 350,
    margin: { t: 60, b: 40, l: 50, r: 50 }
  };

  Plotly.newPlot("gauge", data, layout);
}  

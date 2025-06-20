# BellyButtonFloraDiversity

The app.js, index.html, and samples.json files in this repository create an interactive dashboard to explore the Belly Button Biodiversity dataset, which catalogs
the microbes that colonize human navels. The dashboard visualizes the microbial diversity found in human belly buttons. The interactive aspect of the tool is the 
dropdown menu in the top-left corner of the screen. For each test subject, identified by Test Subject ID No., the dashboard updates to display demographic information
about the test subject (e.g., age, gender, washing frequency). Along with this demographic information, corresponding bar and bubble charts visualize the types and 
amounts of bacteria present in the subject's microbial sample. 


Top bacterial species: Shows the most prevalent bacterial species (operational taxonomic units or OTUs) found in the selected sample, often via a pie chart or bar chart. 
Bubble chart: Visualizes the OTUs and their corresponding abundance in the sample. 
Gauge chart: Displays the weekly washing frequency of the individual. 

The dataset reveals that a small handful of microbial species (also called operational taxonomic units, or OTUs, in the study) were present in more 
than 70% of people, while the rest were relatively rare.

Steps taken:

1) Use the D3 library to read in samples.json from the URL https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json.
2) Display each key-value pair from the metadata JSON object somewhere on the page.
3) Display the sample metadata, i.e., an individual's demographic information.
4) Create a horizontal bar chart with a dropdown menu to display the top 10 OTUs found in that individual.
5) Create a gauge chart that displays the individual's weekly wash frequency.
6) Create a bubble chart that displays each sample.
7) Update all the plots when a new sample is selected.

![Dashboard01](https://github.com/user-attachments/assets/e17fa346-6af3-4620-92fd-226a12507727)
![Dashboard02](https://github.com/user-attachments/assets/e0e27658-0ec9-49b7-b0c4-00f450a577c5)



The dashboard is designed to help users understand the diversity of bacteria within belly buttons, with the goal of revealing patterns and trends in microbial populations. The dataset itself reveals that a small number of bacterial species are common and abundant, while many others are relatively rare. 

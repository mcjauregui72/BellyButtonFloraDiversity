# BellyButtonFloraDiversity  
  
The app.js, index.html, and samples.json files in this repository create an interactive dashboard to explore the Belly Button Biodiversity dataset. This dataset catalogs
the diverse array of microbes that colonize human navels. The interactive aspect of the tool is the dropdown menu in the top-left corner of the screen. For each test subject, identified by Test Subject ID No., the dashboard updates to display demographic information about the subject (e.g., age, gender, washing frequency). Along with this demographic information, corresponding bar and bubble charts update to visualize the types and amounts of bacteria present in the subject's microbial sample. 
  
Bar Chart  
The bar chart to the right of the Demographic Info displays the top 10 microbes found in the subject's sample, in descending order of prevalence. 
The x-axis displays the code name of each unique OTU (Operational Taxonomic Unit, representing a specific type of microbe) present. 
The y-axis indicates the number of DNA sequences found for a given OTU, which reflects how abundant the particular microbe is in the sample. For example, a bar
reading "163 OTU 1167" means 163 DNA sequences for microbe 1167 were found. Also revealed in the hover text are names such as "Bacteria; Bacteroidetes; Bacteroidia; Bacteroidales; Bacteroidaceae; Bacteroides", which is the microbe's taxonomic lineage, or "family tree."

Bubble Chart   
The bubble chart below the bar chart also visualizes the presence and prevalence of OTUs per test subject, but displays all OTU codes (not only the top 10) across
the x-axis. The numbers of DNA sequences present per microbe - the abundance of that microbe - are indicated on the y-axis and in the relative size of each bubble.
Taxonomy is revealed in the hover text. Note that bubbles of similar color do not represent the same, or even taxonomically similar, microbes. Colors are simply reused
due to the larger number of microbes than perceptably distinct colors in the graphing pallet. 

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

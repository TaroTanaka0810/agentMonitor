//stastics.js

 class Graph {

 	constructor(id,graphType,items = [],stasticsData = []){
 		this.id = id;
    this.graphType = graphType;
    this.items = items;
 		// this.MONTHS = ["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"]
 		this.config = {
    			type: graphType,
    			data: {
   					labels: items,
   					datasets: []
   				},
   				options: {
           
            
          }
   
 		}

 		this.chart = document.getElementById(this.id).getContext("2d");


 	}

  resetConfig(){
    this.config = {
          type: this.graphType,
           data: {
            labels: this.items,
            datasets: [

            ]
          },
          options: {
           
            
          }
   
    }
  }
 	
 	drawGraph(){
		this.chart = new Chart(this.chart,this.config); 		
	}

	setType(graphType){
		this.config.type = graphType;
	}
 	
 	setLabels(items){
 		this.config.data.labels = items;
 	}

  setDataset(dataset) {
    this.config.data.datasets = []
    this.config.data.datasets.push(dataset);
  }

 	setData(stasticsData,num) {
 		this.config.data.datasets[num].data = stasticsData;
 	}

  setItem(items){
    this.config.data.labels = items;
  }

  pushDataset(dataset){
    this.config.data.datasets.push(dataset);
  }

  setOption(option){
    this.config.options = option;
  }

 	update(){
    document.getElementById(this.id).textContent = null;
 		this.chart.update()
 	}
 	



}
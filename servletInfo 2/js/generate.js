// generate.js
var AgentList = [];
function makeAgentList(){
	httpObj.open("get","agentList",true);

	httpObj.onload = function(){
		var myData = httpObj.response.split(",");
		// var txt = "";
		// console.log(myData);
		AgentList = myData.concat();
        for(var data of myData){
        	var element = document.createElement("option");
			element.setAttribute("value",data);
        	element.innerHTML = data;
			document.getElementById("agentName_make").appendChild(element);

        }       
        for(var json of AgentSphereData){
			// if(json.MyIP == IP){continue;}

			var elementReceiver = document.createElement("option");
			elementReceiver.setAttribute("value",json.MyIP);
			// elementReceiver.setAttribute("class",json.MyIP+"_modal");
			elementReceiver.innerHTML = json.MyIP;
			receiver.appendChild(elementReceiver);
			document.getElementById("Destination_make").appendChild(elementReceiver);
		}
                // destination_list = myData.destination;
                // for (var i=0; i<myData.length; i++){
                //    var option = document.createElement("option");
                //     option.innerText = myData[i].name;
                //     option.value=myData[i].value;
                //     document.getElementById("group_select").appendChild(option); 
                // }
        // $(window).on('load', function () {
            // $('.selectpicker').selectpicker({
            //      'selectedText': 'cat'
            // });
        // });
	}
	httpObj.send(null);
}
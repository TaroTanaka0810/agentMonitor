// class PCData{
// 	constructor(){

// 	}
// };

// var reader = new FileReader();
// reader.readAsDataURL("json/test.json");

const pages=["DetailDiv","makeDiv","migrateDiv","tableDiv"];
var agentSphere = [];
var agentModalNum = 0;


       // httpObj.send(null);


// $('.selectpicker').selectpicker({
//                  'selectedText': 'cat'
//             });
// var json = [{
// 	"MyHostName" : "DESKTOP-6K0AFBG",//ホスト名
// 	"MyIP" : "192.168.11.15",//IPアドレス
// 	"CPU" : 4,//CPUの数
// 	"Memory" :{
// 		"total" : 124160,//メモリ量
// 		"free" : 103215,//未使用メモリ量
// 		"used" : 20944//使用しているメモリ量
// 	}

// }];

// var json2 = [
// {
// 	"MyHostName" : "DESKTOP-5QC1CFE",//ホスト名
// 	"MyIP" : "192.168.11.10",//IPアドレス
// 	"Agent":[{
// 		"name":"AgentSphereWeb.ServersideAgent",//エージェントの名前
// 		"id" : "e0be17c9-751a-4662-ba0a-7c39f80989b4",//エージェントのID
// 		"time":10//処理にかかっている時間(秒)
// 	},
// 	{
// 		"name":"HelloAgent",//エージェントの名前
// 		"id" : "dcf43517-bea2-4b0d-9448-5d62a50b0c3c",//エージェントのID
// 		"time":3//処理にかかっている時間(秒)
// 	}
// 	],
// }];
var destination_list = [{"IP":"133.220,114.126"},{"IP":"133.220,114.121"}];

var AgentSphereData = [
{
	"MyHostName" : "DESKTOP-5QC1CFE",//ホスト名
	"MyIP" : "133.220.114.126",//IPアドレス
	"Agent":[{//エージェントデータ
		"name":"AgentSphereWeb.ServersideAgent",//エージェントの名前
		"id" : "e0be17c9-751a-4662-ba0a-7c39f80989b4",//エージェントのID
		"time":10//処理にかかっている時間(秒)
		,"priority":1
		,"history":[{"IP":"133.220.114.121","time":35},{"IP":"133.220.114.126","time":50},{"IP":"133.220.114.123","time":45}]
	},
	{
		"name":"HelloAgent",//エージェントの名前
		"id" : "dcf43517-bea2-4b0d-9448-5d62a50b0c3c",//エージェントのID
		"time":3//処理にかかっている時間(秒)
		,"priority":1
		,"history":[{"IP":"133.220.114.126","time":50},{"IP":"133.220.114.123","time":45}]
	}
	],
	"CPU" : 4,//CPUの数
	"Memory" :{//メモリのデータ
		"total" : 124160,//メモリ量
		"used" : 20944,//使用しているメモリ量
		"free" : 103215//未使用メモリ量
		//elic.w
	},
},
{
	"MyHostName" : "DESKTOP-6K0AFBG",//ホスト名
	"MyIP" : "133.220.114.121",//IPアドレス
	"Agent":[{"name":"AgentSphereWeb.testServersideAgent","id":"e36c6573-c179-4fa3-9382-a7791b541668","time":346,"priority":2,"history":[{"IP":"133.220.114.126","time":50},{"IP":"133.220.114.123","time":45}]}
	,{"name":"AgentSphereWeb.WebServersideAgentClickListener","id":"1470dcff-c20b-4002-81e4-84d0c7616be6","time":346,"priority":3,"history":[{"IP":"133.220.114.126","time":50},{"IP":"133.220.114.123","time":45}]}
	],
	"CPU" : 4,//CPUの数
	"Memory" :{//メモリのデータ
		"total" : 136830,//総メモリ量
		"used" : 59360,//使用しているメモリ量
		"free" : 75629//未使用メモリ量
	},
}
,
{
	"MyHostName" : "DESKTOP-555555",//ホスト名
	"MyIP" : "133.220.114.127",//IPアドレス
	"Agent":[
	// {"name":"AgentSphereWeb.testClientsideAgent","id":"e36c6573-c179-4fa3-9382-a7791b541668","time":4500,"priority":1,"history":[{"IP":"133.220.114.126","time":50},{"IP":"133.220.114.123","time":45}]},
	// {"name":"AgentSphereWeb.WebClientsideAgentClickListener","id":"1470dcff-c20b-4002-81e4-84d0c7616be6","time":15000,"priority":3,"history":[{"IP":"133.220.114.126","time":50},{"IP":"133.220.114.123","time":45}]},
	{"name":"AgentSphereWeb.ClientsideAgent","id":"e36c6573-c179-4fa3-9382-a7791b541668","time":604600,"priority":5,"history":[{"IP":"133.220.114.126","time":50},{"IP":"133.220.114.123","time":45}]},
	{"name":"HelloAgent","id":"e36c6573-c179-4fa3-9382-a7791b541668","time":604600,"priority":5,"history":[{"IP":"133.220.114.126","time":50},{"IP":"133.220.114.123","time":45}]},
	{"name":"gotoTestAgent","id":"e36c6573-c179-4fa3-9382-a7791b541668","time":604600,"priority":5,"history":[{"IP":"133.220.114.126","time":50},{"IP":"133.220.114.123","time":45}]}

	],
	"CPU" : 4,//CPUの数
	"Memory" :{//メモリのデータ
		"total" : 130479,//総メモリ量
		"used" : 44178,//使用しているメモリ量
		"free" : 86193//未使用メモリ量
	},

},
{
	"MyHostName" : "DESKTOP-555555",//ホスト名
	"MyIP" : "133.220.114.128",//IPアドレス
	"Agent":[
	// {"name":"AgentSphereWeb.testClientsideAgent","id":"e36c6573-c179-4fa3-9382-a7791b541668","time":4500,"priority":1,"history":[{"IP":"133.220.114.126","time":50},{"IP":"133.220.114.123","time":45}]},
	// {"name":"AgentSphereWeb.WebClientsideAgentClickListener","id":"1470dcff-c20b-4002-81e4-84d0c7616be6","time":15000,"priority":3,"history":[{"IP":"133.220.114.126","time":50},{"IP":"133.220.114.123","time":45}]},
	{"name":"AgentSphereWeb.ClientsideAgent","id":"e36c6573-c179-4fa3-9382-a7791b541668","time":604600,"priority":5,"history":[{"IP":"133.220.114.126","time":50},{"IP":"133.220.114.123","time":45}]},
	{"name":"HelloAgent","id":"e36c6573-c179-4fa3-9382-a7791b541668","time":604600,"priority":5,"history":[{"IP":"133.220.114.126","time":50},{"IP":"133.220.114.123","time":45}]},
	{"name":"gotoTestAgent","id":"e36c6573-c179-4fa3-9382-a7791b541668","time":604600,"priority":5,"history":[{"IP":"133.220.114.126","time":50},{"IP":"133.220.114.123","time":45}]}

	],
	"CPU" : 4,//CPUの数
	"Memory" :{//メモリのデータ
		"total" : 130479,//総メモリ量
		"used" : 44178,//使用しているメモリ量
		"free" : 86193//未使用メモリ量
	},

}];

// var AgentSphereData2 = [
// {
// 	"MyHostName" : "DESKTOP-5QC1CFE",//ホスト名
// 	"MyIP" : "133.220.114.126",//IPアドレス
// 	"Agent":[{//エージェントデータ
// 		"name":"AgentSphereWeb.ServersideAgent",//エージェントの名前
// 		"id" : "e0be17c9-751a-4662-ba0a-7c39f80989b4",//エージェントのID
// 		"time":15//処理にかかっている時間(秒)
// 	},
// 	{
// 		"name":"HelloAgent",//エージェントの名前
// 		"id" : "dcf43517-bea2-4b0d-9448-5d62a50b0c3c",//エージェントのID
// 		"time":8//処理にかかっている時間(秒)
// 	}
// 	],
// 	"CPU" : 4,//CPUの数
// 	"Memory" :{//メモリのデータ
// 		"total" : 124160,//メモリ量
// 		"used" : 10944,//使用しているメモリ量
// 		"free" : 113215//未使用メモリ量
// 		//elic.w
// 	},
// },
// {
// 	"MyHostName" : "DESKTOP-6K0AFBG",//ホスト名
// 	"MyIP" : "133.220.114.121",//IPアドレス
// 	"Agent":[
// 	{"name":"AgentSphereWeb.testServersideAgent","id":"e36c6573-c179-4fa3-9382-a7791b541668","time":3460},
// 	{"name":"AgentSphereWeb.WebServersideAgentClickListener","id":"1470dcff-c20b-4002-81e4-84d0c7616be6","time":3460},
// 	{"name":"AgentSphereWeb.ServersideAgent","id":"e36c6573-c179-4fa3-9382-a7791b541668","time":3460}

// 	],
// 	"CPU" : 4,//CPUの数
// 	"Memory" :{//メモリのデータ
// 		"total" : 100000,//総メモリ量
// 		"used" : 50000,//使用しているメモリ量
// 		"free" : 50000//未使用メモリ量
// 	},
// },
// {
// 	"MyHostName" : "DESKTOP-555555",//ホスト名
// 	"MyIP" : "133.220.114.125",//IPアドレス
// 	"Agent":[
// 	{"name":"AgentSphereWeb.testClientsideAgent","id":"e36c6573-c179-4fa3-9382-a7791b541668","time":3460},
// 	{"name":"AgentSphereWeb.WebClientsideAgentClickListener","id":"1470dcff-c20b-4002-81e4-84d0c7616be6","time":3460},
// 	{"name":"AgentSphereWeb.ClientsideAgent","id":"e36c6573-c179-4fa3-9382-a7791b541668","time":3460}

// 	],
// 	"CPU" : 4,//CPUの数
// 	"Memory" :{//メモリのデータ
// 		"total" : 100000,//総メモリ量
// 		"used" : 50000,//使用しているメモリ量
// 		"free" : 50000//未使用メモリ量
// 	},
// }
// ];


var AgentSphereData2 = [
{
	"MyHostName" : "DESKTOP-5QC1CFE",//ホスト名
	"MyIP" : "133.220.114.126",//IPアドレス
	"Agent":[{//エージェントデータ
		// "name":"AgentSphereWeb.ServersideAgent",//エージェントの名前
		"name":"HelloAgent",//エージェントの名前
		"id" : "e0be17c9-751a-4662-ba0a-7c39f80989b4",//エージェントのID
		"time":60,//処理にかかっている時間(秒)
		"priority":1,
		"history":[{"IP":"133.220.114.121","time":50},{"IP":"133.220.114.125","time":60},{"IP":"133.220.114.126","time":10}]
	}
	// ,
	// {
	// 	"name":"HelloAgent",//エージェントの名前
	// 	"id" : "dcf43517-bea2-4b0d-9448-5d62a50b0c3c",//エージェントのID
	// 	"time":8//処理にかかっている時間(秒)
	// }
	],
	"CPU" : 4,//CPUの数
	"Memory" :{//メモリのデータ
		"total" : 124160,//メモリ量
		"used" : 10944,//使用しているメモリ量
		"free" : 113215//未使用メモリ量
		//elic.w
	},
},
{
	"MyHostName" : "DESKTOP-555555",//ホスト名
	"MyIP" : "133.220.114.125",//IPアドレス
	"Agent":[
	// {"name":"AgentSphereWeb.testClientsideAgent","id":"e36c6573-c179-4fa3-9382-a7791b541668","time":4500,"priority":1,"history":[{"IP":"133.220.114.126","time":50},{"IP":"133.220.114.123","time":45}]},
	// {"name":"AgentSphereWeb.WebClientsideAgentClickListener","id":"1470dcff-c20b-4002-81e4-84d0c7616be6","time":15000,"priority":3,"history":[{"IP":"133.220.114.126","time":50},{"IP":"133.220.114.123","time":45}]},
	{"name":"AgentSphereWeb.ClientsideAgent","id":"e36c6573-c179-4fa3-9382-a7791b541668","time":604600,"priority":5,"history":[{"IP":"133.220.114.126","time":50},{"IP":"133.220.114.123","time":45}]},
	{"name":"HelloAgent","id":"e36c6573-c179-4fa3-9382-a7791b541668","time":604600,"priority":5,"history":[{"IP":"133.220.114.126","time":50},{"IP":"133.220.114.123","time":45}]},
	{"name":"gotoTestAgent","id":"e36c6573-c179-4fa3-9382-a7791b541668","time":604600,"priority":5,"history":[{"IP":"133.220.114.126","time":50},{"IP":"133.220.114.123","time":45}]}

	],
	"CPU" : 4,//CPUの数
	"Memory" :{//メモリのデータ
		"total" : 130479,//総メモリ量
		"used" : 44178,//使用しているメモリ量
		"free" : 86193//未使用メモリ量
	},

}
];



var graph = [];
var AgentGraph = [];
// getInfo();
// init();
// function init(){
// 	setInterval(getInfo,5000);
// }

function resetField(){


	document.getElementById("agentSphereField").textContent = null;
	document.getElementById("modalArea").textContent = null;
}

function getInfo(){
	// graph = new Graph("agentData","horizontalBar");

	resetField();


	var httpObj = new XMLHttpRequest();

	httpObj.open("get","distination",true);

	httpObj.onload = function(){
                var myData = JSON.parse(httpObj.response);
                var txt = "";
                console.log(myData);
                destination_list = myData.destination;
                // for (var i=0; i<myData.length; i++){
                //    var option = document.createElement("option");
                //     option.innerText = myData[i].name;
                //     option.value=myData[i].value;
                //     document.getElementById("group_select").appendChild(option); 
                // }
	}
	httpObj.send(null);

	httpObj.open("get", "JsonData",true);
                // console.log(httpObj);


	httpObj.onload = function(){
                var myData = JSON.parse(httpObj.response);
                var txt = "";
                console.log(myData);
                // for (var i=0; i<myData.length; i++){
                //    var option = document.createElement("option");
                //     option.innerText = myData[i].name;
                //     option.value=myData[i].value;
                //     document.getElementById("group_select").appendChild(option); 
                // }
	}
	httpObj.send(null);




	for(var data of AgentSphereData){

		setData(data);
		// $("#"+data.MyHostName+"_agentTable").tablesorter();

	}

	
	for(var g of graph){
		g.drawGraph();
	}

	makeOption();
	// setInterval(updateAgentSphere,5000);
	// setTimeout(updateAgentSphere,1000);
	// updateAgentData();

	// graph.setItem(items);



	// $.getJSON("json/test.json" , function(data) {
    
	// 	console.log(data);

 //      var ulObj = $("#demo"),
 //      len = data.length;

 //    for(var i = 0; i < len; i++) {
 //      ulObj.append($("<li>").attr({"id":data[i].id}).text(data[i].name));
 //    }
 //  });



  // console.log(json);
  makeTable();
  $('.sortable').sortableInit();

}



	var items = ["total","used","free"]; 
	const colors = {"total":"rgb(0,0,255)","free":"rgb(0,255,0)","used":"rgb(255,0,0)"};
	// for(var item of json[0].Memory){
	// 	items.push(item);
	// }
	var datasets = [];

	var option = {
		title: {
			display: true,
			text: 'メモリ状況'
		},
		tooltips: {
			mode: 'index',
			intersect: false
		},
		responsive: true,
		scales: {
			xAxes: [{
				stacked: true,
				ticks:{
					beginAtZero: true,
					max:100,
					min:0
				},
				display: true,
				scaleLabel: {
					display: true,
					labelString: '%'
				}
				
			}],
			yAxes: [{
				stacked: true,
				ticks:{
					max:100,
					min:0,
					beginAtZero: true,
				}
				
			}]
		},
		tooltips: {
      		callbacks: {
        		label: function(item, data) {
          			var dataset = data.datasets[item.datasetIndex];
         		// 	var total = dataset.data.reduce(function(prev, current) {
        			//     return prev + current;
        			// });
        			var persentage = dataset.data[item.index];
        			// console.log(current);
        			var sum = dataset.backup;
        			return  data.datasets[item.datasetIndex].label + ":" + sum + "KB / "+dataset.total+"KB中 (" + persentage + "%)"  ;
        		}
      		}
		}

	}

function setData(data){


		var modalId = data.MyHostName + "_modal";

		var elementDiv = document.createElement("div");
		elementDiv.setAttribute("class","agents");
		elementDiv.setAttribute("id",modalId + "_div");
		elementDiv.innerHTML += "<p> <span style='font-size:25px;'>"
		 + data.MyHostName 
		 + "(" + data.MyIP + ")</span> <button class='btn btn-primary' style='float:right;' data-toggle='modal' data-target='#" + modalId + "'"
		 + " onclick="+"getEventListenerAgent(" + "\'" + replaceStr(data.MyIP,".","_") +"\')"+">詳しく見る</button></p>"
		 + "<span id=\'" + modalId + "_agentIcon\'>" + makeAgentIcon(data,modalId) + "</span>";//data.MyIP
		// elementDiv.innerHTML += "";
		// elementDiv += "<input type='text' value='" + data.MyIP + "' style='display:none;'>";
		var elementCanvas = document.createElement("canvas");
		elementCanvas.setAttribute("id",data.MyHostName + "_graph");
		elementDiv.appendChild(elementCanvas);

		document.getElementById("agentSphereField").appendChild(elementDiv);
		// console.log("in");
		var graphChild = new Graph(data.MyHostName + "_graph","horizontalBar");
		graph.push(graphChild);

		for(var item in data.Memory){
			if(item == items[0]){
				continue;
			}
			var dataset = {
				label: item,
				fill:false,
				data:[Math.round((data.Memory[item]/data.Memory.total)*100)],
				backgroundColor: [colors[item]],
				backup:data.Memory[item],
				total:data.Memory.total,
			};
			// dataset.data.push(data.Memory[item]);
			graph[graph.length - 1].pushDataset(dataset);
			graph[graph.length - 1].setOption(option);
		}
		makeModal(data,modalId);


		// console.log(data);
}

function makeModal(data,modalId){


		var elementModal = document.createElement("div");
		elementModal.setAttribute("class","modal");
		elementModal.setAttribute("id",modalId);
		elementModal.setAttribute("tabindex","-1");
		elementModal.setAttribute("role","dialog");
		elementModal.setAttribute("aria-labelledby","exampleModalLabel");
		elementModal.setAttribute("aria-hidden","true");
		elementModal.innerHTML += 
					"<div class='modal-dialog modal-lg' role='document'>"
						+ "<div class='modal-content'>"
							+ "<div class='modal-header'>"
								+ "<button type='button' class='close' data-dismiss='modal' aria-label='Close'>"
									+ "<span aria-hidden='true'>&times;</span>"
								+ "</button>"
								
							+ "</div>"
							+ "<div class='modal-body modalSc'>"
								+ "<h3> 動作中のエージェントの種類 </h3>"
								+ makeModalAgentTable(data)
								+"<br><h5>エージェントの移動(migrate)</h5>"
								+ makeModalAgentInfoTable(data,["name"],"migrate","primary")
								+"<br><h5>エージェントの停止(suspend)</h5>"
								+ makeModalAgentInfoTable(data,["name"],"delete","danger")
								+"<br><h5>エージェントの新規起動(generate)</h5>"
								+ makeGenerateAgentTable(modalId)

								// + "<div><form action=''>"
								// 		+ "<select name='sender' style='display:none;'><option value='" + data.MyIP + "'>" + data.MyIP + "</option></select>"
								// 		+ "<table class='table table-border'>"
								// 			+ "<thead>"
								// 				+ "<tr>"
								// 					+ "<th>送信先<th>"
								// 					+ "<th>エージェント名<th>"
								// 				+ "</tr>"
								// 			+ "</thead>"
								// 			+ "<tbody>"
								// 				+ "<tr>"
								// 					+ "<td>"
								// 						+ "<select id='migrate_" + modalId + "_destination' name='receiver'>"
								// 						+ "</select>"
								// 					+ "</td>"
								// 					// + "<td>"
								// 					// 	+ "<select id='migrate_" + modalId + "_agent' name='agent'>"
								// 					// 	+ "</select>"
								// 					// + "</td>"
								// 				+ "</tr>"
								// 			+ "</tbody>"
								// 		+ "</table>"
								// 		+ "<input type='submit' value='送信'>"
								// 		+ "</form>"
								// 	+ "</div>"
							+ "</div>"
							+ "<div class='modal-footer'>"
								// + "<button type='button' class='btn btn-primary' data-toggle='modal' data-target='#" + "a" + id + "' data-dismiss='modal'>back</button>"
						
							
								+ "<button type='button' class='btn btn-danger' data-dismiss='modal'>close</button>"
							+ "</div>"

						+ "</div>"
					+ "</div>";

		document.getElementById("modalArea").appendChild(elementModal);
		// getReceiverOption(AgentSphereData,data.MyIP,"migrate_" + modalId + "_destination");
		// getAgentOption(AgentSphereData,data.MyIP,"migrate_" + modalId + "_agent");
		getReceiverOption(AgentSphereData,data.MyIP,data.MyHostName + "_migrate_receiver");
		// getReceiverOption(AgentSphereData,data.MyIP,data.MyHostName + "_delete_receiver");

}

// 0122
function makeGenerateAgentTable(modalId){
	var str = "";
	// var ip = data.MyIP;
	AgentList = ["HelloAgent","gotoTest","testAgent","tspAgent"];
	var id = modalId + "_generate";

	str += "<div><form action='generate'><table class='table table-bordered table-hover'>";
	str += "<thead><tr class='table-warning'><th>AgentName</th><th>個数</th><th>削除</th></tr></thead>"
	str += "<tbody id=\"" + modalId + "_generate_agent\"></tbody>"
	// str += "<tfoot><tr><td><select name='AgentName'>"
	// for(var i=0;i<AgentList.length;i++){
	// 	str += "<option name=\""+AgentList[i]+"\">" + AgentList[i] + "</option>" 
	// }
	// str += "</select></td><td><button class='btn' onclick='addNewAgent(\"" + modalId + "_generate_agent\")'>追加</button></td></tr></tfoot>";
	// str += "<tr><td><input type='submit' name='generate'></td></tr>";

	str +="</table><input type='submit' class='btn btn-warning'></form></div>"

	str += "<select id=\"" + modalId + "_generate_agent_name\">"
	for(var i=0;i<AgentList.length;i++){
		str += "<option name=\""+AgentList[i]+"\">" + AgentList[i] + "</option>" 
	}

	str += "</select><button class='btn' onclick='addNewAgent(\"" + modalId + "_generate_agent\")'>追加</button>";

	return str;
}

function addNewAgent(id){

	var name = document.getElementById(id+"_name").value;
	var elementTr = document.createElement("tr");
	elementTr.setAttribute("id",id+"_tr"+agentModalNum);

	elementTr.innerHTML = 
		// "<td><div class='checkbox05 box'><label><input type='checkbox' class='checkbox05-input' name=\'AgentName\' value=\'" + name + "\' checked='checked'>" +"<span class='checkbox05-parts'>" + name + "</span></label></div></td>"
		"<td><input type='text'name=\'AgentName\' value=\'" + name + "\'></td>"
	 	+ "<td><input type='text' name=\'AgentNum\' value=\'" + 1 + "\' id=\'"+id+ agentModalNum + "_num\'></input>"
	 	// + "<td><div class='checkbox05 box'><label><input type='checkbox' class='checkbox05-input' name=\'AgentNum\' value=\'" + 1 + "\' checked='checked' id=\'"+id+"_num\'>" +"<span class='checkbox05-parts'>" + 1 + "</span>"
	 	// + "</label></div>"
	 	
	 	+ "<button class='btn btn-default'onclick='ChangeNum(\""+id+ agentModalNum + "_num\",1);return false;'>+</button>"
	 	+ "<button class='btn btn-default'onclick='ChangeNum(\""+id+ agentModalNum + "_num\",-1);return false;'>-</button>"
	 	+ "</td>"
	 	+ "<td><button class=\"btn btn-danger\" onclick=\"deleteNewAgent(\'" + id + "_tr" + agentModalNum + "\');return false;\">削除</button></td>"
		agentModalNum++;
	document.getElementById(id).appendChild(elementTr);
	// var elementSelect = document.createElement("select");
	// elementSelect.setAttribute("name","AgentName");

	// var selectAgent
}
function deleteNewAgent(id){
	$("#"+id).remove();
}
function ChangeNum(id,n){

	var num =  document.getElementById(id).value;
	// console.log(num);
	// document.getElementById(id).innerHTML = "<span>" +  (parseInt(num) + n) + "</span>";
	// document.getElementById(id).innerHTML = "<span class='checkbox05-parts'>" +  (parseInt(num) + n) + "</span>";
	// $("#"+id+" span").text((parseInt(num) + n));
	document.getElementById(id).value = (parseInt(num) + n);
	// console.log(document.getElementById(id).value);
	// console.log(document.getElementById(id));
}
//end of 0122

function getReceiverOption(AgentSphereData,IP,id){
	var str = "";
	// for(var json of AgentSphereData){
		// var sender = document.getElementById("sender");
		// var Destination =  document.getElementById("receiver");
		var receiver = document.getElementById(id);
		receiver.textContent = null;
	
		for(var json of AgentSphereData){
			if(json.MyIP == IP){continue;}
			// for(var agent of json.Agent){
			// 	var element = document.createElement("option");
			// 	element.setAttribute("value",agent.name);
			// 	element.innerHTML = agent.name;
			// 	element.setAttribute("class",json.MyHostName + "_modal");
			// 	agentName.appendChild(element);
			// }
			var elementReceiver = document.createElement("option");
			elementReceiver.setAttribute("value",json.MyIP);
			elementReceiver.setAttribute("class",json.MyIP+"_modal");
			elementReceiver.innerHTML = json.MyIP;
			receiver.appendChild(elementReceiver);
	
			// var elementDestination = document.createElement("option");
			// elementDestination.setAttribute("value",json.MyHostName);
			// elementDestination.setAttribute("class",json.MyHostName);
			// elementDestination.innerHTML = json.MyHostName;
			// Destination.appendChild(elementReceiver);
	
		}
	// }
}

function getAgentOption(AgentSphereData,IP,id){
		// var str = "";
	// for(var json of AgentSphereData){
		// var sender = document.getElementById("sender");
		// var Destination =  document.getElementById("receiver");
		var agentPlace = document.getElementById(id);
	
		for(var json of AgentSphereData){
			if(json.MyIP == IP){continue;}
			for(var agent of json.Agent){
				if(agent.name.indexOf("AgentSphereWeb") != -1){continue;}
				var element = document.createElement("option");
				element.setAttribute("value",agent.name);
				element.innerHTML = agent.name;
				element.setAttribute("class",json.MyIP + "_modal");
				agentPlace.appendChild(element);
			}
			// var elementReceiver = document.createElement("option");
			// elementReceiver.setAttribute("value",json.MyHostName);
			// elementReceiver.setAttribute("class",json.MyHostName+"_modal");
			// elementReceiver.innerHTML = json.MyHostName;
			// receiver.appendChild(elementReceiver);
	
			// var elementDestination = document.createElement("option");
			// elementDestination.setAttribute("value",json.MyHostName);
			// elementDestination.setAttribute("class",json.MyHostName);
			// elementDestination.innerHTML = json.MyHostName;
			// agentPlace.appendChild(elementDestination);
	
		}
	// }
}

function getAgentSphereData(jsons){
	for(var data of jsons){
		if(agentSphere.length == 0){
			agentSphere.push(data);
		} else {
			
		}
	}
}

function makeModalAgentInfoTable(data,items,action,color){
	var str = "";
	const optionColor = {"migrate":"03","delete":"04"};
	str += "<form action='" + action + "'>";
	str += "<select name='sender' style='display:none;'><option value='" + data.MyIP + "'>" + data.MyIP + "</option></select>"
	// str += "<div id=\'" + data.MyHostName + "_mig\'></div>";
	str += "<table class='table table-bordered table-hover' id=\"" + data.MyHostName + "_" + action + "_agentTable\"><thead>";// class='thead-dark'

	// for(var d of data.Agent){
		str +="<tr class=\'table-"+color+"\'>"

		for(var item in data.Agent[0]){
			if(items.indexOf(item) == -1){continue;}
			str += "<th>" + item + "</th>"
		}
		str +="</tr>"
		// break;

	// }
	str += "</thead><tbody>"
	for(var i in data.Agent){
		str +="<tr>"
		for(var item in data.Agent[i]){
			// if(item == "id"){continue;}
			// else if(item == "time"){// + "<input type='checkbox' name=\'" +  "option"  + "\' >"
			// 	str += "<td>" + data.Agent[i][item] + "</td>";
			// } else if(item == "name") {
			// 	str += "<td>" + "<div class='checkbox4 box'><label><input type='checkbox' name=\'" +  "option"  + "\' >" + data.Agent[i][item] + "</label></div></td>";

			// }

			if(items.indexOf(item) != -1){
				if(item == "name"){
					//str += "<td>" + "<div class='checkbox04 box'><label><input type='checkbox' class='checkbox04-input' name=\'" +  "option"  + "\' value=\' " + data.Agent[i][item] + " \'>" +"<span class='checkbox04-parts'>" + data.Agent[i][item] + "</span></label></div></td>";
					//str += "<td>" + "<div class='checkbox03 box'><label><input type='checkbox' class='checkbox03-input' name=\'" +  "option"  + "\' value=\' " + data.Agent[i][item] + " \'>" +"<span class='checkbox03-parts'>" + data.Agent[i][item] + "</span></label></div></td>";
					str += "<td>" + "<div class='checkbox"+optionColor[action]+" box'><label><input type='checkbox' class='checkbox"+optionColor[action]+"-input' name=\'" +  "option"  + "\' value=\' " + data.Agent[i][item] + " \'>" +"<span class='checkbox"+optionColor[action]+"-parts'>" + data.Agent[i][item] + "</span></label></div></td>";
				} else {
					str += "<td>" + data.Agent[i][item] + "</td>";
				}
			}

		}		
		str +="</tr>";
	}

	str += "</tbody></table>";
	if(action == "migrate"){
		str += "送り先:<select name='receiver' id=\'"+data.MyHostName+"_"+action+"_receiver\'></select><br>";
	}
	str += "<input type='submit' value='" + action + "' class='btn btn-"+color+"'></form>";
	return str;
}
function makeModalAgentTable(data){
	var str = "";
	// str += "<form action='migrate'>";
	str += "<select name='sender' style='display:none;'><option value='" + data.MyIP + "'>" + data.MyIP + "</option></select>"
	// str += "<div id=\'" + data.MyHostName + "_mig\'></div>";
	str += "<table class='sortable table table-bordered table-hover' id=\"" + data.MyHostName + "_agentTable\"><thead class='thead-dark'>";

	// for(var d of data.Agent){
		str +="<tr>"

		for(var item in data.Agent[0]){
			if(item == "history"){continue;}
			if(item == "priority"){
				str += "<th class='sort_number'>" + item + "</th>"

				continue;
			}
			str += "<th>" + item + "</th>"
		}
		str +="</tr>"
		// break;

	// }
	str += "</thead><tbody>"
	for(var i in data.Agent){
		str +="<tr>"
		for(var item in data.Agent[i]){
			if(item == "history"){continue;}

			// if(item == "id"){continue;}
			// else if(item == "time"){// + "<input type='checkbox' name=\'" +  "option"  + "\' >"
			// 	str += "<td>" + data.Agent[i][item] + "</td>";
			// } else if(item == "name") {
			// 	str += "<td>" + "<div class='checkbox4 box'><label><input type='checkbox' name=\'" +  "option"  + "\' >" + data.Agent[i][item] + "</label></div></td>";

			// }

			// if(item == "id"){continue;}
			// else if(item == "time"){// + "<input type='checkbox' name=\'" +  "option"  + "\' >"
				str += "<td>" + data.Agent[i][item] + "</td>";
			// } else if(item == "name") {
			// 	str += "<td>" + "<div class='checkbox04 box'><label><input type='checkbox' class='checkbox04-input' name=\'" +  "option"  + "\' value=\' " + data.Agent[i][item] + " \'>" +"<span class='checkbox04-parts'>" + data.Agent[i][item] + "</span></label></div></td>";

			// }

		}		
		str +="</tr>";
	}

	str += "</tbody></table>";
	// str += "送り先:<select name='receiver' id=\'"+data.MyHostName+"_mig_receiver\'></select><br>";
	// str += "<input type='submit' value='マイグレート' class='btn btn-primary'>";
	str += "</form>";
	return str;
}

function movePage(num){
	for(var pageId of pages){
		document.getElementById(pageId).style.display = "none";
	}
	document.getElementById(pages[num]).style.display = "";

}
function replaceStr(s,find,rep){
	var str = s;
	// console.log(str.indexOf(find));
	while(str.indexOf(find) != -1){
			str = str.replace(".","_");
			// str[str.indexOf(find)] = rep;
	}
	// console.log(str);

	return str;
}




function makeOption(){
	var sender = document.getElementById("sender");
	var agentName = document.getElementById("agentName");
	var Destination =  document.getElementById("Destination");

	for(var json of AgentSphereData){
		for(var agent of json.Agent){
			var element = document.createElement("option");
			element.setAttribute("value",agent.name);
			element.innerHTML = agent.name;
			element.setAttribute("class",json.MyHostName);
			agentName.appendChild(element);
		}
		var elementSender = document.createElement("option");
		elementSender.setAttribute("value",json.MyHostName);
		elementSender.setAttribute("class",json.MyHostName);
		elementSender.innerHTML = json.MyHostName;
		sender.appendChild(elementSender);

		var elementDestination = document.createElement("option");
		elementDestination.setAttribute("value",json.MyHostName);
		elementDestination.setAttribute("class",json.MyHostName);
		elementDestination.innerHTML = json.MyHostName;
		Destination.appendChild(elementDestination);

	}

}
function sleep(waitMsec) {
  var startMsec = new Date();
 
  // 指定ミリ秒間だけループさせる（CPUは常にビジー状態）
  while (new Date() - startMsec < waitMsec);
}

function getEventListenerAgent(IP){
	var httpObj = new XMLHttpRequest();
	httpObj.open("get", "http://localhost:8080/agentMonitor/servletInfo/eventLisenerAgent?ip="+IP,true);
	// sleep(1000);
                // console.log(httpObj);


	httpObj.onload = function(){

                var myData = JSON.parse(httpObj.response);
                var txt = "";
                console.log(myData);
              
	}
	httpObj.send(null);

	// $.getJSON("http://localhost:8080/agentMonitor/servletInfo/eventLisenerAgent?ip="+IP , function(data) {
    
	// 	console.log(data);

 //  });
}
// setInterval(function(){var value = document.getElementById("test").;console.log(value);},1000);
// var value = document.getElementById("test").textContent;console.log(value);
//console.log($("#test"));

// $(function() {
// 	var IP = "133.220.114.126";
//   $.getJSON("http://localhost:8080/agentMonitor/servletInfo/eventLisenerAgent?ip="+IP , function(data) {
//   	console.log(data);
//   });
// });




function makeAgentIcon(data,id){
	var str = "";
	str += "<div>";
	const agentClass = ["heavyAgent","lightAgent","otherAgent"];
	for(var agent of data.Agent){
		// console.log(agent.name);

		makeAgentModal(agent,data.MyIP);
		var heavyTime = 60;
		var ac = "lightAgent";
		var rgb = 255 - parseInt(agent.time/1000 / heavyTime * 255);
		if(agent.time / 1000 >= heavyTime){
			ac = "heavyAgent";
			rgb = 0;
		} else if(agent.time / 1000 >= 0 && agent.time / 1000 <= 1){
			rgb = 240;
		}
		// str += "<div style='background-color: rgb(255,"+rgb+","+rgb+");' id='' class=\'" + ac + "\'"+"onmouseover='"+"displayAgentName(this,\"" + ac +  ":" + agent.name + "\")" + "'" + "onmouseout='hideAgentName()' data-toggle='modal' data-target='#" + id + "'></div>";
		// str += "<div style='background-color:rgb(255,"+rgb+","+rgb+");' class=\'" + ac + "\'"+"onmouseover='"+"displayAgentName(this,\"" + ac +  ":" + agent.name + "\")" + "'" + "onmouseout='hideAgentName()' data-toggle='modal' data-target='#" + agent.id + "'></div>";
		str += "<div style='background-color:rgb(255,"+rgb+","+rgb+");' class=\'" + ac + "\'"+"onmouseover='"+"displayAgentName(this,\"" + ac +  ":" + agent.name + "\")" + "'" + "onmouseout='hideAgentName()' data-toggle='modal' data-target='#" + agent.id + "_"  + replaceStr(data.MyIP,".","_") + "'></div>";
		//<span style='vertical-align: middle;'>"+"heavy"+"</span>
		// str += "<div id='' class='heavyAgent'"+"onmouseover='"+"displayAgentName(this,"+agent.name+")" + "'onmouseout='hideAgentName()'></div>";
	}

	str += "</div>";
	return str;
}

function displayAgentName(obj,name){
	// console.log(obj);
	// var clientRect = obj.getBoundingClientRect();
	// console.log(clientRect.x);
	var rect = obj.getBoundingClientRect();
	// console.log($('#' + id).width())
	// console.log(rect);


	document.getElementById("balloon").textContent = name;
	// var delX = $("#" + id).outerWidth();
	var delX = rect.width;
	var delY = 0;
	var bal = $('#balloon');
	var winHeight = document.body.clientHeight;//window.parent.screen.height
	var winWidth = document.body.clientWidth;//window.parent.screen.width
	// console.log(window.parent.screen.height);
	// console.log("balHeight: "+ bal.outerHeight());
	// console.log("winHeight: "+ winHeight);
	// console.log("offsetY: " + window.pageYOffset);
	// console.log("rect.top: "+ rect.top);
	// console.log("winWidth: "+ winWidth);
	if( rect.top + bal.outerHeight() + window.pageYOffset >= winHeight){
		// document.getElementById("balloon").style.width = 400 + "px";
		// console.log("in");
		if(rect.top + bal.outerHeight() + window.pageYOffset >= winHeight){
			delY = rect.top + bal.outerHeight() + window.pageYOffset -  winHeight;
		}
		

	}  else {
		// document.getElementById("balloon").style.width = 200 + "px";

	}

	if(rect.left + bal.outerWidth() >=  winWidth){
			// delX = rect.left + 30 - bal.width() - winWidth;
			delX = -( bal.outerWidth());
	}

	document.getElementById("balloon").style.top = (rect.top + window.pageYOffset - delY) + "px";
	document.getElementById("balloon").style.left = (rect.left + window.pageXOffset + delX) + "px";

	document.getElementById("balloon").style.display = "block";
}

function hideAgentName(){
	document.getElementById("balloon").style.display = "none";
}


function updateAgent(){
	// console.log("update");
	for(var data of AgentSphereData){
		const modalId = data.MyHostName+"_modal";
		// $("#"+data.MyHostName+"_modal").find("select#migrate_" + modalId + "_agent option").each(function(index,element){
		// 	console.log(index);
  //   		console.log($(element).text());
		// })
		// if(){

		// }

		for(var agent of data.Agent){
			var flag = false;
			var num = 0;
			$("table#"+data.MyHostName+"_agentTable tbody tr").each(function(index){

				// console.log($(this).find("td").eq(0).val());
				// console.log($(this).find("td").eq(0).text());
				if(agent.name == $(this).find("td").eq(0).text()){
					flag = true;
					num = index;
					return;
				}

			});
		
			if(!flag) {//なかった場合には新しくセルを追加する
				const optionColor = {"migrate":"03","delete":"04"};
				var action = "";
				$("table#"+data.MyHostName+"_agentTable tbody").append("<tr><td>"+data.name+"<td></tr>"+"<tr><td>"+data.time+"<td></tr>");
				action = "migrate";
				$("table#"+data.MyHostName+"_migrate_agentTable tbody").append("<tr><td>" + "<div class='checkbox"+optionColor[action]+" box'><label><input type='checkbox' class='checkbox"+optionColor[action]+"-input' name=\'" +  "option"  + "\' value=\' " + agent["name"] + " \'>" +"<span class='checkbox"+optionColor[action]+"-parts'>" + agent["name"] + "</span></label></div></td></tr>");
				action = "delete";
				$("table#"+data.MyHostName+"_delete_agentTable tbody").append("<tr><td>" + "<div class='checkbox"+optionColor[action]+" box'><label><input type='checkbox' class='checkbox"+optionColor[action]+"-input' name=\'" +  "option"  + "\' value=\' " + agent["name"] + " \'>" +"<span class='checkbox"+optionColor[action]+"-parts'>" + agent["name"] + "</span></label></div></td></tr>");

			} else {
				$("table#"+data.MyHostName+"_agentTable tbody").find("tr").eq(num).find("td").eq(1).text(agent.time);
			}
		}

		$("table#"+data.MyHostName+"_agentTable tbody tr").each(function(index){

				// $(this).find("td").eq(0).val();
				var flag = false;
				for(var agent of data.Agent){
					if(agent.name == $(this).find("td").eq(0).text()){
						flag = true;
						break;
					}
				}
				if(!flag){
					$(this).remove();
					$("table#"+data.MyHostName+"_migrate_agentTable tbody").find("tr").eq(index).remove();
					$("table#"+data.MyHostName+"_delete_agentTable tbody").find("tr").eq(index).remove();

				}

		});


		
		// document.getElementById(modalId).innerHTML = 
		// 			"<div class='modal-dialog modal-lg' role='document'>"
		// 				+ "<div class='modal-content'>"
		// 					+ "<div class='modal-header'>"
		// 						+ "<button type='button' class='close' data-dismiss='modal' aria-label='Close'>"
		// 							+ "<span aria-hidden='true'>&times;</span>"
		// 						+ "</button>"
								
		// 					+ "</div>"
		// 					+ "<div class='modal-body modalSc'>"
		// 						+ "<h3> 動作中のエージェントの種類 </h3>"
		// 						+ makeModalAgentTable(data)
		// 						+"<br><h5>エージェントの移動(migrate)</h5>"
		// 						+ makeModalAgentInfoTable(data,["name","time"],"migrate","primary")
		// 						+"<br><h5>エージェントの削除(delete)</h5>"
		// 						+ makeModalAgentInfoTable(data,["name"],"delete","danger")

								
		// 					+ "</div>"
		// 					+ "<div class='modal-footer'>"							
		// 						+ "<button type='button' class='btn btn-danger' data-dismiss='modal'>close</button>"
		// 					+ "</div>"

		// 				+ "</div>"
		// 			+ "</div>";
		getReceiverOption(AgentSphereData,data.MyIP,data.MyHostName + "_migrate_receiver");


	}
}

function updateAgentSphere(){
	// makeTable();
	const items = ["total","free","used"]; 

	for(var data of AgentSphereData){
		var flag2 = false;
		for(var data2 of AgentSphereData2){
			if(data2.MyIP == data.MyIP){
				flag2 = true;
				break;
			}
		}
		if(!flag2){
			deleteAgentSphereData(data);//データ削除
		}
	}
	for(var newData of AgentSphereData2){
		var flag = false;
		for(var data of AgentSphereData){
			if(data.MyIP == newData.MyIP){
				flag = true;

				// updateAgentSphereData(data);

				break;
			}
		}
		if(flag){
			updateAgentSphereData(newData);

		} else {
			setData(newData);
			graph[graph.length -1].drawGraph();
		}
		// getReceiverOption(AgentSphereData2,newData.MyIP,newData.MyHostName + "_migrate_receiver");

	}

	AgentSphereData = AgentSphereData2.concat();
	// console.log(AgentSphereData);
	updateAgent();
	makeTable();

}
function updateAgentSphereData(data){
		for(var g of graph){
			if(data.MyHostName+"_graph" == g.id){
				g.config.data.datasets = [];
				for(var item in data.Memory){
					if(item == items[0]){
						continue;
					}
					var dataset = {
						label: item,
						fill:false,
						data:[Math.round((data.Memory[item]/data.Memory.total)*100)],
						backgroundColor: [colors[item]],
						backup:data.Memory[item],
						total:data.Memory.total,
					};
					// dataset.data.push(data.Memory[item]);
					g.pushDataset(dataset);
					g.setOption(option);
				}
				g.update();
			}
		}
		var modalId = data.MyHostName + "_modal";
		document.getElementById(modalId + "_agentIcon").innerHTML =  makeAgentIcon(data,modalId);

}

function deleteAgentSphereData(data){
	// console.log("delete:" + data.MyIP);
	document.getElementById("modalArea").removeChild(document.getElementById(data.MyHostName + "_modal"));
	document.getElementById("agentSphereField").removeChild(document.getElementById(data.MyHostName + "_modal_div"));
	for(var i = 0;i < graph.length;i++){
		if(data.MyHostName + "_graph" == graph[i].id){
			graph.splice(i,1);
			break;
		}
	}
	// console.log(graph);

}


function makeTable(){
	// var arr = [];
	const ids = ["ip_table","host_table","memory_used_table","memory_free_table","memory_total_table","cpu_table","agent_table"];
	resetTable();
	
	// var count = 0;
	for(var data of AgentSphereData){
		// count ++;
		var arr = [];
		var modalId = data.MyHostName + "_modal"

		var elementIP = document.createElement("td");
		elementIP.innerHTML = data.MyIP;
		arr.push(elementIP);

		
		var elementHost = document.createElement("td");
		elementHost.innerHTML = data.MyHostName;
		arr.push(elementHost);

		var elementMemoryUsed = document.createElement("td");
		elementMemoryUsed.innerHTML = data.Memory.used;
		arr.push(elementMemoryUsed);

		var elementMemoryfree = document.createElement("td");
		elementMemoryfree.innerHTML = data.Memory.free;
		arr.push(elementMemoryfree);
		
		var elementMemorytotal = document.createElement("td");
		elementMemorytotal.innerHTML = data.Memory.total;
		arr.push(elementMemorytotal);

		var elementcpu = document.createElement("td");
		elementcpu.innerHTML = data.CPU;
		arr.push(elementcpu);

		var elementAgent = document.createElement("td");
		// elementAgent.setAttribute("class","agentIcon");
		elementAgent.setAttribute("style","color:black;");

		var str = "";
		for(var i=0;i<data.Agent.length;i++){
			str += data.Agent[i].name + "(" + parseInt(data.Agent[i].time/1000) + "s)";
			if(i != data.Agent.length-1){
				// str += "\n";
			}
		}
		// console.log(str);
		// elementAgent.setAttribute("onmouseover","displayAgentName(this,\'aa"+"\')");
		// elementAgent.setAttribute("onmouseout","hideAgentName()")
		// if(data.Agent.length){}
		elementAgent.innerHTML = "<div class=\"agentIcon\" onmouseover=\"displayAgentName(this,\'"+str+"\')\" onmouseout=\"hideAgentName()\">"+data.Agent.length+"</div>";
		arr.push(elementAgent);
// data-toggle='modal' data-target='#" + modalId + "'"
		for(var i=0;i<ids.length;i++){
			arr[i].setAttribute("data-toggle","modal");
			arr[i].setAttribute("data-target","#" + modalId);
			document.getElementById(ids[i]).appendChild(arr[i]);
		}
	}
	
	// console.log(count);
}
function resetTable(){
	const ids = ["ip_table","host_table","memory_used_table","memory_free_table","memory_total_table","cpu_table","agent_table"];
	for(var id of ids){
		$("table tr#"+id + " td").each(function(){
			this.remove();
		});
	}
}

function makeAgentModal(agent,ip){
	// console.log($("#"+ agent.id +"_"+replaceStr(ip,".","_")).length);
	console.log(agent);
	if($("#"+ agent.id +"_"+replaceStr(ip,".","_")).length == 0){
		var elementModal = document.createElement("div");
		elementModal.setAttribute("class","modal");
		// elementModal.setAttribute("id",replaceStr(ip,".","_") + "_" +  agent.id);
		elementModal.setAttribute("id", agent.id + "_" + replaceStr(ip,".","_"));
		elementModal.setAttribute("tabindex","-1");
		elementModal.setAttribute("role","dialog");
		elementModal.setAttribute("aria-labelledby","exampleModalLabel");
		elementModal.setAttribute("aria-hidden","true");
		elementModal.innerHTML += 
					"<div class='modal-dialog modal-lg' role='document'>"
						+ "<div class='modal-content'>"
							+ "<div class='modal-header'>"
								+ "<h3>" + agent.name + "</h3>"
								+ "<button type='button' class='close' data-dismiss='modal' aria-label='Close'>"
									+ "<span aria-hidden='true'>&times;</span>"
								+ "</button>"
								
							+ "</div>"
							+ "<div class='modal-body modalSc'>"
								// +"<p>ほげほげ</p>"

								+"<table class='table table-bordered table-hover agentDataTable' id=\"" + agent.id +"_"+ replaceStr(ip,".","_") + "_table\">"
									// + "<thead class='table-primary'>"
										+"<tr id=\"" + agent.id +"_"+ replaceStr(ip,".","_") + "_id\">"
											// + "<th>エージェント名</th>"
											+ "<th>エージェントのID</th>"
											+ "<td>" + agent.id+"のID</td>"
										+"</tr>"
									// + "</thead>"
									// + "<tbody>"
										+"<tr id=\"" + agent.id +"_"+ replaceStr(ip,".","_") + "_time\">"
											+ "<th>エージェントの処理時間(s)</th>"
											// + "<td>" + agent.name + "</td>"
											+ "<td>" + agent.time/1000 + "</td>"
										+"</tr>"
									// + "</tbody>"
								+"</table>"
								+ "<div>"
								+ "<canvas id=\"" + agent.id +"_"+ replaceStr(ip,".","_") + "_graph\">"
								
								+ "</canvas>"

								+ "</div>"


							+ "<form action='migrate'>"
								+ "<select name='sender' style='display:none;'><option value='" + ip + "'>" + ip + "</option></select>"
								+ "<select name='option' style='display:none;'><option value='" + agent.id + "'>"  + "</option></select>"
								+ "送り先:<select name='receiver' id=\'"+agent.id +"_"+ replaceStr(ip,".","_")+"_receiver\'></select><br>"
								+ "<input type='submit' value='migrate' class='btn btn-primary'>"
							+ "</form>"

							+ "</div>"
							+ "<div class='modal-footer'>"
								// + "<button type='button' class='btn btn-primary' data-toggle='modal' data-target='#" + "a" + id + "' data-dismiss='modal'>back</button>"
						
							
								+ "<button type='button' class='btn btn-danger' data-dismiss='modal'>close</button>"
							+ "</div>"

						+ "</div>"
					+ "</div>";
		// elementModal.innerHTML += 
		// 			"<div class='modal-dialog modal-lg' role='document'>"
		// 				+ "<div class='modal-content'>"
		// 					+ "<div class='modal-header'>"
		// 						+ "<h3>" + agent.name + "</h3>"
		// 						+ "<button type='button' class='close' data-dismiss='modal' aria-label='Close'>"
		// 							+ "<span aria-hidden='true'>&times;</span>"
		// 						+ "</button>"
								
		// 					+ "</div>"
		// 					+ "<div class='modal-body modalSc'>"
		// 						// +"<p>ほげほげ</p>"

		// 						+"<table class='table table-bordered table-hover'>"
		// 							+ "<thead class='table-primary'>"
		// 								+"<tr id=\"" + agent.id +"_"+ replaceStr(ip,".","_") + "_id>"
		// 									// + "<th>エージェント名</th>"
		// 									+ "<th>エージェントのID</th>"
		// 									+ "<th>エージェントの処理時間(s)</th>"
		// 								+"</tr>"
		// 							+ "</thead>"
		// 							+ "<tbody>"
		// 								+"<tr id=\"" + agent.id +"_"+ replaceStr(ip,".","_") + "_table\">"
		// 									// + "<td>" + agent.name + "</td>"
		// 									+ "<td>" + agent.id+"のID</td>"
		// 									+ "<td>" + agent.time/1000 + "</td>"
		// 								+"</tr>"
		// 							+ "</tbody>"
		// 						+"</table>"
		// 					+ "<form action='migrate'>"
		// 						+ "<select name='sender' style='display:none;'><option value='" + ip + "'>" + ip + "</option></select>"
		// 						+ "<select name='option' style='display:none;'><option value='" + agent.id + "'>"  + "</option></select>"
		// 						+ "送り先:<select name='receiver' id=\'"+agent.id +"_"+ replaceStr(ip,".","_")+"_receiver\'></select><br>"
		// 						+ "<input type='submit' value='migrate' class='btn btn-primary'>"
		// 					+ "</form>"

		// 					+ "</div>"
		// 					+ "<div class='modal-footer'>"
		// 						// + "<button type='button' class='btn btn-primary' data-toggle='modal' data-target='#" + "a" + id + "' data-dismiss='modal'>back</button>"
						
							
		// 						+ "<button type='button' class='btn btn-danger' data-dismiss='modal'>close</button>"
		// 					+ "</div>"

		// 				+ "</div>"
		// 			+ "</div>";

		document.getElementById("AgentModal").appendChild(elementModal);
		var agentGraph = new Graph(agent.id +"_"+ replaceStr(ip,".","_") + "_graph","bar");
		var dataset = {
			label:"",
			fill:false,
			 lineTension: 0,
	  				borderColor: "rgb(0,0,255)",
	  				// 'rgb(' + makeRandom() + ',' + makeRandom() + ',' + makeRandom() +')',
	  				data:[],
	  				IP:[]
	  			};
	  	var option = {
			responsive: true,
			title: {
				fontSize: 28,
				display: true,
				text: 'Agentの推移'
			},
			tooltips: {
				mode: 'index',
				intersect: false,
			},
			hover: {
				mode: 'nearest',
				intersect: true
			},
			scales: {
				yAxes: [{
					display: true,
					scaleLabel: {
						display: true,
						labelString: 'seconds'
					},
					ticks: {
						min: 0
					}
				}]
			}
		};
	  	var item = [];
		for(var history of agent.history){
			item.push(history.IP);
			dataset.data.push(history.time);
			// dataset.IP.push(history.IP);
		}
		agentGraph.setDataset(dataset);
		agentGraph.setItem(item);
		agentGraph.setOption(option);
		agentGraph.drawGraph();

		// AgentGraph.push(new Graph());

	} else {
		document.getElementById(agent.id +"_"+replaceStr(ip,".","_") + "_table").innerHTML = 
		// "<td>" + agent.name + "</td>"
										"<tr id=\"" + agent.id +"_"+ replaceStr(ip,".","_") + "_id\">"
											// + "<th>エージェント名</th>"
											+ "<th>エージェントのID</th>"
											+ "<td>" + agent.id+"のID</td>"
										+"</tr>"
									// + "</thead>"
									// + "<tbody>"
										+"<tr id=\"" + agent.id +"_"+ replaceStr(ip,".","_") + "_time\">"
											+ "<th>エージェントの処理時間(s)</th>"
											// + "<td>" + agent.name + "</td>"
											+ "<td>" + agent.time/1000 + "</td>"
										+"</tr>";
	}
	// $("select#"+agent.id +"_"+ replaceStr(ip,".","_") + "_receiver option").
	document.getElementById(agent.id +"_"+ replaceStr(ip,".","_") + "_receiver").textContent = null;
	getReceiverOption(AgentSphereData,ip, agent.id +"_"+ replaceStr(ip,".","_") + "_receiver");
	 // $("#myTable").tablesorter(); 
	// console.log($("#hoege").text());
	// console.log($("#"+ agent.id +"_"+replaceStr(ip,".","_")).text());

	
}

// $(document).ready(function() 
//     { 
//        	for(var data of AgentSphereData){

// 		// setData(data);
// 		$("#"+data.MyHostName+"_agentTable").tablesorter();
// 	}
//     } 
// );

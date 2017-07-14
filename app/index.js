import React from 'react';
import ReactDOM from 'react-dom';

var tableData = [ // Default table contain
	{seq:1, status:"open", cate:"cat1", title:"title1", owner:"Allen", prio:"P1"},
	{seq:2, status:"open", cate:"cat1", title:"title2", owner:"Allen", prio:"P2"},
	{seq:3, status:"close", cate:"cat2", title:"title3", owner:"Allen", prio:"P3"},
	{seq:4, status:"pending", cate:"cat3", title:"title4", owner:"Allen", prio:"P2"},
	{seq:5, status:"process", cate:"cat4", title:"title5", owner:"Allen", prio:"P1"}
];

function TableRow(props){ // For create table contain
	return(
		<tr>
			<td>{props.seq}</td>
			<td>{props.item.status}</td>
			<td>{props.item.cate}</td>
			<td>{props.item.title}</td>
			<td>{props.item.owner}</td>
			<td>{props.item.prio}</td>
		</tr>
	);
}

function InsertButton(props){
	console.log("[InsertButton]");
	console.log(props);
	return(
		<input type="button" value="Insert" onClick={props.insert} />
	);
}

function TableContain(props){ // For display table
	var rows = [];
	var key = "";
	for(var i = 0; i < props.data.length; i++){
		// console.log(this.props.data[i]);
		key = "item" + i;
		rows.push(<TableRow item={props.data[i]} key={key} seq={i+1} />);
	}
	return(
		<table>
			<thead>
				<tr>
					<td>seq</td>
					<td>Status</td>
					<td>Category</td>
					<td>Title</td>
					<td>Owner</td>
					<td>Priority</td>
				</tr>
			</thead>
			<tbody>
			{rows}
			</tbody>
		</table>
	);
}

class ReactTable extends React.Component { // Main React table component
	constructor(props) {
		super(props);
		this.state = {
			data:this.props.data
		};
	};

	insertTable(){
		// console.log(this);
		var newData = {seq:6, status:"processs", cate:"cat4", title:"title6", owner:"Allen", prio:"P1"};
		var oriData = this.state.data;
		oriData.push(newData);
		this.setState({data: oriData});
	};

	checkProp(){
		console.log(this.state.data);
	};

	render() {
		var buttonRow = [];
		buttonRow.push(<InsertButton data={this.state.data} key="insertButton" insert={this.insertTable.bind(this)} />);
		return(
			<div>
				<TableContain data={this.state.data} key="tableContent" />
				{buttonRow}
				<input type="button" value="check" onClick={this.checkProp.bind(this)} />
			</div>
		);
	};
}

ReactDOM.render(<ReactTable data={tableData} />, document.getElementById('table'));

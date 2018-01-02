import { connect } from 'react-redux';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';



class MyTable extends Component {

	styles() {
		return {
			table: {
				fontFamily: 'arial, sans-serif',
    				borderCollapse: 'collapse',
    				width: '100%'
				},
			tableData: {
				border: '1px solid black',
				texAlign: 'left',
				padding: '8px',
				    }
			};
		}

	showData(data, styles) {
        	const tableRows = this.props.data.map((data) =>
	  	<tr style={styles.tableData}><td style={styles.tableData}>{data.FirstName}</td>
		<td style={styles.tableData}>{data.LastName}</td>
		<td style={styles.tableData}>{data.Company}</td>
		<td style={styles.tableData}>{data.Address}</td>
		<td style={styles.tableData}>{data.Tel}</td>
		<td style={styles.tableData}>{data.DOB}</td></tr>
		);
		return tableRows;
				}	

	render() {
	const styles = this.styles();
		return (
			<table style={styles.table}>
	<tr style={styles.tableData}>
	    <th style={styles.tableData}>FirstName</th>
	    <th style={styles.tableData}>LastName</th>
	    <th style={styles.tableData}>Company</th>
	    <th style={styles.tableData}>Address</th>
	    <th style={styles.tableData}>Contact</th>
	    <th style={styles.tableData}>Date Of Birth</th>
	  </tr>
		{this.props.data.length > 0 ? this.showData(this.props.data, styles) : 'No users found!'}
	</table>
	);
		}
		}

	@connect((store) => {
		return {
			user: store.user
		};
	})
	class Show extends Component {


	   styles() {
	
	};


	   render() {
	 
	      return (
	<MyTable data={this.props.user} />
	       
	      );
	   }
	}



export default Show;

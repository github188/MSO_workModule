import React from "react";
import { render } from "react-dom";
import { DatePicker,Badge,Icon } from 'antd';
import {Result,NoticeIcon} from 'ant-design-pro';



const {MonthPicker, RangePicker} = DatePicker;
var node = document.getElementById("main");
import { BootstrapTable, TableHeaderColumn } from "react-bootstrap-table";
// import Forms from "./component/antd_test/form";
// import Inputs from "./component/Inputs";
// import Show from "./component/show";
import moment from 'moment';
import style from "./style.css";

class DateRange extends React.Component {
    state = {
        startValue: "",
        endValue: "",
        endOpen: false,
    };


    disabledStartDate = (startValue) => {
        //console.log(startValue.valueOf())
        const endValue = this.state.endValue;
        // debugger;

        //      if(startValue){
        //   return startValue.valueOf() <=moment().subtract(1, 'days');
        // }

        if (startValue && endValue) {
            return startValue.valueOf() > moment(endValue).subtract(30, 'days');

        } else {
            return false
        }

        // console.log(startValue.valueOf())

    }

    disabledEndDate = (endValue) => {
        // debugger;
        const startValue = this.state.startValue;

        if (startValue && endValue) {
            return endValue.valueOf() < moment(startValue).add(30, 'days');

        } else {
            return false
        }
    }

    onChange = (field, value) => {
        console.log(value)
        this.setState({
            [field]: value,
        });
    }

    onStartChange = (value) => {
        this.onChange('startValue', value ? value.format("YYYY-MM-DD") : "");
    }

    onEndChange = (value) => {
        this.onChange('endValue', value ? value.format("YYYY-MM-DD") : "");
    }

     handleStartOpenChange = (open) => {
       if(open){
		    	// let aa=this.state.endValue? moment(this.state.endValue).add(30,"days").format("YYYY-MM-DD"):""
		    	// // debugger;
		    	// this.setState({
		     //         		endValue:aa
		     //         		})

		     // if()
    	}
     this.setState({
             endOpen: open
         });

     }

     handleEndOpenChange = (open) => {
		    if(open){
		    	// let aa=this.state.startValue?moment(this.state.startValue).add(30,"days").format("YYYY-MM-DD"):""
		    	// this.setState({
		     //         		endValue:aa
		     //         		})
		    }


         this.setState({
             endOpen: open
         });
     }

    render() {
        const {startValue, endValue, endOpen} = this.state;
        return (
            <div>
        <DatePicker
            disabledDate={this.disabledStartDate}
            // showTime
            format="YYYY-MM-DD"
            value={startValue ? moment(startValue) : null}
            placeholder="Start"
            onChange={this.onStartChange}
            onOpenChange={this.handleStartOpenChange}
            showToday={false}
            open={endOpen}

            />
            <span style={{padding:"0 34px"}}>~</span>
        <DatePicker
            disabledDate={this.disabledEndDate}
            // showTime
            format="YYYY-MM-DD"
            value={endValue ? moment(endValue) : null}
            placeholder="End"
            onChange={this.onEndChange}
            open={endOpen}
            onOpenChange={this.handleEndOpenChange}
            showToday={false}
            />
      </div>
        );
    }
}





// class DisabledDate extends React.Component {
//     constructor() {
//         super()
//         this.state = {
//             startValue: null,
//             endValue: null
//         }
//     }

//     disabledDate(dates, type) {
//         const {startValue, endValue} = this.state;
//         if (!dates) {
//             return false;
//         }
//         let aa = dates;
//         let bb = type;
//         console.log(bb,startValue,endValue)

//         if (type == "start") {
//             if (!endValue) {
//             	return moment(startValue).valueOf() > moment(endValue).subtract(30, 'days');
//             }
//                 return false;


//         } else {
//         	if (!startValue) {
//                 return false;
//             }
//             return moment(endValue).valueOf() > moment(startValue).subtract(30, 'days');

//         }

//     }
//     onChange(dates, dateStrings) {
//     	console.log(dateStrings[0])
//         this.setState({
//             startValue: dateStrings[0],
//             endValue: dateStrings[1]
//         })

//     }
//     render() {
//         return <div>
// 			<RangePicker
//             format="YYYY-MM-DD"
//             defaultValue={[this.state.startValue ? moment(this.state.startValue) : null, this.state.endValue ? moment(this.state.endValue) : null]}
//             disabledTime={this.disabledDate.bind(this)}
//             onChange={this.onChange.bind(this)}
//             showTime={{
//                 hideDisabledOptions: true,
//                 defaultValue: [moment('00:00:00', 'HH:mm:ss'), moment('11:59:59', 'HH:mm:ss')],
//             }}
//             />
// 		</div>
//     }
// }



class Pro extends React.Component{
	render(){
		return (<div>
			


<Result type="success" />








		</div>)
	}
}
var products = [
    {
        id: 1,
        name: "Item name 1",
        price: 100
    }, {
        id: 2,
        name: "Item name 2",
        price: 100
    }
];
class App extends React.Component {
    constructor() {
        super();
        this.state = {
            data: [{
                edit: false,
                userName: "kelly",
                password: "123213"
            }, {
                edit: true,
                userName: "kelly",
                password: "123213"
            }],
            dataT: []
        }
    }
    componentDidMount() {
        var _this = this;
        $.when(
            $.ajax("http://192.168.2.120:3000/users")
        ).then(function(result) {
            _this.setState({
                dataT: result
            })
        })
    }
    edit(k) {
        var arr = [...this.state.data]
        arr[k].edit = true;

        this.setState({
            data: arr
        })
    }

    submit(data, k) {
        this.setState({
            data: [Object.assign(data, {
                edit: false
            })]
        })

    }

    render() {
        return (<div style={{
                padding: 100
            }}>
            { /*this.state.data.map((v, k) => v.edit ? <Inputs data={v} key={k} submit={this.submit.bind(this, k)}/> :
                <Show key={k} data={v} edit={this.edit.bind(this, k)}/>)*/ }
              { /*   <BootstrapTable data={this.state.dataT} striped={true} hover={true} bordered={true} pagination height='420px' search>
                    <TableHeaderColumn dataField="a" isKey={true} dataAlign="center" dataSort={true}>Product ID</TableHeaderColumn>
                    <TableHeaderColumn dataField="b" dataSort={true}>Product Name</TableHeaderColumn>
                    <TableHeaderColumn dataField="c" dataFormat={priceFormatter}>Product Price</TableHeaderColumn>
                </BootstrapTable>*/ }
		{ /*<DisabledDate/> 	*/ }
       { /* <button className="a">按钮</button>*/ }



			{/*<DateRange/>
			<Badge count={12}><Icon type="bell"  style={{ fontSize: 26, color: '#000000' }}/></Badge>*/}
			<Pro></Pro>
        </div>)
    }
}

render(<App/>, node);
function priceFormatter(cell, row, p) {
    return '<i class="glyphicon glyphicon-usd"></i> ' + cell;
}



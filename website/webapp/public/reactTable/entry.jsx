
import List from './list.jsx';
import Pagebutton from './pagebutton.jsx';

/*统一使用公共模块*/
class Main extends React.Component{
	constructor(props) {
		super(props);
		this.state = {
			listData:'',/*初始化数据 当listData拿到以后给list 这个就是前面得cell结构*/
			pagebutton:'',
		}
	}
	componentDidMount(){
		this.getData(function (data){
			var cellName = this.props.data.cellName;
			/*拿到程序设定得cell数据字段并且传入数据 并且更新数据*/
			if(!data._embedded[cellName]){
				console.log('设定有问题');
			}
			this.setState({
				/*这个地方所有*/
				listData:this.props.data.cell(data._embedded[cellName]),
			});
			this.setState({
				pagebutton:this.isPagebutton(data.page),
			});
		}.bind(this));
	}
	getData(callBack){
		callBack = callBack || function (){};
		$.when($.ajax(
			this.props.data.data
		)).then(function (data){
			callBack(data);
		}.bind(this)).fail(function (data){
			data = {
  "_embedded" : {
    "testx" : [ {
      "createTime" : 1488869685343,
      "updateTime" : 1488869685343,
      "name" : "name1",
      "age" : 22,
      "address" : "addressA",
      "_links" : {
        "self" : {
          "href" : "http://192.168.2.68:8080/testxx/1"
        },
        "testEntity" : {
          "href" : "http://192.168.2.68:8080/testxx/1{?projection}",
          "templated" : true
        }
      }
    }, {
      "createTime" : 1488869685343,
      "updateTime" : 1488869685343,
      "name" : "name2",
      "age" : 22,
      "address" : "addressA",
      "_links" : {
        "self" : {
          "href" : "http://192.168.2.68:8080/testxx/2"
        },
        "testEntity" : {
          "href" : "http://192.168.2.68:8080/testxx/2{?projection}",
          "templated" : true
        }
      }
    }, {
      "createTime" : 1488869685494,
      "updateTime" : 1488869685494,
      "name" : "name1",
      "age" : 22,
      "address" : "addressA",
      "_links" : {
        "self" : {
          "href" : "http://192.168.2.68:8080/testxx/3"
        },
        "testEntity" : {
          "href" : "http://192.168.2.68:8080/testxx/3{?projection}",
          "templated" : true
        }
      }
    }, {
      "createTime" : 1488869685494,
      "updateTime" : 1488869685494,
      "name" : "name2",
      "age" : 22,
      "address" : "addressA",
      "_links" : {
        "self" : {
          "href" : "http://192.168.2.68:8080/testxx/4"
        },
        "testEntity" : {
          "href" : "http://192.168.2.68:8080/testxx/4{?projection}",
          "templated" : true
        }
      }
    }, {
      "createTime" : 1488869685656,
      "updateTime" : 1488869685656,
      "name" : "name1",
      "age" : 22,
      "address" : "addressA",
      "_links" : {
        "self" : {
          "href" : "http://192.168.2.68:8080/testxx/5"
        },
        "testEntity" : {
          "href" : "http://192.168.2.68:8080/testxx/5{?projection}",
          "templated" : true
        }
      }
    }, {
      "createTime" : 1488869685656,
      "updateTime" : 1488869685656,
      "name" : "name2",
      "age" : 22,
      "address" : "addressA",
      "_links" : {
        "self" : {
          "href" : "http://192.168.2.68:8080/testxx/6"
        },
        "testEntity" : {
          "href" : "http://192.168.2.68:8080/testxx/6{?projection}",
          "templated" : true
        }
      }
    }, {
      "createTime" : 1488869685806,
      "updateTime" : 1488869685806,
      "name" : "name1",
      "age" : 22,
      "address" : "addressA",
      "_links" : {
        "self" : {
          "href" : "http://192.168.2.68:8080/testxx/7"
        },
        "testEntity" : {
          "href" : "http://192.168.2.68:8080/testxx/7{?projection}",
          "templated" : true
        }
      }
    }, {
      "createTime" : 1488872542156,
      "updateTime" : 1488872542156,
      "name" : "name1",
      "age" : 22,
      "address" : "addressA",
      "_links" : {
        "self" : {
          "href" : "http://192.168.2.68:8080/testxx/10"
        },
        "testEntity" : {
          "href" : "http://192.168.2.68:8080/testxx/10{?projection}",
          "templated" : true
        }
      }
    }, {
      "createTime" : 1488872542156,
      "updateTime" : 1488872542156,
      "name" : "name2",
      "age" : 23,
      "address" : "addressA",
      "_links" : {
        "self" : {
          "href" : "http://192.168.2.68:8080/testxx/11"
        },
        "testEntity" : {
          "href" : "http://192.168.2.68:8080/testxx/11{?projection}",
          "templated" : true
        }
      }
    }, {
      "createTime" : 1488873158111,
      "updateTime" : 1488873158111,
      "name" : "name2",
      "age" : 23,
      "address" : "addressA",
      "_links" : {
        "self" : {
          "href" : "http://192.168.2.68:8080/testxx/12"
        },
        "testEntity" : {
          "href" : "http://192.168.2.68:8080/testxx/12{?projection}",
          "templated" : true
        }
      }
    }, {
      "createTime" : 1488873158111,
      "updateTime" : 1488873158111,
      "name" : "name2",
      "age" : 23,
      "address" : "addressA",
      "_links" : {
        "self" : {
          "href" : "http://192.168.2.68:8080/testxx/13"
        },
        "testEntity" : {
          "href" : "http://192.168.2.68:8080/testxx/13{?projection}",
          "templated" : true
        }
      }
    }, {
      "createTime" : 1488873336570,
      "updateTime" : 1488873336570,
      "name" : "name2",
      "age" : 23,
      "address" : "addressA",
      "_links" : {
        "self" : {
          "href" : "http://192.168.2.68:8080/testxx/14"
        },
        "testEntity" : {
          "href" : "http://192.168.2.68:8080/testxx/14{?projection}",
          "templated" : true
        }
      }
    }, {
      "createTime" : 1488873336570,
      "updateTime" : 1488873336570,
      "name" : "name2",
      "age" : 23,
      "address" : "addressA",
      "_links" : {
        "self" : {
          "href" : "http://192.168.2.68:8080/testxx/15"
        },
        "testEntity" : {
          "href" : "http://192.168.2.68:8080/testxx/15{?projection}",
          "templated" : true
        }
      }
    }, {
      "createTime" : 1488873351581,
      "updateTime" : 1488873351581,
      "name" : "name1",
      "age" : 23,
      "address" : "addressB",
      "_links" : {
        "self" : {
          "href" : "http://192.168.2.68:8080/testxx/16"
        },
        "testEntity" : {
          "href" : "http://192.168.2.68:8080/testxx/16{?projection}",
          "templated" : true
        }
      }
    }, {
      "createTime" : 1488873351581,
      "updateTime" : 1488873351581,
      "name" : "name1",
      "age" : 23,
      "address" : "addressB",
      "_links" : {
        "self" : {
          "href" : "http://192.168.2.68:8080/testxx/17"
        },
        "testEntity" : {
          "href" : "http://192.168.2.68:8080/testxx/17{?projection}",
          "templated" : true
        }
      }
    }, {
      "createTime" : 1488873429351,
      "updateTime" : 1488873429351,
      "name" : "name1",
      "age" : 23,
      "address" : "addressB",
      "_links" : {
        "self" : {
          "href" : "http://192.168.2.68:8080/testxx/18"
        },
        "testEntity" : {
          "href" : "http://192.168.2.68:8080/testxx/18{?projection}",
          "templated" : true
        }
      }
    }, {
      "createTime" : 1488873429351,
      "updateTime" : 1488873429351,
      "name" : "name1",
      "age" : 23,
      "address" : "addressB",
      "_links" : {
        "self" : {
          "href" : "http://192.168.2.68:8080/testxx/19"
        },
        "testEntity" : {
          "href" : "http://192.168.2.68:8080/testxx/19{?projection}",
          "templated" : true
        }
      }
    }, {
      "createTime" : 1488873525655,
      "updateTime" : 1488873525655,
      "name" : "name1",
      "age" : 23,
      "address" : "addressC",
      "_links" : {
        "self" : {
          "href" : "http://192.168.2.68:8080/testxx/20"
        },
        "testEntity" : {
          "href" : "http://192.168.2.68:8080/testxx/20{?projection}",
          "templated" : true
        }
      }
    }, {
      "createTime" : 1488873525655,
      "updateTime" : 1488873525655,
      "name" : "name2",
      "age" : 23,
      "address" : "addressC",
      "_links" : {
        "self" : {
          "href" : "http://192.168.2.68:8080/testxx/21"
        },
        "testEntity" : {
          "href" : "http://192.168.2.68:8080/testxx/21{?projection}",
          "templated" : true
        }
      }
    }, {
      "createTime" : 1488873579326,
      "updateTime" : 1488873579326,
      "name" : "name2",
      "age" : 23,
      "address" : "addressC",
      "_links" : {
        "self" : {
          "href" : "http://192.168.2.68:8080/testxx/22"
        },
        "testEntity" : {
          "href" : "http://192.168.2.68:8080/testxx/22{?projection}",
          "templated" : true
        }
      }
    } ]
  },
  "_links" : {
    "first" : {
      "href" : "http://192.168.2.68:8080/testxx?page=0&size=20"
    },
    "self" : {
      "href" : "http://192.168.2.68:8080/testxx"
    },
    "next" : {
      "href" : "http://192.168.2.68:8080/testxx?page=1&size=20"
    },
    "last" : {
      "href" : "http://192.168.2.68:8080/testxx?page=2&size=20"
    },
    "profile" : {
      "href" : "http://192.168.2.68:8080/profile/testxx"
    },
    "search" : {
      "href" : "http://192.168.2.68:8080/testxx/search"
    }
  },
  "page" : {
    "size" : 20,
    "totalElements" : 51,
    "totalPages" : 3,
    "number" : 0
  }
}
			callBack(data);
		});
	}
	isPagebutton(data){
		if(!this.props.data.paging)return;
		/*显示多少个分页得button*/
		data.mainButton = this.props.data.mainButton;
		return <Pagebutton  data={data} />
	}
	render(){
		console.log();
		return (
				<div>
					<List data={this.state.listData} />
					{this.state.pagebutton}
				</div>
				);
	}
}

export default Main;
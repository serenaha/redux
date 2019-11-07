import React,{Component} from 'react';
import 'antd/dist/antd.css';
import { Input ,Button , List} from 'antd';
import store from './store'
const data = [
    {
      title: 'Ant Design Title 1',
    },
    {
      title: 'Ant Design Title 2',
    },
    {
      title: 'Ant Design Title 3',
    },
    {
      title: 'Ant Design Title 4',
    },
  ];
  
class TodoList extends Component{
    constructor(props){
        super(props);
        this.state = store.getState();
        console.log(store.getState(),this.state);
        
    }
    render(){
        return (
            <div style={{margin:'10px'}}>
                <div>
                    <Input placeholder="todo info" style={{width:'300px',marginRight:'10px'}} value={this.state.inputValue}/>
                    <Button type="primary">提交</Button>
                </div>
                <List
                    style={{marginTop:'10px',width:'300px'}}
                    size="small"
                    bordered
                    dataSource={this.state.list}
                    renderItem={item => (<List.Item>{item}</List.Item>)}
                />
            </div>
        )
        
    }
}
export default TodoList;
import React from "react";
import _ from 'lodash'


class ListAdd extends React.Component {
    removeItem = (id) => (e) => {//.6 removeItem = (id)
        // console.log(this.state.items.filter(function (item) {
        //     if(item.id !== id){
        //         return item
        //     }
        // }))
        e.preventDefault();//7.при нажатии запускается фильтр и в const newItems попадают все элементы кроме нажатого id
        // const newItems = this.state.items.filter((item) => item.id !== id);
        const oldState = _.cloneDeep(this.state)
        const newItems = oldState.count2.filter(function (item) {
            if (item.map1 !== id) {
                return item
            }
        });
        console.log(newItems)
        this.setState({count2: newItems});//8.записывается в this.state и заново запускается render() автоматически
        // так же за render() запускается renderItem({ id }) и this.removeItem(id)  с новыми элементами
        //и снова перерендереные строки  находятся в ожидании
    };

    buttonAddManus=(mic)=>(e)=>{
        // const oldState = _.cloneDeep(this.state)
        // const newItems = oldState.count2.filter(function (item) {
        //     if (item.map1 !== mic.length - 1) {
        //         return item
        //     }else if(item.map1 === 0){
        //         return item
        //     }
        // });
        // console.log(newItems)
        //
        // this.setState({count2: newItems})
        const oldState = _.cloneDeep(this.state)
        if(oldState.count2.length === 0){
            return
        }
        const newItems = oldState.count2.filter(function (item,i) {
            if (mic.length -1 !== mic[i].map1 - 1) {
                return item
            }
        });
        console.log(newItems)

        this.setState({count2: newItems})
    }
    addItem = (mic) => (e) => {//.6 removeItem = (id)
        // console.log(this.state.items.filter(function (item) {
        //     if(item.id !== id){
        //         return item
        //     }
        // }))
        e.preventDefault();//7.при нажатии запускается фильтр и в const newItems попадают все элементы кроме нажатого id
        // const newItems = this.state.items.filter((item) => item.id !== id);
        if (mic.length  === 0){
            const fid = (map) => ([map])
            const y = fid({map1: 1});
            console.log(y)

            this.setState({count2: y})
        }else{
            const oldState = _.cloneDeep(this.state)
            const newIte = oldState.count2.reduce(function (acc,item) {
                item =  {map1:item.map1 + 1}
                return  item


            },{});
            // let first  = [ {name: 'Maxim', secondName: 'Ivanov'}, {name: 'Lena', secondName: 'Kirolova'} ];
            // let second = [ {age: 20}, {age: 18} ];

            let third = oldState.count2.concat(newIte);

            // console.log(newIte)
            // const x = (uy) => {
            //     let g = []
            //     g.push(uy)
            //   return g
            // }
            // const hj=x(newIte)
            // const fid = (map) => ([{map: map[0].map + 1}])
            // const y = fid(id);
            // console.log(y)
            console.log(third)
            this.setState({count2: third})
        }
    }
    constructor(props) {
        super(props);
        // const items = [1, 2, 3, 4, 5].map((i) => ({id: i}));
        const count2 = []
        this.state = {count2}
        console.log(this.state.count2)
        console.log(this.state.items)
        // console.log(items)
        console.log(count2)
        console.log(this.state)
        // const x = (i) => {
        //
        // }
        // x(9)
    }

    // buttonAddPlus = () => {
    //     // const [items1, setCount] = useState(0)
    //
    //     // const [items2, setCount2] = useState(0)
    //     // setCount2((count) => count + 1)
    //
    //     // const oldState = _.cloneDeep(this.state)
    //     // const g = oldState.count2
    //     const fid = (map) => ([{map: map[0].map + 1}])
    //     const y = fid(this.state.count2);
    //     console.log(y)
    //     const cars = [
    //         {map: 7},
    //
    //     ];
    //     console.log(cars)
    //     this.setState({count2: y})
    //     // console.log(count1({count:0}))
    //     // console.log(con({count:3}))
    //     // // console.log(con({count:3}))
    //     // this.setState({count: con})
    //     // console.log({count:count1})
    //     // this.setState({items: items1})
    // }

    render() {//.1 render() //.2 renderItem(item)
        console.log(this.state)
        // console.log([1, 2, 3, 4, 5].map((i) => ({id: i})).map(function (item) {
        //      // return <li key={item.id}><a href="#" >{item.id}</a></li>;
        //     return item.id + 5
        // }))
        // console.log(this.state.items.map((item) => this.renderItem(item)))
        return (<ul>
            <div className="btn-group font-monospace" role="group">
                <button type="button" onClick={this.addItem(this.state.count2)} className="btn btn-outline-success">+
                </button>
                <button type="button" onClick={this.buttonAddManus(this.state.count2)}
                        className="btn btn-outline-danger">-
                </button>
            </div>
            {/*{this.state.items.map((item) => <li key={item.id}><a href="#"*/}
            {/*                                                     onClick={this.removeItem(item.id)}>{item.id}</a></li>)}*/}
            {/*{this.state.count2.map((item) => <li key={item.map1}><a href="#">{item.map1}</a></li>)}*/}

            {this.state.count2.map((item) => <div key={item.map1} className="list-group">
                <button type="button" onClick={this.removeItem(item.map1)} key={item.map1}
                        className="list-group-item list-group-item-action">{item.map1}</button></div>
            )}


        </ul>);
    }

    // renderItem(i) {//.3 renderItem({ id }) //.4 this.removeItem(id)
    //     // console.log(<li key={item.id}><a href="#" onClick={this.removeItem(item.id)}>{item.id}</a></li>)
    //     return (<li key={i.id}><a href="#" onClick={this.removeItem(i.id)}>{i.id}</a></li>);
    // }
}

export default ListAdd;
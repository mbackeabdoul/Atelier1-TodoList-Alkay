class Todos extends React.Component{
    constructor(props){
        super(props)
        this.state ={
            inputTodo:"",
            todos:[]
        }
    }
    render (){
        return (
            <div className="container mt-4">
                <h1>Todo Lisr</h1>
                <p>{this.state.inputTodo}</p>
                <div className="input-group mb-3">
                    <input
                    type="text"
                    value={this.state.inputTodo}
                    onChange ={(e) => {
                        this.setState({inputTodo: e.target.value})
                    }}
                    className="form-control"
                    placheholder="Ajouter une tache"
                    />
                    <button className="btn btn-primary" onClick={()=> {
                        this.setState({todos:[...this.state.todos, this.state.inputTodo]})
                    }}> Ajouter</button>
                </div>
                <ul className="list-group">
                    {
                        this.state.todos.map((todo)=>{
                            return<li>{todo}</li>
                        })
                    }
                </ul>
            </div>
        )
    }
}
ReactDOM.render(<Todos/>, document.getElementById("root"))
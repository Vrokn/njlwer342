import React, { Component } from 'react';


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      tasks: [
        'Sacar la ropa',
        'Hacer la cama',
        'Leer un rato',
      ],
      newTask: '',
      vacio: '',
    }
  }
  UpdateValue = (event) => {
    this.setState({
      newTask: event.target.value,
    });
  }
  addTask = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      this.setState({ tasks: this.state.tasks.concat(this.state.newTask) })
    }
  }
  handleSubmit = event => {
    event.preventDefault();
    const vacio = this.state.vacio;
    this.props.onSearchTermChange(vacio);
    this.setState({ vacio: '' })
  };

  render() {
    return (
      <div className="wrapper">
        <div className="list">
          <h3>Por hacer:</h3>
          <ul className="todo">

            {this.state.tasks.map(item => (
              <li>{item}</li>)
            )}
          </ul>
          <form>
            <input type="text" id="new-task" placeholder="Ingresa una tarea y oprime Enter" value={this.state.vacio} onSubmit={(event) => this.handleSubmit(event)} onChange={(event) => this.UpdateValue(event)} onKeyPress={this.addTask.bind(this)} />
          </form>
        </div>
      </div>
    )
  }
}


export default App;

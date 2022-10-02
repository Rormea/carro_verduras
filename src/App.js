import { Component } from 'react';
import Productos from './components/Productos'
import Layout from './components/Layout'
import Title from './components/Title';
import Navbar from './components/Navbar';



class App extends Component {
  state = {
    productos: [
      { name: 'Tomate', price: 1500, img: '/productos/tomate.jpg' },
      { name: 'Arbejas', price: 1500, img: '/productos/arbejas.jpg' },
      { name: 'Lechuga', price: 500, img: '/productos/lechuga.jpg' },
    ],



    carro: [],

    esCarroVisible: false,


  }



  addCar = (producto) => {

    const { carro } = this.state

    if (carro.find(el => el.name === producto.name)) {
      const newCar = carro.map(el =>
        el.name === producto.name
          ? ({
            ...el,
            cantidad: el.cantidad + 1
          })
          : el
      )

      return this.setState({ carro: newCar })
    }

    return this.setState({
      carro: this.state.carro.concat({
        ...producto,
        cantidad: 1,
      })
    })
  }

  mostrarCarro = () => {
    if (!this.state.carro.length) {
      return
    }

    this.setState({
      esCarroVisible: !this.state.esCarroVisible
    })
  }

  render() {
    // console.log(this.state.carro)

    const { esCarroVisible } = this.state

    return (
      <div>
        <Navbar carro={this.state.carro}
          esCarroVisible={esCarroVisible}
          mostrarCarro={this.mostrarCarro}
        />
        <Layout>
          <Title />
          <Productos
            addCar={this.addCar}
            productos={this.state.productos}
          />
        </Layout>
      </div>
    )
  }
}

export default App;

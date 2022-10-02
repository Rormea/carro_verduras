import { Component } from "react";


const styles = {
    detallesCarro: {
        backgroundColor: '#fff',
        position: 'absolute',
        top: '90px',
        boxShadow: '1px 5px 5px rgb(0,0,0,0.5)',
        borderRadius: '5px',
        width: '300px',
        right: 50,
    },

    ul: {
        margin: 0,
        padding: 0,

    },

    producto: {
        listStyles: 'none',
        display: 'flex',
        justifyContent: 'space-between',
        aligItems: 'center',
        padding: '25px 20px',
        borderBottom: 'solid 1px #aaa'

    }
}

class DetallesCarro extends Component {

    render() {

        const { carro } = this.props
        console.log(carro)

        return (
            <div style={styles.detallesCarro}>
                <ul style={styles.ul}>
                    {carro.map(el =>
                        <li style={styles.producto} key={el.name}>
                            <img alt={el.name} src={el.img} width='50' height='32' />
                            {el.name}
                            <span>{el.cantidad}</span>
                        </li>)}
                </ul>
            </div>


        );
    }
}

//<span>{el.cantidad}</span>


export default DetallesCarro;

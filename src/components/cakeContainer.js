import React , { Component } from 'react';
import { buyCake } from '../redux';

import { connect }  from 'react-redux';

class CakeContainer extends Component {
    render() {
        return(
            <div>
                <h1>Cake Shop</h1>
                <p>No of Cakes: {this.props.noOfCake}</p>
                <button onClick={this.props.buyCake}>BUY CAKE</button>
            </div>
        )
    }
}

const mapStateToProps = state    => ({noOfCake: state.cake.noOfCake});
const dispatchToProps = dispatch => ({buyCake: () => dispatch(buyCake())});

export default connect(mapStateToProps, dispatchToProps)(CakeContainer);
import react, { useEffect, useState } from "react";
import { connect } from "react-redux";
import GetRequestActionCreater from "../actions/api_actions";
import BuyCakeActionCreater from "../actions/cake_actions";
import BuyIceCreamActionCreater from "../actions/icecream_actions";

function Shop(props) {
    useEffect(() => {
        props.GetUsers();
    }, []);

    return (
        <div>
            <h1>Welcome to our Shop</h1>
            <h2>Total cakes : {props.TotalCake}</h2>
            <button onClick={props.BuyCake}>Buy Cake</button>
            <h2>Total icecreams : {props.TotalIceCream}</h2>
            <button onClick={props.BuyIceCream}>Buy IceCream</button>
            <h2>Total Users</h2>
            {props.Users.map((curUser) => {
                return <p>{curUser.name}</p>;
            })}
        </div>
    );
}
const matchStateToProps = (state) => {
    return {
        TotalCake: state.cake.noOfCakes,
        TotalIceCream: state.iceCream.noOfIceCreams,
        Users: state.user.userData,
    };
};

const matchDispatchToProps = (dispatch) => {
    return {
        BuyCake: () => dispatch(BuyCakeActionCreater()),
        BuyIceCream: () => dispatch(BuyIceCreamActionCreater()),
        GetUsers: () => dispatch(GetRequestActionCreater()),
    };
};
export default connect(matchStateToProps, matchDispatchToProps)(Shop);

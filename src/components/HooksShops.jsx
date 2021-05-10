import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import GetRequestActionCreater from "../actions/api_actions";
import BuyCakeActionCreater from "../actions/cake_actions";
import BuyIceCreamActionCreater from "../actions/icecream_actions";

function HooksShops(props) {
    const dispatch = useDispatch();
    const TotalCakes = useSelector((state) => state.cake.noOfCakes);
    const TotalIceCreams = useSelector((state) => state.iceCream.noOfIceCreams);
    const Users = useSelector((state) => state.user.userData);
    useEffect(() => {
        dispatch(GetRequestActionCreater);
    }, []);

    return (
        <div>
            <hr></hr>
            <h1>Welcome to our Hooks Shop</h1>
            <h2>Total cakes : {TotalCakes}</h2>
            <button onClick={() => dispatch(BuyCakeActionCreater())}>
                Buy Cake
            </button>
            <h2>Total icecreams : {TotalIceCreams}</h2>
            <button onClick={() => dispatch(BuyIceCreamActionCreater())}>
                Buy IceCream
            </button>
            <h2>Total Users</h2>
            {Users.map((curUser) => {
                return <p>{curUser.name}</p>;
            })}
        </div>
    );
}
// const matchStateToProps = (state) => {
//     return {
//         TotalCake: state.cake.noOfCakes,
//         TotalIceCream: state.iceCream.noOfIceCreams,
//         Users: state.user.userData,
//     };
// };

// const matchDispatchToProps = (dispatch) => {
//     return {
//         BuyCake: () => dispatch(BuyCakeActionCreater()),
//         BuyIceCream: () => dispatch(BuyIceCreamActionCreater()),
//         GetUsers: () => dispatch(GetRequestActionCreater()),
//     };
// };
export default HooksShops;

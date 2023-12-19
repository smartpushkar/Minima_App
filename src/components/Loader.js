import animationData from "../lotties/infinite-scroll-loader.json";
import Lottie from "lottie-react";


const Loader = () => {
    const style = {
        height: 100,
    };
    const loaderStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100'
    }
    return (
        <div className="loader" style={loaderStyle}>
            <Lottie animationData={animationData} style={style} />

        </div>
    );
}

export default Loader;

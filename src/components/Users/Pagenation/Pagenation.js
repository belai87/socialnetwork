import React from "react";

const Pagenation = (props) => {

    const onClickPager = () => {

    }

    return(
        <div className="mr-2" onClick={onClickPager} key={props.index}>{props.index}</div>
    )
}

export default Pagenation;
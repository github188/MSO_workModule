import React from "react";
export default class MoreJ extends React.Component {
    render() {
        return (
            <span style={{
                float: "right",
                fontSize: "12px",
                color: "#B9B9B9",
                fontWeight: 200,
                cursor: "pointer",
                marginTop: (this.props.mt||10)+"px"
            }}>+更多</span>
        )
    }
}
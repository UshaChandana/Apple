import React from "react";

import Thead from "./thead";
import Tbody from "./tbody";

class Table extends React.Component {
    constructor(props) {
        super(props)
        this.onViewClick = this.onViewClick.bind(this)
    }

    onViewClick(Id) {
        this.props.history.push(`/view/${Id}`)
    }

    render() {
        return (
            <table>
                <Thead values = {this.props.headers}/>
                <Tbody values = {this.props.values} onViewClick={this.onViewClick}/>

            </table>
    
        );
    }

}

export default Table;

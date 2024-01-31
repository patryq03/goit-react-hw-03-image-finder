import propTypes from "prop-types";
import css from './Button/Button.module.css';
import { Component } from "react";

class Button extends Component{



    render(){
        return(
            <div>
                <button className={css.Button}>Load More</button>
            </div>
        )
    }
}
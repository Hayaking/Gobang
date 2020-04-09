import React, {PropTypes, Component} from 'react' ;

function Square(props) {
    return <div className="square"
                style={{backgroundColor: props.highlight ? "red" : "rgb(200, 255, 200)"}}
                onClick={props.onClick}>{props.value || ''}</div>
}

Square.propTypes = {
    onClick: PropTypes.func.isRequired,
    value: PropTypes.string
};

export default Square;

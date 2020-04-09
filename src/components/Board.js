import React, {PropTypes, Component} from 'react' ;

import Square from './Square';

class Board extends Component {
    constructor(props) {
        super(props);
        this.renderTable = this.renderTable.bind(this);
        this.renderRow = this.renderRow.bind(this);
    }

    renderRow(col, y, current) { // 列的总数，y值坐标
        const arr = new Array(col).fill(0); // 随便填充非空数值即可
        return (
            <div className="board-row">
                {arr.map((item, index) => {
                    return <Square
                        highlight={index===current.x && y ===current.y}
                        key={index}
                        value={this.props.squares[index][y]}
                        onClick={() => {
                            this.props.onClick(index, y)
                        }}/>
                })}
            </div>
        )
    }

    renderTable(row, col,current) { // 行数，列数
        const arr = new Array(row).fill(0);
        return (
            <div>
                {arr.map((item, index) => {
                    return <div key={index}>{this.renderRow(col, index,current)}</div>
                })}
            </div>
        )
    }

    render() {
        const {row, col,current} = this.props;
        return (
            <div style={{display: 'inline-block'}}>
                {this.renderTable(row, col,current)}
            </div>
        )
    }
}

Board.propTypes = {
    row: PropTypes.number.isRequired,
    col: PropTypes.number.isRequired,
    onClick: PropTypes.func
};

export default Board;

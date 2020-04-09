function calculate(squares, x, y) {
    var w = squares.length, h = w;
    var tmp = [];
    var winner;
    tmp = [];
    for (var i = -4; i <= 4; i++) {
        if (y + i < 0 || y + i >= h || squares[x][y + i] == null) {
            continue
        }
        tmp.push([x, y + i])
    }
    winner = check5(squares, tmp);
    if (winner) {
        return winner
    }
    tmp = [];
    for (var i = 4; i >= -4; i--) {
        if (x + i < 0 || x + i >= w || y - i < 0 || y - i >= h || squares[x + i][y - i] == null) {
            continue
        }
        tmp.push([x + i, y - i])
    }
    winner = check5(squares, tmp);
    if (winner) {
        return winner
    }
    tmp = [];
    for (var i = 4; i >= -4; i--) {
        if (x + i < 0 || x + i >= w || squares[x + i][y] == null) {
            continue
        }
        tmp.push([x + i, y])
    }
    winner = check5(squares, tmp);
    if (winner) {
        return winner
    }
    tmp = [];
    for (var i = 4; i >= -4; i--) {
        if (x + i < 0 || x + i >= w || y + i < 0 || y + i >= h || squares[x + i][y + i] == null) {
            continue
        }
        tmp.push([x + i, y + i])
    }
    winner = check5(squares, tmp);
    if (winner) {
        return winner
    }
}

function check5(squares, tmp) {
    if (tmp.length < 5) {
        return null
    }
    for (var j = 0, len = tmp.length; j < len - 5 + 1; j++) {
        var frag = tmp.slice(j, j + 5);
        var winnerX = frag.every(point => {
            return squares[point[0]][point[1]] === 'X'
        });
        if (winnerX) {
            return 'X'
        }
        var winnerO = frag.every(point => {
            return squares[point[0]][point[1]] === 'O'
        });
        if (winnerO) {
            return 'O'
        }
    }
    return null
}

export function deepCopy(arr) {
    var cloned = [];
    for (var i = 0, len = arr.length; i < len; i++) {
        if (Array.isArray(arr[i])) {
            cloned[i] = deepCopy(arr[i])
        } else {
            cloned[i] = arr[i]
        }
    }
    return cloned
}

export default calculate;

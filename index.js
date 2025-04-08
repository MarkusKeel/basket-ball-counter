
function add(team, num) {
    let score_board = document.getElementById(team +"-score");
    score_board.textContent = parseInt(score_board.textContent) + (num);
}
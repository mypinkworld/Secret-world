document.addEventListener('DOMContentLoaded', function() {
    // for the start button
    document.getElementById('startButton').addEventListener('click', function() {
        document.getElementById('surprise').classList.remove('hidden');
        this.classList.add('hidden');
    });

    //  for envelope1 button
    document.getElementById('envelope1').addEventListener('click', function() {
        document.getElementById('envelope1Result').classList.remove('hidden');
        document.getElementById('surprise').classList.add('hidden');

    });

    //  for envelope2 button
    document.getElementById('envelope2').addEventListener('click', function() {
        document.getElementById('envelope2Result').classList.remove('hidden');
        document.getElementById('surprise').classList.add('hidden');

    });

    // for restart buttons
    const restartButtons = document.querySelectorAll('.restartButton');
    restartButtons.forEach(button => {
        button.addEventListener('click', restartGame);
    });
});

// to restart the game
function restartGame() {
    document.getElementById('envelope1Result').classList.add('hidden');
    document.getElementById('envelope2Result').classList.add('hidden');
    document.getElementById('startButton').classList.remove('hidden');

}
<?php 
    $title = 'Квадратные корни';
    $style = '../../styles/style.css';
    require_once('../../components/header.php');

?>
<main>
    <div class="main__container roots">
        <div class="roots__top">
            <p>Здесь можно потренировать вычисление корней</p>
            <div class="roots__input">
                <div>
                    <h2>√<span id="root-num"></span>=</h2>
                </div>
                <form action="">
                    <input id="roots-input" type="text" maxlength="2" placeholder="XX">
                </form>
                <h2><pre>² </pre></h2>
                <button id="roots-submit">Submit</button>
            </div>
            <label class="range-input">
                <input id="range" 
                        type="range" 
                        list="markers" 
                        min="2" 
                        max="30" 
                        step="1">
            </label>
            <h2>2²-<span id="slider-num"></span>²</h2>
        </div>
    </div>
</main>

<?php 
    $script = 'rootsjs';
    require_once('../../components/footer.php');

?>
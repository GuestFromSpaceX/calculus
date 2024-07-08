<?php 
    $title = 'Квадратные корни';
    require_once('./header.php');

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
                    <input id="roots-input" type="text" maxlength="2">
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
            <!-- <datalist id="markers">
                <option value="2" label="2"></option>
                <option value="3" label="3"></option>
                <option value="4" label="4"></option>
                <option value="5" label="5"></option>
                <option value="6" label="6"></option>
                <option value="7" label="7"></option>
                <option value="8" label="8"></option>
                <option value="9" label="9"></option>
                <option value="10" label="10"></option>
                <option value="11" label="11"></option>
                <option value="12" label="12"></option>
                <option value="13" label="13"></option>
                <option value="14" label="14"></option>
                <option value="15" label="15"></option>
                <option value="16" label="16"></option>
                <option value="17" label="17"></option>
                <option value="18" label="18"></option>
                <option value="19" label="19"></option>
                <option value="20" label="20"></option>
                <option value="21" label="21"></option>
                <option value="22" label="22"></option>
                <option value="23" label="23"></option>
                <option value="24" label="24"></option>
                <option value="25" label="25"></option>
                <option value="26" label="26"></option>
                <option value="27" label="27"></option>
                <option value="28" label="28"></option>
                <option value="29" label="29"></option>
                <option value="30" label="30"></option>
            </datalist> -->
        </div>
    </div>
</main>

<?php 
    $script = 'rootsjs';
    require_once('./footer.php');

?>
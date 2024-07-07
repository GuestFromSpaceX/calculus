<?php 
    $title = 'Таблица умножения';
    require_once('./header.php');

?>
<main>
    <div class="main__container power">
        <p>Здесь можно потренировать свои базовые вычислительные навыки</p>
        <div class="calculus">
            <div class="calculus__top">
                <div class="calculus__input">
                    <div>
                        <h2><span id="random-num-checked"></span>x<span id="random-num"></span>=</h2>
                    </div>
                    <form action="">
                        <input id="main-input" type="text" maxlength="2">
                    </form>
                </div>
                <button id="submit">Submit</button>
            </div>
            <hr>
            <div class="buttons">
                <div class="button-container">
                    <form action="">
                        <label>
                            <input class="numbers-box" id="2" type="checkbox" name="nums">
                            <div>
                                <h2>2</h2>
                            </div>
                        </label>
                        <label>
                            <input class="numbers-box" id="3" type="checkbox" name="nums">
                            <div>
                                <h2>3</h2>
                            </div>
                        </label>
                        <label>
                            <input class="numbers-box" id="4" type="checkbox" name="nums">
                            <div>
                                <h2>4</h2>
                            </div>
                        </label>
                        <label>
                            <input class="numbers-box" id="5" type="checkbox" name="nums">
                            <div>
                                <h2>5</h2>
                            </div>
                        </label>
                        <label>
                            <input class="numbers-box" id="6" type="checkbox" name="nums">
                            <div>
                                <h2>6</h2>
                            </div>
                        </label>
                        <label>
                            <input class="numbers-box" id="7" type="checkbox" name="nums" checked>
                            <div>
                                <h2>7</h2>
                            </div>
                        </label>
                        <label>
                            <input class="numbers-box" id="8" type="checkbox" name="nums">
                            <div>
                                <h2>8</h2>
                            </div>
                        </label>
                        <label>
                            <input class="numbers-box" id="9" type="checkbox" name="nums">
                            <div>
                                <h2>9</h2>
                            </div>
                        </label>
                    </form>
                </div>
            </div>
        </div>
    </div>
</main>    

<?php 
    
    $script = 'power';
    require_once('./footer.php');

?>
<?php 
    $title = 'Регистрация';
    $style = '../../styles/reg.css';
    require_once('../../components/header.php');

?>
<main>
    <div class="main__container login">
        <form action=''>
            <label>
                <input type="text">
            </label>
            <label>
                <input type="password">
            </label>
        </form>
    </div>    
</main>    

<?php 
    
    $script = 'reg';
    require_once('../../components/footer.php');

?>
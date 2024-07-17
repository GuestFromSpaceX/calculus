<?php 
    $title = 'Регистрация';
    $style = '../../styles/style.css';
    require_once('../../components/header.php');

?>
<main class='reg'>
    <div class="reg__container">
        <form action=''>
            <label>
                Имя 
                <input type="text">
            </label>
            <label>
                Логин
                <input type="text">
            </label>
            <label>
                Email
                <input type="email">
            </label>
            <label for="">
                Фото
                <input type="image" src="../../assets/icons/input-img.webp" width="50">
            </label>
            <label>
                Пароль
                <input type="password">
            </label>
            <label>
                Проверка пароля
                <input type="password">
            </label>
            <label>
                <input type="submit">
            </label>
        </form>
    </div>    
</main>    

<?php 
    
    $script = 'reg';
    require_once('../../components/footer.php');

?>
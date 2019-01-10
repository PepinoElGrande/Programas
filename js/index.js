$(document).ready(() => {
    $("#file").change((e) => {
        // e es el elemento que lanza el evento ,osea el unico input que hay
        console.log(e.target.files);
        let reader = new FileReader();
        reader.readAsDataURL(e.target.files[0]);
        reader.onload = function () {
            $("#imagen").attr('src',reader.result)  ;

        }

    })


});
/**
 * Created by user on 5/31/2018.
 */
(function(){

    $.get("countries.php",function(data){

        var array=JSON.parse(data);
        for (var key in array) {
            if(key!="country") {
                var value = array[key];
                $("#Countries").append("<option value='" + value + "'>" + key + "</option>");
            }
        }
    });

    $("#Countries").on("change",function(){
        var value=$("#Countries").find(":selected").val();
        $("#postal_code").val(value);
    });
})();





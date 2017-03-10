/**
 * Created by tracy on 2017/3/10.
 */
window.onload = function () {
    let txt = document.getElementById("txt");
    console.log(txt);
    txt.onfocus = function () {
        if (this.value == "请输入关键字") {
            this.value = "";
        }
    };

    txt.onblur = function () {
        if (this.value == "") {
            this.value = "请输入关键字";
        }


    }


}
$(document).ready(function () {
    var pathnames = this.location.pathname.split("/");
    var last_id = pathnames[pathnames.length - 1];
    var selectObj;

    if (last_id == "") {
        if (pathnames.length <= 2) {
            selectObj = $("#home");
        } else {
            selectObj = $("#" + pathnames[pathnames.length - 2]);
            if (selectObj.length == 0) {
                selectObj = $("#home");
            }
        }
    }

    selectObj.removeClass("btn-outline-warning");
    selectObj.addClass("btn-danger");
});
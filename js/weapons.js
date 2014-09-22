window.onload = function () {
    var radioList = ["primaryradio", "secondary"];
    var booRadio;
    for (var list in radioList) {
        //TODO Do something with booRadio. Radio buttons needs to be clicked twice if you select one in a different category.

        var allRadios = document.getElementsByName(radioList[list]);
        var x = 0;
        for (x = 0; x < allRadios.length; x++) {
            allRadios[x].onclick = function () {
                if (booRadio == this) {
                    this.checked = false;
                    booRadio = null;
                } else {
                    booRadio = this;
                }
            };
        }
    }
}

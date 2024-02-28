document.getElementById("registerBtn").addEventListener("click", function() {
    var name = document.getElementById("name").value;
    var selectedFoods = [];
    var checkboxes = document.getElementsByClassName("food");
    for (var i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked) {
            selectedFoods.push(checkboxes[i].value);
        }
    }
    alert("이름: " + name + "\n취향 음식: " + selectedFoods.join(", "));
});
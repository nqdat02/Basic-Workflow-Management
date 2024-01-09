const addItem = () => {
    var input = document.getElementById("itemInput");
    var itemText = input.value.trim();

    if (itemText !== "") {
        var itemList = document.getElementById("itemList");
        var listItem = document.createElement("li");

        var editButton = document.createElement("a");
        editButton.textContent = "Sửa";
        editButton.href = "";
        editButton.onclick = () => {
            var newText = prompt("Nhập nội dung mới:", itemText);
            if (newText !== null) {
                itemContent.textContent = newText;
            }
        };
        listItem.appendChild(editButton);

        var deleteButton = document.createElement("a");
        deleteButton.href = "";
        deleteButton.textContent = "Xoá";

        deleteButton.onclick = () => {
            itemList.removeChild(listItem);
            updateListHeight();
        };

        listItem.appendChild(document.createTextNode(" "));
        listItem.appendChild(deleteButton);

        var itemContent = document.createElement("span");
        itemContent.textContent = itemText;
        listItem.appendChild(document.createTextNode(" "));
        listItem.appendChild(itemContent);

        itemList.appendChild(listItem);
        
        input.value = "";
    }

}

const clearList = () => {
    var itemList = document.getElementById("itemList");
    itemList.innerHTML = "";
}

const updateListHeight = () => {
    var itemList = document.getElementById("itemList");
    var items = itemList.getElementsByTagName("li");
    var itemHeight = 20;
    var totalHeight = items.length * itemHeight;
    itemList.style.height = totalHeight + "px";
}
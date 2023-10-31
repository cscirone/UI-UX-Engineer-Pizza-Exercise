function setSizeDisplay(s) {
    var sizeIndicator = $("#size-indicator");
    sizeIndicator.empty();
    sizeIndicator.text(s);
}

function setActiveCategory(event) {
    var currentActive = $(".topping-category-button-active");

    currentActive.removeClass("topping-category-button-active");
    currentActive.addClass("topping-category-button");

    var clickedID = event.target.parentElement.id;

    $("#" + clickedID).removeClass("topping-category-button");
    $("#" + clickedID).addClass("topping-category-button-active");

    var clickedSelectionListID = clickedID + "-selection-list";
    var currentID = currentActive[0].id + "-selection-list";

    $("#" + currentID).toggleClass("hide");
    $("#" + clickedSelectionListID).toggleClass("hide");

}

function toggleImage(imageID) {
    var image = $("#" + imageID);
    image.toggleClass("hide");
}
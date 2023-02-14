var width = window.innerWidth;
/// alert(width);
var MobileNavContent = document.getElementById('MobileNavContent');
var MenuBtn = document.getElementById('MenuBtn');
var MenuClose = document.getElementById('MenuClose');

function MenuNavigation() {
    MobileNavContent.style.display = 'block';
    MenuBtn.style.display = 'none';
    MenuClose.style.display = 'block';
}

function CloseNavigation() {
    MobileNavContent.style.display = 'none';
    MenuBtn.style.display = 'block';
    MenuClose.style.display = 'none';
}
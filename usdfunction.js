//常用函数

function addLoadEvent(func) {
    //立刻执行函数
	var oldonlad = window.onload;
	if (typeof window.onload != 'function') {
		window.onload = func;
	} else {
		window.onload = function() {
			oldonlad();
			func();
	}
	}
	}

function insertAfter(newElement,targetElement) {
    //把新元素添加到目标元素之后的函数
	var parent = targetElement.parentNode;
	if (parent.lastChild == targetElement) {
		parent.addendChild(newElement);
	} else {
		parent.insertBefore(newElement,targetElement.nextSibling);
	}
}	

function moveElement(elementID,final_x,final_y,interval) {
    //以动画效果移动元素
    if (!document.getElementById || !document.getElementById(elementID)) return false;
    var elem = document.getElementById(elementID);
    if (elem.movement) clearTimeout(elem.movement);
    if (!elem.style.left) elem.style.left = "0px";
    if (!elem.style.top) elem.style.top = "0px";
    var xpos = parseInt(elem.style.left);
    var ypos = parseInt(elem.style.top);
    var dist = 0;
    if (xpos == final_x && ypos == final_y) return true;
    if (xpos < final_x) {
        dist = Math.ceil((final_x - xpos)/10);
        xpos += dist; 
    } 
    if (xpos > final_x) {
        dist = Math.ceil((xpos - final_x)/10);
        xpos -= dist; 
    } 
    if (ypos < final_y) {
        dist = Math.ceil((final_y - xpos)/10);
        ypos += dist; 
    }  
    if (xpos > final_y) {
        dist = Math.ceil((xpos - final_y)/10);
        ypos -= dist; 
    } 
    elem.style.left = xpos + "px";
    elem.style.top = ypos + "px";
    var repeat = "moveElement('"+elementID+"',"+final_x+","+final_y+","+interval+")";
    elem.movement = setTimeout(repeat,interval);
}
//下一个变量的元素节点
function getNextElement(node) {
    if (node.nodeType === 1) {
    return node;
    }
    if (node.nextSibling) {
        return getNextElement(node.nextSibling)
    }
    return null;
}
function addClass(element,value) {
    //新增一个class到目标元素
    if (!element.className) {
        element.className = value;
    } else {
        newClassName = element.className;
        newClassName += " ";
        newClassName += value;
        element.className = newClassName;
    }
}
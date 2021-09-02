var mouseEvent="empty";
var last_position_of_x;
var last_position_of_y;
canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
color="black";
width_line=2;
width=screen.width;
var new_width= width-70;
var new_height= screen.height-300;
if (width<992)
{
    document.getElementById("myCanvas").width=new_width;
    document.getElementById("myCanvas").width=new_height;
    document.body.style.overflow="hidden";
}
canvas.addEventListener("mousedown", my_mousedown)
function my_mousedown(e)
{
    color=document.getElementById("color").value;
    width_line=document.getElementById("width").value;
    mouseEvent="mouseDown";
    console.log(mouseEvent);
}
canvas.addEventListener("mousemove", my_mousemove);
function my_mousemove(e)
{
    current_position_of_x=e.clientX-canvas.offsetLeft;
    current_position_of_y=e.clientY-canvas.offsetTop;
    if (mouseEvent=="mouseDown")
    {
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth=width_line;
        ctx.moveTo(last_position_of_x, last_position_of_y);
        ctx.lineTo(current_position_of_x, current_position_of_y);
        ctx.stroke();
    }
    last_position_of_x=current_position_of_x;
    last_position_of_y=current_position_of_y;
}
canvas.addEventListener("touchstart", my_touchstart)
function my_touchstart(e)
{
    color=document.getElementById("color").value;
    width_line=document.getElementById("width").value;
    last_position_of_x= e.touches[0].clientX-canvas.offsetLeft;
    last_position_of_y= e.touches[0].clientY-canvas.offsetTop;
}
canvas.addEventListener("touchmove", my_touchmove);
function my_touchmove(e)
{
    current_position_of_x=e.touches[0].clientX-canvas.offsetLeft;
    current_position_of_y=e.touches[0].clientY-canvas.offsetTop;
    ctx.beginPath();
    ctx.strokeStyle=color;
    ctx.lineWidth=width_line;
    ctx.moveTo(last_position_of_x, last_position_of_y);
    ctx.lineTo(current_position_of_x, current_position_of_y);
    ctx.stroke();
    last_position_of_x=current_position_of_x;
    last_position_of_y=current_position_of_y;
}
canvas.addEventListener("mouseup", my_mouseup);
function my_mouseup(e)
{
    mouseEvent="mouseUp";
}
canvas.addEventListener("mouseleave", my_mouseleave)
function my_mouseleave(e)
{
    mouseEvent="mouseLeave";
}
function clearArea(){
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
} 
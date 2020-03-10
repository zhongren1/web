

var num_one = document.getElementById('text_one')
var num_two = document.getElementById('text_two')
var submit = document.getElementById('submit_1')

submit.addEventListener('click',print_content)

function print_content() {
    var one = parseInt(num_one.value)
    var two = parseInt(num_two.value)
    console.log('输入的和为：', one+two)
}
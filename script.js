var a = document.getElementById('Num_1');
var b = document.getElementById('Num_2');
var add_button = document.getElementById('add_all');
add_button.addEventListener('click', sum_all);
var result = document.getElementById('result');

function sum_all() {
  let num_a = Number(a.value);
  let num_b = Number(b.value);
  let sum = 0;

  //number check
  if (true == isNaN(num_a)) //if num_a is not number
  {
    result.value = 'NUM_1 is not Number...';
  }
  else if (true == isNaN(num_b)) //if num_b is not number
  {
    result.value = 'NUM_2 is not Number...';
  }
  else if (num_a > num_b)  //Error
  {
    result.value = 'NUM_1 NEEDS TO BE SMALLER OR NUM_2 NEEDS TO BE BIGGER';
  }
  else  //VALID
  {
    //for in java script 
    for (let i = num_a; i <= num_b; i++) {
      sum = sum + i;
      console.log(i);
    }

    result.value = sum;
    console.log(sum);
  }
}
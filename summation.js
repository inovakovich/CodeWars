const summation = (num) => num < 1 ? 0 : summation(num - 1) + num;
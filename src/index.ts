// FizzBuzzの処理を関数化させる
function getFizzBuzzString(i: number): string {
  if (i % 3 === 0 && i % 5 === 0) {
    return "FizzBuzz";
  } else if (i % 3 === 0) {
    return "Fizz";
  } else if (i % 5 === 0) {
    return "Buzz";
  } else {
    return String(i);
  }
}

// 1〜100が入った配列を作る
function sequence(max: number): number[] {
  return [...Array(max).keys()].map((i) => ++i);
}

for (const i of sequence(100)) {
  const message = getFizzBuzzString(i);
  console.log(message);
}

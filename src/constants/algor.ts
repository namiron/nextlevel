function addArrays(a: number[], b: number[]) {
  let i = a.length - 1,
    j = b.length - 1,
    carry = 0;
  const result: number[] = [];
  while (i >= 0 || j >= 0 || carry > 0) {
    const digitA = i >= 0 ? a[i--] : 0,
      digitB = j >= 0 ? b[j--] : 0;
    const sum = digitA + digitB + carry;
    result.unshift(sum % 10);
    carry = Math.floor(sum / 10);
  }
  return result;
}

function findDuplicate(arr: number[]) {
  const map = new Map<number, number>(),
    result: number[] = [];

  for (const num of arr) {
    const count = map.get(num) || 0;
    map.set(num, count + 1);
  }
  for (const [num, count] of map.entries()) {
    if (count > 1) {
      result.push(num);
    }
  }
  return result;
}

function isValid(s: string): boolean {
  const stack: string[] = [];
  const pairs: Record<string, string> = {
    ")": "(",
    "]": "[",
    "}": "{",
  };

  for (const char of s) {
    if (char === "(" || char === "[" || char === "{") {
      stack.push(char);
    } else {
      const top = stack.pop();
      if (top !== pairs[char]) {
        return false;
      }
    }
  }

  return stack.length === 0;
}

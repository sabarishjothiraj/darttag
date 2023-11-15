function migrateRings(N, A, B, C) {
  const steps = [];

  function moveRing(n, source, target, aux) {
    if (n === 1) {
      steps.push(`${n}: ${source} to ${target}`);
    } else {
      moveRing(n - 1, source, aux, target);
      steps.push(`${n}: ${source} to ${target}`);
      moveRing(n - 1, aux, target, source);
    }
  }

  moveRing(N, A, B, C);

  return steps;
}

// Examples
console.log(migrateRings(2, "A", "B", "C")); // ["1: A to C", "2: A to B", "1: C to B"]
console.log(migrateRings(3, "A", "B", "C"));
// ["1: A to B", "2: A to C", "1: B to C", "3: A to B", "1: C to A", "2: C to B", "1: A to B"]
console.log(migrateRings(1, "A", "B", "C")); // ["1: A to B"]

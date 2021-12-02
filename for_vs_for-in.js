// try to write a the following loop with while and do-while:
for (var i = 0; i < a.length; i++) {
  console.log("for", i, a[i]);
}

let i = 0;
while (i < a.length) {
  i++;
  console.log("for", i, a[i]);
}

let e = 0;
do {
  e++;
  console.log("for", e, a[e]);
} while (e < a.length);

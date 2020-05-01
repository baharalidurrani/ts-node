import { localModule } from "./localModule";
setTimeout(() => {
  const some = 2121;
  // In VS Code press Command + Shift + P and select Debug: Toggle Auto Attach
  // Add break points here to test debugging
  console.log("some", some);
}, 2000);
console.log("Hello from", localModule);

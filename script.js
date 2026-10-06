const topic = document.getElementById("topic");
const task = document.getElementById("task");
const output = document.getElementById("output");
const status = document.getElementById("status");
const button = document.getElementById("generateBtn");

function generateDemo(topicText, taskType) {
  const title = topicText.trim();
  if (taskType === "explain") {
    return `${title}\n\nSimple explanation:\nThis topic can be understood by first learning its definition, then its main components, workflow, and real-world applications. Review one example and practice explaining it in your own words.`;
  }
  if (taskType === "notes") {
    return `Short Notes — ${title}\n\n1. Definition\n2. Key concepts\n3. Basic workflow\n4. Real-world applications\n5. Important points to revise`;
  }
  if (taskType === "questions") {
    return `Practice Questions — ${title}\n\n1. What is ${title}?\n2. Explain its main components.\n3. Give one real-world application.\n4. Compare two important concepts related to it.\n5. Write a short example.`;
  }
  return `Learning Roadmap — ${title}\n\nStep 1: Learn the fundamentals.\nStep 2: Practice small examples.\nStep 3: Build a mini project.\nStep 4: Solve exercises.\nStep 5: Build one portfolio project.`;
}

button.addEventListener("click", () => {
  const value = topic.value.trim();
  if (!value) {
    status.textContent = "Please enter a topic or question.";
    output.textContent = "";
    return;
  }
  status.textContent = "Generating demo response...";
  output.textContent = generateDemo(value, task.value);
  status.textContent = "Done.";
});

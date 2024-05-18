const jsonData = "todos/todos.json";

const getData = async () => {
  const response = await fetch(jsonData);
  if (response.status != 200) {
    throw new Error("ERROR!");
  }
  return await response.json();
};
const data = getData()
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err.message);
  });

const checkBtn = document.querySelector(".checkBtn");
const details = document.querySelector(".details");

checkBtn.addEventListener("click", async () => {
  try {
    const data = await getData();
    data.forEach((data, index) => {
      const key = `task${index + 1}`;
      //   console.log(data[key], data);
      details.innerHTML += `<li class="list">Task:${index + 1}: ${
        data[key]
      }</li>`;
    });
    console.log(data[0]["task1"]);
  } catch (err) {
    console.log(err.message);
  }
});

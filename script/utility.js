function getInnertextFieldById(id) {
  const innerText = document.getElementById(id);
  return innerText;
}
const blog = getInnertextFieldById("blog-btn");
blog.addEventListener("click", function () {
  blog.innerText = `Home`;
  const blogItem = document.createElement("div");
  blogItem.className = "items-center p-2 my-2";
  blogItem.innerHTML = `
   <h2 class="text-xl font-bold m-2">Important FAQ ??</h2>
<div class="collapse collapse-arrow bg-base-200 my-4">
  <input type="radio" name="my-accordion-2" checked="checked" />
  <div class="collapse-title text-xl font-medium">what is Document Object Model?</div>
  <div class="collapse-content">
    <p>DOM stands for Document Object Model. It is a programming interface that allows developers to manipulate the structure, style, and content of a web document, usually HTML or XML.</p>
  </div>
</div>
<div class="collapse collapse-arrow bg-base-200 my-4">
  <input type="radio" name="my-accordion-2" />
  <div class="collapse-title text-xl font-medium">How do you select an element from dom?</div>
  <div class="collapse-content">
    <p>To select an element from the DOM, use JavaScript methods like document.getElementById('id'), document.querySelector('.class or #id'), or document.getElementsByTagName('tag') to access specific elements.</p>
  </div>
</div>
<div class="collapse collapse-arrow bg-base-200 my-4">
  <input type="radio" name="my-accordion-2" />
  <div class="collapse-title text-xl font-medium"> How do you manipulate the element's attribute and styling using the DOM? </div>
  <div class="collapse-content">
    <p>To manipulate an element's attribute, use setAttribute('attr', value) or directly modify properties (e.g., element.id). For styling, update style properties, like element.style.color = 'red'.</p>
  </div>
</div>
<div class="collapse collapse-arrow bg-base-200 my-4">
  <input type="radio" name="my-accordion-2" />
  <div class="collapse-title text-xl font-medium">what is event delegation in the context of the DOM, and why is it useful?</div>
  <div class="collapse-content">
    <p>Event delegation is a technique where a parent element handles events for its child elements using event bubbling. It's useful for efficient event handling, especially for dynamically added elements.</p>
  </div>
</div>
`;
  const container = document.getElementById("accordian-container");
  container.appendChild(blogItem);
  container.classList.remove("hidden");
  const card = getInnertextFieldById("main-part");
  card.classList.add("hidden");
});
